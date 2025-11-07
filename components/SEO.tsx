import React from 'react';
import Head from 'next/head';

/**
 * SEO component for meta tags and OpenGraph
 * Handles all SEO-related meta tags including OpenGraph and Twitter Cards
 */
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  config: {
    seo: {
      title: string;
      description: string;
      keywords: string;
      author: string;
      siteUrl: string;
      image: string;
      twitterHandle: string;
    };
  };
}

export default function SEO({ title, description, image, url, config }: SEOProps) {
  const seo = {
    title: title || config.seo.title,
    description: description || config.seo.description,
    image: image || config.seo.image,
    url: url || config.seo.siteUrl,
  };

  // Construct full URLs for images
  const fullImageUrl = seo.image.startsWith('http')
    ? seo.image
    : `${config.seo.siteUrl}${seo.image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={config.seo.keywords} />
      <meta name="author" content={config.seo.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.seo.title} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.seo.twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/images/logo-fav.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
    </Head>
  );
}
