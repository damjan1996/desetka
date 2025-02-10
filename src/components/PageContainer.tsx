// components/PageContainer.tsx
import React from 'react';
import Footer from './Footer';

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageContainer;