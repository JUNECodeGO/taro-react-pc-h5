/** @format */

// /** @format */
// import {useState} from 'react';
// import {View, Text} from '@tarojs/components';
// import {Image, Tabs} from '@nutui/nutui-react-taro';
// import VChart from '@visactor/taro-vchart';
// import BasicLayout from '@/components/BasicLayout';
// import Empty from '@/components/Empty';
// import Taro from '@tarojs/taro';

// import './index.scss';

// const NotYet = true;
// const tabList = ['种质圃TOP10', '地域分析', '种类分析', '类型分析', '趋势分析'];
// const topList = [
//   {
//     title: '保持信息',
//     value: '449993份',
//     icon: require('../../assets/images/svg/Group_57.svg'),
//   },
//   {
//     title: '保持信息',
//     value: '449993份',
//     icon: require('../../assets/images/svg/Group_36.svg'),
//   },
//   {
//     title: '保持信息',
//     value: '449993份',
//     icon: require('../../assets/images/svg/Group_47.svg'),
//   },
//   {
//     title: '保持信息',
//     value: '449993份',
//     icon: require('../../assets/images/svg/Group_53.svg'),
//   },
//   {
//     title: '保持信息',
//     value: '449993份',
//     icon: require('../../assets/images/svg/Group_60.svg'),
//   },
// ];

// const DataCenterPage = () => {
//   const env = Taro.getEnv();
//   const [spec, setSpec] = useState({
//     data: [
//       {
//         id: 'data1',
//         values: [
//           {
//             value: 335,
//             name: '直接访问',
//           },
//           {
//             value: 310,
//             name: '邮件营销',
//           },
//           {
//             value: 274,
//             name: '联盟广告',
//           },
//           {
//             value: 235,
//             name: '视频广告',
//           },
//           {
//             value: 400,
//             name: '搜索引擎',
//           },
//         ],
//       },
//     ],
//     type: 'pie',
//     outerRadius: 0.6,
//     innerRadius: 0.5,
//     categoryField: 'name',
//     valueField: 'value',
//     legends: {
//       visible: true,
//     },
//   });

//   const [tab1value, setTab1value] = useState(0);

//   if (NotYet) {
//     return (
//       <BasicLayout className='data-center' title='数据中心'>
//         <Empty />
//       </BasicLayout>
//     );
//   }

//   return (
//     <BasicLayout className='data-center' title='数据中心'>
//       <View className='top-wrapper'>
//         <View className='top-view'>
//           {topList.map(item => (
//             <View className='top-view-item' key={item.title}>
//               <Image src={item.icon} className='top-view-icon' />
//               <View className='top-view-item-right'>
//                 <Text className='top-view-title'>{item.title}</Text>
//                 <Text className='top-view-value'>{item.value}</Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       </View>

//       <View className='chart'>
//         <Tabs
//           value={tab1value}
//           onChange={value => {
//             setTab1value(value);
//           }}>
//           <Tabs.TabPane title={tabList[0]}>
//             <VChart
//               type={env}
//               canvasId='chartId1'
//               spec={spec}
//               style={{height: '60vh'}}
//             />
//           </Tabs.TabPane>
//         </Tabs>
//       </View>
//     </BasicLayout>
//   );
// };

// export default DataCenterPage;

import BasicLayout from '@/components/BasicLayout';
import Empty from '@/components/Empty';

export default () => (
  <BasicLayout className='data-center' title='数据中心'>
    <Empty />
  </BasicLayout>
);
