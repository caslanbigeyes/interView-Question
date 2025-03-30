import{_ as s,c as n,o as a,U as p}from"./chunks/framework.HUmqWwux.js";const d=JSON.parse('{"title":"实现一个eventBus,其中订阅只要一次","description":"","frontmatter":{},"headers":[],"relativePath":"questions/Cpquestions3.md","filePath":"questions/Cpquestions3.md","lastUpdated":1705121030000}'),e={name:"questions/Cpquestions3.md"},l=p(`<h1 id="实现一个eventbus-其中订阅只要一次" tabindex="-1">实现一个eventBus,其中订阅只要一次 <a class="header-anchor" href="#实现一个eventbus-其中订阅只要一次" aria-label="Permalink to &quot;实现一个eventBus,其中订阅只要一次&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class EventBus {</span></span>
<span class="line"><span>    constuctor() {</span></span>
<span class="line"><span>        this.events = {};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 订阅一次</span></span>
<span class="line"><span>    subScribeOne(eventName, callback) {</span></span>
<span class="line"><span>        // 取消</span></span>
<span class="line"><span>        const oneCallback = (data) =&gt; {</span></span>
<span class="line"><span>            callback(data);</span></span>
<span class="line"><span>            this.unsubScribe(eventName, oneCallback)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (!this.events[eventName]) {</span></span>
<span class="line"><span>            this.events[eventName] = []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.events[eventName].push(oneCallback)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 订阅事件</span></span>
<span class="line"><span>    subScribe(eventName, callback) {</span></span>
<span class="line"><span>        if (!this.events[eventName]) {</span></span>
<span class="line"><span>            this.events[eventName] = []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.events[eventName].push(callback)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 发布事件</span></span>
<span class="line"><span>    publish(eventName, data) {</span></span>
<span class="line"><span>        const eventCallbacks = this.events[eventName];</span></span>
<span class="line"><span>        if (eventCallbacks) {</span></span>
<span class="line"><span>            eventCallbacks.forEach(callback =&gt; callback(data));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 取消订阅</span></span>
<span class="line"><span>    unsubScribe(eventName, callback) {</span></span>
<span class="line"><span>        if (this.events[eventName]) {</span></span>
<span class="line"><span>            this.events[eventName] = this.events[eventName].filter(cb =&gt; cb !== callback)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;!-- </span></span>
<span class="line"><span>const eventBus = new EventBus()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>eventBus.subScribe(&#39;eat&#39;, data =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;我要去吃大餐了&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eventBus.publish(&#39;eat&#39;, { username: &#39;me&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(eventBus) --&gt;</span></span></code></pre></div>`,2),t=[l];function c(i,o,v,u,b,r){return a(),n("div",null,t)}const m=s(e,[["render",c]]);export{d as __pageData,m as default};
