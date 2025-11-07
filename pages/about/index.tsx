import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Layout from '@/components/Layout';

/**
 * About page with education, awards, and background
 */
interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  gpa?: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface AboutProps {
  config: any;
  education: Education[];
  awards: Award[];
}

export default function About({ config, education, awards }: AboutProps) {
  return (
    <Layout
      config={config}
      title={`About | ${config.name}`}
      description={`Learn more about ${config.name} - education, awards, and professional background`}
    >
      {/* Hero Section with Avatar */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
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
                <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-primary-200 opacity-50"></div>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center md:text-left order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                About Me
              </h1>
              <p className="text-xl text-gray-700 mb-4">{config.title}</p>
              <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: config.bio }} />
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-primary-600 mb-1">{edu.institution}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-lg font-semibold text-gray-700">{edu.year}</p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Honors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Awards & Honors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  {/* Award icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-primary-600 font-medium mb-1">{award.organization}</p>
                    <p className="text-sm text-gray-500 mb-2">{award.year}</p>
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient pb-10">Background</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              I'm a passionate {config.title.toLowerCase()} dedicated to building innovative
              solutions and conducting impactful research. With expertise spanning multiple
              domains, I strive to create technology that makes a difference.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              My work focuses on leveraging cutting-edge technologies to solve real-world
              problems. I believe in open-source collaboration and knowledge sharing, and I'm
              always excited to connect with fellow researchers and developers.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gradient mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              Interested in collaboration or have a question? Feel free to reach out!
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get In Touch →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * Get data at build time
 */
export const getStaticProps: GetStaticProps = async () => {
  const configPath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  return {
    props: {
      config,
      education: config.education || [],
      awards: config.awards || [],
    },
  };
};
