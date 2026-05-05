const I18n = (() => {
  let lang = localStorage.getItem('lang') || 'zh';

  const apply = (l) => {
    lang = l;
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('hidden', el.dataset.lang !== l);
    });
    localStorage.setItem('lang', l);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  };

  const init = () => apply(lang);
  const toggle = () => apply(lang === 'zh' ? 'en' : 'zh');
  const get = () => lang;

  return { init, toggle, get };
})();
