import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.bf9fbf22.js";const b=JSON.parse('{"title":"Spring 资源 (Resources)","description":"","frontmatter":{"title":"Spring 资源 (Resources)","article":true,"date":"2022-10-09T00:00:00.000Z","tag":"Spring"},"headers":[],"relativePath":"spring/spring/2.5-resources.md","filePath":"spring/spring/2.5-resources.md"}'),l={name:"spring/spring/2.5-resources.md"},p=e(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>遗憾的是，Java 的标准 <code>java.net.URL</code> 类和各种 URL 前缀的标准处理程序不足以完全访问底层资源。例如，没有标准化的 <code>URL</code> 实现可用于访问需要从类路径或相对于 <code>ServletContext</code> 获取的资源。虽然可以为专用 <code>URL</code> 前缀注册新的处理程序 (类似于 <code>http:</code>) 这样的前缀的现有处理程序，但这通常非常复杂，并且 <code>URL</code> 接口仍然缺少一些理想的功能，例如检查当前资源是否存在的方法。</p><h2 id="resource-接口" tabindex="-1"><code>Resource</code> 接口 <a class="header-anchor" href="#resource-接口" aria-label="Permalink to &quot;\`Resource\` 接口&quot;">​</a></h2><p>位于 <code>org.springframework.core.io.</code> 包中的 Spring <code>Resource</code> 接口的目标是成为一个更强大的接口，用于抽象对底层资源的访问。</p><p>以下清单显示了 <code>Resource</code> 接口定义，见 <a href="https://docs.spring.io/spring-framework/docs/5.3.21/javadoc-api/org/springframework/core/io/Resource.html" target="_blank" rel="noreferrer"><code>Resource</code></a> Javadoc 了解更多详细信息：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Resource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">InputStreamSource</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">exists</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isReadable</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isOpen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isFile</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    URL </span><span style="color:#B392F0;">getURL</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    URI </span><span style="color:#B392F0;">getURI</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    File </span><span style="color:#B392F0;">getFile</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ReadableByteChannel </span><span style="color:#B392F0;">readableChannel</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">contentLength</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lastModified</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Resource </span><span style="color:#B392F0;">createRelative</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">relativePath</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    String </span><span style="color:#B392F0;">getFilename</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    String </span><span style="color:#B392F0;">getDescription</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">InputStreamSource</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    InputStream </span><span style="color:#B392F0;">getInputStream</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Resource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">InputStreamSource</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">exists</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isReadable</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isOpen</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isFile</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    URL </span><span style="color:#6F42C1;">getURL</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    URI </span><span style="color:#6F42C1;">getURI</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    File </span><span style="color:#6F42C1;">getFile</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ReadableByteChannel </span><span style="color:#6F42C1;">readableChannel</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">contentLength</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lastModified</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Resource </span><span style="color:#6F42C1;">createRelative</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">relativePath</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    String </span><span style="color:#6F42C1;">getFilename</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    String </span><span style="color:#6F42C1;">getDescription</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">InputStreamSource</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    InputStream </span><span style="color:#6F42C1;">getInputStream</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>Resource 接口中一些最重要的方法是：</p><ul><li>getInputStream(): 用于定位和打开当前资源，返回当前资源的 InputStream，预计每一次调用都会返回一个新的 InputStream。因此调用者必须自行关闭当前的输出流。</li><li>exists(): 返回 boolean 值，表示当前资源是否存在。</li><li>isOpen():返回 boolean 值，表示当前资源是否有已打开的输入流。如果为 true，那么 InputStream 不能被多次读取，只能在一次读取后即关闭以防止内存泄漏。除了 InputStreamResource 外，其他常用 Resource 实现都会返回 false。</li><li>getDescription(): 返回当前资源的描述，当处理资源出错时，资源的描述会用于输出错误的信息。一般来说，资源的描述是一个完全限定的文件名称，或者是当前资源的真实 URL。</li></ul><h2 id="内置-resource-实现" tabindex="-1">内置 Resource 实现 <a class="header-anchor" href="#内置-resource-实现" aria-label="Permalink to &quot;内置 Resource 实现&quot;">​</a></h2><ul><li>urlresource</li><li>classpathresource</li><li>filesystemresource</li><li>PathResource</li><li>servletcontextresource</li><li>inputstreamresource</li><li>bytearrayresource</li></ul><h2 id="resourceloader" tabindex="-1">ResourceLoader <a class="header-anchor" href="#resourceloader" aria-label="Permalink to &quot;ResourceLoader&quot;">​</a></h2><p>ResourceLoader 接口用于加载 Resource 对象，换句话说，就是当一个对象需要获取 Resource 实例时，可以选择实现 ResourceLoader 接口，以下清单显示了 ResourceLoader 接口定义：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResourceLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Resource </span><span style="color:#B392F0;">getResource</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ClassLoader </span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResourceLoader</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Resource </span><span style="color:#6F42C1;">getResource</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">location</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ClassLoader </span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>所有 <code>ApplicationContext</code> 都实现 <code>ResourceLoader</code> 接口。因此，可以使用所有 <code>ApplicationContext</code> 来获取 Resource 实例。</p><p>不同的 ApplicationContext 返回不同的 Resource 实现，例如：针对 ClassPathXmlApplicationContext，<code>getResource(&quot;/somepath&quot;)</code>返回 ClassPathResource 对象；</p><p>可以通过指定特殊的 <code>classpath:</code> 前缀来强制使用 ClassPathResource，其他的类似。</p><h2 id="resourcepatternresolver-接口" tabindex="-1">ResourcePatternResolver 接口 <a class="header-anchor" href="#resourcepatternresolver-接口" aria-label="Permalink to &quot;ResourcePatternResolver 接口&quot;">​</a></h2><p>ResourcePatternResolver 接口是对 ResourceLoader 接口的扩展。它定义了一种解决位置模式的策略 (例如，Ant 样式的路径模式) 转换为 Resource 对象。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResourcePatternResolver</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResourceLoader</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    String CLASSPATH_ALL_URL_PREFIX </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;classpath*:&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">Resource</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getResources</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">locationPattern</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResourcePatternResolver</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResourceLoader</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    String CLASSPATH_ALL_URL_PREFIX </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;classpath*:&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">Resource</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getResources</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">locationPattern</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="resourceloaderaware-接口" tabindex="-1">ResourceLoaderAware 接口 <a class="header-anchor" href="#resourceloaderaware-接口" aria-label="Permalink to &quot;ResourceLoaderAware 接口&quot;">​</a></h2><p>ResourceLoaderAware 是一个特殊的标识接口，用来提供 ResourceLoader 引用的对象.。以下清单显示了 ResourceLoaderAware 接口的定义：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResourceLoaderAware</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setResourceLoader</span><span style="color:#E1E4E8;">(ResourceLoader </span><span style="color:#FFAB70;">resourceLoader</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResourceLoaderAware</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setResourceLoader</span><span style="color:#24292E;">(ResourceLoader </span><span style="color:#E36209;">resourceLoader</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>实现了该接口的 Bean，可以通过 <code>setResourceLoader</code> 方法获取当前的 <code>ApplicationContext，因为</code> <code>ApplicationContext</code> 都实现了 <code>ResourceLoader</code> 接口。</p><p>实现 <code>ApplicationContextAware</code> 接口同样可以获取 ApplicationContext，从 ApplicationContext 获取 ResourceLoader，但是推荐使用专用接口。此外也可以通过自动装配获取。</p>`,24),o=[p];function r(c,t,i,E,y,u){return n(),a("div",null,o)}const h=s(l,[["render",r]]);export{b as __pageData,h as default};
