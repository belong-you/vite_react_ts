import axios from './intercept';

// 获取友情链接
export const getFriendLink = () => axios.get('friendLink');

// 获取友情链接
export const reviseFriendLink = (id: string | number, name: string, link: string, marks: string) => axios.post('friendLink', {
    params: {
        id,
        name,
        link,
        marks,
    }
});

// 增加友情链接
export const addFriendLink = (name: string, link: string, marks: string) => axios.put('friendLink', {
    params: {
        name,
        link,
        marks,
    }
});

// 删除友情链接
export const delFriendLink = (id: string | number) => axios.delete(`friendLink/${id}`);