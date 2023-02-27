const e=JSON.parse(`{"key":"v-edf9b0ba","path":"/md/java/collection/set-treeset.html","title":"Set - TreeSet 源码分析","lang":"zh-CN","frontmatter":{"title":"Set - TreeSet 源码分析","date":"2022-09-30T00:00:00.000Z","tag":["Collection"],"category":["Java Collection"],"order":5,"description":"概述 TreeSet 是基于 TreeMap 的 Set 集合实现类，利用了 TreeMap 的键不允许重复、无序的特点，将元素存储在 TreeMap 的键中，而值使用固定的 Object 对象填充。 类图","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/blog/md/java/collection/set-treeset.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"Set - TreeSet 源码分析"}],["meta",{"property":"og:description","content":"概述 TreeSet 是基于 TreeMap 的 Set 集合实现类，利用了 TreeMap 的键不允许重复、无序的特点，将元素存储在 TreeMap 的键中，而值使用固定的 Object 对象填充。 类图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-27T08:31:17.000Z"}],["meta",{"property":"article:tag","content":"Collection"}],["meta",{"property":"article:published_time","content":"2022-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-27T08:31:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Set - TreeSet 源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-27T08:31:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"类图","slug":"类图","link":"#类图","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":3,"title":"添加元素","slug":"添加元素","link":"#添加元素","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]},{"level":3,"title":"查找元素","slug":"查找元素","link":"#查找元素","children":[]}]},{"level":2,"title":"查找接近的元素","slug":"查找接近的元素","link":"#查找接近的元素","children":[{"level":3,"title":"小于或等于给定元素的最大元素","slug":"小于或等于给定元素的最大元素","link":"#小于或等于给定元素的最大元素","children":[]},{"level":3,"title":"严格大于给定元素的最小元素","slug":"严格大于给定元素的最小元素","link":"#严格大于给定元素的最小元素","children":[]},{"level":3,"title":"大于或等于给定元素的最小元素","slug":"大于或等于给定元素的最小元素","link":"#大于或等于给定元素的最小元素","children":[]}]},{"level":2,"title":"获取首位元素","slug":"获取首位元素","link":"#获取首位元素","children":[{"level":3,"title":"获取首个元素","slug":"获取首个元素","link":"#获取首个元素","children":[]},{"level":3,"title":"获取首个元素并移除","slug":"获取首个元素并移除","link":"#获取首个元素并移除","children":[]},{"level":3,"title":"获取末尾元素","slug":"获取末尾元素","link":"#获取末尾元素","children":[]},{"level":3,"title":"获取末尾元素并移除","slug":"获取末尾元素并移除","link":"#获取末尾元素并移除","children":[]}]},{"level":2,"title":"获取一定范围的子集合","slug":"获取一定范围的子集合","link":"#获取一定范围的子集合","children":[{"level":3,"title":"获取小于给定元素的子集合","slug":"获取小于给定元素的子集合","link":"#获取小于给定元素的子集合","children":[]},{"level":3,"title":"获取中间范围的子集合","slug":"获取中间范围的子集合","link":"#获取中间范围的子集合","children":[]},{"level":3,"title":"获取大于给定元素的子集合","slug":"获取大于给定元素的子集合","link":"#获取大于给定元素的子集合","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1677486677000,"updatedTime":1677486677000,"contributors":[{"name":"AlexChen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"md/java/collection/set-treeset.md","localizedDate":"2022年9月30日","excerpt":"<h2> 概述</h2>\\n<p><code>TreeSet</code> 是基于 <code>TreeMap</code> 的 <code>Set</code> 集合实现类，利用了 <code>TreeMap</code> 的键不允许重复、无序的特点，将元素存储在 TreeMap 的键中，而值使用固定的 Object 对象填充。</p>\\n<h2> 类图</h2>\\n<p><img src=\\"https://cdn.staticaly.com/gh/alexchen68/images@master/blog/java/treeset_class.png\\" alt=\\"TreeSet类图\\" title=\\":size=60%\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{e as data};
