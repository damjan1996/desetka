import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  currentTitle?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentTitle }) => {
  const location = useLocation();

  // Definiere die feste Struktur der Breadcrumbs
  const generateBreadcrumbs = () => {
    const segments = location.pathname.split('/').filter(Boolean);

    // Basis-Breadcrumb-Struktur
    const breadcrumbs = [];

    // Portfolio ist immer der erste Level nach Home
    if (segments.includes('portfolio')) {
      breadcrumbs.push({
        title: 'Portfolio',
        path: '/portfolio',
        isLast: segments.length === 1
      });
    }

    // Wenn wir in einem Projekt sind, füge den Projekttitel hinzu
    if (segments.length > 1 && currentTitle) {
      breadcrumbs.push({
        title: currentTitle,
        path: location.pathname,
        isLast: true
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Wenn wir nur auf der Homepage sind, zeigen wir keine Breadcrumbs
  if (location.pathname === '/') return null;

  return (
      <nav className="flex items-center gap-2 py-4 sm:py-6">
        {/* Home ist immer der erste Link */}
        <Link
            to="/"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
        >
          Home
        </Link>

        {breadcrumbs.map((crumb) => (
            <React.Fragment key={crumb.path}>
              <ChevronRight className="h-4 w-4 text-zinc-600" />

              {crumb.isLast ? (
                  <span className="text-white font-medium">
              {crumb.title}
            </span>
              ) : (
                  <Link
                      to={crumb.path}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {crumb.title}
                  </Link>
              )}
            </React.Fragment>
        ))}
      </nav>
  );
};

export default Breadcrumbs;
