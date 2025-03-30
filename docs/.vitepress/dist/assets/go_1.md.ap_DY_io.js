import{_ as n,c as s,o as a,U as p}from"./chunks/framework.HUmqWwux.js";const l="/assets/image.5Ruicrit.png",e="/assets/image-1.K1bX7Tpu.png",h=JSON.parse('{"title":"go如何启动一个简易web服务","description":"","frontmatter":{},"headers":[],"relativePath":"go/1.md","filePath":"go/1.md","lastUpdated":1739868726000}'),t={name:"go/1.md"},i=p('<h1 id="go如何启动一个简易web服务" tabindex="-1">go如何启动一个简易web服务 <a class="header-anchor" href="#go如何启动一个简易web服务" aria-label="Permalink to &quot;go如何启动一个简易web服务&quot;">​</a></h1><p><img src="'+l+`" alt="alt text"></p><p>代码.md</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Package main 是程序的入口包</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导入需要使用的标准库包</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;      // 用于打印输出</span></span>
<span class="line"><span>    &quot;log&quot;      // 用于日志记录</span></span>
<span class="line"><span>    &quot;net/http&quot; // 提供 HTTP 客户端和服务端的实现</span></span>
<span class="line"><span>    &quot;strings&quot;  // 提供字符串操作的函数</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// sayHelloName 处理所有进入 &quot;/&quot; 路径的 HTTP 请求</span></span>
<span class="line"><span>// w 用于向客户端写入响应</span></span>
<span class="line"><span>// r 包含了请求的所有信息</span></span>
<span class="line"><span>func sayHelloName(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    // ParseForm 解析 URL 中的查询字符串，并将解析结果更新到 r.Form 字段</span></span>
<span class="line"><span>    r.ParseForm()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 在服务端控制台打印请求信息，用于调试</span></span>
<span class="line"><span>    fmt.Println(r.Form)                // 打印解析后的表单数据</span></span>
<span class="line"><span>    fmt.Println(&quot;path&quot;, r.URL.Path)    // 打印请求的路径</span></span>
<span class="line"><span>    fmt.Println(&quot;scheme&quot;, r.URL.Scheme)// 打印请求的协议（HTTP/HTTPS）</span></span>
<span class="line"><span>    fmt.Println(r.Form[&quot;url_long&quot;])    // 打印名为 url_long 的参数值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 遍历所有的表单参数</span></span>
<span class="line"><span>    for k, v := range r.Form {</span></span>
<span class="line"><span>        fmt.Println(&quot;key:&quot;, k)                    // 打印参数名</span></span>
<span class="line"><span>        fmt.Println(&quot;val:&quot;, strings.Join(v, &quot;&quot;))  // 打印参数值，如果有多个值则连接成一个字符串</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 向客户端响应写入 &quot;Hello astaxie!&quot;</span></span>
<span class="line"><span>    fmt.Fprintln(w, &quot;Hello astaxie!&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    // 注册路由处理函数，将根路径 &quot;/&quot; 的请求交给 sayHelloName 函数处理</span></span>
<span class="line"><span>    http.HandleFunc(&quot;/&quot;, sayHelloName)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 启动 HTTP 服务器，监听 9090 端口</span></span>
<span class="line"><span>    // nil 表示使用默认的 ServeMux 路由器</span></span>
<span class="line"><span>    err := http.ListenAndServe(&quot;:9090&quot;, nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果服务器启动失败，记录错误并终止程序</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>        log.Fatal(&quot;ListenAndServe:&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>go build + go run</span></span></code></pre></div><p><img src="`+e+'" alt="alt text"></p>',5),o=[i];function c(r,u,m,q,_,g){return a(),s("div",null,o)}const f=n(t,[["render",c]]);export{h as __pageData,f as default};
