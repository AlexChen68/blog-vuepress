const e=JSON.parse(`{"key":"v-1b64b0e3","path":"/database/mysql/2.5-index.html","title":"Mysql 索引","lang":"zh-CN","frontmatter":{"title":"Mysql 索引","category":"Mysql","date":"2023-05-28T00:00:00.000Z","description":"本文将会从以下几个方面来讲述索引的相关知识： 什么是索引，索引的作用 索引的种类 高性能索引策略 索引设计准则：三星索引","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/database/mysql/2.5-index.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"Mysql 索引"}],["meta",{"property":"og:description","content":"本文将会从以下几个方面来讲述索引的相关知识： 什么是索引，索引的作用 索引的种类 高性能索引策略 索引设计准则：三星索引"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T21:03:32.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T21:03:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-28T21:03:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlexChen\\",\\"url\\":\\"https://github.com/AlexChen68\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"什么是索引，索引的作用","slug":"什么是索引-索引的作用","link":"#什么是索引-索引的作用","children":[{"level":3,"title":"快速定位数据页","slug":"快速定位数据页","link":"#快速定位数据页","children":[]},{"level":3,"title":"避免排序和临时表","slug":"避免排序和临时表","link":"#避免排序和临时表","children":[]},{"level":3,"title":"随机 IO 变成顺序 IO","slug":"随机-io-变成顺序-io","link":"#随机-io-变成顺序-io","children":[]}]},{"level":2,"title":"索引的种类和概念","slug":"索引的种类和概念","link":"#索引的种类和概念","children":[{"level":3,"title":"B+树索引","slug":"b-树索引","link":"#b-树索引","children":[]},{"level":3,"title":"哈希索引","slug":"哈希索引","link":"#哈希索引","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"主键索引和二级索引（辅助索引）","slug":"主键索引和二级索引-辅助索引","link":"#主键索引和二级索引-辅助索引","children":[]},{"level":3,"title":"聚簇索引与非聚簇索引","slug":"聚簇索引与非聚簇索引","link":"#聚簇索引与非聚簇索引","children":[]}]},{"level":2,"title":"索引操作","slug":"索引操作","link":"#索引操作","children":[{"level":3,"title":"索引创建方式","slug":"索引创建方式","link":"#索引创建方式","children":[]},{"level":3,"title":"主键索引","slug":"主键索引","link":"#主键索引","children":[]},{"level":3,"title":"唯一索引","slug":"唯一索引","link":"#唯一索引","children":[]},{"level":3,"title":"普通索引和复合索引","slug":"普通索引和复合索引","link":"#普通索引和复合索引","children":[]}]},{"level":2,"title":"索引使用注意事项","slug":"索引使用注意事项","link":"#索引使用注意事项","children":[{"level":3,"title":"索引失效","slug":"索引失效","link":"#索引失效","children":[]},{"level":3,"title":"必须用函数时怎么使用索引","slug":"必须用函数时怎么使用索引","link":"#必须用函数时怎么使用索引","children":[]},{"level":3,"title":"前缀索引与索引选择性","slug":"前缀索引与索引选择性","link":"#前缀索引与索引选择性","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1685307812000,"updatedTime":1685307812000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":13.67,"words":4101},"filePathRelative":"database/mysql/2.5-index.md","localizedDate":"2023年5月28日","excerpt":"<p>本文将会从以下几个方面来讲述索引的相关知识：</p>\\n<ul>\\n<li>什么是索引，索引的作用</li>\\n<li>索引的种类</li>\\n<li>高性能索引策略</li>\\n<li>索引设计准则：三星索引</li>\\n</ul>\\n","autoDesc":true}`);export{e as data};
