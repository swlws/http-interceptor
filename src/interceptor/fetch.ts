import BaseInterceptor from './base';

/**
 * 拦截器 - FetchInterceptor
 */
export default class FetchInterceptor<
  K extends RequestInfo | URL,
  T extends BodyInit
> extends BaseInterceptor<K, T> {
  /**
   * 应用拦截器
   * @returns
   */
  apply() {
    const _this = this;

    const NativeFetch = window.fetch;

    function CustomFetch(input: K, init?: RequestInit) {
      if (_this.useNative) {
        return NativeFetch(input, init);
      }

      const [url, data] = _this.callFilterAndAdapter(input, init?.body as T);
      if (init && data) {
        init.body = data;
      }
      return NativeFetch(url, init);
    }

    window.fetch = CustomFetch as typeof window.fetch;
  }
}
