* 作业帮
一面
```javascript
// key是模块名称 值是依赖，依次尝试加载ABCD模块  输出所有模块加载完的顺序。
const dependencies = {
  moduleA: ['moduleB', 'moduleC'],
  moduleB: ['moduleC'],
  moduleC: [],
  moduleD: ['moduleA', 'moduleB'],
};

```
二面
1. 项目难点有哪些，遇到过哪些有挑战的事情
2. cookie 和 localStorage的区别
 - cookie 可以设置max-age expires ,localStorage 可以永久存储 受同源限制 相同协议 域名 端口下访问
3. 什么时候用cookie存登陆态 什么时候不用cookie存
4. csrf攻击的原理是什么，攻击者能获取到用户的cookie吗
5. 实现一个类似于localStorage的API，让localStorage也有过期时间。过期了就返回null
6. 代码cr题，这代码你有什么优化
7. 埋点上报的原理是什么，实现一个上报的sdk，支持自定义上报的公共参数。
8. 页面性能监控的原理是什么，接口请求耗时监控的原理是什么。
9. 组件分为哪几种类型,什么叫受控组件什么叫非受控组件
10. 有做过hyber开发吗 APP渲染H5的原理是什么，jsbridge原理是什么。
11. 如何重新覆盖antd组件的样式。如果重新封装一个组件库大概怎么搞
12. 假如要实现一个自定义编辑器。能编辑文本，图片，公式，表格。超出一行自动换行
    超出一页自动分页，对这个产品中应该抽象出哪些class，class中的应该大概具有哪些成员
    哪些class之间有继承关系。



* 迅雷

迅雷二面
2. 项目难点，遇到的挑战
3. 你在项目中扮演了什么样的角色，负责哪些事情
4. 你给你们产品从用户体验上和代码质量上你打多少分  扣分的地方在哪，其他哪些可以优化
5. 性能优化，你们的包体积有多大，你们首屏渲染多久，最耗时的是哪个环节
6. 为什么ssr更快，为什么只用react 没有用vue呢
7. 你找工作看重哪些方面，愿意承担一些压力和挑战吗。

* 数字马力
一面
1. react的事件系统
2. 为什么vue要去劫持数组的方法
2. react的diff算法和vue的diff算法有哪些区别
3. 图片裁剪是如何实现的，如果不依赖框架自己做图片裁剪你会怎么做，如何吧canvas转化为图片
4. webpack的构建过程
5. http与https的区别
6. 生成sourcemap的原理是什么，sourcemap如何与源码位置关联。
7. react的fiber你怎么理解的，fiber解决了什么问题，requestIdleCallback了解过吗。和react的什么机制比较像。
8. js的垃圾回收
9. tcp的三次握手
```javascript
const str1 = '({{}}){}' // 输出true
const str2 = '[(())){][]}]'
// 字符串中只有括号字符  检查括号是否闭合
function isValidBracket(str) {

}
isValidBracket(str1) // true
isValidBracket(str2) // false
```

二面
二面无算法 没问技术相关的 考察软实力。

* temu （80min）
一面。
1. 实现一个方法，获取页面上所有的html标签的名称。比如 html head body div span这种
2. 写一个倒计时组件
3. 定时器用setTimeout和setInterval有什么不同
4. tailwind css 有哪些优势
5. 页面上有很多倒计时组件，但是倒计时的太多了，页面卡顿了是什么原因，如何优化

二面 (60min)
1. 
```javascript
/*
 假如有task1，task2，task3等多个任务需要发请求获取结果，但是每个请求的耗时不同，要求按照请求顺序输出返回结果。比如task1就返回1 task2就返回2 task3就返回3以此类推。
 假如task的请求耗时分别为[200ms,100ms,300ms], 100ms后task2完成 但是不能输出结果，因为task1还没完成，200ms后 输出 1，2
 */
```

* 喜马拉雅
```javascript
// 有100个任务需要请求获取结果，编写一个控制并发请求的函数，最多同时请求n个任务。
function request(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, 200)
  })
}

function multiRequst(taskList, max) {

}
const task = Array(100).fill('').map((_, index) => index + 1);
const threshold = 3
function mutiRequest(task, threshold)

```

* 重庆公司
一面

```javascript
const str = 'sdfasdfsdlkdjhfadkjfsdf';

function count(str) {
  // 给一个字符串 统计字符串中出现最多的字符，如果出现最多的字符不止一种 那就都返回。
}

console.log(count(str));
```

二面
```javascript
/**
给你一个大小为 m x n 的二进制矩阵 grid 。
岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。
你可以假设 grid 的四个边缘都被 0（代表水）包围着。
岛屿的面积是岛上值为 1 的单元格的数目。
计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0。
输入：grid = [
  [0,0,1,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,1,1,1,0,0,0],
  [1,0,1,1,1,0,0,0,1,1,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出：8

**/
const grid = [
  [0,0,1,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,1,1,1,0,0,0],
  [1,0,1,1,1,0,0,0,1,1,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ];

```



其他
1. nodejs事件循环。
2. weakmap和map的区别。promise链式调用原理。promise内部状态怎么流转的。  实现一个数组的map方法。