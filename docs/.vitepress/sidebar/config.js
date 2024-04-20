const css = [
  ["css/box", "说说你对盒子模型的理解?"],
  ["css/selector", "css选择器有哪些？优先级？哪些属性可以继承？"],
  ["css/em_px_rem_vh_vw", "说说em/px/rem/vh/vw区别?"],
  ["css/dp_px_dpr_ppi", "说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？"],
  ["css/hide_attributes", "css中，有哪些方式可以隐藏页面元素？区别?"],
  ["css/BFC", "谈谈你对BFC的理解？"],
  ["css/center", "元素水平垂直居中的方法有哪些？如果元素不定宽高呢？"],
  ["css/column_layout", "如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？"],
  ["css/flexbox", "说说flexbox（弹性盒布局模型）,以及适用场景？"],
  ["css/grid", "介绍一下grid网格布局"],
  ["css/css3_features", "CSS3新增了哪些新特性？"],
  ["css/animation", "css3动画有哪些？"],
  ["css/layout_painting", "怎么理解回流跟重绘？什么场景下会触发？"],
  ["css/responsive_layout", "什么是响应式设计？响应式设计的基本原理是什么？如何做？"],
  ["css/css_performance", "如果要做优化，CSS提高性能的方法有哪些？"],
  ["css/single_multi_line", "如何实现单行／多行文本溢出的省略样式？"],
  ["css/visual_scrolling", "如何使用css完成视差滚动效果?"],
  ["css/triangle", "CSS如何画一个三角形？原理是什么？"],
  ["css/less_12px", "让Chrome支持小于12px 的文字方式有哪些？区别？"],
  ["css/sass_less_stylus", "说说对Css预编语言的理解？有哪些区别?"],
]

const js = [
  ["JavaScript/data_type", "说说JavaScript中的数据类型？存储上的差别？"],
  ["JavaScript/array_api", "数组的常用方法有哪些？"],
  ["JavaScript/string_api", "JavaScript字符串的常用方法有哪些？"],
  ["JavaScript/type_conversion", "谈谈 JavaScript 中的类型转换机制"],
  ["JavaScript/== _===", "== 和 ===区别，分别在什么情况使用"],
  ["JavaScript/copy", "深拷贝浅拷贝的区别？如何实现一个深拷贝？"],
  ["JavaScript/closure", "说说你对闭包的理解？闭包使用场景"],
  ["JavaScript/scope", "说说你对作用域链的理解"],
  ["JavaScript/prototype", "JavaScript原型，原型链 ? 有什么特点？"],
  ["JavaScript/inherit", "Javascript如何实现继承？"],
  ["JavaScript/this", "谈谈this对象的理解"],
  ["JavaScript/context_stack", "JavaScript中执行上下文和执行栈是什么？"],
  ["JavaScript/event_Model", "说说JavaScript中的事件模型"],
  ["JavaScript/typeof_instanceof", "typeof 与 instanceof 区别"],
  ["JavaScript/event_agent", "解释下什么是事件代理？应用场景？"],
  ["JavaScript/new", "说说new操作符具体干了什么？"],
  ["JavaScript/ajax", "ajax原理是什么？如何实现？"],
  ["JavaScript/bind_call_apply", "bind、call、apply 区别？如何实现一个bind?"],
  ["JavaScript/regexp", "说说你对正则表达式的理解？应用场景？"],
  ["JavaScript/event_loop", "说说你对事件循环的理解"],
  ["JavaScript/Dom", "DOM常见的操作有哪些？"],
  ["JavaScript/BOM", "说说你对BOM的理解，常见的BOM对象你了解哪些？"],
  ["JavaScript/tail_recursion", "举例说明你对尾递归的理解，有哪些应用场景"],
  ["JavaScript/memory_leak", "说说 JavaScript 中内存泄漏的几种情况？"],
  ["JavaScript/cache", "Javascript本地存储的方式有哪些？区别及应用场景？"],
  ["JavaScript/functional_programming", "说说你对函数式编程的理解？优缺点？"],
  ["JavaScript/function_cache", "Javascript中如何实现函数缓存？函数缓存有哪些应用场景？"],
  ["JavaScript/loss_accuracy", "说说 Javascript 数字精度丢失的问题，如何解决？"],
  ["JavaScript/debounce_throttle", "什么是防抖和节流？有什么区别？如何实现？"],
  ["JavaScript/visible", "如何判断一个元素是否在可视区域中？"],
  ["JavaScript/continue_to_upload", "大文件上传如何做断点续传？"],
  ["JavaScript/pull_up_loading_pull_down_refresh", "如何实现上拉加载，下拉刷新？"],
  ["JavaScript/single_sign", "什么是单点登录？如何实现？"],
  ["JavaScript/security", "web常见的攻击方式有哪些？如何防御？"],
]

