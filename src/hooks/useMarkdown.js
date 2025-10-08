import { useState, useEffect } from 'react';

export const useMarkdown = (filename) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filename) return;

    fetch(`/contents/${filename}.md`)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [filename]);

  return { content, loading, error };
};
