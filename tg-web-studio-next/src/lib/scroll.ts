let activeRaf: number | null = null;

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export function smoothScrollTo(targetY: number) {
  if (activeRaf !== null) cancelAnimationFrame(activeRaf);
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 500;
  let startTime: number | null = null;

  function step(ts: number) {
    if (startTime === null) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuart(progress));
    activeRaf = progress < 1 ? requestAnimationFrame(step) : null;
  }

  activeRaf = requestAnimationFrame(step);
}

export function scrollToHash(href: string) {
  if (href === "#top") {
    smoothScrollTo(0);
    return;
  }
  const target = document.querySelector(href);
  if (target) {
    const scrollMarginTop = parseInt(window.getComputedStyle(target).scrollMarginTop) || 0;
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - scrollMarginTop);
  }
}
