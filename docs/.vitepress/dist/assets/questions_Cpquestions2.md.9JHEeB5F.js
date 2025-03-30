import{_ as s,c as n,o as a,U as p}from"./chunks/framework.HUmqWwux.js";const f=JSON.parse('{"title":"字符串分割取值","description":"","frontmatter":{},"headers":[],"relativePath":"questions/Cpquestions2.md","filePath":"questions/Cpquestions2.md","lastUpdated":1705117888000}'),e={name:"questions/Cpquestions2.md"},l=p(`<h1 id="字符串分割取值" tabindex="-1">字符串分割取值 <a class="header-anchor" href="#字符串分割取值" aria-label="Permalink to &quot;字符串分割取值&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var object = { &#39;a&#39;: [{ &#39;b&#39;: { &#39;c&#39;: 3 } }] };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get(object, &#39;a[0].b.c&#39;);</span></span>
<span class="line"><span>// // =&gt; 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get(object, [&#39;a&#39;, &#39;0&#39;, &#39;b&#39;, &#39;c&#39;]);</span></span>
<span class="line"><span>// =&gt; 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get(object, &#39;a.b.c&#39;, &#39;default&#39;);</span></span>
<span class="line"><span>// // =&gt; &#39;default&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function get(obj, path, defaultValue) {</span></span>
<span class="line"><span>    // write here</span></span>
<span class="line"><span>    const keys = Array.isArray(path) ? path : path.split(&#39;.&#39;);</span></span>
<span class="line"><span>    let result = obj;</span></span>
<span class="line"><span>    for (let key of keys) {</span></span>
<span class="line"><span>        if (result === undefined) break;</span></span>
<span class="line"><span>        if (key.includes(&#39;[&#39;) &amp;&amp; key.includes(&#39;]&#39;)) {</span></span>
<span class="line"><span>            // 获得数组索引</span></span>
<span class="line"><span>            console.log(key.split(/[\\[\\]]/),333)</span></span>
<span class="line"><span>            const [prop, index] = key.split(/[\\[\\]]/);</span></span>
<span class="line"><span>            result = result[prop][index]</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            console.log(result[key],3332111)</span></span>
<span class="line"><span>            result = result[key]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return result ? result : defaultValue</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2),t=[l];function i(c,o,r,u,d,_){return a(),n("div",null,t)}const b=s(e,[["render",i]]);export{f as __pageData,b as default};
