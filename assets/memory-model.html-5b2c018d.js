const e=JSON.parse(`{"key":"v-52cc984e","path":"/java/concurrency/principle/memory-model.html","title":"原理篇 - Java 内存模型","lang":"zh-CN","frontmatter":{"title":"原理篇 - Java 内存模型","category":"Concurrency","date":"2023-03-16T00:00:00.000Z","description":"并发编程模型的两个关键问题 线程间如何通信？即：线程之间以何种机制来交换信息 线程间如何同步？即：线程以何种机制来控制不同线程间操作发生的相对顺序 有两种并发模型可以解决这两个问题： 消息传递并发模型 共享内存并发模型 这两种模型之间的区别如下表所示：","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/java/concurrency/principle/memory-model.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"原理篇 - Java 内存模型"}],["meta",{"property":"og:description","content":"并发编程模型的两个关键问题 线程间如何通信？即：线程之间以何种机制来交换信息 线程间如何同步？即：线程以何种机制来控制不同线程间操作发生的相对顺序 有两种并发模型可以解决这两个问题： 消息传递并发模型 共享内存并发模型 这两种模型之间的区别如下表所示："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-07T09:31:54.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2023-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-07T09:31:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原理篇 - Java 内存模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-07T09:31:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlexChen\\",\\"url\\":\\"https://github.com/AlexChen68\\"}]}"]]},"headers":[{"level":2,"title":"并发编程模型的两个关键问题","slug":"并发编程模型的两个关键问题","link":"#并发编程模型的两个关键问题","children":[]},{"level":2,"title":"Java 内存模型的抽象结构","slug":"java-内存模型的抽象结构","link":"#java-内存模型的抽象结构","children":[{"level":3,"title":"运行时内存的划分","slug":"运行时内存的划分","link":"#运行时内存的划分","children":[]},{"level":3,"title":"既然堆是共享的，为什么在堆中会有内存不可见问题？","slug":"既然堆是共享的-为什么在堆中会有内存不可见问题","link":"#既然堆是共享的-为什么在堆中会有内存不可见问题","children":[]},{"level":3,"title":"JMM 与 Java 内存区域划分的区别与联系","slug":"jmm-与-java-内存区域划分的区别与联系","link":"#jmm-与-java-内存区域划分的区别与联系","children":[]}]},{"level":2,"title":"什么是重排序？","slug":"什么是重排序","link":"#什么是重排序","children":[]},{"level":2,"title":"顺序一致性模型与 JMM 的保证","slug":"顺序一致性模型与-jmm-的保证","link":"#顺序一致性模型与-jmm-的保证","children":[{"level":3,"title":"数据竞争与顺序一致性","slug":"数据竞争与顺序一致性","link":"#数据竞争与顺序一致性","children":[]},{"level":3,"title":"顺序一致性模型","slug":"顺序一致性模型","link":"#顺序一致性模型","children":[]},{"level":3,"title":"JMM 中同步程序的顺序一致性效果","slug":"jmm-中同步程序的顺序一致性效果","link":"#jmm-中同步程序的顺序一致性效果","children":[]},{"level":3,"title":"JMM 中未同步程序的顺序一致性效果","slug":"jmm-中未同步程序的顺序一致性效果","link":"#jmm-中未同步程序的顺序一致性效果","children":[]}]},{"level":2,"title":"happens-before","slug":"happens-before","link":"#happens-before","children":[{"level":3,"title":"什么是 happens-before?","slug":"什么是-happens-before","link":"#什么是-happens-before","children":[]},{"level":3,"title":"天然的 happens-before 关系","slug":"天然的-happens-before-关系","link":"#天然的-happens-before-关系","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1686130314000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":3}]},"readingTime":{"minutes":15.86,"words":4759},"filePathRelative":"java/concurrency/principle/memory-model.md","localizedDate":"2023年3月16日","excerpt":"<h2> 并发编程模型的两个关键问题</h2>\\n<ul>\\n<li>线程间如何通信？即：线程之间以何种机制来交换信息</li>\\n<li>线程间如何同步？即：线程以何种机制来控制不同线程间操作发生的相对顺序</li>\\n</ul>\\n<p>有两种并发模型可以解决这两个问题：</p>\\n<ul>\\n<li>消息传递并发模型</li>\\n<li>共享内存并发模型</li>\\n</ul>\\n<p>这两种模型之间的区别如下表所示：</p>\\n<p><img src=\\"https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/concurrency_model_compare.png\\" alt=\\"两种并发模型的比较\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{e as data};
