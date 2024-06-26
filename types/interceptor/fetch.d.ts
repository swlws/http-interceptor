import BaseInterceptor from './base';
/**
 * 拦截器 - FetchInterceptor
 */
export default class FetchInterceptor<K extends RequestInfo | URL, T extends BodyInit> extends BaseInterceptor<K, T> {
    /**
     * 应用拦截器
     * @returns
     */
    apply(): void;
}
