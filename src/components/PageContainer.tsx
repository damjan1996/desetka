// components/PageContainer.tsx
import React, { Suspense } from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Suspense fallback={null}>
                <main className="flex-1 pt-16">
                    {children}
                </main>
            </Suspense>
        </div>
    );
};

export default PageContainer;