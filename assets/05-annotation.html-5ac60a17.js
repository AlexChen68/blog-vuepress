const e=JSON.parse(`{"key":"v-32ac57fb","path":"/spring/spring/05-annotation.html","title":"Spring 核心注解","lang":"zh-CN","frontmatter":{"title":"Spring 核心注解","article":true,"date":"2022-10-12T00:00:00.000Z","category":"Spring","isOriginal":true,"description":"Spring 核心注解","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/spring/spring/05-annotation.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"Spring 核心注解"}],["meta",{"property":"og:description","content":"Spring 核心注解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-01T09:07:24.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2022-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-01T09:07:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 核心注解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-01T09:07:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlexChen\\",\\"url\\":\\"https://github.com/AlexChen68\\"}]}"]]},"headers":[{"level":2,"title":"Bean 配置注解","slug":"bean-配置注解","link":"#bean-配置注解","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1680340044000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"spring/spring/05-annotation.md","localizedDate":"2022年10月12日","excerpt":"<h2> Bean 配置注解</h2>\\n<ol>\\n<li>@ComponentScan</li>\\n</ol>\\n<blockquote>\\n<p>@ComponentScan 注解用于配置 Spring 需要扫描的被组件注解注释的类所在的包。</p>\\n<p>可以通过配置其 basePackages 属性或者 value 属性来配置需要扫描的包路径。value 属性是 basePackages 的别名。</p>\\n</blockquote>\\n<ol start=\\"2\\">\\n<li>@Bean</li>\\n</ol>\\n<blockquote>\\n<p>@Bean 注解主要的作用是告知 Spring，被此注解所标注的类将需要纳入到 Bean 管理工厂中。</p>\\n<p><code>initMethod</code> 和 <code>destroyMethod</code> 属性用来配置初始化和销毁的回调方法。</p>\\n</blockquote>"}`);export{e as data};
