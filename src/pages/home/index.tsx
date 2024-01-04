/** @format */
import {useMemo} from 'react';
import {
  Flex,
  Button,
  Divider,
  Row,
  Col,
  Statistic,
  Space,
  Select,
  Input,
} from 'antd';
import {Link} from 'react-router-dom';
import {homeMenus, dataList} from './constant';

import './index.scss';

const options = [
  {
    value: '按地域',
    label: '按地域',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

export default function Home() {
  const navLink = useMemo(() => {
    return homeMenus.map(route => (
      <Col>
        <Link to={route.path} key={route.label}>
          {route.label}
        </Link>
      </Col>
    ));
  }, []);

  return (
    <Row align='middle' justify='center'>
      <Col span={23} xxl={20}>
        <div className='home-container'>
          <header>
            <div>欢迎</div>
            <div className='title'>植物种质资源保存与共享平台</div>
            <Flex align='flex-start' gap='small'>
              <Button type='default' size='small' className='header-button'>
                登陆
              </Button>
            </Flex>
          </header>
          <Divider className='divider' />

          <Row justify='space-between' className='nav' gutter={16}>
            {navLink}
          </Row>

          <Divider className='divider' />

          <div className='banner'>
            <div className='banner-title'>
              欢迎来到植物种质
              <br />
              资源保存与共享平台
            </div>
            <div className='banner-lead'>
              植物种质资源保存与共享平台是一个资源共享服务平台，依托中国热带农业科学院热带作物品种资源研究所。它主要负责收集、保存、鉴定和利用热带植物种质资源，为科研、教学和产业发展提供服务。
            </div>
          </div>
          <div></div>
        </div>

        <Row justify='center' className='home-content'>
          <Col xs={24} sm={24} xl={10} xxl={10}>
            <Row className='home-data' justify='space-around'>
              {dataList.map(item => (
                <Col
                  key={item.key}
                  className='home-data-item'
                  span={12}
                  xs={6}
                  sm={6}>
                  <Statistic
                    key={item.key}
                    title={item.label}
                    value={item.key}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} sm={24} xl={14} xxl={14} className='home-about'>
            由中国热带农业科学院热带作物品种资源研究所牵头，联合广东农业科学院果树研究所、福建省农业科学院果树研究所等
            11个单位共同组建，整理整合九大类25种􏰀要热带植物种质资源，资源􏰂达2.6万份，涵盖橡胶树等产胶作物，木薯、甘薯等热带粮⻝作物，
            芒果、菠萝、火⻰果、⻩皮、余甘子、菠萝蜜、油梨、澳洲坚果、腰果等热带果树，柱花草、山蚂蝗等热带牧草，益智、姜⻩、艾纳香、肉桂等热带药用植物，胡椒、咖啡、可可、草果等热带香料饮料作物，椰子、油茶等热带油料作物，三⻆梅等热带花卉，⻩秋葵等耐热蔬菜，占全国热带作物种质资源保存总􏰂的90%以上，代表了热带作物种质资源保护利用的国家水平，能够
            满足当前和今后热带农业科技创新和热带作物产业发展的需要
          </Col>
        </Row>
        <div className='home-search'>
          <div className='title'>资源检索</div>
          <Space.Compact>
            <Input.Search
              addonBefore={<Select defaultValue='按地域' options={options} />}
              defaultValue='Xihu District, Hangzhou'
            />
          </Space.Compact>
        </div>
      </Col>
    </Row>
  );
}
