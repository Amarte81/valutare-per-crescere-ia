const slides = document.querySelectorAll('.slide');
const mainEl = document.querySelector('main');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progress-bar');
const blockBadge = document.getElementById('block-badge');
const slideSelect = document.getElementById('slide-select');
let currentSlide = 0;

function initSelect() {
  if (!slideSelect) return;
  slides.forEach((s, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = s.dataset.title || `Slide ${idx + 1}`;
    slideSelect.appendChild(opt);
  });
}

function showSlide(n, slidesList, counterEl) {
  if (!slidesList.length) return;
  if (n < 0) n = 0;
  if (n >= slidesList.length) n = slidesList.length - 1;
  currentSlide = n;
  slidesList.forEach((slide, index) => {
    slide.style.display = index === n ? 'block' : 'none';
  });
  if (mainEl) mainEl.scrollTop = 0;
  if (counterEl) counterEl.textContent = `Slide ${n + 1} / ${slidesList.length}`;
  if (slideSelect) slideSelect.value = n;
  if (progressBar) {
    const pct = ((n + 1) / slidesList.length) * 100;
    progressBar.style.width = `${pct}%`;
  }

  const active = slidesList[n];
  if (blockBadge) {
    blockBadge.textContent = active.dataset.block || '';
    blockBadge.className = `badge ${active.dataset.badge || 'b1'}`;
  }
}

function nextSlide() { showSlide(currentSlide + 1, slides, counter); }
function prevSlide() { showSlide(currentSlide - 1, slides, counter); }
function jumpToSlide(val) {
  showSlide(parseInt(val, 10), slides, counter);
  if (slideSelect) slideSelect.blur();
}

function copyPrompt(btn) {
  const box = btn.parentElement;
  const text = box.innerText.replace(btn.innerText, '').trim();
  const showCopied = () => {
    const old = btn.textContent;
    btn.textContent = '✅ Copiato!';
    setTimeout(() => { btn.textContent = old; }, 1600);
  };
  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showCopied(); } catch (err) {}
    document.body.removeChild(ta);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

document.addEventListener('keydown', (e) => {
  if (document.activeElement && document.activeElement.tagName === 'SELECT') return;
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
  }
});

initSelect();
showSlide(0, slides, counter);
