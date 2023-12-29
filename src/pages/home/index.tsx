/** @format */
import {useMemo} from 'react';
import {Flex, Button, Divider, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import {homeMenus} from './constant';
import './index.scss';

export default function Home() {
  const navLink = useMemo(() => {
    return homeMenus.map(route => (
      <Col>
        <Link to={route.path}>{route.label}</Link>
      </Col>
    ));
  }, []);

  return (
    <div className='page-container'>
      <header>
        <div>欢迎</div>
        <div className='title'>资源库</div>
        <Flex align='flex-start' gap='small'>
          <Button type='default' size='small'>
            登陆
          </Button>
          <Button type='default' size='small'>
            注册
          </Button>
        </Flex>
      </header>
      <Divider className='divider' />
      <nav className='nav'>
        <Row justify='space-between'>{navLink}</Row>
      </nav>
      <div className='banner'>
        <h1>欢迎来到国家热带 植物物种资源库</h1>
        <p>
          国家热带植物种质资源库是一个国家科技资源共享服务平台，依托中国热带农业科学院热带作物品种资源研究所。它主要负责收集、保存、鉴定和利用热带植物种质资源，为科研、教学和产业发展提供服务。
        </p>
      </div>
      <div></div>
    </div>
  );
}
