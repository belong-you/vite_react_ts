import { ishasClass } from './type_regexp';
var window;
/**
 * 查看第 n 层父元素节点
 * @param {*} elem
 * @param {number} n （不可为负值）
 */
export var lookupParent = function (elem, n) {
    while (elem && n) {
        elem = elem.parentElement; // IE 父元素节点选择
        n--;
    }
    return elem;
};
/**
 * 返回当前元素的元素子节点
 */
export var myChildren = function (ele) { return function () {
    var child = ele.childNodes; // 获得 body 子元素集合
    var len = child.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        if (child[i].nodeType == 1) {
            arr.push(child[i]);
        }
    }
    return arr;
}; };
/**
 * 返回元素的第 n 个兄弟元素节点
 * @param {*} elem
 * @param {number} n 正返回后面的兄弟元素节点，n为负返回前面的，n为0返回自己
 */
export var retSibling = function (elem, n) {
    while (elem && n) {
        if (n > 0) {
            if (elem.nextElementSibling) {
                elem = elem.nextElementSibling;
            }
            else {
                for (elem.nextSibling; elem && elem.nextSibling != 1; elem = elem.nextSibling)
                    ;
            } // 解决IE兼容性问题
            n--;
        }
        else {
            if (elem.previousElementSibling) {
                elem = elem.previousElementSibling;
            }
            else {
                for (elem.previousSibling; elem && elem.previousSibling != 1; elem = elem.previousSibling)
                    ;
            }
            n++;
        }
    }
    return elem;
};
/**
 * 获取元素样式属性
 * @param {*} elem
 * @param {string} prop CSS属性
 */
export var getStyle = function (elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    }
    else {
        return elem.currentStyle[prop];
    }
};
/**
 * 阻止事件冒泡
 * @param {*} e 源事件中也需要传参
 */
export var stopBubble = function (e) {
    e = e || window.enent;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
};
/**
 * 添加某个 class
 * @param el
 * @param className 自定义 class 属性
 */
export var addClass = function (el, className) {
    if (ishasClass(el, className))
        return;
    var newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
};
/**
 * 移除某个 class
 * @param el
 * @param className 自定义 class 属性
 */
export var removeClass = function (el, className) {
    if (!ishasClass(el, className))
        return;
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    el.className = el.className.replace(reg, ' ');
};
/**
 * 阻止默认事件
 * @param {*} event
 */
export var cancelHandler = function (e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
};
/**
 * 鼠标拖拽
 * @param {Element} ele 所拖拽的元素
 * @param {Element} limit 限制移动范围的元素（为空时，不限制移动范围）
 */
export var mouseDrag = function (ele, limit) {
    // 鼠标按下
    ele.addEventListener('mousedown', function (e) {
        e = e || window.event;
        // 距离初始位置左顶点的距离 = 鼠标按下的坐标 - 元素的坐标
        var disX = e.clientX - ele.offsetLeft, disY = e.clientY - ele.offsetTop;
        window.addEventListener('mousemove', mouseMove, false);
        window.addEventListener('mouseup', function () {
            window.removeEventListener('mousemove', mouseMove, false);
        }, false);
        function mouseMove(e) {
            // 定义元素的中心点 = 鼠标按下的坐标点 - 距离左顶点的距离
            ele.style.left = e.clientX - disX + 'px';
            ele.style.top = e.clientY - disY + 'px';
            if (limit === undefined) {
                return;
            }
            else {
                // 约束范围
                if (parseFloat(ele.style.top) < limit.offsetTop) {
                    ele.style.top = limit.offsetTop + 'px';
                }
                if (parseFloat(ele.style.left) < limit.offsetLeft) {
                    ele.style.left = limit.offsetLeft + 'px';
                }
                if (parseFloat(ele.style.left + ele.clientWidth) > limit.offsetLeft + limit.clientWidth - parseFloat(ele.clientWidth)) {
                    ele.style.left = limit.offsetLeft + limit.clientWidth - parseFloat(ele.clientWidth) + 'px';
                }
                if (parseFloat(ele.style.top + ele.clientHeight) > limit.offsetTop + limit.clientHeight - parseFloat(ele.clientHeight)) {
                    ele.style.top = limit.offsetTop + limit.clientHeight - parseFloat(ele.clientHeight) + 'px';
                }
            }
        }
    }, false);
};
//# sourceMappingURL=dom.js.map