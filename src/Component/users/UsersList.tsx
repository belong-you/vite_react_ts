import React, { Component } from 'react';
import { Table, Button, Modal, Switch, message } from 'antd';
import { getUserList, reviseUserList } from '../../axios/users';
import { dateFormater, switchTimeFormat } from '../../util/ts/type_date';
import { withPopup } from '../with/withPopup';
import { popup } from '../context';
import { Updata } from './Updata';

const Popup = withPopup(Updata, '600px', '80%');

export class UsersList extends Component {
    state: any = {
        dataSource: [],
        visible: false,
        columns: [{
            title: '用户 ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '昵称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '邮箱',
            dataIndex: 'mail',
            key: 'mail',
        }, {
            title: '注册时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '邮箱推送消息',
            dataIndex: 'isReceive',
            key: 'isReceive',
        }, {
            title: '屏蔽此人',
            dataIndex: 'noAccept',
            key: 'noAccept'
        }, {
            title: '',
            dataIndex: 'btn',
            key: 'btn',
        }],
        sendData: {}
    }
    async getData() {
        const data: any = await getUserList();
        const arr: object[] = [];
        data.forEach((val: any) => {
            arr.push(val)
            const bool = val.isReceive.data[0];
            const time = val.time;
            arr.forEach(() => {
                val.key = val.id;
                val.time = switchTimeFormat(time);
                val.isReceive = (<Switch defaultChecked={bool ? true : false} onChange={e => {
                    this.onChange(val.id, e)
                }} />);
                val.noAccept = (<Switch defaultChecked={false}></Switch>)
                val.btn = (<popup.Consumer>{(value: any) => 
                    <>
                        <Button type="default" >注销</Button>
                    </> 
                }</popup.Consumer>)
            })
        })
        this.setState({
            dataSource: arr
        })
    }
    componentDidMount() {
        this.getData()
    }
    
    render() {
        return (<>
            <Table dataSource={this.state.dataSource} columns={this.state.columns}></Table>
            <Modal
                title = "提示"
                visible = {this.state.visible}
                onOk = {this.handleOk}
                onCancel = {this.closePopup}
            >确认删除该数据？</Modal>
            <Popup {...this.state.sendData} />
        </>)
    }

    async onChange (id: string | number, e: boolean) {
        let num: number;
        e ? num = 1 : num = 0;
        await reviseUserList(id, num).then(res => {
            message.success(res)
        })
    }

    // 确认删除数据
    handleOk = () => {
        this.closePopup()
    }
    // 关闭弹窗
    closePopup = () => this.setState({ visible: false });

}



// // 获取父节点
// function retSibling(elem: any, n: number) {
//     while (elem && n) {
//         if (n > 0) {
//             if (elem.parentElement) {
//                 elem = elem.parentElement;
//             } else {
//                 for (elem.parentElement; elem && elem.parentElement != 1; elem = elem.parentElement);
//             }
//             n--;
//         } else {
//             if (elem.children) {
//                 elem = elem.children;
//             } else {
//                 for (elem.children; elem && elem.children != 1; elem = elem.children);
//             }
//             n++;
//         }
//     }
//     return elem;
// }