const es6 = [["es6/var_let_const", "说说var、let、const之间的区别"],
["es6/array", "ES6中数组新增了哪些扩展?"],
["es6/object", "ES6中对象新增了哪些扩展?"],
["es6/function", "ES6中函数新增了哪些扩展?"],
["es6/set_map", "ES6中新增的Set、Map两种数据结构怎么理解?"],
["es6/promise", "你是怎么理解ES6中 Promise的？使用场景？"],
["es6/generator", "怎么理解ES6中 Generator的？使用场景？"],
["es6/proxy", "你是怎么理解ES6中Proxy的？使用场景?"],
["es6/module", "你是怎么理解ES6中Module的？使用场景？"],
["es6/decorator", "你是怎么理解ES6中 Decorator 的？使用场景？"],]


const vue2 = [
  ["vue/vue", "说说你对vue的理解?"],
  ["vue/spa", "说说你对SPA（单页应用）的理解?"],
  ["vue/show_if", "Vue中的v-show和v-if怎么理解？"],
  ["vue/new_vue", "Vue实例挂载的过程中发生了什么?"],
  ["vue/lifecycle", "说说你对Vue生命周期的理解?"],
  ["vue/if_for", "为什么Vue中的v-if和v-for不建议一起用?"],
  ["vue/first_page_time", "SPA（单页应用）首屏加载速度慢怎么解决？"],
  ["vue/data", "为什么data属性是一个函数而不是一个对象？"],
  ["vue/data_object_add_attrs", "Vue中给对象添加新属性界面不刷新?"],
  ["vue/components_plugin", "Vue中组件和插件有什么区别？"],
  ["vue/communication", "Vue组件间通信方式都有哪些?"],
  ["vue/bind", "说说你对双向绑定的理解?"],
  ["vue/nexttick", "说说你对nexttick的理解?"],
  ["vue/mixin", "说说你对vue的mixin的理解，有什么应用场景？"],
  ["vue/slot", "说说你对slot的理解？slot使用场景有哪些？"],
  ["vue/observable", "Vue.observable你有了解过吗？说说看"],
  ["vue/key", "你知道vue中key的原理吗？说说你对它的理解？"],
  ["vue/keepalive", "怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？"],
  ["vue/modifier", "Vue常用的修饰符有哪些？有什么应用场景？"],
  ["vue/directive", "你有写过自定义指令吗？自定义指令的应用场景有哪些？"],
  ["vue/filter", "Vue中的过滤器了解吗？过滤器的应用场景有哪些？"],
  ["vue/vnode", "什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路"],
  ["vue/diff", "你了解vue的diff算法吗？说说看"],
  ["vue/axios", "Vue项目中有封装过axios吗？主要是封装哪方面的？"],
  ["vue/axiosCode", "你了解axios的原理吗？有看过它的源码吗？"],
  ["vue/ssr", "SSR解决了什么问题？有做过SSR吗？你是怎么做的？"],
  ["vue/structure", "说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？"],
  ["vue/permission", "vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？"],
  ["vue/cors", "Vue项目中你是如何解决跨域的呢？"],
  ["vue/404", "vue项目本地开发完成后部署到服务器后报404是什么原因呢？"],
  ["vue/error", "你是怎么处理vue项目中的错误的？"],
  ["vue/vue3_vue2", "Vue3有了解过吗？能说说跟Vue2的区别吗？"]
]

