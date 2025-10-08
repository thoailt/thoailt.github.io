import { useState, useEffect } from 'react';
import yaml from 'js-yaml';

export const useConfig = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/contents/config.yml')
      .then(response => response.text())
      .then(text => {
        const data = yaml.load(text);
        setConfig(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { config, loading, error };
};
