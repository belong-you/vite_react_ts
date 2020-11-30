import axios from './intercept';

// 获取评论
export const getDiscuss = (type: string) => axios.get(`discuss/${type}`);

// 按类型获取评论
export const getDiscussType = () => axios.get(`discuss/type`);

// 按类型获取评论
export const delDiscuss = (id: number | string) => axios.delete(`discuss/${id}`);

// 添加评论
export const addDiscuss = (content: string, time: string, address: string, replyId: number) => axios.post('discuss', {
    params: {
        content,
        time,
        address,
        replyId
    }
});