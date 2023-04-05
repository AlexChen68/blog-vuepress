const e=JSON.parse(`{"key":"v-6615d01d","path":"/advance/algo/sort/2.1-insertion.html","title":"2.1 插入排序","lang":"zh-CN","frontmatter":{"title":"2.1 插入排序","category":"算法","tag":["排序算法"],"date":"2023-04-03T00:00:00.000Z","description":"简介 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。 插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。 插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。 排序步骤 把 n 个待排序的元素看成为一个有序表和一个无序表，最开始时有序表中只包含 1 个元素，无序表中包含有 n-1 个元素； 每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表； 重复第 2 步 n-1 次可完成排序过程。","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/advance/algo/sort/2.1-insertion.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"2.1 插入排序"}],["meta",{"property":"og:description","content":"简介 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。 插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。 插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。 排序步骤 把 n 个待排序的元素看成为一个有序表和一个无序表，最开始时有序表中只包含 1 个元素，无序表中包含有 n-1 个元素； 每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表； 重复第 2 步 n-1 次可完成排序过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-05T18:24:42.000Z"}],["meta",{"property":"article:tag","content":"排序算法"}],["meta",{"property":"article:published_time","content":"2023-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-05T18:24:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.1 插入排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-05T18:24:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"排序步骤","slug":"排序步骤","link":"#排序步骤","children":[]},{"level":2,"title":"演示动画","slug":"演示动画","link":"#演示动画","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[]}],"git":{"createdTime":1680719082000,"updatedTime":1680719082000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"advance/algo/sort/2.1-insertion.md","localizedDate":"2023年4月3日","excerpt":"<h2> 简介</h2>\\n<p>插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。</p>\\n<p>插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>\\n<p>插入排序和冒泡排序一样，也有一种优化算法，叫做<em>拆半插入</em>。</p>\\n<h2> 排序步骤</h2>\\n<ol>\\n<li>把 n 个待排序的元素看成为一个有序表和一个无序表，最开始时有序表中只包含 1 个元素，无序表中包含有 n-1 个元素；</li>\\n<li>每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表；</li>\\n<li>重复第 2 步 n-1 次可完成排序过程。</li>\\n</ol>","autoDesc":true}`);export{e as data};
