const page = document.body.dataset.page || 'home';
const root = page === 'home' ? './' : '../';
const pages = [
  { key: 'home', label: '开始页', href: root + 'index.html' },
  { key: 'about', label: '个人简介', href: root + 'about/index.html' },
  { key: 'impact', label: '社媒作品', href: root + 'impact/index.html' },
  { key: 'social', label: '社媒与增长', href: root + 'social/index.html' },
];
const index = pages.findIndex(item => item.key === page);
const nav = pages.map(item => `<a href="${item.href}" ${item.key === page ? 'aria-current="page"' : ''}>${item.label}</a>`).join('');
const shellTop = `<header class="site-header"><a class="wordmark" href="/" aria-label="梁雅熔作品集首页">PORTOFOLIO</a><nav class="desktop-nav" aria-label="主导航">${nav}</nav><button class="menu-button" aria-expanded="false" aria-controls="mobile-nav" aria-label="打开导航菜单"><span></span><span></span></button></header><nav class="mobile-nav" id="mobile-nav" aria-label="移动导航" hidden>${nav}</nav>`;
const footer = `<footer class="site-footer contact-footer" aria-labelledby="contact-title"><div class="contact-footer-glow" aria-hidden="true"></div><header class="contact-footer-head"><span>CONTACT / 联系方式</span><h2 id="contact-title">LET'S<br>CONNECT.</h2></header><div class="contact-footer-body"><section class="contact-wechat"><button type="button" class="contact-copy" data-copy="Libether_cedar" aria-label="复制微信号 Libether_cedar"><span>WECHAT / 微信</span><strong>Libether_cedar</strong><small>点击复制 ↗</small></button><div class="contact-qr-placeholder is-ready"><img src="${root}assets/wechat-qr.png" alt="梁雅熔微信二维码"></div></section><div class="contact-lines"><a href="mailto:1941577216@qq.com"><span>EMAIL / 邮箱</span><strong>1941577216@qq.com</strong><i>↗</i></a><a href="tel:+8615913773447"><span>PHONE / 手机</span><strong>+86 15913773447</strong><i>↗</i></a></div></div><div class="contact-footer-bottom"><span>FIRBY LIANG / PORTFOLIO</span><span>SHENZHEN · 2026</span></div></footer>`;
const pager = `<nav class="page-pager" aria-label="页面切换">${index > 0 ? `<a href="${pages[index - 1].href}"><span>← 上一页</span><strong>${pages[index - 1].label}</strong></a>` : '<span></span>'}${index < pages.length - 1 ? `<a href="${pages[index + 1].href}"><span>下一页 →</span><strong>${pages[index + 1].label}</strong></a>` : '<span></span>'}</nav>`;

