import React, { Component } from 'react';
import { Dropdown, Button, Menu } from 'antd';

export class TypeChange extends Component {
    constructor (props: any) {
        super(props)
    }
    state = {
        type: this.props.children
    }
    render () {
        const types = ['Linux', 'CSS']
        const arr: JSX.Element[] = [];
        types.forEach((val, index) => {
            arr.push(<Menu.Item key={index}>{val}</Menu.Item>);
        })
        return (
            <Dropdown 
                overlay={() => <Menu onClick={this.handleMenuClick}>{...arr}</Menu>}
            >
                <Button>{this.state.type}</Button>
            </Dropdown>
        )
    }

    handleMenuClick = (e: any) => {
        const value = e.item.node.innerText;
        // console.log(value, this.state)
        this.setState({
            type: value
        })
    }
}