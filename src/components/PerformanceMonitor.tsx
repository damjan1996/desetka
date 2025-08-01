import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

interface PerformanceMetrics {
  lcp: WebVitalMetric[];
  inp: WebVitalMetric[];
  cls: WebVitalMetric[];
  fcp: WebVitalMetric[];
  ttfb: WebVitalMetric[];
}

const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: [],
    inp: [],
    cls: [],
    fcp: [],
    ttfb: []
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for performance metrics from webVitals
    const handlePerformanceData = (event: CustomEvent) => {
      const metric = event.detail as WebVitalMetric;
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: [...(prev[metric.name.toLowerCase() as keyof PerformanceMetrics] || []), metric].slice(-10)
      }));
    };

    window.addEventListener('web-vitals', handlePerformanceData as EventListener);
    return () => {
      window.removeEventListener('web-vitals', handlePerformanceData as EventListener);
    };
  }, []);

  const getLatestMetric = (metricName: keyof PerformanceMetrics) => {
    const metricArray = metrics[metricName];
    return metricArray[metricArray.length - 1];
  };

  const getRatingColor = (rating?: string) => {
    switch (rating) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-zinc-400';
    }
  };

  const getRatingIcon = (rating?: string) => {
    switch (rating) {
      case 'good': return <CheckCircle className="h-4 w-4" />;
      case 'needs-improvement': return <AlertCircle className="h-4 w-4" />;
      case 'poor': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const formatValue = (name: string, value?: number) => {
    if (value === undefined) return '-';
    if (name === 'CLS') return value.toFixed(3);
    return `${Math.round(value)}ms`;
  };

  const calculateScore = () => {
    const latestLCP = getLatestMetric('lcp');
    const latestINP = getLatestMetric('inp');
    const latestCLS = getLatestMetric('cls');
    
    if (!latestLCP || !latestINP || !latestCLS) return null;

    let score = 100;
    
    // LCP scoring
    if (latestLCP.value > THRESHOLDS.LCP.poor) score -= 33;
    else if (latestLCP.value > THRESHOLDS.LCP.good) score -= 16;
    
    // INP scoring
    if (latestINP.value > THRESHOLDS.INP.poor) score -= 33;
    else if (latestINP.value > THRESHOLDS.INP.good) score -= 16;
    
    // CLS scoring
    if (latestCLS.value > THRESHOLDS.CLS.poor) score -= 34;
    else if (latestCLS.value > THRESHOLDS.CLS.good) score -= 18;
    
    return Math.max(0, Math.round(score));
  };

  // Only show in development or with special flag
  if (process.env.NODE_ENV === 'production' && !window.location.search.includes('debug=true')) {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zinc-800 border border-zinc-700 rounded-full shadow-lg hover:bg-zinc-700 transition-all"
        aria-label="Toggle Performance Monitor"
      >
        <Activity className="h-5 w-5 text-white" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Core Web Vitals
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-zinc-400 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Overall Score */}
          {calculateScore() !== null && (
            <div className="mb-4 p-3 bg-zinc-800 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Performance Score</span>
                <span className={`text-2xl font-bold ${
                  calculateScore()! >= 90 ? 'text-green-500' : 
                  calculateScore()! >= 50 ? 'text-yellow-500' : 
                  'text-red-500'
                }`}>
                  {calculateScore()}
                </span>
              </div>
            </div>
          )}

          {/* Metrics */}
          <div className="space-y-3">
            {[
              { key: 'lcp', label: 'Largest Contentful Paint', threshold: THRESHOLDS.LCP },
              { key: 'inp', label: 'Interaction to Next Paint', threshold: THRESHOLDS.INP },
              { key: 'cls', label: 'Cumulative Layout Shift', threshold: THRESHOLDS.CLS },
              { key: 'fcp', label: 'First Contentful Paint', threshold: THRESHOLDS.FCP },
              { key: 'ttfb', label: 'Time to First Byte', threshold: THRESHOLDS.TTFB }
            ].map(({ key, label }) => {
              const latest = getLatestMetric(key as keyof PerformanceMetrics);
              return (
                <div key={key} className="flex items-center justify-between p-2 bg-zinc-800/50 rounded">
                  <div className="flex-1">
                    <div className="text-sm text-zinc-300">{label}</div>
                    <div className="text-xs text-zinc-500 uppercase">{key}</div>
                  </div>
                  <div className={`flex items-center gap-2 ${getRatingColor(latest?.rating)}`}>
                    {getRatingIcon(latest?.rating)}
                    <span className="font-mono text-sm">
                      {formatValue(key.toUpperCase(), latest?.value)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info */}
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              Real user metrics • Updates live • 
              <a 
                href="https://web.dev/vitals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-blue-400 hover:text-blue-300"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}