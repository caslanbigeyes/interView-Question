import{_ as a,c as e,o as i,U as t}from"./chunks/framework.HUmqWwux.js";const f=JSON.parse('{"title":"面试官：说说你对版本管理的理解？常用的版本管理工具有哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"git/version_control.md","filePath":"git/version_control.md","lastUpdated":1704384335000}'),l={name:"git/version_control.md"},o=t('<h1 id="面试官-说说你对版本管理的理解-常用的版本管理工具有哪些" tabindex="-1">面试官：说说你对版本管理的理解？常用的版本管理工具有哪些？ <a class="header-anchor" href="#面试官-说说你对版本管理的理解-常用的版本管理工具有哪些" aria-label="Permalink to &quot;面试官：说说你对版本管理的理解？常用的版本管理工具有哪些？&quot;">​</a></h1><p><img src="https://static.vue-js.com/f0e8a2d0-f5ac-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>版本控制（Version control），是维护工程蓝图的标准作法，能追踪工程蓝图从诞生一直到定案的过程。此外，版本控制也是一种软件工程技巧，借此能在软件开发的过程中，确保由不同人所编辑的同一程序文件都得到同步</p><p>透过文档控制，能记录任何工程项目内各个模块的改动历程，并为每次改动编上序号</p><p>一种简单的版本控制形式如下：赋给图的初版一个版本等级“A”。当做了第一次改变后，版本等级改为“B”，以此类推</p><p>版本控制能提供项目的设计者，将设计恢复到之前任一状态的选择权</p><p>简言之，你的修改只要提到到版本控制系统，基本都可以找回，版本控制系统就像一台时光机器，可以让你回到任何一个时间点</p><h2 id="二、有哪些" tabindex="-1">二、有哪些 <a class="header-anchor" href="#二、有哪些" aria-label="Permalink to &quot;二、有哪些&quot;">​</a></h2><p>版本控制系统在当今的软件开发中，被认为是理所当然的配备工具之一，根据类别可以分成：</p><ul><li>本地版本控制系统</li><li>集中式版本控制系统</li><li>分布式版本控制系统</li></ul><h3 id="本地版本控制系统" tabindex="-1">本地版本控制系统 <a class="header-anchor" href="#本地版本控制系统" aria-label="Permalink to &quot;本地版本控制系统&quot;">​</a></h3><p>结构如下图所示：</p><p><img src="https://static.vue-js.com/c545ded0-f5ad-11eb-ab90-d9ae814b240d.png" alt=""></p><p>优点：</p><ul><li>简单，很多系统中都有内置</li><li>适合管理文本，如系统配置</li></ul><p>缺点：</p><ul><li>其不支持远程操作，因此并不适合多人版本开发</li></ul><h3 id="集中式版本控制系统" tabindex="-1">集中式版本控制系统 <a class="header-anchor" href="#集中式版本控制系统" aria-label="Permalink to &quot;集中式版本控制系统&quot;">​</a></h3><p>结构如下图所示：</p><p><img src="https://static.vue-js.com/8b4b3040-f5ad-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>优点：</p><ul><li>适合多人团队协作开发</li><li>代码集中化管理</li></ul><p>缺点：</p><ul><li>单点故障</li><li>必须联网，无法单机工作</li></ul><p>代表工具有<code>SVN</code>、<code>CVS</code>：</p><h3 id="svn" tabindex="-1">SVN <a class="header-anchor" href="#svn" aria-label="Permalink to &quot;SVN&quot;">​</a></h3><p><code>TortoiseSVN</code>是一款非常易于使用的跨平台的 版本控制/版本控制/源代码控制软件</p><h3 id="cvs" tabindex="-1">CVS <a class="header-anchor" href="#cvs" aria-label="Permalink to &quot;CVS&quot;">​</a></h3><p><code>CVS</code>是版本控制系统，是源配置管理（SCM）的重要组成部分。使用它，您可以记录源文件和文档的历史记录</p><p>老牌的版本控制系统，它是基于客户端/服务器的行为使得其可容纳多用户，构成网络也很方便</p><p>这一特性使得<code>CVS</code>成为位于不同地点的人同时处理数据文件（特别是程序的源代码）时的首选</p><h4 id="分布式版本控制系统" tabindex="-1">分布式版本控制系统 <a class="header-anchor" href="#分布式版本控制系统" aria-label="Permalink to &quot;分布式版本控制系统&quot;">​</a></h4><p>结构如下图：</p><p><img src="https://static.vue-js.com/4301a260-f5ad-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>优点：</p><ul><li>适合多人团队协作开发</li><li>代码集中化管理</li><li>可以离线工作</li><li>每个计算机都是一个完整仓库</li></ul><p>分布式版本管理系统每个计算机都有一个完整的仓库，可本地提交，可以做到离线工作，则不用像集中管理那样因为断网情况而无法工作</p><p>代表工具为<code>Git</code>、<code>HG</code>：</p><h3 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h3><p><code>Git</code>是目前世界上最先进的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务</p><p>特性：易于学习，占用内存小，具有闪电般快速的性能</p><p>使用<code>Git</code>和<code>Gitlab</code>搭建版本控制环境是现在互联网公司最流行的版本控制方式</p><h3 id="hg" tabindex="-1">HG <a class="header-anchor" href="#hg" aria-label="Permalink to &quot;HG&quot;">​</a></h3><p><code>Mercurial</code>是一个免费的分布式源代码管理工具。它可以有效地处理任何规模的项目，并提供简单直观的界面</p><p><code>Mercurial </code>是一种轻量级分布式版本控制系统，采用 <code>Python </code>语言实现，易于学习和使用，扩展性强</p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>版本控制系统的优点如下：</p><ul><li>记录文件所有历史变化，这是版本控制系统的基本能力</li><li>随时恢复到任意时间点，历史记录功能使我们不怕改错代码了</li><li>支持多功能并行开发，通常版本控制系统都支持分支，保证了并行开发的可行</li><li>多人协作并行开发，对于多人协作项目，支持多人协作开发的版本管理将事半功倍</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://pm.readthedocs.io/vcs/understanding.html" target="_blank" rel="noreferrer">https://pm.readthedocs.io/vcs/understanding.html</a></li><li><a href="https://zh.wikipedia.org/wiki/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/版本控制</a></li></ul>',51),r=[o];function c(d,p,h,s,n,u){return i(),e("div",null,r)}const m=a(l,[["render",c]]);export{f as __pageData,m as default};
