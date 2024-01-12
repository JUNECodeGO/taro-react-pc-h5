/** @format */

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/dataCenter/index',
    'pages/account/index',
    'pages/add/index',
    'pages/listing/index',
    'pages/login/index',
    'pages/signIn/index',
    'pages/detail/index',
    'pages/apply/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0B4F4A',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#0B4F4A',
    backgroundColor: '#ffffff',
    list: [
      {
        iconPath: 'assets/images/tab/home.png',
        selectedIconPath: 'assets/images/tab/home_active.png',
        pagePath: 'pages/index/index',
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
});
