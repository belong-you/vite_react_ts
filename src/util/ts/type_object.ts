/**
 * 浅层克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
export const cloneObj = (origin: { [x: string]: any; }, target: object = {}) => {
    for (const prop in origin) {
        target[prop] = origin[prop];
    }
    return target;
}

/**
 * 深度克隆
 * @param origin 被克隆对象
 * @param target 克隆对象
 */
export function deepCloneObj (origin: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, target: object = {}) {
    const toStr = Object.prototype.toString;
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)) {  // 查看自身属性是否存在
            // 判断是数组还是对象
            if (origin[prop] !== null && typeof (origin[prop]) === 'object') {
                target[prop] = toStr.call(origin[prop]) == '[object Array]' ? [] : {};
                this.obj_deepClone(origin[prop], target[prop]);  // 重新克隆子级
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}