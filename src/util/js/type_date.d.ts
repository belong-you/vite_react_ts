/**
 * 获取当前时间
 * @param t
 */
export declare const getCurrentDate: (t: string | number | Date) => {
    year: string;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
};
/**
 * 格式化时间
 * @param formater
 * @param t
 */
export declare const dateFormater: (formater: string | undefined, t: string | Date) => string;
/**
 * 格林时间转为北京时间
 * @param {*} time
 */
export declare function switchTimeFormat(time: Date): string;
