import React, { Component } from 'react';
import { getDiscuss, delDiscuss } from '../../axios/discuss';
import './discuss-area.scss';
import { switchTimeFormat } from '../../util/ts/type_date';
import { message, Modal } from 'antd';
const confirm = Modal.confirm;

export class DiscussArea extends Component {
    state: any;
    constructor (props: any) {
        super(props);
        this.state = {
            discussData: [],
            replyData: [],
            type: props.children.type,
        }
    }
    async componentDidMount () {
        const { discussData, replyData } = await this.getDate(this.state.type);
        this.setState({
            discussData,
            replyData,
        })
    }

    render () {
        return (<ul className='discuss-area'>
            {this.runDiscussPage()}
        </ul>);
    }

    getDate = async (id: string) => {
        const discussData: object[] = [], replyData: object[] = [];
        await getDiscuss(id).then((res: any) => {
            res.filter((val: any) => {
                val.time = switchTimeFormat(val.time)
                if (val.reply_id) {
                    replyData.push(val);
                } else {
                    discussData.push(val);
                }
            })
        })
        return {
            discussData,
            replyData,
        }
    }

    runDiscussPage = () => {
        const arr: JSX.Element[] = [];
        this.state.discussData.forEach((val: any) => {
            arr.push(<li key={val.id}>
                <span className="block" style={{background: val.color}}>{val.name.slice(0, 1)}</span>
                <strong className="name" style={{color: val.color}}>{val.name}</strong>
                <span className='time'>{val.time}</span>
                <p>
                    <span>{val.content}</span>
                    <span className='reply'>回复</span>
                </p>
                <del onClick={() => {
                    this.deleteReply(val.id);
                }}>删除</del>
                <ul className='reply-list'>
                    {this.runReplyPage(val.id)}
                </ul>
            </li>)
        })
        // console.log(arr)
        return arr;
    }

    runReplyPage = (num: string | number) => {
        const arr: JSX.Element[] = [];
        this.state.replyData.reverse().filter((val: any) => {
            if (val.reply_id === num) {
                arr.push(<li key={val.id}>
                    <strong className="name" style={{color: val.color}}>{val.name}</strong>
                    <span className='time'>{val.time}</span>
                    <p>
                        <span>{val.content}</span>
                        <span className='reply'>回复</span>
                    </p>
                    <del onClick={() => {
                        this.deleteReply(val.id);
                    }}>删除</del>
                </li>)
            }
        })
        return arr.reverse();
    }

    // 回复评论
    reply = () => {
        
    }
    
    // 删除评论
    deleteReply = async (id: number | string) => {
        const self: any = this;
        confirm({
            title: '提示',
            content: '确认删除该评论',
            async onOk () {
                await delDiscuss(id).then(res => {
                    const { discussData, replyData } = self.getDate(self.state.type);
                    self.setState({
                        discussData,
                        replyData,
                    })
                    message.info('删除成功');
                })
            },
            onCancel() {},
        });
    }
}
