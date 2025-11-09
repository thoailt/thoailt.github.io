import React from 'react';

/**
 * Footer component with social links and copyright
 * Displays social media icons and basic footer information
 */
interface FooterProps {
  config: {
    name: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      scholar?: string;
      orcid?: string;
    };
  };
}

export default function Footer({ config }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '', url: config.social.github },
    { name: 'LinkedIn', icon: '', url: config.social.linkedin },
    { name: 'Twitter', icon: '🐦', url: config.social.twitter },
    { name: 'Google Scholar', icon: '', url: config.social.scholar },
    { name: 'ORCID', icon: '🔬', url: config.social.orcid },
  ].filter((link) => link.url); // Only show links that are defined

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left section - Name and tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{config.name}</h3>
            <p className="text-gray-400">
              Ho Chi Minh City University of Education - Faculty of Information Technology
            </p>
          </div>

          {/* Right section - Social links */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-sm text-gray-400 mb-4">Connect with me: <a href="mailto:thoailt@hcmue.edu.vn"><b>Email</b></a></p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {currentYear} <a style={{ fontWeight: 'bold'}} href="https://thoailt.com">{config.name}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
