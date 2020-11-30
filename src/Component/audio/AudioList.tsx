import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { getAudioList } from '../../axios/audio';
import { withPopup } from '../with/withPopup';
import { Updata } from './Updata';
import { popup } from '../context';

const Popup = withPopup(Updata, '600px', '80%');  // 高阶组件

const columns = [{
    title: '歌曲名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '歌曲地址',
    dataIndex: 'link',
    key: 'link',
}, {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
}, {
    title: '',
    dataIndex: 'btn',
    key: 'btn',
}];

  
export class AudioList extends Component {
    state: any = {
        dataSource: [],
        sendData: {}
    }
    async getData () {
        const data: any = await getAudioList();
        const arr: object[] = [];
        data.forEach((val: any) => {
            arr.push(val)
            arr.forEach((item: any) => {
                val.key = val.id;
                val.btn = (<popup.Consumer>{(value: any) => 
                    <>
                        <Button type="primary" onClick={() => {
                            value.change();
                            this.setState({
                                sendData: val
                            })
                        }}>编辑</Button>&nbsp;
                        <Button type="default">删除</Button>
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
            <Table dataSource={this.state.dataSource} columns={columns}></Table>
            <Popup {...this.state.sendData} />
        </>)
    }
}
