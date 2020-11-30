import React, { Component } from 'react';
import '../common/updata.scss';
import { Button, message } from 'antd';
import { reviseFriendLink } from '../../axios/friendLink';
import { popup } from '../context';


export class Updata extends Component {
    state: any;
    constructor (props: any) {
        super(props);
        this.state = {
            ...props
        }
    }
    
    render () {
        const data: any = this.state;
        return (<ul className='updata'>
            <li>
                <span>昵称：</span>
                <input type="text" defaultValue={data.name} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        name: value
                    })
                }}/>
            </li>
            <li>
                <span>链接：</span>
                <input type="text" defaultValue={data.link} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        link: value
                    })
                }}/>
            </li>
            <li>
                <span>备注：</span>
                <input type="text" defaultValue={data.marks} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        marks: value
                    })
                }}/>
            </li>
            <li>
            <popup.Consumer>{(value: any) => 
                <Button type="primary" onClick={() => {
                    this.submit();
                    value.change();
                }}>提交</Button>
            }</popup.Consumer>
            </li>
        </ul>)
    }

    submit = async () => {
        const {id, name, link, marks} = this.state;
        if (!name || !link) {
            message.error('参数不足');
            return; 
        }
        await reviseFriendLink(id, name, link, marks).then(res => {
            message.success('修改成功');
        })
    }
}