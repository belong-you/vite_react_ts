import React, { Component } from 'react';
import { signIn } from '../context';

interface Props {
    children: {
        list: object[]
    }
}

interface Obj {
    name: string,
    comp: any
}

export class Common extends Component {
    list: any[] = [];
    state: any = {
        comp: null,
        active: 0
    }
    constructor (props: Props) {
        super(props);
        this.list = props.children.list;
    }

    btnChange (num: number) {
        this.setState({
            comp: this.list[num].comp
        })
    }

    // 生成侧边栏列表
    createList () {
        const arr: object[] = [];
        this.list.forEach((val: any, index) => {
            arr.push(<li className={index === this.state.active ? 'active' : ''} key={index} onClick={() => {
                this.btnChange(index);
                this.setState({
                    active: index
                })
            }} >{val.name}</li>)
        })
        return arr;
    }

    componentDidMount () {
        this.setState({
            comp: this.list[0].comp
        })
    }
    render () {
        let Comp = this.state.comp;
        return (<signIn.Consumer>{(value: any) => 
            value.isSignIn ?
            <>
                <ul className="list">
                    {this.createList()}
                </ul>
                <div className="content">
                    {Comp}
                </div>
            </>
            : location.pathname = '/vise/signIn'
        }</signIn.Consumer>)
    }
}