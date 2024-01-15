/** @format */

let customConfig;

if (process.env.TARO_ENV === 'h5') {
  customConfig = {
    entryPagePath: 'pages/main/home/index',
    pages: [
      'pages/dataCenter/index',
      'pages/listing/index',
      'pages/account/index',
      'pages/main/home/index',
      'pages/main/add/index',
      'pages/main/login/index',
      'pages/main/signIn/index',
      'pages/main/detail/index',
      'pages/main/apply/index',
    ],
  };
} else {
  customConfig = {
    entryPagePath: 'pages/listing/index',
    pages: [
      'pages/listing/index',
      'pages/dataCenter/index',
      'pages/account/index',
    ],
    subPackages: [
      {
        root: 'pages/main',
        pages: [
          'add/index',
          'login/index',
          'signIn/index',
          'detail/index',
          'apply/index',
        ],
      },
    ],
    tabBar: {
      color: '#000000',
      selectedColor: '#0B4F4A',
      backgroundColor: '#ffffff',
      list: [
        {
          iconPath: 'assets/images/tab/home.png',
          selectedIconPath: 'assets/images/tab/home_active.png',
          pagePath: 'pages/listing/index',
          text: '首页',
        },
        {
          pagePath: 'pages/dataCenter/index',
          iconPath: 'assets/images/tab/chart.png',
          selectedIconPath: 'assets/images/tab/chart_active.png',
          text: '数据中心',
        },
        {
          iconPath: 'assets/images/tab/account.png',
          selectedIconPath: 'assets/images/tab/account_active.png',
          pagePath: 'pages/account/index',
          text: '个人中心',
        },
      ],
    },
  };
}

export default customConfig;
