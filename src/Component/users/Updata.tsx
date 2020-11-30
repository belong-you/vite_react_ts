import React, { Component } from 'react';
import '../common/updata.scss';
import { Button } from 'antd';


export class Updata extends Component {
    constructor (props: any) {
        super(props);
        this.state = {
            ...props
        }
    }
    
    render () {
        const data: any = this.state;
        // console.log(data)
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
                <span>邮箱：</span>
                <input type="text" defaultValue={data.mail} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        mail: value
                    })
                }}/>
            </li>
            <li>
                <span>注册时间：</span>
                <input type="text" defaultValue={data.time} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        time: value
                    })
                }}/>
            </li>
            <li>
                <Button type="primary" onClick={this.submit}>提交</Button>
            </li>
        </ul>)
    }

    submit = () => {
        console.log(this.state)
    }
}