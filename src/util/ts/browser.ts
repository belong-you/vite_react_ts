
let window: any, document: any;

/**
 * 求滚动轮滚动距离
 */
export const getScrollOffset = () => {
    if (window.pageXOffset) {
        return{
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    } else {
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

/**
 * 获取滚动条坐标
 * @param el 
 */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/**
 * 返回浏览器视口尺寸
 */
export const getViewportOffset = () => {
    if (window.innerWidth) {
        return{
            x : window.innerWidth,
            y : window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompt") {  // 判断是否为混杂模式
            return {
                x : document.body.clientWidth,
                y : document.body.clientHeight
            }
        } else {
            return {
                x : document.documentElement.clientWidth,
                y : document.documentElement.clientHeight
            }
        }
    }
}

/**
 * 滚动条、锚链接（记得取消 a 标签默认事件）跳转过渡  默认回到顶部
 * @param ele 元素节点
 */
export const scrollTo = (ele: any = {}) => {
    const num = ele.offsetTop || 0;
    window.scrollTo({
        top: num,
        behavior: "smooth" 
    });
}

/**
 * 劫持粘贴板
 * @param value 需要复制的字符
 */
export const copyTextToClipboard = (value: string) => {
    const textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}

/**
 * 禁止右键复制
 * @param arr contextmenu：选择 selectstart：右键 copy：复制]
 */
export const prohibitCopy = (arr: string[] = ['selectstart', 'copy']) => {
    arr.forEach((ev: any) => {
        document.addEventListener(ev, (event: any) => {
            return event.returnValue = false;
        })
    });
}

/**
 * 禁止某些键盘事件
 */
export const prohibitKeydown = () => {
    document.addEventListener('keydown', function(event){
        return !(
            112 == event.keyCode || //F1
            123 == event.keyCode || //F12
            event.ctrlKey && 82 == event.keyCode || //ctrl + R
            event.ctrlKey && 78 == event.keyCode || //ctrl + N
            event.shiftKey && 121 == event.keyCode || //shift + F10
            event.altKey && 115 == event.keyCode || //alt + F4
            "A" == event.srcElement.tagName && event.shiftKey //shift + 点击a标签
        ) || (event.returnValue = false)
    });
}

/**
 * 判断浏览器类型
 */
export const browserType = () => {
    var userAgent = window.navigator.userAgent; // 取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

