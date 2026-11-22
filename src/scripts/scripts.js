// 1. Translations Dictionary (VI / JP / EN)
const translations = {
  vi: {
    navAbout: 'Về chúng tôi',
    navServices: 'Lĩnh vực & Dịch vụ',
    navProcess: 'Quy trình',
    navProjects: 'Đối tác & Dự án',
    navContact: 'Liên hệ',
    navCta: 'Tư vấn ngay',
    heroBadge: 'Japan – Vietnam Technology Transfer',
    heroTitle: 'Cầu nối chuyển giao công nghệ tiên tiến từ Nhật Bản.',
    heroDesc:
      'Công ty TNHH Japan-Tech đồng hành cùng doanh nghiệp Việt Nam triển khai các giải pháp nông nghiệp tuần hoàn, xử lý môi trường và tối ưu hóa vận hành theo tiêu chuẩn kỹ thuật Nhật Bản.',
    heroBtnPrimary: 'Liên hệ tư vấn dự án',
    heroBtnSecondary: 'Khám phá lĩnh vực',
    metric1: 'Công nghệ chuẩn Nhật Bản',
    metric2: 'Lĩnh vực chuyển giao cốt lõi',
    metric3: 'Đối tác kỹ thuật Nhật Bản',
    metric4: 'Đội ngũ điều phối đa ngôn ngữ',
    partnersLabel: 'Đối tác công nghệ & Khách hàng tiêu biểu (Logo minh họa)',
    aboutEyebrow: '01 / Về chúng tôi',
    aboutTitle: 'Đưa tinh hoa kỹ thuật Nhật Bản vào thực tiễn doanh nghiệp Việt Nam.',
    aboutDesc1:
      'Công ty TNHH Japan-Tech được thành lập với sứ mệnh trở thành cầu nối công nghệ tin cậy giữa Nhật Bản và Việt Nam. Chúng tôi không chỉ cung cấp thiết bị mà còn chuyển giao trọn gói quy trình vận hành, tư duy quản trị chất lượng và cam kết đồng hành lâu dài cùng đối tác.',
    visionTitle: 'Tầm nhìn',
    visionDesc:
      'Trở thành đơn vị tiên phong tại Việt Nam trong lĩnh vực chuyển giao công nghệ xanh và giải pháp sản xuất bền vững từ Nhật Bản.',
    missionTitle: 'Sứ mệnh',
    missionDesc:
      'Nâng cao năng lực cạnh tranh cho doanh nghiệp Việt thông qua công nghệ chuẩn xác, thân thiện môi trường và hiệu quả kinh tế cao.',
    leaderEyebrow: 'Đội ngũ lãnh đạo & Chuyên gia',
    leaderTitle: 'Những người trực tiếp đồng hành cùng dự án',
    servicesEyebrow: '02 / Lĩnh vực & Dịch vụ',
    servicesTitle: 'Giải pháp công nghệ chuyển giao cốt lõi',
    processEyebrow: '03 / Quy trình làm việc',
    processTitle: 'Quy trình triển khai chuẩn mực 4 bước',
    projectsEyebrow: '04 / Dự án tiêu biểu',
    projectsTitle: 'Hiệu quả thực tế từ các dự án đã triển khai',
    contactEyebrow: '05 / Liên hệ hợp tác',
    contactTitle: 'Kết nối với đội ngũ kỹ thuật của chúng tôi',
    footerBrand: 'CÔNG TY TNHH JAPAN-TECH',
    footerDesc: 'Đối tác tin cậy trong chuyển giao công nghệ tiên tiến từ Nhật Bản, hướng tới phát triển bền vững cho doanh nghiệp Việt Nam.',
    footerNavTitle: 'Điều hướng',
    footerLangTitle: 'Ngôn ngữ',
    footerCopy: '© 2026 Công ty TNHH Japan-Tech. All rights reserved.',
  },
  ja: {
    navAbout: '会社概要',
    navServices: '事業内容',
    navProcess: '導入の流れ',
    navProjects: '実績・パートナー',
    navContact: 'お問い合わせ',
    navCta: 'ご相談はこちら',
    heroBadge: '日越技術移転パートナー',
    heroTitle: '日本の先端技術を、ベトナムの未来へ繋ぐ架け橋。',
    heroDesc:
      'Japan-Techは、循環型農業・環境処理・スマート製造など、日本基準の確かな技術と運用ノウハウをベトナム企業へ一貫して導入支援いたします。',
    heroBtnPrimary: 'プロジェクトのご相談',
    heroBtnSecondary: '事業内容を見る',
    metric1: '日本基準の確かな技術',
    metric2: '中核となる技術移転分野',
    metric3: '日本の技術パートナー企業',
    metric4: '多言語対応プロジェクト体制',
    partnersLabel: '技術パートナー・主要取引先（イメージ）',
    aboutEyebrow: '01 / 会社概要',
    aboutTitle: '日本の卓越した技術を、ベトナム企業の実践へ。',
    aboutDesc1:
      'Japan-Techは、日本とベトナムを結ぶ信頼の技術移転パートナーとして設立されました。設備の導入にとどまらず、運用プロセスや品質管理ノウハウまで一貫して提供し、長期的な成長を支援します。',
    visionTitle: 'ビジョン',
    visionDesc:
      'ベトナムにおけるグリーン技術および持続可能な製造ソリューション移転のリーディングカンパニーを目指します。',
    missionTitle: 'ミッション',
    missionDesc:
      '正確で環境に優しく、高い経済効果をもたらす日本技術を通じて、ベトナム企業の競争力を高めます。',
    leaderEyebrow: '経営陣・技術専門家',
    leaderTitle: 'プロジェクトを直接リードするチーム',
    servicesEyebrow: '02 / 事業内容',
    servicesTitle: '中核となる技術移転ソリューション',
    processEyebrow: '03 / 導入プロセス',
    processTitle: '標準化された4ステップの導入フロー',
    projectsEyebrow: '04 / 導入実績',
    projectsTitle: 'ベトナム国内での導入事例と成果',
    contactEyebrow: '05 / お問い合わせ',
    contactTitle: '技術チームへお気軽にご相談ください',
    footerBrand: 'JAPAN-TECH 有限会社',
    footerDesc: '日本の先端技術移転における信頼のパートナーとして、ベトナム企業の持続可能な成長を支援します。',
    footerNavTitle: 'ナビゲーション',
    footerLangTitle: '対応言語',
    footerCopy: '© 2026 Japan-Tech Co., Ltd. All rights reserved.',
  },
  en: {
    navAbout: 'About Us',
    navServices: 'Services',
    navProcess: 'Process',
    navProjects: 'Projects',
    navContact: 'Contact',
    navCta: 'Get in Touch',
    heroBadge: 'Japan – Vietnam Technology Transfer',
    heroTitle: 'Bridging Advanced Japanese Technology to Vietnam.',
    heroDesc:
      'Japan-Tech partners with Vietnamese enterprises to deliver circular agriculture, environmental waste treatment, and industrial optimization built to Japanese standards.',
    heroBtnPrimary: 'Request a Consultation',
    heroBtnSecondary: 'Explore Services',
    metric1: 'Japanese-Standard Technology',
    metric2: 'Core Transfer Sectors',
    metric3: 'Japanese Tech Partners',
    metric4: 'Multilingual Coordination',
    partnersLabel: 'Technology Partners & Key Clients (Placeholder)',
    aboutEyebrow: '01 / About Us',
    aboutTitle: 'Bringing Japanese Engineering Excellence to Vietnamese Enterprises.',
    aboutDesc1:
      'Japan-Tech was founded to serve as a trusted technology bridge between Japan and Vietnam. Beyond supplying equipment, we transfer complete operational workflows, quality management standards, and long-term technical support.',
    visionTitle: 'Vision',
    visionDesc:
      'To become Vietnam’s leading partner in green technology transfer and sustainable Japanese manufacturing solutions.',
    missionTitle: 'Mission',
    missionDesc:
      'To strengthen Vietnamese businesses through precise, eco-friendly, and cost-effective Japanese engineering.',
    leaderEyebrow: 'Leadership & Experts',
    leaderTitle: 'The People Directly Behind Every Project',
    servicesEyebrow: '02 / Services',
    servicesTitle: 'Core Technology Transfer Solutions',
    processEyebrow: '03 / Workflow',
    processTitle: 'Our Standardized 4-Step Implementation Process',
    projectsEyebrow: '04 / Case Studies',
    projectsTitle: 'Proven Results from Completed Projects',
    contactEyebrow: '05 / Contact Us',
    contactTitle: 'Connect with Our Technical Team',
    footerBrand: 'JAPAN-TECH CO., LTD.',
    footerDesc: 'Your trusted partner in transferring advanced Japanese technology for the sustainable growth of Vietnamese enterprises.',
    footerNavTitle: 'Navigation',
    footerLangTitle: 'Languages',
    footerCopy: '© 2026 Japan-Tech Co., Ltd. All rights reserved.',
  },
};

