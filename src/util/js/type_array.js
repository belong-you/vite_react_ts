var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { randomNum } from './type_number';
/**
 * 生成指定长度的数组
 * @param len 数组的长度
 */
export var createStipulateLengthArr = function (len) { return __spread(new Array(len).keys()); };
/**
 * 数组排序
 * @param arr 数组
 * @param num 规定排序方式 1：正序， 2：倒序， 3：随机
 */
export var arrSort = function (arr, num) {
    if (num === void 0) { num = 1; }
    if (num === 1)
        return arr.sort(function (a, b) { return a - b; });
    if (num === 2)
        return arr.sort(function (a, b) { return b - a; });
    if (num === 3)
        return Math.random() - 0.5;
};
/**
 * 数组中最大的数
 * @param arr
 */
export var arrMax = function (arr) { return Math.max.apply(null, arr); };
/**
 * 数组中最小的数
 * @param arr
 */
export var arrMin = function (arr) { return Math.min.apply(null, arr); };
/**
 * 数组降维
 * @param arr 被降维数组
 */
export var arrDropDimension = function (arr) { return Array.prototype.concat.apply([], arr); };
/**
 * 数组去重
 * @param arr 被去重数组
 */
export var arrUnique = function (arr) { return __spread(new Set(arr)); };
/**
 * 创建指定长度的随机数组，且规定范围
 * @param len 指定长度
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export var createLengthRandomArr = function (len, max, min) {
    if (max === void 0) { max = 10; }
    if (min === void 0) { min = 0; }
    var arr = new Array(len);
    var uniqueArr = function (arr) { return __spread(new Set(arr)); }; // 数组去重
    // 生成数组
    (function produceArr() {
        var i = 0;
        while (i < arr.length) {
            arr[i] = randomNum(max, min);
            i++;
        }
        return uniqueArr(arr).length < len && produceArr(); // 去重后的数组小于数组的长度，再次生成数组
    }());
    return arr;
};
/**
 * 类数组转数组
 * @param classArr 类数组对象
 */
export var classChangeArr = function (classArr) { return Array.from(classArr); };
/**
 * 获取数组中指定内容的索引值，（返回值为 -1 表示：找不到）
 * @param arr 要查询的数组
 * @param val 匹配的内容
 */
export function getArrayContentIndex(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=type_array.js.map