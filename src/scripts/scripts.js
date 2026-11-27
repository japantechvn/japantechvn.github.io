// 1. Complete Translations Dictionary (VI / JP / EN)
const translations = {
  vi: {
    // Navbar & Footer
    navAbout: 'Về chúng tôi',
    navServices: 'Lĩnh vực & Dịch vụ',
    navProcess: 'Quy trình',
    navProjects: 'Đối tác & Dự án',
    navContact: 'Liên hệ',
    navCta: 'Tư vấn ngay',
    footerBrand: 'CÔNG TY TNHH JAPAN-TECH',
    footerDesc: 'Đối tác tin cậy trong chuyển giao công nghệ tiên tiến từ Nhật Bản, hướng tới phát triển bền vững cho doanh nghiệp Việt Nam.',
    footerNavTitle: 'Điều hướng',
    footerLangTitle: 'Ngôn ngữ',
    footerCopy: '© 2026 Công ty TNHH Japan-Tech. All rights reserved.',

    // Home Page
    heroBadge: 'Japan – Vietnam Technology Transfer',
    heroTitle: 'Cầu nối chuyển giao công nghệ tiên tiến từ Nhật Bản.',
    heroDesc: 'Công ty TNHH Japan-Tech đồng hành cùng doanh nghiệp Việt Nam triển khai các giải pháp nông nghiệp tuần hoàn, xử lý môi trường và tối ưu hóa vận hành theo tiêu chuẩn kỹ thuật Nhật Bản.',
    heroBtnPrimary: 'Liên hệ tư vấn dự án',
    heroBtnSecondary: 'Khám phá lĩnh vực',
    metric1: 'Công nghệ chuẩn Nhật Bản',
    metric2: 'Lĩnh vực chuyển giao cốt lõi',
    metric3: 'Đối tác kỹ thuật Nhật Bản',
    metric4: 'Đội ngũ điều phối đa ngôn ngữ',
    partnersLabel: 'Đối tác công nghệ & Khách hàng tiêu biểu (Logo minh họa)',
    aboutEyebrow: '01 / Về chúng tôi',
    aboutTitle: 'Đưa tinh hoa kỹ thuật Nhật Bản vào thực tiễn doanh nghiệp Việt Nam.',
    aboutDesc1: 'Công ty TNHH Japan-Tech được thành lập với sứ mệnh trở thành cầu nối công nghệ tin cậy giữa Nhật Bản và Việt Nam. Chúng tôi không chỉ cung cấp thiết bị mà còn chuyển giao trọn gói quy trình vận hành, tư duy quản trị chất lượng và cam kết đồng hành lâu dài cùng đối tác.',
    visionTitle: 'Tầm nhìn',
    visionDesc: 'Trở thành đơn vị tiên phong tại Việt Nam trong lĩnh vực chuyển giao công nghệ xanh và giải pháp sản xuất bền vững từ Nhật Bản.',
    missionTitle: 'Sứ mệnh',
    missionDesc: 'Nâng cao năng lực cạnh tranh cho doanh nghiệp Việt thông qua công nghệ chuẩn xác, thân thiện môi trường và hiệu quả kinh tế cao.',
    leaderEyebrow: 'Đội ngũ lãnh đạo & Chuyên gia',
    leaderTitle: 'Những người trực tiếp đồng hành cùng dự án',
    lead1Role: 'Giám đốc Điều hành (Director)',
    lead1Bio: 'Hơn 15 năm kinh nghiệm kết nối thương mại và điều phối các dự án chuyển giao công nghệ giữa doanh nghiệp Nhật Bản và Việt Nam.',
    lead2Role: 'Cố vấn Kỹ thuật Trưởng (Placeholder)',
    lead2Bio: 'Chuyên gia cấp cao trong lĩnh vực công nghệ môi trường và xử lý nước thải công nghiệp với 20 năm công tác tại Osaka, Nhật Bản.',
    lead3Role: 'Trưởng phòng Triển khai Dự án (Placeholder)',
    lead3Bio: 'Phụ trách quản lý tiến độ, điều phối kỹ thuật song ngữ Việt – Nhật và đảm bảo tiêu chuẩn vận hành sau bàn giao.',
    servicesEyebrow: '02 / Lĩnh vực & Dịch vụ',
    servicesTitle: 'Giải pháp công nghệ chuyển giao cốt lõi',
    srv1Title: 'Nông nghiệp tuần hoàn',
    srv1Desc: 'Chuyển giao hệ thống canh tác hữu cơ khép kín, tái sử dụng phụ phẩm nông nghiệp và công nghệ vi sinh chuẩn Nhật Bản giúp tăng năng suất bền vững.',
    srv2Title: 'Xử lý chất thải & Môi trường',
    srv2Desc: 'Công nghệ xử lý nước thải công nghiệp, rác thải hữu cơ và kiểm soát khí thải đạt chuẩn QCVN & tiêu chuẩn môi trường Nhật Bản.',
    srv3Title: 'Tự động hóa & Sản xuất thông minh',
    srv3Desc: 'Tư vấn và tích hợp dây chuyền sản xuất tinh gọn (Kaizen/Lean), cảm biến IoT giám sát vận hành và tối ưu hóa chi phí năng lượng nhà máy.',
    srv4Title: 'Tư vấn & Đào tạo kỹ thuật',
    srv4Desc: 'Kết nối trực tiếp đội ngũ kỹ sư Nhật Bản khảo sát thực địa, đào tạo nhân sự vận hành và đồng hành bảo trì dài hạn cho doanh nghiệp.',
    processEyebrow: '03 / Quy trình làm việc',
    processTitle: 'Quy trình triển khai chuẩn mực 4 bước',
    proc1Title: 'Khảo sát & Đánh giá',
    proc1Desc: 'Tiếp nhận nhu cầu, khảo sát thực tế tại nhà máy/trang trại và phân tích bài toán kỹ thuật.',
    proc2Title: 'Thiết kế giải pháp',
    proc2Desc: 'Phối hợp với đối tác Nhật Bản xây dựng phương án công nghệ tối ưu chi phí và hiệu suất.',
    proc3Title: 'Chuyển giao & Lắp đặt',
    proc3Desc: 'Nhập khẩu thiết bị, thi công lắp đặt và hiệu chỉnh hệ thống theo tiêu chuẩn kỹ thuật nghiêm ngặt.',
    proc4Title: 'Đào tạo & Đồng hành',
    proc4Desc: 'Bàn giao quy trình vận hành, đào tạo đội ngũ kỹ thuật viên và bảo trì định kỳ dài hạn.',
    projectsEyebrow: '04 / Dự án tiêu biểu',
    projectsTitle: 'Hiệu quả thực tế từ các dự án đã triển khai',
    projTechLabel: 'Công nghệ áp dụng:',
    projResultLabel: 'Kết quả đạt được:',
    proj1Cat: 'Nông nghiệp tuần hoàn',
    proj1Title: 'Hệ thống xử lý phụ phẩm nông nghiệp thành phân bón hữu cơ sinh học',
    proj1Tech: 'Công nghệ lên men nhiệt cao từ Nhật Bản (Bioreactor System)',
    proj1Result: 'Rút ngắn thời gian ủ từ 60 ngày xuống 14 ngày, giảm 85% mùi phát sinh.',
    proj2Cat: 'Xử lý môi trường',
    proj2Title: 'Trạm xử lý nước thải tuần hoàn cho nhà máy chế biến thực phẩm',
    proj2Tech: 'Màng lọc sinh học MBR & Hệ thống giám sát tự động chuẩn Nhật',
    proj2Result: 'Tái sử dụng 65% lượng nước đầu ra, tiết kiệm 30% điện năng vận hành.',
    contactEyebrow: '05 / Liên hệ hợp tác',
    contactTitle: 'Kết nối với đội ngũ kỹ thuật của chúng tôi',

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

    // Added for redesign
    navHome: 'Trang chủ',
    aboutMore: 'Tìm hiểu thêm về chúng tôi',
    srvMore: 'Xem tất cả dịch vụ →',
    projMore: 'Xem tất cả dự án →',
    processDesc: 'Từ khảo sát đến vận hành, mỗi bước đều được kiểm soát theo tiêu chuẩn chất lượng Nhật Bản.',
    stepLabel: 'BƯỚC',
    footerCtaEyebrow: 'Bắt đầu dự án',
    footerCtaTitle: 'Cùng kiến tạo tương lai bền vững.',
    footerCtaBtn: 'Liên hệ ngay',
    backToTop: 'Lên đầu trang',
    formSuccess: 'Cảm ơn quý khách! Yêu cầu đã được gửi thành công.',
    formError: 'Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua Hotline.',
    formNetwork: 'Không thể kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.',
  },

  ja: {
    // Navbar & Footer
    navAbout: '会社概要',
    navServices: '事業内容',
    navProcess: '導入の流れ',
    navProjects: '実績・パートナー',
    navContact: 'お問い合わせ',
    navCta: 'ご相談はこちら',
    footerBrand: 'JAPAN-TECH 有限会社',
    footerDesc: '日本の先端技術移転における信頼のパートナーとして、ベトナム企業の持続可能な成長を支援します。',
    footerNavTitle: 'ナビゲーション',
    footerLangTitle: '対応言語',
    footerCopy: '© 2026 Japan-Tech Co., Ltd. All rights reserved.',

    // Home Page
    heroBadge: '日越技術移転パートナー',
    heroTitle: '日本の先端技術を、ベトナムの未来へ繋ぐ架け橋。',
    heroDesc: 'Japan-Techは、循環型農業・環境処理・スマート製造など、日本基準の確かな技術と運用ノウハウをベトナム企業へ一貫して導入支援いたします。',
    heroBtnPrimary: 'プロジェクトのご相談',
    heroBtnSecondary: '事業内容を見る',
    metric1: '日本基準の確かな技術',
    metric2: '中核となる技術移転分野',
    metric3: '日本の技術パートナー企業',
    metric4: '多言語対応プロジェクト体制',
    partnersLabel: '技術パートナー・主要取引先（イメージ）',
    aboutEyebrow: '01 / 会社概要',
    aboutTitle: '日本の卓越した技術を、ベトナム企業の実践へ。',
    aboutDesc1: 'Japan-Techは、日本とベトナムを結ぶ信頼の技術移転パートナーとして設立されました。設備の導入にとどまらず、運用プロセスや品質管理ノウハウまで一貫して提供し、長期的な成長を支援します。',
    visionTitle: 'ビジョン',
    visionDesc: 'ベトナムにおけるグリーン技術および持続可能な製造ソリューション移転のリーディングカンパニーを目指します。',
    missionTitle: 'ミッション',
    missionDesc: '正確で環境に優しく、高い経済効果をもたらす日本技術を通じて、ベトナム企業の競争力を高めます。',
    leaderEyebrow: '経営陣・技術専門家',
    leaderTitle: 'プロジェクトを直接リードするチーム',
    lead1Role: '代表取締役 (Director)',
    lead1Bio: '15年以上にわたり、日本とベトナムの企業間における商取引および技術移転プロジェクトを統括。',
    lead2Role: 'チーフ技術顧問 (Placeholder)',
    lead2Bio: '大阪にて20年間、環境技術および産業排水処理の第一線で活躍してきたシニアエンジニア。',
    lead3Role: 'プロジェクト推進部長 (Placeholder)',
    lead3Bio: '日越バイリンガル体制での工程管理、技術調整、導入後の品質維持を担当。',
    servicesEyebrow: '02 / 事業内容',
    servicesTitle: '中核となる技術移転ソリューション',
    srv1Title: '循環型農業ソリューション',
    srv1Desc: '農業副産物を再利用する完全循環型の有機栽培システムと、日本基準の微生物技術を導入支援します。',
    srv2Title: '廃棄物処理・環境ソリューション',
    srv2Desc: 'ベトナム国家基準（QCVN）および日本基準を満たす産業排水処理、有機廃棄物処理、排ガス対策を提供。',
    srv3Title: '自動化・スマート製造',
    srv3Desc: 'カイゼン（Kaizen）に基づく生産ライン最適化、IoTセンサーによる稼働監視、工場の省エネ化を支援。',
    srv4Title: '技術コンサルティング・人材育成',
    srv4Desc: '日本人技術者による現地調査から、運用スタッフへの実地研修、長期的な保守サポートまで一貫対応。',
    processEyebrow: '03 / 導入プロセス',
    processTitle: '標準化された4ステップの導入フロー',
    proc1Title: '現地調査・課題分析',
    proc1Desc: '工場や農場の現場を直接調査し、技術的な課題と導入要件を明確化します。',
    proc2Title: '最適ソリューション設計',
    proc2Desc: '日本の技術パートナーと連携し、コストと性能のバランスに優れた導入計画を策定します。',
    proc3Title: '技術移転・設備導入',
    proc3Desc: '設備の輸入・据付から厳格な日本基準に基づく試運転・調整まで責任を持って遂行します。',
    proc4Title: '研修・長期サポート',
    proc4Desc: '運用マニュアルの引き渡し、現地技術者への指導、定期メンテナンスを継続的に提供します。',
    projectsEyebrow: '04 / 導入実績',
    projectsTitle: 'ベトナム国内での導入事例と成果',
    projTechLabel: '導入技術:',
    projResultLabel: '導入成果:',
    proj1Cat: '循環型農業',
    proj1Title: '農業副産物の高速発酵・有機バイオ肥料化システム',
    proj1Tech: '日本式高温発酵バイオリアクターシステム',
    proj1Result: '堆肥化期間を60日から14日に短縮し、悪臭発生を85%削減。',
    proj2Cat: '環境処理',
    proj2Title: '食品加工工場向け循環型排水処理プラント',
    proj2Tech: 'MBR膜分離活性汚泥法・日本基準自動監視システム',
    proj2Result: '処理水の65%を再利用し、運転電力を30%削減。',
    contactEyebrow: '05 / お問い合わせ',
    contactTitle: '技術チームへお気軽にご相談ください',

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

    // Added for redesign
    navHome: 'ホーム',
    aboutMore: '会社概要を見る',
    srvMore: 'すべての事業を見る →',
    projMore: 'すべての実績を見る →',
    processDesc: '現地調査から運用まで、すべての工程を日本の品質基準で管理します。',
    stepLabel: 'STEP',
    footerCtaEyebrow: 'プロジェクトを始める',
    footerCtaTitle: '持続可能な未来を、共に創る。',
    footerCtaBtn: 'お問い合わせ',
    backToTop: 'ページトップへ',
    formSuccess: 'お問い合わせありがとうございます。送信が完了しました。',
    formError: 'エラーが発生しました。もう一度お試しいただくか、お電話にてご連絡ください。',
    formNetwork: 'サーバーに接続できません。通信環境をご確認のうえ、再度お試しください。',
  },

  en: {
    // Navbar & Footer
    navAbout: 'About Us',
    navServices: 'Services',
    navProcess: 'Process',
    navProjects: 'Projects',
    navContact: 'Contact',
    navCta: 'Get in Touch',
    footerBrand: 'JAPAN-TECH CO., LTD.',
    footerDesc: 'Your trusted partner in transferring advanced Japanese technology for the sustainable growth of Vietnamese enterprises.',
    footerNavTitle: 'Navigation',
    footerLangTitle: 'Languages',
    footerCopy: '© 2026 Japan-Tech Co., Ltd. All rights reserved.',

    // Home Page
    heroBadge: 'Japan – Vietnam Technology Transfer',
    heroTitle: 'Bridging Advanced Japanese Technology to Vietnam.',
    heroDesc: 'Japan-Tech partners with Vietnamese enterprises to deliver circular agriculture, environmental waste treatment, and industrial optimization built to Japanese standards.',
    heroBtnPrimary: 'Request a Consultation',
    heroBtnSecondary: 'Explore Services',
    metric1: 'Japanese-Standard Technology',
    metric2: 'Core Transfer Sectors',
    metric3: 'Japanese Tech Partners',
    metric4: 'Multilingual Coordination',
    partnersLabel: 'Technology Partners & Key Clients (Placeholder)',
    aboutEyebrow: '01 / About Us',
    aboutTitle: 'Bringing Japanese Engineering Excellence to Vietnamese Enterprises.',
    aboutDesc1: 'Japan-Tech was founded to serve as a trusted technology bridge between Japan and Vietnam. Beyond supplying equipment, we transfer complete operational workflows, quality management standards, and long-term technical support.',
    visionTitle: 'Vision',
    visionDesc: 'To become Vietnam’s leading partner in green technology transfer and sustainable Japanese manufacturing solutions.',
    missionTitle: 'Mission',
    missionDesc: 'To strengthen Vietnamese businesses through precise, eco-friendly, and cost-effective Japanese engineering.',
    leaderEyebrow: 'Leadership & Experts',
    leaderTitle: 'The People Directly Behind Every Project',
    lead1Role: 'Managing Director',
    lead1Bio: 'Over 15 years of experience bridging commercial partnerships and coordinating Japan–Vietnam technology transfer projects.',
    lead2Role: 'Chief Technical Advisor (Placeholder)',
    lead2Bio: 'Senior specialist in environmental engineering and industrial wastewater treatment with 20 years of experience in Osaka, Japan.',
    lead3Role: 'Head of Project Delivery (Placeholder)',
    lead3Bio: 'Leads project scheduling, bilingual Vietnam–Japan technical coordination, and post-handover operational standards.',
    servicesEyebrow: '02 / Services',
    servicesTitle: 'Core Technology Transfer Solutions',
    srv1Title: 'Circular Agriculture',
    srv1Desc: 'Closed-loop organic farming systems, agricultural byproduct recycling, and Japanese microbial technology for sustainable yields.',
    srv2Title: 'Waste & Environmental Solutions',
    srv2Desc: 'Industrial wastewater treatment, organic waste processing, and emission control meeting both QCVN and Japanese standards.',
    srv3Title: 'Automation & Smart Manufacturing',
    srv3Desc: 'Lean/Kaizen production line consulting, industrial IoT monitoring sensors, and factory energy optimization.',
    srv4Title: 'Technical Advisory & Training',
    srv4Desc: 'Direct on-site surveys with Japanese engineers, hands-on operator training, and long-term maintenance support.',
    processEyebrow: '03 / Workflow',
    processTitle: 'Our Standardized 4-Step Implementation Process',
    proc1Title: 'Site Survey & Assessment',
    proc1Desc: 'Evaluate operational needs, conduct on-site factory or farm surveys, and analyze technical requirements.',
    proc2Title: 'Solution Design',
    proc2Desc: 'Collaborate with Japanese partners to engineer a cost-effective, high-efficiency technical blueprint.',
    proc3Title: 'Transfer & Installation',
    proc3Desc: 'Import equipment, oversee installation, and calibrate systems to strict Japanese engineering standards.',
    proc4Title: 'Training & Ongoing Support',
    proc4Desc: 'Hand over SOPs, train local technicians, and provide scheduled preventive maintenance.',
    projectsEyebrow: '04 / Case Studies',
    projectsTitle: 'Proven Results from Completed Projects',
    projTechLabel: 'Technology Applied:',
    projResultLabel: 'Key Results:',
    proj1Cat: 'Circular Agriculture',
    proj1Title: 'Agricultural Byproduct to Bio-Organic Fertilizer System',
    proj1Tech: 'Japanese High-Temperature Fermentation Bioreactor System',
    proj1Result: 'Cut composting time from 60 days to 14 days and reduced odor emissions by 85%.',
    proj2Cat: 'Environmental Solutions',
    proj2Title: 'Circular Wastewater Treatment Plant for Food Processing',
    proj2Tech: 'MBR Biological Membrane & Japanese Automated Monitoring',
    proj2Result: 'Reclaimed 65% of treated water and reduced operational electricity costs by 30%.',
    contactEyebrow: '05 / Contact Us',
    contactTitle: 'Connect with Our Technical Team',

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

    // Added for redesign
    navHome: 'Home',
    aboutMore: 'Learn more about us',
    srvMore: 'View all services →',
    projMore: 'View all projects →',
    processDesc: 'From site survey to operation, every step is controlled to Japanese quality standards.',
    stepLabel: 'STEP',
    footerCtaEyebrow: 'Start a project',
    footerCtaTitle: 'Building a sustainable future, together.',
    footerCtaBtn: 'Contact us',
    backToTop: 'Back to top',
    formSuccess: 'Thank you! Your inquiry has been sent successfully.',
    formError: 'Something went wrong. Please try again or call our hotline.',
    formNetwork: 'Could not reach the server. Please check your connection and try again.',
  },
};

