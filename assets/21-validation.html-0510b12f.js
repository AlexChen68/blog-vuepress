const e=JSON.parse(`{"key":"v-066a052b","path":"/spring/spring/21-validation.html","title":"Spring 验证, 数据绑定和类型转换","lang":"zh-CN","frontmatter":{"title":"Spring 验证, 数据绑定和类型转换","article":true,"date":"2022-10-16T00:00:00.000Z","tag":"Validation","category":"Spring","isOriginal":true,"description":"验证, 数据绑定和类型转换","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/spring/spring/21-validation.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"Spring 验证, 数据绑定和类型转换"}],["meta",{"property":"og:description","content":"验证, 数据绑定和类型转换"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-01T09:07:24.000Z"}],["meta",{"property":"article:tag","content":"Validation"}],["meta",{"property":"article:published_time","content":"2022-10-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-01T09:07:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 验证, 数据绑定和类型转换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-01T09:07:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据验证","slug":"数据验证","link":"#数据验证","children":[]},{"level":2,"title":"数据绑定","slug":"数据绑定","link":"#数据绑定","children":[{"level":3,"title":"BeanWrapper","slug":"beanwrapper","link":"#beanwrapper","children":[]},{"level":3,"title":"PropertyEditor 简介","slug":"propertyeditor-简介","link":"#propertyeditor-简介","children":[]},{"level":3,"title":"自定义 PropertyEditor","slug":"自定义-propertyeditor","link":"#自定义-propertyeditor","children":[]},{"level":3,"title":"注册 PropertyEditor","slug":"注册-propertyeditor","link":"#注册-propertyeditor","children":[]}]},{"level":2,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1680340044000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":5.34,"words":1603},"filePathRelative":"spring/spring/21-validation.md","localizedDate":"2022年10月16日","excerpt":"<h2> 数据验证</h2>\\n<p>Spring 提供了 <code>Validator</code> 接口用来进行对象的数据验证。<code>Validator</code> 接口在进行数据验证的时候会要求传入一个 <code>Errors</code> 对象，当有错误产生时会将错误信息放入该对象。</p>\\n<p><code>Validator</code> 接口：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Validator</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">supports</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">&gt;</span></span> clazz<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">validate</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> target<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Errors</span> errors<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{e as data};
