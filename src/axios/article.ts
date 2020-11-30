import axios from './intercept';

/**
 * 获取文章
 */
export const getArticleList = () => axios.get('article');

/**
 * 获取单篇文章
 * @param id 
 */
export const getArticle = (id: number | string) => axios.get(`article/${id}`);

/**
 * 删除文章
 * @param id 
 */
export const delArticle = (id: number | string) => axios.delete(`article/${id}`);

// 修改文章
export const changeArticle = (id: string, title: string, type: string, content: string) => axios.put('article/change', {
    params: {
        id, 
        title, 
        type, 
        content,
    }
})

/**
 * 添加一篇文章
 * @param title 标题
 * @param type 类型
 * @param time 时间
 * @param content 内容
 */
export const addArticle = (title: string, type: string, time: string, content: string) => axios.post('article', {
    params: {
        title, 
        type, 
        time, 
        content,
    }
})