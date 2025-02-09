import { useState } from 'react';
import { ImageOff } from 'lucide-react';

declare module 'react' {
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
                                                               src,
                                                               alt,
                                                               className = '',
                                                               sizes = '100vw',
                                                               loading = 'lazy',
                                                               fetchpriority = 'auto'
                                                             }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return (
        <div className={`flex items-center justify-center bg-gray-900 ${className}`}>
          <div className="text-center p-4">
            <ImageOff className="h-8 w-8 mx-auto mb-2 text-gray-500" />
            <span className="text-sm text-gray-500">{alt}</span>
          </div>
        </div>
    );
  }

  return (
      <div className="relative">
        {isLoading && (
            <div className={`absolute inset-0 bg-gray-900/50 animate-pulse ${className}`} />
        )}
        <img
            src={src}
            alt={alt}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            loading={loading}
            fetchpriority={fetchpriority}
            sizes={sizes}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
            decoding="async"
        />
      </div>
  );
};

export default ImageWithFallback;
