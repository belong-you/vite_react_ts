import { randomNum } from './type_number';

/**
 * 生成指定长度的数组
 * @param len 数组的长度
 */
export const createStipulateLengthArr = (len: number) => [...new Array(len).keys()];

/**
 * 数组排序
 * @param arr 数组
 * @param num 规定排序方式 1：正序， 2：倒序， 3：随机
 */
export const arrSort = (arr: number[], num: number = 1) => {
    if (num === 1) return arr.sort((a, b) => a - b);
    if (num === 2) return arr.sort((a, b) => b - a);
    if (num === 3) return Math.random() - 0.5;
}

/**
 * 数组中最大的数
 * @param arr 
 */
export const arrMax = (arr: number[]) => Math.max.apply(null, arr);

/**
 * 数组中最小的数
 * @param arr 
 */
export const arrMin = (arr: number[]) => Math.min.apply(null, arr);

/**
 * 数组降维
 * @param arr 被降维数组
 */
export const arrDropDimension = (arr: number) => Array.prototype.concat.apply([], arr);

/**
 * 数组去重
 * @param arr 被去重数组
 */
export const arrUnique = (arr: any[]) => [...new Set(arr)];

/**
 * 创建指定长度的随机数组，且规定范围
 * @param len 指定长度
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export const createLengthRandomArr = (len: number, max: number = 10, min: number = 0) => {
    let arr = new Array(len);
    const uniqueArr = (arr: number[]) => [...new Set(arr)];  // 数组去重
    // 生成数组
    (function produceArr() {
        let i = 0;
        while (i < arr.length) {
            arr[i] = randomNum(max, min);
            i++;
        }
        return uniqueArr(arr).length < len && produceArr();  // 去重后的数组小于数组的长度，再次生成数组
    }());
    return arr;
}

/**
 * 类数组转数组
 * @param classArr 类数组对象
 */
export const classChangeArr = (classArr: Iterable<unknown> | ArrayLike<unknown>) => Array.from(classArr);

/**
 * 获取数组中指定内容的索引值，（返回值为 -1 表示：找不到）
 * @param arr 要查询的数组
 * @param val 匹配的内容
 */
export function getArrayContentIndex (arr: any[], val: any) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
    return -1;
}