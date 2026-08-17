const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

/* ---------- symptom guide ---------- */
const SYMPTOM_DATA = {
  zh: {
    phone: [
      { name: '萤幕破裂／绿线', tip: '判断是外玻璃、面板还是排线问题；多数萤幕可单换外屏，不必整机报废。' },
      { name: '耗电快', tip: '先测电池健康度；若正常，再查是否有主机板漏电。' },
      { name: '充不进电', tip: '依序检查充电器、充电口、电池与充电 IC，很多不是电池问题。' },
      { name: '相机打不开', tip: '常见是排线受损或接触不良，可能不必整组更换后置相机。' },
      { name: '卡 Logo／不开机', tip: '可能是系统、电池或主机板问题，需逐层检测，别急着报废。' }
    ],
    tablet: [
      { name: '萤幕破裂', tip: '依面板尺寸与等级报价，标准版、Air、mini、Pro 差异大。' },
      { name: '触控失灵', tip: '先测触控层与排线，再判断是否需要换总成。' },
      { name: '充电异常／电池', tip: '检查充电口、电池与主机板充电线路。' },
      { name: '短路不开机', tip: 'IG 有 iPad 9 短路找出故障电容的案例，不一定需要换整块主机板。' }
    ],
    macbook: [
      { name: '无法充电', tip: '先排除充电器与接口，再查电池与充电 IC／逻辑板。' },
      { name: '电池异常', tip: '电池健康度下降或膨胀，更换前先确认是否影响主机板。' },
      { name: '黑屏／不开机', tip: '检查显示线路、电池与逻辑板，逐层确认故障范围。' },
      { name: '键盘失灵', tip: '先测排线与接口，再判断是否需要更换键盘模组。' }
    ],
    airpods: [
      { name: '断连／自动关机', tip: '使用两年以上常见电池老化，先评估是否值得更换。' },
      { name: '无法充电', tip: '检查充电盒、充电接点与耳机电池。' },
      { name: '单边无声', tip: '交叉测试左右耳与充电盒，确认是电池还是线路问题。' },
      { name: '续航很短', tip: '电池老化为主因，可更换电池延长使用。' }
    ]
  },
  en: {
    phone: [
      { name: 'Cracked screen / green lines', tip: 'Check if it\'s the outer glass, panel or flex; most screens can be repaired without replacing the whole device.' },
      { name: 'Battery drains fast', tip: 'Test battery health first; if it\'s fine, check for board-level leakage.' },
      { name: 'Won\'t charge', tip: 'Check the charger, charging port, battery and charging IC in order — often it\'s not the battery.' },
      { name: 'Camera won\'t open', tip: 'Usually a damaged or loose flex cable; a full rear-camera replacement may not be needed.' },
      { name: 'Stuck on logo / won\'t boot', tip: 'Could be software, battery or board-level — needs step-by-step diagnosis, don\'t scrap it yet.' }
    ],
    tablet: [
      { name: 'Cracked screen', tip: 'Price depends on panel size & grade — standard, Air, mini and Pro vary a lot.' },
      { name: 'Touch not working', tip: 'Test the touch layer and flex first, then decide if a full assembly swap is needed.' },
      { name: 'Charging issue / battery', tip: 'Check the charging port, battery and board charging circuit.' },
      { name: 'Short circuit, no boot', tip: 'We found a faulty capacitor on an iPad 9 short — a full board replacement isn\'t always needed.' }
    ],
    macbook: [
      { name: 'Won\'t charge', tip: 'Rule out the charger and port first, then check battery and charging IC / logic board.' },
      { name: 'Battery issue', tip: 'Health degraded or swollen — confirm it doesn\'t affect the board before replacing.' },
      { name: 'Black screen / no boot', tip: 'Check display lines, battery and logic board layer by layer.' },
      { name: 'Keyboard not working', tip: 'Test flex and connector first, then decide if the keyboard module needs replacing.' }
    ],
    airpods: [
      { name: 'Drops / auto power-off', tip: 'Over 2 years old is often battery aging — assess whether replacement is worth it.' },
      { name: 'Won\'t charge', tip: 'Check the case, charging contacts and earbud batteries.' },
      { name: 'One side silent', tip: 'Cross-test left/right and the case to see if it\'s battery or circuitry.' },
      { name: 'Very short battery life', tip: 'Battery aging is the main cause — replacement extends life.' }
    ]
  }
};

const sfTabs = document.querySelectorAll('.sf-tab');
const sfList = document.getElementById('sf-symptoms');
const sfTip = document.getElementById('sf-tip');
const sfCta = document.querySelector('.sf-cta');
const sfDefault = document.querySelector('.sf-default');

function currentLang() {
  return window.I18N ? window.I18N.getLang() : 'zh';
}

function renderSymptoms(device) {
  sfList.innerHTML = '';
  (SYMPTOM_DATA[currentLang()][device] || []).forEach((s) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `${s.name} <i>→</i>`;
    btn.addEventListener('click', () => {
      sfDefault.hidden = true;
      sfTip.hidden = false;
      sfTip.innerHTML = `<h4>${window.I18N ? window.I18N.t('sym.direction') : '维修方向'}</h4><p>${s.tip}</p>`;
      sfCta.hidden = false;
    });
    li.appendChild(btn);
    sfList.appendChild(li);
  });
}

sfTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    sfTabs.forEach((t) => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    sfDefault.hidden = false;
    sfTip.hidden = true;
    sfCta.hidden = true;
    renderSymptoms(tab.dataset.device);
  });
});

if (sfList) renderSymptoms('phone');

// 语言切换后重绘症状列表
document.addEventListener('i18n:changed', () => {
  const activeTab = document.querySelector('.sf-tab.active');
  const device = activeTab ? activeTab.dataset.device : 'phone';
  sfDefault.hidden = false;
  sfTip.hidden = true;
  sfCta.hidden = true;
  renderSymptoms(device);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  // stagger siblings inside grids
  document.querySelectorAll('.device-grid, .ig-case-grid, .process-list').forEach((grid) => {
    [...grid.children].forEach((item, i) => {
      if (i < 5) item.setAttribute('data-stagger', String(i));
    });
  });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}