const vue3 = [["vue3/goal", "Vue3.0的设计目标是什么？做了哪些优化?"],
["vue3/performance", "Vue3.0 性能提升主要是通过哪几方面体现的？"],
["vue3/proxy", "Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？"],
["vue3/composition", "Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？"],
["vue3/treeshaking", "说说Vue 3.0中Treeshaking特性？举例说明一下？"],
["vue3/modal_component", "用Vue3.0 写过组件吗？如果想实现一个 Modal你会怎么设计？"],]

const react = [
  ["React/React", "说说对React的理解？有哪些特性？"],
  ["React/Real DOM_Virtual DOM", "说说 Real DOM和 Virtual DOM 的区别？优缺点？"],
  ["React/life cycle", "说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？"],
  ["React/state_props", "state 和 props有什么区别？"],
  ["React/super()_super(props)", "super()和super(props)有什么区别？"],
  ["React/setState", "说说 React中的setState执行机制"],
  ["React/SyntheticEvent", "说说React的事件机制？"],
  ["React/Binding events", "React事件绑定的方式有哪些？区别？"],
  ["React/Building components", "React构建组件的方式有哪些？区别？"],
  ["React/communication", "React中组件之间如何通信？"],
  ["React/key", "React中的key有什么作用？"],
  ["React/React refs", "说说对React refs 的理解？应用场景？"],
  ["React/class_function component", "说说对React中类组件和函数组件的理解？有什么区别？"],
  ["React/controlled_Uncontrolled", "说说对受控组件和非受控组件的理解？应用场景？"],
  ["React/High order components", "说说对高阶组件的理解？应用场景?"],
  ["React/React Hooks", "说说对React Hooks的理解？解决了什么问题？"],
  ["React/import css", "说说react中引入css的方式有哪几种？区别？"],
  ["React/animation", "在react中组件间过渡动画如何实现？"],
  ["React/redux", "说说你对Redux的理解？其工作原理？"],
  ["React/Redux Middleware", "说说对Redux中间件的理解？常用的中间件有哪些？实现原理？"],
  ["React/how to use redux", "你在React项目中是如何使用Redux的? 项目结构是如何划分的？"],
  ["React/React Router", "说说你对React Router的理解？常用的Router组件有哪些？"],
  ["React/React Router model", "说说React Router有几种模式？实现原理？？"],
  ["React/immutable", "说说你对immutable的理解？如何应用在react项目中？"],
  ["React/render", "说说React render方法的原理？在什么时候会被触发？"],
  ["React/improve_render", "说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？"],
  ["React/diff", "说说React diff的原理是什么？"],
  ["React/Fiber", "说说对Fiber架构的理解？解决了什么问题？"],
  ["React/JSX to DOM", "说说React Jsx转换成真实DOM过程？"],
  ["React/Improve performance", "说说 React 性能优化的手段有哪些？"],
  ["React/capture error", "说说你在React项目是如何捕获错误的？"],
  ["React/server side rendering", "说说React服务端渲染怎么做？原理是什么？"],
  ["React/summary", "说说你在使用React 过程中遇到的常见问题？如何解决?"]
]

