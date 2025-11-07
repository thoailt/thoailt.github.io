import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import BackToTop from './BackToTop';

/**
 * Layout component that wraps all pages
 * Provides consistent header, footer, SEO, and back to top button
 */
interface LayoutProps {
  children: React.ReactNode;
  config: any;
  title?: string;
  description?: string;
}

export default function Layout({ children, config, title, description }: LayoutProps) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        config={config}
      />
      <div className="min-h-screen flex flex-col">
        <Header config={config} />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer config={config} />
        <BackToTop />
      </div>
    </>
  );
}
