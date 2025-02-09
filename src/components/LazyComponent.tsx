import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ children, fallback = <LoadingSpinner /> }) => {
  return (
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
  );
};

export default LazyComponent;
