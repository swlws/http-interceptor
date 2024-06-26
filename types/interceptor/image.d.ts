import BaseInterceptor from './base';
/**
 * 拦截器 - Image
 */
export default class ImageInterceptor<T> extends BaseInterceptor<T> {
    constructor();
    /**
     * 原生方式
     * @param {*} src
     * @returns
     */
    nativeSetHandler(src: string): string;
    /**
     * 拦截处理方式
     * @param {*} src
     * @returns
     */
    newSetHandler(src: string): string;
    /**
     * 应用拦截器
     */
    apply(): void;
}
