const e=JSON.parse(`{"key":"v-e470fbba","path":"/java/concurrency/principle/","title":"并发理论基础","lang":"zh-CN","frontmatter":{"title":"并发理论基础","article":false,"date":"2023-03-13T00:00:00.000Z","description":"什么是并发？ CPU、内存、I/O 设备的速度是有极大差异的，为了合理利用 CPU 的高性能，平衡这三者的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为： CPU 增加了缓存，以均衡与内存的速度差异；// 导致可见性问题 操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；// 导致原子性问题 编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。// 导致有序性问题","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/java/concurrency/principle/"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"并发理论基础"}],["meta",{"property":"og:description","content":"什么是并发？ CPU、内存、I/O 设备的速度是有极大差异的，为了合理利用 CPU 的高性能，平衡这三者的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为： CPU 增加了缓存，以均衡与内存的速度差异；// 导致可见性问题 操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；// 导致原子性问题 编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。// 导致有序性问题"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-01T09:07:24.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-01T09:07:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"并发理论基础\\",\\"description\\":\\"什么是并发？ CPU、内存、I/O 设备的速度是有极大差异的，为了合理利用 CPU 的高性能，平衡这三者的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为： CPU 增加了缓存，以均衡与内存的速度差异；// 导致可见性问题 操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；// 导致原子性问题 编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。// 导致有序性问题\\"}"]]},"headers":[{"level":2,"title":"什么是并发？","slug":"什么是并发","link":"#什么是并发","children":[]},{"level":2,"title":"并发带来的安全问题","slug":"并发带来的安全问题","link":"#并发带来的安全问题","children":[]},{"level":2,"title":"怎么解决上述问题？","slug":"怎么解决上述问题","link":"#怎么解决上述问题","children":[{"level":3,"title":"解决原子性问题","slug":"解决原子性问题","link":"#解决原子性问题","children":[]},{"level":3,"title":"解决可见性问题","slug":"解决可见性问题","link":"#解决可见性问题","children":[]},{"level":3,"title":"解决有序性问题","slug":"解决有序性问题","link":"#解决有序性问题","children":[]},{"level":3,"title":"Happens-Before 原则","slug":"happens-before-原则","link":"#happens-before-原则","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1680340044000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"java/concurrency/principle/README.md","localizedDate":"2023年3月13日","excerpt":"<h2> 什么是并发？</h2>\\n<p>CPU、内存、I/O 设备的速度是有极大差异的，为了合理利用 CPU 的高性能，平衡这三者的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为：</p>\\n<ul>\\n<li>CPU 增加了缓存，以均衡与内存的速度差异；// 导致<strong>可见性</strong>问题</li>\\n<li>操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；// 导致<strong>原子性</strong>问题</li>\\n<li>编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。// 导致<strong>有序性</strong>问题</li>\\n</ul>","autoDesc":true}`);export{e as data};
