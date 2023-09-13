import{_ as l,C as p,o,c as e,k as s,a as n,H as r,Q as c}from"./chunks/framework.bf9fbf22.js";const D=JSON.parse('{"title":"645. 错误的集合","description":"","frontmatter":{"title":"645. 错误的集合","tag":["数组","哈希表"],"date":"2022-12-13T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/645-错误的集合.md","filePath":"advance/LeetCode/645-错误的集合.md"}'),t={name:"advance/LeetCode/645-错误的集合.md"},E=s("h2",{id:"题目链接",tabindex:"-1"},[n("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),y=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode-cn.com/problems/set-mismatch/",target:"_blank",rel:"noreferrer"},"645. 错误的集合")])],-1),i={id:"题目描述",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="简单" type="tip"/>"'},"​",-1),d=c(`<p>合 <code>s</code> 包含从 <code>1</code> 到 <code>n</code> 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 <strong>丢失了一个数字</strong> 并且 <strong>有一个数字重复</strong> 。</p><p>给定一个数组 <code>nums</code> 代表了集合 <code>S</code> 发生错误后的结果。</p><p>请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：nums = [1,2,2,4]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：[2,3]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：nums = [1,2,2,4]</span></span>
<span class="line"><span style="color:#24292e;">输出：[2,3]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>示例 2：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：nums = [1,1]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：[1,2]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：nums = [1,1]</span></span>
<span class="line"><span style="color:#24292e;">输出：[1,2]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><ol><li><p>将数组从小到大排序</p></li><li><p>寻找重复的数字较为简单，如果相邻的两个元素相等，则该元素为重复的数字。</p></li><li><p>寻找丢失的数字相对复杂，可能有以下两种情况：</p><ul><li><p>如果丢失的数字大于 1 且小于 n，则一定存在相邻的两个元素的差等于 2，这两个元素之间的值即为丢失的数字；</p></li><li><p>如果丢失的数字是 1 或 n，则需要另外判断。</p></li></ul></li><li><p>为了寻找丢失的数字，需要在遍历已排序数组的同时记录上一个元素，然后计算当前元素与上一个元素的差。考虑到丢失的数字可能是 1，因此需要将上一个元素初始化为 0。</p><ul><li><p>当丢失的数字小于 n 时，通过计算当前元素与上一个元素的差，即可得到丢失的数字；</p></li><li><p>如果数组最后一个数，不等于 n，则丢失的为 n。</p></li></ul></li></ol><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">findErrorNums</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] errorNums </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        Arrays.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(nums);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 记录前一个元素的值，虑到丢失的数字可能是 1，因此需要将上一个元素初始化为 0，这样如果丢失的是 1，则 2-0 &gt; 1 可以找到丢失的数是 1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">n;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(nums[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> prev) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                errorNums[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prev;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(nums[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                errorNums[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prev </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            prev </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 判断丢失的是不是最后一位 n</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(nums[n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            errorNums[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> errorNums;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">findErrorNums</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.length;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] errorNums </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        Arrays.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(nums);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 记录前一个元素的值，虑到丢失的数字可能是 1，因此需要将上一个元素初始化为 0，这样如果丢失的是 1，则 2-0 &gt; 1 可以找到丢失的数是 1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> prev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">n;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(nums[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> prev) {</span></span>
<span class="line"><span style="color:#24292E;">                errorNums[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prev;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(nums[i] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> prev </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                errorNums[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prev </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            prev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums[i];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 判断丢失的是不是最后一位 n</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(nums[n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> n) {</span></span>
<span class="line"><span style="color:#24292E;">            errorNums[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> errorNums;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li><p>时间复杂度：O(nlog⁡n)，其中 n 是数组 nums 的长度。排序需要 O(nlog⁡n) 的时间，遍历数组找到错误的集合需要 O(n) 的时间，因此总时间复杂度是 O(nlog⁡n)。</p></li><li><p>空间复杂度：O(log⁡n)，其中 n 是数组 nums 的长度。排序需要 O(log⁡n) 的空间。</p></li></ul>`,13);function m(b,h,F,g,v,_){const a=p("Badge");return o(),e("div",null,[E,y,s("h2",i,[n("题目描述 "),r(a,{text:"简单",type:"tip"}),n(),u]),d])}const C=l(t,[["render",m]]);export{D as __pageData,C as default};
