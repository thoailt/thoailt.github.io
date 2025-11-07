import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Header component with responsive navigation and smooth scroll
 * Displays site logo, navigation links, and mobile menu toggle
 */
interface HeaderProps {
  config: {
    name: string;
    navigation: Array<{ name: string; href: string }>;
  };
}

export default function Header({ config }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks - smooth scroll for hash links on same page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);

    // Handle hash links on current page (e.g., /#about when on homepage)
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      if (hash) {
        // If we're on the homepage or the link starts with /#
        if (window.location.pathname === '/' || href.startsWith('/#')) {
          e.preventDefault();
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom section-padding py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
            {config.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {config.navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 animate-fade-in">
            {config.navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
