/** @format */

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      proxy: {
        // // 这里代表这凡是以 /api 开头的接口都将在这里被代理
        // '/api': {
        //   // 代理的目标服务器，也就是你要发请求的那个服务器
        //   target: 'https://www.baidu.com/',
        //   changeOrigin: true,
        //   pathRewrite: {
        //     // 此处的路径替换是不做任何替换，也就是说api还是接着原来的api
        //     '^/api': '/api',
        //   },
        // },
      },
    },
  },
};
