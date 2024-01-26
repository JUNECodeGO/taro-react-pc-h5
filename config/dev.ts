/** @format */

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {
    // webpackChain(chain, webpack) {
    //   chain
    //     .plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
    // },
  },
  h5: {
    // webpackChain(chain, webpack) {
    // chain
    //   .plugin('analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
    // chain.merge({
    //   optimization: {
    //     splitChunks: {
    //       chunks: 'all',
    //       minSize: 30000,
    //       minChunks: 3,
    //       automaticNameDelimiter: '.',
    //       cacheGroups: {
    //         vendor: {
    //           test: /[\/]node_modules[\/]/,
    //           name: 'vendors',
    //           minSize: 30000,
    //           minChunks: 1,
    //           chunks: 'initial',
    //           priority: 1, // 该配置项是设置处理的优先级，数值越大越优先处理
    //         },
    //       },
    //     },
    //   },
    // });
    // },
    devServer: {
      proxy: {
        // 这里代表这凡是以 /api 开头的接口都将在这里被代理
        '/api': {
          // 代理的目标服务器，也就是你要发请求的那个服务器
          target: 'https://ctcgris.cn/',
          changeOrigin: true,
          pathRewrite: {
            // 此处的路径替换是不做任何替换，也就是说api还是接着原来的api
            '^/api': '/ctbigdata/home/api/',
          },
        },
      },
    },
  },
};
