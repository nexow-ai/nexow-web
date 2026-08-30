import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Son güncelleme: 29 Temmuz 2026';

export const tr: LegalBundle = {
  privacyPage: {
    badge: 'Gizlilik',
    title: 'Gizlilik Politikası',
    subtitle:
      `Nexow, Inc.'nin ${WEB} ve Nexow uygulamasını kullandığınızda kişisel bilgileri nasıl topladığı, kullandığı ve koruduğu.`,
    meta: {
      title: 'Gizlilik Politikası — Nexow',
      description:
        'Nexow, Inc. Gizlilik Politikası: topladığımız veriler, kullanım şeklimiz, çerezler ve GDPR, CCPA/CPRA ile diğer geçerli yasalar kapsamındaki gizlilik haklarınız.',
    },
    updated: UPDATED,
    governingNote:
      'Bu Gizlilik Politikasının bağlayıcı dili İngilizcedir (English). Çeviriler yalnızca kolaylık sağlamak amacıyla sunulur ve İngilizce sürümü değiştirmez.',
    sections: [
      {
        h: '1. Biz kimiz',
        paragraphs: [
          `Bu Gizlilik Politikası, ${ENTITY} ("Nexow", "biz" veya "bizim") tarafından web sitelerimiz (${WEB} dahil), Nexow web uygulaması (${APP}) ve ilgili hizmetler (topluca "Hizmetler") kapsamında kişisel bilgilerin nasıl işlendiğini açıklar.`,
          `Veri sorumlusu / işletme: ${CONTACT_BLOCK}`,
          'Bu Politika hakkında sorularınız varsa veya gizlilik haklarınızı kullanmak istiyorsanız, yukarıdaki adrese veya e-postaya "Privacy Request" konu satırıyla bize ulaşın.',
        ],
      },
      {
        h: '2. Kapsam',
        paragraphs: [
          'Bu Politika, pazarlama sitemizi ziyaret ettiğinizde, Nexow hesabı oluşturduğunuzda veya kullandığınızda, çalışma alanları ve widget\'lar oluşturduğunuzda veya paylaştığınızda, üçüncü taraf hizmetleri bağladığınızda, plan satın aldığınızda veya yönettiğinizde ya da Hizmetlerle başka şekilde etkileşime girdiğinizde işlediğimiz kişisel bilgilere uygulanır.',
          'Bağlamayı seçtiğiniz üçüncü taraf web sitelerine, uygulamalara, venue\'lere veya API\'lere uygulanmaz; bunlar kendi gizlilik koşullarına tabidir. Bir bağlayıcı tarayıcınızda üçüncü tarafa karşı çalıştığında, o üçüncü taraf genellikle ona gönderdiğiniz verilerin bağımsız veri sorumlusudur.',
        ],
      },
      {
        h: '3. Topladığımız bilgiler',
        paragraphs: [
          'Hesap ve profil verileri: e-posta adresi, görünen ad, kimlik doğrulama tanımlayıcıları, plan veya faturalama durumu, tercihler ve benzer hesap ayarları.',
          'Çalışma alanı ve ürün verileri: widget\'lar, prompt\'lar, oluşturulan kod veya yapılandırmalar, sürümler, günlükler, kütüphane öğeleri, senkronizasyon durumu, iş birliği meta verileri ve Hizmetlerde oluşturduğunuz veya yüklediğiniz ilgili içerik.',
          'Bağlantı verileri: üçüncü taraf bağlayıcılar için sağladığınız token\'lar, API anahtarları veya OAuth kimlik bilgileri ("Bağlantılar ve kimlik bilgileri" bölümünde açıklandığı gibi işlenir) ve bu bağlantıları sürdürmek için gerekli teknik meta veriler.',
          'Kullanım ve cihaz verileri: IP adresi, tarayıcı türü, cihaz veya işletim sistemi bilgileri, IP\'den türetilen yaklaşık konum, yönlendiren, görüntülenen sayfalar, özellik kullanımı, performans ve tanılama olayları ve Hizmetleri işletmek ve güvenliğini sağlamak için gerekli benzer telemetri.',
          'İletişimler: bize gönderdiğiniz mesajlar (destek, gizlilik veya yasal talepler) ve ilgili yazışmalar.',
          'Ödeme verileri: ücretli plan satın alırsanız, ödeme yöntemi ve faturalama ayrıntıları genellikle ödeme işlemcimiz tarafından işlenir; işlemci izin verdiği ölçüde sınırlı faturalama meta verileri (ör. plan, durum, son dört hane veya benzer token\'lar) alırız, tam kart numaralarını değil.',
          'Çerezler ve benzer teknolojiler: ayrıntılar için Çerez Politikamıza bakın.',
        ],
      },
      {
        h: '4. Bilgileri nasıl kullanıyoruz',
        paragraphs: [
          'Kişisel bilgileri şunlar için kullanırız: Hizmetleri sağlamak, sürdürmek ve iyileştirmek; kullanıcıları doğrulamak ve hesapları güvenli kılmak; talep ettiğiniz çalışma alanı içeriğini depolamak ve senkronize etmek; işlemleri işlemek ve hizmetle ilgili bildirimler göndermek; destek ve gizlilik taleplerine yanıt vermek; güvenilirlik, kötüye kullanım ve güvenliği izlemek; yasalara uymak; ve izin verildiğinde ürün güncellemelerini iletmek (gerekli olmayan pazarlamadan vazgeçebilirsiniz).',
          'CCPA/CPRA kapsamında "satış" olarak yaygın tanımlandığı şekilde kişisel bilgi satmıyoruz ve California yasası kapsamında tanımlandığı şekilde bağlamlar arası davranışsal reklamcılık için kişisel bilgi paylaşmıyoruz; reklam çerezleri tanıtırsak Çerez Politikamızda açıklananlar dışında (bu durumda bu Politikayı günceller ve gerekli opt-out seçeneklerini sunarız).',
        ],
      },
      {
        h: '5. Hukuki dayanaklar (AEA / BK / İsviçre)',
        paragraphs: [
          'AB GDPR, BK GDPR veya İsviçre FADP geçerli olduğunda, kişisel verileri şu dayanaklardan bir veya daha fazlasına göre işleriz: sözleşmenin ifası (talep ettiğiniz Hizmetleri sağlama); meşru menfaatler (Hizmetleri güvenli kılma ve iyileştirme, kötüye kullanımı önleme, temel analitik), haklarınızla dengelenmiş; rıza (gerektiğinde, örn. belirli çerezler veya isteğe bağlı pazarlama); ve yasal yükümlülük (kayıt saklama veya yasal taleplere yanıt).',
        ],
      },
      {
        h: '6. Bağlantılar ve kimlik bilgileri',
        paragraphs: [
          'Üçüncü taraf hizmet izin verdiğinde, Nexow tarayıcınızdan doğrudan bağlanabilir; böylece kimlik bilgileri öncelikle o hizmetle iletişim kurmak için kullanılır. Bazı hizmetler proxy veya sunucu tarafı bileşen gerektirir; bu durumlarda yalnızca talebi yerine getirmek ve bağlayıcıyı işletmek için gerekli olanı işleriz.',
          'Her hizmeti bağlama hakkına sahip olduğunuzdan emin olmaktan ve en az ayrıcalıklı kimlik bilgilerini yapılandırmaktan siz sorumlusunuz. Bağlantıya artık ihtiyaç duymadığınızda üçüncü taraf hizmette ve Nexow\'da erişimi iptal edin.',
        ],
      },
      {
        h: '7. Oluşturulan içerik ve AI özellikleri',
        paragraphs: [
          'Oluşturma veya AI destekli özellikleri kullandığınızda, prompt\'lar ve ilgili bağlam bizim ve/veya özelliği sunmak için kullandığımız model veya altyapı sağlayıcıları tarafından işlenebilir. Bu işlemeyi çalışma alanınız için sonuç üretmek ve Hizmetleri işletmek ve iyileştirmek için, bu sağlayıcılarla sözleşmelerimize tabi olarak kullanırız.',
          'Yasal dayanağınız yoksa ve bu tür içeriğin oluşturmaya dahil alt işlemciler tarafından işlenebileceği riskini kabul etmedikçe, prompt\'lara gizli, düzenlenmiş kişisel veri veya gizli üçüncü taraf verisi göndermeyin.',
        ],
      },
      {
        h: '8. Paylaşım ve işlemciler',
        paragraphs: [
          'Kişisel bilgileri şunlarla paylaşırız: hizmet sağlayıcılar (barındırma, analitik, e-posta, ödemeler, hata izleme, AI/model sağlayıcıları) kullanımı bize hizmet sağlamakla sınırlayan sözleşmeler kapsamında; profesyonel danışmanlar; yasa gereği veya hakları ve güvenliği korumak için yetkili makamlar; ve birleşme, devralma veya varlık devrinde halefler (gerektiğinde bildirimle).',
          'Ayrıca herkese açık yapmayı veya diğer kullanıcılarla paylaşmayı seçtiğiniz bilgileri (ör. yayımlanan widget\'lar, topluluk özellikleri) ayarlarınıza göre paylaşabiliriz.',
        ],
      },
      {
        h: '9. Uluslararası aktarımlar',
        paragraphs: [
          `${ENTITY} Amerika Birleşik Devletleri'nde merkezlidir. Hizmetlere AEA, BK, İsviçre veya diğer bölgelerden erişirseniz, bilgileriniz farklı veri koruma kurallarına sahip olabilecek ABD ve diğer ülkelere aktarılabilir ve işlenebilir.`,
          'Gerektiğinde, aktarımlar için uygun güvenceler (Standart Sözleşme Maddeleri veya halef mekanizmalar gibi) kullanır ve kişisel bilgileri korumak için makul gördüğümüz adımları atarız.',
        ],
      },
      {
        h: '10. Saklama',
        paragraphs: [
          'Kişisel bilgileri hesabınız aktif olduğu sürece veya Hizmetleri sağlamak, yasal yükümlülüklere uymak, uyuşmazlıkları çözmek ve anlaşmaları uygulamak için gerekli olduğu sürece saklarız. Çalışma alanı içeriği genellikle siz silene veya hesabı kapatana kadar kalır; yedekleme ve yasal elde tutma sürelerine tabidir. Aşağıda açıklandığı gibi silme talep edebilirsiniz; bazı kalıntı kopyalar sınırlı süre yedeklerde kalabilir.',
        ],
      },
      {
        h: '11. Güvenlik',
        paragraphs: [
          'Kişisel bilgileri korumak için tasarlanmış teknik ve organizasyonel önlemler uygularız (erişim kontrolleri, uygun olduğunda aktarım sırasında şifreleme, en az ayrıcalık uygulamaları). Hiçbir iletim veya depolama yöntemi tamamen güvenli değildir; hesap kimlik bilgilerini ve cihazları korumaktan siz sorumlusunuz.',
        ],
      },
      {
        h: '12. Haklarınız — Avrupa ve BK (GDPR)',
        paragraphs: [
          'AEA, BK veya İsviçre\'deyseniz, belirli işlemlere erişim, düzeltme, silme, kısıtlama veya itiraz; veri taşınabilirliği; ve işleme rızaya dayalıysa rızayı geri çekme haklarına sahip olabilirsiniz; önceki yasal işleme etkilenmez. Yerel denetim otoritenize şikâyet edebilirsiniz.',
          `Bu hakları kullanmak için ${EMAIL} adresine "Privacy Request" konu satırıyla e-posta gönderin. Talebi yerine getirmeden önce kimliğinizi doğrulamamız gerekebilir.`,
        ],
      },
      {
        h: '13. Haklarınız — Amerika Birleşik Devletleri (CCPA/CPRA dahil)',
        paragraphs: [
          'İkamet ettiğiniz eyalete bağlı olarak (CCPA/CPRA kapsamında California dahil), kişisel bilgileri bilme/erişim, silme, düzeltme ve satış veya paylaşımdan vazgeçme ile geçerli olduğunda hassas kişisel bilgilerin kullanımını sınırlama haklarına sahip olabilirsiniz. Gizlilik haklarını kullandığınız için ayrımcılık yapmazız.',
          `Talepleri ${EMAIL} adresine (konu: "Privacy Request") veya ${ADDRESS} adresine posta ile gönderin. Yetkili temsilciler yasa izin verdiği ölçüde talep gönderebilir; yetkilendirme kanıtı ve kimlik doğrulaması isteyebiliriz.`,
          '"Do Not Sell or Share" veya benzeri bir kontrol sunarsak (Global Privacy Control\'ü onurlandırdığımızda dahil), bunu Çerez Politikasında veya ürün ayarlarında açıklarız.',
        ],
      },
      {
        h: '14. Asya-Pasifik notları (genel düzey)',
        paragraphs: [
          `Singapur (PDPA), Japonya (APPI), Güney Kore (PIPA) veya kişisel veri yasalarına sahip diğer Asya-Pasifik bölgelerindeyseniz, bilgileri bu Politikada açıklandığı gibi ve ABD merkezli çevrimiçi Hizmet sağlayıcısı olarak ${ENTITY} için geçerli olduğu ölçüde yerel gerekliliklere uygun işleriz.`,
          `Geçerli yasaya uygun erişim, düzeltme veya silme talep etmek için ${EMAIL} adresinden bize ulaşabilirsiniz. Yerel yasa yerel temsilci veya ek bildirimler gerektirdiğinde, bu Politikayı günceller veya bölgeye özel bildirimler sağlarız.`,
        ],
      },
      {
        h: '15. Çocuklar',
        paragraphs: [
          'Hizmetler 16 yaşın altındaki çocuklara (veya yargı alanınızda gerekli daha yüksek yaşa) yönelik değildir. Bilerek çocuklardan kişisel bilgi toplamıyoruz. Bir çocuğun bize bilgi verdiğine inanıyorsanız, bize ulaşın; silmek için uygun adımları atarız.',
        ],
      },
      {
        h: '16. Pazarlama sitesi',
        paragraphs: [
          'Pazarlama web sitemiz esas olarak statiktir ve Çerez Politikasında açıklandığı gibi sınırlı analitik ve çerezler kullanır. Pazarlama sitesinden toplanan kişisel verileri satmıyoruz. Giden bağlantılar (uygulamaya dahil) pratik olduğunda etiketlenir.',
        ],
      },
      {
        h: '17. Değişiklikler',
        paragraphs: [
          'Bu Politikayı zaman zaman güncelleyebiliriz. Revizyon yayımladığımızda "Son güncelleme" tarihi değişir. Önemli değişiklikler sitede vurgulanabilir veya uygun olduğunda e-posta ile bildirilebilir. Güncellemeden sonra Hizmetleri kullanmaya devam etmeniz, yasa izin verdiği ölçüde revize Politikanın kabulü anlamına gelir.',
        ],
      },
      {
        h: '18. İletişim',
        paragraphs: [
          `Gizlilik ve veri koruma talepleri: ${EMAIL}`,
          `Posta: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Koşullar',
    title: 'Kullanım Koşulları',
    subtitle: `Sizinle Nexow, Inc. arasındaki ${WEB} ve Nexow uygulaması kullanım sözleşmesi.`,
    meta: {
      title: 'Kullanım Koşulları — Nexow',
      description:
        'Nexow, Inc. web siteleri ve uygulaması Kullanım Koşulları: hesaplar, kabul edilebilir kullanım, fikri mülkiyet, feragatnameler, sorumluluk ve geçerli hukuk.',
    },
    updated: UPDATED,
    governingNote:
      'Bu Kullanım Koşullarının bağlayıcı dili İngilizcedir (English). Çeviriler yalnızca kolaylık sağlamak amacıyla sunulur ve İngilizce sürümü değiştirmez.',
    sections: [
      {
        h: '1. Sözleşme',
        paragraphs: [
          `Bu Kullanım Koşulları ("Koşullar"), sizinle ${ENTITY} ("Nexow", "biz" veya "bizim") arasında ${WEB}, ${APP} ve ilgili hizmetlere ("Hizmetler") erişimi ve kullanımını düzenleyen bağlayıcı bir sözleşmedir.`,
          'Hizmetlere erişerek veya kullanarak, hesap oluşturarak veya bu Koşulları kabul ederek, bunları ve Gizlilik Politikamız ile Çerez Politikamızı kabul etmiş olursunuz. Kabul etmiyorsanız Hizmetleri kullanmayın.',
          'Hizmetleri bir kuruluş adına kullanıyorsanız, onu bağlama yetkisine sahip olduğunuzu beyan edersiniz ve "siz" o kuruluşu da kapsar.',
        ],
      },
      {
        h: '2. Hizmetler',
        paragraphs: [
          'Nexow, üçüncü taraf veri kaynaklarına bağlantılar ve sunduğumuz isteğe bağlı iş birliği, topluluk veya marketplace özellikleri dahil widget\'ları ve çalışma alanlarını tanımlamak, oluşturmak, yapılandırmak, görselleştirmek ve paylaşmak için araçlar sağlar.',
          'Pratik olduğunda makul bildirimle özellikleri, planları veya Hizmetleri (tamamen veya kısmen) değiştirebilir, askıya alabilir veya durdurabiliriz. Önizleme veya beta özellikleri kararsız olabilir ve olduğu gibi sunulur.',
        ],
      },
      {
        h: '3. Uygunluk ve hesaplar',
        paragraphs: [
          'Hizmetleri kullanmak için yargı alanınızdaki dijital rıza yaşına (ve her durumda en az 16, gerekli olduğunda 18) ulaşmış olmalısınız. Doğru hesap bilgileri sağlamalı ve kimlik bilgilerini gizli tutmalısınız. Hesabınız altındaki faaliyetlerden siz sorumlusunuz.',
          'Bu Koşulları ihlal eden, güvenlik riski oluşturan veya uzun süre etkin olmayan hesapları askıya alabilir veya sonlandırabiliriz.',
        ],
      },
      {
        h: '4. Planlar, krediler ve ödeme',
        paragraphs: [
          'Bazı özellikler ücretli plan, kredi veya diğer kullanım limitleri gerektirir. Fiyatlar, dahil edilen kotalar ve faturalama dönemleri Planlar sayfasında veya ürün içinde açıklanır. Aksi belirtilmedikçe, yasalar gerektirmedikçe ücretler iade edilmez.',
          'Bize ve ödeme işlemcilerimize geçerli ücretleri tahsil etme yetkisi verirsiniz. Vergiler uygulanabilir. Bildirimle fiyatları değiştirebiliriz; aksi belirtilmedikçe değişiklikler bir sonraki yenilemede yürürlüğe girer.',
        ],
      },
      {
        h: '5. İçeriğiniz ve lisans',
        paragraphs: [
          'Hizmetlerde gönderdiğiniz veya oluşturduğunuz içeriğin ("Kullanıcı İçeriği") sahipliğini, üçüncü taraf hakları ve girdilerinize özgü olmayan platformumuz, şablonlarımız ve oluşturulan iskele üzerindeki Nexow hakları saklı kalmak kaydıyla elinizde tutarsınız.',
          `${ENTITY}'ye Kullanıcı İçeriğini barındırma, işleme, iletme, görüntüleme ve türev eserler oluşturma konusunda yalnızca Hizmetleri işletmek, güvenli kılmak ve iyileştirmek için gerekli olduğu ölçüde ve yönlendirmeniz doğrultusunda (ör. paylaşma veya yayımlama) dünya çapında münhasır olmayan bir lisans verirsiniz.`,
          'Kullanıcı İçeriği göndermek ve üçüncü taraf hizmetleri bağlamak için gerekli tüm haklara sahip olduğunuzu ve Kullanıcı İçeriğinin yasa veya üçüncü taraf haklarını ihlal etmediğini beyan edersiniz.',
        ],
      },
      {
        h: '6. Kabul edilebilir kullanım',
        paragraphs: [
          'Kabul Edilebilir Kullanım Politikamıza ve tüm geçerli yasalara uymalısınız. Hizmetleri kötüye kullanamaz, başkalarına müdahale edemez, yetkisiz erişim deneyemez, kötü niyetli kazıma yapamaz veya Hizmetleri yasadışı ticaret, dolandırıcılık, kötü amaçlı yazılım veya ihlal için kullanamazsınız.',
          'Nexow bir araç ve görselleştirme platformudur. Hizmetlerdeki hiçbir şey finansal, yatırım, hukuki veya vergi tavsiyesi değildir. Piyasa verileri ve örnekler illüstratif olabilir; verdiğiniz kararlardan yalnızca siz sorumlusunuz.',
        ],
      },
      {
        h: '7. Üçüncü taraf hizmetler',
        paragraphs: [
          'Bağlayıcılar ve entegrasyonlar isteğe bağlıdır ve üçüncü taraf koşullarına tabidir. Üçüncü taraf kullanılabilirliği, doğruluğu, ücretleri veya veri uygulamalarından sorumlu değiliz. Sağladığınız kimlik bilgileri Gizlilik Politikasında açıklandığı gibi kullanılır.',
        ],
      },
      {
        h: '8. Fikri mülkiyet',
        paragraphs: [
          `Yazılım, marka, dokümantasyon ve Kullanıcı İçeriği olmayan içerik dahil Hizmetler, ${ENTITY} veya lisans verenlerine aittir ve fikri mülkiyet yasalarıyla korunur. Bu Koşullar kapsamında Hizmetleri kullanma sınırlı hakkı dışında hiçbir hak verilmez.`,
          'Sağladığınız geri bildirimi size karşı yükümlülük olmaksızın kullanabiliriz.',
        ],
      },
      {
        h: '9. Gizlilik ve güvenlik',
        paragraphs: [
          'Güvenlik kontrollerini araştırmaya, atlatmaya veya bozmaya çalışmamalısınız. Şüpheli güvenlik açıklarını sorumlu şekilde bildirin. Makul güvenlik önlemleri uygularız ancak mutlak güvenliği garanti edemeyiz.',
        ],
      },
      {
        h: '10. Feragatnameler',
        paragraphs: [
          'HİZMETLER "OLDUĞU GİBİ" VE "MEVCUT OLDUĞU ŞEKİLDE" SUNULUR. YASA İZİN VERDİĞİ AZAMİ ÖLÇÜDE, TİCARİ ELVERİŞLİLİK, BELİRLİ BİR AMACA UYGUNLUK VE İHLAL ETMEME DAHİL TÜM AÇIK VEYA ZIMNİ GARANTİLERİ REDDEDERİZ. HİZMETLERİN KESİNTİSİZ, HATASIZ VEYA ZARARLI BİLEŞENLERDEN ARINMIK OLACAĞINI VEYA ÇIKTILARIN (AI TARAFINDAN OLUŞTURULAN İÇERİK DAHİL) DOĞRU, EKSİKSİZ VEYA AMACINIZA UYGUN OLACAĞINI GARANTİ ETMEYİZ.',
        ],
      },
      {
        h: '11. Sorumluluk sınırlaması',
        paragraphs: [
          `YASA İZİN VERDİĞİ AZAMİ ÖLÇÜDE, ${ENTITY} VE YÖNETİCİLERİ, MEMURLARI, ÇALIŞANLARI VE TEMSİLCİLERİ, SÖZLEŞME, HAKSIZ FİİL VEYA BAŞKA BİR DAYANAKLA, OLANAKLILIĞI BİLDİRİLMİŞ OLSA BİLE, HİZMETLERDEN VEYA BU KOŞULLARDAN KAYNAKLANAN VEYA BUNLARLA İLGİLİ DOLAYLI, ARIZİ, ÖZEL, SONUÇSAL, ÖRNEK VEYA CEZAİ ZARARLARDAN VEYA KÂR, GELİR, VERİ VEYA İTİBAR KAYBINDAN SORUMLU OLMAYACAKTIR.`,
          'HİZMETLER VEYA BU KOŞULLARLA İLGİLİ TÜM TALEPLER İÇİN TOPLAM SORUMLULUĞUMUZ, (A) TALEP ÖNCESİ ON İKİ (12) AY İÇİNDE HİZMETLER İÇİN BİZE ÖDEDİĞİNİZ TUTARLAR VEYA (B) YÜZ ABD DOLARI (100 USD) TUTARLARINDAN BÜYÜK OLANI AŞMAYACAKTIR. BAZI YARGI ALANLARI BELİRLİ SINIRLAMALARA İZİN VERMEZ; BU DURUMLARDA SORUMLULUĞUMUZ İZİN VERİLEN AZAMİ ÖLÇÜYLE SINIRLIDIR.',
        ],
      },
      {
        h: '12. Tazminat',
        paragraphs: [
          `Kullanıcı İçeriğinizden, Hizmetleri kullanımınızdan, üçüncü taraflara bağlantılarınızdan veya bu Koşulları veya yasayı ihlalinizden kaynaklanan taleplere, zararlara ve giderlere (makul avukatlık ücretleri dahil) karşı ${ENTITY}'yi savunacak ve tazmin edeceksiniz.`,
        ],
      },
      {
        h: '13. Fesih',
        paragraphs: [
          'Hizmetleri kullanmayı istediğiniz zaman bırakabilir ve ürün üzerinden veya bizimle iletişime geçerek hesap kapatma talep edebilirsiniz. İhlal, risk veya yasal nedenlerle erişimi askıya alabilir veya sonlandırabiliriz. Doğası gereği devam etmesi gereken hükümler (fikri mülkiyet, feragatnameler, sınırlamalar, tazminat ve geçerli hukuk dahil) fesihten sonra da geçerlidir.',
        ],
      },
      {
        h: '14. Geçerli hukuk ve uyuşmazlıklar',
        paragraphs: [
          `Bu Koşullar, kanunlar ihtilafı kuralları hariç, Amerika Birleşik Devletleri Delaware Eyaleti yasalarına tabidir. İkamet ettiğiniz ülkedeki zorunlu tüketici korumalarına tabi olarak, uyuşmazlıklar üzerinde Delaware'deki mahkemelerin (veya orada yetkili federal mahkemelerin) münhasır yargı yetkisi vardır; herhangi bir yargı alanında ihtiyati tedbir talep edebiliriz.`,
          'AEA/BK\'da tüketiciyseniz, zorunlu yerel korumalardan yararlanabilir ve yasa gerektirdiğinde ikamet yerinizde dava açabilirsiniz.',
        ],
      },
      {
        h: '15. Değişiklikler',
        paragraphs: [
          'Güncellenmiş tarihli revize bir sürüm yayımlayarak bu Koşulları güncelleyebiliriz. Önemli değişiklikler ürün içinde veya e-posta ile bildirilebilir. Yürürlük tarihinden sonra kullanmaya devam etmeniz, geçerli yasa aksini gerektirmedikçe kabul anlamına gelir.',
        ],
      },
      {
        h: '16. İletişim',
        paragraphs: [
          `Yasal bildirimler: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Çerezler',
    title: 'Çerez Politikası',
    subtitle:
      `Nexow, Inc.'nin ${WEB} ve Nexow uygulamasında çerezleri ve benzer teknolojileri nasıl kullandığı.`,
    meta: {
      title: 'Çerez Politikası — Nexow',
      description:
        'Nexow, Inc. Çerez Politikası: çerez türleri, amaçlar, rıza ve tercihleri yönetme.',
    },
    updated: UPDATED,
    governingNote:
      'Bu Çerez Politikasının bağlayıcı dili İngilizcedir (English). Çeviriler yalnızca kolaylık sağlamak amacıyla sunulur ve İngilizce sürümü değiştirmez.',
    sections: [
      {
        h: '1. Giriş',
        paragraphs: [
          `${ENTITY} ("Nexow", "biz") ${WEB} ve ilgili Hizmetlerde çerezler ve benzer teknolojiler (yerel depolama, pikseller, SDK'lar) kullanır. Bu Çerez Politikası ne kullandığımızı, nedenini ve bunları nasıl kontrol edebileceğinizi açıklar. Gizlilik Politikamızla birlikte okunmalıdır.`,
          `İletişim: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Çerezler nedir?',
        paragraphs: [
          'Çerezler cihazınızda saklanan küçük metin dosyalarıdır. Benzer teknolojiler bilgiyi karşılaştırılabilir şekilde saklar veya okur. "Oturum" (tarayıcı kapatıldığında silinir) veya "kalıcı" (süre dolana veya silinene kadar saklanır) olabilir ve "birinci taraf" (bizim tarafımızdan ayarlanır) veya "üçüncü taraf" (başka bir alan tarafından ayarlanır) olabilir.',
        ],
      },
      {
        h: '3. Çerezleri nasıl kullanıyoruz',
        paragraphs: [
          'Kesinlikle gerekli: güvenlik, yük dengeleme, kimlik doğrulama, rıza depolama ve temel işlevsellik için gereklidir. Geçerli yasa muafiyet sağladığında rıza gerektirmezler.',
          'Tercihler / işlevsel: dili, arayüz ayarlarını veya benzer seçimleri hatırlar.',
          'Analitik / performans: trafiği anlamamıza ve siteyi veya uygulamayı iyileştirmemize yardımcı olur (ör. toplu sayfa görüntülemeleri). Gerektiğinde (AB/BK dahil), gerekli olmayan analitik çerezlerden önce rıza isteriz.',
          'Pazarlama / reklam: şu anda pazarlama sitesinde üçüncü taraf reklam çerezlerine güvenmiyoruz. Bu değişirse, bu Politikayı günceller ve gerektiğinde rıza alırız.',
        ],
      },
      {
        h: '4. Yerel depolama ve uygulama durumu',
        paragraphs: [
          'Nexow uygulaması, çalışma alanı verilerini, tercihleri veya oturum durumunu saklamak için tarayıcı depolaması (ör. localStorage, IndexedDB) kullanabilir. Bu depolama, kullandığınız ürün özelliklerini işletmek için gereklidir ve Gizlilik Politikasında daha ayrıntılı açıklanır.',
        ],
      },
      {
        h: '5. Rıza (Avrupa ve benzer rejimler)',
        paragraphs: [
          'ePrivacy Direktifi / GDPR (veya BK eşdeğeri) gerekli olmayan çerezler için rıza gerektirdiğinde, ayarlamadan önce rıza ister ve geri çekmeleri onurlandırırız. Kesinlikle gerekli çerezler rıza banner\'larından bağımsız ayarlanabilir.',
          'Çerezleri engellemek veya silmek için tarayıcı ayarlarını değiştirebilirsiniz; gerekli çerezler engellenirse bazı özellikler düzgün çalışmayabilir.',
        ],
      },
      {
        h: '6. Amerika Birleşik Devletleri ve diğer bölgeler',
        paragraphs: [
          'ABD\'de çerez açıklamaları, eyalet gizlilik yasaları kapsamında şeffaflığı destekler (reklam çerezleri kullanıldığında CCPA/CPRA "satış"/"paylaşım" kavramları dahil). Asya-Pasifik kullanıcıları yerel yasalar kapsamında (ör. PDPA, APPI) benzer şeffaflık ve seçim haklarına sahip olabilir; geçerli hakları kullanmak için bize ulaşın.',
        ],
      },
      {
        h: '7. Çerezleri yönetme',
        paragraphs: [
          'Tarayıcı kontrolleri: çerezleri reddetmek veya silmek için tarayıcınızın yardım sayfalarını kullanın.',
          'Ürün / site kontrolleri: çerez tercih aracı sağladığımızda, gerekli olmayan kategorileri ayarlamak için kullanın.',
          `Sorular: ${EMAIL}`,
        ],
      },
      {
        h: '8. Değişiklikler',
        paragraphs: [
          'Uygulamalarımız değiştiğinde bu Çerez Politikasını güncelleyebiliriz. "Son güncelleme" tarihini kontrol edin. Önemli değişiklikler bu sayfada yansıtılır ve gerektiğinde yenilenmiş rıza ile.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Yasal',
    title: 'Yasal ve Şirket Bilgileri',
    subtitle: 'Nexow, Inc. için resmi şirket ayrıntıları ve kamuya açık yasal belgeler.',
    meta: {
      title: 'Yasal — Nexow, Inc.',
      description:
        'Nexow, Inc. yasal ve şirket bilgileri, kayıtlı adres ve Gizlilik, Koşullar, Çerezler ve Kabul Edilebilir Kullanım politikalarına bağlantılar.',
    },
    updated: UPDATED,
    governingNote:
      'Şirket bilgileri ve yasal belgeler, yasa zorunlu yerel sürüm gerektirmedikçe, bağlayıcı dil olarak İngilizce (English) sunulur.',
    sections: [
      {
        h: '1. Şirket bilgileri',
        paragraphs: [
          `Tüzel kişi: ${ENTITY}`,
          `Kayıtlı / posta adresi: ${ADDRESS}`,
          `Web sitesi: ${WEB}`,
          `Uygulama: ${APP}`,
          `Genel iletişim: ${EMAIL}`,
        ],
      },
      {
        h: '2. Kamuya açık yasal belgeler',
        paragraphs: [
          'Aşağıdaki belgeler web sitesi ve uygulama için kamuya açık yasal sözleşmelerimizi oluşturur:',
          '• Gizlilik Politikası — kişisel bilgileri nasıl işlediğimiz (GDPR/CCPA duyarlı, Asya-Pasifik notlarıyla).',
          '• Kullanım Koşulları — Hizmetlerin kullanımını düzenleyen koşullar.',
          '• Çerez Politikası — çerezler ve benzer teknolojiler.',
          '• Kabul Edilebilir Kullanım Politikası — yasaklanan ve gerekli davranış.',
          'Bağlantılar site alt bilgisinde ve /privacy, /terms, /cookies ile /acceptable-use adreslerinde mevcuttur.',
        ],
      },
      {
        h: '3. Imprint tarzı bildirim',
        paragraphs: [
          `"Yasal bildirim", "imprint" veya şirket kimlik bilgileri arayan kullanıcılar için: Hizmetler ${ENTITY} tarafından ${ADDRESS} adresinde işletilir. Çevrimiçi iletişim: ${EMAIL}. Bu sayfa, hizmet operatörünü tanımlamak için ABD, Avrupa ve diğer bölgelerdeki yaygın şeffaflık beklentilerini karşılamayı amaçlar.`,
        ],
      },
      {
        h: '4. Veri işleme',
        paragraphs: [
          'Nexow, kişisel verileri Gizlilik Politikasında açıklandığı gibi işler. GDPR Madde 28 (veya eşdeğeri) için Veri İşleme Ek Sözleşmesi (DPA) veya benzer sözleşme koşulları gerektiren müşteriler, "DPA Request" konu satırıyla e-posta göndererek talep edebilir. Standart alt işlemciler ve aktarım güvenceleri Gizlilik Politikasında açıklanır veya talep üzerine sağlanır.',
        ],
      },
      {
        h: '5. Feragatnameler',
        paragraphs: [
          'Nexow bir araç ve görselleştirme platformudur. Pazarlama sitesi ve uygulamadaki içerik (piyasa verisi örnekleri dahil) finansal, yatırım, hukuki veya vergi tavsiyesi değildir. Bağlı venue\'leri ve verileri kullanımınıza uygulanan yasalara uyumdan yalnızca siz sorumlusunuz.',
        ],
      },
      {
        h: '6. Bağlayıcı dil',
        paragraphs: [
          'Yasal belgelerimizin bağlayıcı dili İngilizcedir (English). Yerel dilde arayüz veya özetler yalnızca kolaylık sağlar ve açıkça bağlayıcı yerel sürüm yayımlamadıkça İngilizce koşulları değiştirmez.',
        ],
      },
      {
        h: '7. Yasal konular için iletişim',
        paragraphs: [
          `E-posta: ${EMAIL} (konu: "Legal")`,
          `Posta: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Kabul Edilebilir Kullanım',
    title: 'Kabul Edilebilir Kullanım Politikası',
    subtitle: 'Nexow web sitelerini ve Nexow uygulamasını sorumlu ve yasal şekilde kullanma kuralları.',
    meta: {
      title: 'Kabul Edilebilir Kullanım Politikası — Nexow',
      description:
        'Nexow, Inc. Kabul Edilebilir Kullanım Politikası: yasaklanan faaliyetler, güvenlik kuralları ve uygulama.',
    },
    updated: UPDATED,
    governingNote:
      'Bu Kabul Edilebilir Kullanım Politikasının bağlayıcı dili İngilizcedir (English). Çeviriler yalnızca kolaylık sağlamak amacıyla sunulur.',
    sections: [
      {
        h: '1. Amaç',
        paragraphs: [
          `Bu Kabul Edilebilir Kullanım Politikası ("AUP"), ${ENTITY} tarafından işletilen Hizmetleri kullanımınıza uygulanır. Kullanım Koşullarını tamamlar. İhlal askıya alma veya feshe yol açabilir.`,
        ],
      },
      {
        h: '2. Yasaklanan faaliyetler',
        paragraphs: [
          'Hizmetleri şunlar için kullanamazsınız: yasa veya üçüncü taraf haklarını ihlal etmek; kötü amaçlı yazılım, spam veya kimlik avı dağıtmak; sistemlere, hesaplara veya verilere yetkisiz erişim denemek; Hizmetlere müdahale etmek veya bozmak; altyapıyı zorlayan veya başkalarının koşullarını ihlal eden şekilde veri kazımak veya toplamak; kullanım limitlerini veya güvenlik kontrollerini atlatmak; kimliğinizi veya bağlantınızı yanlış tanıtmak; veya yetkisiz olarak yasadışı, ihlal edici veya yüksek düzeyde hassas düzenlenmiş veri yüklemek.',
          'Hizmetleri dolandırıcılık, piyasa manipülasyonu, yaptırım kaçınma veya yasadışı ticaret faaliyetini kolaylaştırmak için kullanamazsınız. Birincil amacı kötüye kullanım, aldatma veya zarar olan widget\'lar oluşturmamalı veya dağıtmamalısınız.',
        ],
      },
      {
        h: '3. Kimlik bilgileri ve bağlayıcılar',
        paragraphs: [
          'Yalnızca kullanmaya yetkili olduğunuz kimlik bilgilerini kullanın. Hesap erişimini güvensiz şekilde paylaşmayın. Bağlayıcıları en az ayrıcalıkla yapılandırın. Diğer kullanıcıların sırlarını çıkarmaya çalışmayın.',
        ],
      },
      {
        h: '4. AI ve oluşturulan çıktılar',
        paragraphs: [
          'Yasadışı, fikri mülkiyeti ihlal eden veya başkalarını ölçekli şekilde aldatmayı amaçlayan içerik (ör. koordineli otantik olmayan davranış) oluşturmak için oluşturma özelliklerini kullanmayın. Bunlara güvenmeden önce çıktıları incelemekten siz sorumlusunuz.',
        ],
      },
      {
        h: '5. Kaynakların adil kullanımı',
        paragraphs: [
          'Planların ve kredilerin kullanım limitleri vardır. Başkaları için hizmeti bozan otomatik veya kötüye kullanım tüketimi sınırlandırılabilir veya engellenebilir.',
        ],
      },
      {
        h: '6. Bildirim ve uygulama',
        paragraphs: [
          `Kötüye kullanımı ${EMAIL} adresine "Abuse" konu satırıyla bildirin. İçeriği inceleyip kaldırabilir, özellikleri askıya alabilir veya hesapları sonlandırabiliriz. Uygun olduğunda yasadışı faaliyeti yetkililere bildirebiliriz.`,
        ],
      },
      {
        h: '7. İletişim',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
