import{_ as t,W as p,X as o,$ as c,Y as n,Z as a,a1 as e,a0 as i,G as l}from"./framework-c6508e04.js";const u={},r=n("p",null,"设计模式之观察者模式",-1),d=i(`<h2 id="观察者模式-observe-pattern" tabindex="-1"><a class="header-anchor" href="#观察者模式-observe-pattern" aria-hidden="true">#</a> 观察者模式（Observe Pattern）</h2><p>定义对象之间的一对多依赖，当一个对象状态改变时，它的所有依赖都会收到通知并且自动更新状态。</p><p>主题 (Subject) 是被观察的对象，而其所有依赖者 (Observer) 称为观察者。</p><blockquote><p>观察者模式 (Observer Pattern)：定义对象之间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式的别名包括发布 - 订阅（Publish/Subscribe）模式、模型 - 视图（Model/View）模式、源 - 监听器（Source/Listener）模式或从属者（Dependents）模式。</p></blockquote><p>观察者模式是一种对象行为型模式。</p><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图" aria-hidden="true">#</a> 类图</h2><p><img src="https://cdn.staticaly.com/gh/AlexChen68/images@master/blog/advance/observer_pattern.png" alt="观察者模式类图" loading="lazy"></p><p>在观察者模式结构图中包含如下几个角色：</p><ul><li>Subject（目标）：目标又称为主题，它是指被观察的对象。在目标中定义了一个观察者集合，一个观察目标可以接受任意数量的观察者来观察，它提供一系列方法来增加和删除观察者对象，同时它定义了通知方法 notify()。目标类可以是接口，也可以是抽象类或具体类。</li><li>ConcreteSubject（具体目标）：具体目标是目标类的子类，通常它包含有经常发生改变的数据，当它的状态发生改变时，向它的各个观察者发出通知；同时它还实现了在目标类中定义的抽象业务逻辑方法（如果有的话）。如果无须扩展目标类，则具体目标类可以省略。</li><li>Observer（观察者）：观察者将对观察目标的改变做出反应，观察者一般定义为接口，该接口声明了更新数据的方法 update()，因此又称为抽象观察者。</li><li>ConcreteObserver（具体观察者）：在具体观察者中维护一个指向具体目标对象的引用，它存储具体观察者的有关状态，这些状态需要和具体目标的状态保持一致；它实现了在抽象观察者 Observer 中定义的 update() 方法。通常在实现时，可以调用具体目标类的 attach() 方法将自己添加到目标类的集合中或通过 detach() 方法将自己从目标类的集合中删除。</li></ul><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>实现一个天气数据布告板，它会在天气信息发生改变时更新其内容，布告板有多个，并且在将来会继续增加。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">resisterObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temp<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WeatherData</code> 维护了一个监听其动态的观察者列表</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observers<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resisterObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> observers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            observers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Observer</span> o <span class="token operator">:</span> observers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            o<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> humidity<span class="token punctuation">,</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>StatisticsDisplay</code> 是一个具体的观察者，它在创建时，需要指定观察对象，并向观察对象注册它自己</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StatisticsDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">StatisticsDisplay</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> weatherData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        weatherData<span class="token punctuation">.</span><span class="token function">resisterObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temp<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;StatisticsDisplay.update: &quot;</span> <span class="token operator">+</span> temp <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> humidity <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端调用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StatisticsDisplay</span> statisticsDisplay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatisticsDisplay</span><span class="token punctuation">(</span>weatherData<span class="token punctuation">)</span><span class="token punctuation">;</span>

        weatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">StatisticsDisplay</span><span class="token punctuation">.</span>update<span class="token operator">:</span> <span class="token number">23.0</span> <span class="token number">35.0</span> <span class="token number">1.0</span>
</code></pre></div><h2 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h2><ul><li><code>java.util.Observer</code></li><li><code>Spring</code> 框架的事件驱动模型</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>观察者模式是一种使用频率非常高的设计模式，无论是移动应用、Web 应用或者桌面应用，观察者模式几乎无处不在，它为实现对象之间的联动提供了一套完整的解决方案，凡是涉及到一对一或者一对多的对象交互场景都可以使用观察者模式。观察者模式广泛应用于各种编程语言的 GUI 事件处理的实现，在基于事件的 XML 解析技术（如 SAX2）以及 Web 事件处理中也都使用了观察者模式。</p><h3 id="主要优点" tabindex="-1"><a class="header-anchor" href="#主要优点" aria-hidden="true">#</a> 主要优点</h3><p>观察者模式的主要优点如下：</p><ul><li>观察者模式可以实现表示层和数据逻辑层的分离，定义了稳定的消息更新传递机制，并抽象了更新接口，使得可以有各种各样不同的表示层充当具体观察者角色。</li><li>观察者模式在观察目标和观察者之间建立一个抽象的耦合。观察目标只需要维持一个抽象观察者的集合，无须了解其具体观察者。由于观察目标和观察者没有紧密地耦合在一起，因此它们可以属于不同的抽象化层次。</li><li>观察者模式支持广播通信，观察目标会向所有已注册的观察者对象发送通知，简化了一对多系统设计的难度。</li><li>观察者模式满足“开闭原则”的要求，增加新的具体观察者无须修改原有系统代码，在具体观察者与观察目标之间不存在关联关系的情况下，增加新的观察目标也很方便。</li></ul><h3 id="主要缺点" tabindex="-1"><a class="header-anchor" href="#主要缺点" aria-hidden="true">#</a> 主要缺点</h3><p>观察者模式的主要缺点如下：</p><ul><li>如果一个观察目标对象有很多直接和间接观察者，将所有的观察者都通知到会花费很多时间。</li><li>如果在观察者和观察目标之间存在循环依赖，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。</li><li>观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。</li></ul><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><p>在以下情况下可以考虑使用观察者模式：</p><ul><li>一个抽象模型有两个方面，其中一个方面依赖于另一个方面，将这两个方面封装在独立的对象中使它们可以各自独立地改变和复用。</li><li>一个对象的改变将导致一个或多个其他对象也发生改变，而并不知道具体有多少对象将发生改变，也不知道这些对象是谁。</li><li>需要在系统中创建一个触发链，A 对象的行为将影响 B 对象，B 对象的行为将影响 C 对象……，可以使用观察者模式创建一种链式触发机制。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,34),k={href:"https://pdai.tech/md/dev-spec/pattern/19_observer.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/lovelion/article/details/7720382",target:"_blank",rel:"noopener noreferrer"};function b(m,h){const s=l("ExternalLinkIcon");return p(),o("div",null,[r,c(" more "),d,n("ul",null,[n("li",null,[n("a",k,[a("行为型 - 观察者 (Observer)"),e(s)])]),n("li",null,[n("a",v,[a("对象间的联动——观察者模式"),e(s)])])])])}const w=t(u,[["render",b],["__file","05-observer.html.vue"]]);export{w as default};
