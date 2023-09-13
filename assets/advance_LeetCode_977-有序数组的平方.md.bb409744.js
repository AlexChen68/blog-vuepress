import{_ as l,C as p,o,c as e,k as s,a as n,H as t,Q as r}from"./chunks/framework.bf9fbf22.js";const f=JSON.parse('{"title":"977.有序数组的平方","description":"","frontmatter":{"title":"977.有序数组的平方","tag":["数组","双指针"],"date":"2023-03-30T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/977-有序数组的平方.md","filePath":"advance/LeetCode/977-有序数组的平方.md"}'),c={name:"advance/LeetCode/977-有序数组的平方.md"},E=s("h2",{id:"题目链接",tabindex:"-1"},[n("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),y=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode.cn/problems/squares-of-a-sorted-array",target:"_blank",rel:"noreferrer"},"977.有序数组的平方")])],-1),i={id:"题目描述",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="简单" type="tip"/>"'},"​",-1),d=r(`<p>给你一个按 <strong>非递减顺序</strong> 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。</p><p>示例 1：输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]</p><p>示例 2：输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>双指针法：</p><p>因为数组是非递减顺序的，所以有可能一个负数平方后比正数平方后更大，但是最大值只会在数组的两端，不是最左边就是最右边，不可能是中间。</p><p>因此每次都取最大值，然后放入一个新数组，从末尾开始依次放数。</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">sortedSquares</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[n];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (left </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 判断 left 的平方和 right 的平方哪个更大</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (nums[left] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> nums[left] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> nums[right] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> nums[right]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                res[index] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums[left] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> nums[left];</span></span>
<span class="line"><span style="color:#E1E4E8;">                left</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                res[index] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums[right] </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> nums[right];</span></span>
<span class="line"><span style="color:#E1E4E8;">                right</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            index</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">sortedSquares</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.length;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[n];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (left </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> right) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 判断 left 的平方和 right 的平方哪个更大</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[left] </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> nums[left] </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> nums[right] </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> nums[right]) {</span></span>
<span class="line"><span style="color:#24292E;">                res[index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums[left] </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> nums[left];</span></span>
<span class="line"><span style="color:#24292E;">                left</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                res[index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums[right] </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> nums[right];</span></span>
<span class="line"><span style="color:#24292E;">                right</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            index</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li>时间复杂度：O(n)，只需要遍历一次。</li><li>空间复杂度：O(1)，只需要存储常数级的额外变量。</li></ul>`,11);function m(b,h,F,_,A,D){const a=p("Badge");return o(),e("div",null,[E,y,s("h2",i,[n("题目描述 "),t(a,{text:"简单",type:"tip"}),n(),u]),d])}const x=l(c,[["render",m]]);export{f as __pageData,x as default};
