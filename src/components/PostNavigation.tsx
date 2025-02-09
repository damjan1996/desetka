import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationItem {
  title: string;
  slug: string;
}

interface PostNavigationProps {
  previous?: NavigationItem;
  next?: NavigationItem;
  basePath: string;
}

const PostNavigation: React.FC<PostNavigationProps> = ({ previous, next, basePath }) => {
  if (!previous && !next) return null;

  return (
    <nav className="border-t border-white/10 mt-12 pt-8">
      <div className="flex justify-between">
        {previous ? (
          <Link
            to={`${basePath}/${previous.slug}`}
            className="group flex items-center text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-sm text-white/40">Previous</div>
              <div className="line-clamp-1">{previous.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`${basePath}/${next.slug}`}
            className="group flex items-center text-right text-white/60 hover:text-white transition-colors"
          >
            <div>
              <div className="text-sm text-white/40">Next</div>
              <div className="line-clamp-1">{next.title}</div>
            </div>
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

export default PostNavigation