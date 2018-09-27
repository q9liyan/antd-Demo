import React,{Component} from 'react';
import {Row, Col, Icon, Tooltip,Layout, Tabs} from 'antd';
import {ChartCard, yuan, Field, MiniArea, MiniBar, Bar, TimelineChart} from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import numeral from 'numeral';

import '../style/analysis.css';

import moment from 'moment';

import { getTimeDistance } from '../utils/utils'


const TabPane = Tabs.TabPane;
const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0;i < 20; i += 1){
    visitData.push({
        x:moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y:Math.floor(Math.random() * 100) + 10,
    });
}



export default class Analysis extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentTabKey:'',
            loadding:true,
            rangePickerValue: getTimeDistance('year'),
        }
    }


    isActive = type => {
        const { rangePickerValue } = this.state;
        const value = getTimeDistance(type);
        if (!rangePickerValue[0] || !rangePickerValue[1]) {
            return '';
        }
        if (
            rangePickerValue[0].isSame(value[0], 'day') &&
            rangePickerValue[1].isSame(value[1], 'day')
        ) {
            return '';
        }
        return '';
    };


    callback = key => {
        console.log(key);
    };

    render(){
        const salesExtra = (
            <div className="salesExtraWrap">
                <div className="salesExtra">
                    <a className={this.isActive('today')}/>
                </div>
            </div>
        );

        return (
            <Layout >
           <Row >
               <Col span={8}>
                   <ChartCard
                    title="总销售额"
                    action={
                        <Tooltip title="指标说明">
                            <Icon type="info-circle-o"/>
                        </Tooltip>
                    }
                    total={() => (
                        <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
                    )}
                    contentHeight={80}
                    footer={
                        <Field label="日均销售额" value={numeral(12423).format("0,0")} />
                    }
                   >
                       <span>
                            <Trend flag="up" style={{marginLeft:8,color:"rgba(0,0,0,.85)"}}>
                                12%
                            </Trend>
                       </span>
                       <span>
                            <Trend flag="down" style={{marginLeft:8,color:"rgba(0,0,0,.85)"}}>
                                15%
                            </Trend>
                       </span>
                   </ChartCard>
               </Col>
               <Col span={8}>
                   <ChartCard
                       title="访问量"
                       action={
                           <Tooltip title="访问量">
                               <Icon type="info-circle-o"/>
                           </Tooltip>
                       }
                       total={numeral(8846).format('')}
                       contentHeight={80}
                       footer={
                           <Field label="日访问量" value={numeral(1234).format("0,0")} />
                       }
                   >
                       <MiniArea
                           line
                           height={46}
                           data={visitData}
                       />
                   </ChartCard>
               </Col>
               <Col span={8}>
                   <ChartCard
                       title=""
                       action={
                           <Tooltip title="支付笔数">
                               <Icon type="info-circle-o"/>
                           </Tooltip>
                       }
                       total={numeral(8846).format('')}
                       contentHeight={80}
                       footer={
                           <Field label="转化率" value={numeral(0.6).format("0,0")} />
                       }
                   >
                       <MiniBar
                           line
                           height={46}
                           data={visitData}
                       />
                   </ChartCard>
               </Col>
           </Row>
                <div className="card-container">
               <Tabs onChange={this.callback()} type="card" size="large" tabBarExtraContent={salesExtra}>
                   <TabPane tab="最近一周" key="1">
                    <Bar
                        data={visitData}
                    />
                   </TabPane>
                   <TabPane tab="最近一个月" key="2">
                       <MiniArea
                           line
                           data={visitData}
                       />
                   </TabPane>
                   <TabPane tab="最近三个月" key="3">Content of Tab Pange 3</TabPane>
               </Tabs>
                </div>
            </Layout>
        )
    }
}
