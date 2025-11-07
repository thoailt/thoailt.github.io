import React, { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';

/**
 * Blog listing page
 * Displays all blog posts with search and filter functionality
 */
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
}

interface BlogIndexProps {
  config: any;
  posts: BlogPost[];
}

export default function BlogIndex({ config, posts }: BlogIndexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || post.tags?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  return (
    <Layout
      config={config}
      title={`Blog | ${config.name}`}
      description="Technical articles, tutorials, and thoughts on software development and research"
    >
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-gradient pb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Technical articles, tutorials, and insights on software development and research
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search blog posts"
            />
          </div>

          {/* Tag filters */}
          {allTags.length > 0 && (
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-3">Filter by tag:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTag === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Posts
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="card p-6 flex flex-col">
                  <time className="text-sm text-gray-500 mb-2">{post.date}</time>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    <a
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

/**
 * Get all blog posts at build time
 */
export const getStaticProps: GetStaticProps = async () => {
  const configPath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  const postsDir = path.join(process.cwd(), 'posts');
  let posts: BlogPost[] = [];

  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));

    posts = postFiles
      .map((filename) => {
        const slug = filename.replace('.md', '');
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          author: data.author || config.name,
          tags: data.tags || [],
          excerpt: data.excerpt || 'Read this blog post to learn more...',
        };
      })
      .sort((a, b) => {
        // Sort by date descending
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }

  return {
    props: {
      config,
      posts,
    },
  };
};