const buttons = document.querySelectorAll('.lang-btn');
const pill = document.getElementById('lang-pill');

function applyLanguage(lang) {
  const dict = translations[lang] || translations.vi;
  const langOrder = ['vi', 'ja', 'en'];
  const index = Math.max(0, langOrder.indexOf(lang));

  if (pill) {
    pill.style.transform = `translateX(${index * 100}%)`;
  }

  buttons.forEach((b) => {
    const isMatch = b.getAttribute('data-lang') === lang;
    b.classList.toggle('text-white', isMatch);
    b.classList.toggle('hover:text-slate-900', !isMatch);
  });

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem('japantech_lang', lang);
}

// Load saved language on page load
const savedLang = localStorage.getItem('japantech_lang') || 'vi';
applyLanguage(savedLang);

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang') || 'vi';
    applyLanguage(lang);
  });
});

// 2. Smooth Scroll Reveal + Staggered Child Animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Stagger direct children if .reveal-stagger is used
        if (entry.target.classList.contains('reveal-stagger')) {
          Array.from(entry.target.children).forEach((child, idx) => {
            child.style.transitionDelay = `${idx * 100}ms`;
            child.classList.add('visible');
          });
        }
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});

// 3. Animated Number Counters
const animateCounter = (el) => {
  const target = Number(el.getAttribute('data-target') || 0);
  const suffix = el.getAttribute('data-suffix') || '';
  const padZero = el.getAttribute('data-pad') === 'true';
  const duration = 1200;
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    const formatted = padZero && current < 10 ? `0${current}` : `${current}`;
    el.textContent = `${formatted}${suffix}`;

    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

// 4. 2px Top Scroll Progress Bar
const progressBar = document.getElementById('scroll-progress');
window.addEventListener(
  'scroll',
  () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  },
  { passive: true }
);

// 5. Live Contact Form Submission (Web3Forms)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!status || !submitBtn) return;

  submitBtn.textContent = 'Đang gửi...';
  submitBtn.disabled = true;

  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();

    status.classList.remove('hidden', 'text-red-600', 'text-emerald-700');
    if (result.success) {
      status.textContent = 'Cảm ơn quý khách! Yêu cầu đã được gửi thành công.';
      status.classList.add('text-emerald-700');
      form.reset();
    } else {
      status.textContent = 'Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua Hotline.';
      status.classList.add('text-red-600');
    }
  } catch {
    status.classList.remove('hidden');
    status.classList.add('text-red-600');
    status.textContent = 'Không thể kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.';
  } finally {
    submitBtn.textContent = 'Gửi yêu cầu tư vấn';
    submitBtn.disabled = false;
  }
});