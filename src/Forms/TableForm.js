import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';


class TableForm extends PureComponent{
    index = 0;

    cacheOriginData = {};

    constructor(props) {
        super(props);
        this.state = {
            data:[{  workId: '1',
                name: '张三',
                department: '',
                isNew:true,
                editable:false,
            },{  workId: '2',
                name: '李四',
                department: '',
                isNew:true,
                editable:false,
            },{  workId: '3',
                name: '王五',
                department: '',
                isNew:true,
                editable:false,
            },{  workId: '4',
                name: '周六',
                department: '',
                isNew:true,
                editable:false,
            }],
            loading:false,
            value:props.value,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            // navigated
        }
    }

    getRowByKey(key,newData) {
        const { data } = this.state;
        return (newData || data).filter(item => item.key === key)[0];
    }

    render () {
        const columns = [{
            title:  '成员姓名',
            dataIndex:  'name',
            key:    'name',
            width:  '20%',
            render: (text,  record) => {
                if (record.editable) {
                    return (
                        <Input
                            value={text}
                            autoFocus
                            placeholder="成员姓名"
                        />
                    )
                }
                return text;
            }
        },{
            title:  '工号',
            dataIndex:  'workId',
            key:    'workId',
            width:  '20%',
            render: (text,  record) => {
                if (record.editable) {
                    return (
                        <Input
                            value={text}
                            autoFocus
                            placeholder="工号"
                        />
                    )
                }
                return text;
            }
        },{
            title:  '所属部门',
            dataIndex:  'department',
            key:    'department',
            width:  '40%',
            render: (text,  record) => {
                if (record.editable) {
                    return (
                        <Input
                            value={text}
                            autoFocus
                            placeholder="所属部门"
                        />
                    )
                }
                return text;
            }
        },{
            title:  '操作',
            key: 'action',
            render:(text,   record) => {
                const {loading} = this.state;
                if (!!record.editable && loading) {
                    return null;
                }
                if (record.editable) {
                    if (record.isNew){
                        return(
                            <span>
                                <a onClick={e => this.saveRow(e, record.key)}>添加</a>
                                <Divider type="vertical" />
                                <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.key)}>
                                    <a>删除</a>
                                </Popconfirm>
                            </span>
                        )
                    }
                    return (
                        <span>
                            <a onClick={e => this.saveRow(e, record.key)}>保存</a>
                             <Divider type="vertical" />
                            <a onClick={e => this.cancel(e, record.key)}>取消</a>
                        </span>
                    );
                    return (
                        <span>
                            <a onClick={e => this.toggleEditable(e, record.key)}>编辑</a>
                            <Divider type="vertical" />
                            <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.key)}>
                            <a>删除</a>
                            </Popconfirm>
                        </span>
                    );
                }
            }
        }]

        const {loading, data } = this.state;
        console.log('state data + ',data);
        return (
            <Fragment>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
                <Button
                    style={{width:'100%',marginTop:16,marginBottom: 8 }}
                    type="dashed"
                    icon="plus"
                    onClick={() => {this.newMember()}}
                >
                    新增成员
                </Button>
            </Fragment>
        )
    }

    newMember = () => {
        const { data } =this.state;
        const newData = data.map(item => ({ ...item }));
        newData.push({
            workId: '',
            name: '',
            department: '',
            isNew:true,
            editable:true,
        });
        this.index += 1;
        this.setState({ data: newData });
    }

}

export default TableForm;