const webpack = [
  ["webpack/webpack", "说说你对webpack的理解？解决了什么问题？"],
  ["webpack/build_process", "说说webpack的构建流程?"],
  ["webpack/Loader", "说说webpack中常见的Loader？解决了什么问题？"],
  ["webpack/Plugin", "说说webpack中常见的Plugin？解决了什么问题？"],
  ["webpack/Loader_Plugin", "说说Loader和Plugin的区别？编写Loader，Plugin的思路？"],
  ["webpack/HMR", "说说webpack的热更新是如何做到的？原理是什么？"],
  ["webpack/proxy", "说说webpack proxy工作原理？为什么能解决跨域?"],
  ["webpack/performance", "说说如何借助webpack来优化前端性能？"],
  ["webpack/improve_build", "如何提高webpack的构建速度？"],
  ["webpack/Rollup_Parcel_snowpack_Vite", "与webpack类似的工具还有哪些？区别？"],
  ["webpack/build_speed", "如何提升 webpack 构建资源的速度？"],

]


const http = [
  ["http/HTTP_HTTPS", "什么是HTTP? HTTP 和 HTTPS 的区别?"],
  ["http/HTTPS", "为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？"],
  ["http/UDP_TCP", "如何理解UDP 和 TCP? 区别? 应用场景?"],
  ["http/OSI", "如何理解OSI七层模型?"],
  ["http/TCP_IP", "如何理解TCP/IP协议?"],
  ["http/DNS", "DNS协议 是什么？说说DNS 完整的查询过程?"],
  ["http/CDN", "如何理解CDN？说说实现原理？"],
  ["http/1.0_1.1_2.0", "说说 HTTP1.0/1.1/2.0 的区别?"],
  ["http/status", "说说 HTTP 常见的状态码有哪些，适用场景？"],
  ["http/GET_POST", "说一下 GET 和 POST 的区别？"],
  ["http/headers", "说说 HTTP 常见的请求头有哪些? 作用？"],
  ["http/after_url", "说说地址栏输入 URL 敲下回车后发生了什么？"],
  ["http/handshakes_waves", "说说TCP为什么需要三次握手和四次挥手？"],
  ["http/WebSocket", "说说对WebSocket的理解？应用场景？"]
]

const node = [
  ["NodeJS/nodejs", "说说你对 Node.js 的理解？优缺点？应用场景？"],
  ["NodeJS/global", "说说 Node.js 有哪些全局对象？"],
  ["NodeJS/process", "说说对 Node 中的 process 的理解？有哪些常用方法？"],
  ["NodeJS/fs", "说说对 Node 中的 fs模块的理解? 有哪些常用方法"],
  ["NodeJS/Buffer", "说说对 Node 中的 Buffer 的理解？应用场景？"],
  ["NodeJS/Stream", "说说对 Node 中的 Stream 的理解？应用场景？"],
  ["NodeJS/EventEmitter", "说说Node中的EventEmitter? 如何实现一个EventEmitter?"],
  ["NodeJS/event_loop", "说说对 Nodejs 中的事件循环机制理解?"],
  ["NodeJS/require_order", "说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?"],
  ["NodeJS/middleware", "说说对中间件概念的理解，如何封装 node 中间件？"],
  ["NodeJS/jwt", "如何实现jwt鉴权机制？说说你的思路"],
  ["NodeJS/file_upload", "如何实现文件上传？说说你的思路"],
  ["NodeJS/paging", "如果让你来设计一个分页功能, 你会怎么设计? 前后端如何交互?"],
  ["NodeJS/performance", "Node性能如何进行监控以及优化？"],
]

const ts = [
  ["typescript/typescript_javascript", "说说你对 TypeScript 的理解？与 JavaScript 的区别？"],
  ["typescript/data_type", "说说 typescript 的数据类型有哪些？"],
  ["typescript/enum", "说说你对 TypeScript 中枚举类型的理解？应用场景？"],
  ["typescript/interface", "说说你对 TypeScript 中接口的理解？应用场景？"],
  ["typescript/class", "说说你对 TypeScript 中类的理解？应用场景？"],
  ["typescript/function", "说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？"],
  ["typescript/generic", "说说你对 TypeScript 中泛型的理解？应用场景？"],
  ["typescript/high type", "说说你对 TypeScript 中高级类型的理解？有哪些？"],
  ["typescript/decorator", "说说你对 TypeScript 装饰器的理解？应用场景？"],
  ["typescript/namespace_module", "说说对 TypeScript 中命名空间与模块的理解？区别？"],
  ["typescript/react", "说说如何在 React 项目中应用 TypeScript？"],
  ["typescript/vue", "说说如何在Vue项目中应用TypeScript？"]
]

