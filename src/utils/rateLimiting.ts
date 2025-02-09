interface RateLimitEntry {
  count: number;
  timestamp: number;
}

const WINDOW_SIZE_MS = 3600000; // 1 hour
const MAX_REQUESTS = 5; // Maximum requests per hour

class RateLimiter {
  private cache: Map<string, RateLimitEntry>;

  constructor() {
    this.cache = new Map();
  }

  isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = this.cache.get(ip);

    if (!entry) {
      this.cache.set(ip, { count: 1, timestamp: now });
      return false;
    }

    if (now - entry.timestamp > WINDOW_SIZE_MS) {
      this.cache.set(ip, { count: 1, timestamp: now });
      return false;
    }

    if (entry.count >= MAX_REQUESTS) {
      return true;
    }

    entry.count++;
    return false;
  }

  getRemainingAttempts(ip: string): number {
    const entry = this.cache.get(ip);
    if (!entry) {
      return MAX_REQUESTS;
    }
    return Math.max(0, MAX_REQUESTS - entry.count);
  }

  getTimeToReset(ip: string): number {
    const entry = this.cache.get(ip);
    if (!entry) {
      return 0;
    }
    return Math.max(0, WINDOW_SIZE_MS - (Date.now() - entry.timestamp));
  }
}

export const rateLimiter = new RateLimiter();