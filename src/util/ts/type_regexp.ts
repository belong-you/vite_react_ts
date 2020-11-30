
/**
 * 验证邮箱格式
 * @param str
 */
export const isEmail = (str: string) => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);

/**
 * 验证手机号码
 * @param str 
 */
export const isMobile = (str: string) => /^1[0-9]{10}$/.test(str);

/**
 * 电话号码验证
 * @param str
 */
export const isPhone = (str: string) => /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str);

/**
 * 是否 url 地址
 * @param str 
 */
export const isURL = (str: string) => /^http[s]?:\/\/.*/.test(str);

/**
 * 检测密码强度（最强为 4 级）
 * @param str 
 */
export const checkPwd = (str: string) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}

/**
 * 检测属于什么类型
 * @param o
 */
export const isType = (o: any) => Object.prototype.toString.call(o).slice(8, -1);

/**
 * 去除 html 标签
 * @param str 
 */
export const removeHtmltag = (str: string) => str.replace(/<[^>]+>/g, '');

/**
 * 是否包含某个 class
 * @param el 
 * @param className 
 */
export const ishasClass = (el: any, className: string) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}