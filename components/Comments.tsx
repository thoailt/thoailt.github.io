import React, { useEffect, useRef } from "react";

interface CommentsProps {
  repo: string; // format: "username/repo"
  theme?: string;
}

export default function Comments({
  repo,
  theme = "github-light",
}: CommentsProps) {
  const commentBox = useRef<HTMLDivElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!repo || !commentBox.current) return;

    // Prevent double loading in React Strict Mode
    if (isLoadedRef.current) return;

    const container = commentBox.current;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", theme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
    isLoadedRef.current = true;
  }, [repo, theme]);

  if (!repo) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
      <div ref={commentBox} />
    </div>
  );
}
