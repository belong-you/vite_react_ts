/**
 * 查看第 n 层父元素节点
 * @param {*} elem
 * @param {number} n （不可为负值）
 */
export declare const lookupParent: (elem: any, n: number) => any;
/**
 * 返回当前元素的元素子节点
 */
export declare const myChildren: (ele: any) => () => any[];
/**
 * 返回元素的第 n 个兄弟元素节点
 * @param {*} elem
 * @param {number} n 正返回后面的兄弟元素节点，n为负返回前面的，n为0返回自己
 */
export declare const retSibling: (elem: any, n: number) => any;
/**
 * 获取元素样式属性
 * @param {*} elem
 * @param {string} prop CSS属性
 */
export declare const getStyle: (elem: any, prop: string) => any;
/**
 * 阻止事件冒泡
 * @param {*} e 源事件中也需要传参
 */
export declare const stopBubble: (e: any) => void;
/**
 * 添加某个 class
 * @param el
 * @param className 自定义 class 属性
 */
export declare const addClass: (el: any, className: string) => void;
/**
 * 移除某个 class
 * @param el
 * @param className 自定义 class 属性
 */
export declare const removeClass: (el: any, className: string) => void;
/**
 * 阻止默认事件
 * @param {*} event
 */
export declare const cancelHandler: (e: any) => void;
/**
 * 鼠标拖拽
 * @param {Element} ele 所拖拽的元素
 * @param {Element} limit 限制移动范围的元素（为空时，不限制移动范围）
 */
export declare const mouseDrag: (ele: any, limit: any) => void;
