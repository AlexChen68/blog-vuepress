import{_ as l,C as p,o,c as e,k as s,a as n,H as r,Q as c}from"./chunks/framework.bf9fbf22.js";const _=JSON.parse('{"title":"697. 数组的度","description":"","frontmatter":{"title":"697. 数组的度","tag":["数组","哈希表"],"date":"2022-12-13T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/697-数组的度.md","filePath":"advance/LeetCode/697-数组的度.md"}'),t={name:"advance/LeetCode/697-数组的度.md"},E=s("h2",{id:"题目链接",tabindex:"-1"},[n("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),y=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode.cn/problems/degree-of-an-array/",target:"_blank",rel:"noreferrer"},"697. 数组的度")])],-1),i={id:"题目描述",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="简单" type="tip"/>"'},"​",-1),u=c(`<p>给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。</p><p>你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：nums = [1,2,2,3,1]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：2</span></span>
<span class="line"><span style="color:#e1e4e8;">解释：</span></span>
<span class="line"><span style="color:#e1e4e8;">输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。</span></span>
<span class="line"><span style="color:#e1e4e8;">连续子数组里面拥有相同度的有如下所示：</span></span>
<span class="line"><span style="color:#e1e4e8;">[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]</span></span>
<span class="line"><span style="color:#e1e4e8;">最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：nums = [1,2,2,3,1]</span></span>
<span class="line"><span style="color:#24292e;">输出：2</span></span>
<span class="line"><span style="color:#24292e;">解释：</span></span>
<span class="line"><span style="color:#24292e;">输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。</span></span>
<span class="line"><span style="color:#24292e;">连续子数组里面拥有相同度的有如下所示：</span></span>
<span class="line"><span style="color:#24292e;">[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]</span></span>
<span class="line"><span style="color:#24292e;">最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>示例 2：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：nums = [1,2,2,3,1,4,2]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：6</span></span>
<span class="line"><span style="color:#e1e4e8;">解释：</span></span>
<span class="line"><span style="color:#e1e4e8;">数组的度是 3 ，因为元素 2 重复出现 3 次。</span></span>
<span class="line"><span style="color:#e1e4e8;">所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：nums = [1,2,2,3,1,4,2]</span></span>
<span class="line"><span style="color:#24292e;">输出：6</span></span>
<span class="line"><span style="color:#24292e;">解释：</span></span>
<span class="line"><span style="color:#24292e;">数组的度是 3 ，因为元素 2 重复出现 3 次。</span></span>
<span class="line"><span style="color:#24292e;">所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>记原数组中出现次数最多的数为 x，那么和原数组的度相同的最短连续子数组，必然包含了原数组中的全部 x，且两端恰为 x 第一次出现和最后一次出现的位置。</p><p>因为符合条件的 x 可能有多个，即多个不同的数在原数组中出现次数相同。所以为了找到这个子数组，我们需要统计每一个数出现的次数，同时还需要统计每一个数第一次出现和最后一次出现的位置。</p><p>在实际代码中，我们使用哈希表实现该功能，每一个数映射到一个长度为 3 的数组，数组中的三个元素分别代表这个数出现的次数、这个数在原数组中第一次出现的位置和这个数在原数组中最后一次出现的位置。当我们记录完所有信息后，我们需要遍历该哈希表，找到元素出现次数最多，且前后位置差最小的数。</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">findShortestSubArray</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Map&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[]&gt; map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> HashMap&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[]&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nums.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (map.</span><span style="color:#B392F0;">containsKey</span><span style="color:#E1E4E8;">(nums[i])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(nums[i])[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(nums[i])[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(nums[i], </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[]{</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, i, i});</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> maxNum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, minLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (Map.Entry&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[]&gt; entry </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> map.</span><span style="color:#B392F0;">entrySet</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entry.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (maxNum </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                maxNum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">                minLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (maxNum </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (minLen </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    minLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> minLen;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findShortestSubArray</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        Map&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[]&gt; map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> HashMap&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[]&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.length;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (map.</span><span style="color:#6F42C1;">containsKey</span><span style="color:#24292E;">(nums[i])) {</span></span>
<span class="line"><span style="color:#24292E;">                map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(nums[i])[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(nums[i])[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                map.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(nums[i], </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[]{</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, i, i});</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> maxNum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, minLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (Map.Entry&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[]&gt; entry </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">entrySet</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entry.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (maxNum </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">                maxNum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">                minLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (maxNum </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (minLen </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    minLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> arr[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> minLen;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul>`,14);function b(F,d,h,C,A,g){const a=p("Badge");return o(),e("div",null,[E,y,s("h2",i,[n("题目描述 "),r(a,{text:"简单",type:"tip"}),n(),m]),u])}const B=l(t,[["render",b]]);export{_ as __pageData,B as default};
