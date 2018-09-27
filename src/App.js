import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Layout, Menu, Breadcrumb, Icon} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import {Route,Link} from 'react-router-dom'

import AppAnalysis from './container/AppAnalysis'
import Analysis from  './container/Analysis'
import BillDetailes from './container/BillDetails'
import ConsoleAnalysis from './container/ConsoleAnalysis'
import KeywordAnalysis from './container/KeywordAnalysis'
import MonitorAnalysis from './container/MonitorAnalysis'
import ThrowIn from './container/ThrowIn'

const { SubMenu } = Menu;
const {Header, Footer, Sider, Content } = Layout;


class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['sub1']}>
                        <SubMenu key="sub1" title={<span><Icon type="home"/>主页</span>}>
                            <Menu.Item key="1-1"><Link to="/analysis">分析页</Link></Menu.Item>
                            <Menu.Item key="1-2"><Link to="/MonitorAnalysis">监控页</Link></Menu.Item>
                            <Menu.Item key="1-3"><Link to="/ConsoleAnalysis">控制台</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="analysis"/>数据分析</span>}>
                            <Menu.Item key="2-1"><Link to="/appanalysis">应用分析</Link></Menu.Item>
                            <Menu.Item key="2-2"><Link to="/KeywordAnalysis">关键词分析</Link></Menu.Item>
                            <Menu.Item key="2-3"><Link to="/ThrowIn">投放分析</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="analysis"/>财务管理</span>}>
                            <Menu.Item key="4-1"><Link to="/BillDetails">花费记录</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span>个人信息</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800 }}>

                            <Route path="/appanalysis" component={AppAnalysis}/>
                            <Route path="/analysis" component={Analysis} />
                            <Route path="/BillDetails" component={BillDetailes} />
                            <Route path="/ConsoleAnalysis" component={ConsoleAnalysis} />
                            <Route path="/KeywordAnalysis" component={KeywordAnalysis} />
                            <Route path="/MonitorAnalysis" component={MonitorAnalysis} />
                            <Route path="/ThrowIn" component={ThrowIn}/>

                    </Content>
                </Layout>
            </Layout>
        );
    }

}

export default App;
