import BaseInterceptor from './interceptor/base';
import BeaconInterceptor from './interceptor/beacon';
import ImageInterceptor from './interceptor/image';

/**
 * 拦截器基类
 * @returns
 */
export function createBaseInterceptor<T>() {
  return new BaseInterceptor<T>();
}

/**
 * sendBeacon 拦截器
 * @returns
 */
export function createBeaconInteceptor<T extends BodyInit>() {
  return new BeaconInterceptor<T>();
}

/**
 * new Image 拦截器
 *
 * @returns
 */
export function createImageInterceptor<T>() {
  return new ImageInterceptor<T>();
}
