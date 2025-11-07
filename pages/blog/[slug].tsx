import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import ShareButtons from "@/components/ShareButtons";
import Comments from "@/components/Comments";

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
    coverImage?: string;
  };
  content: string;
  slug: string;
}

export default function BlogPost({
  config,
  frontmatter,
  content,
  slug,
}: BlogPostProps) {
  // Determine the image for SEO and sharing
  const shareImage = frontmatter.coverImage
    ? frontmatter.coverImage
    : config.seo?.image || "/images/logo.svg";

  const fullUrl = `${
    config.seo?.siteUrl || "https://thoailt.com"
  }/blog/${slug}`;

  React.useEffect(() => {
    // Load Prism.js for syntax highlighting
    const loadPrism = () => {
      // Load Prism CSS
      if (!document.getElementById("prism-css")) {
        const link = document.createElement("link");
        link.id = "prism-css";
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
        document.head.appendChild(link);
      }

      // Load Prism JS
      if (!(window as any).Prism) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
        script.onload = () => {
          // Load language plugins
          const languages = [
            "python",
            "javascript",
            "bash",
            "typescript",
            "jsx",
            "tsx",
            "html",
            "css",
            "json",
          ];
          languages.forEach((lang) => {
            const langScript = document.createElement("script");
            langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
            langScript.onload = () => {
              if ((window as any).Prism) {
                (window as any).Prism.highlightAll();
              }
            };
            document.head.appendChild(langScript);
          });
        };
        document.head.appendChild(script);
      } else {
        (window as any).Prism.highlightAll();
      }
    };

    loadPrism();

    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement;
      if (!pre) return;

      // Skip if button already exists
      if (pre.querySelector(".copy-button")) return;

      // Add relative position to pre
      pre.style.position = "relative";

      // Create copy button
      const button = document.createElement("button");
      button.className =
        "copy-button absolute right-2 top-2 w-7 h-7 flex items-center justify-center rounded bg-gray-800/70 hover:bg-gray-700/90 text-gray-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all";
      button.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      `;
      button.title = "Copy code";

      // Add hover class to pre for button visibility
      pre.classList.add("group");

      // Copy functionality
      button.onclick = async () => {
        const code = codeBlock.textContent || "";
        try {
          await navigator.clipboard.writeText(code);
          // Show success icon
          button.innerHTML = `
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          `;
          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = `
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            `;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };

      pre.appendChild(button);
    });
  }, [content]);
  return (
    <Layout
      config={config}
      title={`${frontmatter.title} | ${config.name}`}
      description={frontmatter.excerpt || frontmatter.title}
      image={shareImage}
      url={fullUrl}
    >
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back link */}
          <a
            href="/blog"
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

          {/* Cover Image */}
          {frontmatter.coverImage && (
            <div className="mb-8 -mx-4 sm:mx-0">
              <img
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96"
              />
            </div>
          )}

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Share Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <ShareButtons
              url={fullUrl}
              title={frontmatter.title}
              image={`${
                config.seo?.siteUrl || "https://thoailt.com"
              }${shareImage}`}
            />
          </div>

          {/* Comments Section */}
          <Comments repo="thoailt/thoailt.github.io" theme="github-light" />

          {/* Post footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/blog"
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
  const postsDir = path.join(process.cwd(), "posts");

  // Check if posts directory exists
  if (!fs.existsSync(postsDir)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
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
  const configPath = path.join(process.cwd(), "data", "siteConfig.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  // Read blog post
  const postsDir = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

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
