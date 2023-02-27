const t=JSON.parse(`{"key":"v-2de5112a","path":"/md/spring/distributed/01-intro.html","title":"分布式理论","lang":"zh-CN","frontmatter":{"title":"分布式理论","category":["分布式"],"date":"2023-02-13T00:00:00.000Z","description":"分布式理论","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/md/spring/distributed/01-intro.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"分布式理论"}],["meta",{"property":"og:description","content":"分布式理论"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-20T17:26:35.000Z"}],["meta",{"property":"article:published_time","content":"2023-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-20T17:26:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式理论\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-20T17:26:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CAP理论","slug":"cap理论","link":"#cap理论","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1676256843000,"updatedTime":1676913995000,"contributors":[{"name":"AlexChen","email":"1274812218@qq.com","commits":2}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"md/spring/distributed/01-intro.md","localizedDate":"2023年2月13日","excerpt":"<h2> CAP理论</h2>\\n<p><strong>CAP 理论</strong>是分布式系统中一个很重要的理论，它描述的是一个分布式系统最多只能满足 CAP 中的两个条件，不可能同时满足三个条件</p>\\n<p>三种条件中，P 通常都有，所以一般只分为 CP 和 AP：</p>\\n<ul>\\n<li>\\n<p>C（Consistency）：这里指的是强一致性。保证在一定时间内，集群中的各个节点会达到较强的一致性，同时，为了达到这一点，一般会牺牲一点响应时间。而放弃C也不意味着放弃一致性，而是放弃强一致性。允许系统内有一定的数据不一致情况的存在。</p>\\n</li>\\n<li>\\n<p>A (Avalibility)：可用性。意味着系统一直处于可用状态。个别节点的故障不会影响整个服务的运作，可以理解为容错率更高。</p>\\n</li>\\n<li>\\n<p>P（Partition Tolerance)：分区容忍性。当系统出现网络分区等情况时，依然能对外提供服务。想到达到这一点，一般来说会把数据复制到多个分区里，来提高分区容忍性。这个一般是不会被抛弃的。</p>\\n</li>\\n</ul>"}`);export{t as data};
