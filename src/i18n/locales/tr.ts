import type { SiteContent } from '../content';

export const tr: SiteContent = {
  nav: {
    links: [
      { label: 'Özellikler', href: '/features' },
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
          { label: 'Planlar', href: '/plans' },
          { label: 'Bağlantılar', href: '/connectors' },
          { label: 'Otomasyonlar', href: '/#automate' },
          { label: 'Topluluk', href: '/#network' },
          { label: 'Yol Haritası', href: '/#roadmap' },
        ],
      },
      {
        title: 'Şirket',
        links: [
          { label: 'Hakkında', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Kaynaklar',
        links: [
          { label: 'Uygulamayı Başlat', href: 'https://x.nexow.ai' },
          { label: 'Gizlilik', href: '/privacy' },
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
      eyebrow: 'Neden Nexow',
      title: 'Gösterge paneli kendini kurar',
      subtitle:
        'Grafikleri el ile bağlamayı bırakın. Görmek istediğinizi açıklayın ve Nexow gerçek, çalışan bir widget oluşturur — ardından onu sade dille iyileştirmenize izin verir.',
      items: [
        {
          icon: 'sparkles',
          title: 'Sade dil widgetleri',
          body: 'Grafik, tablo, ısı haritası veya sinyali sade sözcüklerle açıklayın. Nexow widget kaynağını Claude ile yazar ve canlı çalıştırır — kalıpsal kod yok, yapılandırma dosyası yok.',
        },
        {
          icon: 'shield',
          title: 'Korumalı ve güvenli',
          body: 'Her widget, katı bir sınırla yalıtılmış bir iframe içinde çalışır. Oluşturulan kod, işleyebilir ve veri getirebilir, ancak çalışma alanınızın geri kalanına asla dokunmaz.',
        },
        {
          icon: 'plug',
          title: '45+ canlı veri bağlantısı',
          body: 'Bağlanabilir pazar veri sağlayıcıları — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket ve daha fazlası — gerçek zamanlı verileri widget\'lerinize yönlendirir.',
        },
        {
          icon: 'layers',
          title: 'Serbest biçimli tuval',
          body: 'Widget\'leri serbest biçimli bir tuvalde sürükleyin, yeniden boyutlandırın ve düzenleyin; döviz, kripto, araştırma için çalışma alanları ve ekranlar. Widget\'leri grup olarak toplayın ve Bağlantılar ile aralarında canlı veriler aktarın.',
        },
        {
          icon: 'lock',
          title: 'Varsayılan olarak özel',
          body: 'Tamamen yerel olarak çalıştırın: kendi Anthropic anahtarınızı ekleyin ve kod oluşturma tarayıcınızda gerçekleşir. Widget\'ler, sürümler ve günlükler IndexedDB\'de kalıcı hale gelir — hiçbir şey sunucularımıza gönderilmez.',
        },
        {
          icon: 'history',
          title: 'Sürümler ve widget kütüphanesi',
          body: 'Her düzenleme, inceleyebileceğiniz günlükleri ile sürümlenir. Widget\'leri kişisel bir kütüphaneye kaydedin ve pano\'lar genelinde tek tıklamayla yeniden kullanın.',
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
  features: {
    meta: {
      title: 'Özellikler — Nexow',
      description:
        'Sade dil widget oluşturma, korumalı çalışma zamanı, gruplar ve bağlantılar ile serbest biçimli tuval, 45+ pazar veri bağlantısı, bulut botları ve ajanları, XP ödülleri ile yapıcı topluluğu, özel yerel mod ve sürümlü widget kütüphanesi. Nexow\'un yaptığı her şeyi keşfedin.',
    },
    hero: {
      badge: 'Özellikler',
      title: 'Sade Dille Pazar Panosu Yapmak İçin Gereken Her Şey',
      subtitle:
        'Nexow bir cümleyi çalışan, veri bağlantılı bir widgete dönüştürür — ardından gerçek bir çalışma istasyonu yapmak için tuval, bağlantılar, bulut otomasyonu ve ağı verir.',
    },
    groups: [
      {
        title: 'Oluştur',
        body: 'Görmek istediğinizi açıklayın; Nexow yazar ve çalıştırır.',
        items: [
          { icon: 'sparkles', title: 'Sade dil kod oluşturma', body: 'Bir widget açıklayın ve Nexow Claude ile tam kaynağını oluşturur — grafikler, tablolar, ısı haritaları, emir defterleri, özel sinyaller.' },
          { icon: 'wand', title: 'Konuşma ile iyileştir', body: 'Soru sorarak herhangi bir şeyi değiştir. "200 EMA ekle", "log ölçeğine geç", "finansman oranına göre renklendirmek için" — Nexow yerinde widget\'i düzenler.' },
          { icon: 'history', title: 'Sürümlü ve İncelenebilir', body: 'Her oluşturma günlükler ile sürümlenir. Geri alın, karşılaştırın ve her widget\'te çalışan tam kaynağı okuyun.' },
        ],
      },
      {
        title: 'Çalıştır',
        body: 'Oluşturulan kod için güvenli, hızlı çalışma zamanı.',
        items: [
          { icon: 'shield', title: 'Korumalı iframe\'ler', body: 'Widget\'ler katı bir sınır ile yalıtılmış iframe\'lerde yürütülür — oluşturulan kod işleyebilir ve getirebilir, ama çalışma alanınıza veya diğer widget\'lere dokunmaz.' },
          { icon: 'bolt', title: 'Canlı Akış Verisi', body: 'Widget\'ler minimum gecikme ile gerçek zamanlı fiyatlara, emir defterlerine ve referans verilerine abone olur.' },
          { icon: 'layers', title: 'Serbest Biçimli Tuval ve Çalışma Alanları', body: 'Widget\'leri serbest biçimli tuvalde düzenleyin, çalışma alanları ve ekranlara gruplandırın ve kurulumlar arasında anında geçiş yapın.' },
          { icon: 'link', title: 'Gruplar ve Bağlantılar', body: 'Widget\'leri mozaik veya sekme düzenleri ile gruplara toplayın ve widget\'leri Bağlantılar ile bağlayın — tek yön veya çift yön borular bir widget\'in verilerini diğerine akış yapılır.' },
        ],
      },
      {
        title: 'Bağlan',
        body: 'Gerçekten kullandığınız mekanlardan bağlanabilir veri.',
        items: [
          { icon: 'plug', title: '45+ pazar veri bağlantısı', body: 'Veritabanları, sosyal akışlar, piyasalar, cüzdanlar ve web hizmetleri — Postgres, ClickHouse, Qdrant, X, YouTube, Discord, OANDA, Binance, Coinbase, MetaMask, Ledger, Polygon, Kalshi ve daha fazlası.' },
          { icon: 'globe', title: 'Mümkün Olduğunca Tarayıcı-Doğrudan', body: 'CORS izni verdiğinde, kimliği doğrulanmış mekan çağrıları doğrudan tarayıcınızdan çalışır ve vekili tamamen atlayır.' },
          { icon: 'database', title: 'Veritabanları ve Sosyal Ortamlar da', body: 'Widget\'leri Postgres, ClickHouse veya Qdrant\'a işaret edin veya canlı piyasalarla birlikte X, YouTube, Discord ve Telegram\'dan çekin.' },
        ],
      },
      {
        title: 'Otomatikleştir',
        body: 'Uzaktayken hareket eden bulut otomasyonları ve yapay zeka.',
        items: [
          { icon: 'bot', title: 'Bulut Botları', body: 'Bir uyarı açıklayın veya görsel bağlama yapın — eşikler, % değişim, MA kesişmeleri, özetler veya bağlı bir broker hesabında yeni işlemler. Botlar bulut kalp atışında çalışır ve sekmeleriniz kapalı olduğunda widget\'lerinize sinyaller gönderir.' },
          { icon: 'cpu', title: 'Yapay Zeka Ajanları', body: 'Tam araç gereç ile ajanlar — model, hafıza, beceriler, araçlar, bilgi ve tetikleyiciler. Görsel araç yöneticisinde tasarlayın ve araç izinleri ve canlı çalıştırma geçmişi ile buluta dağıtın.' },
          { icon: 'chat', title: 'Copilot', body: 'Çalışma alanınız için asistan: widget\'in ekran görüntüsünü veya verilerini ekleyin ve açıklamasını, özetini veya sonra ne izleyeceğini vermesini isteyin — arka planda yapmaya devam eden paralel sohbetlerde.' },
        ],
      },
      {
        title: 'Ağ',
        body: 'Yapıcılar dünyası ile bir araya yapın.',
        items: [
          { icon: 'users', title: 'Topluluk', body: 'Yapıcıları takip edin, beslemede yayınlayın ve widget\'leri başkalarının doğrudan kütüphanelerine ekleyebilmeleri için paylaşın — canlı, herkese açık yapıcı profilleri ile.' },
          { icon: 'store', title: 'Pazaryeri', body: 'Hazır widget\'ler, temalar, ekranlar ve botlar yayınlayın ve yükleyin — bugün canlı, her yeniden yapımın kaynağını gösteren soy kaydı ile. Alım satım sırada.' },
          { icon: 'signal', title: 'Strateji Sinyalleri', body: 'Denetlenmiş geçmiş kayıtları yayınlayın, güvendiğiniz sinyallere abone olun ve çalıştırdığınız stratejilerde para kazanın. Yakında.' },
          { icon: 'trophy', title: 'İtibar ve Madalyalar', body: 'Yapıp paylaşarak itibar puanları kazanın, kademeli başarılar ve nadir madalyalar açın — bugün canlı. Ödül kredileri sırada.' },
        ],
      },
      {
        title: 'Sahip Ol',
        body: 'Varsayılan olarak özel, sizin.',
        items: [
          { icon: 'lock', title: 'Özel yerel mod', body: 'Kendi Anthropic anahtarınızı getirin ve istemci tarafında widget\'ler oluşturun. Sunucularımıza hiçbir şey gönderilmez — hesap gerekmiyor.' },
          { icon: 'sync', title: 'İsteğe Bağlı Bulut Senkronizasyonu', body: 'Çalışma alanları, widget\'ler ve ayarları her cihaz genelinde senkronize etmek için ücretsiz hesap oluşturun — şifreli kimlik bilgileri kasa ile.' },
          { icon: 'library', title: 'Yeniden Kullanılabilir Kütüphane', body: 'Herhangi bir widget\'i kütüphaneye kaydedin ve tek tıklama ile herhangi bir panoya koyun.' },
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
      wallet: 'Kripto Cüzdanı',
      browser: 'Tarayıcı Otomasyonu',
      scraping: 'Web Kazıma',
      search: 'Web Araması',
      weather: 'Hava Durumu ve Hava Kalitesi',
      open_data: 'Açık Veri',
      knowledge: 'Bilgi',
      news: 'Haberler',
      geo: 'Coğrafya ve Ulaşım',
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
  privacyPage: {
    badge: 'Gizlilik',
    title: 'Gizlilik Politikası',
    subtitle: 'Nexow Verilerinizi Nasıl İşler — Kısa Sürüm: Mümkün Olduğunca Az.',
    meta: {
      title: 'Gizlilik Politikası — Nexow',
      description: 'Nexow Varsayılan Olarak Özel. Veri, Anahtarlar ve Bağlantıları Nasıl İşlediğimizi Öğrenin.',
    },
    updated: 'Son Güncellenme: 1 Temmuz 2026',
    sections: [
      { h: 'Varsayılan Olarak Özel', p: 'Nexow Varsayılan Olarak Tamamen Yerel Olarak Çalışır. Özel Modda Kendi Anthropic API Anahtarınızı Sağlarsınız ve Widget Oluşturma Tamamen Tarayıcınızda Gerçekleşir. İstemleriniz ve Oluşturulan Kod Doğrudan Tarayıcınızdan Anthropic\'e Gönderilir — Sunucularımız Aracılığıyla Değil.' },
      { h: 'Depoladığımız Şeyler', p: 'Widget\'leriniz, Sürümleriniz, Günlükleriniz ve Kütüphaneniz IndexedDB Kullanarak Tarayıcınızda Depolanır. Cihazınızda Kalırlar ve Nexow\'a Yüklenmez. Tarayıcı Depolama Alanınızı Temizlemek Bunları Kalıcı Olarak Siler.' },
      { h: 'Pazar Veri Bağlantıları', p: 'Bir Mekan İzin Verirse, Nexow Doğrudan Tarayıcınızdan Bağlanır ve Mekan Kimlik Bilgileriniz Sadece O Mekanla Konuşmak İçin Kullanılır. Bazı Mekanlar Ince Bir Vekil Aracılığıyla Yönlendirmeyi Gerektirir; Bu Durumda Sadece İstek Yerine Getirmek İçin Gerekli Veriler Geçer.' },
      { h: 'Bu Web Sitesi', p: 'Bu Pazarlama Sitesi Statik Bir Sitedir. Analitiği Minimal ve Gizlilik Saygılı Tutarız ve Kişisel Veriler Satmayız. Giden Bağlantılar (Uygulama Gibi) Açıkça Etiketlenir.' },
      { h: 'İletişim', p: 'Gizlilik Hakkında Sorularınız mı Var? E-posta hello@nexow.ai.' },
    ],
  },
};
