import BaseInterceptor from './interceptor/base';
import BeaconInterceptor from './interceptor/beacon';
import ImageInterceptor from './interceptor/image';
/**
 * 拦截器基类
 * @returns
 */
export declare function createBaseInterceptor<T>(): BaseInterceptor<T>;
/**
 * sendBeacon 拦截器
 * @returns
 */
export declare function createBeaconInteceptor<T extends BodyInit>(): BeaconInterceptor<T>;
/**
 * new Image 拦截器
 *
 * @returns
 */
export declare function createImageInterceptor<T>(): ImageInterceptor<T>;
