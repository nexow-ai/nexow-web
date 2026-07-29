import type { SiteContent } from '../content';

export const tr: SiteContent = {
  nav: {
    links: [
      { label: 'Özellikler', href: '/features' },
      { label: 'Topluluk', href: '/community' },
      { label: 'Bağlantılar', href: '/connectors' },
      { label: 'Planlar', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Hakkında', href: '/about' },
    ],
    launch: 'Uygulamayı Başlat',
    menu: 'Menüyü Aç',
    close: 'Menüyü Kapat',
  },
  footer: {
    tagline: 'Bir widget açıklayın. Nexow onu kurar, canlı pazar verilerine bağlar ve tuvalinize koyar.',
    columns: [
      {
        title: 'Ürün',
        links: [
          { label: 'Özellikler', href: '/features' },
          { label: 'Topluluk', href: '/community' },
          { label: 'Planlar', href: '/plans' },
          { label: 'Bağlantılar', href: '/connectors' },
          { label: 'Otomasyonlar', href: '/#automate' },
          { label: 'Yol Haritası', href: '/#roadmap' },
        ],
      },
      {
        title: 'Şirket',
        links: [
          { label: 'Hakkında', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Yasal', href: '/legal' },
        ],
      },
      {
        title: 'Yasal',
        links: [
          { label: 'Gizlilik', href: '/privacy' },
          { label: 'Kullanım koşulları', href: '/terms' },
          { label: 'Çerezler', href: '/cookies' },
          { label: 'Kabul edilebilir kullanım', href: '/acceptable-use' },
          { label: 'Uygulamayı aç', href: 'https://x.nexow.ai' },
        ],
      },
    ],
    rights: 'Tüm hakları saklıdır.',
    disclaimer:
      'Nexow bir araçlama ve görselleştirme platformudur. Burada hiçbir şey finansal tavsiye değildir. Piyasalar riski taşır; sorumlu bir şekilde ticaret yapın.',
    builtWith: 'Astro ile yapılmıştır. Varsayılan olarak özel.',
  },
  home: {
    meta: {
      title: 'Nexow — Yapay Zeka ile Sade Dilde Pazar Panolarını Yapın',
      description:
        'Nexow, piyasalar için yapay zeka tabanlı bir çalışma alanıdır. Sade İngilizce ile bir widget açıklayın ve Nexow onu kurar, 45+ bağlantıdan canlı verilere bağlar ve bulut botları, yapay zeka ajanları, bir yapıcı topluluğu ve XP ödülü ekler — varsayılan olarak özel, başlangıç için ücretsiz.',
    },
    hero: {
      badge: 'Ön izleme şimdi canlı',
      titleLead: 'Açıklayın.',
      titleGradient: 'Nexow kurar.',
      titleTail: 'Ticaret yapın.',
      subtitle:
        'Piyasalar için yapay zeka tabanlı bir çalışma alanı. Sade dilde herhangi bir widget isteyin — Nexow kodu yazar, güvenle çalıştırır ve canlı verileri serbest biçimli bir tuvale akışa sokar. Bulut botları ve ajanları ile otomatikleştirin, ardından yapıcı topluluğuna bağlanın.',
      ctaPrimary: 'Uygulamayı Başlat',
      ctaSecondary: 'Nasıl Çalıştığını Gör',
      note: 'Uygulamayı denemek için kayıt gerekmez · Tarayıcınızda özel · Veya 10K kredi ayrılmış bir ücretsiz hesap',
      promptExample: 'Coinbase\'ten 20 & 50 EMA ve altında RSI ile BTC-USD\'nin mum grafik gösterimini göster.',
      promptPlaceholder: 'Bir widget açıklayın…',
    },
    ticker: { label: 'Canlı bağlantılar' },
    trust: 'Her pazar için bir tuval — Döviz, kripto, hisse senedi, vadeli işlem, opsiyon ve tahmin piyasaları.',
    stats: [
      { n: 45, suffix: '+', label: 'veri, cüzdanlar, sosyal ortamlar ve piyasalar için canlı bağlantı' },
      { n: 6, label: 'bir tuval üzerinde varlık sınıfı' },
      { n: 10, suffix: 'K', label: 'kayıt sırasında ayrılmış ücretsiz yapay zeka kredisi' },
      { n: 30, prefix: '<', suffix: 's', label: 'cümleden çalışan widgete kadar' },
    ],
    showcase: {
      eyebrow: 'Vitrin',
      title: 'Bir cümle. Herhangi bir widget.',
      subtitle:
        'Grafikler, emir defterleri, ısı haritaları, oranlar — açıklayabilirseniz Nexow onu yapabilir ve canlı verilere bağlayabilir.',
      generatedBadge: 'üretilen ve canlı',
      tabs: [
        {
          label: 'Mumlar + göstergeler',
          prompt: 'Coinbase\'ten 20 & 50 EMA ve altında RSI ile BTC-USD mum grafiği.',
          caption: 'Coinbase\'ten akış — EMA ve RSI widget içinde hesaplanır.',
        },
        {
          label: 'Emir defteri derinliği',
          prompt: 'Deribit üzerinde ETH-PERP için canlı emir defteri derinliği, teklif vs talep.',
          caption: 'Teklif ve talepler Deribit defterinden gerçek zamanlı olarak toplanır.',
        },
        {
          label: 'Korelasyon ısı haritası',
          prompt: 'BTC, ETH, SOL, EURUSD, altın ve SPX için 30 günlük korelasyon ısı haritası.',
          caption: 'Yeni fiyatlar ortaya çıktıkça çapraz varlık korelasyonları yeniden hesaplanır.',
        },
        {
          label: 'Tahmin piyasaları',
          prompt: 'Sonraki FOMC\'de Kalshi oran düşürme olasılığı, 24 saat değişim ile.',
          caption: 'Olay olasılıkları doğrudan Kalshi emir defterinden akış yapılır.',
        },
      ],
    },
    features: {
      eyebrow: 'Uygulama',
      title: "Nexow'un her yüzeyi",
      subtitle:
        "Serbest tuvalde widget'ler, canlı bağlayıcılar, bulut Bots ve Agents, gerçek zamanlı sohbetli maker topluluğu, pazar yerleri, temalar ve yolunuzdan çekilen toolbar ile Dock.",
      items: [
        {
          icon: 'sparkles',
          title: "Widget'ler",
          body: "Bir widget'i sıradan kelimelerle anlatın. Nexow arayüzü ve mantığı üretir, korumalı çalıştırır ve konuşarak iyileştirmenize izin verir.",
        },
        {
          icon: 'layers',
          title: 'Tuval ve çalışma alanları',
          body: "Widget'leri çalışma alanları ve ekranlar arasında sürükleyin, yeniden boyutlandırın ve düzenleyin. Gruplayın, Links ile verilerini bağlayın ve kurulumları anında değiştirin.",
        },
        {
          icon: 'plug',
          title: 'Bağlayıcılar',
          body: "Widget'leri piyasalara, veritabanlarına, cüzdanlara ve sosyal uygulamalara bağlayın — veya canlı veriye ihtiyaç duyana kadar durumu yerelde tutun.",
        },
        {
          icon: 'bot',
          title: 'Bots',
          body: "Verilerinizi izleyen ve sekmeniz kapalıyken bile widget'lere sinyal gönderen bulut otomasyonları.",
        },
        {
          icon: 'cpu',
          title: 'Agents',
          body: 'Model, bellek, beceriler, araçlar, bilgi ve tetikleyicileri olan yapay zeka takım arkadaşları — bulutta oluşturun, dağıtın ve çalıştırmaları inceleyin.',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Tüm çalışma alanı için yapay zeka asistanı: widget oluşturun, tuvali düzenleyin ve sırada neyi değiştireceğinizi sorun.',
        },
        {
          icon: 'users',
          title: 'Topluluk',
          body: "Maker'ları takip edin, akışa gönderin, widget'leri kütüphanede paylaşın ve herkese açık bir @handle alın.",
        },
        {
          icon: 'store',
          title: 'Marketplace',
          body: "Widget'leri, temaları, ekranları, Bots ve Agents'i yayınlayın ve yükleyin — her remake'i ödüllendiren lineage ile.",
        },
        {
          icon: 'mail',
          title: 'Gerçek zamanlı sohbetler',
          body: "Arkadaşlarınız ve kişilerinizle canlı mesajlaşın — presence, tepkiler ve Dock'taki inbox ile bire bir ve grup DM'ler.",
        },
        {
          icon: 'vault',
          title: 'Hesap',
          body: 'Krediler, itibar, kullanım, planlar, bildirimler, App Lock ve çoklu hesap geçişi içeren ücretsiz hesaplar.',
        },
        {
          icon: 'moon',
          title: 'Temalar ve ayarlar',
          body: "Tüm chrome'u temalandırın — renkler, yazı tipleri, yoğunluk, desenler — artı kısayollar, güvenlik ve kurulum tercihleri.",
        },
        {
          icon: 'grid',
          title: 'Toolbar ve Dock',
          body: 'Tuval eylemleri için yapılandırılabilir üst toolbar ve Copilot, paneller, bildirimler ve mesajlar için cam Dock.',
        },
      ],
      map: {
        hint: 'Bir yüzeyi keşfetmek için düğüm seç — sonra uygulamada aç veya daha fazla oku.',
        moreLabel: 'Daha fazla',
        openLabel: 'Uygulamada aç',
        closeLabel: 'Kapat',
      },
      groups: [
        {
          title: 'Oluştur',
          items: [
          {
            icon: 'sparkles',
            title: "Widget'ler",
            body: "Bir widget'i sıradan kelimelerle anlatın. Nexow arayüzü ve mantığı üretir, korumalı çalıştırır ve konuşarak iyileştirmenize izin verir.",
          },
          {
            icon: 'layers',
            title: 'Tuval ve çalışma alanları',
            body: "Widget'leri çalışma alanları ve ekranlar arasında sürükleyin, yeniden boyutlandırın ve düzenleyin. Gruplayın, Links ile verilerini bağlayın ve kurulumları anında değiştirin.",
          },
          {
            icon: 'library',
            title: 'Widget kütüphanesi',
            body: "Herhangi bir widget'i kütüphanenize kaydedin ve tek tıkla başka bir panoya bırakın — sürümler ve günlükler onunla kalır.",
          },
        ],
        },
        {
          title: 'Otomatikleştir',
          items: [
          {
            icon: 'bot',
            title: 'Bots',
            body: "Verilerinizi izleyen ve sekmeniz kapalıyken bile widget'lere sinyal gönderen bulut otomasyonları.",
          },
          {
            icon: 'cpu',
            title: 'Agents',
            body: 'Model, bellek, beceriler, araçlar, bilgi ve tetikleyicileri olan yapay zeka takım arkadaşları — bulutta oluşturun, dağıtın ve çalıştırmaları inceleyin.',
          },
          {
            icon: 'chat',
            title: 'Copilot',
            body: 'Tüm çalışma alanı için yapay zeka asistanı: widget oluşturun, tuvali düzenleyin ve sırada neyi değiştireceğinizi sorun.',
          },
        ],
        },
        {
          title: 'Bağlan ve paylaş',
          items: [
          {
            icon: 'plug',
            title: 'Bağlayıcılar',
            body: 'Piyasalar, veritabanları, cüzdanlar ve sosyal uygulamalar genelinde 45+ canlı bağlayıcı — CORS izin verdiğinde doğrudan tarayıcıdan.',
          },
          {
            icon: 'globe',
            title: 'Sosyal medya uygulamaları',
            body: "X, YouTube, Discord, Telegram, Reddit, Bluesky, Mastodon ve daha fazlasından canlı akışları ve sinyalleri widget'lerinize çekin.",
          },
          {
            icon: 'users',
            title: 'Topluluk',
            body: "Maker'ları takip edin, akışa gönderin, widget'leri kütüphanede paylaşın ve herkese açık bir @handle alın.",
          },
          {
            icon: 'store',
            title: 'Marketplace',
            body: "Widget'leri, temaları, ekranları, Bots ve Agents'i yayınlayın ve yükleyin — her remake'i ödüllendiren lineage ile.",
          },
          {
            icon: 'mail',
            title: 'Gerçek zamanlı sohbetler',
            body: "Arkadaşlarınız ve kişilerinizle canlı mesajlaşın — presence, tepkiler ve Dock'taki inbox ile bire bir ve grup DM'ler.",
          },
        ],
        },
        {
          title: 'Chrome ve hesap',
          items: [
          {
            icon: 'vault',
            title: 'Hesap',
            body: 'Krediler, itibar, kullanım, planlar, bildirimler, App Lock ve çoklu hesap geçişi içeren ücretsiz hesaplar.',
          },
          {
            icon: 'moon',
            title: 'Temalar ve ayarlar',
            body: "Tüm chrome'u temalandırın — renkler, yazı tipleri, yoğunluk, desenler — artı kısayollar, güvenlik ve kurulum tercihleri.",
          },
          {
            icon: 'sliders',
            title: 'Toolbar',
            body: 'Widget ekleme, auto-layout, ekran görüntüsü, undo/redo, lock, color mode, krediler ve sync — her eylemi gösterin veya gizleyin.',
          },
          {
            icon: 'grid',
            title: 'Dock',
            body: "Copilot, panel kısayolları, bildirimler ve mesajlar için sürüklenebilir cam pill — boşta puck'a gizlenir.",
          },
        ],
        },
      ],
    },
    how: {
      eyebrow: 'Nasıl Çalışır',
      title: 'Cümleden canlı widgete saniyeler içinde',
      subtitle: 'Üç adım. Yapılandırma yok, derleme adımı yok, yapıştırma kodu yok.',
      steps: [
        {
          n: '01',
          title: 'Açıklayın',
          body: 'Sade dilde istediğinizi yazın — "Deribit\'te ETH-PERP için bir emir defteri derinlik grafiği".',
        },
        {
          n: '02',
          title: 'Oluştur',
          body: 'Nexow widget\'in kaynağını Claude ile yazar ve korumalı bir iframe içinde çalıştırır; seçtiğiniz bağlantıya bağlıdır.',
        },
        {
          n: '03',
          title: 'İyileştir ve Düzenle',
          body: 'Sade dille ayarlayın, sürüm yapın, ardından tuvalde izlediğiniz diğer her şeyin yanına koyun.',
        },
      ],
    },
    automate: {
      eyebrow: 'Otomatikleştir',
      title: 'Çalışma alanınızı oto-pilot yapın',
      subtitle:
        'Widget\'ler piyasayı gösterir. Botlar, ajanlar ve Copilot harekete geçer — bulut otomasyonları ve sekmeleriniz kapalı olduğunda çalışmaya devam eden yapay zeka.',
      liveLabel: 'Canlı',
      soonLabel: 'Yakında',
      items: [
        {
          icon: 'bot',
          title: 'Botlar',
          body: 'Verilerinizi izleyen ve widget\'lerinize sinyaller ve uyarılar gönderen bulut otomasyonları. Sade sözcüklerle bir uyarı açıklayın — "BTC 1 saatte %5 düştüğünde bana söyle" — veya eşikler, % değişim, MA kesişmeleri ve özetler ile görsel bağlanma yapın. Botlar bağlı bir broker hesabında yeni işlemleri izleyebilir.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Ajanlar',
          body: 'Gerçek araç gereç ile yapay zeka ajanları — model, hafıza, beceriler, araçlar, bilgi ve tetikleyiciler. Bir ajana bir iş verin ve izlemeye, akıl yürütmeye ve harekete geçmeye izin verin — kendi ajanınızı görsel araç yöneticisinde oluşturun ve araç izinleri, çalıştırmalar arası hafıza ve canlı çalıştırma geçmişi ile buluta dağıtın.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Tüm çalışma alanınız için yapay zeka asistanı. Paralel sekmelerde sohbet edin, arka planda widget\'ler yapmasına ve tuvalinizi düzenlemesine izin verin ve sorun — "bu grafiği açıkla", "bunu özetle", "sonra ne izlemeliyim?"',
          status: 'live',
        },
      ],
      harnessChips: ['model', 'hafıza', 'beceriler', 'araçlar', 'bilgi', 'tetikleyiciler'],
      copilotPrompts: ['Bu grafiği açıkla', 'Bu verileri özetle', 'Sonra ne izlemeliyim?'],
    },
    connectors: {
      eyebrow: 'Bağlantılar',
      title: 'Her piyasaya bağlanın',
      subtitle:
        'Bağlanabilir bağlantılar, canlı fiyatları, emir defterlerini ve referans verilerini widget\'lerinize doğrudan akış yapılır — döviz, kripto, hisse senedi, vadeli işlem, opsiyon, tahmin piyasaları, veritabanları ve sosyal ortam kaynakları arasında.',
      note: '45 bağlantı bugün canlı ve 83 katalogda var — aracılar, borsalar, veri sağlayıcıları, veritabanları, sosyal ortamlar, kripto cüzdanları ve web hizmetleri. Çoğu doğrudan tarayıcınızdan akış yapılır; kalanı ince bir vekil aracılığıyla yönlendirilir.',
      count: 45,
      countLabel: 'canlı bağlantı',
      groups: {
        fx: 'Döviz',
        crypto: 'Kripto',
        equities: 'Hisse Senedi ve Vadeli İşlem',
        prediction: 'Tahmin Piyasaları',
        data: 'Veri ve Veritabanları',
        socials: 'Sosyal Ortamlar',
      },
    },
    network: {
      eyebrow: 'Ağ',
      title: 'Yalnız Yapın. Veya ağa bağlanın.',
      subtitle:
        'Tamamen yerel ve özel kalın veya ücretsiz bir hesap oluşturun ve yanınızda pano\'lar yapan, paylaşan ve ticaret yapan yapıcılar dünyasına katılın.',
      liveLabel: 'Canlı',
      soonLabel: 'Yakında',
      items: [
        {
          icon: 'users',
          title: 'Topluluk',
          body: 'Yapıcıları keşfedin ve takip edin, pazar yapıcıları için sosyal medya akışında beğeni ve yorum yapın ve widget\'leri başkalarının doğrudan kütüphanelerine ekleyebilmeleri için paylaşın — herkese açık yapıcı profilleri ile.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Pazaryeri',
          body: 'Kütüphanenizden widget\'ler, temalar, ekranlar ve botlar yayınlayın ve başkalarının paylaştıklarını yükleyin — her yeniden yapımın kaynağını gösteren soy kaydı ile. Alım satım sırada.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Strateji Sinyalleri',
          body: 'Denetlenmiş geçmiş kayıtlarını yayınlayın, güvendiğiniz yapıcılardan sinyallere abone olun ve çalıştırdığınız stratejilerde para kazanın.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'İtibar ve Madalyalar',
          body: 'Her widget, bot ve paylaşım itibar kazanır — herkese açık profilinizde puanlar, kademeli başarılar, nadir madalyalar ve seviyeler. Bunları ödül kredilerine dönüştürmek sırada.',
          status: 'live',
        },
      ],
      accountBadge: 'Ücretsiz Hesap',
      accountTitle: 'Bir ücretsiz hesap ağın kilidini açar',
      accountBody: 'Kredi kartı gerekmiyor. İstediğiniz zaman yerel olarak yapım yapmaya devam edin — bir hesap her zaman isteğe bağlıdır.',
      accountPoints: [
        'Kayıt sırasında 10.000 ücretsiz yapay zeka kredisi ayrılmıştır',
        'Çalışma alanları ve widget\'ler için cihazlar arası bulut senkronizasyonu',
        'Topluluk, pazaryeri ve widget kütüphanesi',
        'Yapıp paylaştıkça itibar puanları, madalyalar ve seviyeler',
      ],
      accountCta: 'Ücretsiz hesabınızı oluşturun',
    },
    plans: {
      eyebrow: 'Planlar',
      title: 'Ücretsiz başlayın. Hazırlandığında büyüyün.',
      subtitle:
        'Sonsuza dek ücretsiz yapın — kendi anahtarınız ile yerel olarak çalıştırın veya ücretsiz bir hesapta 10.000 kredi ayırtın. Daha fazla kredi, bot ve ajan için yükseltin.',
      cta: 'Tüm Planları Karşılaştır',
    },
    privacy: {
      eyebrow: 'Tasarıya Göre Özel',
      title: 'Sizin anahtarlarınız. Sizin verileriniz. Sizin makineniz.',
      body: 'Nexow varsayılan olarak tamamen yerel olarak çalışır. Özel modda kendi Anthropic API anahtarınızı eklersiniz ve widget oluşturma tamamen tarayıcınızda gerçekleşir — hiçbir şey sunucularımıza gönderilmez, bu nedenle kimliği doğrulanmamış bir oturum bize hiçbir şey maliyeti olmaz ve hiçbir şey sızıntı yapmaz.',
      points: [
        'Kendi anahtarını getir kod oluşturma istemci tarafında çalışır',
        'Widget\'ler, sürümler ve günlükler tarayıcınızda kalıcı hale gelir (IndexedDB)',
        'Doğrudan mekan bağlantıları kimlik bilgilerini altyapımız dışında tutarlar',
        'Yapım yapmaya başlamak için hesap gerekmez',
      ],
      cta: 'Yerel mod mimarisini oku',
    },
    roadmap: {
      eyebrow: 'Yol Haritası',
      title: 'Bu ön izleme. İşte sonrası.',
      subtitle:
        'Nexow tuvali, kod oluşturmayı, bulut botlarını, ajanları, Copilot\'u, pazaryerini, hesapları ve topluluğu yayınladı. Daha geniş uygulama tuvali aşağıdaki yapı blokları aracılığıyla gelmeye devam ediyor.',
      shipped: 'Gönderildi',
      soon: 'Yakında',
      items: [
        { status: 'shipped', title: 'Yapay zeka widget kod oluşturma', body: 'Tuval üzerinde çalışan sade dil widget\'leri.' },
        { status: 'shipped', title: '45+ pazar veri bağlantısı', body: 'Veritabanları, sosyal ortamlar, aracılar, borsalar, cüzdanlar, açık veri ve web hizmetleri canlı akış yapılır.' },
        { status: 'shipped', title: 'Bulut botları ve uyarıları', body: 'Verilerinizi izleyen ve widget\'lerinize sinyaller gönderen otomasyonlar, sekme kapalı.' },
        { status: 'shipped', title: 'Hesaplar ve bulut senkronizasyonu', body: 'Her cihaz genelinde senkronize edilen çalışma alanları olan ücretsiz hesaplar — platform başlatılması için ayrılmış 10K kredi.' },
        { status: 'shipped', title: 'Topluluk beslemesi ve profilleri', body: 'Yapıcıları takip edin, beslemede widget\'ler paylaşın ve herkese açık @handle\'inizi talep edin.' },
        { status: 'shipped', title: 'Ajanlar ve Copilot', body: 'Araç izinleri ve çalıştırma geçmişi ile dağıtılan, tam araç gereçli bulut ajanları — artı çalışma alanınızı yapan ve düzenleyen bir Copilot.' },
        { status: 'shipped', title: 'Pazaryeri', body: 'Widget\'ler, temalar, ekranlar ve botlar yayınlayın ve yükleyin — her yeniden yapımın kaynağını gösteren soy kaydı ile.' },
        { status: 'shipped', title: 'İtibar ve Madalyalar', body: 'Yaptıklarınız ve paylaştıklarınız için puanlar, kademeli başarılar, nadir madalyalar ve seviyeler.' },
        { status: 'soon', title: 'Premium Widget\'ler ve Sinyaller', body: 'Premium widget\'ler ve strateji sinyalleri yayınlayın, başkalarının abone olmasına izin verin ve çalıştırdıklarınızda para kazanın.' },
        { status: 'soon', title: 'Ücretli Planlar ve Ödül Kredileri', body: 'Supporter ve Sponsor ödemesi, platform kredileri ve itibarı ödül kredilerine dönüştürme.' },
      ],
    },
    faq: {
      eyebrow: 'SSS',
      title: 'Sorular, Cevaplanmış',
      subtitle: 'Uygulamayı başlatmadan önce bilmeniz gereken her şey.',
      items: [
        {
          q: 'Nexow Nedir?',
          a: 'Nexow, piyasalar için yapay zeka tabanlı bir çalışma alanıdır. Sade dilde bir widget — grafik, tablo, ısı haritası veya sinyal — açıklarsınız ve Nexow kaynağını oluşturur, korumalı bir iframe içinde çalıştırır ve canlı pazar verilerini serbest biçimli bir tuvale akış yapılır. Bunun etrafında bulut botları, yapay zeka ajanları, Copilot ve bir yapıcı topluluğu ekler.',
        },
        {
          q: 'Kod yazmayı Bilmek Gerekli mi?',
          a: 'Hayır. Sade dilde istediğinizi açıklarsınız ve Nexow bunu sizin için yazar ve çalıştırır. Kod okursanız, her widget\'in kaynağı ve sürüm geçmişi incelemek ve iyileştirmek için mevcuttur.',
        },
        {
          q: 'Verilerim Özel mi? Hesap Gerekli mi?',
          a: 'Hesap gerekmiyor. Nexow varsayılan olarak tamamen yerel olarak çalışır: kendi Anthropic API anahtarınızı eklersiniz ve widget oluşturma tarayıcınızda gerçekleşir; widget\'ler, sürümler ve günlükler IndexedDB\'de saklanır. Ücretsiz bir hesap her zaman isteğe bağlıdır — yapay zeka kredileri, bulut sinkronizasyonu ve topluluğu ekler, ancak %100 yerel olarak yapım yapmaya devam edebilirsiniz.',
        },
        {
          q: 'Hangi Piyasalar ve Mekanlar Destekleniyor?',
          a: 'Nexow 45 canlı bağlantıya (katalogda 83) sahiptir; döviz (OANDA, LMAX, FXCM), kripto (Binance, Coinbase, Kraken, Deribit, BitMEX), hisse senedi ve vadeli işlem (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), tahmin piyasaları (Kalshi, Polymarket), veri sağlayıcıları ve veritabanları (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) ve sosyal ortam kaynakları (X, YouTube, Discord, Telegram, Spotify) yayılır.',
        },
        {
          q: 'Botlar ve Ajanlar Nedir?',
          a: 'Botlar, verilerinizi izleyen ve sekmeleriniz kapalı olduğunda bile widget\'lerinize sinyaller ve uyarılar gönderen bulut otomasyonlarıdır — sade sözcüklerle bir uyarı açıklayın veya eşikler, % değişim, hareketli ortalama kesişmeleri ve bağlı bir broker hesabında yeni işlemler ile görsel bağlama yapın. Ajanlar, tam araç gereç (model, hafıza, beceriler, araçlar, bilgi, tetikleyiciler) ile yapay zekadır — bugün görsel araç yöneticisinde sizinki tasarlayın; bulut dağıtımı ve Copilot asistanı yakında gelecek.',
        },
        {
          q: 'Topluluk ve Pazaryeri var mı?',
          a: 'Topluluk canlı — ücretsiz hesap oluşturun, herkese açık @handle\'inizi talep edin, yapıcıları takip edin, beslemede yayınlayın ve widget\'leri başkalarının doğrudan kütüphanelerine ekleyebilmeleri için paylaşın. Widget\'ler satın almak ve satmak ile para kazanabileceğiniz denetlenmiş strateji sinyalleri için bir pazaryeri yakında gelecek.',
        },
        {
          q: 'XP ve Ödüller Nedir?',
          a: 'Nexow hesaplara oyunlaştırılmış bir katman ekliyor: widget\'ler yapıp, botlar çalıştırıp ve toplulukla paylaşmak XP kazanacak ve başarılar için rozetleri açacak — ve başarılar yapay zeka kullanımında harcayabileceğiniz ödül kredilerine dönüşecek. Yakında alıyor; erken hesaplar ilk sırada.',
        },
        {
          q: 'Maliyeti Ne Kadar?',
          a: 'Yapım yapmak için sonsuza dek ücretsiz — kendi anahtarınız ile yerel olarak veya ücretsiz bir hesapta 10.000 yapay zeka kredisi ayrılmış olarak. Ücretli planlar (Supporter ve Sponsor) aylık krediler ve daha yüksek bot ve ajan limitleri ekler ve Partner, özel altyapı gerektiren takımlar içindir. Ücretli kasa yakında gelecek; planlar sayfasına bakın.',
        },
        {
          q: 'Hangi Yapay Zeka Modeli Nexow\'u Güçlendirir?',
          a: 'Nexow, Anthropic SDK aracılığıyla Anthropic\'in Claude modellerine oluşturur — varsayılan olarak Claude Opus 4.8, daha hızlı ve daha ucuz oluşturma için Sonnet 4.6 ve Haiku 4.5. Özel modda kendi anahtarınız sağlarsınız, bu nedenle kullanım ve maliyetin tam kontrolünü sakla.',
        },
      ],
    },
    cta: {
      title: 'Sonraki Dakika İçinde İlk Widget\'inizi Yapın',
      subtitle: 'Ön izleme canlı ve ücretsiz deneyin. Kayıt yok, kurulum yok — sadece görmek istediğinizi açıklayın.',
      primary: 'Nexow\'u Başlat',
      secondary: 'Özellikleri Keşfet',
    },
  },
  communityPage: {
    meta: {
      title: 'Topluluk — Nexow',
      description: 'Nexow, üreticiler için sosyal bir çalışma alanıdır: etkileşimli gönderiler, araştırma panoları, canlı paneller, Solana üzerinde USDC pazaryeri ve yol haritasını topluluğun yöneteceği bir DAO.',
    },
    hero: {
      badge: 'Topluluk',
      titleLead: 'Gerçek iş',
      titleGradient: 'yayınlayan üreticiler için',
      titleTail: 'sosyal bir uygulama.',
      subtitle: 'Etkileşimli widget’lar, araştırma ve paneller paylaşın. Üreticileri takip edin, gerçek zamanlı sohbet edin, Solana’da USDC ile tasfiye edilen bir pazaryerinde yayınlayın — ve çoğalan bir topluluk büyütün.',
      ctaPrimary: 'Topluluğa katıl',
      ctaSecondary: 'Pazaryerini keşfet',
      chips: [
        'Canlı akış',
        'Panolar & paneller',
        'Solana’da USDC',
        'DAO yakında',
      ],
    },
    social: {
      eyebrow: 'Sosyal akış',
      title: 'Gerçekten çalışan gönderiler — sadece ekran görüntüsü değil.',
      subtitle: 'Akış üreticiler için. Bir widget, görsel, video veya araştırma notu paylaşın; başkaları beğenebilir, yorumlayabilir, yeniden yapabilir ve yayınladığınızı kurabilir.',
      items: [
        {
          icon: 'sparkles',
          title: 'Etkileşimli widget gönderileri',
          body: 'Gönderiye canlı bir widget ekleyin. İzleyenler akışta önizler, ardından doğrudan kitaplıklarına ekler — işinizi kredileyen soyağacıyla.',
        },
        {
          icon: 'chat',
          title: 'Beğeniler, yorumlar & bahsetmeler',
          body: 'İplikli yanıtlar, tepkiler ve bahsetme gelen kutusu sayesinde konuşma gönderide kalır — DM’lere dağılmaz.',
        },
        {
          icon: 'mail',
          title: 'Gerçek zamanlı sohbetler',
          body: 'Hesap veya dock’tan erişilen, varlık ve tepkili 1:1 ve grup DM’ler — arkadaşlar ve kişiler bir tık ötede.',
        },
        {
          icon: 'users',
          title: 'Herkese açık üretici profilleri',
          body: '@handle’ınızı alın, gönderileri sabitleyin, panolarınızı gösterin ve insanların yayınladığınızı takip etmesine izin verin.',
        },
      ],
    },
    research: {
      eyebrow: 'Araştırma & paneller',
      title: 'Kaynakları toplayın. Masayı kurun. Canlı tutun.',
      subtitle: 'Panolar araştırma izini tutar — bağlantılar, medya ve widget’lar. Paneller ve ekranlar bunu paylaşabileceğiniz veya yeniden yapabileceğiniz bir çalışma masasına dönüştürür.',
      items: [
        {
          icon: 'library',
          title: 'Profil panoları',
          body: 'Üreticiler için moodboard’lar: widget bırakın, medya yükleyin, akıştan gönderi sabitleyin ve TikTok, YouTube, makaleler ve her yerden bağlantı kaydedin.',
        },
        {
          icon: 'link',
          title: 'Nexow’a paylaş',
          body: 'PWA’yı kurun veya paylaşım hedefini kullanın — bir URL önizlemeli olarak panoya iner, tuvalinizde açılmaya hazır.',
        },
        {
          icon: 'layers',
          title: 'Paneller, ekranlar & çalışma alanları',
          body: 'Canlı widget’ları serbest bir tuvalde düzenleyin, ekran ve çalışma alanlarında gruplayın ve sıfırdan yeniden kurmadan kurulum değiştirin.',
        },
        {
          icon: 'bolt',
          title: 'Panoyu tuvalde aç',
          body: 'Kayıtlı bağlantıları tek hareketle panelde canlı gömülere dönüştürün — araştırma, onu kullanan araçlara bağlı kalır.',
        },
      ],
    },
    grow: {
      eyebrow: 'Ağı büyütün',
      title: 'Paylaştığınız işi takip eden itibar.',
      subtitle: 'İnşa etmek, yayınlamak ve başkalarına yardım etmek kamu profilinizde puan, madalya ve seviyeler kazandırır — Free ve ücretli planlarda aynı itibar yüzeyi.',
      items: [
        {
          icon: 'trophy',
          title: 'Puanlar, madalyalar & seviyeler',
          body: 'Widget’lar, botlar, paylaşımlar ve sosyal etkinlik için itibar kazanın. Profilinizde görünen kademeli başarılar ve nadir madalyalar açın.',
        },
        {
          icon: 'signal',
          title: 'Keşfet & takip et',
          body: 'Discover akışına göz atın, widget, görsel veya videoya göre filtreleyin, kişi ve gönderi arayın ve akışınıza istediğiniz üreticileri takip edin.',
        },
        {
          icon: 'award',
          title: 'Çoğalan kişiler',
          body: 'Karşılıklı takipler kişi olur. Grup sohbetleri, bahsetmeler ve ortak ağ iş birliğini ürün gibi hissettirir — yan kanal değil.',
        },
        {
          icon: 'globe',
          title: 'Tek ücretsiz hesap açar',
          body: 'Bulut senkronu, başlangıç kredileri, akış, pazaryeri ve itibar katmanı ücretsiz hesapla gelir. Başlamak için kart gerekmez.',
        },
      ],
    },
    marketplace: {
      eyebrow: 'Pazaryeri',
      title: 'Bir kez yayınlayın. USDC ile satın. Soyağacını koruyun.',
      subtitle: 'Tek bir paylaşım diyaloğu widget’lar, ekranlar, çalışma alanları, botlar, ajanlar ve temaları kapsar — ücretsiz kurulum veya USDC fiyatlı ve Solana’da tasfiye.',
      intro: 'Nexow asla parayı saklamaz. Satış, alıcının cüzdanından sizinkine doğrudan bir SPL token transferidir. Platform zinciri doğrular, varlığı açar ve yalnızca her iki tarafın sonuca güvenmek için ihtiyaç duyduğu muhasebeyi saklar.',
      pillars: [
        {
          icon: 'store',
          title: 'Tek diyalog, altı tür',
          body: 'Kitaplık, Botlar, Ajanlar veya Temalar’dan paylaşın. Ücretsiz veya USDC fiyat seçin, açıklama ve etiket ekleyin ve isteğe bağlı olarak akışta duyurun.',
        },
        {
          icon: 'history',
          title: 'Her remake’te soyağacı',
          body: 'Bir remake yayınlarsanız diyalog, herhangi bir şey çıkmadan önce kimin işinden geldiğini adlandırır. Kredi sonradan keşfettiğiniz bir şey değildir.',
        },
        {
          icon: 'shield',
          title: 'Emanet yok, platform kesintisi yok',
          body: 'Phantom USDC transferini imzalar. Nexow fon tutmaz ve kesinti almaz — kurulumu açmadan önce yalnızca zincir üstü makbuzu doğrular.',
        },
        {
          icon: 'check',
          title: 'Güncellemeler alıcıda kalır',
          body: 'Herhangi bir sürümü almak, aynı yazarın sonraki sürümlerine hak kazandırır. Başkasının remake’i kendi fiyatıyla ayrı bir üründür.',
        },
      ],
      railTitle: 'USDC satın alma nasıl çalışır',
      railBody: 'Fiyatlar Solana’da USDC olarak kotelenir. Sunucu siparişi oluşturur; cüzdanınız öder; varlık açılmadan önce zincirin uyuşması gerekir.',
      railSteps: [
        {
          n: '01',
          title: 'Sipariş oluştur',
          body: 'Ödeme, sunucuya fiyatı ve satıcı cüzdanını sorar — istemci tutarı asla uydurmaz.',
        },
        {
          n: '02',
          title: 'Phantom ile öde',
          body: 'Cüzdanınız, memo’da sipariş kimliği olan bir USDC transferini imzalar ve Solana’da yayınlar.',
        },
        {
          n: '03',
          title: 'Zincirde doğrula',
          body: 'Nexow işlemi geri okur: onaylı, eşleşen memo, satıcı USDC bakiyesi en az kota kadar artmış, doğru mint.',
        },
        {
          n: '04',
          title: 'Aldığınızı kurun',
          body: 'Hak açılır. Widget, tema, bot veya ajanı kurun — ücretli önizlemeler tasfiyeye kadar kilitli kalır.',
        },
      ],
      railNotes: [
        'Makbuzlar, cüzdan imzayı döndürür dönmez yerel kaydedilir — onay ortasında sekme kapanırsa «Satın almayı bitir» iki kez ödemeden sürdürür.',
        'Kurulan botlar duraklatılmış gelir; ajanlar dağıtılmamış; temalar asla otomatik uygulanmaz. İlk çalıştırma her zaman sizin seçiminizdir.',
        'Özel kısım seyahat etmez: istemler, sohbet geçmişi, bağlantı kimlikleri, cüzdan adresleri ve ajan belleği yazarda kalır.',
      ],
      kindsTitle: 'Ne yayınlayabilirsiniz',
      kinds: [
        {
          label: 'Widget’lar',
          body: 'Etkin sürümün kodu — kum sandıklı ve yeniden yapılabilir.',
        },
        {
          label: 'Ekranlar & çalışma alanları',
          body: 'Geometri, widget kodu ve bağlantılar taşınabilir bir masa olarak.',
        },
        {
          label: 'Botlar',
          body: 'İşlemci, parametreler ve zamanlama — alıcıya duraklatılmış gelir.',
        },
        {
          label: 'Ajanlar',
          body: 'Model, beceriler, araç yetkileri ve ritim — kendi bağlantılarını kurana kadar dağıtılmamış.',
        },
        {
          label: 'Temalar',
          body: 'Renkler, yazı tipleri, yarıçap ve yoğunluk — kitaplığa eklenir, asla zorlanmaz.',
        },
      ],
    },
    dao: {
      eyebrow: 'Yönetişim',
      badge: 'Yakında',
      title: 'Nexow DAO ile yol haritasına sahip olun.',
      subtitle: 'NEXO yönetişim token’ıdır. İnşa edip yayınlayarak kazanın; önererek, oy vererek ve ortak hazinede yön vererek harcayın.',
      body: 'DAO sekmesi zaten topluluk panelinde bir teaser olarak var — gerçek oylamalar, hazine ve üretici ödülleri sonra gelir. O zamana kadar itibar ve madalyalar canlıdır; erken üreticiler önde başlar.',
      pillars: [
        {
          icon: 'lightbulb',
          title: 'Öner',
          body: 'Özellikler, bağlayıcılar ve kurallar önerin. NEXO tutan herkes bir fikri oylamaya koyabilir.',
        },
        {
          icon: 'vote',
          title: 'Oy ver',
          body: 'Kamuya açık, şeffaf oylar sırada neyin hangi sırayla yapılacağına karar verir.',
        },
        {
          icon: 'vault',
          title: 'Hazine',
          body: 'Ortak bir hazine, topluluğun oyladığı ödülleri ve hibeleri finanse eder.',
        },
        {
          icon: 'gift',
          title: 'Üretici ödülleri',
          body: 'DAO işlerini yayınlayıp tanıttığında üreticiler pay alır.',
        },
      ],
      previewTitle: 'İlk oylamalar',
      previewBadge: 'Önizleme',
      forLabel: '{pct}% lehte',
      votesLabel: '{n} oy',
      proposals: [
        {
          title: 'Topluluk widget ödül programını finanse et',
          tag: 'Hazine',
          pct: 72,
          votes: 341,
        },
        {
          title: 'Pazaryeri üreticileri için gelir paylaşımı',
          tag: 'Ödüller',
          pct: 87,
          votes: 512,
        },
        {
          title: 'Widget çalışma zamanını açık kaynak yap',
          tag: 'Yol haritası',
          pct: 64,
          votes: 289,
        },
      ],
      footer: 'Toplulukla açıkça şekillenir — ayrıntılar önce DAO sekmesine iner.',
    },
    cta: {
      title: '@handle’ınızı alın ve bir şey yayınlayın.',
      subtitle: 'Ücretsiz hesap. Canlı akış. USDC’li pazaryeri. Sırada DAO var.',
      primary: 'Nexow’u başlat',
      secondary: 'Tüm özellikleri gör',
    },
  },
  features: {
    meta: {
      title: 'Özellikler — Nexow',
      description:
        "Nexow'un her yüzeyini keşfedin: widget'ler, tuval, toolbar ve Dock, bağlayıcılar ve sosyal uygulamalar, Bots ve Agents, topluluk ve gerçek zamanlı sohbet, marketplace, hesap, temalar ve ayarlar.",
    },
    hero: {
      badge: 'Özellikler',
      title: 'Tüm uygulama, yüzey yüzey',
      subtitle:
        "Nexow, etrafında tam bir ürün olan bir widget tuvalidir — hesap, topluluk, marketplace, kütüphane, Bots, Agents, bağlayıcılar, temalar ve ayarlar için yan paneller, artı chrome'u yapılandırılabilir tutan toolbar ve Dock.",
    },
    groups: [
      {
        title: "Widget'ler",
        body: "Ne istediğinizi anlatın. Nexow bunu çalışan, incelenebilir bir widget'e dönüştürür.",
        items: [
          { icon: 'sparkles', title: 'Sade dil kod üretimi', body: "Bir widget'i anlatın; Nexow Claude ile tam kaynağını üretir — moodboard'lar, planlayıcılar, oyunlar, akışlar, grafikler, tablolar ve özel araçlar." },
          { icon: 'wand', title: 'Konuşarak iyileştirin', body: 'İsteyerek her şeyi değiştirin. "Daha sıcak yap", "seri takvimi ekle", "bunu oyuna çevir" — Nexow widget\'i yerinde düzenler.' },
          { icon: 'history', title: 'Sürümlü ve incelenebilir', body: "Her üretim günlüklerle sürümlenir. Geri alın, karşılaştırın ve her widget'te çalışan tam kaynağı okuyun." },
          { icon: 'shield', title: 'Korumalı çalışma zamanı', body: "Widget'ler katı sınırlı izole iframe'lerde çalışır — üretilen kod render edip fetch yapabilir, ancak çalışma alanınıza veya diğer widget'lere dokunamaz." },
          { icon: 'library', title: 'Yeniden kullanılabilir kütüphane', body: "Herhangi bir widget'i kütüphanenize kaydedin ve tek tıkla herhangi bir panoya bırakın — sürümler ve günlükler onunla kalır." },
        ],
      },
      {
        title: 'Çalışma alanı',
        body: "Yapılandırılabilir chrome'lu serbest tuval.",
        items: [
          { icon: 'layers', title: 'Tuval, çalışma alanları ve ekranlar', body: "Widget'leri temalı serbest tuvalde düzenleyin, çalışma alanlarına ve ekranlara gruplayın ve kurulumlar arasında anında geçin." },
          { icon: 'link', title: 'Gruplar ve Links', body: "Widget'leri mozaik veya sekme düzenleriyle gruplara toplayın ve Links ile birbirine bağlayın — bir widget'in verisini diğerine aktaran tek veya çift yönlü borular." },
          { icon: 'sliders', title: 'Toolbar', body: 'Başlığın altında yapılandırılabilir tepsi: widget ekle, auto-layout, ekran görüntüsü, undo/redo, lock, color mode, krediler ve cloud sync — her eylemi gösterin veya gizleyin.' },
          { icon: 'grid', title: 'Dock', body: "Copilot, panel kısayolları, bildirimler ve mesajlar için sürüklenebilir cam pill. Öğeleri özelleştirin, yeniden boyutlandırın ve boşta puck'a gizlenmesine izin verin." },
          { icon: 'bolt', title: 'Varsayılan olarak etkileşimli', body: "Widget'ler durumu korur, olaylara tepki verir, veriye abone olur ve canlı güncellenir — çalışma alanınız statik bir mockup değil, çalışan bir araç kalır." },
        ],
      },
      {
        title: 'Bağlayıcılar',
        body: 'Piyasalardan, veritabanlarından, cüzdanlardan ve sosyal uygulamalardan canlı veri.',
        items: [
          { icon: 'plug', title: '45+ canlı bağlayıcı', body: 'Veritabanları, piyasalar, cüzdanlar ve web hizmetleri — Postgres, ClickHouse, Qdrant, OANDA, Binance, Coinbase, MetaMask, Ledger, Polygon, Kalshi ve daha fazlası.' },
          { icon: 'globe', title: 'Sosyal medya entegrasyonları', body: "X, YouTube, Discord, Telegram, Reddit, Bluesky, Mastodon, Lemmy, Dev.to ve Hacker News'i bağlayın; widget'ler zaten kullandığınız akışları okuyup tepki verebilsin." },
          { icon: 'signal', title: 'Mümkün olduğunda doğrudan tarayıcıdan', body: "CORS izin verdiğinde, kimlik doğrulamalı çağrılar doğrudan tarayıcınızdan çalışır ve proxy'mizi tamamen atlar." },
          { icon: 'database', title: 'Yerel durum da', body: "Birçok widget'in harici veriye ihtiyacı yoktur: oyunlar, planlayıcılar, moodboard'lar ve özel takipçiler senkronize etmeyi seçene kadar tarayıcıda kalır." },
        ],
      },
      {
        title: 'Otomatikleştir',
        body: 'Sekmeniz kapalıyken çalışmaya devam eden Bots, Agents ve Copilot.',
        items: [
          { icon: 'bot', title: 'Bots', body: "Verilerinizi izleyen ve widget'lerinize sinyal gönderen bulut otomasyonları. Düz kelimelerle bir uyarı anlatın veya görsel olarak bağlayın — seri hatırlatıcıları, özetler, sosyal güncellemeler, eşikler veya piyasa hareketleri." },
          { icon: 'cpu', title: 'Agents', body: "Gerçek bir harness'i olan yapay zeka Agents — model, bellek, beceriler, araçlar, bilgi ve tetikleyiciler. Görsel olarak oluşturun, tool grants ile buluta dağıtın ve canlı çalıştırma geçmişini inceleyin." },
          { icon: 'chat', title: 'Copilot', body: 'Tüm çalışma alanınız için yapay zeka asistanı. Paralel sekmelerde sohbet edin, arka planda widget oluşturmasına izin verin, tuvali düzenleyin ve sırada neyi değiştireceğinizi sorun.' },
        ],
      },
      {
        title: 'Ağ',
        body: 'Topluluk, marketplace ve arkadaşlarınızla gerçek zamanlı sohbet.',
        items: [
          { icon: 'users', title: 'Topluluk', body: "Maker'ları takip edin, builder'lar için sosyal akışta beğenin ve yorumlayın, panoları keşfedin ve başkalarının kütüphanelerine ekleyebileceği widget'leri paylaşın — herkese açık maker profilleriyle." },
          { icon: 'mail', title: 'Gerçek zamanlı sohbetler', body: "Hesap veya Dock'tan arkadaşlarınız ve kişilerinizle canlı mesajlaşın — presence, tepkiler, followers/following ve kişiler inbox'u ile bire bir ve grup DM'ler." },
          { icon: 'store', title: 'Marketplace', body: "Widget'leri, temaları, ekranları, Bots ve Agents'i yayınlayın ve yükleyin — her remake'i ödüllendiren lineage ile. Alım satım sırada." },
          { icon: 'trophy', title: 'İtibar ve madalyalar', body: 'Oluşturma ve paylaşım için itibar puanları kazanın, kademeli başarımlar ve nadir madalyalar açın — bugün canlı. Ödül kredileri sırada.' },
        ],
      },
      {
        title: 'Hesap ve görünüm',
        body: 'Kimliğiniz, temalar, ayarlar ve cihazlar arası sync.',
        items: [
          { icon: 'vault', title: 'Hesap', body: 'Krediler, itibar, kullanım grafikleri, planlar, bildirimler, token paketleri, App Lock, güvenlik denetimleri ve çoklu hesap için giriş yapın — veya kendi anahtarınızla tamamen yerelde kalın.' },
          { icon: 'moon', title: 'Temalar', body: "Renkler, yazı tipleri, radius, density, glass ve patterns için görünüm temaları oluşturun. Marketplace'te yayınlayın veya diğer maker'lardan tema yükleyin." },
          { icon: 'sliders', title: 'Ayarlar', body: 'Genel tercihler, özelleştirilebilir klavye kısayolları, güvenlik seçenekleri, yedekleme/geri yükleme ve install/PWA denetimleri — Settings panelinde.' },
          { icon: 'sync', title: 'Cloud sync', body: "Çalışma alanlarını, widget'leri, Dock ve toolbar tercihlerini, temaları ve ayarları her cihazda senkronize edin — şifreli kimlik bilgisi vault'u ile." },
          { icon: 'lock', title: 'Çalışma alanı sınırları', body: "Üretilen widget'ler korumalı çalışır; bağlayıcı erişimi her widget'in ihtiyaç duyduğu hizmetler ve verilerle sınırlıdır." },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Planlar — Nexow',
      description:
        'Sonsuza dek ücretsiz yapın — kendi anahtarınız ile yerel olarak çalıştırın veya ücretsiz bir hesapta 10.000 yapay zeka kredisi ayırtın. Krediler, botlar, ajanlar ve özelleştirme için Ücretsiz, Supporter, Sponsor ve Partner\'i karşılaştırın.',
    },
    hero: {
      badge: 'Planlar',
      title: 'Ücretsiz Başla. Büyümek İçin Yer.',
      subtitle:
        'Ücretsiz yapın — kendi anahtarınız ile yerel olarak çalıştırın veya 10.000 yapay zeka kredisi ayırtmak için kaydolun. Daha fazla kapasite, otomasyon ve cilaya ihtiyaç duyduğunuzda yükseltin.',
    },
    comingSoon:
      'Supporter ve Sponsor kasası yakında geliyor ve platform kredileri yanında başlatılıyor. Bugün herkes Ücretsiz\'te — faturalama açıldığında ilk olarak olmak için hesap oluşturun.',
    highlights: {
      title: 'Planınız ile Ölçeklenen',
      items: [
        {
          icon: 'coins',
          title: 'Yapay Zeka Kredileri',
          body: 'Widget oluşturma, Copilot yanıtları ve bot mantığını güçlendir. Ücretsiz başlamak için 10K ayrılır; ücretli planlar aylık yenilenir.',
        },
        {
          icon: 'bot',
          title: 'Botlar ve Ajanlar',
          body: 'Botlar piyasaları izler ve eylemleri tetikler. Ajanlar çok adımlı iş akışları çalıştırır. Daha yüksek planlar eşzamanlı limitleri yükseltir.',
        },
        {
          icon: 'sparkles',
          title: 'Özelleştirme',
          body: 'Yükseltirken vurgu renkleri, logolar ve premium UI açılır — Nexow\'un sizin gibi hissetmesini sağlayın.',
        },
      ],
    },
    included: {
      title: 'Her Planda Dahil',
      items: [
        'Sınırsız Ekran, Çalışma Alanı ve Widget',
        '45+ canlı pazar veri bağlantısı',
        'Korumalı Widget Çalışma Zamanı',
        'Genel Copilot (yakında)',
        'Topluluk ve Pazaryeri Erişimi',
      ],
    },
    billing: { monthly: 'Aylık', yearly: 'Yıllık', save: '2 Ay Kazanın' },
    tiers: [
      {
        name: 'Ücretsiz',
        tagline: 'Yapı Yapmak İçin Gereken Her Şey.',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: 'sonsuza dek',
        stats: ['10K Kredi', '10 Bot', '3 Ajan'],
        cta: 'Ücretsiz Başla',
        ctaHref: 'https://x.nexow.ai',
        features: [
          'Kayıt sırasında 10.000 yapay zeka kredisi ayrılmıştır',
          'Sınırsız Ekran, Çalışma Alanları ve Widget\'ler',
          'Sınırsız Tarayıcı Bağlantıları',
          'Cihazlar Arası Bulut Senkronizasyonu',
          'Genel Copilot (yakında)',
          'Topluluk ve Pazaryeri Erişimi',
        ],
      },
      {
        name: 'Supporter',
        tagline: 'Daha Fazla Yer İsteyenler İçin.',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: 'Yıllık $99.90 Faturalandırılır',
        cadence: '/ay',
        badge: 'Yakında',
        stats: ['50K Kredi/Ay', '30 Bot', '10 Ajan'],
        note: 'Ücretsiz İçinde Her Şey, Artı:',
        cta: 'Supporter Olun',
        ctaHref: 'https://x.nexow.ai',
        features: [
          'Her Ay 50.000 Kredi',
          '30 Adede Kadar Bot ve 10 Ajan',
          'Çalışma Alanı Başına Bir Copilot',
          'İkinci Vurgu Rengi (Gradyan)',
          'Özel UI ve Görünüş Seçenekleri',
        ],
      },
      {
        name: 'Sponsor',
        tagline: 'Profesyonel Güç Kullanıcıları İçin.',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: 'Yıllık $699.90 Faturalandırılır',
        cadence: '/ay',
        badge: 'En İyi Dönüş',
        stats: ['800K Kredi/Ay', '300 Bot', '100 Ajan'],
        note: 'Supporter İçinde Her Şey, Artı:',
        cta: 'Sponsor Olun',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          'Her Ay 800.000 Kredi',
          '300 Adede Kadar Bot ve 100 Ajan',
          'Özel Bağlantılar (Bağlantı Yöneticisi)',
          'Ekran Başına Bir Copilot',
          'Kendi Logo\'nuzu Yükle',
          'Premium UI Özelleştirmeleri',
        ],
      },
      {
        name: 'Partner',
        tagline: 'Her Şeye İhtiyacı Olanlar İçin.',
        priceMonthly: 'Özel',
        priceYearly: 'Özel',
        cadence: '',
        stats: ['Özel Altyapı', 'Beyaz Eldiven', 'SLA'],
        note: 'Sponsor İçinde Her Şey, Artı:',
        cta: 'Bize Ulaşın',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Özel Altyapı',
          'Beyaz Eldiven Kurulumu',
          'Birinci Sınıf Özel Geliştirme',
          'Özel Marka ve Kişileştirme',
          'Adanmış Destek',
        ],
      },
    ],
    faqTitle: 'Plan Soruları',
    faq: [
      { q: 'Nexow Gerçekten Ücretsiz mi?', a: 'Evet. Sonsuza dek ücretsiz yapabilirsiniz — kendi Anthropic anahtarınız ile tamamen yerel çalıştırın (sadece kendi API kullanımınız için ödeme yaparsınız) veya platform modu açıldığında 10.000 yapay zeka kredisi ayıran ücretsiz hesap oluşturun, bu nedenle kendinize ait anahtar gerekmiyor.' },
      { q: 'Krediler Nedir?', a: 'Krediler yapay zeka kullanımını ölçer — widget\'ler, bağlantılar, botlar ve Copilot yanıtları oluşturmak. Ücretsiz hesap başlangıç için 10.000 ayırır ve ücretli planlar aylık ödenek verir (Supporter\'de 50K, Sponsor\'de 800K). Kredi ölçüm platform modesi ile canlı gider ve istediğiniz zaman daha fazla satın alabilirsiniz.' },
      { q: 'Ücretli Planlar Ne Zaman Başlayacak?', a: 'Supporter ve Sponsor tanımlanmış ve uygulamada gösterilir ama ücretli kasa yakında geliyor. Bugün herkes Ücretsiz\'te — faturalama açıldığında ilk olması için hesap oluşturun.' },
      { q: 'Yıllık Ödeme Yapabilir miyim?', a: 'Evet. Yıllık Faturalama Aylık Ödemeye Karşı İki Ay Kazanır. İstediğiniz Zaman Aylık ve Yıllık Arasında Geçiş Yapabilirsiniz.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Bağlantılar — Nexow',
      description:
        'Her Nexow Bağlantısını Gözden Geçir — 45 Canlı ve 83 Katalogda. Aracılar, Borsalar, DEX\'ler, Tahmin Piyasaları, Veri Sağlayıcıları, Veritabanları ve Sosyal Ortam Kaynakları. Ara, Filtrele ve Bağlan.',
    },
    hero: {
      badge: 'Bağlantılar',
      title: 'Her Pazar, Bir Tuval',
      subtitle:
        'Nexow\'un Bağlandığı Tüm Mekan Kataloğunu Ara — Aracılar, Borsalar, Veri Sağlayıcıları, Veritabanları ve Sosyal Ortamlar. Canlı Bağlantılar Bugün Çalışır; Geri Kalanları Yakında Gelecek.',
    },
    searchPlaceholder: 'Bağlantıları Ara…',
    filters: 'Filtreler',
    all: 'Tümü',
    categories: { finance: 'Finans', wallets: 'Cüzdanlar', services: 'Hizmetler', data: 'Veri', socials: 'Sosyal Ortamlar' },
    status: { all: 'Tümü', live: 'Canlı', soon: 'Yakında' },
    capability: { all: 'Tümü', trading: 'Alım satım', readonly: 'Yalnızca veri' },
    filterAssets: 'Varlıklar',
    filterAlpha: 'Ad',
    kinds: {
      broker: 'Aracı',
      exchange: 'Borsa',
      prediction: 'Tahmin Piyasası',
      dex: 'DEX',
      aggregator: 'Toplayıcı',
      data: 'Pazar Verisi',
      sql: 'SQL Veritabanı',
      nosql: 'NoSQL Veritabanı',
      warehouse: 'Veri Ambarı',
      vector: 'Vektör Veritabanı',
      messaging: 'Mesajlaşma',
      social: 'Sosyal Ağ',
      video: 'Video',
      community: 'Topluluk',
      music: 'Müzik',
      fitness: 'Fitness',
      wallet: 'Kripto Cüzdanı',
      browser: 'Tarayıcı Otomasyonu',
      scraping: 'Web Kazıma',
      search: 'Web Araması',
      weather: 'Hava Durumu ve Hava Kalitesi',
      open_data: 'Açık Veri',
      knowledge: 'Bilgi',
      news: 'Haberler',
      geo: 'Coğrafya ve Ulaşım',
      analytics: 'Analitik',
      observability: 'Gözlemlenebilirlik',
      payments: 'Ödemeler',
    },
    assets: {
      equities: 'Hisse Senedi',
      indices: 'Endeksler',
      fixed_income: 'Sabit Getiri',
      fx: 'Döviz',
      commodities: 'Emtialar',
      crypto: 'Kripto',
      volatility: 'Volatilite',
      prediction_markets: 'Tahmin',
    },
    visit: 'Siteyi Ziyaret Et',
    openDetails: 'Ayrıntıları gör',
    comingSoon: 'Yakında',
    comingSoonHint: 'Bu bağlayıcı henüz uygulamada kullanılamıyor.',
    tradingBadge: 'Alım satım',
    connect: 'Nexow\'da bağlan',
    visitWebsite: 'Siteyi ziyaret et',
    close: 'Kapat',
    results: '{n} Bağlantı',
    empty: 'Aramanız ile eşleşen bağlantı yok.',
    exploreCta: 'Tüm Bağlantıları Keşfet',
    countLive: 'canlı',
    countCatalog: 'katalogda',
  },
  about: {
    meta: {
      title: 'Hakkında — Nexow',
      description:
        'Nexow, Piyasalar İçin Yapay Zeka Tabanlı Bir İstasyonu Yapıyor: Sade Dille Herhangi Bir Widget Açıklayın ve Çalışan, Veri Bağlantılı Bir Gösterge Paneli Alın. Varsayılan Olarak Özel. Misyonumuz Hakkında Bilgi Edinin.',
    },
    hero: {
      badge: 'Hakkında',
      title: 'Piyasalar İçin Yapay Zeka Tabanlı Bir İstasyon',
      subtitle:
        'Ticaret Gösterge Paneli Yapmayı, Açıklamak Kadar Hızlı Olması Gerektiğini Düşünüyoruz. Nexow Sade Dili Çalışan, Veri Bağlantılı Widget\'lere Dönüştürür — ve Anahtarlar ve Veriler Üzerinde Kontrol Sahibi Tutarsınız.',
    },
    missionTitle: 'Neden Nexow\'u Yapıyoruz',
    mission: [
      'Her Tüccar ve Analist Sonunda Aynı Grafikleri, Tabloları ve Monitörleri Elle Yeniden Yapıp, API\'leri Yapıştırıp, Websocket\'leri Çalıştırıp ve Mizanpajla Savaşır. Araçlar Güçlüdür Ancak Yavaştır ve İyileri Ağır Platformların Arkasında Kilitlidir.',
      'Nexow Bunu Tersine Çevirir. Görmek İstediğinizi Açıklarsınız ve Bir Yapay Zeka Gerçek, Çalışan Bir Widget Yazar — Korumalı, Sürümlü ve Zaten Kullandığınız Mekanlardan Canlı Verilerine Bağlı. Gösterge Paneli Kendini Birleştirir ve Sade Dille İyileştirirsiniz.',
      'Bunu Özel Birincil Olarak Yapıyoruz: Kendi Anahtarınız İle Tamamen Yerel Çalıştırın, Verilerinizi Tarayıcıda Tutun ve Mümkün Olduğunda Doğrudan Mekanlarla Bağlanın. Ticaret Ajanları, Sunucu Bileşenleri ve Topluluk Katmanı Ekledikçe, Bu İlke Sabitlenir — Sizin Anahtarlarınız, Sizin Verileriniz, Sizin Makineniz.',
    ],
    valuesTitle: 'Değer Verdiğimiz Şeyler',
    values: [
      { icon: 'lock', title: 'Varsayılan Olarak Özel', body: 'Yerel Birincil, Kendi Anahtarını Getir, Seçin Sürece Makinenizden Hiçbir Veri Ayrılmaz.' },
      { icon: 'bolt', title: 'İçgörü Hızı', body: 'Cümleden Canlı Widget\'e Saniyeler İçinde — Soru ve Grafik Arasında En Kısa Yol.' },
      { icon: 'shield', title: 'İnşaat Tarafından Güvenli', body: 'Oluşturulan Kod Korumalı İçinde Katı Sınır ile Çalışır, Bu Nedenle Güç Asla Risk Anlamına Gelmez.' },
      { icon: 'globe', title: 'Her Piyasaya Açık', body: 'Döviz, Kripto, Hisse Senedi, Vadeli İşlem, Opsiyon ve Tahmin Piyasaları — Tümü İçin Bir Tuval.' },
    ],
    ctaTitle: 'Kendiniz Görün',
    ctaBody: 'Ön izleme canlı. Bir widget açıklayın ve Nexow\'un yapıp yapmadığını izleyin.',
    cta: 'Uygulamayı Başlat',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Yapay Zeka ile Pazar Gösterge Panelleri Yapma, Canlı Veriye Bağlama ve Ticaret Araçları Hakkında Kılavuzlar ve Derinlemesine Dergiler — Nexow Ekibinden.',
    },
    title: 'Nexow Blogu',
    subtitle: 'Yapay Zeka Tabanlı Pazar Araçları Yapma — Kılavuzlar, Derinlemesine Dergiler ve Ürün Notları.',
    latest: 'En Son',
    readMore: 'Makaleyi Oku',
    backToBlog: 'Bloga Geri Dön',
    published: 'Yayınlanan',
    updated: 'Güncellenen',
    minRead: 'dakika okuma',
  },
  notFound: {
    title: 'Bu Sayfa Tuvali Kaymış',
    body: 'Aradığınız Sayfa Yok — Ama Sonraki Gösterge Paneliniz Olabilir.',
    cta: 'Başa Dön',
  },
};
