import { createNum } from './type_number';

/**
 * 解析请求拿到 .md 文件（并不好用，推荐使用别的库 showdown | markdown-ui | ）
 * @param {string} str 
 */
export function interpretMd (str: { split: (arg0: string[]) => any; }) {
    let arr = str.split(['\n']);
    let n = 0, iter = createNum();
    for (const prop in arr) {
        // console.log(prop)
        let item = arr[prop], num = -1;

        // 多级标题
        if (/^#/.test(item)) {
            /^#\s/.test(item) && (arr[prop] = `<h1 id="#${iter.next().value}">${item.slice(2, num)}</h1>`);
            /^##\s/.test(item) && (arr[prop] = `<h2 id="#${iter.next().value}">${item.slice(3, num)}</h2>`);
            /^###\s/.test(item) && (arr[prop] = `<h3 id="#${iter.next().value}">${item.slice(4, num)}</h3>`);
            /^####\s/.test(item) && (arr[prop] = `<h4 id="#${iter.next().value}">${item.slice(5, num)}</h4>`);
            /^#####\s/.test(item) && (arr[prop] = `<h5>${item.slice(6, num)}</h5>`);
            /^######\s/.test(item) && (arr[prop] = `<h6>${item.slice(7, num)}</h6>`);
        }

        // 引用
        /^>\s/.test(item) && (arr[prop] = `<blockquote class='notes'>${item.slice(2, num)}</blockquote>`);

        // 分割线
        /^-{4}/.test(item) && (arr[prop] = '<hr>');

        // 引入图片
        if (/^!\[\s/.test(item)) {
            let link = item.match(/]\(.{0,1000}?/);
            // console.log(link[0].slice(2, -1))
            arr[prop] = item.replace(/!\[\s/, `<div class="img-block"><img src="${link[0].slice(2, -1)}"`).replace(/\]\(.{0,1000}/, '/></div>');
        }

        // 无序列表
        if (/^-\s/.test(item)) {
            arr[prop] = `<li>${item.slice(2, num)}</li>`;  // 一级
        }
        if (/^\s{4}?-\s/.test(item)) {
            arr[prop] = `<li class='list2'>${item.slice(6, num)}</li>`;  // 二级
        }
        if (/^\s{8}?-\s/.test(item)) {
            arr[prop] = `<li class='list3'>${item.slice(10, num)}</li>`;  // 三级
        }

        // 有序列表
        if (/^\d{1,3}?\.\s/.test(item)) {
            arr[prop] = `<li class='order order1'>${item.slice(0, num)}</li>`;  // 一级
        }
        if (/^\s{4}?\d\.\s/.test(item)) {
            arr[prop] = `<li class='order order2'>${item.slice(4, num)}</li>`;  // 二级
        }
        if (/^\s{8}?\d\.\s/.test(item)) {
            arr[prop] = `<li class='order order3'>${item.slice(8, num)}</li>`;  // 三级
        }

        // 代码块
        if (/^\`\`\`/g.test(item)) {
            n++;
            if (n % 2 === 1) {
                arr[prop] = item.replace(/^\`\`\`.{0,4}/, "<div class='code-wrap'>");
            } else {
                arr[prop] = item.replace(/^\`\`\`/, "<span class='copy' onclick='oCopy(this.parentNode.textContent.slice(1, -5))'>Copy</span></div>");
            }
        }

        // 注释倾斜
        if (/--/.test(item)) {
            let notes = item.match(/--.{0,300}/);
            // console.log(notes)
            arr[prop] = item.replace(/--.{0,300}/, '<em>' + notes + '</em>');
        }
        if (/--\>/.test(item)) {
            arr[prop] = item.replace(/--\>/g, '--></em>');
        }
        if (/\</.test(item)) {
            arr[prop] = item.replace(/\</g, '&lt;').replace(/\&lt;!--/g, '<em>&lt;!--').replace(/--\>/g, '--&gt;</em>');
        }
        if (/\/\//.test(item)) {
            let notes = item.match(/\/\/.{0,300}/);
            // console.log(notes)
            arr[prop] = item.replace(/\</g, '&lt;').replace(/\/\/.{0,300}/, '<em>' + notes + '</em>');
        }
        
        /https:\/\//.test(item) && (arr[prop] = item.replace(/\</g, '&lt;'));
        /http:\/\//.test(item) && (arr[prop] = item.replace(/\</g, '&lt;'));

        if (/\*\//.test(item)) {
            arr[prop] = item.replace(/\*\//, '*/</em>');
        }
        if (/\/\*/.test(item)) {
            arr[prop] = item.replace(/\/\*/, '<em>/*').replace(/\*\//, '*/</em>')
        }

        // 超链接
        if (/\[&/.test(item)) {
            let link = item.match(/]\(.{0,100}/);
            // console.log(link[0].slice(2, -1))
            // console.log(item)
            arr[prop] = item.replace(/\[&/, `<a href='${link[0].slice(2, -1)}' target='_blank'>`).replace(/\]\(.{0,100}/, '</a>');
        }

    }
    // console.log(arr)
    return `<div class='markdown-preview'>${arr.join('')}<div>`;
}