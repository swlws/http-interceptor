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
      private _method!: string;
      private _src = '' as K;
      private _async!: boolean;
      private _username?: string | null;
      private _password?: string | null;
      private _headers: Record<string, string> = {};

      open(
        method: string,
        url: K,
        async: boolean = true,
        username?: string | null,
        password?: string | null
      ) {
        this._method = method;
        this._src = url;
        this._async = async;
        this._username = username;
        this._password = password;
      }

      setRequestHeader(name: string, value: string) {
        this._headers[name] = value;
      }

      send(body?: T) {
        let url = '' as K;
        let data = body;

        if (!_this.useNative) {
          [url, data] = _this.callFilterAndAdapter(this._src, body);
        }

        // Open
        super.open(
          this._method,
          url,
          this._async,
          this._username,
          this._password
        );

        // 设置请请求头
        Object.keys(this._headers).forEach((key) => {
          super.setRequestHeader(key, this._headers[key]);
        });

        return super.send(data);
      }
    }

    window.XMLHttpRequest = CustomXhr;
  }
}
