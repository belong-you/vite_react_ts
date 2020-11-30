/**
 * 生成指定长度的数组
 * @param len 数组的长度
 */
export declare const createStipulateLengthArr: (len: number) => number[];
/**
 * 数组排序
 * @param arr 数组
 * @param num 规定排序方式 1：正序， 2：倒序， 3：随机
 */
export declare const arrSort: (arr: number[], num?: number) => number | number[] | undefined;
/**
 * 数组中最大的数
 * @param arr
 */
export declare const arrMax: (arr: number[]) => any;
/**
 * 数组中最小的数
 * @param arr
 */
export declare const arrMin: (arr: number[]) => any;
/**
 * 数组降维
 * @param arr 被降维数组
 */
export declare const arrDropDimension: (arr: number) => any;
/**
 * 数组去重
 * @param arr 被去重数组
 */
export declare const arrUnique: (arr: any[]) => any[];
/**
 * 创建指定长度的随机数组，且规定范围
 * @param len 指定长度
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export declare const createLengthRandomArr: (len: number, max?: number, min?: number) => any[];
/**
 * 类数组转数组
 * @param classArr 类数组对象
 */
export declare const classChangeArr: (classArr: Iterable<unknown> | ArrayLike<unknown>) => unknown[];
/**
 * 获取数组中指定内容的索引值，（返回值为 -1 表示：找不到）
 * @param arr 要查询的数组
 * @param val 匹配的内容
 */
export declare function getArrayContentIndex(arr: any[], val: any): number;
