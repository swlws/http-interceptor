import BaseInterceptor from './base';
/**
 * 拦截器 - Image
 */
export default class ImageInterceptor<K extends string, T> extends BaseInterceptor<K, T> {
    constructor();
    /**
     * 原生方式
     * @param {*} src
     * @returns
     */
    nativeSetHandler(src: K): K;
    /**
     * 拦截处理方式
     * @param {*} src
     * @returns
     */
    newSetHandler(src: K): K;
    /**
     * 应用拦截器
     */
    apply(): void;
}
