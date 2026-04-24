import React from 'react';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs Component
 * Displays navigation hierarchy for better UX and SEO
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      <ol className="flex items-center gap-2">
        {/* Home link */}
        <li>
          <Link href="/">
            <a className="text-amber-700 hover:text-amber-900 transition-colors">
              Inicio
            </a>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            
            {item.href ? (
              <Link href={item.href}>
                <a className="text-amber-700 hover:text-amber-900 transition-colors">
                  {item.label}
                </a>
              </Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: 'https://institutoascendant.com/',
            },
            ...items.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              name: item.label,
              item: item.href ? `https://institutoascendant.com${item.href}` : undefined,
            })),
          ].filter(item => item.item !== undefined),
        })}
      </script>
    </nav>
  );
};

export default Breadcrumbs;
