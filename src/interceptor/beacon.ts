import BaseInterceptor from './base';

/**
 * 拦截器 - SendBeacon
 */
export default class BeaconIntercept<
  T extends BodyInit
> extends BaseInterceptor<T> {
  /**
   * 应用拦截器
   * @returns
   */
  apply() {
    const oldSendBeacon = window.navigator.sendBeacon;
    window.navigator.sendBeacon = (url: string, data: T) => {
      // 使用原生方式
      if (this.useNative) {
        return oldSendBeacon.call(window.navigator, url, data);
      }

      const [newUrl, newData] = this.callFilterAndAdapter(url, data);
      return oldSendBeacon.call(window.navigator, newUrl, newData);
    };
  }
}
