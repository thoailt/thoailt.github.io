import React from 'react';

/**
 * PublicationCard component for displaying publication information
 * Renders IEEE-style citations for academic publications
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

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

/**
 * Formats authors in IEEE style
 * Highlights the current user's name (assuming "Your Name" is the user)
 */
function formatAuthors(authors: string[]): JSX.Element[] {
  return authors.map((author, idx) => {
    const isLastAuthor = idx === authors.length - 1;
    const isSecondToLast = idx === authors.length - 2;
    const separator = isLastAuthor ? '' : isSecondToLast ? ' and ' : ', ';

    // Highlight "Your Name" - you can customize this
    const isHighlighted = author === 'Your Name';

    return (
      <span key={idx}>
        <span className={isHighlighted ? 'font-semibold' : ''}>
          {author}
        </span>
        {separator}
      </span>
    );
  });
}

/**
 * Generates IEEE-style citation
 */
function generateIEEECitation(pub: Publication): string {
  const authors = pub.authors.join(', ');
  let citation = `${authors}, "${pub.title}," `;

  if (pub.type === 'journal' || pub.type === 'magazine') {
    citation += `${pub.venue}`;
    if (pub.volume) citation += `, vol. ${pub.volume}`;
    if (pub.issue) citation += `, no. ${pub.issue}`;
    if (pub.pages) citation += `, pp. ${pub.pages}`;
    citation += `, ${pub.year}.`;
  } else if (pub.type === 'conference' || pub.type === 'workshop') {
    citation += `in ${pub.venue}`;
    if (pub.pages) citation += `, pp. ${pub.pages}`;
    citation += `, ${pub.year}.`;
  }

  if (pub.doi) {
    citation += ` doi: ${pub.doi}`;
  }

  return citation;
}

export default function PublicationCard({ publication, index }: PublicationCardProps) {
  const [showAbstract, setShowAbstract] = React.useState(false);

  return (
    <article className="card p-6 hover:shadow-xl transition-shadow">
      {/* Publication Number */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">
          {index + 1}
        </span>

        <div className="flex-grow">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {publication.title}
          </h3>

          {/* Authors */}
          <p className="text-gray-700 mb-2">
            {formatAuthors(publication.authors)}
          </p>

          {/* Venue and Details */}
          <p className="text-gray-600 text-sm mb-2">
            <span className="italic">{publication.venue}</span>
            {publication.volume && `, vol. ${publication.volume}`}
            {publication.issue && `, no. ${publication.issue}`}
            {publication.pages && `, pp. ${publication.pages}`}
            {`, ${publication.year}`}
          </p>

          {/* DOI */}
          {publication.doi && (
            <p className="text-sm text-gray-500 mb-3">
              DOI:{' '}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                {publication.doi}
              </a>
            </p>
          )}

          {/* Tags */}
          {publication.tags && publication.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Abstract Toggle */}
          {publication.abstract && (
            <div className="mb-3">
              <button
                onClick={() => setShowAbstract(!showAbstract)}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                aria-expanded={showAbstract}
              >
                {showAbstract ? '− Hide Abstract' : '+ Show Abstract'}
              </button>
              {showAbstract && (
                <p className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-primary-200 animate-fade-in">
                  {publication.abstract}
                </p>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {publication.pdf && (
              <a
                href={publication.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                aria-label={`Download PDF of ${publication.title}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
