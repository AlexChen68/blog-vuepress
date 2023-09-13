import{_ as l,C as p,o,c as e,k as s,a as t,H as r,Q as a}from"./chunks/framework.bf9fbf22.js";const F=JSON.parse('{"title":"原理篇 - volatile 关键字","description":"","frontmatter":{"title":"原理篇 - volatile 关键字","date":"2023-03-17T00:00:00.000Z"},"headers":[],"relativePath":"java/concurrency/principle/volatile.md","filePath":"java/concurrency/principle/volatile.md"}'),c={name:"java/concurrency/principle/volatile.md"},i=a(`<h2 id="几个基本概念" tabindex="-1">几个基本概念 <a class="header-anchor" href="#几个基本概念" aria-label="Permalink to &quot;几个基本概念&quot;">​</a></h2><p>在介绍 volatile 之前，我们先回顾及介绍几个基本的概念。</p><h3 id="内存可见性" tabindex="-1">内存可见性 <a class="header-anchor" href="#内存可见性" aria-label="Permalink to &quot;内存可见性&quot;">​</a></h3><p>在 Java 内存模型那一章我们介绍了 JMM 有一个主内存，每个线程有自己私有的工作内存，工作内存中保存了一些变量在主内存的拷贝。</p><p><strong>内存可见性，指的是线程之间的可见性，当一个线程修改了共享变量时，另一个线程可以读取到这个修改后的值</strong>。</p><h3 id="重排序" tabindex="-1">重排序 <a class="header-anchor" href="#重排序" aria-label="Permalink to &quot;重排序&quot;">​</a></h3><p>为优化程序性能，对原有的指令执行顺序进行优化重新排序。重排序可能发生在多个阶段，比如编译重排序、CPU 重排序等。</p><h3 id="happens-before-规则" tabindex="-1">happens-before 规则 <a class="header-anchor" href="#happens-before-规则" aria-label="Permalink to &quot;happens-before 规则&quot;">​</a></h3><p>是一个给程序员使用的规则，只要程序员在写代码的时候遵循 happens-before 规则，JVM 就能保证指令在多线程之间的顺序性符合程序员的预期。</p><h2 id="volatile-的内存语义" tabindex="-1">volatile 的内存语义 <a class="header-anchor" href="#volatile-的内存语义" aria-label="Permalink to &quot;volatile 的内存语义&quot;">​</a></h2><p>在 Java 中，volatile 关键字有特殊的内存语义。volatile 主要有以下两个功能：</p><ul><li>保证变量的<strong>内存可见性</strong></li><li>禁止 volatile 变量与普通变量<strong>重排序</strong>（JSR133 提出，Java 5 开始才有这个“增强的 volatile 内存语义”）</li></ul><h3 id="内存可见性-1" tabindex="-1">内存可见性 <a class="header-anchor" href="#内存可见性-1" aria-label="Permalink to &quot;内存可见性&quot;">​</a></h3><p>以一段示例代码开始：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VolatileExample</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">volatile</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// step 1</span></span>
<span class="line"><span style="color:#E1E4E8;">        flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// step 2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reader</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (flag) { </span><span style="color:#6A737D;">// step 3</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(a); </span><span style="color:#6A737D;">// step 4</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VolatileExample</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// step 1</span></span>
<span class="line"><span style="color:#24292E;">        flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// step 2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reader</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (flag) { </span><span style="color:#6A737D;">// step 3</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(a); </span><span style="color:#6A737D;">// step 4</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在这段代码里，我们使用<code>volatile</code>关键字修饰了一个<code>boolean</code>类型的变量<code>flag</code>。</p><p>所谓内存可见性，指的是当一个线程对<code>volatile</code>修饰的变量进行<strong>写操作</strong>（比如 step 2）时，JMM 会立即把该线程对应的本地内存中的共享变量的值刷新到主内存；当一个线程对<code>volatile</code>修饰的变量进行<strong>读操作</strong>（比如 step 3）时，JMM 会把立即该线程对应的本地内存置为无效，从主内存中读取共享变量的值。</p><blockquote><p>在这一点上，volatile 与锁具有相同的内存效果，volatile 变量的写和锁的释放具有相同的内存语义，volatile 变量的读和锁的获取具有相同的内存语义。</p></blockquote><p>假设在时间线上，线程 A 先执行方法<code>writer</code>方法，线程 B 后执行<code>reader</code>方法。那必然会有下图：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/concurrency_volatile_memory.png" alt="volatile 内存示意图"></p><p>而如果<code>flag</code>变量<strong>没有</strong>用<code>volatile</code>修饰，在 step 2，线程 A 的本地内存里面的变量就不会立即更新到主内存，那随后线程 B 也同样不会去主内存拿最新的值，仍然使用线程 B 本地内存缓存的变量的值<code>a = 0，flag = false</code>。</p><h3 id="禁止重排序" tabindex="-1">禁止重排序 <a class="header-anchor" href="#禁止重排序" aria-label="Permalink to &quot;禁止重排序&quot;">​</a></h3><p>在 JSR-133 之前的旧的 Java 内存模型中，是允许 volatile 变量与普通变量重排序的。那上面的案例中，可能就会被重排序成下列时序来执行：</p><ol><li>线程 A 写 volatile 变量，step 2，设置 flag 为 true；</li><li>线程 B 读同一个 volatile，step 3，读取到 flag 为 true；</li><li>线程 B 读普通变量，step 4，读取到 a = 0；</li><li>线程 A 修改普通变量，step 1，设置 a = 1；</li></ol><p>可见，如果 volatile 变量与普通变量发生了重排序，虽然 volatile 变量能保证内存可见性，也可能导致普通变量读取错误。</p><p>所以在旧的内存模型中，volatile 的写 - 读就不能与锁的释放 - 获取具有相同的内存语义了。为了提供一种比锁更轻量级的<strong>线程间的通信机制</strong>，<strong>JSR-133</strong>专家组决定增强 volatile 的内存语义：严格限制编译器和处理器对 volatile 变量与普通变量的重排序。</p><p>编译器还好说，JVM 是怎么还能限制处理器的重排序的呢？它是通过<strong>内存屏障</strong>来实现的。</p><p>什么是内存屏障？硬件层面，内存屏障分两种：读屏障（Load Barrier）和写屏障（Store Barrier）。内存屏障有两个作用：</p><ol><li>阻止屏障两侧的指令重排序；</li><li>强制把写缓冲区/高速缓存中的脏数据等写回主内存，或者让缓存中相应的数据失效。</li></ol><blockquote><p>注意这里的缓存主要指的是 CPU 缓存，如 L1，L2 等</p></blockquote><p>编译器在<strong>生成字节码时</strong>，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序。编译器选择了一个<strong>比较保守的 JMM 内存屏障插入策略</strong>，这样可以保证在任何处理器平台，任何程序中都能得到正确的 volatile 内存语义。这个策略是：</p><ul><li>在每个 volatile 写操作前插入一个 StoreStore 屏障；</li><li>在每个 volatile 写操作后插入一个 StoreLoad 屏障；</li><li>在每个 volatile 读操作后插入一个 LoadLoad 屏障；</li><li>在每个 volatile 读操作后再插入一个 LoadStore 屏障。</li></ul><p>大概示意图是这个样子：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/concurrency_memory_barrier.png" alt="内存屏障"></p><blockquote><p>再逐个解释一下这几个屏障。注：下述 Load 代表读操作，Store 代表写操作</p><p><strong>LoadLoad 屏障</strong>：对于这样的语句 Load1; LoadLoad; Load2，在 Load2 及后续读取操作要读取的数据被访问前，保证 Load1 要读取的数据被读取完毕。<br><strong>StoreStore 屏障</strong>：对于这样的语句 Store1; StoreStore; Store2，在 Store2 及后续写入操作执行前，这个屏障会把 Store1 强制刷新到内存，保证 Store1 的写入操作对其它处理器可见。<br><strong>LoadStore 屏障</strong>：对于这样的语句 Load1; LoadStore; Store2，在 Store2 及后续写入操作被刷出前，保证 Load1 要读取的数据被读取完毕。<br><strong>StoreLoad 屏障</strong>：对于这样的语句 Store1; StoreLoad; Load2，在 Load2 及后续所有读取操作执行前，保证 Store1 的写入对所有处理器可见。它的开销是四种屏障中最大的（冲刷写缓冲器，清空无效化队列）。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能</p></blockquote><p>对于连续多个 volatile 变量读或者连续多个 volatile 变量写，编译器做了一定的优化来提高性能，比如：</p><blockquote><p>第一个 volatile 读;</p><p>LoadLoad 屏障；</p><p>第二个 volatile 读；</p><p>LoadStore 屏障</p></blockquote><p>再介绍一下 volatile 与普通变量的重排序规则：</p><ol><li><p>如果第一个操作是 volatile 读，那无论第二个操作是什么，都不能重排序；</p></li><li><p>如果第二个操作是 volatile 写，那无论第一个操作是什么，都不能重排序；</p></li><li><p>如果第一个操作是 volatile 写，第二个操作是 volatile 读，那不能重排序。</p></li></ol><p>举个例子，我们在案例中 step 1，是普通变量的写，step 2 是 volatile 变量的写，那符合第 2 个规则，这两个 steps 不能重排序。而 step 3 是 volatile 变量读，step 4 是普通变量读，符合第 1 个规则，同样不能重排序。</p><p>但如果是下列情况：第一个操作是普通变量读，第二个操作是 volatile 变量读，那是可以重排序的：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 声明变量</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 声明普通变量</span></span>
<span class="line"><span style="color:#F97583;">volatile</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 声明 volatile 变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 以下两个变量的读操作是可以重排序的</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a; </span><span style="color:#6A737D;">// 普通变量读</span></span>
<span class="line"><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> flag; </span><span style="color:#6A737D;">// volatile 变量读</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 声明变量</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 声明普通变量</span></span>
<span class="line"><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 声明 volatile 变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 以下两个变量的读操作是可以重排序的</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a; </span><span style="color:#6A737D;">// 普通变量读</span></span>
<span class="line"><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> flag; </span><span style="color:#6A737D;">// volatile 变量读</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="volatile-的用途" tabindex="-1">volatile 的用途 <a class="header-anchor" href="#volatile-的用途" aria-label="Permalink to &quot;volatile 的用途&quot;">​</a></h2><p>从 volatile 的内存语义上来看，volatile 可以保证内存可见性且禁止重排序。</p><p>在保证内存可见性这一点上，volatile 有着与锁相同的内存语义，所以可以作为一个“轻量级”的锁来使用。但由于 volatile 仅仅保证对单个 volatile 变量的读/写具有原子性，而锁可以保证整个<strong>临界区代码</strong>的执行具有原子性。所以<strong>在功能上，锁比 volatile 更强大；在性能上，volatile 更有优势</strong>。</p><p>在禁止重排序这一点上，volatile 也是非常有用的。比如我们熟悉的单例模式，其中有一种实现方式是“双重锁检查”，比如这样的代码：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Singleton instance; </span><span style="color:#6A737D;">// 不使用 volatile 关键字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 双重锁检验</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Singleton </span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (instance </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 第 7 行</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">synchronized</span><span style="color:#E1E4E8;"> (Singleton.class) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (instance </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 第 10 行</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton instance; </span><span style="color:#6A737D;">// 不使用 volatile 关键字</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 双重锁检验</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (instance </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// 第 7 行</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">synchronized</span><span style="color:#24292E;"> (Singleton.class) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (instance </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 第 10 行</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果这里的变量声明不使用 volatile 关键字，是可能会发生错误的。它可能会被重排序：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 第 10 行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以分解为以下三个步骤</span></span>
<span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> memory</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">allocate</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// 分配内存 相当于 c 的 malloc</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ctorInstanc</span><span style="color:#E1E4E8;">(memory) </span><span style="color:#6A737D;">//初始化对象</span></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> s</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">memory </span><span style="color:#6A737D;">//设置 s 指向刚分配的地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上述三个步骤可能会被重排序为 1-3-2，也就是：</span></span>
<span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> memory</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">allocate</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// 分配内存 相当于 c 的 malloc</span></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> s</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">memory </span><span style="color:#6A737D;">//设置 s 指向刚分配的地址</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ctorInstanc</span><span style="color:#E1E4E8;">(memory) </span><span style="color:#6A737D;">//初始化对象</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 第 10 行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以分解为以下三个步骤</span></span>
<span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;"> memory</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">allocate</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// 分配内存 相当于 c 的 malloc</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ctorInstanc</span><span style="color:#24292E;">(memory) </span><span style="color:#6A737D;">//初始化对象</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;"> s</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">memory </span><span style="color:#6A737D;">//设置 s 指向刚分配的地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上述三个步骤可能会被重排序为 1-3-2，也就是：</span></span>
<span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;"> memory</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">allocate</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// 分配内存 相当于 c 的 malloc</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;"> s</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">memory </span><span style="color:#6A737D;">//设置 s 指向刚分配的地址</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ctorInstanc</span><span style="color:#24292E;">(memory) </span><span style="color:#6A737D;">//初始化对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>而一旦假设发生了这样的重排序，比如线程 A 在第 10 行执行了步骤 1 和步骤 3，但是步骤 2 还没有执行完。这个时候另一个线程 B 执行到了第 7 行，它会判定 instance 不为空，然后直接返回了一个未初始化完成的 instance！</p><p>所以 JSR-133 对 volatile 做了增强后，volatile 的禁止重排序功能还是非常有用的。</p><hr><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2>`,53),y=s("a",{href:"http://concurrent.redspider.group/article/02/8.html",target:"_blank",rel:"noreferrer"},"第八章 volatile",-1),E=a('<li><a href="https://blog.csdn.net/u010571316/article/details/64906481" target="_blank" rel="noreferrer">happens-before 规则和 as-if-serial 语义</a></li><li><a href="https://blog.csdn.net/kg_2012/article/details/79059909" target="_blank" rel="noreferrer">volatile 关键字详解</a></li><li><a href="https://www.cnblogs.com/humc/p/5426351.html" target="_blank" rel="noreferrer">Java 可见性机制的原理</a></li><li><a href="https://blog.csdn.net/summerZBH123/article/details/80547516" target="_blank" rel="noreferrer">Volatile 关键字介绍</a></li><li><a href="https://www.cnblogs.com/zhengbin/p/5654805.html" target="_blank" rel="noreferrer">Java 中 Volatile 关键字详解</a></li><li><a href="https://blog.csdn.net/yjp198713/article/details/78839698" target="_blank" rel="noreferrer">JVM(十一)Java 指令重排序</a></li><li><a href="https://www.cnblogs.com/leefreeman/p/7356030.html" target="_blank" rel="noreferrer">深入理解 JVM（二）——内存模型、可见性、指令重排序</a></li><li><a href="https://blog.csdn.net/hqq2023623/article/details/51013468" target="_blank" rel="noreferrer">JMM-volatile 与内存屏障</a></li><li><a href="https://www.jianshu.com/p/ef8de88b1343" target="_blank" rel="noreferrer">并发关键字 volatile（重排序和内存屏障）</a></li>',9);function b(d,u,m,v,h,g){const n=p("Badge");return o(),e("div",null,[i,s("ul",null,[s("li",null,[y,t(),r(n,{text:"原文",type:"tip"})]),E])])}const D=l(c,[["render",b]]);export{F as __pageData,D as default};
