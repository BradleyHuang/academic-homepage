const Publications = (() => {
  let filter = 'all';
  const data = [
    {
      title: { zh: "Paleoproterozoic protracted collisional orogeny: Insights from the Wutai Complex in the central North China Craton", en: "Paleoproterozoic protracted collisional orogeny: Insights from the Wutai Complex in the central North China Craton" },
      authors: { zh: "Qi, F., <span class='me'>Huang, B.*</span>, Shan, X., Fu, D.", en: "Qi, F., <span class='me'>Huang, B.*</span>, Shan, X., Fu, D." },
      venue: "Precambrian Research", year: 2026, type: "journal", doi: "#"
    },
    {
      title: { zh: "Neoarchean accretionary and collisional tectonics in the southern North China Craton: Implications for crustal growth and plate tectonic styles", en: "Neoarchean accretionary and collisional tectonics in the southern North China Craton: Implications for crustal growth and plate tectonic styles" },
      authors: { zh: "<span class='me'>Huang, B.*</span>, Kusky, T., Fu, D.", en: "<span class='me'>Huang, B.*</span>, Kusky, T., Fu, D." },
      venue: "Precambrian Research", year: 2025, type: "journal", doi: "#"
    },
    {
      title: { zh: "Terminal subduction processes of the Paleo-Asian Ocean: Insights from podiform chromitites in the Solonker suture zone, southeastern Central Asian Orogenic Belt", en: "Terminal subduction processes of the Paleo-Asian Ocean: Insights from podiform chromitites in the Solonker suture zone, southeastern Central Asian Orogenic Belt" },
      authors: { zh: "Fu, D., Qian, Q., <span class='me'>Huang, B.*</span>", en: "Fu, D., Qian, Q., <span class='me'>Huang, B.*</span>" },
      venue: "GSA Bulletin", year: 2025, type: "journal", doi: "https://doi.org/10.1130/B38176.1"
    },
    {
      title: { zh: "Changes in orogenic style and surface environment recorded in Paleoproterozoic foreland successions", en: "Changes in orogenic style and surface environment recorded in Paleoproterozoic foreland successions" },
      authors: { zh: "<span class='me'>Huang, B.*</span>, Liu, M., Kusky, T.M., Johnson, T.E., Wilde, S.A., Fu, D., Deng, H., Qian, Q.", en: "<span class='me'>Huang, B.*</span>, Liu, M., Kusky, T.M., Johnson, T.E., Wilde, S.A., Fu, D., Deng, H., Qian, Q." },
      venue: "Nature Communications", year: 2023, type: "journal", doi: "#"
    },
    {
      title: { zh: "Coexisting divergent and convergent plate boundary assemblages indicate plate tectonics in the Neoarchean", en: "Coexisting divergent and convergent plate boundary assemblages indicate plate tectonics in the Neoarchean" },
      authors: { zh: "<span class='me'>Huang, B.*</span>, Johnson, T.E., Wilde, S.A., Polat, A., Fu, D., Kusky, T.*", en: "<span class='me'>Huang, B.*</span>, Johnson, T.E., Wilde, S.A., Polat, A., Fu, D., Kusky, T.*" },
      venue: "Nature Communications", year: 2022, type: "journal", doi: "#"
    },
    {
      title: { zh: "Paleoproterozoic ophiolitic mélanges and orogenesis in the northern Yangtze Craton: Evidence for the operation of modern-style plate tectonics", en: "Paleoproterozoic ophiolitic mélanges and orogenesis in the northern Yangtze Craton: Evidence for the operation of modern-style plate tectonics" },
      authors: { zh: "Zhou, W., <span class='me'>Huang, B.*</span>, Wei, Y., Li, H., Tan, M., Fu, D.", en: "Zhou, W., <span class='me'>Huang, B.*</span>, Wei, Y., Li, H., Tan, M., Fu, D." },
      venue: "Precambrian Research", year: 2021, type: "journal", doi: "#"
    },
    {
      title: { zh: "Paired metamorphism in the Neoarchean: a record of accretionary-to-collisional orogenesis in the North China Craton", en: "Paired metamorphism in the Neoarchean: a record of accretionary-to-collisional orogenesis in the North China Craton" },
      authors: { zh: "<span class='me'>Huang, B.</span>, Kusky, T.M.*, Johnson, T.E., Wilde, S.A., Wang, L., Polat, A., Fu, D.", en: "<span class='me'>Huang, B.</span>, Kusky, T.M.*, Johnson, T.E., Wilde, S.A., Wang, L., Polat, A., Fu, D." },
      venue: "Earth and Planetary Science Letters", year: 2020, type: "journal", doi: "#"
    },
    {
      title: { zh: "Structural relationships and kinematics of the Neoarchean Dengfeng forearc and accretionary complexes, southern North China craton", en: "Structural relationships and kinematics of the Neoarchean Dengfeng forearc and accretionary complexes, southern North China craton" },
      authors: { zh: "<span class='me'>Huang, B.</span>, Kusky, T.*, Wang, L., Polat, A., Fu, D., Windley, B., Deng, H., Wang, J.", en: "<span class='me'>Huang, B.</span>, Kusky, T.*, Wang, L., Polat, A., Fu, D., Windley, B., Deng, H., Wang, J." },
      venue: "GSA Bulletin", year: 2019, type: "journal", doi: "#"
    },
    {
      title: { zh: "Age and genesis of the Neoarchean Algoma-type banded iron formations from the Dengfeng greenstone belt, southern North China Craton", en: "Age and genesis of the Neoarchean Algoma-type banded iron formations from the Dengfeng greenstone belt, southern North China Craton" },
      authors: { zh: "<span class='me'>Huang, B.</span>, Kusky, T.M.*, Wang, L., Deng, H., Wang, J., Fu, D., Peng, H., Ning, W.", en: "<span class='me'>Huang, B.</span>, Kusky, T.M.*, Wang, L., Deng, H., Wang, J., Fu, D., Peng, H., Ning, W." },
      venue: "Precambrian Research", year: 2019, type: "journal", doi: "#"
    },
    {
      title: { zh: "Sedimentary provenance in response to Carboniferous arc-basin evolution of East Junggar and North Tianshan belts in the southwestern Central Asian Orogenic Belt", en: "Sedimentary provenance in response to Carboniferous arc-basin evolution of East Junggar and North Tianshan belts in the southwestern Central Asian Orogenic Belt" },
      authors: { zh: "<span class='me'>Huang, B.*</span>, Fu, D., Kusky, T.M., Ruan, K., Zhou, W., Zhang, X.", en: "<span class='me'>Huang, B.*</span>, Fu, D., Kusky, T.M., Ruan, K., Zhou, W., Zhang, X." },
      venue: "Tectonophysics", year: 2018, type: "journal", doi: "#"
    }
  ];

  const render = () => {
    const el = document.getElementById('pubList');
    if (!el) return;
    const lang = I18n.get();
    const list = filter === 'all' ? [...data] : data.filter(p => p.type === filter);
    list.sort((a, b) => b.year - a.year);

    el.innerHTML = list.map(p => `
      <div class="pub-item">
        <div class="pub-title"><a href="${p.doi}" target="_blank">${p.title[lang]}</a></div>
        <div class="pub-authors">${p.authors[lang]}</div>
        <div class="pub-venue"><em>${p.venue}</em>, ${p.year}</div>
      </div>
    `).join('');
  };

  const setFilter = (f) => { filter = f; render(); };
  const getFilter = () => filter;

  return { render, setFilter, getFilter };
})();
