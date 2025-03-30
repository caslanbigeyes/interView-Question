import{_ as s,c as n,o as a,U as p}from"./chunks/framework.HUmqWwux.js";const m=JSON.parse('{"title":"面试官：实现一个骨架屏？","description":"","frontmatter":{},"headers":[],"relativePath":"questions/Cpquestions1.md","filePath":"questions/Cpquestions1.md","lastUpdated":1705117888000}'),l={name:"questions/Cpquestions1.md"},e=p(`<h1 id="面试官-实现一个骨架屏" tabindex="-1">面试官：实现一个骨架屏？ <a class="header-anchor" href="#面试官-实现一个骨架屏" aria-label="Permalink to &quot;面试官：实现一个骨架屏？&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    .wrap {</span></span>
<span class="line"><span>        width: 800px;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        flex-direction: column;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        background-color: #f0f0f0;</span></span>
<span class="line"><span>        padding: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wrap-header {</span></span>
<span class="line"><span>        width: 80%;</span></span>
<span class="line"><span>        height: 40px;</span></span>
<span class="line"><span>        background-color: #e0e0e0;</span></span>
<span class="line"><span>        margin-bottom: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wrap-content {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        flex-wrap: wrap;</span></span>
<span class="line"><span>        justify-content: center;</span></span>
<span class="line"><span>        width: 80%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .small-image {</span></span>
<span class="line"><span>        width: 50px;</span></span>
<span class="line"><span>        height: 50px;</span></span>
<span class="line"><span>        background-color: #fff;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        animation: pulse 1.5s infinite ease-in-out</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wrap-image {</span></span>
<span class="line"><span>        width: 200px;</span></span>
<span class="line"><span>        height: 200px;</span></span>
<span class="line"><span>        background-color: #fff;</span></span>
<span class="line"><span>        border-radius: 5px;</span></span>
<span class="line"><span>        animation: pulse 1.5s infinite ease-in-out</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @keyframes pulse {</span></span>
<span class="line"><span>        0% {</span></span>
<span class="line"><span>            opacity: 0.5;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        50% {</span></span>
<span class="line"><span>            opacity: 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        100% {</span></span>
<span class="line"><span>            opacity: 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .wrap-text {</span></span>
<span class="line"><span>        flex: 1;</span></span>
<span class="line"><span>        width: 50px;</span></span>
<span class="line"><span>        height: 30px;</span></span>
<span class="line"><span>        background-color: #d0d0d0;</span></span>
<span class="line"><span>        margin: 10px;</span></span>
<span class="line"><span>        animation: pulse 1.5s infinite ease-in-out</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;wrap-header&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;wrap-content&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;small-image&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-image&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;wrap-text&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 副作用</span></span>
<span class="line"><span>        function fetchData() {</span></span>
<span class="line"><span>            return new Promise((reslove) =&gt; {</span></span>
<span class="line"><span>                setTimeout((resolve) =&gt; {</span></span>
<span class="line"><span>                    reslove({</span></span>
<span class="line"><span>                        ImageData: &#39;图片&#39;,</span></span>
<span class="line"><span>                        textContent: &#39;商品&#39;</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                }, 1000)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 显示</span></span>
<span class="line"><span>        function showContent() {</span></span>
<span class="line"><span>            document.querySelector(&#39;.wrap&#39;).style.display = &#39;block&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //隐藏</span></span>
<span class="line"><span>        function hideContent(data) {</span></span>
<span class="line"><span>            console.log(data.ImageData, &#39;dta&#39;)</span></span>
<span class="line"><span>            const { ImageData, textContent } = data;</span></span>
<span class="line"><span>            // document.querySelector(&#39;.wrap&#39;).style.display = &#39;none&#39;;</span></span>
<span class="line"><span>            const ImageEle = document.querySelector(&#39;.wrap-image&#39;);</span></span>
<span class="line"><span>            ImageEle.textContent = ImageData</span></span>
<span class="line"><span>            const textEle = document.querySelectorAll(&#39;.wrap-text&#39;);</span></span>
<span class="line"><span>            textEle.forEach((block) =&gt; {</span></span>
<span class="line"><span>                textContent = \`\${textContent}\`</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //初始化加载</span></span>
<span class="line"><span>        showContent()</span></span>
<span class="line"><span>        getAction()</span></span>
<span class="line"><span>        async function getAction() {</span></span>
<span class="line"><span>            const asyncData = await fetchData();</span></span>
<span class="line"><span>            return asyncData</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,2),t=[e];function i(c,o,r,d,u,g){return a(),n("div",null,t)}const q=s(l,[["render",i]]);export{m as __pageData,q as default};