const views = {
  home: `<main class="home-main"><section class="cover" aria-labelledby="cover-title"><div class="cover-meta"><span>OPERATIONS PORTFOLIO<br>2026 / SELECTED WORK</span><span>AI PRODUCT OPERATIONS<br>OVERSEAS GROWTH & SOCIAL</span></div><div class="cover-stage"><div class="scribble scribble-a" aria-hidden="true">✳</div><div class="badge-wrap"><div class="badge-art" role="img" aria-label="蓝色字样的个人工作牌，附有梁雅熔肖像"><div class="badge-overlay"><div class="badge-top"><strong>GROWTH<br>MEMBER</strong><span>NO. 001<br>2026</span></div><div class="badge-middle"><div class="badge-fields"><small>NAME / 姓名</small><em>梁雅熔</em><small>FOCUS / 方向</small><em>AI × Global</em><small>ROLE / 身份</small><em>Operations</em></div><img src="/assets/portrait.jpg" alt="梁雅熔肖像"></div><div class="badge-bottom"><span>AI PRODUCT · OVERSEAS GROWTH<br>SOCIAL MEDIA OPERATIONS</span><b>LYR</b></div></div></div></div><div class="scribble scribble-b" aria-hidden="true">✳</div></div><h1 id="cover-title">MAKE<br>GROWTH<br><span>VISIBLE.</span></h1><div class="cover-bottom"><div><strong>从内容到增长，让每一步都有依据。</strong><p>梁雅熔的 AI 产品运营 / 海外增长运营 / 海外社媒运营作品集</p></div><a class="round-link" href="/about/" aria-label="进入个人简介">↗</a></div></section><section class="home-index"><p class="eyebrow">THE INDEX / 目录</p><div class="index-links">${pages.slice(1).map((item, i) => `<a href="${item.href}"><span>0${i + 2}</span><strong>${item.label}</strong><span>↗</span></a>`).join('')}</div></section></main>`,
  about: `<main class="about-booth"><section class="about-hero"><div class="about-wood" aria-hidden="true"></div><div class="about-stage"><div class="about-plate"><span>02 / PERSONAL FILE</span><b>ABOUT FIRBY</b></div><article class="about-sheet"><header class="about-sheet-top"><span>AI PRODUCT · GLOBAL GROWTH · SOCIAL</span><span>SHENZHEN / 2026</span></header><h1><span>ABOUT</span><span>ME</span></h1><div class="about-intro-grid"><div class="about-polaroids" aria-label="梁雅熔的个人影像"><figure class="polaroid polaroid-1"><img src="../assets/about-01.jpg" alt="梁雅熔个人照片一"><figcaption>01 / PLAYFUL</figcaption></figure><figure class="polaroid polaroid-2"><img src="../assets/about-02.jpg" alt="梁雅熔个人照片二"><figcaption>02 / CULTURE</figcaption></figure><figure class="polaroid polaroid-3"><img src="../assets/about-03.jpg" alt="梁雅熔个人照片三"><figcaption>03 / MOMENTS</figcaption></figure><figure class="polaroid polaroid-4"><img src="../assets/about-04.jpg" alt="梁雅熔个人照片四"><figcaption>04 / OUTDOORS</figcaption></figure><figure class="polaroid polaroid-5"><img src="../assets/about-05.jpg" alt="梁雅熔个人照片五"><figcaption>05 / FIRBY</figcaption></figure></div><div class="about-copy"><p class="about-lead">你好，我是梁雅熔，也可以叫我 Firby。</p><p>我关注 AI 产品如何通过内容、社媒与社区被海外用户理解并使用。工作之外，我喜欢用照片记录生活、观察不同平台的视觉语言，也会持续尝试新的 AI 内容与设计工具。</p><div class="about-info"><section><span>PROFILE</span><p>深圳 · AI 产品与海外增长运营</p></section><section><span>INTERESTS</span><p>影像记录 · 视觉设计 · 海外社媒文化 · AI 创作</p></section><section><span>SKILLS</span><p>内容策略 · 海外社媒 · KOL 合作 · SEO · 社区运营 · 数据复盘</p></section></div></div></div><footer><span>CURIOUS ABOUT PEOPLE · CONTENT · CULTURE</span><b>002</b></footer></article></div></section><section class="about-files"><div class="about-file-heading"><span>WORKING FILES / 工作档案</span><h2>我如何把想法<br>推进到增长结果</h2></div><div class="about-file-list"><article><span>01 / CURRENT ROLE</span><h3>北京心影次元智能科技有限公司</h3><p class="jobline">AI 产品海外增长运营 · 2026.01 至今</p></article><article><span>02 / TOOLKIT</span><div class="skill-tags"><span>内容策略</span><span>海外社媒</span><span>KOL 合作</span><span>SEO</span><span>社区冷启动</span><span>数据复盘</span></div></article><article><span>03 / WORKING STYLE</span><p>从用户问题出发，结合竞品与数据找到传播切口；用 AI 内容与视觉工具加快制作，再依据结果持续调整。</p></article></div><div class="about-principles"><span>01 / 关注真实用户</span><span>02 / 让内容带来行动</span><span>03 / 用复盘驱动迭代</span></div></section></main>`,
impact: `<main class="social-work"><section class="social-work-hero"><div class="social-work-meta"><span>03 / SOCIAL WORK</span><span>SELECTED CHANNELS / 2026</span></div><div class="social-work-title"><h1>社媒<br><i>作品</i></h1></div><div class="platform-index" aria-label="社媒账号目录"><span><b>01</b><em>TIKTOK</em></span><span><b>02</b><em>X</em></span><span><b>03</b><em>INSTAGRAM</em></span></div></section><section class="account-section tiktok-section"><header class="account-section-head"><div><span>01 / VERTICAL CHANNELS</span><h2>TikTok 账号</h2></div></header><div class="tiktok-grid"><article class="account-card tiktok-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-tiktok-cirin.png" alt="Cirin_elserkids TikTok 账号主页"><span class="shot-no">01</span></div><div class="account-card-copy"><span>TIKTOK / ACCOUNT 01</span><h3>Cirin_elserkids</h3><dl class="account-stats"><div><dt>总发布作品数</dt><dd>40 条</dd></div><div><dt>总浏览量</dt><dd>1000 万+</dd></div><div><dt>主页累计赞</dt><dd>11 万+</dd></div><div><dt>最高单篇播放</dt><dd>250 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.tiktok.com/@surryxx" target="_blank" rel="noopener noreferrer"><span>tiktok.com/@surryxx</span><b>↗</b></a></div></article><article class="account-card tiktok-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-tiktok-fur.png" alt="Fur Fusion TikTok 账号主页"><span class="shot-no">02</span></div><div class="account-card-copy"><span>TIKTOK / ACCOUNT 02</span><h3>Fur_ Fusion</h3><dl class="account-stats"><div><dt>总发布作品数</dt><dd>96 条</dd></div><div><dt>总浏览量</dt><dd>80 万+</dd></div><div><dt>主页累计赞</dt><dd>19 万+</dd></div><div><dt>最高单篇播放</dt><dd>14 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.tiktok.com/@minigames501" target="_blank" rel="noopener noreferrer"><span>tiktok.com/@minigames501</span><b>↗</b></a></div></article><article class="account-card tiktok-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-tiktok-tsuki.png" alt="Tsuki Desu TikTok 账号主页"><span class="shot-no">03</span></div><div class="account-card-copy"><span>TIKTOK / ACCOUNT 03</span><h3>Tsuki Desu</h3><dl class="account-stats"><div><dt>总发布作品数</dt><dd>76 条</dd></div><div><dt>总浏览量</dt><dd>100 万+</dd></div><div><dt>主页累计赞</dt><dd>17.2 万</dd></div><div><dt>最高单篇播放</dt><dd>30.1 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.tiktok.com/@regina_philange99" target="_blank" rel="noopener noreferrer"><span>tiktok.com/@regina_philange99</span><b>↗</b></a></div></article><article class="account-card tiktok-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-tiktok-yui.png" alt="yui_hoshino49 TikTok 账号主页"><span class="shot-no">04</span></div><div class="account-card-copy"><span>TIKTOK / ACCOUNT 04</span><h3>yui_hoshino49</h3><dl class="account-stats"><div><dt>总发布作品数</dt><dd>110 条</dd></div><div><dt>总浏览量</dt><dd>34.9 万</dd></div><div><dt>主页累计赞</dt><dd>1.18 万</dd></div><div><dt>最高单篇播放</dt><dd>5.41 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.tiktok.com/@yui_hoshino49" target="_blank" rel="noopener noreferrer"><span>tiktok.com/@yui_hoshino49</span><b>↗</b></a></div></article></div></section><section class="account-section x-section"><header class="account-section-head"><div><span>02 / CONVERSATION CHANNEL</span><h2>X 账号</h2></div></header><article class="account-card x-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-x-elser.jpg" alt="Elser AI X 账号主页"><span class="shot-no">01</span></div><div class="account-card-copy"><span>X / ACCOUNT 01</span><h3>Elser AI</h3><dl class="account-stats"><div><dt>总发布帖子数</dt><dd>30 条+</dd></div><div><dt>总浏览量</dt><dd>50 万+</dd></div><div><dt>总赞量</dt><dd>10 万+</dd></div><div><dt>可见最高浏览</dt><dd>14.2 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://x.com/elseraiofficial?s=21&amp;t=iTW6-1k3ZUQDKv2LBDpi3w" target="_blank" rel="noopener noreferrer"><span>x.com/elseraiofficial</span><b>↗</b></a></div></article></section><section class="account-section instagram-section"><header class="account-section-head"><div><span>03 / VISUAL CHANNELS</span><h2>Instagram 账号</h2></div></header><div class="instagram-grid"><article class="account-card instagram-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-instagram-firby.jpg" alt="firbyovo Instagram 账号主页"><span class="shot-no">01</span></div><div class="account-card-copy"><span>INSTAGRAM / ACCOUNT 01</span><h3>firbyovo</h3><dl class="account-stats"><div><dt>总发布作品数</dt><dd>110 篇</dd></div><div><dt>总浏览量</dt><dd>30 万+</dd></div><div><dt>总赞量</dt><dd>5 万+</dd></div><div><dt>最高单篇播放</dt><dd>13.8 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.instagram.com/firbyovo?stkn=MWxva2xmc2JyZ2tkbg==" target="_blank" rel="noopener noreferrer"><span>instagram.com/firbyovo</span><b>↗</b></a></div></article><article class="account-card instagram-card"><div class="account-shot"><img class="account-screenshot" src="../assets/social-instagram-oimio.jpg" alt="oimio_g Instagram 账号主页"><span class="shot-no">02</span></div><div class="account-card-copy"><span>INSTAGRAM / ACCOUNT 02</span><h3>oimio_g</h3><dl class="account-stats"><div><dt>主页发布内容</dt><dd>64 篇</dd></div><div><dt>总浏览量</dt><dd>5000 万+</dd></div><div><dt>总赞量</dt><dd>300 万+</dd></div><div><dt>最高单篇播放</dt><dd>1848 万</dd></div></dl><p class="stats-note">账号数据统计</p><a class="account-link" href="https://www.instagram.com/oimio_g?stkn=b24wNnR0d3hiYnhp" target="_blank" rel="noopener noreferrer"><span>instagram.com/oimio_g</span><b>↗</b></a></div></article></div></section><section class="creator-video-section" aria-labelledby="creator-video-title"><header class="creator-video-head"><div><span>04 / PERSONAL CHANNEL</span><h2 id="creator-video-title">个人自媒体展示</h2></div></header><div class="creator-video-stage"><div class="creator-video-frame"><video class="creator-video" src="../assets/firby-vlog-original.mp4" controls preload="metadata" playsinline aria-label="个人自媒体横屏视频播放器"></video><div class="creator-video-placeholder" aria-hidden="true"><span>VIDEO / 16:9</span><b>视频待补充</b><i>▶</i><small>最长 02:00 · 网页内播放</small></div><div class="creator-video-timecode" aria-hidden="true">00:00:00 / --:--:--</div></div><aside class="creator-video-copy"><span>SOLO PRODUCTION / 独立制作</span><h3>All made<br>by Firby</h3><div class="creator-capability-list"><div><b>01</b><strong>剧情构思</strong><small>主题 · 节奏 · 分镜</small></div><div><b>02</b><strong>提示词设计</strong><small>角色 · 场景 · 镜头</small></div><div><b>03</b><strong>AI 创作</strong><small>生成 · 筛选 · 统一视觉</small></div><div><b>04</b><strong>剪辑包装</strong><small>剪辑 · 音效 · 字幕</small></div></div></aside></div><footer><span>STORY → PROMPT → CREATE → EDIT</span><strong>ONE PERSON · FULL PIPELINE</strong></footer></section></main>`,
  social: `<main class="growth-booth">
    <section class="growth-hero" aria-labelledby="growth-title">
      <div class="growth-wood" aria-hidden="true"></div>
      <div class="growth-hero-inner">
        <div class="growth-plate"><span>04 / GROWTH SYSTEM</span><b>SOCIAL × KOL × SEO</b></div>
        <div class="growth-kicker">CONTENT · CREATOR · SEARCH · COMMUNITY</div>
        <h1 id="growth-title">让流量<br><i>变成增长</i></h1>
        <p>用内容获取注意力，以创作者扩大触达，再通过搜索与社区沉淀用户。</p>
        <div class="growth-orbit" aria-hidden="true"><span>◎<small>CONTENT</small></span><span>↗<small>CREATOR</small></span><span>⌕<small>SEARCH</small></span><span>#<small>COMMUNITY</small></span></div>
        <a class="growth-scroll" href="#growth-results">查看核心结果 ↓</a>
      </div>
    </section>
    <section class="growth-results" id="growth-results" aria-labelledby="results-title">
      <header><span>RESULTS / 核心结果</span><h2 id="results-title">增长结果，一眼可见。</h2></header>
      <div class="growth-metrics">
        <article><b>100万+</b><span>月内容浏览量</span></article>
        <article><b>500+</b><span>累计触达创作者</span></article>
        <article><b>UV +60%</b><span>网站整体增长</span></article>
        <article><b>400+</b><span>月新增用户</span></article>
        <article><b>+20%</b><span>注册率提升</span></article>
      </div>
    </section>
    <section class="growth-system" aria-labelledby="system-title">
      <div class="growth-system-head"><span>THE LOOP / 增长闭环</span><h2 id="system-title">从被看见，到数据增长</h2><p>点击步骤查看执行重点</p></div>
      <div class="growth-console">
        <div class="growth-track" role="tablist" aria-label="增长工作模块">
          <button type="button" role="tab" aria-selected="true" aria-controls="growth-content" data-growth-target="growth-content"><span>01</span><b>内容矩阵</b><i>◎</i></button>
          <button type="button" role="tab" aria-selected="false" aria-controls="growth-creator" data-growth-target="growth-creator"><span>02</span><b>创作者合作</b><i>↗</i></button>
          <button type="button" role="tab" aria-selected="false" aria-controls="growth-search" data-growth-target="growth-search"><span>03</span><b>搜索增长</b><i>⌕</i></button>
          <button type="button" role="tab" aria-selected="false" aria-controls="growth-community" data-growth-target="growth-community"><span>04</span><b>社区与产品</b><i>#</i></button>
        </div>
        <div class="growth-details">
          <article id="growth-content" role="tabpanel"><span>CONTENT MATRIX</span><h3>选题、制作、分发、复盘</h3><p>围绕使用场景拆解内容角度，协同图文与短视频制作，并依据浏览和引流结果持续调整。</p><strong>4 条百万播放视频</strong></article>
          <article id="growth-creator" role="tabpanel" hidden><span>CREATOR PARTNERSHIP</span><h3>X × YouTube 创作者合作</h3><p>筛选匹配产品与受众的创作者，推进合作内容并跟踪访问、注册和用户反馈。</p><strong>累计触达 500+ 创作者</strong></article>
          <article id="growth-search" role="tabpanel" hidden><span>SEARCH & LANDING</span><h3>SEO 与落地页协同</h3><p>参与关键词调研、落地页内容和外链建设，让社媒流量继续沉淀为搜索与站外资产。</p><strong>200+ 关键词 · 200+ 外链</strong></article>
          <article id="growth-community" role="tabpanel" hidden><span>COMMUNITY & PRODUCT</span><h3>Discord 冷启动与产品反馈</h3><p>从 0 到 1 搭建社区基础，招募用户并回收反馈，支持 ElseLandAI 卖点与内容迭代。</p><strong>社区 0 → 1</strong></article>
        </div>
      </div>
    </section>
  </main>`,  playbook: `<main class="interior"><section class="page-intro"><div class="eyebrow">05 / GROWTH PLAYBOOK</div><h1>把短期流量<br><i>沉淀为长期资产。</i></h1><p class="intro-lead">除了社媒内容，我也参与搜索增长、社区冷启动和产品反馈闭环，让不同触点共同服务用户增长。</p></section><section class="playbook-list"><article><span>01 / SEARCH</span><div><h2>SEO 与落地页</h2><p>参与 200+ 关键词调研、落地页配图与文案、外链建议及产品描述优化；累计提交 200+ 外链。</p></div><strong>UV +60%</strong></article><article><span>02 / COMMUNITY</span><div><h2>Discord 冷启动</h2><p>从 0 到 1 搭建社区运营基础，参与用户招募与反馈收集，支持产品内容迭代。</p></div><strong>0 → 1</strong></article><article><span>03 / PRODUCT</span><div><h2>AI 产品协同</h2><p>参与 ElseLandAI 游戏产品调研与卖点提炼，把用户反馈带回内容与增长策略。</p></div><strong>AI × UX</strong></article></section><section class="contact-panel"><span>OPEN TO WHAT'S NEXT</span><h2>期待一起做出<br>有用户回应的增长。</h2><a href="mailto:1941577216@qq.com">1941577216@qq.com ↗</a></section></main>`
};
document.getElementById('app').innerHTML = (shellTop + views[page] + pager + footer)
  .replaceAll('href="/"', `href="${root}index.html"`)
  .replaceAll('href="/about/"', `href="${root}about/index.html"`)
  .replaceAll('src="/assets/portrait.jpg"', `src="${root}assets/portrait.jpg"`);
