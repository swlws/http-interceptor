import { Filter, Adapter } from '@/types';
import { AdapterFunction, AdapterReturn } from '../utils/error';

/**
 * 拦截器基类
 */
export default class BaseInterceptor<K, T> {
  // 使用原生处理
  useNative = false;

  // 过滤器与适配器，成对出现
  filterAndAdapterStack: [Filter<K, T>, Adapter<K, T>][] = [];

  /**
   * 启用拦截器
   */
  enableInterceptor() {
    this.useNative = false;
  }

  /**
   * 禁用拦截器
   */
  disableInterceptor() {
    this.useNative = true;
  }

  /**
   * 添加一组过滤器、适配器
   *
   * @param filter
   * @param adapter
   * @returns
   */
  addFilterAndAdapter(filter: Filter<K, T>, adapter: Adapter<K, T>) {
    if (typeof filter !== 'function') {
      console.error(new AdapterFunction('filter must be a function'));
      return;
    }

    if (typeof adapter !== 'function') {
      console.error(new AdapterFunction('adapter must be a function'));
      return;
    }

    this.filterAndAdapterStack.push([filter, adapter]);
  }

  /**
   * 调用每一组过滤器和适配器
   *
   * @param url
   * @param data
   * @returns
   */
  callFilterAndAdapter(url: K, data?: T): [K, T | undefined] {
    if (this.filterAndAdapterStack.length === 0) return [url, data];

    for (const [filter, adapter] of this.filterAndAdapterStack) {
      const flag = filter(url, data);
      if (flag !== true) continue;

      const rt = adapter(url, data);
      if (!Array.isArray(rt) || rt.length !== 2) {
        console.error(
          new AdapterReturn(
            'adapter must return an array with two elements, the first element is the url, the second element is the data'
          )
        );
        continue;
      }

      url = rt[0];
      data = rt[1];
    }

    return [url, data];
  }

  /**
   * 应用拦截器
   */
  apply() {
    throw new Error('Abstract method cannot be called');
  }
}
