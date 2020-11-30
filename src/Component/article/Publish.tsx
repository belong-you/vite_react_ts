/* (JSX attribute) React.HTMLAttributes<HTMLHeadingElement>.suppressContentEditableWarning?: boolean | undefined */
import React, { Component } from 'react';
import showdown from 'showdown';
import { Button, Input, Modal, message } from 'antd';
// import { TypeChange } from './TypeChange';
import './Publish.scss';
const converter = new showdown.Converter();
import { getArticle, addArticle, changeArticle } from '../../axios/article';
import { dateFormater, switchTimeFormat } from '../../util/ts/type_date';
const confirm = Modal.confirm;

export class Publish extends Component {
    state: any;
    static defaultProps: object = {
        data: {id: null}
    }
    constructor (props: any) {
        super(props);
        this.state = {
            id: props.id,
            content: `# 标题...`,
            look: 0,
            praise: 0,
            time: dateFormater(),
            type: 'HTML',
            comp: false
        }
    }

    async componentDidMount () {
        if (this.state.id) {
            await getArticle(this.state.id).then((res: any) => {
                // console.log(res)
                this.setState({
                    content: res[0].content,
                    title: this.getTitle(res[0].content),
                    look: res[0].look,
                    praise: res[0].praise,
                    time: switchTimeFormat(res[0].time),
                    type: res[0].type,
                })
            })
        }
        this.setState({
            comp: true
        })

        // document.addEventListener('keydown', function(event){
        //     return !(event.ctrlKey && 13 == event.keyCode) || (event.returnValue = false);
        // })
    }
    render () {
        return (<div className='warpper clearfix'>
            <ul className="column">
                <li >标题：{this.getTitle(this.state.content)}
                    {/* <span contentEditable suppressContentEditableWarning onKeyDown={(ev: any) => {
                        if (13 == ev.keyCode) {
                            this.setState({
                                title: ev.target.innerText
                            })
                        }
                    }}>{this.state.title}</span> */}
                </li>
                <li>浏览量：{this.state.look}</li>
                <li>点赞：{this.state.praise}</li>
                
                <li>类型：<Input value={this.state.type ? this.state.type : null} /></li>
                <li>发布时间：{this.state.time}</li>
                {this.state.id ? <><Button type="dashed" onClick={this.storage}>提交</Button>&nbsp;</>
                : <><Button type="primary" onClick={this.release}>发布</Button></> }
            </ul>
            <div className="edit">
                { this.state.comp ? 
                    <textarea className="edit" defaultValue={this.state.content} onChange={e => {
                        const value = e.target.value;
                        this.setState({
                            content: value
                        })
                    }}
                    ></textarea>
                : null }
            </div>
            <div className="show">
                <div className="article-main"
                    dangerouslySetInnerHTML={{__html: converter.makeHtml(this.state.content)}}
                ></div>
            </div>
        </div>)
    }
    getTitle (text: string) {
        if (/#\s.{0,100}?(\n|\r\n)/.test(text)) {
            const arr: any = text.match(/#\s.{0,100}?(\n|\r\n)/);
            return arr[0].slice(2, -1);
        }
    }

    // 
    storage = async () => {
        const { id, type, content } = this.state;
        const title = this.getTitle(content);
        
        await changeArticle(id, title, type, content).then(res => {
            message.info(res)
        })
    }

    // 发布
    release = () => {
        const self = this;
        confirm({
            title: '提示',
            content: '请确认是否发布文章并推送消息',
            async onOk () {
                const { type, time, content } = self.state;
                const title = self.getTitle(content);
                console.log(title, type, time, content);
        
                await addArticle(title, type, time, content).then(res => {
                    message.info(res);
                })
                
            },
            onCancel () {},
        });
    }
}
