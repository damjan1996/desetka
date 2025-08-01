// Font loading utility to ensure fonts are loaded before showing content
export const preloadFonts = async () => {
  if ('fonts' in document) {
    try {
      await document.fonts.load('1em Inter');
      document.documentElement.classList.add('fonts-loaded');
    } catch (err) {
      console.warn('Font loading failed:', err);
      // Fallback to system fonts
      document.documentElement.classList.add('fonts-fallback');
    }
  }
};

// Call this function as early as possible
export const initializeFonts = () => {
  // Add loading class immediately
  document.documentElement.classList.add('fonts-loading');
  
  // Start font loading
  preloadFonts();
  
  // Remove loading class after a timeout to prevent indefinite loading state
  setTimeout(() => {
    document.documentElement.classList.remove('fonts-loading');
    if (!document.documentElement.classList.contains('fonts-loaded')) {
      document.documentElement.classList.add('fonts-fallback');
    }
  }, 3000);
};