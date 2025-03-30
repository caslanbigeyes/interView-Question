import{_ as s,c as e,o as i,U as a}from"./chunks/framework.HUmqWwux.js";const g=JSON.parse('{"title":"面试官：说说对 Node 中的 process 的理解？有哪些常用方法？","description":"","frontmatter":{},"headers":[],"relativePath":"NodeJS/process.md","filePath":"NodeJS/process.md","lastUpdated":1704384335000}'),o={name:"NodeJS/process.md"},p=a(`<h1 id="面试官-说说对-node-中的-process-的理解-有哪些常用方法" tabindex="-1">面试官：说说对 Node 中的 process 的理解？有哪些常用方法？ <a class="header-anchor" href="#面试官-说说对-node-中的-process-的理解-有哪些常用方法" aria-label="Permalink to &quot;面试官：说说对 Node 中的 process 的理解？有哪些常用方法？&quot;">​</a></h1><p><img src="https://static.vue-js.com/4f7866b0-c2b2-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p><code>process</code> 对象是一个全局变量，提供了有关当前 <code>Node.js </code>进程的信息并对其进行控制，作为一个全局变量</p><p>我们都知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器</p><p>当我们启动一个<code>js</code>文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享</p><p>由于<code>JavaScript</code>是一个单线程语言，所以通过<code>node xxx</code>启动一个文件后，只有一条主线程</p><h2 id="二、属性与方法" tabindex="-1">二、属性与方法 <a class="header-anchor" href="#二、属性与方法" aria-label="Permalink to &quot;二、属性与方法&quot;">​</a></h2><p>关于<code>process</code>常见的属性有如下：</p><ul><li>process.env：环境变量，例如通过 \`process.env.NODE_ENV 获取不同环境项目配置信息</li><li>process.nextTick：这个在谈及 <code>EventLoop</code> 时经常为会提到</li><li>process.pid：获取当前进程id</li><li>process.ppid：当前进程对应的父进程</li><li>process.cwd()：获取当前进程工作目录，</li><li>process.platform：获取当前进程运行的操作系统平台</li><li>process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值</li><li>进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听</li><li>三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出</li><li>process.title 指定进程名称，有的时候需要给进程指定一个名称</li></ul><p>下面再稍微介绍下某些方法的使用：</p><h3 id="process-cwd" tabindex="-1">process.cwd() <a class="header-anchor" href="#process-cwd" aria-label="Permalink to &quot;process.cwd()&quot;">​</a></h3><p>返回当前 <code>Node </code>进程执行的目录</p><p>一个<code> Node</code> 模块 <code>A</code> 通过 NPM 发布，项目 <code>B</code> 中使用了模块 <code>A</code>。在 <code>A</code> 中需要操作 <code>B</code> 项目下的文件时，就可以用 <code>process.cwd()</code> 来获取 <code>B</code> 项目的路径</p><h3 id="process-argv" tabindex="-1">process.argv <a class="header-anchor" href="#process-argv" aria-label="Permalink to &quot;process.argv&quot;">​</a></h3><p>在终端通过 Node 执行命令的时候，通过 <code>process.argv</code> 可以获取传入的命令行参数，返回值是一个数组：</p><ul><li>0: Node 路径（一般用不到，直接忽略）</li><li>1: 被执行的 JS 文件路径（一般用不到，直接忽略）</li><li>2~n: 真实传入命令的参数</li></ul><p>所以，我们只要从 <code>process.argv[2]</code> 开始获取就好了</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.argv.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="process-env" tabindex="-1">process.env <a class="header-anchor" href="#process-env" aria-label="Permalink to &quot;process.env&quot;">​</a></h3><p>返回一个对象，存储当前环境相关的所有信息，一般很少直接用到。</p><p>一般我们会在 <code>process.env</code> 上挂载一些变量标识当前的环境。比如最常见的用 <code>process.env.NODE_ENV</code> 区分 <code>development</code> 和 <code>production</code></p><p>在 <code>vue-cli</code> 的源码中也经常会看到 <code>process.env.VUE_CLI_DEBUG</code> 标识当前是不是 <code>DEBUG</code> 模式</p><h3 id="process-nexttick" tabindex="-1">process.nextTick() <a class="header-anchor" href="#process-nexttick" aria-label="Permalink to &quot;process.nextTick()&quot;">​</a></h3><p>我们知道<code>NodeJs</code>是基于事件轮询，在这个过程中，同一时间只会处理一件事情</p><p>在这种处理模式下，<code>process.nextTick()</code>就是定义出一个动作，并且让这个动作在下一个事件轮询的时间点上执行</p><p>例如下面例子将一个<code>foo</code>函数在下一个时间点调用</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>输出结果为<code>bar</code>、<code>foo</code></p><p>虽然下述方式也能实现同样效果：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>两者区别在于：</p><ul><li>process.nextTick()会在这一次event loop的call stack清空后（下一次event loop开始前）再调用callback</li><li>setTimeout()是并不知道什么时候call stack清空的，所以何时调用callback函数是不确定的</li></ul><h3 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h3><ul><li><a href="http://nodejs.cn/api/process.html" target="_blank" rel="noreferrer">http://nodejs.cn/api/process.html</a></li><li><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></li></ul>`,35),c=[p];function t(l,n,r,d,h,k){return i(),e("div",null,c)}const u=s(o,[["render",t]]);export{g as __pageData,u as default};
