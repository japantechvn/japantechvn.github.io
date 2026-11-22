// 1. Live Demo Translations (VI / JP / EN)
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
  },
};

// Sliding Language Switcher
const buttons = document.querySelectorAll('.lang-btn');
const pill = document.getElementById('lang-pill');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const index = Number(btn.getAttribute('data-index'));
    const lang = btn.getAttribute('data-lang') || 'vi';

    if (pill) {
      pill.style.transform = `translateX(${index * 100}%)`;
    }

    buttons.forEach((b) => {
      b.classList.remove('text-white');
      b.classList.add('hover:text-slate-900');
    });
    btn.classList.add('text-white');
    btn.classList.remove('hover:text-slate-900');

    const dict = translations[lang];
    if (dict) {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key && dict[key]) {
          el.textContent = dict[key];
        }
      });
    }
  });
});

// 2. Smooth Scroll Reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// 3. Animated Number Counters
const animateCounter = (el) => {
  const target = Number(el.getAttribute('data-target') || 0);
  const suffix = el.getAttribute('data-suffix') || '';
  const padZero = el.getAttribute('data-pad') === 'true';
  const duration = 1200; // ms
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    // Ease-out cubic for a smooth, restrained corporate finish
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    const formatted = padZero && current < 10 ? `0${current}` : `${current}`;
    el.textContent = `${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
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
  { threshold: 0.5 }
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