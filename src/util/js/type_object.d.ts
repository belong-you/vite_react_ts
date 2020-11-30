/**
 * 浅层克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
export declare const cloneObj: (origin: {
    [x: string]: any;
}, target?: object) => object;
/**
 * 深度克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
export declare function deepCloneObj(origin: {
    [x: string]: any;
    hasOwnProperty: (arg0: string) => any;
}, target?: object): object;
