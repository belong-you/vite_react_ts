import React, { Component, createRef } from 'react';
import { Form, Input, Button, message } from 'antd';
import { adminSignIn } from '../axios/users';
import { signIn } from '../Component/context';
import './signIn.scss';
const FormItem = Form.Item;

interface Props {
    history: {
        push: () => {}
    }
}

export class SignIn extends Component {
    state: any;
    props: any;
    constructor (props: Props) {
        super(props);
        const jump = props.history.push()
        this.state = {
            name: null,
            passwd: null,
        }
    }
    
    inputName: any = createRef();
    inputPwd: any = createRef();

    componentDidMount () {
        // console.log(this.inputName)
    }

    render () {
        return (<div className="sign-in">
            <div className="wrap">
                <Form className="login-form">
                    <FormItem>
                        <Input placeholder="AdminName" value={this.state.name} onChange={e => {
                            this.setState({
                                name: e.target.value
                            })
                        }} />
                    </FormItem>
                    <FormItem>
                        <Input type="password" placeholder="Password" value={this.state.passwd} onChange={e => {
                            this.setState({
                                passwd: e.target.value
                            })
                        }} />
                    </FormItem>
                    <FormItem>
                        <signIn.Consumer>{(value: any) => <>
                            <Button type="primary" onClick={() => {
                                this.signIn(value);
                            }}>登录</Button>
                        </>}</signIn.Consumer>
                    </FormItem>
                </Form>
            </div>
        </div>);
    }

    componentWillUnmount () {
        this.setState = () => false;
    }

    signIn = async (value: { sign: () => void; }) => {
        let { name, passwd } = this.state;
        if (!name || !passwd) {
            message.warning('请输入管理员账号和密码');
            return;
        }
        await adminSignIn(name, passwd).then((res: any) => {
            message.info(res);
            if (res === '登录成功') {
                value.sign();
                setTimeout(() => {
                    this.props.history.push('/vise/article');
                }, 1200)
                return;
            }
            this.setState({
                name: null,
                passwd: null
            })
        })
    }
}