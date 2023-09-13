import{_ as t,o as a,c as e,Q as o}from"./chunks/framework.bf9fbf22.js";const b=JSON.parse('{"title":"线性表 - 哈希表","description":"","frontmatter":{"title":"线性表 - 哈希表","date":"2023-01-08T00:00:00.000Z"},"headers":[],"relativePath":"advance/ds/1.3-hashtable.md","filePath":"advance/ds/1.3-hashtable.md"}'),r={name:"advance/ds/1.3-hashtable.md"},s=o('<h2 id="哈希表概述" tabindex="-1">哈希表概述 <a class="header-anchor" href="#哈希表概述" aria-label="Permalink to &quot;哈希表概述&quot;">​</a></h2><p>哈希表（英文名字为 Hash table，国内也有一些算法书籍翻译为散列表，大家看到这两个名称知道都是指 hash table 就可以了）。</p><blockquote><p>哈希表是根据关键码的值而直接进行访问的数据结构。</p></blockquote><p><strong>哈希表能解决什么问题</strong>：</p><ol><li>快速判断一个元素是否出现集合里；</li><li>实现缓存。</li></ol><p><strong>哈希表的原理：</strong></p><blockquote><p>通过将<strong>散列函数</strong>将<strong>输入</strong>映射为<strong>数字</strong>，对应<strong>数组</strong>的索引下标，将数据存储在对应索引的位置中；</p><p>散列函数将不同的输入映射到不同的索引，从而可以利用<strong>数组</strong>实现时间复杂度为 <strong>O(1)</strong> 的快速查询。</p></blockquote><p>从哈希表的原理可以看出，<strong>散列函数</strong>的选择对整个哈希表的性能有较大的影响，越好的散列函数越能均匀地映射到散列表的不同位置；</p><p>另外，散列函数并不能完全将不同的输入映射到不同的索引，这种情况叫做<strong>散列冲突</strong>（哈希碰撞）。</p><p><strong>如何解决散列冲突</strong></p><p>一般哈希碰撞有两种解决方法，拉链法和线性探测法。</p><p>拉链法：因为多个输入散列后可能得到同一个索引，那么我们可以在数组存储一个链表或者别的数据结构，用来存储散列结果一致的输入。</p><p>在 Java 的 HashMap 中，就是使用了<strong>链表</strong>和<strong>红黑树</strong>，来解决散列冲突的。</p><p>线性探测法：如果发生冲突，那就向下寻找一个空位存放冲突的数据。</p><h2 id="常见的哈希表表示" tabindex="-1">常见的哈希表表示 <a class="header-anchor" href="#常见的哈希表表示" aria-label="Permalink to &quot;常见的哈希表表示&quot;">​</a></h2><ol><li>数组</li><li>Set 集合</li><li>Map 映射</li></ol><h2 id="相关算法题" tabindex="-1">相关算法题 <a class="header-anchor" href="#相关算法题" aria-label="Permalink to &quot;相关算法题&quot;">​</a></h2><ul><li><a href="https://leetcode.cn/problems/two-sum/" target="_blank" rel="noreferrer">001. 两数之和</a></li><li><a href="https://leetcode.cn/problems/valid-anagram/" target="_blank" rel="noreferrer">242. 有效的字母异位词</a></li></ul>',18),n=[s];function l(p,i,c,h,d,_){return a(),e("div",null,n)}const u=t(r,[["render",l]]);export{b as __pageData,u as default};