if (page === 'about') {
  document.querySelector('.about-lead').textContent = 'Hi！我是梁雅熔，也可以叫我 Firby。';
  document.querySelector('.about-copy > p:nth-of-type(2)').textContent = '我关注产品如何通过内容、社媒与社区走向海外市场，我喜欢运营数据为我带来成就感。在生活，我喜欢 KPOP、架子鼓、泰拳和健身，也习惯用照片记录生活、观察不同的视觉语言，持续使用 AI 与设计创作工具。对流行文化、视觉表达和内容趋势保持敏感，是我工作之外也一直在积累的能力。';
  document.querySelector('.about-info').innerHTML = `<section><span>AGE / 年龄</span><p>23 岁</p></section><section><span>ZODIAC / 星座</span><p>天秤座</p></section><section><span>MBTI</span><p>ISFP</p></section><section><span>LANGUAGES / 语言</span><p>普通话 · 粤语 · 英语</p></section><section><span>PLATFORMS / 运营平台</span><p>TikTok · X · IG · Reddit · Discord</p></section><section><span>SKILLS / 技能</span><p>内容策略 · 海外社媒 · KOL · SEO · 社区运营 · 数据复盘</p></section>`;
  document.querySelector('.about-files').innerHTML = `<div class="experience-wood" aria-hidden="true"></div><div class="experience-stage"><div class="experience-plate"><span>02 / CAREER FILE</span><b>WORK EXPERIENCE</b></div><article class="experience-sheet"><header class="experience-sheet-top"><span>SELECTED EXPERIENCE / 2024—NOW</span><span>FIRBY LIANG</span></header><h2><span>WORK</span><span>EXPERIENCE</span></h2><div class="experience-list"><article class="job-card job-featured"><div class="job-index"><b>01</b><span>2026.01—至今</span></div><div class="job-main"><p class="job-label">CURRENT ROLE / 最新岗位</p><h3>北京心影次元智能科技有限公司</h3><p class="job-role">AI 产品海外增长运营</p><ul><li>负责 ElseAI 和 Elseland 海外社媒矩阵的内容运营与用户引流，推进图文、短视频与增长复盘。</li><li>负责 X、YouTube 海外 KOL 合作，并与团队协作参与 SEO、落地页、外链建设。</li><li>主要负责 ElseLandAI 游戏产品调研、卖点提炼与用户反馈收集，主导 Discord 社区从 0–1 搭建及冷启动。</li></ul></div><div class="job-metrics"><div><strong>100万+</strong><span>月浏览量</span></div><div><strong>400+</strong><span>月新增用户</span></div><div><strong>500+</strong><span>触达创作者</span></div><div><strong>UV +60%</strong><span>网站整体增长</span></div><div><strong>4 条</strong><span>百万播放视频</span></div><div><strong>+20%</strong><span>注册率提升</span></div></div></article><div class="job-pair"><article class="job-card"><div class="job-index"><b>02</b><span>2025.07—2025.10</span></div><p class="job-label">FOREIGN TRADE / 外贸跟单</p><h3>深圳新信兴科技有限公司</h3><p class="job-role">外贸跟单</p><ul><li>跟进订单、生产巡查、产品规格、价格与交货条款，确保订单信息准确。</li><li>制作外贸单证，统筹货代资源、集装箱运输、海外认证及报关要求。</li><li>维护不同国家客户关系，提供售前技术咨询与售后使用指导。</li></ul><div class="achievement"><strong>20 单 / 日</strong><span>平均独立跟进海外订单</span><strong>5 万美元 / 月</strong><span>处理订单总额</span></div></article><article class="job-card"><div class="job-index"><b>03</b><span>2024.06—2025.06</span></div><p class="job-label">SHIPPING / 调度运营</p><h3>深圳市船舶代理有限公司</h3><p class="job-role">调度员</p><ul><li>优化船舶签单与货物配送流程，拓展 10 个国家及地区合作。</li><li>管理船舶签单、货物配送及港口、海关流程沟通，确保信息准确传达。</li><li>参与 NYK、TEEKAYMARINE、EURONAV、EPIC 及 SpringValley 等国际合作项目。</li></ul><div class="achievement"><strong>95%</strong><span>货物准时交付率</span><strong>100+ 封 / 日</strong><span>英文邮件处理量</span></div></article></div></div><footer><span>CONTENT · GROWTH · OPERATIONS</span><b>2024—NOW</b></footer></article></div>`;
}
if (page === 'impact') {
  const screenshots = [...document.querySelectorAll('.account-screenshot')];
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '账号主页高清大图');
  lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="关闭高清大图">×</button><figure><img alt=""><figcaption></figcaption></figure>`;
  document.body.append(lightbox);
  const fullImage = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  const closeButton = lightbox.querySelector('.lightbox-close');
  let returnFocus = null;
  const openLightbox = (source) => {
    returnFocus = source;
    fullImage.src = source.currentSrc || source.src;
    fullImage.alt = source.alt;
    caption.textContent = source.alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  };
  const closeLightbox = () => {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    fullImage.removeAttribute('src');
    returnFocus?.focus();
  };
  screenshots.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt}，点击查看高清大图`);
    image.addEventListener('click', () => openLightbox(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
  const revealItems = [...document.querySelectorAll('.social-work-hero > *, .account-section-head, .account-card, .creator-video-section > *')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('impact-motion-ready');
  revealItems.forEach((item, itemIndex) => {
    item.classList.add('impact-reveal');
    item.style.setProperty('--impact-delay', `${(itemIndex % 4) * 90}ms`);
  });
  if (reducedMotion) {
    revealItems.forEach(item => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .14, rootMargin: '0px 0px -7% 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
    const revealPassedItems = () => revealItems.forEach(item => {
      if (item.getBoundingClientRect().top < innerHeight * .94) item.classList.add('is-visible');
    });
    addEventListener('scroll', revealPassedItems, { passive: true });
    revealPassedItems();
  }
  const progress = document.createElement('div');
  progress.className = 'impact-scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  let progressQueued = false;
  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty('--impact-progress', `${maxScroll > 0 ? Math.min(100, scrollY / maxScroll * 100) : 0}%`);
    progressQueued = false;
  };
  addEventListener('scroll', () => {
    if (progressQueued) return;
    progressQueued = true;
    requestAnimationFrame(updateProgress);
  }, { passive: true });
  updateProgress();
  const creatorVideo = document.querySelector('.creator-video');
  const creatorPlaceholder = document.querySelector('.creator-video-placeholder');
  const creatorTimecode = document.querySelector('.creator-video-timecode');
  const formatTimecode = (seconds) => {
    if (!Number.isFinite(seconds)) return '--:--:--';
    const whole = Math.max(0, Math.floor(seconds));
    const hours = String(Math.floor(whole / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((whole % 3600) / 60)).padStart(2, '0');
    const secs = String(whole % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };
  const syncVideoTimecode = () => {
    creatorTimecode.textContent = `${formatTimecode(creatorVideo.currentTime)} / ${formatTimecode(creatorVideo.duration)}`;
  };
  const syncVideoPlaceholder = () => { creatorPlaceholder.hidden = Boolean(creatorVideo.currentSrc || creatorVideo.getAttribute('src')); };
  creatorVideo.addEventListener('loadedmetadata', () => { syncVideoPlaceholder(); syncVideoTimecode(); });
  creatorVideo.addEventListener('timeupdate', syncVideoTimecode);
  creatorVideo.addEventListener('play', syncVideoPlaceholder);
  syncVideoPlaceholder();
  const creatorSection = document.querySelector('.creator-video-section');
  if (creatorSection && !reducedMotion) {
    creatorSection.addEventListener('pointermove', (event) => {
      const bounds = creatorSection.getBoundingClientRect();
      const pointerX = (event.clientX - bounds.left) / bounds.width;
      const pointerY = (event.clientY - bounds.top) / bounds.height;
      creatorSection.style.setProperty('--video-x', `${pointerX * 100}%`);
      creatorSection.style.setProperty('--video-y', `${pointerY * 100}%`);
      creatorSection.style.setProperty('--video-rx', `${(0.5 - pointerY) * 2.4}deg`);
      creatorSection.style.setProperty('--video-ry', `${(pointerX - 0.5) * 2.4}deg`);
    });
    creatorSection.addEventListener('pointerleave', () => {
      creatorSection.style.setProperty('--video-x', '50%');
      creatorSection.style.setProperty('--video-y', '50%');
      creatorSection.style.setProperty('--video-rx', '0deg');
      creatorSection.style.setProperty('--video-ry', '0deg');
    });
  }
}
if (page === 'about') {
  const portraits = [...document.querySelectorAll('.about-polaroids img')];
  const lightbox = document.createElement('div');
  lightbox.className = 'portrait-lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '个人照片高清大图');
  lightbox.innerHTML = `<button class="portrait-lightbox-close" type="button" aria-label="关闭个人照片高清大图">×</button><figure><img alt=""><figcaption></figcaption></figure>`;
  document.body.append(lightbox);
  const fullImage = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  const closeButton = lightbox.querySelector('.portrait-lightbox-close');
  let returnFocus = null;
  const openLightbox = (source) => {
    returnFocus = source;
    fullImage.src = source.currentSrc || source.src;
    fullImage.alt = source.alt;
    caption.textContent = source.alt;
    lightbox.hidden = false;
    document.body.classList.add('portrait-lightbox-open');
    closeButton.focus();
  };
  const closeLightbox = () => {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('portrait-lightbox-open');
    fullImage.removeAttribute('src');
    returnFocus?.focus();
  };
  portraits.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt}，点击查看高清大图`);
    image.addEventListener('click', () => openLightbox(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
}
if (page === 'social') {
  const tabs = [...document.querySelectorAll('[data-growth-target]')];
  const panels = [...document.querySelectorAll('.growth-details [role="tabpanel"]')];
  const activate = (tab) => {
    tabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    panels.forEach(panel => { panel.hidden = panel.id !== tab.dataset.growthTarget; });
  };
  tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = (tabIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      activate(tabs[nextIndex]);
    });
  });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = [...document.querySelectorAll('.growth-plate, .growth-kicker, .growth-hero h1, .growth-hero-inner > p, .growth-scroll, .growth-orbit, .growth-results header, .growth-metrics article, .growth-system-head, .growth-console')];
  document.body.classList.add('growth-motion-ready');
  revealItems.forEach((item, itemIndex) => {
    item.classList.add('growth-reveal');
    item.style.setProperty('--growth-delay', `${(itemIndex % 5) * 75}ms`);
    item.style.setProperty('--growth-enter-y', `${40 + (itemIndex % 3) * 10}px`);
  });
  if (reducedMotion) {
    revealItems.forEach(item => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .13, rootMargin: '0px 0px -7% 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
    const revealPassedItems = () => revealItems.forEach(item => {
      if (item.getBoundingClientRect().top < innerHeight * .94) item.classList.add('is-visible');
    });
    addEventListener('scroll', revealPassedItems, { passive: true });
    revealPassedItems();
  }
  const growthHero = document.querySelector('.growth-hero');
  if (growthHero && !reducedMotion) {
    growthHero.addEventListener('pointermove', (event) => {
      const bounds = growthHero.getBoundingClientRect();
      const shiftX = ((event.clientX - bounds.left) / bounds.width - .5) * 16;
      const shiftY = ((event.clientY - bounds.top) / bounds.height - .5) * 12;
      growthHero.style.setProperty('--growth-shift-x', `${shiftX}px`);
      growthHero.style.setProperty('--growth-shift-y', `${shiftY}px`);
      growthHero.style.setProperty('--growth-orbit-x', `${shiftX * -.55}px`);
      growthHero.style.setProperty('--growth-orbit-y', `${shiftY * -.55}px`);
      growthHero.style.setProperty('--growth-title-x', `${shiftX * .65}px`);
      growthHero.style.setProperty('--growth-title-y', `${shiftY * .65}px`);
    });
    growthHero.addEventListener('pointerleave', () => {
      growthHero.style.setProperty('--growth-shift-x', '0px');
      growthHero.style.setProperty('--growth-shift-y', '0px');
      growthHero.style.setProperty('--growth-orbit-x', '0px');
      growthHero.style.setProperty('--growth-orbit-y', '0px');
      growthHero.style.setProperty('--growth-title-x', '0px');
      growthHero.style.setProperty('--growth-title-y', '0px');
    });
  }
}
const contactFooter = document.querySelector('.contact-footer');
if (contactFooter) {
  contactFooter.addEventListener('pointermove', (event) => {
    const bounds = contactFooter.getBoundingClientRect();
    contactFooter.style.setProperty('--contact-x', `${event.clientX - bounds.left}px`);
    contactFooter.style.setProperty('--contact-y', `${event.clientY - bounds.top}px`);
  });
  contactFooter.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const original = button.querySelector('small').textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.querySelector('small').textContent = document.documentElement.lang === 'en' ? 'Copied ✓' : '已复制 ✓';
      } catch {
        button.querySelector('small').textContent = button.dataset.copy;
      }
      setTimeout(() => { button.querySelector('small').textContent = original; }, 1800);
    });
  });
}
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  const english = document.documentElement.lang === 'en';
  menuButton.setAttribute('aria-label', open ? (english ? 'Close navigation menu' : '关闭导航菜单') : (english ? 'Open navigation menu' : '打开导航菜单'));
  mobileNav.hidden = !open;
});












