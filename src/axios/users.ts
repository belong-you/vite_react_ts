import { number } from 'prop-types';
import axios from './intercept';

// 获取所有用户
export const getUserList = () => axios.put('users');

// 修改是否发送邮箱
export const reviseUserList = (id: string | number, num: number) => axios.put('users/isNews', {
    params: {
        id,
        num,
    }
});

// 管理员登录
export const adminSignIn = (name: string, pwd: string) => axios.post('users/admin', {
    params: {
        name,
        pwd,
    }
})