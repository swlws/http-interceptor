import BaseInterceptor from './base';
/**
 * 拦截器 - SendBeacon
 */
export default class BeaconIntercept<T extends BodyInit> extends BaseInterceptor<T> {
    /**
     * 应用拦截器
     * @returns
     */
    apply(): void;
}
