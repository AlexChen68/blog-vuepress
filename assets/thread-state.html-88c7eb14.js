import{_ as e,W as p,X as o,Y as n,Z as s,a1 as t,a0 as c,C as l}from"./framework-07dc8c78.js";const i={},u=c(`<h2 id="线程的状态" tabindex="-1"><a class="header-anchor" href="#线程的状态" aria-hidden="true">#</a> 线程的状态</h2><p><strong>首先来看操作系统中的线程的状态：</strong></p><blockquote><p>在现在的操作系统中，线程是被视为轻量级进程的，所以操作系统线程的状态其实和操作系统进程的状态是一致的。</p></blockquote><p><img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/java/system_thread_state.png" alt="操作系统线程状态" loading="lazy"></p><p>操作系统线程主要有以下三个状态：</p><ul><li>就绪状态 (ready)：线程正在等待使用 CPU，经调度程序调用之后可进入 running 状态。</li><li>执行状态 (running)：线程正在使用 CPU。</li><li>等待状态 (waiting): 线程经过等待事件的调用或者正在等待其他资源（如 I/O）</li></ul><p><strong>再来看看 java 中是如何定义线程的状态的：</strong></p><p>在 java 的 <code>java.lang.Thread</code> 类中，通过内部枚举类定义了六种状态</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token constant">NEW</span><span class="token punctuation">,</span>
    <span class="token constant">RUNNABLE</span><span class="token punctuation">,</span>
    <span class="token constant">BLOCKED</span><span class="token punctuation">,</span>
    <span class="token constant">WAITING</span><span class="token punctuation">,</span>
    <span class="token constant">TIMED_WAITING</span><span class="token punctuation">,</span>
    <span class="token constant">TERMINATED</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 线程状态定义：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/java/juc_thread_state.png" alt="线程状态" loading="lazy"></p><h3 id="新建-new" tabindex="-1"><a class="header-anchor" href="#新建-new" aria-hidden="true">#</a> 新建（NEW）</h3><p>线程创建后尚未启动。新创建的线程还没有调用 <code>start()</code> 方法，此时线程处于 <code>NEW</code> 状态。</p><h3 id="可运行-runnable" tabindex="-1"><a class="header-anchor" href="#可运行-runnable" aria-hidden="true">#</a> 可运行 (Runnable)</h3><ul><li>表示当前线程正在运行中。处于 <code>RUNNABLE</code> 状态的线程在 Java 虚拟机中运行，也有可能在等待 CPU 分配资源。</li><li>Java 线程的 <code>RUNNABLE</code> 状态包括了传统操作系统线程的 <code>ready</code> 和 <code>running</code> 两个状态。</li></ul><h3 id="阻塞-blocked" tabindex="-1"><a class="header-anchor" href="#阻塞-blocked" aria-hidden="true">#</a> 阻塞 (BLOCKED)</h3><p>阻塞状态。处于 <code>BLOCKED</code> 状态的线程正等待锁的释放以进入同步区。</p><h3 id="无限期等待-waiting" tabindex="-1"><a class="header-anchor" href="#无限期等待-waiting" aria-hidden="true">#</a> 无限期等待 (WAITING)</h3><p>等待状态。处于等待状态的线程变成 <code>RUNNABLE</code> 状态需要其他线程唤醒。</p><p>调用如下 3 个方法会使线程进入等待状态：</p><ul><li><code>Object.wait()</code>：使当前线程处于等待状态直到另一个线程唤醒它；</li><li><code>Thread.join()</code>：等待线程执行完毕，底层调用的是 <code>Object</code> 实例的 <code>wait</code> 方法；</li><li><code>LockSupport.park()</code>：除非获得调用许可，否则禁用当前线程进行线程调度。</li></ul><h3 id="限期等待-timed-waiting" tabindex="-1"><a class="header-anchor" href="#限期等待-timed-waiting" aria-hidden="true">#</a> 限期等待 (TIMED_WAITING)</h3><p>超时等待状态。线程等待一个具体的时间，时间到后会被自动唤醒。</p><p>调用如下方法会使线程进入超时等待状态：</p><ul><li><code>Thread.sleep(long millis)</code>：使当前线程睡眠指定时间；</li><li><code>Object.wait(long timeout)</code>：线程休眠指定时间，等待期间可以通过 notify()/notifyAll() 唤醒；</li><li><code>Thread.join(long millis)</code>：等待当前线程最多执行 millis 毫秒，如果 millis 为 0，则会一直执行；</li><li><code>LockSupport.parkNanos(long nanos)</code>：除非获得调用许可，否则禁用当前线程进行线程调度指定时间；</li><li><code>LockSupport.parkUntil(long deadline)</code>：同上，也是禁止线程进行调度指定时间。</li></ul><h3 id="终止-terminated" tabindex="-1"><a class="header-anchor" href="#终止-terminated" aria-hidden="true">#</a> 终止（TERMINATED）</h3><p>终止状态。此时线程已执行完毕。</p><h2 id="线程状态的转换" tabindex="-1"><a class="header-anchor" href="#线程状态的转换" aria-hidden="true">#</a> 线程状态的转换</h2><p>线程主要的状态转换如下：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/java/juc_thread_state_change.png" alt="线程间转换方法" loading="lazy"></p><h3 id="blocked-runnable" tabindex="-1"><a class="header-anchor" href="#blocked-runnable" aria-hidden="true">#</a> BLOCKED &lt;-&gt; RUNNABLE</h3><p>我们来启动两个线程去同时执行一个加了锁的方法，在方法中 sleep 一段时间，此时一个线程获取到锁，它的状态应该是 <code>RUNNABLE</code>；另一个线程等待锁释放，它的状态应该是 <code>BLOCKED</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BlockTestRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Thread {} get locked&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Thread {} release lock&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@SneakyThrows</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blockedTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> step <span class="token operator">=</span> <span class="token number">10L</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A&#39;s state : {} and Thread B&#39;s state : {}&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token operator">--</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中两个线程的状态转换如下（以 A 先获取到锁为例）</p><ul><li>A 的状态转换过程： <ul><li>执行 <code>a.start()</code>，状态转为 RUNNABLE；</li><li>获取到 <code>testMethod</code> 方法的锁，执行 <code>Thread.sleep()</code>，状态变为 <code>TIMED_WATING</code>；</li><li><code>sleep()</code> 时间到，状态变为 <code>RUNNABLE</code>（很短的时间，因为马上就终止了）；</li><li>执行结束，线程变为终止状态 <code>TERMINATED</code>。</li></ul></li><li>B 的状态转换过程： <ul><li>执行 <code>a.start()</code>，状态转为 RUNNABLE；</li><li>未获取到 <code>testMethod</code> 方法的锁，等待 A 释放锁，状态变为 <code>BLOCKED</code>;</li><li>A 释放锁，B 执行 <code>testMethod</code> 方法的 <code>Thread.sleep()</code>，状态变为 <code>TIMED_WATING</code>；</li><li><code>sleep()</code> 时间到，状态变为 <code>RUNNABLE</code>（很短的时间，因为马上就终止了）；</li><li>执行结束，线程变为终止状态 <code>TERMINATED</code>。</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">思考</p><p>在 Java 中，如果主线程比子线程先结束，主线程结束后，子线程会怎么样？</p></div><h3 id="waiting-runnable" tabindex="-1"><a class="header-anchor" href="#waiting-runnable" aria-hidden="true">#</a> WAITING &lt;-&gt; RUNNABLE</h3><p>根据转换图我们知道有 3 个方法可以使线程从 <code>RUNNABLE</code> 状态转为 <code>WAITING</code> 状态。我们主要介绍下 <code>Object.wait()</code> 和 <code>Thread.join()</code>。</p><p><strong>Object.wait()</strong></p><blockquote><p>调用 <code>wait()</code> 方法前线程必须持有对象的锁。</p><p>线程调用 <code>wait()</code> 方法时，会释放当前的锁，直到有其他线程调用 <code>notify()/notifyAll()</code> 方法唤醒等待锁的线程。</p><p>需要注意的是，其他线程调用 <code>notify()</code> 方法只会唤醒单个等待锁的线程，如有有多个线程都在等待这个锁的话不一定会唤醒到之前调用 <code>wait()</code> 方法的线程。</p><p>同样，调用 <code>notifyAll()</code> 方法唤醒所有等待锁的线程之后，也不一定会马上把时间片分给刚才放弃锁的那个线程，具体要看系统的调度。</p></blockquote><p><strong>Thread.join()</strong></p><blockquote><p>调用 <code>join()</code> 方法，会一直等待这个线程执行完毕（转换为 TERMINATED 状态）。</p></blockquote><p>在 上述案例的基础上，我们增加对 waiting 状态的测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@SneakyThrows</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">waitingTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行 Thread.join() 方法后，会等待线程 A 全部执行完毕，即状态变为终止</span>
    a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> step <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A&#39;s state : {} and Thread B&#39;s state : {}&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token operator">--</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 A 线程启动并调用 <code>a.join()</code> 后，主线程会等待线程 A 全部执行完毕，即线程 A 的状态变为 <code>TERMINATED</code> 后，才会执行后续的代码。</p><h3 id="timed-waiting-runnable" tabindex="-1"><a class="header-anchor" href="#timed-waiting-runnable" aria-hidden="true">#</a> TIMED_WAITING &lt;-&gt; RUNNABLE</h3><p>TIMED_WAITING 与 WAITING 状态类似，只是 TIMED_WAITING 状态等待的时间是指定的。</p><p><strong>Thread.sleep(long)</strong></p><blockquote><p>使当前线程睡眠指定时间。需要注意这里的“睡眠”只是暂时使线程停止执行，并不会释放锁。时间到后，线程会重新进入 RUNNABLE 状态。</p></blockquote><p><strong>Object.wait(long)</strong></p><blockquote><p><code>wait(long)</code> 方法使线程进入 <code>TIMED_WAITING</code> 状态。这里的 <code>wait(long)</code> 方法与无参方法 <code>wait()</code> 相同的地方是，都可以通过其他线程调用 <code>notify()</code> 或 <code>notifyAll()</code> 方法来唤醒。</p><p>不同的地方是，有参方法 wait(long) 就算其他线程不来唤醒它，经过指定时间 long 之后它会自动唤醒，拥有去争夺锁的资格。</p></blockquote><p><strong>Thread.join(long)</strong></p><blockquote><p>join(long) 使当前线程执行指定时间，并且使线程进入 TIMED_WAITING 状态。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">timedWaitingTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BlockTestRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 执行 Thread.join(long) 方法后，会等待线程 A 执行指定的时间</span>
        a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> step <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A&#39;s state : {} and Thread B&#39;s state : {}&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token operator">--</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行 <code>a.join(500L)</code> 后，线程 A 会先执行 500ms，然后线程 B 才会执行 <code>start()</code>。</p><h3 id="线程中断" tabindex="-1"><a class="header-anchor" href="#线程中断" aria-hidden="true">#</a> 线程中断</h3><hr><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,58),d={href:"https://pdai.tech/md/java/thread/java-thread-x-thread-basic.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://tobebetterjavaer.com/thread/thread-state-and-method.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://blog.csdn.net/qq_36908872/article/details/127074466",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[s("Java 全栈知识体系【Java 并发 - 线程基础】"),t(a)])]),n("li",null,[n("a",k,[s("Java 线程的 6 种状态及切换 (透彻讲解)"),t(a)])]),n("li",null,[n("a",r,[s("java 主线程等待所有子线程执行完毕再执行"),t(a)])])])])}const g=e(i,[["render",v],["__file","thread-state.html.vue"]]);export{g as default};
