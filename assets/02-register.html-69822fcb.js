import{_ as t,V as l,W as c,X as s,Y as a,Z as e,a0 as o,D as p}from"./framework-82df2182.js";const i={},r=o('<h2 id="什么是注册中心" tabindex="-1"><a class="header-anchor" href="#什么是注册中心" aria-hidden="true">#</a> 什么是注册中心</h2><h2 id="alibaba-nacos-组件" tabindex="-1"><a class="header-anchor" href="#alibaba-nacos-组件" aria-hidden="true">#</a> Alibaba Nacos 组件</h2><h3 id="nacos-是什么" tabindex="-1"><a class="header-anchor" href="#nacos-是什么" aria-hidden="true">#</a> Nacos 是什么？</h3><p>Nacos 是 Dynamic Naming and Configuration Service 的缩写，动态命名和配置服务。</p><p>Nacos 是阿里开源的注册中心 + 配置中心服务。</p>',5),d={href:"https://nacos.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"},u=o(`<h3 id="docker-安装-nacos-使用-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#docker-安装-nacos-使用-mysql-数据库" aria-hidden="true">#</a> Docker 安装 Nacos（使用 Mysql 数据库）</h3><ol><li>下载 Nacos 镜像</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run nacos/nacos-server:v2.2.0-slim
</code></pre></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>为什么下载 slim 版本：因为使用的 Mac M1，需要使用支持 arm 架构的镜像。</p></div><ol start="2"><li>获取 Nacos 数据库初始化 SQL 文件</li></ol>`,5),b={href:"https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql%5Bhttps://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql%5D%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/alibaba/nacos/releases/tag/2.2.0",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"conf",-1),h=s("code",null,"mysql-schema.sql",-1),v=o(`<p>方式三：从容器的 <code>/usr/local/nacos/config</code> 路径下，获取 <code>mysql-schema.sql</code> 文件。</p><ol start="3"><li>数据库初始化</li></ol><p>使用第 2 步获取的 Mysql 文件初始化数据库。</p><ol start="4"><li>启动容器，通过配置 mysql 参数，使用外部的 Mysql 数据库存储配置</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token punctuation">\\</span>
<span class="token parameter variable">--link</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/nacos/data:/home/nacos/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/nacos/config:/home/nacos/config <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>zeus_nacos <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
nacos/nacos-server:v2.2.0-slim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>如果使用内置数据库启动</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nacos <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848  nacos/nacos-server:v2.2.0-slim
</code></pre></div><h3 id="源码启动-nacos-使用-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#源码启动-nacos-使用-mysql-数据库" aria-hidden="true">#</a> 源码启动 Nacos（使用 Mysql 数据库）</h3><ol><li>下载 Nacos 源码</li></ol>`,9),_={href:"https://github.com/alibaba/nacos/releases/tag/2.0.3",target:"_blank",rel:"noopener noreferrer"},g=o(`<p><code>nacos</code> 目录下的 <code>console</code> 文件夹即为启动 Nacos 的模块，其主类 <code>Nacos</code> 为启动类。</p><ol start="2"><li>编译源码</li></ol><p>依次执行 maven 的 clear 和 compile 命令（可跳过 test），耐心等待。</p><ol start="3"><li>设置单机模式</li></ol><p>单机启动有两种方法：</p><ul><li>在 main 方法中，添加属性设置，设置为单机启动：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 单机模式启动</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">STANDALONE_MODE_PROPERTY_NAME</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Nacos</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>或者在 idea 运行配置中，添加 VM 参数：</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Dstandalone</span><span class="token operator">=</span>true
</code></pre></div><ol start="4"><li>启动 Nacos</li></ol><p>执行 <code>console</code> 模块的 <code>Nacos</code> 类的 <code>main</code> 方法，如果有缺失类和方法的情况，应该是没有编译成功导致的，尝试重复第 2 步。</p><ol start="5"><li>打开 Nacos 界面</li></ol>`,12),f={href:"http://localhost:8848/nacos/index.html",target:"_blank",rel:"noopener noreferrer"},N=s("p",null,[a("默认的账号密码皆为 "),s("code",null,"nacos"),a("。")],-1),E={class:"hint-container info"},y=s("p",{class:"hint-container-title"},"相关信息",-1),S=s("code",null,"io.spring.nacos",-1),M={href:"https://www.cnblogs.com/huilangyizu/articles/16665305.html",target:"_blank",rel:"noopener noreferrer"};function q(x,R){const n=p("ExternalLinkIcon");return l(),c("div",null,[r,s("p",null,[a("Nacos 官网地址："),s("a",d,[a("https://nacos.io/zh-cn/"),e(n)])]),u,s("p",null,[a("方式一：从 github 中下载: "),s("a",b,[a("https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql[https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql]；"),e(n)])]),s("p",null,[a("方式二：从 Nacos 的 "),s("a",k,[a("Release"),e(n)]),a(" 版本中下载压缩包版本，"),m,a(" 文件夹下的 "),h,a(" 文件即为 Mysql 数据库初始化脚本；")]),v,s("p",null,[a("从 Github Release 中下载源码压缩包 "),s("a",_,[a("Source code.zip"),e(n)]),a("(一定要使用稳定版本，推荐 2.0.3)，并解压缩到本地；")]),g,s("p",null,[a("Nacos 本地的地址默认为 "),s("a",f,[a("http://localhost:8848/nacos/index.html"),e(n)]),a(";")]),N,s("div",E,[y,s("p",null,[a("如果想将 Nacos 单独拎出来，放入自己的工程中，会出现从无法找到 Nacos 其他基础组件的问题，可以使用第三方 Mavne 库 "),S,a("，具体可以参考这篇文章 "),s("a",M,[a("若依 + nacos 源码启动"),e(n)]),a("。")])])])}const I=t(i,[["render",q],["__file","02-register.html.vue"]]);export{I as default};
