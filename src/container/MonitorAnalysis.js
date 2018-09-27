import React,{Component} from 'react'
import {Row, Col, Card, Icon, Layout, Select, Button} from 'antd';
import   '../style/monitorAnalysis.css'
import TableForm from '../Forms/TableForm'
const { Option } = Select;

const NumberInfo = ({title,subTitle,suffix,total}) => (
    <div>
        {title && (
         <div title={typeof title === 'string' ? title : ''}>
             {title}
         </div>
        )}
        {subTitle && (
         <div title={typeof subTitle === 'string' ? subTitle : ''}>
         </div>
        )}
        <div>
            <span>
                {total}
                {suffix && <em className="spanName"></em>}
            </span>
        </div>

    </div>
);

const tableData = [
    {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
    },
]

export default class MonitorAnalysis extends Component{

    areaChange = () => {

    }



    render(){
        const options = [{
            value:'meiguo',
            label:'美国',
            children: [{
                value:  'didarenwu',
                label:  '嘀嗒任务',
            },{
                value:  'baizaoyin',
                label:  '白噪音',
            }],
        },{
            value:'riben',
            label:'日本',
            children: [{
                value:  'didarenwu',
                label:  'JP-嘀嗒任务',
            },{
                value:  'baizaoyin',
                label:  'JP-白噪音',
            }],
        }]




        return (
            <div>
                <Layout>
                    <Row>
                        <Card title="详细交易情况">
                            <Row>
                                <Col md={6} sm={12} xs={24}>
                                    <NumberInfo
                                        subTitle="今日交易总额"
                                        suffix="元"
                                        total={"123456"}
                                    />
                                </Col>
                                <Col md={6} sm={12} xs={24}>
                                    <NumberInfo subTitle="销售目标完成率" total="92%" />
                                </Col>
                                <Col md={6} sm={12} xs={24}>
                                    <NumberInfo subTitle="活动剩余时间" total="09：08" />
                                </Col>
                                <Col md={6} sm={12} xs={24}>
                                    <NumberInfo
                                        subTitle="每秒交易总额"
                                        suffix="元"
                                        total="12313212"
                                    />
                                </Col>
                            </Row>
                        </Card>

                        <Card>
                            <span>地区：</span>
                            <Select
                                placeholder="请选择地区"
                                className="monitor-select"
                            >
                                <Option value="meiguo">美国</Option>
                                <Option value="jp">日本</Option>
                            </Select>
                            <span>平台：</span>
                            <Select
                                placeholder="请选择平台"
                                className="monitor-select"
                            >
                                <Option value="Appbi">Appbi</Option>
                                <Option value="inmobi">inmobi</Option>
                            </Select>
                            <Button style={{float:
                                'right'}} type="primary">搜索</Button>
                        </Card>
                        <Card title="位置管理" bordered={false}>

                        </Card>
                        <Card>
                            <TableForm data={tableData} history={this.props.history}/>
                        </Card>
                    </Row>
                    <Row>

                    </Row>
                </Layout>
            </div>
        )
    }
}
