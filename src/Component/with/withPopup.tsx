import React, { Component } from 'react';
import './popup.scss';
import { popup } from '../context';

/**
 * 弹窗
 * @param Comp 内部组件
 * @param w 弹框的宽
 * @param h 弹框的高
 */
export function withPopup (Comp: any, w: string = '90%', h: string = '80%') {
    return class extends Component {
        state: any;
        constructor (props: any) {
            super(props)
            this.state = {
                w: props.w || '90%',
                h: props.h || '80%',
                data: props.afferentData
            }
        }
        render () {
            return (<popup.Consumer>{(value: any) => 
                value.open ?
                <div className='popup'>
                    <div className="wrapper" 
                        style={{width: w, height: h}}
                    >{<Comp {...this.props} />}
                        <div className="close" onClick={() => {
                            value.change()
                        }}></div>
                    </div>
                </div>
                : null
            }</popup.Consumer>)
        }
    }
}