import React, { Component } from 'react';
import '../common/updata.scss';

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
        return (<ul className="updata">
            <li>
                <span>歌曲名称：</span>
                <input type="text" defaultValue={data.name} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        name: value
                    })
                }}/>
            </li>
            <li>
                <span>地址：</span>
                <input type="text" defaultValue={data.link} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        link: value
                    })
                }}/>
            </li>
            <li>
                <span>作者：</span>
                <input type="text" defaultValue={data.author} onChange={(e: any) => {
                    const value = e.target.value;
                    this.setState({
                        author: value
                    })
                }}/>
            </li>
        </ul> )
    }
}