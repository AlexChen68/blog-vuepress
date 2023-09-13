import{_ as e,C as l,o as p,c as o,k as s,a,H as t,Q as r}from"./chunks/framework.bf9fbf22.js";const f=JSON.parse('{"title":"206. 反转链表","description":"","frontmatter":{"title":"206. 反转链表","tag":["链表","递归"],"date":"2023-03-17T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/206-反转链表.md","filePath":"advance/LeetCode/206-反转链表.md"}'),c={name:"advance/LeetCode/206-反转链表.md"},i=s("h2",{id:"题目链接",tabindex:"-1"},[a("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),E=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noreferrer"},"206. 反转链表")])],-1),d={id:"题目描述",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="简单" type="tip"/>"'},"​",-1),h=r(`<p>给你单链表的头节点 head，请你反转链表，并返回反转后的链表。</p><p>示例 1：</p><p><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="示例"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：head = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：[5,4,3,2,1]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：head = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#24292e;">输出：[5,4,3,2,1]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p><strong>递归法：</strong></p><ul><li>使用递归函数，一直递归到链表的最后一个结点，该结点就是反转后的头结点；</li><li>此后，每次函数在返回的过程中，让当前结点的下一个结点的 next 指针指向当前节点；</li><li>同时让当前结点的 next 指针指向 NULL，从而实现从链表尾部开始的局部反转；</li><li>当递归函数全部出栈后，链表反转完成。</li></ul><p>![递归法](<a href="https://pic.leetcode-cn.com/8951bc3b8b7eb4da2a46063c1bb96932e7a69910c0a93d973bd8aa5517e59fc8.gif" target="_blank" rel="noreferrer">https://pic.leetcode-cn.com/8951bc3b8b7eb4da2a46063c1bb96932e7a69910c0a93d973bd8aa5517e59fc8.gif</a> =500x360)</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> ListNode </span><span style="color:#B392F0;">reverseList</span><span style="color:#E1E4E8;">(ListNode </span><span style="color:#FFAB70;">head</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> head.next </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取后面反转的结果</span></span>
<span class="line"><span style="color:#E1E4E8;">        ListNode node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reverseList</span><span style="color:#E1E4E8;">(head.next);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 下一个结点的 next 指针指向 head</span></span>
<span class="line"><span style="color:#E1E4E8;">        head.next.next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// head 指向 null</span></span>
<span class="line"><span style="color:#E1E4E8;">        head.next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> node;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> ListNode </span><span style="color:#6F42C1;">reverseList</span><span style="color:#24292E;">(ListNode </span><span style="color:#E36209;">head</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> head.next </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取后面反转的结果</span></span>
<span class="line"><span style="color:#24292E;">        ListNode node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reverseList</span><span style="color:#24292E;">(head.next);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 下一个结点的 next 指针指向 head</span></span>
<span class="line"><span style="color:#24292E;">        head.next.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// head 指向 null</span></span>
<span class="line"><span style="color:#24292E;">        head.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> node;</span></span>
<span class="line"><span style="color:#24292E;">    } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li>时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。</li><li>空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。</li></ul>`,12);function b(u,m,_,v,g,x){const n=l("Badge");return p(),o("div",null,[i,E,s("h2",d,[a("题目描述 "),t(n,{text:"简单",type:"tip"}),a(),y]),h])}const A=e(c,[["render",b]]);export{f as __pageData,A as default};
