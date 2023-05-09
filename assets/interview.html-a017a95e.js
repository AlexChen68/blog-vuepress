import{_ as i,W as n,X as r,Y as e,a0 as t,Z as l,a1 as s,C as d}from"./framework-d3200c61.js";const o={},h=s(`<blockquote><p>摘要：如何编写一份合格的简历以及面试 Java 后端各技术点常见的面试问题</p></blockquote><h2 id="_1-面试准备工作" tabindex="-1"><a class="header-anchor" href="#_1-面试准备工作" aria-hidden="true">#</a> 1. 面试准备工作</h2><p>面试前的准备工作包括：简历 -&gt; 刷题 -&gt; 模拟面试 -&gt; 自我介绍 -&gt; 常见问题准备</p><h2 id="_2-编写简历" tabindex="-1"><a class="header-anchor" href="#_2-编写简历" aria-hidden="true">#</a> 2. 编写简历</h2><p>简历的重要性不言而喻，<strong>社招</strong>简历一般由如下部分构成：</p><ol><li>基本信息</li><li>教育经历</li><li>工作经历和项目经历</li><li>专业技能</li><li>自我评价（可选）</li></ol><h3 id="_2-1-基本信息" tabindex="-1"><a class="header-anchor" href="#_2-1-基本信息" aria-hidden="true">#</a> 2.1 基本信息</h3><p>基本信息部分应该包含如下信息：</p><ol><li>基本的个人信息如<strong>姓名、年龄、联系方式</strong>，可以贴上自己的简历照；</li><li>很多技术岗位有工作年限要求，最好写上<strong>工作年限</strong>；</li><li>面试的<strong>技术和岗位</strong>，可以是编程语言 + 岗位的组合；</li><li><strong>求职状态</strong>，是否已离职，多久可以入职；</li><li><strong>期望薪资</strong>可写可不写。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>最好准备一份没写期望薪资的简历，在技术一面时使用，技术一面一般是平级的面试官面你， 不暴露期望薪资更有优势，如果你的期望薪资高于面试官，可能会被薪资倒挂的面试官为难。</p></div><h3 id="_2-2-教育经历" tabindex="-1"><a class="header-anchor" href="#_2-2-教育经历" aria-hidden="true">#</a> 2.2 教育经历</h3><p>社招的话主要说明<strong>毕业院校</strong>、<strong>所学专业</strong>和<strong>英语水平（可选）</strong>，除非有突出经历，否则可以省略。如果教育经历较少也可以和基本信息合并，具体看采用的简历模版。</p><h3 id="_2-3-工作经历和项目经历-重点" tabindex="-1"><a class="header-anchor" href="#_2-3-工作经历和项目经历-重点" aria-hidden="true">#</a> 2.3 工作经历和项目经历（重点）</h3><ul><li><p>工作经历一般从大学毕业后开始，按照时间线介绍<strong>任职公司</strong>以及<strong>岗位</strong>或者<strong>个人职责</strong>。</p></li><li><p>项目经历可以分以下几点来写：</p><ol><li>项目描述：描述这是一个什么项目，主要做哪一块的业务。</li><li>工作内容：描述你自己在这个项目中，负责哪些工作内容；</li><li>项目难点（可选）：描述这个项目中，有哪些技术或者业务上的难点；</li><li>个人收获：通过该项目得到的成长。</li><li>技术栈（可选）：项目中主要用到的技术，建议最好写自己能 hold 住的技术；如果不写「技术栈」的话，就在「个人收获」写一写自己使用某一技术的心得，这样把面试问题缩小到自己可以把控的点上。</li></ol></li></ul><p>示例：<img src="https://cdn.staticaly.com/gh/AlexChen68/image-hosting@master/blog/resource/面试项目经验示例.png" alt="面试项目经验示例" loading="lazy"></p><p><strong>原则：通过主动列出自己熟悉的技术点，缩小技术范围，引导面试官往自己熟悉的领域问。</strong></p><h3 id="_2-4-专业技能" tabindex="-1"><a class="header-anchor" href="#_2-4-专业技能" aria-hidden="true">#</a> 2.4 专业技能</h3><p>谨慎使用“精通”两字，推荐写“了解”、“熟悉”和“掌握”。</p><p>词语的强烈程度：精通 &gt; 熟悉（推荐使用）&gt; 掌握（推荐使用）&gt; 了解（推荐使用）</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- Java基础：熟悉 Java 基础知识，了解多线程并发，了解JVM原理。
- 数据库：熟练使用 Mysql、Redis 及常见的优化手段。
- 框架：熟悉 Spring Boot、MyBatis 等主流开发框架，了解消息队列 Kafka 的使用。
- 分布式：了解分布式系统的设计与应用，了解常见的分布式组件。
- 工具：熟悉 Git、Maven 等项目管理及构建工具，熟悉常用的 Linux 命令。
- 前端：熟悉 Vue、ElementUI、npm 等前端开发工具。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但需要注意的是，这里写的点，自己一定要熟练掌握，因为简历上写的，面试官一定会问。这样有一个好处，就是<strong>缩小面试官的问题范围</strong>，只要简历上写的，你都准备好了，那么简历上的知识点面试官一定会问，这样你就掌握了主动权。</p><p>另一方面，如果你有意向的公司，可以根据该公司的岗位技术需求，对自己的专业技能进行针对性地优化来匹配该岗位。</p><h2 id="_3-刷题" tabindex="-1"><a class="header-anchor" href="#_3-刷题" aria-hidden="true">#</a> 3. 刷题</h2><p>有固定答案的题：这类题除了理解之后背下来，就没有什么好办法了。针对这种题，大家到刷题网站集中刷题，比如：力扣、牛客等等。</p><p>没固定答案的题：很多人分享的面经当中都会写面试官问了什么刁钻的题，大家可以作为参考。找到朋友进行一下模拟面试，就算朋友不懂技术也没事。可以录音下来，自己听着复盘。在此期间尽量把关联的知识点串联记忆。</p><h2 id="_4-模拟面试" tabindex="-1"><a class="header-anchor" href="#_4-模拟面试" aria-hidden="true">#</a> 4. 模拟面试</h2><p>可以尝试找到朋友进行一下模拟面试，就算朋友不懂技术也没事。可以录音下来，自己听着复盘。在此期间尽量把关联的知识点串联记忆。</p><h2 id="_5-自我介绍" tabindex="-1"><a class="header-anchor" href="#_5-自我介绍" aria-hidden="true">#</a> 5. 自我介绍</h2><p>自我介绍可以包含<em>工作公司和年限</em>、<em>部门业务方向</em>、<em>擅长的技术</em>、<em>离职原因</em>等等，<strong>切忌不要说原公司的坏话</strong>，整个自我介绍时间不宜过长，把握在 3 分钟内。</p><p>示例：</p><p><img src="https://pics1.baidu.com/feed/810a19d8bc3eb135f178222807b703d9fc1f441e.jpeg" alt="image.png" loading="lazy"></p><h2 id="_6-常见问题准备" tabindex="-1"><a class="header-anchor" href="#_6-常见问题准备" aria-hidden="true">#</a> 6. 常见问题准备</h2><ul><li><p>技术上： 面试前要关注应用的方面：某一项技术是什么？在什么场景之下应用？和另一个技术对比优劣是什么？</p></li><li><p>回答不上来 不要表现得太着急，如实告知面试官，并表示面试结束后会去了解该方面的问题；引导面试官往自己熟悉的领域问。</p></li><li><p>空窗期 如果被问到空窗期，不管是什么理由，一定不要让 HR 觉得你稳定性差（比如考公失败，最好表明不会再考了）；其次是能表现出你在空窗期有学习进取而不是白白玩耍。</p></li><li><p>离职理由 原则就是不要说原公司的坏话。</p></li><li><p>最后提问环节 可以问与公司和岗位有关的问题，以及和职业发展有关的；但是最好不要问薪资相关的。</p></li></ul><h2 id="_7-参考资料" tabindex="-1"><a class="header-anchor" href="#_7-参考资料" aria-hidden="true">#</a> 7. 参考资料</h2>`,35),p={href:"https://baijiahao.baidu.com/s?id=1738864521586768754&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"};function c(g,u){const a=d("ExternalLinkIcon");return n(),r("div",null,[h,e("ul",null,[e("li",null,[e("a",p,[t("Java 面试前需要做哪些准备工作？"),l(a)])])])])}const m=i(o,[["render",c],["__file","interview.html.vue"]]);export{m as default};
