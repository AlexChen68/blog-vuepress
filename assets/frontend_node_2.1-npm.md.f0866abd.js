import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.bf9fbf22.js";const m=JSON.parse('{"title":"Npm 包管理器","description":"","frontmatter":{"title":"Npm 包管理器","tag":"npm","date":"2023-05-14T00:00:00.000Z"},"headers":[],"relativePath":"frontend/node/2.1-npm.md","filePath":"frontend/node/2.1-npm.md"}'),p={name:"frontend/node/2.1-npm.md"},o=l(`<h2 id="什么是-npm-包管理器" tabindex="-1">什么是 npm 包管理器？ <a class="header-anchor" href="#什么是-npm-包管理器" aria-label="Permalink to &quot;什么是 npm 包管理器？&quot;">​</a></h2><p>NPM 全称 Node Package Manager，是 Node.js 包管理工具，是全球最大的模块生态系统，里面所有的模块都是开源免费的；也是 Node.js 的包管理工具，相当于后端开发中的 Maven。</p><p>官方网站：<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a></p><p>NPM 有两个主要的功能：</p><ol><li>快速构建 nodejs 工程；</li><li>快速安装和依赖第三方模块。</li></ol><h2 id="npm-的使用" tabindex="-1">npm 的使用 <a class="header-anchor" href="#npm-的使用" aria-label="Permalink to &quot;npm 的使用&quot;">​</a></h2><h3 id="npm-init-初始化命令" tabindex="-1">npm init 初始化命令 <a class="header-anchor" href="#npm-init-初始化命令" aria-label="Permalink to &quot;npm init 初始化命令&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [--force</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-f</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--yes</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-y</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--scope]</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">@scop</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> (same </span><span style="color:#9ECBFF;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">npx</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">@scope</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/create\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">same</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">npx</span><span style="color:#9ECBFF;"> [&lt;@scope&gt;/]create-</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [--force</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-f</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--yes</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-y</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--scope]</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">@scop</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> (same </span><span style="color:#032F62;">as</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">npx</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">@scope</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/create\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">same</span><span style="color:#24292E;"> </span><span style="color:#032F62;">as</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">npx</span><span style="color:#032F62;"> [&lt;@scope&gt;/]create-</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">\`</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用上述命令，可以初始化前端工程，并创建一个名为 <code>package.json</code> 的文件，这个文件包含了工程的描述信息和依赖信息等等。</p><p>例如，初始化一个空工程：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面的命令会在执行命令的文件夹下，直接一个创建 <code>package.json</code> 文件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>npm init</code> 还要一个别名：<code>npm create</code>，也就是说 <code>npm create</code> 等效于 <code>npm init</code></p></div><h3 id="cli-脚手架" tabindex="-1">cli 脚手架 <a class="header-anchor" href="#cli-脚手架" aria-label="Permalink to &quot;cli 脚手架&quot;">​</a></h3><p>使用 <code>npm init -y</code> 可以初始化一个前端工程，但是仅仅包含了一个基本 <code>package.json</code> 文件，没有其他的目录结构，<code>package.json</code> 中也没有其他的依赖，这对于我们正常开发而言，需要自己一个个都添加需要的依赖。</p><p>因此，一些框架提供了创建相应技术栈的脚手架工程，可以作为参数在 <code>npm init</code> 命令中使用，来创建符合实际应用开发的前端工程结构，并将相关的依赖都添加到工程中。</p><p>这些脚手架工程常常被命名为 <code>create-xxx</code>，或者 <code>xxx-cli</code>。</p><p>例如，使用 Vite 提供的模板来创建一个 Vue 工程：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上述命令会做如下的事情：</p><ol><li>如果你本地没有安装 <code>create-vite</code>，它会先提示你安装它，输入 y 即可安装。</li><li>使用 <code>create-vite</code> 模板创建一个工程，期间会通过命令行询问你一些参数，比如工程名、JS 框架等等；</li></ol><p>创建后的工程目录如下：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/blog/frontend/npm%E5%88%9B%E5%BB%BAvite%E5%B7%A5%E7%A8%8B-%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84.png" alt="工程结构.png"></p><h3 id="npm-install-安装依赖" tabindex="-1">npm install 安装依赖 <a class="header-anchor" href="#npm-install-安装依赖" aria-label="Permalink to &quot;npm install 安装依赖&quot;">​</a></h3><p>完整的命令列表：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> (with </span><span style="color:#9ECBFF;">no</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">args,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dir</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">tag</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version range</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">git-hos</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">:</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">git-use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">repo-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">tarball</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fil</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">tarball</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">folde</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">alias</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span></span>
<span class="line"><span style="color:#B392F0;">common</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">options:</span><span style="color:#E1E4E8;"> [-P</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--save-prod</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-D</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--save-dev</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">-O</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--save-optional]</span><span style="color:#E1E4E8;"> [-E</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--save-exact]</span><span style="color:#E1E4E8;"> [-B</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--save-bundle]</span><span style="color:#E1E4E8;"> [--no-save] [--dry-run]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> (with </span><span style="color:#032F62;">no</span><span style="color:#24292E;"> </span><span style="color:#032F62;">args,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dir</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">@</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">tag</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">@</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">@</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version range</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">git-hos</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">:</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">git-use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">repo-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">tarball</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fil</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">tarball</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">folde</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">alias</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span></span>
<span class="line"><span style="color:#6F42C1;">common</span><span style="color:#24292E;"> </span><span style="color:#032F62;">options:</span><span style="color:#24292E;"> [-P</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--save-prod</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-D</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--save-dev</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">-O</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--save-optional]</span><span style="color:#24292E;"> [-E</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--save-exact]</span><span style="color:#24292E;"> [-B</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--save-bundle]</span><span style="color:#24292E;"> [--no-save] [--dry-run]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>下面介绍几种常用用法和参数。</p><h4 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">@</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">versio</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">@</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">versio</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npm install &lt;name&gt;@&lt;version&gt;</code> 命令用来从 npm 仓库下载依赖包到项目的 <code>\\node_modules</code> 文件夹下；如果使用 <code>-g</code> 参数表示全局下载，会下载到 node 安装目录的 <code>\\node_modules</code> 文件夹下。</p><p>常用的使用情况有三种：</p><ol><li>直接使用 <code>npm install &lt;name&gt;@&lt;version&gt;</code> 命令安装依赖会自动在项目目录下添加 <code>package-lock.json</code> 文件，这个文件帮助锁定安装包的版本。同时 <code>package.json</code> 文件中，依赖包会被添加到 <code>dependencies</code> 节点下，类似 maven 中的 <code>&lt;dependencies&gt;</code>。</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql@1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>如果不添加 <code>version</code> 参数，默认安装最新版本。</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>如果不指定依赖名称，则会读取 <code>package.json</code> 文件的依赖项，安装整个项目的依赖。</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>更多命令使用情况可以参见 <a href="https://www.npmjs.cn/cli/install/" target="_blank" rel="noreferrer">官方文档 - 中文版</a></p><h4 id="常用参数" tabindex="-1">常用参数 <a class="header-anchor" href="#常用参数" aria-label="Permalink to &quot;常用参数&quot;">​</a></h4><p><code>npm install</code> 命令还有几个常用的参数：</p><ul><li><code>--save-prod/-P</code></li></ul><p>使用该命令后，会在 <code>package.json</code> 的 <code>dependencies</code> 中出现，是生产环境依赖；该命令是默认命令。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">等同于</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-prod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">等同于</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-P</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">等同于</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">等同于</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-prod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">等同于</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-P</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">等同于</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>--save-dev/-D</code></li></ul><p>使用该命令后，依赖包会出现在 <code>package.json</code> 的 <code>devDependencies</code> 中；</p><p>表示开发环境依赖。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">等同于</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">等同于</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>-g/--global</code></li></ul><p>全局安装依赖；可以直接在命令行中使用。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>--no-save</code></li></ul><p>防止保存到 <code>dependencies</code>。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="npm-update-更新依赖" tabindex="-1">npm update 更新依赖 <a class="header-anchor" href="#npm-update-更新依赖" aria-label="Permalink to &quot;npm update 更新依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> [-g] [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">pkg</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> [-g] [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">pkg</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">...]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此命令会将列出的所有包更新为最新版本（由 <code>tag</code> 配置指定）;它还将安装缺少的软件包。</p><p><code>dependencies</code> 的依赖项版本号前面，常常会有 <code>^</code> 或 <code>~</code> 修饰，在使用 <code>npm udpate</code> 命令更新时，这两者是有区别的：</p><ul><li><code>^</code> 修饰的依赖会更新到最新的大版本，例如：<code>^1.1.1</code> 可以更新到 <code>^2.0.0</code>；</li><li><code>~</code> 修饰的依赖只能更新到该大版本下的最新版本，例如：<code>~1.2.3</code> 只能更新到 <code>~1.4.0</code>，而不能更新到 <code>~2.0.0</code>，最前面的大版本 <code>1</code> 不能变更。</li></ul><h3 id="npm-uninstall-卸载依赖" tabindex="-1">npm uninstall 卸载依赖 <a class="header-anchor" href="#npm-uninstall-卸载依赖" aria-label="Permalink to &quot;npm uninstall 卸载依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> [&lt;@scope&gt;/]</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">pkg</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">[@</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]... [-S</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">--save</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">-D</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">--save-dev</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">-O</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">--save-optional</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">--no-save]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> [&lt;@scope&gt;/]</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">pkg</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">[@</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]... [-S</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">--save</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">-D</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">--save-dev</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">-O</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">--save-optional</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">--no-save]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npm uninstall</code> 与 <code>npm install</code> 相对应，参数也与其一致。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.npmjs.cn/" target="_blank" rel="noreferrer">npm 中文文档</a></li></ul>`,63),e=[o];function t(c,r,y,i,E,d){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{m as __pageData,b as default};
