import React, { Component } from 'react';
import { Table, Button, Modal, message } from 'antd';
import { getArticleList, delArticle } from '../../axios/article';
import './ArticleList.scss';
import { withPopup } from '../with/withPopup';
import { Publish } from './Publish';
import { popup } from '../context';
import { switchTimeFormat } from '../../util/ts/type_date';
const confirm = Modal.confirm;

const Popup = withPopup(Publish, '90%', '90%');  // 高阶组件

export class ArticleList extends Component {
    state: any = {
        dataSource: [],
        columns: [],
    }
    
    componentDidMount () {
        this.setState({
            columns: [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '浏览量',
                dataIndex: 'look',
                key: 'look',
            }, {
                title: '点赞',
                dataIndex: 'praise',
                key: 'praise',
            }, {
                title: '发布时间',
                dataIndex: 'time',
                key: 'time',
            }, {
                title: '',
                dataIndex: 'btn',
                key: 'btn',
            }],
            sendData: {}
        })
        this.initData();
    }
    render () {
        return (<>
            <Table dataSource={this.state.dataSource} columns={this.state.columns}></Table>
            <Popup {...this.state.sendData} />
        </>)
    }

    async initData () {
        const data: any = await getArticleList();
        const arr: object[] = [];
        data.forEach((val: any) => {
            arr.push(val)
            let time = val.time;
            arr.forEach((item: any) => {
                val.key = val.id;
                // val.type = <TypeChange children={type}/>;
                val.time = switchTimeFormat(time)
                val.btn = (<popup.Consumer>{(value: any) => <>
                    <Button type="primary" onClick={() => {
                        value.change();
                        this.setState({
                            sendData: val
                        })
                    }}>编辑</Button>&nbsp;
                    <Button type="default" onClick={() => {
                        this.deleteData(val.id);
                    }}>删除</Button>
                </>}</popup.Consumer>)
            })
        })
        this.setState({
            dataSource: arr
        })
    }

    deleteData = async (id: number | string) => {
        const self = this;
        confirm({
            title: '提示',
            content: '确认删除该文章',
            onOk() {
                delArticle(id).then(res => {
                    message.success(res);
                    self.initData();
                })
            },
            onCancel() {},
        });
    }
}
