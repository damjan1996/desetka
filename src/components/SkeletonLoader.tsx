import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => (
  <div className={`animate-pulse bg-gray-700/50 rounded ${className}`}></div>
);

export const BlogPostSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <Skeleton className="h-8 w-3/4 mb-4" />
    <Skeleton className="h-4 w-1/4 mb-8" />
    <Skeleton className="h-[400px] w-full mb-8 rounded-xl" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  </div>
);

export const ProjectSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <Skeleton className="h-8 w-2/3 mb-4" />
    <div className="flex gap-4 mb-8">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-24" />
    </div>
    <Skeleton className="h-[400px] w-full mb-8 rounded-xl" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  </div>
);

export const PortfolioSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <Skeleton className="h-8 w-48 mx-auto mb-12" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-[4/3]">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
      ))}
    </div>
  </div>
);