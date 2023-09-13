import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.bf9fbf22.js";const m=JSON.parse('{"title":"理解 OAuth 2.0","description":"","frontmatter":{"title":"理解 OAuth 2.0","date":"2023-02-18T00:00:00.000Z","author":"阮一峰"},"headers":[],"relativePath":"spring/springsecurity/2.0-oauth2.md","filePath":"spring/springsecurity/2.0-oauth2.md"}'),l={name:"spring/springsecurity/2.0-oauth2.md"},o=p(`<div class="info custom-block"><p class="custom-block-title">转载</p><p><a href="http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html" target="_blank" rel="noreferrer">理解 OAuth 2.0 - 阮一峰的网络日志</a></p></div><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><p>为了理解 OAuth 的适用场合，让我举一个假设的例子。</p><p>有一个&quot;云冲印&quot;的网站，可以将用户储存在 Google 的照片，冲印出来。用户为了使用该服务，必须让&quot;云冲印&quot;读取自己储存在 Google 上的照片。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051202.png" alt=""></p><p>问题是只有得到用户的授权，Google 才会同意&quot;云冲印&quot;读取这些照片。那么，&quot;云冲印&quot;怎样获得用户的授权呢？</p><p>传统方法是，用户将自己的 Google 用户名和密码，告诉&quot;云冲印&quot;，后者就可以读取用户的照片了。这样的做法有以下几个严重的缺点。</p><div class="info custom-block"><p class="custom-block-title">缺点</p><p>（1）&quot;云冲印&quot;为了后续的服务，会保存用户的密码，这样很不安全。</p><p>（2）Google 不得不部署密码登录，而我们知道，单纯的密码登录并不安全。</p><p>（3）&quot;云冲印&quot;拥有了获取用户储存在 Google 所有资料的权力，用户没法限制&quot;云冲印&quot;获得授权的范围和有效期。</p><p>（4）用户只有修改密码，才能收回赋予&quot;云冲印&quot;的权力。但是这样做，会使得其他所有获得用户授权的第三方应用程序全部失效。</p><p>（5）只要有一个第三方应用程序被破解，就会导致用户密码泄漏，以及所有被密码保护的数据泄漏。</p></div><p>OAuth 就是为了解决上面这些问题而诞生的。</p><h2 id="名词定义" tabindex="-1">名词定义 <a class="header-anchor" href="#名词定义" aria-label="Permalink to &quot;名词定义&quot;">​</a></h2><p>在详细讲解 OAuth 2.0 之前，需要了解几个专用名词。它们对读懂后面的讲解，尤其是几张图，至关重要。</p><div class="info custom-block"><p class="custom-block-title">名词定义</p><p>（1）Third-party application：第三方应用程序，本文中又称&quot;客户端&quot;（client），即上一节例子中的&quot;云冲印&quot;。</p><p>（2）HTTP service：HTTP 服务提供商，本文中简称&quot;服务提供商&quot;，即上一节例子中的 Google。</p><p>（3）Resource Owner：资源所有者，本文中又称&quot;用户&quot;（user）。</p><p>（4）User Agent：用户代理，本文中就是指浏览器。</p><p>（5）Authorization server：认证服务器，即服务提供商专门用来处理认证的服务器。</p><p>（6）Resource server：资源服务器，即服务提供商存放用户生成的资源的服务器。它与认证服务器，可以是同一台服务器，也可以是不同的服务器。</p></div><p>知道了上面这些名词，就不难理解，OAuth 的作用就是让&quot;客户端&quot;安全可控地获取&quot;用户&quot;的授权，与&quot;服务商提供商&quot;进行互动。</p><h2 id="oauth-的思路" tabindex="-1">OAuth 的思路 <a class="header-anchor" href="#oauth-的思路" aria-label="Permalink to &quot;OAuth 的思路&quot;">​</a></h2><p>OAuth 在&quot;客户端&quot;与&quot;服务提供商&quot;之间，设置了一个授权层（authorization layer）。&quot;客户端&quot;不能直接登录&quot;服务提供商&quot;，只能登录授权层，以此将用户与客户端区分开来。&quot;客户端&quot;登录授权层所用的令牌（token），与用户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效期。</p><p>&quot;客户端&quot;登录授权层以后，&quot;服务提供商&quot;根据令牌的权限范围和有效期，向&quot;客户端&quot;开放用户储存的资料。</p><h2 id="运行流程" tabindex="-1">运行流程 <a class="header-anchor" href="#运行流程" aria-label="Permalink to &quot;运行流程&quot;">​</a></h2><p>OAuth 2.0 的运行流程如下图，摘自 RFC 6749。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051203.png" alt=""></p><div class="info custom-block"><p class="custom-block-title">流程</p><p>（A）用户打开客户端以后，客户端要求用户给予授权。</p><p>（B）用户同意给予客户端授权。</p><p>（C）客户端使用上一步获得的授权，向认证服务器申请令牌。</p><p>（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。</p><p>（E）客户端使用令牌，向资源服务器申请获取资源。</p><p>（F）资源服务器确认令牌无误，同意向客户端开放资源。</p></div><p>不难看出来，上面六个步骤之中，B 是关键，即用户怎样才能给于客户端授权。有了这个授权以后，客户端就可以获取令牌，进而凭令牌获取资源。</p><p>下面一一讲解客户端获取授权的四种模式。</p><h2 id="客户端的授权模式" tabindex="-1">客户端的授权模式 <a class="header-anchor" href="#客户端的授权模式" aria-label="Permalink to &quot;客户端的授权模式&quot;">​</a></h2><p>客户端必须得到用户的授权（authorization grant），才能获得令牌（access token）。OAuth 2.0 定义了四种授权方式。</p><ul><li>授权码模式（authorization code）</li><li>简化模式（implicit）</li><li>密码模式（resource owner password credentials）</li><li>客户端模式（client credentials）</li></ul><h2 id="授权码模式" tabindex="-1">授权码模式 <a class="header-anchor" href="#授权码模式" aria-label="Permalink to &quot;授权码模式&quot;">​</a></h2><p>授权码模式（authorization code）是功能最完整、流程最严密的授权模式。它的特点就是通过客户端的后台服务器，与&quot;服务提供商&quot;的认证服务器进行互动。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051204.png" alt=""></p><p>它的步骤如下：</p><div class="info custom-block"><p class="custom-block-title">授权码模式步骤</p><p>（A）用户访问客户端，后者将前者导向认证服务器。</p><p>（B）用户选择是否给予客户端授权。</p><p>（C）假设用户给予授权，认证服务器将用户导向客户端事先指定的&quot;重定向 URI&quot;（redirection URI），同时附上一个授权码。</p><p>（D）客户端收到授权码，附上早先的&quot;重定向 URI&quot;，向认证服务器申请令牌。这一步是在客户端的后台的服务器上完成的，对用户不可见。</p><p>（E）认证服务器核对了授权码和重定向 URI，确认无误后，向客户端发送访问令牌（access token）和更新令牌（refresh token）。</p></div><p>下面是上面这些步骤所需要的参数。</p><p>A 步骤中，客户端申请认证的 URI，包含以下参数：</p><ul><li>response_type：表示授权类型，必选项，此处的值固定为&quot;code&quot;</li><li>client_id：表示客户端的 ID，必选项</li><li>redirect_uri：表示重定向 URI，可选项</li><li>scope：表示申请的权限范围，可选项</li><li>state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。</li></ul><p>下面是一个例子。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /authorize?response_type=code&amp;client_id=s6BhdRkqt3&amp;state=xyz</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">redirect_uri=</span><span style="color:#9ECBFF;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /authorize?response_type=code&amp;client_id=s6BhdRkqt3&amp;state=xyz</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">redirect_uri=</span><span style="color:#032F62;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>C 步骤中，服务器回应客户端的 URI，包含以下参数：</p><ul><li>code：表示授权码，必选项。该码的有效期应该很短，通常设为 10 分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端 ID 和重定向 URI，是一一对应关系。</li><li>state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HTTP/1.1 302 Found</span></span>
<span class="line"><span style="color:#85E89D;">Location</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA&amp;state=xyz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HTTP/1.1 302 Found</span></span>
<span class="line"><span style="color:#22863A;">Location</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA&amp;state=xyz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>D 步骤中，客户端向认证服务器申请令牌的 HTTP 请求，包含以下参数：</p><ul><li>grant_type：表示使用的授权模式，必选项，此处的值固定为&quot;authorization_code&quot;。</li><li>code：表示上一步获得的授权码，必选项。</li><li>redirect_uri：表示重定向 URI，必选项，且必须与 A 步骤中的该参数值保持一致。</li><li>client_id：表示客户端 ID，必选项。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /token </span><span style="color:#F97583;">HTTP</span><span style="color:#E1E4E8;">/</span><span style="color:#79B8FF;">1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">grant_type=authorization_code&amp;code=SplxlOBeZQQYbYS6WxSbIA</span></span>
<span class="line"><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">redirect_uri=</span><span style="color:#9ECBFF;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /token </span><span style="color:#D73A49;">HTTP</span><span style="color:#24292E;">/</span><span style="color:#005CC5;">1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">grant_type=authorization_code&amp;code=SplxlOBeZQQYbYS6WxSbIA</span></span>
<span class="line"><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">redirect_uri=</span><span style="color:#032F62;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>E 步骤中，认证服务器发送的 HTTP 回复，包含以下参数：</p><ul><li>access_token：表示访问令牌，必选项。</li><li>token_type：表示令牌类型，该值大小写不敏感，必选项，可以是 bearer 类型或 mac 类型。</li><li>expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间。</li><li>refresh_token：表示更新令牌，用来获取下一次的访问令牌，可选项。</li><li>scope：表示权限范围，如果与客户端申请的范围一致，此项可省略。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#85E89D;">Cache-Control</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-store</span></span>
<span class="line"><span style="color:#85E89D;">Pragma</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;access_token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;token_type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;expires_in&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;refresh_token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;tGzv3JOkF0XG5Qx2TlKWIA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;example_parameter&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#22863A;">Cache-Control</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-store</span></span>
<span class="line"><span style="color:#22863A;">Pragma</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;access_token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;token_type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;expires_in&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;refresh_token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;tGzv3JOkF0XG5Qx2TlKWIA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;example_parameter&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从上面代码可以看到，相关参数使用 JSON 格式发送（Content-Type: application/json）。此外，HTTP头信息中明确指定不得缓存。</p><h2 id="简化模式" tabindex="-1">简化模式 <a class="header-anchor" href="#简化模式" aria-label="Permalink to &quot;简化模式&quot;">​</a></h2><p>简化模式（implicit grant type）不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了&quot;授权码&quot;这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051205.png" alt=""></p><p>它的步骤如下：</p><div class="info custom-block"><p class="custom-block-title">简化模式步骤</p><p>（A）客户端将用户导向认证服务器。</p><p>（B）用户决定是否给于客户端授权。</p><p>（C）假设用户给予授权，认证服务器将用户导向客户端指定的&quot;重定向 URI&quot;，并在 URI 的 Hash 部分包含了访问令牌。</p><p>（D）浏览器向资源服务器发出请求，其中不包括上一步收到的 Hash 值。</p><p>（E）资源服务器返回一个网页，其中包含的代码可以获取 Hash 值中的令牌。</p><p>（F）浏览器执行上一步获得的脚本，提取出令牌。</p><p>（G）浏览器将令牌发给客户端。</p></div><p>下面是上面这些步骤所需要的参数。</p><p>A 步骤中，客户端发出的 HTTP 请求，包含以下参数：</p><ul><li>response_type：表示授权类型，此处的值固定为&quot;token&quot;，必选项。</li><li>client_id：表示客户端的 ID，必选项。</li><li>redirect_uri：表示重定向的 URI，可选项。</li><li>scope：表示权限范围，可选项。</li><li>state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /authorize?response_type=token&amp;client_id=s6BhdRkqt3&amp;state=xyz</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">redirect_uri=</span><span style="color:#9ECBFF;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /authorize?response_type=token&amp;client_id=s6BhdRkqt3&amp;state=xyz</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">redirect_uri=</span><span style="color:#032F62;">https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>C 步骤中，认证服务器回应客户端的 URI，包含以下参数：</p><ul><li>access_token：表示访问令牌，必选项。</li><li>token_type：表示令牌类型，该值大小写不敏感，必选项。</li><li>expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间。</li><li>scope：表示权限范围，如果与客户端申请的范围一致，此项可省略。</li><li>state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HTTP/1.1 302 Found</span></span>
<span class="line"><span style="color:#85E89D;">Location</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA&amp;state=xyz&amp;token_type=example&amp;expires_in=3600</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HTTP/1.1 302 Found</span></span>
<span class="line"><span style="color:#22863A;">Location</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA&amp;state=xyz&amp;token_type=example&amp;expires_in=3600</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在上面的例子中，认证服务器用 HTTP 头信息的 Location 栏，指定浏览器重定向的网址。注意，在这个网址的 Hash 部分包含了令牌。</p><p>根据上面的 D 步骤，下一步浏览器会访问 Location 指定的网址，但是 Hash 部分不会发送。接下来的 E 步骤，服务提供商的资源服务器发送过来的代码，会提取出 Hash 中的令牌。</p><h2 id="密码模式" tabindex="-1">密码模式 <a class="header-anchor" href="#密码模式" aria-label="Permalink to &quot;密码模式&quot;">​</a></h2><p>密码模式（Resource Owner Password Credentials Grant）中，用户向客户端提供自己的用户名和密码。客户端使用这些信息，向&quot;服务商提供商&quot;索要授权。</p><p>在这种模式中，用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分，或者由一个著名公司出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051206.png" alt=""></p><p>它的步骤如下：</p><div class="info custom-block"><p class="custom-block-title">密码模式步骤</p><p>（A）用户向客户端提供用户名和密码。</p><p>（B）客户端将用户名和密码发给认证服务器，向后者请求令牌。</p><p>（C）认证服务器确认无误后，向客户端提供访问令牌。</p></div><p>B 步骤中，客户端发出的 HTTP 请求，包含以下参数：</p><ul><li>grant_type：表示授权类型，此处的值固定为&quot;password&quot;，必选项。</li><li>username：表示用户名，必选项。</li><li>password：表示用户的密码，必选项。</li><li>scope：表示权限范围，可选项。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /token </span><span style="color:#F97583;">HTTP</span><span style="color:#E1E4E8;">/</span><span style="color:#79B8FF;">1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">grant_type=password&amp;username=johndoe&amp;password=A3ddj3w</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /token </span><span style="color:#D73A49;">HTTP</span><span style="color:#24292E;">/</span><span style="color:#005CC5;">1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">grant_type=password&amp;username=johndoe&amp;password=A3ddj3w</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>C 步骤中，认证服务器向客户端发送访问令牌，下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#85E89D;">Cache-Control</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-store</span></span>
<span class="line"><span style="color:#85E89D;">Pragma</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;access_token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;token_type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;expires_in&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;refresh_token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;tGzv3JOkF0XG5Qx2TlKWIA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;example_parameter&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#22863A;">Cache-Control</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-store</span></span>
<span class="line"><span style="color:#22863A;">Pragma</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;access_token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;token_type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;expires_in&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;refresh_token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;tGzv3JOkF0XG5Qx2TlKWIA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;example_parameter&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>上面代码中，各个参数的含义参见《授权码模式》一节。</p><p>整个过程中，客户端不得保存用户的密码。</p><h2 id="客户端模式" tabindex="-1">客户端模式 <a class="header-anchor" href="#客户端模式" aria-label="Permalink to &quot;客户端模式&quot;">​</a></h2><p>客户端模式（Client Credentials Grant）指客户端以自己的名义，而不是以用户的名义，向&quot;服务提供商&quot;进行认证。严格地说，客户端模式并不属于 OAuth 框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求&quot;服务提供商&quot;提供服务，其实不存在授权问题。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051207.png" alt=""></p><p>它的步骤如下：</p><div class="info custom-block"><p class="custom-block-title">客户端模式步骤</p><p>（A）客户端向认证服务器进行身份认证，并要求一个访问令牌。</p><p>（B）认证服务器确认无误后，向客户端提供访问令牌。</p></div><p>A 步骤中，客户端发出的 HTTP 请求，包含以下参数：</p><ul><li>grant_type：表示授权类型，此处的值固定为&quot;client_credentials&quot;，必选项。</li><li>scope：表示权限范围，可选项。</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /token </span><span style="color:#F97583;">HTTP</span><span style="color:#E1E4E8;">/</span><span style="color:#79B8FF;">1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">grant_type=client_credentials</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /token </span><span style="color:#D73A49;">HTTP</span><span style="color:#24292E;">/</span><span style="color:#005CC5;">1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">grant_type=client_credentials</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>认证服务器必须以某种方式，验证客户端身份。</p><p>B 步骤中，认证服务器向客户端发送访问令牌，下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#85E89D;">Cache-Control</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-store</span></span>
<span class="line"><span style="color:#85E89D;">Pragma</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;access_token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;token_type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;expires_in&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;example_parameter&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json;charset=UTF-8</span></span>
<span class="line"><span style="color:#22863A;">Cache-Control</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-store</span></span>
<span class="line"><span style="color:#22863A;">Pragma</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;access_token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;2YotnFZFEjr1zCsicMWpAA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;token_type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;expires_in&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;example_parameter&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;example_value&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>上面代码中，各个参数的含义参见《授权码模式》一节。</p><h2 id="更新令牌" tabindex="-1">更新令牌 <a class="header-anchor" href="#更新令牌" aria-label="Permalink to &quot;更新令牌&quot;">​</a></h2><p>如果用户访问的时候，客户端的&quot;访问令牌&quot;已经过期，则需要使用&quot;更新令牌&quot;申请一个新的访问令牌。</p><p>客户端发出更新令牌的 HTTP 请求，包含以下参数：</p><ul><li>grant_type：表示使用的授权模式，此处的值固定为&quot;refreshtoken&quot;，必选项。</li><li>refresh_token：表示早前收到的更新令牌，必选项。</li><li>scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致。</li></ul><p>下面是一个例子：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> /token </span><span style="color:#F97583;">HTTP</span><span style="color:#E1E4E8;">/</span><span style="color:#79B8FF;">1.1</span></span>
<span class="line"><span style="color:#85E89D;">Host</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.example.com</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">grant_type=refresh_token&amp;refresh_token=tGzv3JOkF0XG5Qx2TlKWIA</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> /token </span><span style="color:#D73A49;">HTTP</span><span style="color:#24292E;">/</span><span style="color:#005CC5;">1.1</span></span>
<span class="line"><span style="color:#22863A;">Host</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.example.com</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/x-www-form-urlencoded</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">grant_type=refresh_token&amp;refresh_token=tGzv3JOkF0XG5Qx2TlKWIA</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,96),e=[o];function t(c,r,i,y,u,E){return a(),n("div",null,e)}const b=s(l,[["render",t]]);export{m as __pageData,b as default};
