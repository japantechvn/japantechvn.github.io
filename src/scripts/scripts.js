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
    // About Page
    aboutPageTitle: 'Về Công ty TNHH Japan-Tech',
    aboutPageDesc: 'Cầu nối uy tín đưa tinh hoa công nghệ, quy trình quản trị và tiêu chuẩn kỹ thuật Nhật Bản vào thực tiễn sản xuất tại Việt Nam.',
    aboutStoryEyebrow: 'Câu chuyện doanh nghiệp',
    aboutStoryTitle: 'Đồng hành từ khảo sát kỹ thuật đến vận hành bền vững.',
    profileTitle: 'Hồ sơ pháp lý & Thông tin doanh nghiệp',
    prof1L: 'Tên công ty', prof1V: 'Công ty TNHH Japan-Tech (Japan-Tech Co., Ltd.)',
    prof2L: 'Đại diện pháp luật', prof2V: 'Ông Đinh Gia Bình – Giám đốc',
    prof3L: 'Lĩnh vực hoạt động', prof3V: 'Chuyển giao công nghệ Nhật Bản, Nông nghiệp tuần hoàn, Xử lý môi trường & Tự động hóa',
    prof4L: 'Trụ sở chính', prof4V: 'TP. Hồ Chí Minh, Việt Nam (Điền địa chỉ cụ thể)',
    prof5L: 'Ngôn ngữ làm việc', prof5V: 'Tiếng Việt · Tiếng Nhật (日本語) · Tiếng Anh (English)',
    prof6L: 'Liên hệ', prof6V: 'contact@japantech.vn | +84 (0) 900 000 000',
    aboutCta: 'Kết nối với ban lãnh đạo',

    // Services Page
    srvPageTitle: 'Lĩnh vực công nghệ & Dịch vụ',
    srvPageDesc: 'Các giải pháp chuyển giao công nghệ được chọn lọc từ Nhật Bản và tinh chỉnh phù hợp với điều kiện vận hành tại Việt Nam.',
    srvHighlightsLabel: 'Hạng mục triển khai chính',
    srv1H1: 'Hệ thống lên men nhiệt cao khép kín, giảm thiểu mùi phát sinh',
    srv1H2: 'Công nghệ vi sinh bản quyền từ đối tác Nhật Bản',
    srv1H3: 'Tối ưu năng suất cây trồng và cải tạo độ phì nhiêu của đất',
    srv2H1: 'Công nghệ màng lọc sinh học MBR & tái sử dụng nước đầu ra',
    srv2H2: 'Thiết kế nhỏ gọn, tiết kiệm diện tích và điện năng vận hành',
    srv2H3: 'Hệ thống cảm biến giám sát chất lượng nước tự động 24/7',
    srv3H1: 'Đánh giá điểm nghẽn dây chuyền và tối ưu bố trí nhà xưởng',
    srv3H2: 'Tích hợp thiết bị đo lường, tự động hóa từ nhà sản xuất Nhật Bản',
    srv3H3: 'Giảm tỷ lệ lỗi sản phẩm và nâng cao năng suất lao động',
    srv4H1: 'Khảo sát thực địa cùng chuyên gia kỹ thuật Nhật Bản',
    srv4H2: 'Biên soạn tài liệu hướng dẫn vận hành song ngữ Việt – Nhật',
    srv4H3: 'Chính sách bảo trì định kỳ và hỗ trợ kỹ thuật xuyên suốt vòng đời dự án',
    srvCta: 'Yêu cầu khảo sát & Báo giá giải pháp',

    // Projects Page
    projPageTitle: 'Đối tác & Dự án tiêu biểu',
    projPageDesc: 'Hiệu quả thực tế được kiểm chứng thông qua mạng lưới đối tác kỹ thuật Nhật Bản và các công trình đã bàn giao tại Việt Nam.',
    projChallengeLabel: 'Bài toán thực tế:',
    proj1Challenge: 'Lượng phụ phẩm nông nghiệp lớn gây ô nhiễm mùi, thời gian ủ truyền thống kéo dài trên 60 ngày và chất lượng phân bón không đồng đều.',
    proj2Challenge: 'Nước thải sản xuất có tải lượng hữu cơ (COD/BOD) cao, chi phí vận hành trạm xử lý cũ lớn và không thể tái sử dụng.',
    partnersPageTitle: 'Mạng lưới đối tác công nghệ Nhật Bản',
    part1Field: 'Công nghệ xử lý môi trường',
    part2Field: 'Vi sinh nông nghiệp tuần hoàn',
    part3Field: 'Cảm biến & Tự động hóa',
    part4Field: 'Tái tạo năng lượng & Xử lý chất thải',
    projCta: 'Trao đổi về dự án của bạn',

    // Contact Page
    contactPageTitle: 'Liên hệ hợp tác',
    contactPageDesc: 'Đội ngũ tư vấn kỹ thuật song ngữ Việt – Nhật của Japan-Tech luôn sẵn sàng tiếp nhận yêu cầu và đồng hành cùng doanh nghiệp của bạn.',
    officeTitle: 'Thông tin văn phòng',
    officeDesc: 'Vui lòng điền biểu mẫu bên cạnh hoặc liên hệ trực tiếp qua hotline và email dưới đây. Chúng tôi phản hồi trong vòng 24 giờ làm việc.',
    lblCompName: 'Tên công ty', lblAddress: 'Địa chỉ trụ sở', lblHours: 'Giờ làm việc',
    valHours: 'Thứ 2 – Thứ 6: 08:00 – 17:30',
    formName: 'Họ và tên *', formCompany: 'Tên doanh nghiệp', formEmail: 'Email *',
    formPhone: 'Số điện thoại *', formService: 'Lĩnh vực quan tâm', formMessage: 'Nội dung yêu cầu *',
    formSubmit: 'Gửi yêu cầu tư vấn',
    opt1: 'Nông nghiệp tuần hoàn', opt2: 'Xử lý chất thải & Môi trường',
    opt3: 'Tự động hóa & Sản xuất thông minh', opt4: 'Tư vấn chuyển giao công nghệ khác',
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
    // About Page
    aboutPageTitle: 'Japan-Tech 会社概要',
    aboutPageDesc: '日本の先端技術、品質管理ノウハウ、確かなエンジニアリング基準をベトナムの現場へ届ける架け橋となります。',
    aboutStoryEyebrow: '企業ストーリー',
    aboutStoryTitle: '現地調査から持続可能な運用まで一貫して伴走。',
    profileTitle: '会社情報・法人概要',
    prof1L: '社名', prof1V: 'Japan-Tech 有限会社 (Japan-Tech Co., Ltd.)',
    prof2L: '代表者', prof2V: 'ディン・ザー・ビン（代表取締役）',
    prof3L: '事業内容', prof3V: '日本技術移転、循環型農業、環境・排水処理、工場自動化支援',
    prof4L: '所在地', prof4V: 'ベトナム・ホーチミン市（詳細住所）',
    prof5L: '対応言語', prof5V: 'ベトナム語 · 日本語 · 英語',
    prof6L: '連絡先', prof6V: 'contact@japantech.vn | +84 (0) 900 000 000',
    aboutCta: '経営陣へのお問い合わせ',

    // Services Page
    srvPageTitle: '事業内容・技術ソリューション',
    srvPageDesc: '日本から厳選した先端技術を、ベトナムの気候・運用環境に合わせて最適化し導入支援します。',
    srvHighlightsLabel: '主な導入項目',
    srv1H1: '密閉型高温発酵システムにより悪臭発生を大幅に抑制',
    srv1H2: '日本のパートナー企業による独自微生物技術の導入',
    srv1H3: '土壌改良と作物の収量・品質向上を同時に実現',
    srv2H1: '高効率MBR膜分離技術による処理水の再利用',
    srv2H2: '省スペース設計と運転電力の大幅削減',
    srv2H3: '24時間自動水質モニタリングセンサーシステム',
    srv3H1: '生産ラインのボトルネック診断と工場レイアウト最適化',
    srv3H2: '日本製計測機器・自動化設備の導入インテグレーション',
    srv3H3: '不良率の低減と現場の生産性向上',
    srv4H1: '日本人技術専門家による現地視察・技術診断',
    srv4H2: '日越バイリンガル運用マニュアルの作成',
    srv4H3: '定期メンテナンスおよび長期的な技術サポート体制',
    srvCta: '現地調査・お見積りのご依頼',

    // Projects Page
    projPageTitle: '導入実績・パートナー',
    projPageDesc: '日本の技術パートナーとの強固なネットワークと、ベトナム国内での確かな導入成果をご紹介します。',
    projChallengeLabel: '導入前の課題:',
    proj1Challenge: '大量の農業副産物による悪臭問題、60日以上かかる従来の堆肥化期間、および肥料品質のばらつき。',
    proj2Challenge: '高濃度有機排水（COD/BOD）の処理負荷が高く、既存設備の運転コスト増大と水資源の未利用が課題。',
    partnersPageTitle: '日本の技術パートナーネットワーク',
    part1Field: '環境・水処理技術',
    part2Field: '循環型農業バイオ技術',
    part3Field: 'センサー・自動化システム',
    part4Field: '再生エネルギー・廃棄物処理',
    projCta: 'プロジェクトについて相談する',

    // Contact Page
    contactPageTitle: 'お問い合わせ',
    contactPageDesc: '日越バイリンガルの技術コンサルティングチームが、貴社の課題に合わせて迅速にご対応いたします。',
    officeTitle: 'オフィス情報',
    officeDesc: '右記フォームまたはお電話・メールにてお気軽にご連絡ください。24営業時間以内にご返信いたします。',
    lblCompName: '社名', lblAddress: '所在地', lblHours: '営業時間',
    valHours: '月〜金：08:00 – 17:30',
    formName: 'お名前 *', formCompany: '貴社名', formEmail: 'メールアドレス *',
    formPhone: '電話番号 *', formService: 'ご関心のある分野', formMessage: 'お問い合わせ内容 *',
    formSubmit: 'お問い合わせを送信',
    opt1: '循環型農業', opt2: '廃棄物処理・環境ソリューション',
    opt3: '自動化・スマート製造', opt4: 'その他の技術移転に関するご相談',
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
    // About Page
    aboutPageTitle: 'About Japan-Tech Co., Ltd.',
    aboutPageDesc: 'A trusted bridge bringing Japanese engineering excellence, quality management, and technical standards to Vietnamese industry.',
    aboutStoryEyebrow: 'Our Story',
    aboutStoryTitle: 'Partnering from Technical Survey to Sustainable Operations.',
    profileTitle: 'Corporate Profile & Legal Information',
    prof1L: 'Company Name', prof1V: 'Japan-Tech Co., Ltd. (Công ty TNHH Japan-Tech)',
    prof2L: 'Legal Representative', prof2V: 'Mr. Dinh Gia Binh – Managing Director',
    prof3L: 'Core Business', prof3V: 'Japanese Technology Transfer, Circular Agriculture, Environmental Engineering & Automation',
    prof4L: 'Headquarters', prof4V: 'Ho Chi Minh City, Vietnam (Full Address)',
    prof5L: 'Working Languages', prof5V: 'Vietnamese · Japanese (日本語) · English',
    prof6L: 'Contact', prof6V: 'contact@japantech.vn | +84 (0) 900 000 000',
    aboutCta: 'Connect with Our Leadership',

    // Services Page
    srvPageTitle: 'Technology Sectors & Services',
    srvPageDesc: 'Proven Japanese technologies carefully selected and tailored for real-world operating conditions in Vietnam.',
    srvHighlightsLabel: 'Key Deliverables',
    srv1H1: 'Closed-loop high-temperature fermentation minimizing odor emissions',
    srv1H2: 'Proprietary microbial technology from Japanese partners',
    srv1H3: 'Higher crop yields and long-term soil regeneration',
    srv2H1: 'High-efficiency MBR membrane filtration & water reclamation',
    srv2H2: 'Compact footprint with reduced operational electricity costs',
    srv2H3: '24/7 automated water quality monitoring sensors',
    srv3H1: 'Production bottleneck audits and factory layout optimization',
    srv3H2: 'Integration of Japanese measurement & automation hardware',
    srv3H3: 'Lower defect rates and higher labor productivity',
    srv4H1: 'On-site technical surveys with Japanese specialists',
    srv4H2: 'Bilingual Vietnamese–Japanese SOPs and training manuals',
    srv4H3: 'Scheduled preventive maintenance and lifecycle support',
    srvCta: 'Request a Site Survey & Quote',

    // Projects Page
    projPageTitle: 'Partners & Featured Projects',
    projPageDesc: 'Verified real-world impact powered by our Japanese technical network and completed deployments across Vietnam.',
    projChallengeLabel: 'The Challenge:',
    proj1Challenge: 'Large volumes of agricultural waste causing odor pollution, 60+ day composting cycles, and inconsistent fertilizer quality.',
    proj2Challenge: 'High organic load (COD/BOD) in factory wastewater, high legacy treatment costs, and zero water reuse.',
    partnersPageTitle: 'Japanese Technology Partner Network',
    part1Field: 'Environmental Treatment Tech',
    part2Field: 'Circular Agriculture Bio-Tech',
    part3Field: 'Sensors & Industrial Automation',
    part4Field: 'Renewable Energy & Waste Tech',
    projCta: 'Discuss Your Project',

    // Contact Page
    contactPageTitle: 'Contact Us',
    contactPageDesc: 'Our bilingual Vietnam–Japan technical advisory team is ready to review your project requirements.',
    officeTitle: 'Office Information',
    officeDesc: 'Fill out the inquiry form or reach us directly via hotline or email. We respond within 24 business hours.',
    lblCompName: 'Company Name', lblAddress: 'Headquarters', lblHours: 'Business Hours',
    valHours: 'Mon – Fri: 08:00 – 17:30',
    formName: 'Full Name *', formCompany: 'Company Name', formEmail: 'Email *',
    formPhone: 'Phone Number *', formService: 'Area of Interest', formMessage: 'Project Details *',
    formSubmit: 'Submit Inquiry',
    opt1: 'Circular Agriculture', opt2: 'Waste & Environmental Solutions',
    opt3: 'Automation & Smart Manufacturing', opt4: 'Other Technology Transfer Inquiry',
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