interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export default function ResponsiveImage({
                                          src,
                                          alt,
                                          className = '',
                                          sizes = '100vw',
                                          loading = 'lazy',
                                          fetchpriority = 'auto'
                                        }: ResponsiveImageProps) {
  // Generate Unsplash responsive URLs
  const generateSrcSet = (url: string) => {
    if (!url.includes('unsplash.com')) return undefined;

    const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    return widths
        .map((w) => {
          const modifiedUrl = url.replace(/w=\d+/, `w=${w}`);
          return `${modifiedUrl} ${w}w`;
        })
        .join(', ');
  };

  const srcSet = generateSrcSet(src);

  return (
      <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          fetchpriority={fetchpriority}
          sizes={sizes}
          srcSet={srcSet}
      />
  );
}
