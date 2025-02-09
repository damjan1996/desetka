type CacheItem<T> = {
  value: T;
  timestamp: number;
  ttl: number;
};

class Cache {
  private storage: Map<string, CacheItem<any>>;
  private readonly defaultTTL: number;

  constructor(defaultTTL = 5 * 60 * 1000) { // 5 minutes default TTL
    this.storage = new Map();
    this.defaultTTL = defaultTTL;
  }

  set<T>(key: string, value: T, ttl = this.defaultTTL): void {
    this.storage.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const item = this.storage.get(key);
    
    if (!item) return null;
    
    if (Date.now() > item.timestamp + item.ttl) {
      this.storage.delete(key);
      return null;
    }
    
    return item.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

export const cache = new Cache();