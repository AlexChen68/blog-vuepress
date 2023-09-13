import{_ as l,C as p,o as e,c as o,k as s,H as t,Q as n}from"./chunks/framework.bf9fbf22.js";const g=JSON.parse('{"title":"JDK 工具篇 - 并发集合容器","description":"","frontmatter":{"title":"JDK 工具篇 - 并发集合容器","date":"2023-03-09T00:00:00.000Z"},"headers":[],"relativePath":"java/concurrency/juc/collection.md","filePath":"java/concurrency/juc/collection.md"}'),r={name:"java/concurrency/juc/collection.md"},c=n(`<h2 id="同步容器与并发容器" tabindex="-1">同步容器与并发容器 <a class="header-anchor" href="#同步容器与并发容器" aria-label="Permalink to &quot;同步容器与并发容器&quot;">​</a></h2><p>我们知道在 java.util 包下提供了一些容器类，而 Vector 和 Hashtable 是线程安全的容器类，但是这些容器实现同步的方式是通过对方法加锁 (sychronized) 方式实现的，这样读写均需要锁操作，导致性能低下。</p><p>而即使是 Vector 这样线程安全的类，在面对多线程下的复合操作的时候也是需要通过客户端加锁的方式保证原子性。如下面例子说明：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestVector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> Vector&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; vector;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//方法一</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;">  Object </span><span style="color:#B392F0;">getLast</span><span style="color:#E1E4E8;">(Vector </span><span style="color:#FFAB70;">vector</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(lastIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//方法二</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleteLast</span><span style="color:#E1E4E8;">(Vector </span><span style="color:#FFAB70;">vector</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    vector.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(lastIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//方法三</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;">  Object </span><span style="color:#B392F0;">getLastSysnchronized</span><span style="color:#E1E4E8;">(Vector </span><span style="color:#FFAB70;">vector</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">synchronized</span><span style="color:#E1E4E8;">(vector){</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(lastIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//方法四</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleteLastSysnchronized</span><span style="color:#E1E4E8;">(Vector </span><span style="color:#FFAB70;">vector</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">synchronized</span><span style="color:#E1E4E8;"> (vector){</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vector.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			vector.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(lastIndex);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestVector</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Vector&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; vector;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//方法一</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;">  Object </span><span style="color:#6F42C1;">getLast</span><span style="color:#24292E;">(Vector </span><span style="color:#E36209;">vector</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(lastIndex);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//方法二</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteLast</span><span style="color:#24292E;">(Vector </span><span style="color:#E36209;">vector</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	    vector.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(lastIndex);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//方法三</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;">  Object </span><span style="color:#6F42C1;">getLastSysnchronized</span><span style="color:#24292E;">(Vector </span><span style="color:#E36209;">vector</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">synchronized</span><span style="color:#24292E;">(vector){</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(lastIndex);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//方法四</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteLastSysnchronized</span><span style="color:#24292E;">(Vector </span><span style="color:#E36209;">vector</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">synchronized</span><span style="color:#24292E;"> (vector){</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vector.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			vector.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(lastIndex);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>如果方法一和方法二为一个组合的话。那么当方法一获取到了<code>vector</code>的 size 之后，方法二已经执行完毕，这样就导致程序的错误。</p><p>如果方法三与方法四组合的话。通过锁机制保证了在<code>vector</code>上的操作的原子性。</p><p>并发容器是 Java 5 提供的在多线程编程下用于代替同步容器，针对不同的应用场景进行设计，提高容器的并发访问性，同时定义了线程安全的复合操作。</p><h2 id="并发容器类介绍" tabindex="-1">并发容器类介绍 <a class="header-anchor" href="#并发容器类介绍" aria-label="Permalink to &quot;并发容器类介绍&quot;">​</a></h2><p>整体架构 (列举常用的容器类)</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8.png" alt="列举常用的容器类"></p><p>其中，阻塞队列（BlockingQueue）在<a href="./13.html">第十三章</a>有介绍，CopyOnWrite 容器（CopyOnWritexxx）在<a href="./16.html">第十六章</a>有介绍，这里不做过多介绍。</p><p>下面分别介绍一些常用的并发容器类和接口，因篇幅原因，这里只介绍这些类的用途和基本的原理，不做过多的源码解析。</p><h3 id="并发-map" tabindex="-1">并发 Map <a class="header-anchor" href="#并发-map" aria-label="Permalink to &quot;并发 Map&quot;">​</a></h3><h4 id="concurrentmap-接口" tabindex="-1">ConcurrentMap 接口 <a class="header-anchor" href="#concurrentmap-接口" aria-label="Permalink to &quot;ConcurrentMap 接口&quot;">​</a></h4><p>ConcurrentMap 接口继承了 Map 接口，在 Map 接口的基础上又定义了四个方法：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcurrentMap</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">K</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">V</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">K</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">V</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//插入元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    V </span><span style="color:#B392F0;">putIfAbsent</span><span style="color:#E1E4E8;">(K </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, V </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//移除元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(Object </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, Object </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//替换元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(K </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, V </span><span style="color:#FFAB70;">oldValue</span><span style="color:#E1E4E8;">, V </span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//替换元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    V </span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(K </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, V </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcurrentMap</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//插入元素</span></span>
<span class="line"><span style="color:#24292E;">    V </span><span style="color:#6F42C1;">putIfAbsent</span><span style="color:#24292E;">(K </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, V </span><span style="color:#E36209;">value</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//移除元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(Object </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, Object </span><span style="color:#E36209;">value</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//替换元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(K </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, V </span><span style="color:#E36209;">oldValue</span><span style="color:#24292E;">, V </span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//替换元素</span></span>
<span class="line"><span style="color:#24292E;">    V </span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(K </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, V </span><span style="color:#E36209;">value</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>**putIfAbsent：**与原有 put 方法不同的是，putIfAbsent 方法中如果插入的 key 相同，则不替换原有的 value 值；</p><p>**remove：**与原有 remove 方法不同的是，新 remove 方法中增加了对 value 的判断，如果要删除的 key-value 不能与 Map 中原有的 key-value 对应上，则不会删除该元素;</p><p>**replace(K,V,V)：**增加了对 value 值的判断，如果 key-oldValue 能与 Map 中原有的 key-value 对应上，才进行替换操作；</p><p>**replace(K,V)：**与上面的 replace 不同的是，此 replace 不会对 Map 中原有的 key-value 进行比较，如果 key 存在则直接替换；</p><h4 id="concurrenthashmap-类" tabindex="-1">ConcurrentHashMap 类 <a class="header-anchor" href="#concurrenthashmap-类" aria-label="Permalink to &quot;ConcurrentHashMap 类&quot;">​</a></h4><p>ConcurrentHashMap 同 HashMap 一样也是基于散列表的 map，但是它提供了一种与 Hashtable 完全不同的加锁策略，提供更高效的并发性和伸缩性。</p><p>ConcurrentHashMap 在 JDK 1.7 和 JDK 1.8 中有一些区别。这里我们分开介绍一下。</p><p><strong>JDK 1.7</strong></p><p>ConcurrentHashMap 在 JDK 1.7 中，提供了一种粒度更细的加锁机制来实现在多线程下更高的性能，这种机制叫分段锁 (Lock Striping)。</p><p>提供的优点是：在并发环境下将实现更高的吞吐量，而在单线程环境下只损失非常小的性能。</p><p>可以这样理解分段锁，就是<strong>将数据分段，对每一段数据分配一把锁</strong>。当一个线程占用锁访问其中一个段数据的时候，其他段的数据也能被其他线程访问。</p><p>有些方法需要跨段，比如 size()、isEmpty()、containsValue()，它们可能需要锁定整个表而不仅仅是某个段，这需要按顺序锁定所有段，操作完毕后，又按顺序释放所有段的锁。如下图：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/%E5%88%86%E6%AE%B5%E9%94%81%E6%9C%BA%E5%88%B6.png" alt="分段锁机制"></p><p>ConcurrentHashMap 是由 Segment 数组结构和 HashEntry 数组结构组成。Segment 是一种可重入锁 ReentrantLock，HashEntry 则用于存储键值对数据。</p><p>一个 ConcurrentHashMap 里包含一个 Segment 数组，Segment 的结构和 HashMap 类似，是一种数组和链表结构，一个 Segment 里包含一个 HashEntry 数组，每个 HashEntry 是一个链表结构的元素，每个 Segment 守护着一个 HashEntry 数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得它对应的 Segment 锁。</p><p><strong>JDK 1.8</strong></p><p>而在 JDK 1.8 中，ConcurrentHashMap 主要做了两个优化：</p><ul><li>同 HashMap 一样，链表也会在长度达到 8 的时候转化为红黑树，这样可以提升大量冲突时候的查询效率；</li><li>以某个位置的头结点（链表的头结点或红黑树的 root 结点）为锁，配合自旋+CAS 避免不必要的锁开销，进一步提升并发性能。</li></ul><p>对 ConcurrentHashMap 源码感兴趣的朋友可以看看这两篇文章：</p><ul><li><a href="https://yasinshaw.com/articles/27" target="_blank" rel="noreferrer">https://yasinshaw.com/articles/27</a></li><li><a href="https://yasinshaw.com/articles/30" target="_blank" rel="noreferrer">https://yasinshaw.com/articles/30</a></li></ul><h4 id="concurrentnavigablemap-接口与-concurrentskiplistmap-类" tabindex="-1">ConcurrentNavigableMap 接口与 ConcurrentSkipListMap 类 <a class="header-anchor" href="#concurrentnavigablemap-接口与-concurrentskiplistmap-类" aria-label="Permalink to &quot;ConcurrentNavigableMap 接口与 ConcurrentSkipListMap 类&quot;">​</a></h4><p>ConcurrentNavigableMap 接口继承了 NavigableMap 接口，这个接口提供了针对给定搜索目标返回最接近匹配项的导航方法。</p><p>ConcurrentNavigableMap 接口的主要实现类是 ConcurrentSkipListMap 类。从名字上来看，它的底层使用的是跳表（SkipList）的数据结构。关于跳表的数据结构这里不做太多介绍，它是一种”空间换时间“的数据结构，可以使用 CAS 来保证并发安全性。</p><h3 id="并发-queue" tabindex="-1">并发 Queue <a class="header-anchor" href="#并发-queue" aria-label="Permalink to &quot;并发 Queue&quot;">​</a></h3><p>JDK 并没有提供线程安全的 List 类，因为对 List 来说，<strong>很难去开发一个通用并且没有并发瓶颈的线程安全的 List</strong>。因为即使简单的读操作，拿 contains() 这样一个操作来说，很难想到搜索的时候如何避免锁住整个 list。</p><p>所以退一步，JDK 提供了对队列和双端队列的线程安全的类：ConcurrentLinkedQueue 和 ConcurrentLinkedDeque。因为队列相对于 List 来说，有更多的限制。这两个类是使用 CAS 来实现线程安全的。</p><h3 id="并发-set" tabindex="-1">并发 Set <a class="header-anchor" href="#并发-set" aria-label="Permalink to &quot;并发 Set&quot;">​</a></h3><p>JDK 提供了 ConcurrentSkipListSet，是线程安全的有序的集合。底层是使用 ConcurrentSkipListMap 实现。</p><p>谷歌的 guava 框架实现了一个线程安全的 ConcurrentHashSet：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Set&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Sets.</span><span style="color:#B392F0;">newConcurrentHashSet</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Set&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Sets.</span><span style="color:#6F42C1;">newConcurrentHashSet</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2>`,48),E=s("a",{href:"http://concurrent.redspider.group/article/03/15.html",target:"_blank",rel:"noreferrer"},"并发容器集合",-1),y=n('<li><a href="https://www.cnblogs.com/ITtangtang/p/3948786.html" target="_blank" rel="noreferrer">Java 集合-ConcurrentHashMap 原理分析</a></li><li><a href="https://blog.csdn.net/u012777670/article/details/82313750" target="_blank" rel="noreferrer">同步容器与并发容器类简介</a></li><li><a href="http://ifeve.com/concurrentlinkedqueue/" target="_blank" rel="noreferrer">ConcurrentLinkedQueue 的实现原理分析</a></li><li><a href="https://yasinshaw.com/articles/27" target="_blank" rel="noreferrer">ConcurrentHashMap 的 put 源码解析</a></li><li><a href="https://yasinshaw.com/articles/30" target="_blank" rel="noreferrer">从 ConcurrentHashMap 能学到哪些并发编程技巧？</a></li>',5);function i(u,b,h,d,m,F){const a=p("Badge");return e(),o("div",null,[c,s("ul",null,[s("li",null,[E,t(a,{text:"原文",type:"tip"})]),y])])}const A=l(r,[["render",i]]);export{g as __pageData,A as default};
