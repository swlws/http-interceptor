import BaseInterceptor from './interceptor/base';
import BeaconInterceptor from './interceptor/beacon';
import ImageInterceptor from './interceptor/image';
import XhrInterceptor from './interceptor/xhr';
import FetchInterceptor from './interceptor/fetch';
/**
 * 拦截器基类
 * @returns
 */
export declare function createBaseInterceptor<K, T>(): BaseInterceptor<K, T>;
/**
 * sendBeacon 拦截器
 * @returns
 */
export declare function createBeaconInteceptor<K extends string | URL, T extends BodyInit>(): BeaconInterceptor<K, T>;
/**
 * new Image 拦截器
 *
 * @returns
 */
export declare function createImageInterceptor<K extends string, T>(): ImageInterceptor<K, T>;
/**
 * XMLHttpRequest 拦截器
 *
 * @returns
 */
export declare function createXhrInterceptor<K extends string | URL, T extends Document | XMLHttpRequestBodyInit | null>(): XhrInterceptor<K, T>;
/**
 * fetch 拦截器
 * @returns
 */
export declare function createFetchInterceptor<K extends RequestInfo | URL, T extends BodyInit>(): FetchInterceptor<K, T>;
