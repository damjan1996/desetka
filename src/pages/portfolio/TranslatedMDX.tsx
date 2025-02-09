// components/TranslatedMDX.tsx
import React from 'react';

interface TranslatedMDXProps {
    content: React.ComponentType;
}

const TranslatedMDX: React.FC<TranslatedMDXProps> = ({ content: Content }) => {
    return (
        <div className="mdx-content">
            <Content />
        </div>
    );
};

export default TranslatedMDX;
