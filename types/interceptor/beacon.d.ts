import BaseInterceptor from './base';
/**
 * 拦截器 - SendBeacon
 */
export default class BeaconInterceptor<K extends string | URL, T extends BodyInit> extends BaseInterceptor<K, T> {
    /**
     * 应用拦截器
     * @returns
     */
    apply(): void;
}