const pill = document.getElementById('lang-pill');
const langOrder = ['vi', 'ja', 'en'];

const getLang = () => {
  try {
    return localStorage.getItem('japantech_lang') || 'vi';
  } catch {
    return 'vi';
  }
};
const t = (key) => (translations[getLang()] || translations.vi)[key] || translations.vi[key];

function applyLanguage(lang) {
  const dict = translations[lang] || translations.vi;
  const index = Math.max(0, langOrder.indexOf(lang));

  if (pill) pill.style.transform = `translateX(${index * 100}%)`;

  document.querySelectorAll('[data-lang]').forEach((b) => {
    const isMatch = b.getAttribute('data-lang') === lang;
    b.classList.toggle('is-active', isMatch);
    b.setAttribute('aria-pressed', String(isMatch));
  });

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  try {
    localStorage.setItem('japantech_lang', lang);
  } catch {}
}

applyLanguage(getLang());

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang') || 'vi'));
});

// (Scroll reveals, counters and progress bar now live in motion.js)

// 5. Live Contact Form Submission (Web3Forms)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!status || !submitBtn) return;

  submitBtn.textContent = '...';
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
      status.textContent = t('formSuccess');
      status.classList.add('text-emerald-700');
      form.reset();
    } else {
      status.textContent = t('formError');
      status.classList.add('text-red-600');
    }
  } catch {
    status.classList.remove('hidden', 'text-emerald-700');
    status.classList.add('text-red-600');
    status.textContent = t('formNetwork');
  } finally {
    submitBtn.textContent = t('formSubmit');
    submitBtn.disabled = false;
  }
});