import{_ as e,o as t,c as a,Q as i}from"./chunks/framework.bf9fbf22.js";const P=JSON.parse('{"title":"分布式","description":"","frontmatter":{"title":"分布式","index":false,"article":false,"date":"2023-02-13T00:00:00.000Z"},"headers":[],"relativePath":"distributed/index.md","filePath":"distributed/index.md"}'),r={name:"distributed/index.md"},l=i('<h2 id="cap-理论" tabindex="-1">CAP 理论 <a class="header-anchor" href="#cap-理论" aria-label="Permalink to &quot;CAP 理论&quot;">​</a></h2><p><strong>CAP 理论</strong>是分布式系统中一个很重要的理论，它描述的是一个分布式系统最多只能满足 CAP 中的两个条件，不可能同时满足三个条件</p><p>三种条件中，P 通常都有，所以一般只分为 CP 和 AP：</p><ul><li><p>C（Consistency）：这里指的是强一致性。保证在一定时间内，集群中的各个节点会达到较强的一致性，同时，为了达到这一点，一般会牺牲一点响应时间。而放弃 C 也不意味着放弃一致性，而是放弃强一致性。允许系统内有一定的数据不一致情况的存在。</p></li><li><p>A (Avalibility)：可用性。意味着系统一直处于可用状态。个别节点的故障不会影响整个服务的运作，可以理解为容错率更高。</p></li><li><p>P（Partition Tolerance)：分区容忍性。当系统出现网络分区等情况时，依然能对外提供服务。想到达到这一点，一般来说会把数据复制到多个分区里，来提高分区容忍性。这个一般是不会被抛弃的。</p></li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/zhaojinhui/p/16668436.html" target="_blank" rel="noreferrer">Hviger - 微服务的注册中心</a></li></ul>',6),n=[l];function o(s,d,c,_,p,h){return t(),a("div",null,n)}const f=e(r,[["render",o]]);export{P as __pageData,f as default};
