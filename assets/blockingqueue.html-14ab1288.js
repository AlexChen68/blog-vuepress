const e=JSON.parse(`{"key":"v-52a04744","path":"/java/concurrency/juc/blockingqueue.html","title":"阻塞队列","lang":"zh-CN","frontmatter":{"title":"阻塞队列","category":"Concurrency","date":"2023-03-22T00:00:00.000Z","description":"阻塞队列的由来 我们假设一种场景，生产者一直生产资源，消费者一直消费资源，资源存储在一个缓冲池中，生产者将生产的资源存进缓冲池中，消费者从缓冲池中拿到资源进行消费，这就是大名鼎鼎的生产者 - 消费者模式。 该模式能够简化开发过程，一方面消除了生产者类与消费者类之间的代码依赖性，另一方面将生产数据的过程与使用数据的过程解耦简化负载。 我们自己 coding 实现这个模式的时候，因为需要让多个线程操作共享变量（即资源），所以很容易引发线程安全问题，造成重复消费和死锁，尤其是生产者和消费者存在多个的情况。另外，当缓冲池空了，我们需要阻塞消费者，唤醒生产者；当缓冲池满了，我们需要阻塞生产者，唤醒消费者，这些个等待 - 唤醒逻辑都需要自己实现。（这块不明白的同学，可以看最下方结语部分的链接）","head":[["meta",{"property":"og:url","content":"https://github.com/AlexChen68/AlexChen68.github.io/java/concurrency/juc/blockingqueue.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"阻塞队列"}],["meta",{"property":"og:description","content":"阻塞队列的由来 我们假设一种场景，生产者一直生产资源，消费者一直消费资源，资源存储在一个缓冲池中，生产者将生产的资源存进缓冲池中，消费者从缓冲池中拿到资源进行消费，这就是大名鼎鼎的生产者 - 消费者模式。 该模式能够简化开发过程，一方面消除了生产者类与消费者类之间的代码依赖性，另一方面将生产数据的过程与使用数据的过程解耦简化负载。 我们自己 coding 实现这个模式的时候，因为需要让多个线程操作共享变量（即资源），所以很容易引发线程安全问题，造成重复消费和死锁，尤其是生产者和消费者存在多个的情况。另外，当缓冲池空了，我们需要阻塞消费者，唤醒生产者；当缓冲池满了，我们需要阻塞生产者，唤醒消费者，这些个等待 - 唤醒逻辑都需要自己实现。（这块不明白的同学，可以看最下方结语部分的链接）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-01T09:07:24.000Z"}],["meta",{"property":"article:author","content":"AlexChen"}],["meta",{"property":"article:published_time","content":"2023-03-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-01T09:07:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阻塞队列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-01T09:07:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlexChen\\",\\"url\\":\\"https://github.com/AlexChen68\\"}]}"]]},"headers":[{"level":2,"title":"阻塞队列的由来","slug":"阻塞队列的由来","link":"#阻塞队列的由来","children":[]},{"level":2,"title":"BlockingQueue 的操作方法","slug":"blockingqueue-的操作方法","link":"#blockingqueue-的操作方法","children":[]},{"level":2,"title":"BlockingQueue 的实现类","slug":"blockingqueue-的实现类","link":"#blockingqueue-的实现类","children":[{"level":3,"title":"ArrayBlockingQueue","slug":"arrayblockingqueue","link":"#arrayblockingqueue","children":[]},{"level":3,"title":"LinkedBlockingQueue","slug":"linkedblockingqueue","link":"#linkedblockingqueue","children":[]},{"level":3,"title":"DelayQueue","slug":"delayqueue","link":"#delayqueue","children":[]},{"level":3,"title":"PriorityBlockingQueue","slug":"priorityblockingqueue","link":"#priorityblockingqueue","children":[]},{"level":3,"title":"SynchronousQueue","slug":"synchronousqueue","link":"#synchronousqueue","children":[]}]},{"level":2,"title":"阻塞队列的原理","slug":"阻塞队列的原理","link":"#阻塞队列的原理","children":[]},{"level":2,"title":"示例和使用场景","slug":"示例和使用场景","link":"#示例和使用场景","children":[{"level":3,"title":"生产者 - 消费者模型","slug":"生产者-消费者模型","link":"#生产者-消费者模型","children":[]},{"level":3,"title":"线程池中使用阻塞队列","slug":"线程池中使用阻塞队列","link":"#线程池中使用阻塞队列","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1680340044000,"updatedTime":1680340044000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":11.13,"words":3339},"filePathRelative":"java/concurrency/juc/blockingqueue.md","localizedDate":"2023年3月22日","excerpt":"<h2> 阻塞队列的由来</h2>\\n<p>我们假设一种场景，生产者一直生产资源，消费者一直消费资源，资源存储在一个缓冲池中，生产者将生产的资源存进缓冲池中，消费者从缓冲池中拿到资源进行消费，这就是大名鼎鼎的<strong>生产者 - 消费者模式</strong>。</p>\\n<p>该模式能够简化开发过程，一方面消除了生产者类与消费者类之间的代码依赖性，另一方面将生产数据的过程与使用数据的过程解耦简化负载。</p>\\n<p>我们自己 coding 实现这个模式的时候，因为需要让<strong>多个线程操作共享变量</strong>（即资源），所以很容易引发<strong>线程安全问题</strong>，造成<strong>重复消费</strong>和<strong>死锁</strong>，尤其是生产者和消费者存在多个的情况。另外，当缓冲池空了，我们需要阻塞消费者，唤醒生产者；当缓冲池满了，我们需要阻塞生产者，唤醒消费者，这些个<strong>等待 - 唤醒</strong>逻辑都需要自己实现。（这块不明白的同学，可以看最下方结语部分的链接）</p>","autoDesc":true}`);export{e as data};
