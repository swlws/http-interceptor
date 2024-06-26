import BaseInterceptor from './base';

/**
 * 拦截器 - Image
 */
export default class ImageInterceptor<T> extends BaseInterceptor<T> {
  constructor() {
    super();
  }

  /**
   * 原生方式
   * @param {*} src
   * @returns
   */
  nativeSetHandler(src: string) {
    return src;
  }

  /**
   * 拦截处理方式
   * @param {*} src
   * @returns
   */
  newSetHandler(src: string) {
    const index = src.indexOf('?');
    let url, data;
    if (index === -1) {
      url = src;
      data = '' as T;
    } else {
      url = src.slice(0, index);
      data = src.slice(index + 1) as T;
    }

    const [newUrl, newData] = this.callFilterAndAdapter(url, data);
    if (newUrl && newData) return newUrl + '?' + newData;
    return newUrl;
  }

  /**
   * 应用拦截器
   */
  apply() {
    const _this = this;
    const NativeImage = window.Image;

    class CustomImage extends NativeImage {
      constructor(width?: number, height?: number) {
        super(width, height);
        Object.defineProperty(this, 'src', {
          get() {
            return this._src;
          },
          set(src = '') {
            // 使用原生方式
            if (_this.useNative) {
              src = _this.nativeSetHandler(src);
            } else {
              // 使用拦截器
              src = _this.newSetHandler(src);
            }
            this._src = src;
            this.setAttribute('src', src);
          },
          configurable: true,
          enumerable: true,
        });
      }
    }

    window.Image = CustomImage;
  }
}
