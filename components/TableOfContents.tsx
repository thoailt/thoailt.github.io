import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Parse headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4");

    const items: TOCItem[] = Array.from(headingElements).map(
      (heading, index) => {
        const level = parseInt(heading.tagName.substring(1));
        const text = heading.textContent || "";
        const id = heading.id || `heading-${index}`;

        // Add id to heading if it doesn't exist
        if (!heading.id) {
          heading.id = id;
        }

        return { id, text, level };
      }
    );

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    // Add IDs to actual DOM headings
    const actualHeadings = document.querySelectorAll(
      ".prose h1, .prose h2, .prose h3, .prose h4"
    );

    actualHeadings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });

    // Set initial active heading
    if (actualHeadings.length > 0 && !activeId) {
      setActiveId(actualHeadings[0].id);
    }

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    actualHeadings.forEach((heading) => observer.observe(heading));

    return () => {
      actualHeadings.forEach((heading) => observer.unobserve(heading));
    };
  }, [headings, activeId]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile TOC - Collapsible at top */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="font-medium text-gray-900">Table of Contents</span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <nav className="mt-2 p-4 bg-white rounded-lg border border-gray-200">
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                >
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left w-full text-sm hover:text-primary-600 transition-colors ${
                      activeId === heading.id
                        ? "text-primary-600 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop TOC - Fixed sticky sidebar */}
      <nav className="hidden lg:block relative">
        <div className="sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto z-10">
          <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <svg
                className="w-5 h-5 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <h4 className="font-bold text-gradient">Table of Contents</h4>
            </div>
            <ul className="space-y-1">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                >
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left text-sm w-full py-2 px-3 rounded-md transition-all ${
                      activeId === heading.id
                        ? "bg-sky-100 text-sky-700 font-semibold shadow-sm"
                        : "text-gray-600 hover:text-sky-600 hover:bg-gray-50"
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
