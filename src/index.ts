import BaseInterceptor from './interceptor/base';
import BeaconInterceptor from './interceptor/beacon';
import ImageInterceptor from './interceptor/image';
import XhrInterceptor from './interceptor/xhr';
import FetchInterceptor from './interceptor/fetch';

/**
 * 拦截器基类
 * @returns
 */
export function createBaseInterceptor<K, T>() {
  return new BaseInterceptor<K, T>();
}

/**
 * sendBeacon 拦截器
 * @returns
 */
export function createBeaconInteceptor<
  K extends string | URL,
  T extends BodyInit
>() {
  return new BeaconInterceptor<K, T>();
}

/**
 * new Image 拦截器
 *
 * @returns
 */
export function createImageInterceptor<K extends string, T>() {
  return new ImageInterceptor<K, T>();
}

/**
 * XMLHttpRequest 拦截器
 *
 * @returns
 */
export function createXhrInterceptor<
  K extends string | URL,
  T extends Document | XMLHttpRequestBodyInit | null
>() {
  return new XhrInterceptor<K, T>();
}

/**
 * fetch 拦截器
 * @returns
 */
export function createFetchInterceptor<
  K extends RequestInfo | URL,
  T extends BodyInit
>() {
  return new FetchInterceptor<K, T>();
}
