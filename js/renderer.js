const Renderer = (() => {
  const config = {
    "zh": {
        "name": "黄波",
        "name_en": "Bo Huang",
        "title": "副研究员",
        "department": "全球大地构造中心、三峡地灾中心",
        "university": "中国地质大学（武汉）",
        "room": "TGRC楼 404室",
        "address": "湖北省武汉市洪山区鲁磨路388号 430074",
        "email": "bohuang@cug.edu.cn",
        "scholar_id": "QlXI8CQAAAAJ",
        "social": {
            "scholar": "https://scholar.google.com/citations?user=QlXI8CQAAAAJ",
            "researchgate": "https://www.researchgate.net/profile/Bo-Huang-17",
            "homepage_zh": "https://grzy.cug.edu.cn/huangbo/zh_CN/index.htm",
            "homepage_en": "https://grzy.cug.edu.cn/huangbo/en/index.htm"
        },
        "bio": "中国地质大学（武汉）副研究员。主要从事前寒武纪地质学、大地构造学和岩石地球化学等方向的研究和教学。围绕前寒武纪-显生宙地壳演化、地球动力学体制演变及其资源环境效应等科学问题，选取华北克拉通、扬子克拉通和周缘造山带关键岩石构造单元，开展地质、地球化学、定量模拟和大数据等综合研究。成果以第一作者发表于国际期刊Nature Communications 、Earth and Planetary Science Letters、GSA Bulletin、Precambrian Research和国内期刊《岩石学报》等。主持国家自然科学基金面上项目（2025-2028）、国家自然科学基金青年科学基金项目（C类）（2022-2024）等科研项目6项，参与国家重点研发计划青年科学家项目（2023-2028）等。",
        "research_interests": [
            {
                "title": "前寒武纪地质与早期地球演化",
                "desc": "聚焦华北克拉通和华南克拉通，研究早期地球环境、构造与地球动力学的长期演化"
            },
            {
                "title": "太古宙板块构造启动及样式演变",
                "desc": "研究太古宙俯冲-增生-碰撞构造体制，探索现代板块构造的起始时间与机制"
            },
            {
                "title": "蛇绿岩/混杂岩与造山带演化",
                "desc": "中亚造山带和特提斯构造域的增生-碰撞演化过程及其地球动力学机制"
            },
            {
                "title": "变质地质学与相平衡模拟",
                "desc": "运用相平衡模拟方法研究变质岩的P-T演化轨迹，揭示构造热演化历史"
            },
            {
                "title": "关键地质过程与资源环境效应",
                "desc": "聚焦重大地质事件，揭示固体-表生地球系统互馈机制和资源环境响应"
            }
        ],
        "tags": [
            "前寒武纪地质",
            "太古宙构造",
			"造山带演化",
            "蛇绿岩/混杂岩",
            "变质作用",
            "华北克拉通",
			"相平衡模拟"
        ],
        "education": [
            {
                "period": "2016.09 – 2020.06",
                "degree": "博士 构造地质学",
                "school": "中国地质大学（武汉）",
                "detail": "导师：Timothy M. Kusky 教授"
            },
            {
                "period": "2019.04 – 2020.04",
                "degree": "联合培养博士生",
                "school": "澳大利亚科廷大学",
                "detail": "合作导师：Tim E. Johnson 教授"
            },
			{
                "period": "2017.10 – 2018.01",
                "degree": "访问博士生",
                "school": "澳大利亚科廷大学",
                "detail": "合作导师：Simon A. Wilde 教授"
            },
            {
                "period": "2010.09 – 2016.06",
                "degree": "本科/硕士 地质学",
                "school": "中国地质大学（武汉）",
                "detail": ""
            }
        ],
        "teaching": [],
        "team": {
            "current": [],
            "alumni": [],
            "notice": "欢迎对前寒武纪地质、构造地质和地球化学感兴趣的同学联系我。"
        },
        "service": {
            "review": [
                "Earth-Science Reviews",
                "GSA Bulletin",
                "Chemical Geology",
                "Tectonics",
                "Precambrian Research",
                "Lithos",
                "Geoscience Frontiers",
                "Journal of Earth Science"
            ],
            "editorial": [
                "Journal of Earth Science 青年编委",
                "地球科学 青年编委"
            ],
            "organizations": []
        },
        "news": [
            {
                "date": "2025.11",
                "content": "入选武汉英才优秀青年人才"
            },
            {
                "date": "2023.10",
                "content": "参加 Continental Crust Evolution and Early Plate Tectonics 2023 国际研讨会，做口头报告"
            }
        ]
    },
    "en": {
        "name": "Bo Huang",
        "name_en": "Bo Huang",
        "title": "Associate Professor",
        "department": "School of Earth Sciences",
        "university": "China University of Geosciences, Wuhan",
        "room": "Room 404, TGRC Building, East Campus",
        "address": "388 Lumo Road, Hongshan District, Wuhan, Hubei 430074, China",
        "email": "bohuang@cug.edu.cn",
        "scholar_id": "QlXI8CQAAAAJ",
        "social": {
            "scholar": "https://scholar.google.com/citations?user=QlXI8CQAAAAJ",
            "researchgate": "https://www.researchgate.net/profile/Bo-Huang-17",
            "homepage_zh": "https://grzy.cug.edu.cn/huangbo/zh_CN/index.htm",
            "homepage_en": "https://grzy.cug.edu.cn/huangbo/en/index.htm"
        },
        "bio": "Bo's research and teaching focus on Precambrian geology, tectonics, and petrogeochemistry. He addresses key scientific questions concerning Precambrian–Phanerozoic crustal evolution, the evolution of geodynamic regimes, and their associated resource and environmental effects. His work integrates field geology, geochemistry, quantitative modeling, and big data analytics, with an emphasis on critical litho-tectonic units within the North China Craton, Yangtze Craton, and adjacent orogenic belts. He has published as first author in leading international journals, including Nature Communications, Earth and Planetary Science Letters, GSA Bulletin, and Precambrian Research. Bo has led six research projects, including a General Program of the National Natural Science Foundation of China (2025–2028) and a Youth Science Fund Project (Category C) (2022–2024). He has also participated in major initiatives such as the National Key R&D Program Young Scientist Project (2023–2028).",
        "research_interests": [
            {
                "title": "Precambrian Geology & Early Earth Evolution",
                "desc": "Secular changes of environment, tectonics, and geodynamics of the early Earth, with focus on the North and South China cratons"
            },
            {
                "title": "Archean Plate Tectonics",
                "desc": "Subduction-accretion-collision processes in the Archean, exploring the onset and mechanisms of modern-style plate tectonics"
            },
            {
                "title": "Ophiolite/Mélange & Orogenic Belt Evolution",
                "desc": "Accretionary and collisional evolution of orogenic belts in Central Asia and the Tethyan domain"
            },
            {
                "title": "Metamorphic Geology & Phase Equilibrium Modelling",
                "desc": "P-T evolution of metamorphic rocks using phase equilibrium modelling to reveal tectonothermal histories"
            },
            {
                "title": "Key Geological Processes and Resource-Environmental Effects",
                "desc": "Focusing on major geological events, revealing the feedback mechanisms between solid and surficial Earth systems and their resource-environmental responses"
            }
        ],
        "tags": [
            "Precambrian Geology",
            "Archean Tectonics",
            "Ophiolite/Mélange",
            "Metamorphism",
            "North China Craton"
        ],
        "education": [
            {
                "period": "2016.09 – 2020.06",
                "degree": "Ph.D. Structural Geology and Tectonics",
                "school": "China University of Geosciences, Wuhan",
                "detail": "Supervisor: Prof. Timothy M. Kusky"
            },
            {
                "period": "2019.04 – 2020.04",
                "degree": "Visiting Ph.D. Student",
                "school": "Curtin University, Australia",
                "detail": "Co-supervisors: Prof. Tim E. Johnson"
            },
			{
                "period": "2017.10 – 2018.01",
                "degree": "Visiting Ph.D. Student",
                "school": "Curtin University, Australia",
                "detail": "Co-supervisors: Prof. Simon A. Wilde"
            },
            {
                "period": "2010.09 – 2016.06",
                "degree": "B.Sc. & M.Sc. Geology",
                "school": "China University of Geosciences, Wuhan",
                "detail": ""
            }
        ],
        "teaching": [],
        "team": {
            "current": [],
            "alumni": [],
            "notice": "Students interested in Precambrian geology, structural geology, and geochemistry are welcome to contact me."
        },
        "service": {
            "review": [
                "Earth-Science Reviews",
                "GSA Bulletin",
                "Chemical Geology",
                "Tectonics",
                "Precambrian Research",
                "Lithos",
                "Geoscience Frontiers",
                "Journal of Earth Science"
            ],
            "editorial": [
                "Youth Editorial Board, Journal of Earth Science",
                "Youth Editorial Board, Earth Science"
            ],
            "organizations": []
        },
        "news": [
            {
                "date": "2025.11",
                "content": "Selected for Wuhan Talent Program for Outstanding Young Scholars"
            },
            {
                "date": "2023.10",
                "content": "Oral presentation at CCE-EPT 2023 International Symposium, Beijing"
            }
        ]
    }
};
  const get = () => config;

  const renderAll = () => {
    const lang = I18n.get();
    const d = config[lang];
    if (!d) return;

    document.title = d.name + ' | ' + d.university;

    const navName = document.getElementById('navName');
    if (navName) navName.textContent = d.name;

    const hero = document.getElementById('heroContent');
    if (hero) {
      hero.innerHTML =
        '<div class="hero-left"><div class="avatar"><img src="images/avatar.jpg" alt="' + d.name + '"></div></div>' +
        '<div class="hero-right">' +
          '<h1>' + d.name + '</h1>' +
          '<p class="hero-subtitle">' + d.title + '</p>' +
          '<p class="hero-affiliation">' + d.university + ' \u00b7 ' + d.department + '</p>' +
          '<div class="hero-contact">' +
            '<a href="mailto:' + d.email + '"><i class="fas fa-envelope"></i> ' + d.email + '</a>' +
            '<a href="' + d.social.scholar + '" target="_blank"><i class="fas fa-graduation-cap"></i> Google Scholar</a>' +
            '<a href="' + d.social.researchgate + '" target="_blank"><i class="fab fa-researchgate"></i> ResearchGate</a>' +
          '</div>' +
          '<div class="hero-bio"><p>' + d.bio + '</p></div>' +
          '<div class="hero-tags">' + d.tags.map(function(t){ return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '</div>';
    }

    const research = document.getElementById('researchContent');
    if (research) {
      var icons = ['fa-mountain','fa-layer-group','fa-globe-americas','fa-flask','fa-map-marked-alt'];
      research.innerHTML = d.research_interests.map(function(r, i){
        return '<div class="research-item"><div class="research-icon"><i class="fas ' + (icons[i] || 'fa-flask') + '"></i></div><div><h3>' + r.title + '</h3><p>' + r.desc + '</p></div></div>';
      }).join('');
    }

    const edu = document.getElementById('educationContent');
    if (edu && d.education) {
      edu.innerHTML = d.education.map(function(e){
        var detail = e.detail ? '<p>' + e.detail + '</p>' : '';
        return '<div class="edu-item"><span class="edu-year">' + e.period + '</span><div><h3>' + e.school + ' \u00b7 ' + e.degree + '</h3>' + detail + '</div></div>';
      }).join('');
    }

    const service = document.getElementById('serviceContent');
    if (service && d.service) {
      var h = '';
      if (d.service.editorial && d.service.editorial.length) {
        h += '<div class="service-item"><h3>' + (lang === 'zh' ? '\u671f\u520a\u7f16\u59d4' : 'Editorial Board') + '</h3><p>' + d.service.editorial.join(' \u00b7 ') + '</p></div>';
      }
      if (d.service.review && d.service.review.length) {
        h += '<div class="service-item"><h3>' + (lang === 'zh' ? '\u5ba1\u7a3f\u4eba' : 'Reviewer') + '</h3><p>' + d.service.review.join(' \u00b7 ') + '</p></div>';
      }
      service.innerHTML = h;
    }

    const news = document.getElementById('newsContent');
    if (news && d.news) {
      news.innerHTML = d.news.map(function(n){
        return '<div class="news-item"><span class="news-date">' + n.date + '</span><p>' + n.content + '</p></div>';
      }).join('');
    }

    const ft = document.getElementById('footerText');
    if (ft) {
      var y = new Date().getFullYear();
      ft.innerHTML = lang === 'zh'
        ? '\u00a9 ' + y + ' ' + d.name + ' \u00b7 ' + d.university + d.department
        : '\u00a9 ' + y + ' ' + d.name + ' \u00b7 ' + d.department + ', ' + d.university;
    }
  };

  return { get: get, renderAll: renderAll };
})();
