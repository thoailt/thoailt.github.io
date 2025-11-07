import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Layout from '@/components/Layout';

/**
 * Blog post detail page
 * Renders individual blog posts from Markdown files
 */
interface BlogPostProps {
  config: any;
  frontmatter: {
    title: string;
    date: string;
    author?: string;
    tags?: string[];
    excerpt?: string;
  };
  content: string;
  slug: string;
}

export default function BlogPost({ config, frontmatter, content, slug }: BlogPostProps) {
  return (
    <Layout
      config={config}
      title={`${frontmatter.title} | ${config.name}`}
      description={frontmatter.excerpt || frontmatter.title}
    >
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back link */}
          <a
            href="/#blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </a>

          {/* Post header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              {frontmatter.author && (
                <>
                  <span>•</span>
                  <span>By {frontmatter.author}</span>
                </>
              )}
            </div>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Post footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/#blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to all posts
            </a>
          </footer>
        </div>
      </article>
    </Layout>
  );
}

/**
 * Generate static paths for all blog posts
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), 'posts');

  // Check if posts directory exists
  if (!fs.existsSync(postsDir)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * Get static props for individual blog post
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Read site config
  const configPath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // Read blog post
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content
  const { data: frontmatter, content: markdownContent } = matter(fileContents);

  // Convert markdown to HTML
  const content = marked(markdownContent);

  return {
    props: {
      config,
      frontmatter,
      content,
      slug,
    },
  };
};
