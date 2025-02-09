import React, { useState } from 'react';

const SkipToContent: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 px-4 py-2 bg-orange-500 text-white rounded-lg
        transform transition-transform duration-200
        ${isFocused ? 'translate-y-0' : '-translate-y-full'}
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent