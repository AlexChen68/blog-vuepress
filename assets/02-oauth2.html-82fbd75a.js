const e=JSON.parse(`{"key":"v-ffb3305c","path":"/md/spring/springsecurity/02-oauth2.html","title":"理解 OAuth 2.0","lang":"zh-CN","frontmatter":{"title":"理解 OAuth 2.0","category":["Spring Security"],"date":"2023-02-18T00:00:00.000Z","author":"阮一峰","description":"转载 理解OAuth 2.0 - 阮一峰的网络日志 应用场景 为了理解OAuth的适用场合，让我举一个假设的例子。 有一个\\"云冲印\\"的网站，可以将用户储存在Google的照片，冲印出来。用户为了使用该服务，必须让\\"云冲印\\"读取自己储存在Google上的照片。","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/md/spring/springsecurity/02-oauth2.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"理解 OAuth 2.0"}],["meta",{"property":"og:description","content":"转载 理解OAuth 2.0 - 阮一峰的网络日志 应用场景 为了理解OAuth的适用场合，让我举一个假设的例子。 有一个\\"云冲印\\"的网站，可以将用户储存在Google的照片，冲印出来。用户为了使用该服务，必须让\\"云冲印\\"读取自己储存在Google上的照片。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-20T17:26:35.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2023-02-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-20T17:26:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"理解 OAuth 2.0\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-20T17:26:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"]]},"headers":[{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"名词定义","slug":"名词定义","link":"#名词定义","children":[]},{"level":2,"title":"OAuth的思路","slug":"oauth的思路","link":"#oauth的思路","children":[]},{"level":2,"title":"运行流程","slug":"运行流程","link":"#运行流程","children":[]},{"level":2,"title":"客户端的授权模式","slug":"客户端的授权模式","link":"#客户端的授权模式","children":[]},{"level":2,"title":"授权码模式","slug":"授权码模式","link":"#授权码模式","children":[]},{"level":2,"title":"简化模式","slug":"简化模式","link":"#简化模式","children":[]},{"level":2,"title":"密码模式","slug":"密码模式","link":"#密码模式","children":[]},{"level":2,"title":"客户端模式","slug":"客户端模式","link":"#客户端模式","children":[]},{"level":2,"title":"更新令牌","slug":"更新令牌","link":"#更新令牌","children":[]}],"git":{"createdTime":1676724442000,"updatedTime":1676913995000,"contributors":[{"name":"AlexChen","email":"1274812218@qq.com","commits":3}]},"readingTime":{"minutes":12.14,"words":3643},"filePathRelative":"md/spring/springsecurity/02-oauth2.md","localizedDate":"2023年2月18日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">转载</p>\\n<p><a href=\\"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">理解OAuth 2.0 - 阮一峰的网络日志</a></p>\\n</div>\\n<h2> 应用场景</h2>\\n<p>为了理解OAuth的适用场合，让我举一个假设的例子。</p>\\n<p>有一个\\"云冲印\\"的网站，可以将用户储存在Google的照片，冲印出来。用户为了使用该服务，必须让\\"云冲印\\"读取自己储存在Google上的照片。</p>","autoDesc":true}`);export{e as data};
