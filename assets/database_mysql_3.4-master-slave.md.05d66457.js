import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.419948d5.js";const g=JSON.parse('{"title":"Mysql 主从复制和读写分离","description":"","frontmatter":{"title":"Mysql 主从复制和读写分离","date":"2023-06-15T00:00:00.000Z"},"headers":[],"relativePath":"database/mysql/3.4-master-slave.md","filePath":"database/mysql/3.4-master-slave.md","lastUpdated":1697770247000}'),l={name:"database/mysql/3.4-master-slave.md"},t=n(`<h2 id="mysql-主从" tabindex="-1">Mysql 主从 <a class="header-anchor" href="#mysql-主从" aria-label="Permalink to &quot;Mysql 主从&quot;">​</a></h2><h3 id="什么是-mysql-主从复制" tabindex="-1">什么是 Mysql 主从复制 <a class="header-anchor" href="#什么是-mysql-主从复制" aria-label="Permalink to &quot;什么是 Mysql 主从复制&quot;">​</a></h3><p>两台或以上的数据库实例，通过 binlog 日志实现数据异步同步的关系。</p><h3 id="主从复制原理" tabindex="-1">主从复制原理 <a class="header-anchor" href="#主从复制原理" aria-label="Permalink to &quot;主从复制原理&quot;">​</a></h3><p>(1) change ,start slave 语句后，从库获取主库复制信息，启动复制线程</p><p>(2) IO 线程，读取 master.info 获取连接信息，连接主库，主库分配 DUMP</p><p>(3) IO 线程，通过 <a href="http://master.info" target="_blank" rel="noreferrer">http://master.info</a> 获取复制信息，向主库 Dump 线程请求 binlog</p><p>(4) DUMP 返回 binlog 日志信息。</p><p>(5) IO 线程 接收日志。存储到 TCPIP 缓存中。</p><p>(6) IO 线程写日志到 relaylog 中，更新 master.info</p><p>(7) SQL 线程读取 relay-log.info ,执行新的 relay。更新 relay-log.info</p><p>(8) relaylog 定期自动删除</p><p>(9) 主库有通知从库有新日志产生。</p><h3 id="mysql-主从配置" tabindex="-1">Mysql 主从配置 <a class="header-anchor" href="#mysql-主从配置" aria-label="Permalink to &quot;Mysql 主从配置&quot;">​</a></h3><p>参考 <a href="/deploy/standalone/mysql.html#mysql-主从配置">ClickHere</a></p><h2 id="读写分离" tabindex="-1">读写分离 <a class="header-anchor" href="#读写分离" aria-label="Permalink to &quot;读写分离&quot;">​</a></h2><h3 id="什么是读写分离" tabindex="-1">什么是读写分离？ <a class="header-anchor" href="#什么是读写分离" aria-label="Permalink to &quot;什么是读写分离？&quot;">​</a></h3><p><strong>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点上</strong>。这样的话，就能够小幅提升写性能，大幅提升读性能。</p><p>一般情况下，我们都会选择一主多从，也就是一台主数据库负责写，其他的从数据库负责读。主库和从库之间会进行数据同步，以保证从库中数据的准确性。这样的架构实现起来比较简单，并且也符合系统的写少读多的特点。</p><h3 id="读写分离会带来什么问题-如何解决" tabindex="-1">读写分离会带来什么问题？如何解决？ <a class="header-anchor" href="#读写分离会带来什么问题-如何解决" aria-label="Permalink to &quot;读写分离会带来什么问题？如何解决？&quot;">​</a></h3><p>问题：</p><p>读写分离对于提升数据库的并发非常有效，但是，同时也会引来一个问题：主库和从库的数据存在延迟，比如你写完主库之后，主库的数据同步到从库是需要时间的，这个时间差就导致了主库和从库的数据不一致性问题。这也就是我们经常说的<strong>主从同步延迟</strong> 。</p><p>解决方案：</p><ol><li>强制将读请求路由到主库处理。</li></ol><p>既然你从库的数据过期了，那我就直接从主库读取嘛！这种方案虽然会增加主库的压力，但是，实现起来比较简单，也是我了解到的使用最多的一种方式。</p><p>比如 Sharding-JDBC 就是采用的这种方案。通过使用 Sharding-JDBC 的 HintManager 分片键值管理器，我们可以强制使用主库。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HintManager hintManager </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HintManager.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">hintManager.</span><span style="color:#B392F0;">setMasterRouteOnly</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 继续 JDBC 操作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HintManager hintManager </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HintManager.</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">hintManager.</span><span style="color:#6F42C1;">setMasterRouteOnly</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 继续 JDBC 操作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>对于这种方案，你可以将那些必须获取最新数据的读请求都交给主库处理。</p><ol start="2"><li>延迟读取。</li></ol><p>还有一些朋友肯定会想既然主从同步存在延迟，那我就在延迟之后读取啊，比如主从同步延迟 0.5s，那我就 1s 之后再读取数据。这样多方便啊！方便是方便，但是也很扯淡。</p><p>不过，如果你是这样设计业务流程就会好很多：对于一些对数据比较敏感的场景，你可以在完成写请求之后，避免立即进行请求操作。比如你支付成功之后，跳转到一个支付成功的页面，当你点击返回之后才返回自己的账户。</p><h3 id="shardingsphere-实现读写分离" tabindex="-1">ShardingSphere 实现读写分离 <a class="header-anchor" href="#shardingsphere-实现读写分离" aria-label="Permalink to &quot;ShardingSphere 实现读写分离&quot;">​</a></h3><blockquote><p>TODO</p></blockquote>`,33),r=[t];function o(p,i,c,h,d,y){return s(),e("div",null,r)}const b=a(l,[["render",o]]);export{g as __pageData,b as default};
