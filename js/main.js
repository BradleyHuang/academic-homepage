document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
  Renderer.renderAll();
  Publications.render();
  initNav();
  initFilters();
  initAnimations();
});

function initNav() {
  document.getElementById('langBtn')?.addEventListener('click', () => I18n.toggle());

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const lang = I18n.get();
      document.querySelectorAll(`.filter-btn[data-lang="${lang}"]`).forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      Publications.setFilter(this.dataset.filter);
    });
  });

  document.addEventListener('langchange', () => {
    const f = Publications.getFilter();
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === I18n.get() && b.dataset.filter === f);
    });
    Renderer.renderAll();
    Publications.render();
  });
}

function initAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-up');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  const observe = () => {
    document.querySelectorAll('.research-item, .pub-item, .edu-item, .teaching-item, .team-member, .service-item, .news-item').forEach(el => {
      if (!el.classList.contains('fade-up')) {
        el.style.opacity = '0';
        obs.observe(el);
      }
    });
  };

  observe();
  document.addEventListener('langchange', () => setTimeout(observe, 50));
}
