/**
 * 获取当前时间
 * @param t
 */
export var getCurrentDate = function (t) {
    var date = t ? new Date(t) : new Date();
    return {
        year: date.getFullYear() + '',
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
};
/**
 * 格式化时间
 * @param formater
 * @param t
 */
export var dateFormater = function (formater, t) {
    if (formater === void 0) { formater = 'YYYY-MM-DD HH:mm:ss'; }
    var _a = getCurrentDate(t), year = _a.year, month = _a.month, day = _a.day, hour = _a.hour, minute = _a.minute, second = _a.second;
    return formater.replace(/YYYY/g, year)
        .replace(/YY/g, year.substr(2, 2))
        .replace(/MM/g, (month < 10 ? '0' : '') + month)
        .replace(/DD/g, (day < 10 ? '0' : '') + day)
        .replace(/hh/g, (hour < 10 ? '0' : '') + hour)
        .replace(/mm/g, (minute < 10 ? '0' : '') + minute)
        .replace(/ss/g, (second < 10 ? '0' : '') + second);
};
var addZero = function (v) { return v < 10 ? '0' + v : v; };
/**
 * 格林时间转为北京时间
 * @param {*} time
 */
export function switchTimeFormat(time) {
    var dateTime = new Date(time);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var date = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    return year + "-" + addZero(month) + "-" + addZero(date) + " " + addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
}
//# sourceMappingURL=type_date.js.map