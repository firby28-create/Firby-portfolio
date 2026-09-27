const homeMain = document.querySelector('.home-main');
if (homeMain) {
  homeMain.outerHTML = `<main class="booth-home">
    <section class="booth-hero" aria-labelledby="booth-title">
      <div class="booth-side booth-side-left"><h1 id="booth-title">A LITTLE<br>ABOUT ME.</h1></div>
      <div class="booth-scene" id="booth-scene">
        <div class="booth-sign" aria-hidden="true">PORTFOLIO<br>DELIVERED<br>HERE</div>
        <div class="print-window" aria-live="polite">
          <article class="print-card" id="print-card" aria-label="梁雅熔的简要个人介绍">
            <div class="card-head"><span>001 / OPERATOR PROFILE</span></div>
            <div class="card-tags"><span>content</span><span>growth</span><span>community</span></div>
            <img class="card-portrait" src="assets/portrait.jpg" alt="梁雅熔肖像">
            <div class="card-lines"><div><span>name</span><strong>梁雅熔</strong></div><div><span>location</span><strong>ShenZhen</strong></div><div><span>role</span><strong>海外社媒 · 用户增长</strong></div></div>
            <a class="card-link" href="about/index.html">查看完整介绍 ↗</a>
          </article>
        </div>
        <button class="slot-trigger" type="button" aria-controls="print-card" aria-expanded="false"><span>将鼠标移至相片出口<br><b>HOVER TO PRINT ↘</b></span></button>
      </div>
      <div class="booth-side booth-side-right"><span class="booth-scroll">SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section class="scroll-showcase" aria-labelledby="explore-title">
      <div class="showcase-pin">
        <div class="showcase-wood" aria-hidden="true"></div>
        <div class="showcase-plate"><span>SELECTED WORK</span><b>02—04</b></div>
        <div class="showcase-head"><span id="explore-title">CONTINUE EXPLORING / 继续浏览</span><small>SCROLL TO EXPLORE ↓</small></div>
        <nav class="showcase-list" aria-label="作品集栏目">
          <a class="showcase-link" href="about/index.html"><span class="showcase-no">02</span><strong>个人简介</strong><span class="showcase-arrow" aria-hidden="true">↗</span></a>
          <a class="showcase-link" href="impact/index.html"><span class="showcase-no">03</span><strong>社媒作品</strong><span class="showcase-arrow" aria-hidden="true">↗</span></a>
          <a class="showcase-link" href="social/index.html"><span class="showcase-no">04</span><strong>社媒与增长</strong><span class="showcase-arrow" aria-hidden="true">↗</span></a>
        </nav>
        <div class="showcase-progress" aria-hidden="true"><i></i></div>
      </div>
    </section>
  </main>`;
  const scene = document.getElementById('booth-scene');
  const trigger = scene.querySelector('.slot-trigger');
  const setOpen = (open) => {
    scene.classList.toggle('is-printing', open);
    trigger.setAttribute('aria-expanded', String(open));
  };
  trigger.addEventListener('pointerenter', () => setOpen(true));
  document.querySelector('.booth-hero').addEventListener('pointerleave', (event) => { if (event.pointerType === 'mouse') setOpen(false); });
  trigger.addEventListener('focus', () => setOpen(true));
  trigger.addEventListener('click', () => setOpen(true));
  scene.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
}

