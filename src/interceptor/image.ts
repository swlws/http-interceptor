import BaseInterceptor from './base';

/**
 * 拦截器 - Image
 */
export default class ImageInterceptor<
  K extends string,
  T
> extends BaseInterceptor<K, T> {
  constructor() {
    super();
  }

  /**
   * 原生方式
   * @param {*} src
   * @returns
   */
  nativeSetHandler(src: K) {
    return src;
  }

  /**
   * 拦截处理方式
   * @param {*} src
   * @returns
   */
  newSetHandler(src: K): K {
    const index = src.indexOf('?');
    let url: K, data;
    if (index === -1) {
      url = src;
      data = '' as T;
    } else {
      url = src.slice(0, index) as K;
      data = src.slice(index + 1) as T;
    }

    const [newUrl, newData] = this.callFilterAndAdapter(url, data);
    if (newUrl && newData) return (newUrl + '?' + newData) as K;
    return newUrl;
  }

  /**
   * 应用拦截器
   */
  apply() {
    const _this = this;
    const NativeImage = window.Image;

    class CustomImage extends NativeImage {
      private _src!: K;

      set src(value: K) {
        if (_this.useNative) {
          this._src = value;
          return;
        }

        this._src = _this.newSetHandler(value);
        this.setAttribute('src', this._src);
      }

      get src() {
        return this._src;
      }
    }

    window.Image = CustomImage;
  }
}
