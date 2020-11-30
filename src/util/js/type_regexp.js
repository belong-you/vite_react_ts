/**
 * 验证邮箱格式
 * @param str
 */
export var isEmail = function (str) { return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str); };
/**
 * 验证手机号码
 * @param str
 */
export var isMobile = function (str) { return /^1[0-9]{10}$/.test(str); };
/**
 * 电话号码验证
 * @param str
 */
export var isPhone = function (str) { return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str); };
/**
 * 是否 url 地址
 * @param str
 */
export var isURL = function (str) { return /^http[s]?:\/\/.*/.test(str); };
/**
 * 检测密码强度（最强为 4 级）
 * @param str
 */
export var checkPwd = function (str) {
    var Lv = 0;
    if (str.length < 6) {
        return Lv;
    }
    if (/[0-9]/.test(str)) {
        Lv++;
    }
    if (/[a-z]/.test(str)) {
        Lv++;
    }
    if (/[A-Z]/.test(str)) {
        Lv++;
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++;
    }
    return Lv;
};
/**
 * 检测属于什么类型
 * @param o
 */
export var isType = function (o) { return Object.prototype.toString.call(o).slice(8, -1); };
/**
 * 去除 html 标签
 * @param str
 */
export var removeHtmltag = function (str) { return str.replace(/<[^>]+>/g, ''); };
/**
 * 是否包含某个 class
 * @param el
 * @param className
 */
export var ishasClass = function (el, className) {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
};
//# sourceMappingURL=type_regexp.js.map