(() => {
  'use strict';
  const videos = [...document.querySelectorAll('video')];
  const autoplay = document.querySelector('#autoplay');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  autoplay.checked = !reducedMotion.matches;
  autoplay.closest('label').hidden = false;
  const play = video => { video.play().catch(() => { /* Native controls remain available. */ }); };

  // Load media as it approaches the viewport. All sources also work without JavaScript.
  if ('IntersectionObserver' in window) {
    const loader = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.preload = 'metadata';
        target.load();
        loader.unobserve(target);
      }
    }, { rootMargin: '250px' });
    const playback = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) {
          visible.add(target);
          if (autoplay.checked && !document.hidden) play(target);
        } else {
          visible.delete(target);
          target.pause();
        }
      }
    }, { threshold: 0.25 });
    for (const video of videos) {
      loader.observe(video);
      playback.observe(video);
    }
  } else {
    autoplay.closest('label').hidden = true;
  }

  autoplay.addEventListener('change', () => {
    for (const video of videos) {
      if (autoplay.checked && visible.has(video) && !document.hidden) play(video);
      else video.pause();
    }
  });
  document.addEventListener('visibilitychange', () => {
    for (const video of videos) {
      if (document.hidden) video.pause();
      else if (autoplay.checked && visible.has(video)) play(video);
    }
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      autoplay.checked = false;
      videos.forEach(video => video.pause());
    }
  });
  for (const video of videos) {
    video.addEventListener('error', () => {
      video.closest('.video-card').querySelector('.video-error').hidden = false;
    });
  }

  const sections = [...document.querySelectorAll('.section-intro[id], .task-section, .notation-section')];
  const links = [...document.querySelectorAll('.task-nav a')];
  let scheduled = false;
  const updateNavigation = () => {
    scheduled = false;
    let active = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.45) active = section.dataset.navTarget || section.id;
    }
    for (const link of links) {
      if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
