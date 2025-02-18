export default function sidebarNode() {
    return [
        {
            text: '美团',
            collapsible: true,
            items: [
                {"text":'一面'},
                { "link": "/questions/questions1", "text": "1.面试官：闭包的概念？" },
                { "link": "/questions/questions2", "text": "2.面试官：讲讲useEffect原理,监听的是对象数组，对象属性发生变化，数组长度没有发生变化,会不会重新渲染？" },
                { "link": "/questions/questions3", "text": "3.面试官：react hooks相对于class组件 ，好在哪里？" },
                { "link": "/questions/questions4", "text": "4.面试官：vue和react的区别？" },
                { "link": "/questions/questions5", "text": "5.面试官：rollup和webpack区别？" },
                { "link": "/questions/questions6", "text": "6.面试官：浏览器输入url从页面展示的环节？css和js是同步还是有先后顺序？" },
                { "link": "/questions/questions7", "text": "7.面试官：讲讲promise.all？" },
                { "link": "/questions/questions8", "text": "8.面试官：讲讲前端中常见的设计模式？" },
                { "link": "/questions/questions9", "text": "9.面试官：一道版本号比较的算法题？" },
                {"text":'二面'},
            ]
        },
        {
            text: '数字马力',
            collapsible: true,
            items: [
                {"text":'一面'},
                { "link": "/questions/MLquestions1", "text": "1.面试官：css样式的权重？" },
                { "link": "/questions/MLquestions2", "text": "2.less/scss相对于css优势？" },
                { "link": "/questions/MLquestions3", "text": "3.写一个组件需要考虑哪些方面?" },
                { "link": "/questions/MLquestions4", "text": "4.如何评价组件的性能?" },
                { "link": "/questions/MLquestions5", "text": "5.纯函数的概念?" },
                { "link": "/questions/MLquestions6", "text": "6.react的props和state的区别?" },
                { "link": "/questions/MLquestions7", "text": "7.react 跨层级通信?" },
                { "link": "/questions/MLquestions8", "text": "8.为什么出现react hooks？" },
                { "link": "/questions/MLquestions9", "text": "9.面试官：一道对象扁平化算法题？" },
                {"text":'二面'},
            ]
        },
          {
            text: 'coupang',
            collapsible: true,
            items: [
                {"text":'一面'},
                { "link": "/questions/Cpquestions1", "text": "1.面试官：实现一个骨架屏？" },
                {"text":'还有一些八股文忘了..'},
                {"text":'二面'},
                { "link": "/questions/Cpquestions2", "text": "2.字符串分割取值" },
                { "link": "/questions/Cpquestions3", "text": "3.实现一个eventBus,其中订阅只要一次" },
                { "link": "/questions/Cpquestions4", "text": "4.为什么要使用条件hook， 如果一定要用的话要怎么写？" },

            ]
        }
    ]
}

