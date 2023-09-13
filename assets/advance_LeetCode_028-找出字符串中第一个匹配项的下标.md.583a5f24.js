import{_ as l,C as p,o,c as e,k as s,a as n,H as t,Q as c}from"./chunks/framework.bf9fbf22.js";const g=JSON.parse('{"title":"028. 找出字符串中第一个匹配项的下标","description":"","frontmatter":{"title":"028. 找出字符串中第一个匹配项的下标","date":"2023-04-07T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/028-找出字符串中第一个匹配项的下标.md","filePath":"advance/LeetCode/028-找出字符串中第一个匹配项的下标.md"}'),r={name:"advance/LeetCode/028-找出字符串中第一个匹配项的下标.md"},E=s("h2",{id:"题目链接",tabindex:"-1"},[n("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),y=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/",target:"_blank",rel:"noreferrer"},"28. 找出字符串中第一个匹配项的下标")])],-1),i={id:"题目描述",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="中等" type="warning"/>"'},"​",-1),F=c(`<p>给你两个字符串 haystack 和 needle，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回 -1。</p><p>示例 1：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：haystack = &quot;sadbutsad&quot;, needle = &quot;sad&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：0</span></span>
<span class="line"><span style="color:#e1e4e8;">解释：&quot;sad&quot; 在下标 0 和 6 处匹配。</span></span>
<span class="line"><span style="color:#e1e4e8;">第一个匹配项的下标是 0 ，所以返回 0 。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：haystack = &quot;sadbutsad&quot;, needle = &quot;sad&quot;</span></span>
<span class="line"><span style="color:#24292e;">输出：0</span></span>
<span class="line"><span style="color:#24292e;">解释：&quot;sad&quot; 在下标 0 和 6 处匹配。</span></span>
<span class="line"><span style="color:#24292e;">第一个匹配项的下标是 0 ，所以返回 0 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>提示：</p><ul><li>1 &lt;= haystack.length, needle.length &lt;= 104</li><li>haystack 和 needle 仅由小写英文字符组成</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>本题是 KMP 经典题目。</p><p>KMP 的经典思想就是：<strong>当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。</strong></p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strStr</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">haystack</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">needle</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> haystack.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[m];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 求解 next 数组，i 从 1 开始，默认 next[0] = 0</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> next[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                next[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j; </span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 匹配主串</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> haystack.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> next[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (haystack.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> m) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strStr</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">haystack</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">needle</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> haystack.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[m];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 求解 next 数组，i 从 1 开始，默认 next[0] = 0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> m; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">                j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> next[j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">                j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                next[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j; </span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 匹配主串</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> haystack.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">                j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> next[j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (haystack.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">                j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> m) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li>时间复杂度：<em>O(n)</em></li><li>空间复杂度：<em>O(n)</em></li></ul>`,12);function b(h,u,m,A,D,_){const a=p("Badge");return o(),e("div",null,[E,y,s("h2",i,[n("题目描述 "),t(a,{text:"中等",type:"warning"}),n(),d]),F])}const j=l(r,[["render",b]]);export{g as __pageData,j as default};
