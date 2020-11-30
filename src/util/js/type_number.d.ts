/**
 * 生成随机数
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export declare const randomNum: (max: number, min?: number) => number;
/**
 * 数字求和
 * @param args
 */
export declare const num_sum: (...args: number[]) => number;
/**
 * 数字生成器
 */
export declare function createNum(): Generator<number, void, unknown>;
