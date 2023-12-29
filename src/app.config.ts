/** @format */

export default defineAppConfig({
  pages: ['pages/index/index', 'pages/apply/index', 'pages/add/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0B4F4A',
    // navigationBarTitleText: '油茶',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#0B4F4A',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/add/index',
        text: '分类',
      },
      {
        pagePath: 'pages/apply/index',
        text: '个人中心',
      },
    ],
  },
});
