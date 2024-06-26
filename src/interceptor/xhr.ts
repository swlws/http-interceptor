import BaseInterceptor from './base';

/**
 * 拦截器 - XhrInterceptor
 */
export default class XhrInterceptor<
  K extends string | URL,
  T extends Document | XMLHttpRequestBodyInit | null
> extends BaseInterceptor<K, T> {
  /**
   * 应用拦截器
   * @returns
   */
  apply() {
    const _this = this;

    const NativeXhr = window.XMLHttpRequest;
    class CustomXhr extends NativeXhr {
      private _src = '' as K;

      open(
        method: string,
        url: K,
        async: boolean = true,
        username?: string | null,
        password?: string | null
      ) {
        this._src = url;

        super.open(method, url, async, username, password);
      }

      send(body?: T) {
        if (_this.useNative) {
          return super.send(body);
        }

        const [url, data] = _this.callFilterAndAdapter(this._src, body);
        return super.send(data);
      }
    }

    window.XMLHttpRequest = CustomXhr;
  }
}
