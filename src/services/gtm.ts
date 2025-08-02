/**
 * Google Tag Manager Event Service
 * Zentrale Verwaltung aller GTM Data Layer Events
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialisiere dataLayer falls nicht vorhanden
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

/**
 * Push event to GTM dataLayer
 */
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

/**
 * Track page view
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmit = (formData: {
  name?: string;
  email?: string;
  subject?: string;
}) => {
  pushToDataLayer({
    event: 'contact_form_submit',
    event_category: 'engagement',
    event_label: 'contact_form',
    form_name: formData.name,
    form_subject: formData.subject,
  });
};

/**
 * Track portfolio project click
 */
export const trackProjectClick = (projectName: string, projectCategory?: string) => {
  pushToDataLayer({
    event: 'project_click',
    event_category: 'portfolio',
    event_label: projectName,
    project_name: projectName,
    project_category: projectCategory,
  });
};

/**
 * Track blog post view
 */
export const trackBlogPostView = (postTitle: string, postCategory?: string) => {
  pushToDataLayer({
    event: 'blog_post_view',
    event_category: 'content',
    event_label: postTitle,
    post_title: postTitle,
    post_category: postCategory,
  });
};

/**
 * Track social link click
 */
export const trackSocialClick = (platform: string) => {
  pushToDataLayer({
    event: 'social_click',
    event_category: 'social',
    event_label: platform,
    social_platform: platform,
  });
};

/**
 * Track file download
 */
export const trackDownload = (fileName: string, fileType: string) => {
  pushToDataLayer({
    event: 'file_download',
    event_category: 'download',
    event_label: fileName,
    file_name: fileName,
    file_type: fileType,
  });
};

/**
 * Track navigation click
 */
export const trackNavigation = (navigationItem: string, navigationType: 'header' | 'footer' | 'menu') => {
  pushToDataLayer({
    event: 'navigation_click',
    event_category: 'navigation',
    event_label: navigationItem,
    navigation_item: navigationItem,
    navigation_type: navigationType,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  pushToDataLayer({
    event: 'scroll_depth',
    event_category: 'engagement',
    event_label: `${depth}%`,
    scroll_depth: depth,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  pushToDataLayer({
    event: 'time_on_page',
    event_category: 'engagement',
    event_label: pagePath,
    time_seconds: seconds,
    page_path: pagePath,
  });
};

/**
 * Track CTA button click
 */
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  pushToDataLayer({
    event: 'cta_click',
    event_category: 'conversion',
    event_label: ctaText,
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
};

/**
 * Track language change
 */
export const trackLanguageChange = (oldLang: string, newLang: string) => {
  pushToDataLayer({
    event: 'language_change',
    event_category: 'preference',
    event_label: `${oldLang}_to_${newLang}`,
    old_language: oldLang,
    new_language: newLang,
  });
};

/**
 * Track FAQ interaction
 */
export const trackFAQInteraction = (question: string, action: 'open' | 'close') => {
  pushToDataLayer({
    event: 'faq_interaction',
    event_category: 'engagement',
    event_label: question,
    faq_question: question,
    faq_action: action,
  });
};

/**
 * Track error
 */
export const trackError = (errorMessage: string, errorType: string) => {
  pushToDataLayer({
    event: 'error',
    event_category: 'error',
    event_label: errorType,
    error_message: errorMessage,
    error_type: errorType,
  });
};