# http interceptor

## Iterceptor 拦截器

定义拦截器的类型，支持的类型：

- sendBeacon
- new Image

## Filter 过滤器

当任一一个过滤器返回为 true 时，才会触发拦截器

## Adapter 适配器

用于修改报文，对 URL、Body 执行具体处理的地方
