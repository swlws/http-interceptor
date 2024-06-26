/**
 * 过滤器
 */
export interface Filter<K, T> {
  (url: K, data?: T): boolean;
}

/**
 * 适配器
 */
export interface Adapter<K, T> {
  (url: K, data?: T): [K, T];
}
