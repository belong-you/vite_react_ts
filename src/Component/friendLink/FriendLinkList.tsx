/* (JSX attribute) data: any */
import React, { Component } from 'react';
import { Table, Button, Modal, message } from 'antd';
import { getFriendLink, delFriendLink } from '../../axios/friendLink';
import { withPopup } from '../with/withPopup';
import { popup } from '../context';
import { Updata } from './Updata';
const confirm = Modal.confirm;

const Popup = withPopup(Updata, '600px', '80%');  // 高阶组件

export class FriendLinkList extends Component {
    state: any = {
        dataSource: [],
        columns: [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '网站昵称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '链接地址',
            dataIndex: 'link',
            key: 'link',
        }, {
            title: '备注',
            dataIndex: 'marks',
            key: 'marks',
        }, {
            title: '',
            dataIndex: 'btn',
            key: 'btn',
        }],
        afferentData: {},
    }
    async getData () {
        const data: any = await getFriendLink();
        const arr: object[] = [];
        data.forEach((val: any) => {
            const link = val.link;
            arr.push(val)
            arr.forEach((item) => {
                val.key = val.id
                val.link = <a href={link} target='_blank'>{link}</a>
                val.btn = (<popup.Consumer>{(value: any) => 
                    <>
                        <Button type="primary" onClick={() => {
                            // console.log(val)
                            value.change();
                            this.setState({
                                afferentData: val
                            })
                            // this.forceUpdate()
                        }}>编辑</Button>&nbsp;
                        <Button type="default" onClick={() => {
                            this.deleteData(val.id);
                        }}>删除</Button>
                    </>
                }</popup.Consumer>)
            })
        })
        this.setState({
            dataSource: arr
        })
    }
    
    componentDidMount () {
        this.getData()
    }
    render () {
        return (<>
            <Table dataSource={this.state.dataSource} columns={this.state.columns}></Table>
            <Popup {...this.state.afferentData} />
        </>)
    }

    deleteData = async (id: string | number) => {
        confirm({
            title: '提示',
            content: '确认删除该友链',
            onOk() {
                delFriendLink(id).then(res => {
                    message.success(res)
                })
            },
            onCancel() {},
        });
    }
}
