import BaseInterceptor from './base';
/**
 * 拦截器 - XhrInterceptor
 */
export default class XhrInterceptor<K extends string | URL, T extends Document | XMLHttpRequestBodyInit | null> extends BaseInterceptor<K, T> {
    /**
     * 应用拦截器
     * @returns
     */
    apply(): void;
}
