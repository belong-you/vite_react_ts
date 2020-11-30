/**
 * 验证邮箱格式
 * @param str
 */
export declare const isEmail: (str: string) => boolean;
/**
 * 验证手机号码
 * @param str
 */
export declare const isMobile: (str: string) => boolean;
/**
 * 电话号码验证
 * @param str
 */
export declare const isPhone: (str: string) => boolean;
/**
 * 是否 url 地址
 * @param str
 */
export declare const isURL: (str: string) => boolean;
/**
 * 检测密码强度（最强为 4 级）
 * @param str
 */
export declare const checkPwd: (str: string) => number;
/**
 * 检测属于什么类型
 * @param o
 */
export declare const isType: (o: any) => any;
/**
 * 去除 html 标签
 * @param str
 */
export declare const removeHtmltag: (str: string) => string;
/**
 * 是否包含某个 class
 * @param el
 * @param className
 */
export declare const ishasClass: (el: any, className: string) => boolean;
