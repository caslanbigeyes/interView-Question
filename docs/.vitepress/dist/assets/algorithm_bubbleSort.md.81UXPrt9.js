import{_ as s,c as i,o as a,U as h}from"./chunks/framework.HUmqWwux.js";const o=JSON.parse('{"title":"面试官：说说你对冒泡排序的理解？如何实现？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/bubbleSort.md","filePath":"algorithm/bubbleSort.md","lastUpdated":1704384335000}'),n={name:"algorithm/bubbleSort.md"},l=h(`<h1 id="面试官-说说你对冒泡排序的理解-如何实现-应用场景" tabindex="-1">面试官：说说你对冒泡排序的理解？如何实现？应用场景？ <a class="header-anchor" href="#面试官-说说你对冒泡排序的理解-如何实现-应用场景" aria-label="Permalink to &quot;面试官：说说你对冒泡排序的理解？如何实现？应用场景？&quot;">​</a></h1><p><img src="https://static.vue-js.com/6f5e0850-2652-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法</p><p>冒泡排序的思想就是在每次遍历一遍未排序的数列之后，将一个数据元素浮上去（也就是排好了一个数据）</p><p>如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”</p><p>假如我们要把 12、35、99、18、76 这 5 个数从大到小进行排序，那么数越大，越需要把它放在前面</p><p>思路如下：</p><ul><li>从后开始遍历，首先比较 18 和 76，发现 76 比 18 大，就把两个数交换顺序，得到 12、35、99、76、18</li><li>接着比较 76 和 99，发现 76 比 99 小，所以不用交换顺序</li><li>接着比较 99 和 35，发现 99 比 35 大，交换顺序</li><li>接着比较 99 和 12，发现 99 比 12 大，交换顺序</li></ul><p>最终第 1 趟排序的结果变成了 99、12、35、76、18，如下图所示：</p><p><img src="https://static.vue-js.com/7a363770-2652-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>上述可以看到，经过第一趟的排序，可以得到最大的元素，接下来第二趟排序则对剩下的的4个元素进行排序，如下图所示：</p><p><img src="https://static.vue-js.com/84b9ddf0-2652-11ec-a752-75723a64e8f5.png" alt=""></p><p>经过第 2 趟排序，结果为 99、76、12、35、18</p><p>然后开始第3趟的排序，结果为99、76、35、12、18</p><p>然后第四趟排序结果为99、76、35、18、12</p><p>经过 4 趟排序之后，只剩一个 12 需要排序了，这时已经没有可比较的元素了，这时排序完成</p><h2 id="二、如何实现" tabindex="-1">二、如何实现 <a class="header-anchor" href="#二、如何实现" aria-label="Permalink to &quot;二、如何实现&quot;">​</a></h2><p>如果要实现一个从小到大的排序，算法原理如下：</p><ul><li>首先比较相邻的元素，如果第一个元素比第二个元素大，则交换它们</li><li>针对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对，这样，最后的元素回事最大的数</li><li>针对所有的元素重复以上的步骤，除了最后一个</li><li>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较</li></ul><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif" alt=""></p><p>用代码表示则如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bubbleSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> len</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (arr[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) {        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 相邻元素两两对比</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 元素交换</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                arr[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可以看到：冒泡排序在每一轮排序中都会使一个元素排到一趟， 也就是最终需要 n-1 轮这样的排序</p><p>而在每轮排序中都需要对相邻的两个元素进行比较，在最坏的情况下，每次比较之后都需要交换位置，此时时间复杂度为<code>O(n^2)</code></p><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h3><p>对冒泡排序常见的改进方法是加入一标志性变量<code>exchange</code>，用于标志某一趟排序过程中是否有数据交换</p><p>如果进行某一趟排序时并没有进行数据交换，则说明数据已经按要求排列好，可立即结束排序，避免不必要的比较过程</p><p>可以设置一标志性变量<code>pos</code>，用于记录每趟排序中最后一次进行交换的位置，由于<code>pos</code>位置之后的记录均已交换到位，故在进行下一趟排序时只要扫描到<code>pos</code>位置即可，如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bubbleSort1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//初始时,最后位置保持不变  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//每趟开始时,无记录交换</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tmp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        arr[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tmp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//记录最后交换的位置  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//为下一趟排序作准备</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在待排序的数列有序的情况下，只需要一轮排序并且不用交换，此时情况最好，时间复杂度为<code>O(n)</code></p><p>并且从上述比较中看到，只有后一个元素比前面的元素大（小）时才会对它们交换位置并向上冒出，对于同样大小的元素，是不需要交换位置的，所以对于同样大小的元素来说，相对位置是不会改变的，因此， 冒泡排序是稳定的</p><h2 id="三、应用场景" tabindex="-1">三、应用场景 <a class="header-anchor" href="#三、应用场景" aria-label="Permalink to &quot;三、应用场景&quot;">​</a></h2><p>冒泡排的核心部分是双重嵌套循环， 时间复杂度是 O(N 2 )，相比其它排序算法，这是一个相对较高的时间复杂度，一般情况不推荐使用，由于冒泡排序的简洁性，通常被用来对于程序设计入门的学生介绍算法的概念</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F/4602306" target="_blank" rel="noreferrer">https://baike.baidu.com/item/冒泡排序/4602306</a></li><li><a href="https://www.runoob.com/w3cnote/bubble-sort.html" target="_blank" rel="noreferrer">https://www.runoob.com/w3cnote/bubble-sort.html</a></li><li><a href="http://data.biancheng.net/view/116.html" target="_blank" rel="noreferrer">http://data.biancheng.net/view/116.html</a></li><li><a href="https://dsb123dsb.github.io/2017/03/07/js%E5%AE%9E%E7%8E%B0%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F%E4%BB%A5%E5%8F%8A%E4%BC%98%E5%8C%96/" target="_blank" rel="noreferrer">https://dsb123dsb.github.io/2017/03/07/js实现冒泡排序以及优化/</a></li></ul>`,36),t=[l];function p(k,e,r,E,d,g){return a(),i("div",null,t)}const c=s(n,[["render",p]]);export{o as __pageData,c as default};
