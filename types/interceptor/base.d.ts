import { Filter, Adapter } from '@/types';
/**
 * 拦截器基类
 */
export default class BaseInterceptor<K, T> {
    useNative: boolean;
    filterAndAdapterStack: [Filter<K, T>, Adapter<K, T>][];
    /**
     * 启用拦截器
     */
    enableInterceptor(): void;
    /**
     * 禁用拦截器
     */
    disableInterceptor(): void;
    /**
     * 添加一组过滤器、适配器
     *
     * @param filter
     * @param adapter
     * @returns
     */
    addFilterAndAdapter(filter: Filter<K, T>, adapter: Adapter<K, T>): void;
    /**
     * 调用每一组过滤器和适配器
     *
     * @param url
     * @param data
     * @returns
     */
    callFilterAndAdapter(url: K, data?: T): [K, T | undefined];
    /**
     * 应用拦截器
     */
    apply(): void;
}
