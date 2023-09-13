import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.bf9fbf22.js";const h=JSON.parse('{"title":"Docker registry","description":"Docker 仓库","frontmatter":{"title":"Docker registry","date":"2023-01-28T00:00:00.000Z","description":"Docker 仓库"},"headers":[],"relativePath":"devops/docker/1.6-registry.md","filePath":"devops/docker/1.6-registry.md"}'),n={name:"devops/docker/1.6-registry.md"},l=o(`<h2 id="什么是-docker-repository" tabindex="-1">什么是 Docker Repository？ <a class="header-anchor" href="#什么是-docker-repository" aria-label="Permalink to &quot;什么是 Docker Repository？&quot;">​</a></h2><p>仓库（Repository）是集中存放镜像的地方。</p><p>一个容易混淆的概念是注册服务器（Registry）。实际上注册服务器是管理仓库的具体服务器，每个服务器上可以有多个仓库，而每个仓库下面有多个镜像。从这方面来说，仓库可以被认为是一个具体的项目或目录。例如对于仓库地址 docker.io/ubuntu 来说，docker.io 是注册服务器地址，ubuntu 是仓库名。</p><p>大部分时候，并不需要严格区分这两者的概念。</p><h2 id="docker-hub" tabindex="-1">Docker Hub <a class="header-anchor" href="#docker-hub" aria-label="Permalink to &quot;Docker Hub&quot;">​</a></h2><p>Docker Hub 是 Docker 官方维护的一个公共仓库，大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。</p><p>Docker hub 的地址 <a href="https://hub.docker.com" target="_blank" rel="noreferrer">https://hub.docker.com</a>，你需要注册一个 Docker hub 账号，才能在 Docker Hub 上面创建自己的镜像仓库。</p><p>在本地的 Dcoker cli 中，你可以通过 <code>docker login</code> 来登录 Docker hub、<code>docker logout</code> 来注销登录。</p><h2 id="私有仓库" tabindex="-1">私有仓库 <a class="header-anchor" href="#私有仓库" aria-label="Permalink to &quot;私有仓库&quot;">​</a></h2><p>有时候使用 Docker Hub 这样的公共仓库可能不方便，用户可以创建一个本地仓库供私人使用。</p><p><a href="https://docs.docker.com/registry/" target="_blank" rel="noreferrer">docker-registry</a> 是官方提供的工具，可以用于构建私有的镜像仓库。</p><p>具体案例可以参考 <a href="https://docs.docker.com/registry/#basic-commands" target="_blank" rel="noreferrer">Reference - Docekr registry</a>。</p><h2 id="nexus3-x-的私有仓库" tabindex="-1">Nexus3.x 的私有仓库 <a class="header-anchor" href="#nexus3-x-的私有仓库" aria-label="Permalink to &quot;Nexus3.x 的私有仓库&quot;">​</a></h2><p>使用 Docker 官方的 Registry 创建的仓库面临一些维护问题。比如某些镜像删除以后空间默认是不会回收的，需要一些命令去回收空间然后重启 Registry。在企业中把内部的一些工具包放入 Nexus 中是比较常见的做法，最新版本 Nexus3.x 全面支持 Docker 的私有镜像。所以使用 Nexus3.x (opens new window) 一个软件来管理 Docker , Maven , Yum , PyPI 等是一个明智的选择。</p><p><strong>启动一个 nexus3 容器：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nexus3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--restart=always</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8081</span><span style="color:#9ECBFF;">:8081</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5000</span><span style="color:#9ECBFF;">:5000</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sonatype/nexus3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nexus3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--restart=always</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8081</span><span style="color:#032F62;">:8081</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5000</span><span style="color:#032F62;">:5000</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sonatype/nexus3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里的 8081 为 Nexus3 的网页开放端口，5000 是为 Docker 仓库预留的端口。</p><p>容器启动后，打开 localhost:8081 访问 Nexus 界面，可以从右上角点击登录，用户名为 admin，密码需要使用如下命令获取：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nexus3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/nexus-data/admin.password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nexus3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/nexus-data/admin.password</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>首次登录后需要更改密码，并设置匿名访问策略。</p><p><strong>之后，我们就可以创建 Docker 仓库了：</strong></p><p>创建一个私有仓库的方法： <code>Repository-&gt;Repositories</code> 点击右边菜单 <code>Create repository</code> 选择 <code>docker (hosted)</code></p><ul><li><strong>Name</strong>: 仓库的名称</li><li><strong>HTTP</strong>: 仓库单独的访问端口（例如：<strong>5000</strong>）</li><li><strong>Hosted -&gt; Deployment pollcy</strong>: 请选择 <strong>Allow redeploy</strong> 否则无法上传 Docker 镜像。</li></ul><p>其它的仓库创建方法请各位自己摸索，还可以创建一个 <code>docker (proxy)</code> 类型的仓库链接到 DockerHub 上。再创建一个 <code>docker (group)</code> 类型的仓库把刚才的 <code>hosted</code> 与 <code>proxy</code> 添加在一起。主机在访问的时候默认下载私有仓库中的镜像，如果没有将链接到 DockerHub 中下载并缓存到 Nexus 中。</p><p><strong>此外，我们还需要添加用户和访问权限：</strong></p><ul><li><p>菜单 <code>Security-&gt;Realms</code> 把 Docker Bearer Token Realm 移到右边的框中保存。</p></li><li><p>添加用户规则：菜单 <code>Security-&gt;Roles</code>-&gt;<code>Create role</code> 在 <code>Privlleges</code> 选项搜索 docker 把相应的规则移动到右边的框中然后保存。</p></li><li><p>添加用户：菜单 <code>Security-&gt;Users</code>-&gt;<code>Create local user</code> 在 <code>Roles</code> 选项中选中刚才创建的规则移动到右边的窗口保存。</p></li></ul><p><strong>接下来，我们来测试一下，上传一个镜像到 Nexus 的 Docker 仓库</strong></p><ol><li>拉取一个 ubuntu 镜像</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubuntu</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubuntu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>标记 ubuntu 镜像，归入在 Nexus 创建的 Docker 仓库</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubuntu</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:5000/myfirstimage</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">image</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubuntu</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:5000/myfirstimage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>登录该 Docker 仓库；输入用户名和密码，具体参考上面的<strong>添加用户和权限</strong></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:5000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:5000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>push 镜像到 Docker 仓库</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:5000/myfirstimage</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:5000/myfirstimage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行完成就可以在 nexus 看到镜像了。</p><ol start="5"><li>pull 镜像到本地 (先删除本地镜像再拉取)</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">删除本地镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rmi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:5000/myfirstimage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">从</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Nexus</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">拉取镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:5000/myfirstimage</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">删除本地镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rmi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:5000/myfirstimage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">从</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Nexus</span><span style="color:#24292E;"> </span><span style="color:#032F62;">拉取镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:5000/myfirstimage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://vuepress.mirror.docker-practice.com/repository/nexus3_registry/" target="_blank" rel="noreferrer">Docker 从入门到实践</a></li><li><a href="https://docs.docker.com/registry/" target="_blank" rel="noreferrer">Docker Reference - registry</a></li></ul>`,40),p=[l];function r(c,t,i,d,y,u){return a(),e("div",null,p)}const b=s(n,[["render",r]]);export{h as __pageData,b as default};
