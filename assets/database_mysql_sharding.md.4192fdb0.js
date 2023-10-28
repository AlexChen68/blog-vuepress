import{_ as a,o as l,c as e,Q as t}from"./chunks/framework.419948d5.js";const b=JSON.parse('{"title":"Mysql 分库分表","description":"","frontmatter":{"title":"Mysql 分库分表","date":"2023-06-14T00:00:00.000Z","order":51},"headers":[],"relativePath":"database/mysql/sharding.md","filePath":"database/mysql/sharding.md","lastUpdated":1698482261000}'),i={name:"database/mysql/sharding.md"},o=t('<h1 id="mysql-分库分表" tabindex="-1">Mysql 分库分表 <a class="header-anchor" href="#mysql-分库分表" aria-label="Permalink to &quot;Mysql 分库分表&quot;">​</a></h1><h2 id="为什么要分库分表" tabindex="-1">为什么要分库分表？ <a class="header-anchor" href="#为什么要分库分表" aria-label="Permalink to &quot;为什么要分库分表？&quot;">​</a></h2><p>关系型数据库本身比较容易成为系统瓶颈，单机存储容量、连接数、处理能力都有限。当单表的数据量达到一定程度以后，由于查询维度较多，即使添加从库、优化索引，做很多操作时性能仍下降严重。此时就要考虑对其进行拆分了，拆分的目的就在于减少数据库的负担，缩短查询时间。</p><p>数据库分布式核心内容无非就是数据拆分（Sharding），以及拆分后对数据的定位、整合。数据拆分就是将数据分散存储到多个数据库中，使得单一数据库中的数据量变小，通过扩充主机的数量缓解单一数据库的性能问题，从而达到提升数据库操作性能的目的。</p><h2 id="分库分表的拆分方式" tabindex="-1">分库分表的拆分方式 <a class="header-anchor" href="#分库分表的拆分方式" aria-label="Permalink to &quot;分库分表的拆分方式&quot;">​</a></h2><p>数据库表的拆分根据其拆分类型，可以分为两种方式：<strong>垂直（纵向）拆分</strong>和<strong>水平（横向）拆分</strong></p><h3 id="垂直拆分" tabindex="-1">垂直拆分 <a class="header-anchor" href="#垂直拆分" aria-label="Permalink to &quot;垂直拆分&quot;">​</a></h3><blockquote><p>垂直拆分又分为垂直分库和垂直分表。</p></blockquote><ul><li><p><strong>垂直分库</strong>就是根据业务耦合性，将关联度低的不同表存储在不同的数据库。做法与大系统拆分为多个小系统类似，按业务分类进行独立划分。与&quot;微服务治理&quot;的做法相似，每个微服务使用单独的一个数据库。</p></li><li><p><strong>垂直分表</strong>是基于数据库中的&quot;列&quot;进行，某个表字段较多，可以新建一张扩展表，将不经常用或字段长度较大的字段拆分出去到扩展表中。在字段很多的情况下（例如一个大表有 100 多个字段），通过&quot;大表拆小表&quot;，更便于开发与维护，也能避免跨页问题，MySQL 底层是通过数据页存储的，一条记录占用空间过大会导致跨页，造成额外的性能开销。另外数据库以行为单位将数据加载到内存中，这样表中字段长度较短且访问频率较高，内存能加载更多的数据，命中率更高，减少了磁盘 IO，从而提升了数据库性能。</p></li></ul><div class="info custom-block"><p class="custom-block-title">垂直拆分优缺点</p><p><strong>垂直拆分的优点：</strong></p><ul><li>解决业务系统层面的耦合，业务清晰</li><li>与微服务的治理类似，也能对不同业务的数据进行分级管理、维护、监控、扩展等</li><li>高并发场景下，垂直拆分一定程度的提升 IO、数据库连接数、单机硬件资源的瓶颈</li></ul><p><strong>垂直拆分的缺点：</strong></p><ul><li>部分表无法 join，只能通过接口聚合方式解决，提升了开发的复杂度</li><li>分布式事务处理复杂</li><li>依然存在单表数据量过大的问题（需要水平拆分）</li></ul></div><h3 id="水平拆分" tabindex="-1">水平拆分 <a class="header-anchor" href="#水平拆分" aria-label="Permalink to &quot;水平拆分&quot;">​</a></h3><blockquote><p>当一个应用难以再细粒度的垂直拆分，或拆分后数据量行数巨大，存在单库读写、存储性能瓶颈，这时候就需要进行水平拆分了。</p></blockquote><p>水平拆分分为库内分表和分库分表，是根据表内数据内在的逻辑关系，将同一个表按不同的条件分散到多个数据库或多个表中，每个表中只包含一部分数据，从而使得单个表的数据量变小，达到分布式的效果。</p><p>库内分表只解决了单一表数据量过大的问题，但没有将表分布到不同机器的库上，因此对于减轻 MySQL 数据库的压力来说，帮助不是很大，大家还是竞争同一个物理机的 CPU、内存、网络 IO，最好通过分库分表来解决。</p><div class="info custom-block"><p class="custom-block-title">水平拆分优缺点</p><p><strong>水平拆分的优点：</strong></p><ul><li>不存在单库数据量过大、高并发的性能瓶颈，提升系统稳定性和负载能力</li><li>应用端改造较小，不需要拆分业务模块</li></ul><p><strong>水平拆分的缺点：</strong></p><ul><li>跨分片的事务一致性难以保证</li><li>跨库的 join 关联查询性能较差</li><li>数据多次扩展难度和维护量极大</li></ul></div><h3 id="数据分片策略" tabindex="-1">数据分片策略 <a class="header-anchor" href="#数据分片策略" aria-label="Permalink to &quot;数据分片策略&quot;">​</a></h3><p>水平拆分后同一张表会出现在多个数据库/表中，每个库/表的内容不同。几种典型的数据分片规则为：</p><ol><li>哈希取模：hash(key) % NUM_DB</li><li>范围：可以是 ID 范围也可以是时间范围</li><li>映射表：使用单独的一个数据库来存储映射关系</li></ol><h2 id="分库分表带来的问题" tabindex="-1">分库分表带来的问题 <a class="header-anchor" href="#分库分表带来的问题" aria-label="Permalink to &quot;分库分表带来的问题&quot;">​</a></h2><h3 id="事务一致性问题" tabindex="-1">事务一致性问题 <a class="header-anchor" href="#事务一致性问题" aria-label="Permalink to &quot;事务一致性问题&quot;">​</a></h3><p>分库分表后，假设两个表在不同的数据库，那么本地事务已经无效了，需要使用分布式事务了。</p><h3 id="跨节点关联查询-join-问题" tabindex="-1">跨节点关联查询 join 问题 <a class="header-anchor" href="#跨节点关联查询-join-问题" aria-label="Permalink to &quot;跨节点关联查询 join 问题&quot;">​</a></h3><p>可以将原来的 JOIN 分解成多个单表查询，然后在用户程序中进行 JOIN。</p><h3 id="跨节点分页、排序、函数问题" tabindex="-1">跨节点分页、排序、函数问题 <a class="header-anchor" href="#跨节点分页、排序、函数问题" aria-label="Permalink to &quot;跨节点分页、排序、函数问题&quot;">​</a></h3><p>可以分别在各个节点上得到结果后在应用程序端进行合并。</p><h3 id="id-唯一性问题" tabindex="-1">ID 唯一性问题 <a class="header-anchor" href="#id-唯一性问题" aria-label="Permalink to &quot;ID 唯一性问题&quot;">​</a></h3><ul><li>使用全局唯一 ID: GUID</li><li>为每个分片指定一个 ID 范围</li><li>分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)</li></ul><h2 id="shardingsphere-实现分库分表" tabindex="-1">ShardingSphere 实现分库分表 <a class="header-anchor" href="#shardingsphere-实现分库分表" aria-label="Permalink to &quot;ShardingSphere 实现分库分表&quot;">​</a></h2><blockquote><p>TODO</p></blockquote><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://cloud.tencent.com/developer/article/1819045" target="_blank" rel="noreferrer">实战彻底搞清分库分表（垂直分库，垂直分表，水平分库，水平分表）</a></li></ul>',31),r=[o];function s(n,h,d,c,u,p){return l(),e("div",null,r)}const m=a(i,[["render",s]]);export{b as __pageData,m as default};
