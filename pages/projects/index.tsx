import React, { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

/**
 * Projects listing page
 * Displays all projects with search and filter functionality
 */
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
}

interface ProjectsProps {
  config: any;
  projects: Project[];
}

export default function Projects({ config, projects }: ProjectsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Get all unique years
  const years = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      const matchesYear = !selectedYear || project.year === selectedYear;
      return matchesSearch && matchesTag && matchesYear;
    });
  }, [projects, searchTerm, selectedTag, selectedYear]);

  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <Layout
      config={config}
      title={`Projects | ${config.name}`}
      description="A showcase of my projects and open-source contributions"
    >
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Projects</h1>
          <p className="text-xl text-gray-600">
            A showcase of my projects and open-source contributions
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
            <div>
              <span className="font-bold text-2xl text-primary-600">
                {projects.length}
              </span>
              <span className="ml-2">Total Projects</span>
            </div>
            <div className="border-l border-gray-300 pl-4">
              <span className="font-bold text-2xl text-primary-600">
                {allTags.length}
              </span>
              <span className="ml-2">Technologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search projects by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search projects"
            />
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Tag filter */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Filter by technology:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTag === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

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
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div>
              {featuredProjects.length > 0 && (
                <h2 className="text-3xl font-bold text-gray-900 mb-6">All Projects</h2>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                  setSelectedYear(null);
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
 * Get all projects at build time
 */
export const getStaticProps: GetStaticProps = async () => {
  const configPath = path.join(process.cwd(), 'data', 'siteConfig.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8')).sort(
    (a: Project, b: Project) => b.year - a.year
  );

  return {
    props: {
      config,
      projects,
    },
  };
};
