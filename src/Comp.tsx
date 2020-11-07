import React, { Component } from 'react';

export default class Comp extends Component {
    state = {
        num: 0
    }
    render () {
        return (<h1 onClick={() => {
            this.setState({
                num: ++ this.state.num
            })
        }}>{this.state.num}</h1>)

    }
}