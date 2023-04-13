import{_ as t,W as l,X as o,Y as s,a0 as a,Z as e,a1 as c,C as p}from"./framework-d3200c61.js";const i={},r=c(`<h2 id="java-反射机制简介" tabindex="-1"><a class="header-anchor" href="#java-反射机制简介" aria-hidden="true">#</a> Java 反射机制简介</h2><p>反射 (Reflection)，是指 Java 程序具有在<em>运行期</em><strong>分析类以及修改其本身状态或行为的能力</strong>。 通俗点说就是：通过反射我们可以动态地获取一个类的所有属性和方法，还可以操作这些方法和属性。</p><h2 id="类加载机制" tabindex="-1"><a class="header-anchor" href="#类加载机制" aria-hidden="true">#</a> 类加载机制</h2><p>一个类从被加载到虚拟机内存中开始，到从内存中卸载，整个生命周期需要经过七个阶段：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading），其中验证、准备、解析三个部分统称为连接（Linking）。</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/java/类加载过程.jepg" alt="类加载过程" loading="lazy"></p><p>更具体的，可以参考 <a href="../jvm/load">JVM 类加载过程</a></p><h2 id="反射相关的类" tabindex="-1"><a class="header-anchor" href="#反射相关的类" aria-hidden="true">#</a> 反射相关的类</h2><ul><li>Class 类</li><li>Field 类</li><li>Method 类</li><li>Constructor 类</li></ul><h3 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class 类</h3><p>Class 类，Class 类也是一个实实在在的类，存在于 JDK 的 java.lang 包中。</p><p>Class 类的实例表示 java 应用运行时的类 (class ans enum) 或接口 (interface and annotation)。</p><p>Class 类可以通过如下三种方式获得：</p><ol><li>类名.class</li><li>实例.getClass()</li><li>Class.forName(&quot;类名&quot;)</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 方式一</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ReflectDemo</span><span class="token punctuation">&gt;</span></span> clazz1 <span class="token operator">=</span> <span class="token class-name">ReflectDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

<span class="token comment">// 方式二</span>
<span class="token class-name">ReflectDemo</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReflectDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">ReflectDemo</span><span class="token punctuation">&gt;</span></span> clazz2 <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式三</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;tech.alexchen.java.basic.reflection.ReflectDemo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>数组</strong>同样也被映射为 class 对象的一个类，所有具有相同元素类型和维数的数组都共享该 Class 对象。</p><p><strong>基本类型</strong> boolean，byte，char，short，int，long，float，double 和关键字 void 同样表现为 class 对象。</p></div><p>Class 类定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span>
                              <span class="token class-name">GenericDeclaration</span><span class="token punctuation">,</span>
                              <span class="token class-name">Type</span><span class="token punctuation">,</span>
                              <span class="token class-name">AnnotatedElement</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">ANNOTATION</span><span class="token operator">=</span> <span class="token number">0x00002000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">ENUM</span>      <span class="token operator">=</span> <span class="token number">0x00004000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SYNTHETIC</span> <span class="token operator">=</span> <span class="token number">0x00001000</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">registerNatives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token function">registerNatives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * Private constructor. Only the Java Virtual Machine creates Class objects.   //私有构造器，只有 JVM 才能调用创建 Class 对象
     * This constructor is not used and prevents the default constructor being
     * generated.
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Class</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Initialize final field for classLoader.  The initialization value of non-null</span>
        <span class="token comment">// prevents future JIT optimizations from assuming this final field is null.</span>
        classLoader <span class="token operator">=</span> loader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这我们也就可以得出以下几点信息：</p><ul><li>Class 类也是类的一种，与 class 关键字是不一样的。</li><li>手动编写的类被编译后会产生一个 Class 对象，其表示的是创建的类的类型信息，而且这个 Class 对象保存在同名.class 的文件中 (字节码文件)</li><li>每个通过关键字 class 标识的类，在内存中有且只有一个与之对应的 Class 对象来描述其类型信息，无论创建多少个实例对象，其依据的都是用一个 Class 对象。</li><li>Class 类只存私有构造函数，因此对应 Class 对象只能有 JVM 创建和加载</li><li>Class 类的对象作用是运行时提供或获得某个对象的类型信息，这点对于反射技术很重要 (关于反射稍后分析)。</li></ul><h3 id="constructor-类" tabindex="-1"><a class="header-anchor" href="#constructor-类" aria-hidden="true">#</a> Constructor 类</h3><p>用 new 的形式创建一个类的对象实际上是在调用它的构造方法，反射机制中可以通过 Constructor 对象来创建一个类的对象。</p><p>Constructor 对象可以通过 Class 对象的 <code>getConstructor(Class&lt;?&gt;... parameterTypes)</code> 的相关方法获得，需要注意的是，一个类可能有多个构造方法，那么需要在调用 getConstructor 方法的时候，传入与构造方法相匹配的参数的 Class 对象，才能获得对应参数的构造方法；如果不传入参数，那么获取的自然就是无参方法了。</p><p>常用的方法如下：</p><ul><li><code>Constructor&lt;?&gt;[] getConstructors()</code>: 获取访问权限是 public 的构造方法数组</li><li><code>Constructor&lt;?&gt;] getDeclaredConstructors()</code>: 获取全部的构造方法数组</li><li><code>Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</code>: 获取与传入参数类型相匹配的、且访问权限是 public 的构造方法</li><li><code>Constructor&lt;T&gt; getDeclaredConstrutor(Class&lt;?&gt;... parameterTypes)</code>: 获取与传入参数类型相匹配的构造方法</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">People</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> <span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token comment">// 获取无参构造方法</span>
<span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">People</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>通过 Constructor 对象，我们可以直接通过其 <code>newInstance()</code> 方法创建实例；如果构造方法是私有的，还可以通过 <code>setAccessible(true)</code> 改变其可访问范围，然后再创建实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// People.class</span>
<span class="token comment">// 设置无参构造函数为私有的</span>
<span class="token keyword">private</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 构造实例</span>
constructor<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 设置允许访问</span>
<span class="token class-name">People</span> people <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="field-类" tabindex="-1"><a class="header-anchor" href="#field-类" aria-hidden="true">#</a> Field 类</h3><p>Field 提供有关类或接口的单个字段的信息，以及对它的动态访问权限。反射的字段可能是一个类（静态）字段或实例字段。</p><p>Filed 可以通过 Class 的 <code>getFileds</code> 相关方法获得，包括：</p><ul><li><code>getFields()</code>: 获取所有被 public 修饰的属性</li><li><code>getField(String name)</code>: 获取指定名称的、被 public 修饰的属性</li><li><code>getDeclaredFields()</code>: 获取所有定义的属性</li><li><code>getDeclaredField(String name)</code>: 获取指定名称的属性</li></ul><p>通过 Field 对象，我们获取属性的信息，也可以对属性进行赋值，但是需要先获取到实例对象，并指定为哪个具体的实例对象赋值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取无参构造函数（这里使用无参构造函数为共有了，符合一般使用习惯）</span>
<span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">People</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">People</span> people <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取指定名称的属性</span>
<span class="token class-name">Field</span> nameField <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// name 字段是私有的（按照规范，通常属性都是私有的），需要先设置为允许访问</span>
nameField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
nameField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="method-类" tabindex="-1"><a class="header-anchor" href="#method-类" aria-hidden="true">#</a> Method 类</h3><p>Method 提供关于类或接口上单独某个方法（以及如何访问该方法）的信息，所反映的方法可能是类方法或实例方法（包括抽象方法）。</p><p>同样，Class 提供了获取 Method 的方法：</p><ul><li><code>getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes)</code>: 返回一个指定参数的 Method 对象，该对象反映此 Class 对象所表示的类或接口的指定已声明方法。</li><li><code>getDeclaredMethods()</code>: 返回 Method 对象的一个数组，这些对象反映此 Class 对象表示的类或接口声明的所有方法，包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法。</li><li><code>getMethod(String name, Class&lt;?&gt;... parameterTypes)</code>: 返回一个 Method 对象，它反映此 Class 对象所表示的类或接口的指定公共成员方法。</li><li><code>getMethods()</code>: 返回一个包含某些 Method 对象的数组，这些对象反映此 Class 对象所表示的类或接口（包括那些由该类或接口声明的以及从超类和超接口继承的那些的类或接口）的公共 member 方法。</li></ul><p>再获取到 Method 对象后，可以使用 Method 类的 <code>invoke(Object obj, Object... args)</code> 方法来动态调用类的方法，第一个参数代表调用的对象，第二个参数传递的调用方法的参数。</p><h3 id="反射机制执行流程" tabindex="-1"><a class="header-anchor" href="#反射机制执行流程" aria-hidden="true">#</a> 反射机制执行流程</h3><p><img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/java/反射机制执行流程.png" alt="反射机制执行流程" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>最后，用几句话总结反射的实现原理：</p><ol><li>反射类及反射方法的获取，都是通过从列表中搜寻查找匹配的方法，所以查找性能会随类的大小方法多少而变化；</li><li>每个类都会有一个与之对应的 Class 实例，从而每个类都可以获取 method 反射方法，并作用到其他实例身上；</li><li>反射也是考虑了线程安全的，放心使用；</li><li>反射使用软引用 relectionData 缓存 class 信息，避免每次重新从 jvm 获取带来的开销；</li><li>反射调用多次生成新代理 Accessor, 而通过字节码生存的则考虑了卸载功能，所以会使用独立的类加载器；</li><li>当找到需要的方法，都会 copy 一份出来，而不是使用原来的实例，从而保证数据隔离；</li><li>调度反射方法，最终是由 jvm 执行 invoke0() 执行；</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,44),u={href:"https://pdai.tech/md/java/basic/java-basic-x-reflection.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.zhihu.com/question/585913105/answer/2948150246",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const n=p("ExternalLinkIcon");return l(),o("div",null,[r,s("ul",null,[s("li",null,[s("a",u,[a("Java 基础 - 反射机制详解"),e(n)])]),s("li",null,[s("a",d,[a("Java 反射机制是什么？"),e(n)])])])])}const g=t(i,[["render",k],["__file","reflection.html.vue"]]);export{g as default};
