import React, { Component } from 'react';
import './discussType.scss';
import { getDiscussType } from '../../axios/discuss';
import { DiscussArea } from './DiscussArea';

export class DiscussList extends Component {
    state = {
        types: [],
        active: 0,
        show: true,
        run: 'stay',
    }
    
    render () {
        return (<>
            <ul className='discuss-list'>
                {this.createList()}
            </ul>
            {this.state.show ?
                <DiscussArea children={{type: this.state.run}} />
            : null}
        </>)
    }

    async componentDidMount () {
        await getDiscussType().then((res: any) => {
            this.setState({
                types: res
            })
        });
    }

    createList () {
        const arr: JSX.Element[] = [];
        this.state.types.forEach((val: any, index) => {
            let prop = val.address;
            if (prop !== 'stay') {
                prop = '文章 ' + prop;
            } else {
                prop = '留言板';
            }
            arr.push(<li 
                className={this.state.active === index ? 'active' : ''}
                key={index}
                onClick={() => {
                    this.setState({
                        active: index,
                        run: val.address,
                        show: false,
                    }, () => {
                        this.setState({
                            show: true,
                        })
                    })
                }}
            >{prop}</li>)
        });
        return arr;
    }

}