const algorithm = [
  ["algorithm/Algorithm", "说说你对算法的理解？应用场景？"],
  ["algorithm/time_space", "说说你对算法中时间复杂度，空间复杂度的理解？如何计算？"],
  ["algorithm/structure", "说说你对数据结构的理解？有哪些？区别？"],
  ["algorithm/stack_queue", "说说你对栈、队列的理解？应用场景？"],
  ["algorithm/Linked List", "说说你对链表的理解？常见的操作有哪些？"],
  ["algorithm/set", "说说你对集合的理解？常见的操作有哪些？"],
  ["algorithm/tree", "说说你对树的理解？相关的操作有哪些？"],
  ["algorithm/Heap", "说说你对堆的理解？如何实现？应用场景？"],
  ["algorithm/graph", "说说你对图的理解？相关操作有哪些？"],
  ["algorithm/sort", "说说常见的排序算法有哪些？区别？"],
  ["algorithm/bubbleSort", "说说你对冒泡排序的理解？如何实现？应用场景？"],
  ["algorithm/selectionSort", "说说你对选择排序的理解？如何实现？应用场景？"],
  ["algorithm/insertionSort", "说说你对插入排序的理解？如何实现？应用场景？"],
  ["algorithm/mergeSort", "说说你对归并排序的理解？如何实现？应用场景？"],
  ["algorithm/quickSort", "说说你对快速排序的理解？如何实现？应用场景？"],
  ["algorithm/BinarySearch", "说说你对二分查找的理解？如何实现？应用场景？"],
  ["algorithm/design1", "说说说你对分而治之、动态规划的理解？区别？"],
  ["algorithm/design2", "说说你对贪心算法、回溯算法的理解？应用场景？"],
]

const applet = [
  ["applet/applet", "说说你对微信小程序的理解？优缺点？"],
  ["applet/lifecycle", "说说微信小程序的生命周期函数有哪些？"],
  ["applet/navigate", "说说微信小程序中路由跳转的方式有哪些？区别？"],
  ["applet/optimization", "说说提高微信小程序的应用速度的手段有哪些？"],
  ["applet/login", "说说微信小程序的登录流程？"],
  ["applet/publish", "说说微信小程序的发布流程？"],
  ["applet/requestPayment", "说说微信小程序的支付流程？"],
  ["applet/WebView_jscore", "说说微信小程序的实现原理？"],
]

const git = [
  ["git/Version control", "说说你对版本管理的理解？常用的版本管理工具有哪些？"],
  ["git/Git", "说说你对Git的理解？"],
  ["git/fork_clone_branch", "说说Git中 fork, clone,branch这三个概念，有什么区别?"],
  ["git/command", "说说Git常用的命令有哪些？"],
  ["git/HEAD_tree_index", "说说Git 中 HEAD、工作树和索引之间的区别？"],
  ["git/git pull _git fetch", "说说对git pull 和 git fetch 的理解？有什么区别？"],
  ["git/git stash", "说说你对git stash 的理解？应用场景？"],
  ["git/git rebase_ git merge", "说说你对git rebase 和 git merge的理解？区别？"],
  ["git/conflict", "说说 git 发生冲突的场景？如何解决？"],
  ["git/git reset_ git revert", "说说你对git reset 和 git revert 的理解？区别？"],
]


const questions= [
  ["questions/questions", "说说你对版本管理的理解？常用的版本管理工具有哪些？"],
]


function tranvers(r) {
  const l = r.map((item, index) => {
    return {
      link: `/${item[0]}`,
      text: `${index + 1}.${item[1]}`
    }
  })
  return l;
}


JSON.stringify(tranvers(git));