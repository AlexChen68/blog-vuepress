import{_ as l,C as p,o as e,c as o,k as s,a as n,H as t,Q as c}from"./chunks/framework.bf9fbf22.js";const D=JSON.parse('{"title":"142. 环形链表 II","description":"","frontmatter":{"title":"142. 环形链表 II","tag":["链表","快慢指针法"],"date":"2023-04-01T00:00:00.000Z"},"headers":[],"relativePath":"advance/LeetCode/142-环形链表 II.md","filePath":"advance/LeetCode/142-环形链表 II.md"}'),r={name:"advance/LeetCode/142-环形链表 II.md"},i=s("h2",{id:"题目链接",tabindex:"-1"},[n("题目链接 "),s("a",{class:"header-anchor",href:"#题目链接","aria-label":'Permalink to "题目链接"'},"​")],-1),E=s("ul",null,[s("li",null,[s("a",{href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noreferrer"},"142. 环形链表 II")])],-1),y={id:"题目描述",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#题目描述","aria-label":'Permalink to "题目描述 <Badge text="中等" type="warning"/>"'},"​",-1),b=c(`<p>给定一个链表的头节点 head，返回链表开始入环的第一个节点。如果链表无环，则返回 null。</p><p>如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（<strong>索引从 0 开始</strong>）。</p><p>如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。</p><p><em>不允许修改链表</em>。</p><p>示例 1：</p><p><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="示例"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入：head = [3,2,0,-4], pos = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">输出：返回索引为 1 的链表节点</span></span>
<span class="line"><span style="color:#e1e4e8;">解释：链表中有一个环，其尾部连接到第二个节点。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入：head = [3,2,0,-4], pos = 1</span></span>
<span class="line"><span style="color:#24292e;">输出：返回索引为 1 的链表节点</span></span>
<span class="line"><span style="color:#24292e;">解释：链表中有一个环，其尾部连接到第二个节点。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>解答本题分成两步：</p><ol><li>判断是否有环；</li><li>如果有环，入口在哪里？</li></ol><p>这类链表题目一般都是使用双指针法解决的，例如寻找距离尾部第 K 个节点、寻找环入口、寻找公共尾部入口等。</p><p><strong>快慢指针法：</strong></p><ol><li>使用两个指针 fast 和 slow，从头结点开始遍历，fast 每次走两个结点，slow 每次走一个结点；</li><li>如果有环，fast 和 slow 一定会相交，即 fast 与 slow 相等；否则不存在环；</li><li>在有环的情况下，假设从头结点到相交结点的距离为 a，环内有 b 个结点，设 slow 走了 <em>s</em> 个结点，则 fast 走了 <em>f=s+nb</em> 个结点，同时又是 slow 的两倍，所以 <em>s=nb</em>、<em>f=2nb</em>（注意：n 是未知数，不同链表的情况不同）;</li><li>因此找到入口结点转变为找到 a 的长度；</li><li>slow 指针 位置不变，将 fast 指针重新 指向链表头部节点；slow 和 fast 同时每轮向前走 1 步（此时 <em>f=0，s=nb</em>）；</li><li>当 fast 指针走到 <em>f=a</em> 步时，slow 指针走到步 <em>s=a+nb</em>，此时 两指针重合，并同时指向链表环入口。</li><li>此时 slow 指针指向的节点就是相交的结点。</li></ol><p>更多细致的解析，可以参考 <a href="https://leetcode.cn/problems/linked-list-cycle-ii/solutions/12616/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/" target="_blank" rel="noreferrer">环形链表 II（双指针法，清晰图解）</a></p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> ListNode </span><span style="color:#B392F0;">detectCycle</span><span style="color:#E1E4E8;">(ListNode </span><span style="color:#FFAB70;">head</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ListNode fast </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ListNode slow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 无环的结束条件：fast 遍历完但是仍然没有相交</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (fast </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> fast.next </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// fast 每次走两步，slow 每次走一步</span></span>
<span class="line"><span style="color:#E1E4E8;">            fast </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fast.next.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            slow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> slow.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 相交，退出循环，开始寻找相交点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (fast </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> slow) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// fast 从头开始走 a 步，slow 也走 a 步，再次相交的点就是入口</span></span>
<span class="line"><span style="color:#E1E4E8;">        fast </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (fast </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> slow) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            fast </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fast.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            slow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> slow.next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> slow;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> ListNode </span><span style="color:#6F42C1;">detectCycle</span><span style="color:#24292E;">(ListNode </span><span style="color:#E36209;">head</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        ListNode fast </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">        ListNode slow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 无环的结束条件：fast 遍历完但是仍然没有相交</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (fast </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> fast.next </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// fast 每次走两步，slow 每次走一步</span></span>
<span class="line"><span style="color:#24292E;">            fast </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fast.next.next;</span></span>
<span class="line"><span style="color:#24292E;">            slow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slow.next;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 相交，退出循环，开始寻找相交点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (fast </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> slow) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// fast 从头开始走 a 步，slow 也走 a 步，再次相交的点就是入口</span></span>
<span class="line"><span style="color:#24292E;">        fast </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (fast </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> slow) {</span></span>
<span class="line"><span style="color:#24292E;">            fast </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fast.next;</span></span>
<span class="line"><span style="color:#24292E;">            slow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> slow.next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> slow;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2><ul><li>时间复杂度：</li><li>空间复杂度：</li></ul>`,18);function u(m,h,f,_,w,F){const a=p("Badge");return e(),o("div",null,[i,E,s("h2",y,[n("题目描述 "),t(a,{text:"中等",type:"warning"}),n(),d]),b])}const g=l(r,[["render",u]]);export{D as __pageData,g as default};
