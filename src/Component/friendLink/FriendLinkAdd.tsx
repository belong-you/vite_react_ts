import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
const FormItem = Form.Item;
import { addFriendLink } from '../../axios/friendLink';

interface State {
    name: string,
    link: string,
    marks: any
}
export class FriendLinkAdd extends Component {
    state: State = {
        name: '',
        link: '',
        marks: null
    }
    handleSubmit () {
        const {name, link, marks} = this.state;
        console.log(marks)
        if (!name || !link) {
            message.error('参数不足');
            return;
        }
        addFriendLink(name, link, marks).then(res => {
            
            console.log(res);
        })
    }
    
    inputChange (type: string, value: string) {
        console.log(type)
        this.setState({
            [type]: value
        })
    }
    render() {
        return (<>
            <Form>
                <FormItem>
                    <Input placeholder="网站昵称" defaultValue='' onChange={e => {
                        this.inputChange('name', e.target.value)
                    }} />
                    <Input placeholder="链接地址" defaultValue='' onChange={e => {
                        this.inputChange('link', e.target.value)
                    }} />
                    <Input placeholder="备注" defaultValue='' onChange={e => {
                        this.inputChange('marks', e.target.value)
                    }} />
                </FormItem>
                <Button type="primary" onClick={() => {
                    this.handleSubmit()
                }} htmlType="submit">提交</Button>
            </Form>
        </>)
    }
}
