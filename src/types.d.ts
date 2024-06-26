/**
 * 过滤器
 */
export interface Filter<T> {
  (url: string, data: T): boolean;
}

/**
 * 适配器
 */
export interface Adapter<T> {
  (url: string, data: T): [string, T];
}
