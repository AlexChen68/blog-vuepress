const e=JSON.parse(`{"key":"v-18eff20c","path":"/md/java/collection/02-LinkedList.html","title":"LinkedList 源码分析","lang":"zh-CN","frontmatter":{"title":"LinkedList 源码分析","icon":"blog","article":true,"date":"2022-09-30T00:00:00.000Z","tag":["Collection"],"category":["Java 集合"],"isOriginal":true,"description":"LinkedList 源码分析","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/blog/md/java/collection/02-LinkedList.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"LinkedList 源码分析"}],["meta",{"property":"og:description","content":"LinkedList 源码分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-25T08:02:38.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Collection"}],["meta",{"property":"article:published_time","content":"2022-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-25T08:02:38.000Z"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"类图","slug":"类图","link":"#类图","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":2,"title":"链表操作","slug":"链表操作","link":"#链表操作","children":[{"level":3,"title":"添加元素","slug":"添加元素","link":"#添加元素","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]},{"level":3,"title":"查询元素","slug":"查询元素","link":"#查询元素","children":[]}]},{"level":2,"title":"集合操作","slug":"集合操作","link":"#集合操作","children":[{"level":3,"title":"添加元素","slug":"添加元素-1","link":"#添加元素-1","children":[]},{"level":3,"title":"删除元素","slug":"删除元素-1","link":"#删除元素-1","children":[]},{"level":3,"title":"更新元素","slug":"更新元素","link":"#更新元素","children":[]},{"level":3,"title":"查询元素","slug":"查询元素-1","link":"#查询元素-1","children":[]},{"level":3,"title":"转为数组","slug":"转为数组","link":"#转为数组","children":[]},{"level":3,"title":"迭代器","slug":"迭代器","link":"#迭代器","children":[]}]},{"level":2,"title":"双端队列操作","slug":"双端队列操作","link":"#双端队列操作","children":[{"level":3,"title":"添加元素","slug":"添加元素-2","link":"#添加元素-2","children":[]},{"level":3,"title":"删除元素","slug":"删除元素-2","link":"#删除元素-2","children":[]},{"level":3,"title":"查询元素","slug":"查询元素-2","link":"#查询元素-2","children":[]}]},{"level":2,"title":"序列化","slug":"序列化","link":"#序列化","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1672326923000,"updatedTime":1674633758000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1},{"name":"alexchen68","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":13.8,"words":4141},"filePathRelative":"md/java/collection/02-LinkedList.md","localizedDate":"2022年9月30日","excerpt":"<h2> 概述</h2>\\n<p><code>LinkedList</code> 同时实现了 <code>List</code> 接口和 <code>Deque</code> 接口，它既可以当成顺序容器，又可以作为双端队列使用，同时还可以看作一个栈（Stack）。栈和队列还有一个更好的选择是 <code>ArrayDeque</code>，它有比 <code>LinkedList</code> 更好的性能。(本文基于 JDK1.8)</p>\\n<h2> 类图</h2>\\n<p><img src=\\"https://cdn.jsdelivr.net/gh/AlexChen68/images@master/blog/java/linkedlist_class.png\\" alt=\\"LinkedList类图\\" title=\\":size=60%\\"></p>"}`);export{e as data};
