import React, { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import PublicationCard from '@/components/PublicationCard';

/**
 * Publications listing page
 * Displays all publications with search and filter functionality
 */
interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  pdf?: string;
  abstract?: string;
  type: 'journal' | 'conference' | 'magazine' | 'workshop';
  tags?: string[];
}

interface PublicationsProps {
  config: any;
  publications: Publication[];
}

export default function Publications({ config, publications }: PublicationsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique years and types
  const years = useMemo(() => {
    return Array.from(new Set(publications.map((pub) => pub.year))).sort((a, b) => b - a);
  }, [publications]);

  const types = useMemo(() => {
    return Array.from(new Set(publications.map((pub) => pub.type))).sort();
  }, [publications]);

  // Filter publications
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = !selectedYear || pub.year === selectedYear;
      const matchesType = !selectedType || pub.type === selectedType;
      return matchesSearch && matchesYear && matchesType;
    });
  }, [publications, searchTerm, selectedYear, selectedType]);

  // Group by year
  const publicationsByYear = useMemo(() => {
    const grouped: { [year: number]: Publication[] } = {};
    filteredPublications.forEach((pub) => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = [];
      }
      grouped[pub.year].push(pub);
    });
    return grouped;
  }, [filteredPublications]);

  return (
    <Layout
      config={config}
      title={`Publications | ${config.name}`}
      description="Research publications in peer-reviewed journals and conferences"
    >
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Publications</h1>
          <p className="text-xl text-gray-600">
            Research publications in peer-reviewed journals and conferences
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
            <div>
              <span className="font-bold text-2xl text-primary-600">
                {publications.length}
              </span>
              <span className="ml-2">Total Publications</span>
            </div>
            <div className="border-l border-gray-300 pl-4">
              <span className="font-bold text-2xl text-primary-600">
                {years.length}
              </span>
              <span className="ml-2">Years Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by title, author, or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search publications"
            />
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Year filter */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Filter by year:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedYear === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedYear === year
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Type filter */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Filter by type:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                    selectedType === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Types
                </button>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                      selectedType === type
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Publications List */}
          {Object.keys(publicationsByYear).length > 0 ? (
            <div className="space-y-8">
              {Object.keys(publicationsByYear)
                .sort((a, b) => Number(b) - Number(a))
                .map((year) => (
                  <div key={year}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                      {year}
                    </h2>
                    <div className="space-y-4">
                      {publicationsByYear[Number(year)].map((pub, index) => (
                        <PublicationCard key={pub.id} publication={pub} index={index} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No publications found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedYear(null);
                  setSelectedType(null);
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

/**
 * Get all publications at build time
 */
export const getStaticProps: GetStaticProps = async () => {
  const configPath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  const publicationsPath = path.join(process.cwd(), 'data', 'publications.json');
  const publications = JSON.parse(fs.readFileSync(publicationsPath, 'utf8')).sort(
    (a: Publication, b: Publication) => b.year - a.year
  );

  return {
    props: {
      config,
      publications,
    },
  };
};
