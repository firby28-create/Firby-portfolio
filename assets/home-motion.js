(() => {
  const stage = document.querySelector('.scroll-showcase');
  const links = [...(stage?.querySelectorAll('.showcase-link') || [])];
  if (!stage || !links.length) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let hoveredLink = null;
  let hasEntered = false;
  let entranceTimers = [];

  const clearEntranceTimers = () => {
    entranceTimers.forEach(clearTimeout);
    entranceTimers = [];
  };

  const setBlast = (link, amount) => {
    const mobileScale = innerWidth <= 650 ? .52 : innerWidth <= 1000 ? .75 : 1;
    link.classList.toggle('is-exploded', amount > .5);
    link.querySelectorAll('.showcase-char').forEach(char => {
      char.style.setProperty('--x', `${(Number(char.dataset.scatterX) * amount * mobileScale).toFixed(2)}px`);
      char.style.setProperty('--y', `${(Number(char.dataset.scatterY) * amount * mobileScale).toFixed(2)}px`);
      char.style.setProperty('--r', `${(Number(char.dataset.scatterR) * amount).toFixed(2)}deg`);
      char.style.setProperty('--o', String((1 - amount * .08).toFixed(3)));
    });
  };

  const resetAll = () => {
    clearEntranceTimers();
    hoveredLink = null;
    links.forEach(link => setBlast(link, 0));
    stage.classList.remove('is-intro-playing');
  };

  const playEntrance = () => {
    if (reducedMotion.matches) return;
    clearEntranceTimers();
    hoveredLink = null;
    stage.classList.add('is-intro-playing');
    links.forEach(link => setBlast(link, 0));
    entranceTimers.push(setTimeout(() => links.forEach(link => setBlast(link, .72)), 90));
    entranceTimers.push(setTimeout(() => links.forEach(link => setBlast(link, 0)), 520));
    entranceTimers.push(setTimeout(() => {
      stage.classList.remove('is-intro-playing');
      const current = links.find(link => link.matches(':hover') || link === document.activeElement);
      if (current) {
        links.forEach(link => setBlast(link, link === current ? 1 : 0));
        hoveredLink = current;
      }
    }, 1180));
  };

  links.forEach((link, linkIndex) => {
    const title = link.querySelector('strong');
    const label = title.textContent.trim();
    title.setAttribute('aria-label', label);
    title.textContent = '';
    let charIndex = 0;
    const totalChars = [...label.replace(/\s/g, '')].length;
    const spreadStep = Math.min(6, 48 / Math.max(1, totalChars - 1));

    label.split(/(\s+)/).filter(Boolean).forEach(part => {
      if (/^\s+$/.test(part)) {
        const space = document.createElement('span');
        space.className = 'showcase-space';
        space.setAttribute('aria-hidden', 'true');
        title.append(space);
        return;
      }

      const word = document.createElement('span');
      word.className = 'showcase-word';
      word.setAttribute('aria-hidden', 'true');
      [...part].forEach(letter => {
        const char = document.createElement('span');
        char.className = 'showcase-char';
        char.textContent = letter;
        const direction = charIndex % 2 === 0 ? -1 : 1;
        char.dataset.scatterX = String((charIndex - (totalChars - 1) / 2) * spreadStep);
        char.dataset.scatterY = String(((charIndex % 4) - 1.5) * 3.5);
        char.dataset.scatterR = String(direction * (1.5 + (charIndex % 2)));
        char.style.setProperty('--x', '0px');
        char.style.setProperty('--y', '0px');
        char.style.setProperty('--r', '0deg');
        char.style.setProperty('--o', '1');
        char.style.setProperty('--delay', `${(charIndex % 10) * 18}ms`);
        word.append(char);
        charIndex += 1;
      });
      title.append(word);
    });

    const activate = () => {
      if (reducedMotion.matches || stage.classList.contains('is-intro-playing')) return;
      clearEntranceTimers();
      links.forEach(item => setBlast(item, item === link ? 1 : 0));
      hoveredLink = link;
    };
    const deactivate = () => {
      if (hoveredLink !== link) return;
      setBlast(link, 0);
      hoveredLink = null;
    };

    link.addEventListener('pointerenter', activate);
    link.addEventListener('pointerleave', deactivate);
    link.addEventListener('focus', activate);
    link.addEventListener('blur', deactivate);
  });

  stage.addEventListener('pointerleave', resetAll);
  addEventListener('blur', resetAll);
  document.addEventListener('visibilitychange', () => { if (document.hidden) resetAll(); });

  const observer = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry.isIntersecting && entry.intersectionRatio >= .42) {
      if (!hasEntered) {
        hasEntered = true;
        playEntrance();
      }
    } else if (!entry.isIntersecting || entry.intersectionRatio < .12) {
      hasEntered = false;
      resetAll();
    }
  }, { threshold: [0, .12, .42, .75] });

  observer.observe(stage);
  reducedMotion.addEventListener?.('change', resetAll);
})();
