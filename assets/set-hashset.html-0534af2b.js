const e=JSON.parse(`{"key":"v-62510513","path":"/md/java/collection/set-hashset.html","title":"Set - HashSet 源码分析","lang":"zh-CN","frontmatter":{"title":"Set - HashSet 源码分析","date":"2022-09-30T00:00:00.000Z","tag":["Collection"],"category":["Java Collection"],"order":3,"description":"概述 HashSet 是不可重复集合 Set 接口的子类， 它存取无序，不可以存放重复的元素，不可以用下标对元素进行操作。 HashSet 是基于 HashMap 实现的，底层采用 HashMap 来保存元素，利用了 HashMap key 不可重复的特性，而值使用一个固定的 Object 对象填充。 类图","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/blog/md/java/collection/set-hashset.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"Set - HashSet 源码分析"}],["meta",{"property":"og:description","content":"概述 HashSet 是不可重复集合 Set 接口的子类， 它存取无序，不可以存放重复的元素，不可以用下标对元素进行操作。 HashSet 是基于 HashMap 实现的，底层采用 HashMap 来保存元素，利用了 HashMap key 不可重复的特性，而值使用一个固定的 Object 对象填充。 类图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-27T08:31:17.000Z"}],["meta",{"property":"article:tag","content":"Collection"}],["meta",{"property":"article:published_time","content":"2022-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-27T08:31:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Set - HashSet 源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-27T08:31:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"类图","slug":"类图","link":"#类图","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"添加元素","slug":"添加元素","link":"#添加元素","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]},{"level":3,"title":"查询元素","slug":"查询元素","link":"#查询元素","children":[]},{"level":3,"title":"克隆","slug":"克隆","link":"#克隆","children":[]},{"level":3,"title":"序列化","slug":"序列化","link":"#序列化","children":[]},{"level":3,"title":"反序列化","slug":"反序列化","link":"#反序列化","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1677486677000,"updatedTime":1677486677000,"contributors":[{"name":"AlexChen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":2.91,"words":874},"filePathRelative":"md/java/collection/set-hashset.md","localizedDate":"2022年9月30日","excerpt":"<h2> 概述</h2>\\n<p><code>HashSet</code> 是不可重复集合 <code>Set</code> 接口的子类， 它存取无序，不可以存放重复的元素，不可以用下标对元素进行操作。</p>\\n<p><code>HashSet</code> 是基于 <code>HashMap</code> 实现的，底层采用 <code>HashMap</code> 来保存元素，利用了 <code>HashMap</code> <strong>key</strong> 不可重复的特性，而值使用一个固定的 Object 对象填充。</p>\\n<h2> 类图</h2>\\n<p><img src=\\"https://cdn.staticaly.com/gh/alexchen68/images@master/blog/java/hashset_class.png\\" alt=\\"HashSet类图\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{e as data};
