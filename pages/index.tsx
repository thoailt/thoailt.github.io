import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';

/**
 * Homepage component with preview sections
 * Shows highlights and links to dedicated pages for full content
 */
interface HomeProps {
  config: any;
  recentPublications: any[];
  recentBlogPosts: any[];
}

export default function Home({ config, recentPublications, recentBlogPosts }: HomeProps) {
  return (
    <Layout config={config}>
      {/* Hero Section with Avatar */}
      <section id="hero" className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center md:text-left animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                  {config.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-4">{config.title}</p>
                <p className="text-lg text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: config.bio }} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto md:mx-0">
                  <a href="/about" className="btn-primary flex items-center justify-center text-sm md:text-base whitespace-nowrap">
                    About
                  </a>
                  <a href="/publications" className="btn-secondary flex items-center justify-center text-sm md:text-base whitespace-nowrap">
                    Publications
                  </a>
                  <a href="/blog" className="btn-secondary flex items-center justify-center text-sm md:text-base whitespace-nowrap">
                    Blog
                  </a>
                  <a href="/contact" className="btn-secondary flex items-center justify-center text-sm md:text-base whitespace-nowrap">
                    Contact
                  </a>
                </div>
              </div>

              {/* Right side - Avatar */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  {config.avatar ? (
                    <img
                      src={config.avatar}
                      alt={config.name}
                      className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                    />
                  ) : (
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-8xl font-bold shadow-2xl border-4 border-white">
                      {config.name.charAt(0)}
                    </div>
                  )}
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-primary-200 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gradient">About Me</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a passionate {config.title.toLowerCase()} dedicated to building innovative
                solutions and conducting impactful research. With expertise spanning multiple
                domains, I strive to create technology that makes a difference.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                My work focuses on leveraging cutting-edge technologies to solve real-world
                problems. I believe in open-source collaboration and knowledge sharing.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {config.social.github && (
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
              {config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
              {config.social.scholar && (
                <a
                  href={config.social.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
                  </svg>
                  Google Scholar
                </a>
              )}
            </div>

            {/* View All About Me Button */}
            <div className="text-center mt-12">
              <a href="/about" className="btn-primary inline-flex items-center gap-2">
                View Full About Me
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section id="publications" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Recent Publications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest research in peer-reviewed journals and conferences
            </p>
          </div>

          {recentPublications.length > 0 ? (
            <>
              <div className="max-w-4xl mx-auto space-y-6 mb-8">
                {recentPublications.map((pub, index) => (
                  <article key={pub.id} className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-700 mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      <span className="italic">{pub.venue}</span>, {pub.year}
                    </p>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                  </article>
                ))}
              </div>
              <div className="text-center">
                <a href="/publications" className="btn-primary inline-block">
                  View All Publications →
                </a>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Publications coming soon!
            </p>
          )}
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Latest Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on technology and research
            </p>
          </div>

          {recentBlogPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {recentBlogPosts.map((post) => (
                  <article key={post.slug} className="card p-6 flex flex-col">
                    <time className="text-sm text-gray-500 mb-2">{post.date}</time>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <a
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
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
              <div className="text-center">
                <a href="/blog" className="btn-primary inline-block">
                  View All Posts →
                </a>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Blog posts coming soon!
            </p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium mb-2">Email</p>
                <a
                  href={`mailto:${config.email}`}
                  className="text-primary-600 hover:text-primary-700 text-lg"
                >
                  {config.email}
                </a>
              </div>
              {config.phone && (
                <div>
                  <p className="text-gray-700 font-medium mb-2">Phone</p>
                  <a
                    href={`tel:${config.phone}`}
                    className="text-primary-600 hover:text-primary-700 text-lg"
                  >
                    {config.phone}
                  </a>
                </div>
              )}
              <div>
                <p className="text-gray-700 font-medium mb-2">Location</p>
                <p className="text-gray-600 text-lg">{config.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * Static Site Generation
 * Reads data from JSON files at build time
 */
export const getStaticProps: GetStaticProps = async () => {
  const dataDir = path.join(process.cwd(), 'data');
  const postsDir = path.join(process.cwd(), 'posts');

  // Read configuration
  const configPath = path.join(dataDir, 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // Read publications and get recent ones
  const publicationsPath = path.join(dataDir, 'publications.json');
  const allPublications = JSON.parse(fs.readFileSync(publicationsPath, 'utf8')).sort(
    (a: any, b: any) => b.year - a.year
  );
  const recentPublications = allPublications.slice(0, 4); // Show top 4 recent publications

  // Read blog posts and get recent ones
  let recentBlogPosts: any[] = [];
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));
    const allPosts = postFiles
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
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    recentBlogPosts = allPosts.slice(0, 3); // Show top 3 recent posts
  }

  return {
    props: {
      config,
      recentPublications,
      recentBlogPosts,
    },
  };
};
