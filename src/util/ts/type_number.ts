/**
 * 生成随机数
 * @param max 最大值（取不到）
 * @param min 最小值
 */
export const randomNum = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
}
/**
 * 数字求和
 * @param args
 */
export const num_sum = (...args: number[]) => {
    return args.reduce((s, item) => s + item, 0)
}

/**
 * 数字生成器
 */
export function *createNum() {  // 生成器函数传参毫无意义
    let n = 0
    while (true) {
        yield n;
        n++;
    }
}