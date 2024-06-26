const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'http-interceptor.min.js',
    clean: true,
    library: {
      name: 'HttpInterceptor',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  externals: {},
  optimization: {
    // 压缩
    minimize: true,
    // minimizer: []
    // 如果 chunk 为空，告知 webpack 检测或移除这些 chunk。
    removeEmptyChunks: true,
    // TreeShake
    usedExports: true,
  },
};
