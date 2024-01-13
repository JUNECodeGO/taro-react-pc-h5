/** @format */
const path = require('path');
const config = {
  projectName: 'youcha',
  date: '2023-12-25',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss'),
    ],
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: [
        '@nutui/nutui-react-taro',
        '@nutui/icons-react-taro',
        '@visactor/taro-vchart',
      ],
    },
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
          baseFontSize: 16,
          maxRootSize: 16,
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'multi',
      customRoutes: {
        // "页面路径": "自定义路由"
        '/pages/home/index': 'home',
        '/pages/index/index': 'search',
        '/pages/add/index': '/manage/add',
        '/pages/login/index': 'login',
        '/pages/signIn/index': 'signin',
        '/pages/detail/index': 'search/detail',
        '/pages/dataCenter/index': 'datacenter',
        '/pages/apply/index': 'search/apply',
        '/pages/account/index': 'account',
      },
    },
    // esnextModules: ['nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
          baseFontSize: 16,
          maxRootSize: 16,
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
