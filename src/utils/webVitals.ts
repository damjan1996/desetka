import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

function sendToAnalytics(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id
  });
  
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_rating: metric.rating,
      metric_delta: metric.delta
    });
  }
  
  // Dispatch custom event for Performance Monitor
  window.dispatchEvent(new CustomEvent('web-vitals', {
    detail: {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      timestamp: Date.now()
    }
  }));
  
  // Also send to your analytics endpoint if needed
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body);
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Helper function to get Web Vitals score
export function getWebVitalsScore(metric: Metric): string {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    INP: { good: 200, poor: 500 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 }
  };

  const threshold = thresholds[metric.name as keyof typeof thresholds];
  if (!threshold) return 'unknown';

  if (metric.value <= threshold.good) return 'good';
  if (metric.value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}