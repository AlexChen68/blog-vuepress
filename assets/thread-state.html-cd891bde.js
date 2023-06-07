const e=JSON.parse(`{"key":"v-a288660c","path":"/java/concurrency/basic/thread-state.html","title":"基础篇 - Java 线程状态转换","lang":"zh-CN","frontmatter":{"title":"基础篇 - Java 线程状态转换","category":"Concurrency","date":"2023-03-13T00:00:00.000Z","description":"线程的状态 首先来看操作系统中的线程的状态： 在现在的操作系统中，线程是被视为轻量级进程的，所以操作系统线程的状态其实和操作系统进程的状态是一致的。 操作系统线程主要有以下三个状态：","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/java/concurrency/basic/thread-state.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"基础篇 - Java 线程状态转换"}],["meta",{"property":"og:description","content":"线程的状态 首先来看操作系统中的线程的状态： 在现在的操作系统中，线程是被视为轻量级进程的，所以操作系统线程的状态其实和操作系统进程的状态是一致的。 操作系统线程主要有以下三个状态："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-07T09:31:54.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-07T09:31:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础篇 - Java 线程状态转换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-07T09:31:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlexChen\\",\\"url\\":\\"https://github.com/AlexChen68\\"}]}"]]},"headers":[{"level":2,"title":"线程的状态","slug":"线程的状态","link":"#线程的状态","children":[{"level":3,"title":"新建（NEW）","slug":"新建-new","link":"#新建-new","children":[]},{"level":3,"title":"可运行 (Runnable)","slug":"可运行-runnable","link":"#可运行-runnable","children":[]},{"level":3,"title":"阻塞 (BLOCKED)","slug":"阻塞-blocked","link":"#阻塞-blocked","children":[]},{"level":3,"title":"无限期等待 (WAITING)","slug":"无限期等待-waiting","link":"#无限期等待-waiting","children":[]},{"level":3,"title":"限期等待 (TIMED_WAITING)","slug":"限期等待-timed-waiting","link":"#限期等待-timed-waiting","children":[]},{"level":3,"title":"终止（TERMINATED）","slug":"终止-terminated","link":"#终止-terminated","children":[]}]},{"level":2,"title":"线程状态的转换","slug":"线程状态的转换","link":"#线程状态的转换","children":[{"level":3,"title":"BLOCKED <-> RUNNABLE","slug":"blocked-runnable","link":"#blocked-runnable","children":[]},{"level":3,"title":"WAITING <-> RUNNABLE","slug":"waiting-runnable","link":"#waiting-runnable","children":[]},{"level":3,"title":"TIMED_WAITING <-> RUNNABLE","slug":"timed-waiting-runnable","link":"#timed-waiting-runnable","children":[]},{"level":3,"title":"线程中断","slug":"线程中断","link":"#线程中断","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1686130314000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":3}]},"readingTime":{"minutes":7.3,"words":2191},"filePathRelative":"java/concurrency/basic/thread-state.md","localizedDate":"2023年3月13日","excerpt":"<h2> 线程的状态</h2>\\n<p><strong>首先来看操作系统中的线程的状态：</strong></p>\\n<blockquote>\\n<p>在现在的操作系统中，线程是被视为轻量级进程的，所以操作系统线程的状态其实和操作系统进程的状态是一致的。</p>\\n</blockquote>\\n<p><img src=\\"https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/java/system_thread_state.png\\" alt=\\"操作系统线程状态\\" loading=\\"lazy\\"></p>\\n<p>操作系统线程主要有以下三个状态：</p>","autoDesc":true}`);export{e as data};
