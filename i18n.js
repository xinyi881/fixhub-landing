/* FixHub Martin — 中英双语 i18n（简体中文 + English） */
(function () {
  'use strict';

  const STORAGE_KEY = 'fixhub-lang';
  const DICT = {
    zh: {
      'meta.title': 'FixHub Martin｜JB 3C 装置维修',
      'meta.description': 'FixHub Martin：JB 新山手机、iPad、MacBook、AirPods 与主机板维修咨询；门市每天 10:00 AM – 10:00 PM 营业。',
      'meta.ogtitle': 'FixHub Martin｜JB 3C 装置维修',
      'meta.ogdescription': '手机、平板、MacBook、AirPods 与主机板故障判断；JB 地区晚间上门取送。',

      'skipLink': '跳到主要内容',
      'brandAria': 'FixHub 首页',
      'menuOpen': '开启选单',
      'navAria': '主要导览',
      'nav.services': '服务项目',
      'nav.pricing': '价格参考',
      'nav.ig': 'IG 实修',
      'nav.how': '服务流程',
      'nav.location': '地点',
      'nav.cta': 'WhatsApp 咨询 <span>↗</span>',

      'hero.photoAria': '专业技师使用精密工具检查手机内部元件',
      'hero.eyebrow': '<span></span> 新山 JB 装置维修 · 主机板级诊断',
      'hero.title': '手机、平板、笔电、耳机，<br><span>坏了先问 Martin。</span>',
      'hero.lede': '从萤幕、电池到主机板故障，先传症状给 Martin 判断值不值得修。门市每天 10:00 AM – 10:00 PM 营业。',
      'hero.ctaPrimary': 'WhatsApp 传送故障状况 <span>↗</span>',
      'hero.ctaGhost': '看服务与价格 <span>↓</span>',
      'hero.panelAria': '服务重点',
      'hero.panelKicker': 'REPAIR DESK',
      'hero.panelTitle': '先判断，<br>再决定要不要修。',
      'hero.panelDesc': '把型号、故障画面和使用状况传来，先帮你判断维修方向和大概风险。',
      'hero.panel1Title': '先看症状',
      'hero.panel1Desc': '屏幕、电池、充电、主机板逐层排查',
      'hero.panel2Title': '报价再动手',
      'hero.panel2Desc': '确认值得修才安排取机和维修',
      'hero.panel3Title': '每天 10:00-22:00',
      'hero.panel3Desc': '适合晚下班或跨境通勤后咨询',

      'quick.aria': '服务特色',
      'quick.years': '9 年维修经验',
      'quick.yearsSub': 'Apple／Android，含折叠萤幕机型',
      'quick.board': '主机板级处理',
      'quick.boardSub': '短路、CPU、排线、充电 IC 元件级维修',
      'quick.hours': '每天 10:00–22:00',
      'quick.hoursSub': '适合跨境或晚下班的上班族',

      'services.title': '修什么？四类装置都接。',
      'services.desc': '先提供品牌、型号与症状，Martin 判断是否值得修、需要检查哪一层，再安排取机。',
      'svc.phone.title': '手机',
      'svc.phone.desc': 'iPhone、Samsung、Xiaomi、OPPO、Realme、Pixel 等，含折叠萤幕机型。',
      'svc.phone.l1': '萤幕（外屏）更换',
      'svc.phone.l2': '电池、充电、相机',
      'svc.phone.l3': 'CPU、短路、不开机',
      'svc.phone.link': '看 iPhone 相机实修 <span>↗</span>',
      'svc.tablet.title': 'iPad／平板',
      'svc.tablet.desc': '萤幕、充电、电池与主机板问题。',
      'svc.tablet.l1': '破屏、触控与显示',
      'svc.tablet.l2': '充电异常、电池老化',
      'svc.tablet.l3': '短路、不启动',
      'svc.tablet.link': '看 iPad 9 实修 <span>↗</span>',
      'svc.macbook.title': 'MacBook／笔电',
      'svc.macbook.desc': '不充电、不开机到显示与主机板故障。',
      'svc.macbook.l1': '不充电、充电不稳定',
      'svc.macbook.l2': '电池、萤幕、键盘',
      'svc.macbook.l3': '充电 IC／逻辑板',
      'svc.macbook.link': '看 MacBook Pro 实修 <span>↗</span>',
      'svc.airpods.title': 'AirPods／耳机',
      'svc.airpods.desc': '使用两年以上的续航下降、断连多与电池老化有关。',
      'svc.airpods.l1': '断连、蓝牙异常',
      'svc.airpods.l2': '自动关机、无法充电',
      'svc.airpods.l3': '单边无声、续航变短',
      'svc.airpods.link': '看 AirPods 实修 <span>↗</span>',

      'pricing.title': '大概要花多少？',
      'pricing.desc': '马来西亚市场参考价（RM），不是正式报价；实际以检测后为准。',
      'pricing.colIssue': '问题',
      'pricing.colFix': '常见处理',
      'pricing.colPrice': '参考价 RM',
      'pr.1.title': '手机：萤幕／显示／触控',
      'pr.1.desc': '判断外玻璃、面板、排线或显示线路。',
      'pr.1.fix': '<span>常见处理</span>破屏、绿线、触控失灵的检查与更换方向。',
      'pr.1.price': '<small>参考价</small><strong>RM140–1,800</strong><span>依型号与零件等级</span>',
      'pr.2.title': '手机：电池／充电',
      'pr.2.desc': '检查电池健康、充电口与充电线路。',
      'pr.2.fix': '<span>常见处理</span>耗电快、充不进电的诊断与更换。',
      'pr.2.price': '<small>参考价</small><strong>RM89–450</strong><span>依型号</span>',
      'pr.3.title': '相机／主机板／不开机',
      'pr.3.desc': '排线、短路、CPU 与板层问题需逐层检测。',
      'pr.3.fix': '<span>常见处理</span>相机排线、短路电容、CPU 等元件级维修。',
      'pr.3.price': '<small>参考价</small><strong>RM99 起</strong><span>检测后报价</span>',
      'pr.4.title': 'iPad／MacBook／AirPods',
      'pr.4.desc': '萤幕、电池、充电与主机板问题。',
      'pr.4.fix': '<span>常见处理</span>iPad 萤幕 RM350–1,200；MacBook 萤幕 RM850 起；AirPods 电池 RM100–350。',
      'pr.4.price': '<small>参考价</small><strong>检测后报价</strong><span>依装置与故障范围</span>',
      'pricing.note': '<b>以上不是承诺报价。</b> 价格依型号、零件等级与故障范围不同；较远地区运送费会在取件前说明。',
      'pricing.source': '市场参考价 · RM',

      'sym.choose': '选择装置',
      'sym.title': '不知道怎么说故障？<br>先点症状看看。',
      'sym.desc': '选装置、点症状，马上看到可能的维修方向与下一步。不确定也直接问 Martin。',
      'sym.tab.phone': '手机',
      'sym.tab.tablet': 'iPad／平板',
      'sym.tab.macbook': 'MacBook／笔电',
      'sym.tab.airpods': 'AirPods／耳机',
      'sym.default': '👆 点一个症状，看维修方向',
      'sym.direction': '维修方向',
      'sym.cta': 'WhatsApp 问 Martin <span>↗</span>',

      'ig.title': '不是口号，有真实维修记录。',
      'ig.desc': '以下内容来自 fixhub_martin 的公开贴文，每张卡都直接连回原贴。',
      'ig.alt1': 'Martin 在 Instagram 分享的 MacBook Pro A1989 不充电维修案例',
      'ig.1.title': 'MacBook Pro A1989 不充电',
      'ig.1.desc': '检查后更换充电 IC，服务不只限于手机。',
      'ig.1.link': '查看原贴 ↗',
      'ig.alt2': 'Martin 的 AirPods 常见故障维修短片封面',
      'ig.2.title': '断连、自动关机',
      'ig.2.desc': '两年以上多半先查电池老化。',
      'ig.2.link': '播放 Reel ↗',
      'ig.alt3': 'Martin 分享的 iPad 9 短路不开机维修案例',
      'ig.3.title': 'iPad 9 短路不开机',
      'ig.3.desc': '找出故障电容后解决。',
      'ig.3.link': '查看原贴 ↗',
      'ig.alt4': 'Martin 分享的 iPhone 13 Pro Max 相机排线维修案例',
      'ig.4.title': 'iPhone 13 Pro Max 相机',
      'ig.4.desc': '修复受损排线，不必整组更换。',
      'ig.4.link': '查看原贴 ↗',
      'ig.note': '案例来自 <a href="https://www.instagram.com/fixhub_martin/" target="_blank" rel="noopener noreferrer">@fixhub_martin ↗</a>；网站仅整理公开内容。',

      'how.title': '怎么送修？四步搞定。',
      'how.1.title': '私讯状况',
      'how.1.desc': '提供装置类型、型号、故障画面与所在区域。',
      'how.2.title': '确认取送',
      'how.2.desc': '附近免费运送；较远区域先说明额外费用。',
      'how.3.title': '晚间取机',
      'how.3.desc': '每天 7:30 PM 后取货，星期日照常。',
      'how.4.title': '检测、报价、维修',
      'how.4.desc': '确认后维修，完工再安排送回。',

      'video.aria': 'FixHub × Martin 手机维修实作演示影片',
      'video.title': '维修前后，<br>看得见的差异。',
      'video.desc': '从故障判断到完工测试，每个步骤都有纪录。先看演示影片，了解处理前后的对照。',
      'video.fallback': '您的浏览器不支援影片播放。',
      'video.note': '情境演示：萤幕更换、背盖修复与充电孔清洁的前后对照。实际维修画面请参考 IG 实修贴文。',

      'loc.title': '门市地址：<br>Bandar Baru Kangkar Pulai。',
      'loc.desc': '位于新山 Skudai 的 Bandar Baru Kangkar Pulai，每天 10:00 AM – 10:00 PM 营业。点按钮可直接在你手机的地图 App 中开启导航。',
      'loc.apple': 'Apple 地图 <span>↗</span>',
      'loc.note': '营业时间每天 10:00 AM – 10:00 PM；确切取送范围与远距离收费，仍以 WhatsApp／IG 与 Martin 确认为准。',

      'about.brandAlt': 'FixHub Martin 品牌标志',
      'about.title': '维修不只是修好，<br>更是建立信任。',
      'about.desc': 'Martin 拥有 9 年手机维修经验，专精 Apple 与 Android 装置，含折叠萤幕机型的复杂维修；核心项目为萤幕（外屏）更换、主机板故障排除与检测评估，也处理 iPad、MacBook 与 AirPods。',
      'about.quote': '「让维修更专业，让交流更简单。」',

      'faq.title': '送出讯息前，<br>你可能想知道。',
      'faq.prepTitle': '送修前准备清单',
      'faq.prep1': '<i>✓</i> 先备份资料并验证备份成功',
      'faq.prep2': '<i>✓</i> 确认 Apple ID／Google 帐号可登入',
      'faq.prep3': '<i>✓</i> 关闭寻找／防盗锁定，或准备好密码',
      'faq.prep4': '<i>✓</i> 取出 SIM 卡与保护壳（如需）',
      'faq.prep5': '<i>✓</i> 进水机：关机、勿充电，直接联络',
      'faq.q1': '门市营业时间？<span>＋</span>',
      'faq.a1': '每天 10:00 AM – 10:00 PM 营业，方便跨境上班或晚下班的你；附近区域另有上门取送服务。',
      'faq.q2': '可以直接在线上报价吗？<span>＋</span>',
      'faq.a2': '可先依症状提供方向，但同一症状可能来自不同零件；实际费用仍以检测后确认为准。',
      'faq.q3': '上门取机需要运送费吗？<span>＋</span>',
      'faq.a3': 'JB 附近区域免费运送；较远地址会收取额外运送费，安排前会先说明。',
      'faq.q4': '送修前要准备什么？<span>＋</span>',
      'faq.a4': '建议先备份资料、确认帐号与验证方式；进水机请勿充电或开机测试，尽快说明情况。',

      'trust.kicker': '放心保障',
      'kicker.services': '修什么 / 01',
      'kicker.pricing': '价格参考 / 02',
      'kicker.symptom': '症状自查 / 03',
      'kicker.ig': 'IG 实修记录 / 04',
      'kicker.how': '维修流程 / 05',
      'kicker.action': '维修实况 / 06',
      'kicker.area': '门市地点 / 07',
      'kicker.about': '关于 Martin / 08',
      'kicker.faq': '常见问题 / 09',
      'trust.title': '为什么可以放心交给我们？',
      'trust.desc': '把设备交出去，最怕被坑、修不好、资料外泄。这几点是我们的承诺。',
      'trust.c1.t': '维修保固',
      'trust.c1.d': '换屏、换电池等更换类维修提供售后保固，保固期内同一问题免费复修。<mark>（保固天数待你确认，例：90 天）</mark>',
      'trust.c2.t': '先检测 · 后报价',
      'trust.c2.d': '检测后先报价，你同意了才动手，绝不先修后加价。<mark>（是否免费检测／不修不收费，待你确认）</mark>',
      'trust.c3.t': '资料隐私',
      'trust.c3.d': '维修只处理故障部件，不会翻看、复制或外传你的相册、讯息与个人资料。',
      'trust.c4.t': '用料透明',
      'trust.c4.d': '使用原厂或同等级优质零件，事先说明零件等级与差价，不含糊。<mark>（零件政策待你确认）</mark>',

      'cta.title': '先说说你的装置，<br>发生什么了。',
      'cta.btn': 'WhatsApp 私讯 Martin <span>↗</span>',

      'footer.tagline': '让维修更专业，让交流更简单。',
      'footer.note': '实际维修内容与费用以检测确认为准。',
      'mobile.cta': 'WhatsApp 咨询 <span>↗</span>'
    },

    en: {
      'meta.title': 'FixHub Martin｜JB 3C Device Repair',
      'meta.description': 'FixHub Martin: phone, iPad, MacBook, AirPods & board-level repair consultation in JB, Johor Bahru; open daily 10:00 AM – 10:00 PM.',
      'meta.ogtitle': 'FixHub Martin｜JB 3C Device Repair',
      'meta.ogdescription': 'Phone, tablet, MacBook, AirPods & board-level fault diagnosis; evening pickup & delivery around JB.',

      'skipLink': 'Skip to main content',
      'brandAria': 'FixHub Home',
      'menuOpen': 'Open menu',
      'navAria': 'Main navigation',
      'nav.services': 'Services',
      'nav.pricing': 'Pricing',
      'nav.ig': 'IG Repairs',
      'nav.how': 'How it works',
      'nav.location': 'Location',
      'nav.cta': 'WhatsApp Us <span>↗</span>',

      'hero.photoAria': 'A technician inspecting a phone\'s internals with precision tools',
      'hero.eyebrow': '<span></span> JB device repair · board-level diagnosis',
      'hero.title': 'Phones, tablets, laptops, earbuds —<br><span>ask Martin first.</span>',
      'hero.lede': 'From screens and batteries to board-level faults, message Martin the details and he\'ll tell you if it\'s worth fixing. Open daily 10:00 AM – 10:00 PM.',
      'hero.ctaPrimary': 'WhatsApp your issue <span>↗</span>',
      'hero.ctaGhost': 'See services & pricing <span>↓</span>',
      'hero.panelAria': 'Service highlights',
      'hero.panelKicker': 'REPAIR DESK',
      'hero.panelTitle': 'Diagnose first,<br>then decide.',
      'hero.panelDesc': 'Send the model, fault photo and usage details. We will judge the repair direction and risk before pickup.',
      'hero.panel1Title': 'Symptom check',
      'hero.panel1Desc': 'Screen, battery, charging and board-level checks',
      'hero.panel2Title': 'Quote before repair',
      'hero.panel2Desc': 'Pickup and repair only after you confirm it is worth it',
      'hero.panel3Title': 'Open 10:00-22:00 daily',
      'hero.panel3Desc': 'Convenient for late shifts and cross-border commuters',

      'quick.aria': 'Highlights',
      'quick.years': '9 years of experience',
      'quick.yearsSub': 'Apple & Android, incl. foldables',
      'quick.board': 'Board-level repair',
      'quick.boardSub': 'Shorts, CPU, flex cables, charging ICs — component-level',
      'quick.hours': 'Open daily 10 AM – 10 PM',
      'quick.hoursSub': 'Great for cross-border & late-shift workers',

      'services.title': 'What do we fix? All four device types.',
      'services.desc': 'Share the brand, model and symptoms — Martin will judge if it\'s worth repairing, which layer to check, then arrange pickup.',
      'svc.phone.title': 'Phones',
      'svc.phone.desc': 'iPhone, Samsung, Xiaomi, OPPO, Realme, Pixel & more, incl. foldables.',
      'svc.phone.l1': 'Screen (outer glass) replacement',
      'svc.phone.l2': 'Battery, charging, camera',
      'svc.phone.l3': 'CPU, shorts, won\'t boot',
      'svc.phone.link': 'See iPhone camera repair <span>↗</span>',
      'svc.tablet.title': 'iPad / Tablet',
      'svc.tablet.desc': 'Screen, charging, battery & board issues.',
      'svc.tablet.l1': 'Cracked screen, touch & display',
      'svc.tablet.l2': 'Charging faults, battery aging',
      'svc.tablet.l3': 'Shorts, won\'t start',
      'svc.tablet.link': 'See iPad 9 repair <span>↗</span>',
      'svc.macbook.title': 'MacBook / Laptop',
      'svc.macbook.desc': 'From no-charge & no-boot to display and board faults.',
      'svc.macbook.l1': 'Won\'t charge / unstable charging',
      'svc.macbook.l2': 'Battery, screen, keyboard',
      'svc.macbook.l3': 'Charging IC / logic board',
      'svc.macbook.link': 'See MacBook Pro repair <span>↗</span>',
      'svc.airpods.title': 'AirPods / Earbuds',
      'svc.airpods.desc': 'Over 2 years old with short battery life or frequent dropouts? Often battery aging.',
      'svc.airpods.l1': 'Dropouts, Bluetooth issues',
      'svc.airpods.l2': 'Auto power-off, won\'t charge',
      'svc.airpods.l3': 'One side silent, short battery life',
      'svc.airpods.link': 'See AirPods repair <span>↗</span>',

      'pricing.title': 'Roughly how much?',
      'pricing.desc': 'Malaysia market reference (RM) — not a formal quote; final price after diagnosis.',
      'pricing.colIssue': 'Issue',
      'pricing.colFix': 'Typical fix',
      'pricing.colPrice': 'Est. RM',
      'pr.1.title': 'Phone: Screen / Display / Touch',
      'pr.1.desc': 'Check outer glass, panel, flex or display circuit.',
      'pr.1.fix': '<span>Typical fix</span>Cracked screen, green lines, touch issues — inspect & replace.',
      'pr.1.price': '<small>Est. price</small><strong>RM140–1,800</strong><span>by model & part grade</span>',
      'pr.2.title': 'Phone: Battery / Charging',
      'pr.2.desc': 'Check battery health, port & charging circuit.',
      'pr.2.fix': '<span>Typical fix</span>Fast drain & no-charge diagnosis & replacement.',
      'pr.2.price': '<small>Est. price</small><strong>RM89–450</strong><span>by model</span>',
      'pr.3.title': 'Camera / Board / Won\'t Boot',
      'pr.3.desc': 'Flex, shorts, CPU & board layers need step-by-step checks.',
      'pr.3.fix': '<span>Typical fix</span>Camera flex, shorted caps, CPU — component-level repair.',
      'pr.3.price': '<small>Est. price</small><strong>from RM99</strong><span>quoted after diagnosis</span>',
      'pr.4.title': 'iPad / MacBook / AirPods',
      'pr.4.desc': 'Screen, battery, charging & board issues.',
      'pr.4.fix': '<span>Typical fix</span>iPad screen RM350–1,200; MacBook screen from RM850; AirPods battery RM100–350.',
      'pr.4.price': '<small>Est. price</small><strong>after diagnosis</strong><span>by device & fault scope</span>',
      'pricing.note': '<b>Not a guaranteed quote.</b> Prices vary by model, part grade & fault scope; delivery fees for farther areas are explained before pickup.',
      'pricing.source': 'Market reference · RM',

      'sym.choose': 'Choose a device',
      'sym.title': 'Not sure how to describe it?<br>Tap a symptom.',
      'sym.desc': 'Pick a device, tap a symptom, and see the likely repair direction and next steps. Not sure? Just ask Martin.',
      'sym.tab.phone': 'Phones',
      'sym.tab.tablet': 'iPad / Tablet',
      'sym.tab.macbook': 'MacBook / Laptop',
      'sym.tab.airpods': 'AirPods / Earbuds',
      'sym.default': '👆 Tap a symptom for the repair direction',
      'sym.direction': 'Repair direction',
      'sym.cta': 'Ask Martin on WhatsApp <span>↗</span>',

      'ig.title': 'Not just words — real repair records.',
      'ig.desc': 'From fixhub_martin\'s public posts — each card links to the original.',
      'ig.alt1': 'MacBook Pro A1989 no-charge repair shared by Martin on Instagram',
      'ig.1.title': 'MacBook Pro A1989 no-charge',
      'ig.1.desc': 'Replaced the charging IC after diagnosis — we don\'t just fix phones.',
      'ig.1.link': 'View post ↗',
      'ig.alt2': 'Cover of Martin\'s AirPods common-fault repair reel',
      'ig.2.title': 'Dropouts & auto power-off',
      'ig.2.desc': 'Over 2 years old? Check battery aging first.',
      'ig.2.link': 'Play Reel ↗',
      'ig.alt3': 'iPad 9 short-circuit no-boot repair shared by Martin',
      'ig.3.title': 'iPad 9 short circuit, no boot',
      'ig.3.desc': 'Found and fixed the faulty capacitor.',
      'ig.3.link': 'View post ↗',
      'ig.alt4': 'iPhone 13 Pro Max camera flex repair shared by Martin',
      'ig.4.title': 'iPhone 13 Pro Max camera',
      'ig.4.desc': 'Repaired the damaged flex — no full assembly needed.',
      'ig.4.link': 'View post ↗',
      'ig.note': 'Cases from <a href="https://www.instagram.com/fixhub_martin/" target="_blank" rel="noopener noreferrer">@fixhub_martin ↗</a>; the site curates public content only.',

      'how.title': 'How to send it in? Four steps.',
      'how.1.title': 'Message us',
      'how.1.desc': 'Share the device type, model, fault symptoms & your area.',
      'how.2.title': 'Confirm pickup',
      'how.2.desc': 'Free pickup nearby; extra fees for farther areas explained first.',
      'how.3.title': 'Evening pickup',
      'how.3.desc': 'Pickup after 7:30 PM daily, Sundays included.',
      'how.4.title': 'Diagnose, quote, repair',
      'how.4.desc': 'Repair after confirmation, then arrange the return.',

      'video.aria': 'FixHub × Martin phone repair demo video',
      'video.title': 'Before & after —<br>a visible difference.',
      'video.desc': 'From diagnosis to final tests, every step is documented. Watch the demo to see the before-and-after.',
      'video.fallback': 'Your browser doesn\'t support video playback.',
      'video.note': 'Demo: screen swap, back cover repair & charging port cleaning. For real repairs, see the IG posts.',

      'loc.title': 'Store address:<br>Bandar Baru Kangkar Pulai.',
      'loc.desc': 'Located at Bandar Baru Kangkar Pulai, Skudai, JB. Open daily 10:00 AM – 10:00 PM. Tap a button to open navigation in your phone\'s maps app.',
      'loc.apple': 'Apple Maps <span>↗</span>',
      'loc.note': 'Open daily 10:00 AM – 10:00 PM; exact pickup range & long-distance fees are confirmed with Martin via WhatsApp/IG.',

      'about.brandAlt': 'FixHub Martin brand logo',
      'about.title': 'Repair isn\'t just fixing —<br>it\'s building trust.',
      'about.desc': 'Martin has 9 years of phone repair experience, specializing in Apple & Android devices, including complex foldable repairs; core work: screen (outer glass) replacement, board-level fault-finding & assessment, plus iPad, MacBook & AirPods.',
      'about.quote': '"More professional repair, simpler communication."',

      'faq.title': 'Before you send,<br>you might want to know.',
      'faq.prepTitle': 'Pre-repair checklist',
      'faq.prep1': '<i>✓</i> Back up your data & verify it',
      'faq.prep2': '<i>✓</i> Confirm Apple ID / Google sign-in works',
      'faq.prep3': '<i>✓</i> Disable Find My / anti-theft lock, or have the password ready',
      'faq.prep4': '<i>✓</i> Remove the SIM card & case (if needed)',
      'faq.prep5': '<i>✓</i> Water damage: power off, don\'t charge, contact us',
      'faq.q1': 'What are the opening hours?<span>＋</span>',
      'faq.a1': 'Open daily 10:00 AM – 10:00 PM — convenient for cross-border commuters or those finishing late; pickup & delivery also available nearby.',
      'faq.q2': 'Can I get a quote online?<span>＋</span>',
      'faq.a2': 'We can point you in the right direction by symptom, but the same symptom can come from different parts; the final cost is confirmed after diagnosis.',
      'faq.q3': 'Is pickup free?<span>＋</span>',
      'faq.a3': 'Free pickup within the JB area; farther addresses incur an extra delivery fee, explained before scheduling.',
      'faq.q4': 'What should I prepare?<span>＋</span>',
      'faq.a4': 'Back up your data and confirm your accounts; if water-damaged, don\'t charge or power on — tell us the situation ASAP.',

      'trust.kicker': 'Why trust us',
      'kicker.services': 'What we repair / 01',
      'kicker.pricing': 'Price guide / 02',
      'kicker.symptom': 'Symptom guide / 03',
      'kicker.ig': 'Real work on Instagram / 04',
      'kicker.how': 'How it works / 05',
      'kicker.action': 'Repair in action / 06',
      'kicker.area': 'Service area / 07',
      'kicker.about': 'About Martin / 08',
      'kicker.faq': 'FAQ / 09',
      'trust.title': 'Why you can trust us?',
      'trust.desc': 'Handing over your device is scary — getting ripped off, a botched repair, or leaked data. These are our promises.',
      'trust.c1.t': 'Repair warranty',
      'trust.c1.d': 'Screen, battery and other replacement repairs come with an after-sales warranty; the same issue is re-fixed free within the warranty period.<mark> (Warranty period TBD — e.g. 90 days)</mark>',
      'trust.c2.t': 'Diagnose first, quote after',
      'trust.c2.d': 'We quote after diagnosis and only start once you approve — never fix first and add charges later.<mark> (Free diagnosis / no charge if not repaired — TBD)</mark>',
      'trust.c3.t': 'Data privacy',
      'trust.c3.d': 'We only work on the faulty parts — we never browse, copy, or share your photos, messages, or personal data.',
      'trust.c4.t': 'Transparent parts',
      'trust.c4.d': 'Genuine or equivalent-grade parts, with grade and price difference stated upfront — no ambiguity.<mark> (Parts policy TBD)</mark>',

      'cta.title': 'Tell us about your device<br>& what happened.',
      'cta.btn': 'Message Martin on WhatsApp <span>↗</span>',

      'footer.tagline': 'More professional repair, simpler communication.',
      'footer.note': 'Actual repairs & costs are confirmed after diagnosis.',
      'mobile.cta': 'WhatsApp Us <span>↗</span>'
    }
  };

  let current = 'zh';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') current = saved;
  } catch (e) { /* localStorage unavailable */ }

  function t(key) {
    return (DICT[current] && DICT[current][key]) || DICT.zh[key] || key;
  }

  function apply() {
    document.documentElement.lang = current === 'en' ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = t(el.dataset.i18n);
      if (el.textContent !== v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const v = t(el.dataset.i18nHtml);
      if (el.innerHTML !== v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const v = t(el.dataset.i18nAria);
      if (el.getAttribute('aria-label') !== v) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const v = t(el.dataset.i18nAlt);
      if (el.getAttribute('alt') !== v) el.setAttribute('alt', v);
    });

    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t('meta.ogtitle'));
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t('meta.ogdescription'));

    const currentLabel = document.querySelector('[data-lang-current]');
    if (currentLabel && currentLabel.textContent !== (current === 'en' ? 'English' : '简体中文')) {
      currentLabel.textContent = current === 'en' ? 'English' : '简体中文';
    }
    document.querySelectorAll('[data-lang-opt]').forEach((opt) => {
      opt.setAttribute('aria-selected', String(opt.dataset.langOpt === current));
    });

    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('[data-lang-dropdown]');
    const toggle = document.querySelector('[data-lang-toggle]');
    const menu = document.querySelector('[data-lang-menu]');

    function setOpen(open) {
      dropdown?.classList.toggle('open', open);
      toggle?.setAttribute('aria-expanded', String(open));
    }

    toggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!dropdown.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (dropdown && !dropdown.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
    menu?.querySelectorAll('[data-lang-opt]').forEach((opt) => {
      opt.addEventListener('click', () => {
        setLang(opt.dataset.langOpt);
        setOpen(false);
      });
    });

    apply();
  });

  window.I18N = { t: t, getLang: () => current, setLang: setLang };
})();
