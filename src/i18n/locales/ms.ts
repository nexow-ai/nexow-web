import type { SiteContent } from '../content';

export const ms: SiteContent = {
  nav: {
    links: [
      { label: 'Ciri-ciri', href: '/features' },
      { label: 'Penyambung', href: '/connectors' },
      { label: 'Pelan', href: '/plans' },
      { label: 'Blog', href: '/blog' },
      { label: 'Tentang', href: '/about' },
    ],
    launch: 'Lancarkan aplikasi',
    menu: 'Buka menu',
    close: 'Tutup menu',
  },
  footer: {
    tagline: 'Terangkan widget. Nexow membinanya, menghubungkannya dengan data pasaran langsung, dan meletakkannya di kanvas anda.',
    columns: [
      {
        title: 'Produk',
        links: [
          { label: 'Ciri-ciri', href: '/features' },
          { label: 'Pelan', href: '/plans' },
          { label: 'Penyambung', href: '/connectors' },
          { label: 'Automasi', href: '/#automate' },
          { label: 'Komuniti', href: '/#network' },
          { label: 'Peta Jalan', href: '/#roadmap' },
        ],
      },
      {
        title: 'Syarikat',
        links: [
          { label: 'Tentang', href: '/about' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Sumber',
        links: [
          { label: 'Lancarkan aplikasi', href: 'https://x.nexow.ai' },
          { label: 'Privasi', href: '/privacy' },
        ],
      },
    ],
    rights: 'Semua hak terpelihara.',
    disclaimer:
      'Nexow adalah platform alatan dan visualisasi. Tiada di sini adalah nasihat kewangan. Pasaran membawa risiko; berdagang dengan bertanggungjawab.',
    builtWith: 'Dibina dengan Astro. Swasta secara lalai.',
  },
  home: {
    meta: {
      title: 'Nexow — Bina papan pemuka pasaran dengan AI, dalam bahasa biasa',
      description:
        'Nexow adalah ruang kerja asli AI untuk pasaran. Terangkan widget dalam bahasa Inggeris biasa dan Nexow membinanya, menghubungkannya dengan data langsung daripada 45+ penyambung, dan menambah bot awan, ejen AI, komuniti pembuat dan ganjaran XP — swasta secara lalai, percuma untuk dimulai.',
    },
    hero: {
      badge: 'Pratonton kini langsung',
      titleLead: 'Terangkan.',
      titleGradient: 'Nexow membinanya.',
      titleTail: 'Dagangannya.',
      subtitle:
        'Ruang kerja asli AI untuk pasaran. Minta mana-mana widget dalam bahasa biasa — Nexow menulis kod, menjalankannya dengan selamat, dan mengalirkan data langsung ke kanvas bentuk bebas. Otomatkannya dengan bot awan dan ejen, kemudian pasangkannya ke komuniti pembuat.',
      ctaPrimary: 'Lancarkan aplikasi',
      ctaSecondary: 'Lihat cara kerjanya',
      note: 'Tiada pendaftaran untuk mencuba · Swasta dalam penyemak imbas anda · Atau akaun percuma dengan 10K kredit yang dikhaskan',
      promptExample: 'Tunjukkan carta batang lilin BTC-USD daripada Coinbase dengan EMA 20 & 50 dan RSI di bawah.',
      promptPlaceholder: 'Terangkan widget…',
    },
    ticker: { label: 'Penyambung langsung' },
    trust: 'Satu kanvas untuk setiap pasaran — FX, kripto, ekuiti, niaga hadapan, opsyen & pasaran ramalan.',
    stats: [
      { n: 45, suffix: '+', label: 'penyambung langsung untuk data, dompet, sosial dan pasaran' },
      { n: 6, label: 'kelas aset pada satu kanvas' },
      { n: 10, suffix: 'K', label: 'kredit AI percuma yang dikhaskan semasa mendaftar' },
      { n: 30, prefix: '<', suffix: 's', label: 'daripada ayat kepada widget yang berjalan' },
    ],
    showcase: {
      eyebrow: 'Pameran',
      title: 'Satu ayat. Mana-mana widget.',
      subtitle:
        'Carta, buku pesanan, peta haba, kemungkinan — jika anda boleh menghuraikannya, Nexow boleh membinanya dan menghubungkannya dengan data langsung.',
      generatedBadge: 'dijana & langsung',
      tabs: [
        {
          label: 'Lilin + penunjuk',
          prompt: 'Carta batang lilin BTC-USD daripada Coinbase dengan EMA 20 & 50 dan RSI di bawah.',
          caption: 'Mengalir daripada Coinbase — EMA dan RSI dikira dalam widget.',
        },
        {
          label: 'Kedalaman buku pesanan',
          prompt: 'Kedalaman buku pesanan langsung untuk ETH-PERP di Deribit, tawaran vs permintaan.',
          caption: 'Tawaran dan permintaan diagregatkan dalam masa nyata daripada buku Deribit.',
        },
        {
          label: 'Peta haba korelasi',
          prompt: 'Peta haba korelasi 30 hari untuk BTC, ETH, SOL, EURUSD, emas dan SPX.',
          caption: 'Korelasi aset silang dikira semula apabila penutupan baru tiba.',
        },
        {
          label: 'Pasaran ramalan',
          prompt: 'Kemungkinan Kalshi potongan kadar Fed pada FOMC seterusnya, dengan perubahan 24j.',
          caption: 'Kebarangkalian acara dialirkan terus daripada buku pesanan Kalshi.',
        },
      ],
    },
    features: {
      eyebrow: 'Mengapa Nexow',
      title: 'Papan pemuka membina sendirinya',
      subtitle:
        'Berhenti menyambung carta dengan tangan. Terangkan apa yang anda ingin lihat dan Nexow menjana widget sebenar yang berjalan — kemudian biarkan anda menyempurnakannya dalam bahasa biasa.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widget bahasa biasa',
          body: 'Terangkan carta, jadual, peta haba atau isyarat dalam perkataan biasa. Nexow menulis sumber widget dengan Claude dan menjalankannya secara langsung — tiada penyakit boilerplate, tiada fail konfigurasi.',
        },
        {
          icon: 'shield',
          title: 'Sandbok & selamat',
          body: 'Setiap widget berjalan dalam iframe terpencil dengan sempadan ketat. Kod yang dijana dapat membuat dan mengambil data, tetapi tidak pernah menyentuh ruang kerja atau widget lain anda.',
        },
        {
          icon: 'plug',
          title: '45+ penyambung data langsung',
          body: 'Pembekal data pasaran yang boleh pasang — OANDA, Binance, Coinbase, Kraken, Polygon, Interactive Brokers, Kalshi, Polymarket dan banyak lagi — laluan data masa nyata ke widget anda.',
        },
        {
          icon: 'layers',
          title: 'Kanvas bentuk bebas',
          body: 'Seret, ubah saiz dan susun widget pada kanvas bentuk bebas dengan ruang kerja dan skrin untuk FX, kripto, penyelidikan — apa yang anda daging. Kelompokkan widget bersama dan paip data langsung di antara mereka dengan Pautan.',
        },
        {
          icon: 'lock',
          title: 'Swasta secara lalai',
          body: 'Jalankan sepenuhnya secara tempatan: tambah kunci Anthropic anda sendiri dan penghasilan kod berlaku di penyemak imbas anda. Widget, versi dan log kekal dalam IndexedDB — tidak ada yang dihantar ke pelayan kami.',
        },
        {
          icon: 'history',
          title: 'Versi & perpustakaan widget',
          body: 'Setiap suntingan adalah versi dengan log yang boleh anda periksa. Simpan widget ke perpustakaan peribadi dan gunakan semula mereka di papan pemuka dalam satu klik.',
        },
      ],
    },
    how: {
      eyebrow: 'Cara kerjanya',
      title: 'Daripada ayat kepada widget langsung dalam beberapa saat',
      subtitle: 'Tiga langkah. Tiada konfigurasi, tiada langkah binaan, tiada kod pelekat.',
      steps: [
        {
          n: '01',
          title: 'Terangkan',
          body: 'Taipkan apa yang anda inginkan dalam bahasa biasa — "carta kedalaman buku pesanan untuk ETH-PERP di Deribit".',
        },
        {
          n: '02',
          title: 'Jana',
          body: 'Nexow menulis sumber widget dengan Claude dan menjalankannya dalam iframe sandbok, disambungkan ke penyambung yang anda pilih.',
        },
        {
          n: '03',
          title: 'Sempurna & susun',
          body: 'Ubahnya dalam bahasa biasa, versinya, kemudian letakkannya pada kanvas anda di sebelah semua yang lain anda pantau.',
        },
      ],
    },
    automate: {
      eyebrow: 'Automasi',
      title: 'Letakkan ruang kerja anda pada autopilot',
      subtitle:
        'Widget menunjukkan anda pasaran. Bot, ejen dan Copilot bertindak ke atasnya — automasi awan dan AI yang terus bekerja apabila tab anda ditutup.',
      liveLabel: 'Langsung',
      soonLabel: 'Segera hadir',
      items: [
        {
          icon: 'bot',
          title: 'Bot',
          body: 'Automasi awan yang memantau data anda dan menembak isyarat dan amaran ke widget anda. Terangkan amaran dalam perkataan biasa — "beritahu saya apabila BTC jatuh 5% dalam satu jam" — atau sambungkannya secara visual dengan ambang, perubahan %, persilangan MA dan ringkasan. Bot juga boleh memantau akaun broker yang disambungkan untuk perdagangan baru.',
          status: 'live',
        },
        {
          icon: 'cpu',
          title: 'Ejen',
          body: 'Ejen AI dengan tali kendali sebenar — model, memori, kemahiran, alatan, pengetahuan dan pencetus. Berikan pekerjaan ejen dan biarkannya memantau, membuat alasan dan bertindak — bina ejen anda dalam pembina tali kendali visual dan sebarkannya ke awan, dengan kebenaran alatan, memori antara larian dan sejarah larian langsung.',
          status: 'live',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Pembantu AI untuk seluruh ruang kerja anda. Sembang dalam tab selari, biarkannya membina widget di latar belakang, menyusun kanvas anda, dan tanya — "terangkan carta ini", "ringkaskan ini", "apa yang harus saya pantau seterusnya?"',
          status: 'live',
        },
      ],
      harnessChips: ['model', 'memori', 'kemahiran', 'alatan', 'pengetahuan', 'pencetus'],
      copilotPrompts: ['Terangkan carta ini', 'Ringkaskan data ini', 'Apa yang harus saya pantau seterusnya?'],
    },
    connectors: {
      eyebrow: 'Penyambung',
      title: 'Pasang ke setiap pasaran',
      subtitle:
        'Penyambung yang boleh pasang mengalirkan harga langsung, buku pesanan dan data rujukan terus ke widget anda — merentasi FX, kripto, ekuiti, niaga hadapan, opsyen, pasaran ramalan, pangkalan data dan suapan sosial.',
      note: '45 penyambung langsung hari ini dan 83 duduk dalam katalog — tempat dagangan, API data pasaran, pangkalan data, sumber sosial, dompet kripto dan perkhidmatan web. Ramai mengalir terus daripada penyemak imbas anda; selebihnya laluan melalui proksi nipis.',
      count: 45,
      countLabel: 'penyambung langsung',
      groups: {
        fx: 'FX',
        crypto: 'Kripto',
        equities: 'Ekuiti & niaga hadapan',
        prediction: 'Pasaran ramalan',
        data: 'Data & pangkalan data',
        socials: 'Sosial',
      },
    },
    network: {
      eyebrow: 'Rangkaian',
      title: 'Bina sendiri. Atau pasang ke rangkaian.',
      subtitle:
        'Kekal sepenuhnya tempatan dan swasta, atau buat akaun percuma dan sertai dunia pembuat yang membina, berkongsi dan berdagang papan pemuka bersama anda.',
      liveLabel: 'Langsung',
      soonLabel: 'Segera hadir',
      items: [
        {
          icon: 'users',
          title: 'Komuniti',
          body: 'Temui dan ikuti pembuat, suka dan ulasan dalam suapan sosial untuk pembuat pasaran, dan kongsi widget yang boleh ditambah oleh pembuat lain terus ke perpustakaan mereka — dengan profil pembuat awam.',
          status: 'live',
        },
        {
          icon: 'store',
          title: 'Pasaran',
          body: 'Terbitkan widget, tema, skrin dan bot daripada perpustakaan anda, dan pasang apa yang dikongsi orang lain — dengan salasilah yang memberi kredit kepada setiap buatan semula. Membeli dan menjual datang seterusnya.',
          status: 'live',
        },
        {
          icon: 'signal',
          title: 'Isyarat strategi',
          body: 'Terbitkan rekod jejak yang diaudit, melanggan isyarat daripada pembuat yang anda percayai, dan menang dalam strategi yang anda jalankan.',
          status: 'soon',
        },
        {
          icon: 'trophy',
          title: 'Reputasi & pingat',
          body: 'Setiap widget, bot dan perkongsian memperoleh reputasi — mata, pencapaian berperingkat, pingat jarang dan tahap pada profil awam anda. Menukarnya menjadi kredit ganjaran datang seterusnya.',
          status: 'live',
        },
      ],
      accountBadge: 'Akaun percuma',
      accountTitle: 'Satu akaun percuma membuka kunci rangkaian',
      accountBody: 'Tiada kad kredit. Terus bina secara tempatan bila saja anda mahukan — akaun sentiasa pilihan.',
      accountPoints: [
        '10,000 kredit AI percuma dikhaskan semasa mendaftar',
        'Segerak awan merentasi peranti untuk ruang kerja & widget',
        'Komuniti, pasaran & perpustakaan widget',
        'Mata reputasi, pingat & tahap semasa anda membina dan berkongsi',
      ],
      accountCta: 'Buat akaun percuma anda',
    },
    plans: {
      eyebrow: 'Pelan',
      title: 'Mulai percuma. Berkembang apabila anda bersedia.',
      subtitle:
        'Bina percuma selamanya — secara tempatan dengan kunci anda sendiri, atau dengan 10,000 kredit yang dikhaskan pada akaun percuma. Tingkat naik untuk lebih banyak kredit, bot dan ejen.',
      cta: 'Bandingkan semua pelan',
    },
    privacy: {
      eyebrow: 'Swasta mengikut reka bentuk',
      title: 'Kunci anda. Data anda. Mesin anda.',
      body: 'Nexow berjalan sepenuhnya tempatan secara lalai. Dalam mod swasta anda menambah kunci API Anthropic anda sendiri dan penghasilan widget berlaku sepenuhnya di penyemak imbas anda — tiada yang dihantar ke pelayan kami, jadi sesi tanpa pengesahan kos kami tiada dan bocor tiada.',
      points: [
        'Penghasilan bawa kunci anda sendiri berjalan sebelah pihak klien',
        'Widget, versi & log kekal dalam penyemak imbas anda (IndexedDB)',
        'Sambungan terus ke tempat penuh menjaga bukti kelayakan di luar infrastruktur kami',
        'Tiada akaun diperlukan untuk mula membina',
      ],
      cta: 'Baca senibina mod tempatan',
    },
    roadmap: {
      eyebrow: 'Peta Jalan',
      title: 'Ini pratonton. Berikut apa yang akan datang.',
      subtitle:
        'Nexow menghantar kanvas, penghasilan, bot awan, ejen, Copilot, pasaran, akaun dan komuniti. Kanvas aplikasi yang lebih luas terus mendarat melalui bongkah binaan di bawah.',
      shipped: 'Dihantar',
      soon: 'Segera hadir',
      items: [
        { status: 'shipped', title: 'Penghasilan widget AI', body: 'Widget bahasa biasa berjalan sandbok pada kanvas.' },
        { status: 'shipped', title: '45+ penyambung data pasaran', body: 'Pangkalan data, sosial, broker, pertukaran, dompet, data terbuka dan perkhidmatan web mengalir secara langsung.' },
        { status: 'shipped', title: 'Bot & amaran awan', body: 'Automasi yang memantau data anda dan menembak isyarat ke widget anda, tab ditutup.' },
        { status: 'shipped', title: 'Akaun & segerak awan', body: 'Akaun percuma dengan ruang kerja disegerak ke setiap peranti — 10K kredit dikhaskan untuk pelancaran platform.' },
        { status: 'shipped', title: 'Suapan komuniti & profil', body: 'Ikuti pembuat, kongsi widget ke suapan, dan tuntut @handle awam anda.' },
        { status: 'shipped', title: 'Ejen & Copilot', body: 'Ejen awan dengan tali kendali lengkap, disebarkan dengan kebenaran alatan dan sejarah larian — serta Copilot yang membina dan menyusun ruang kerja anda.' },
        { status: 'shipped', title: 'Pasaran', body: 'Terbitkan dan pasang widget, tema, skrin dan bot — dengan salasilah yang memberi kredit kepada setiap buatan semula.' },
        { status: 'shipped', title: 'Reputasi & pingat', body: 'Mata, pencapaian berperingkat, pingat jarang dan tahap untuk apa yang anda bina dan kongsi.' },
        { status: 'soon', title: 'Widget premium & isyarat', body: 'Terbitkan widget premium dan isyarat strategi, biarkan orang lain melanggan, dan peroleh daripada apa yang anda jalankan.' },
        { status: 'soon', title: 'Pelan berbayar & kredit ganjaran', body: 'Pembayaran Supporter dan Sponsor, kredit platform, dan menukar reputasi menjadi kredit ganjaran.' },
      ],
    },
    faq: {
      eyebrow: 'Soalan Lazim',
      title: 'Soalan, dijawab',
      subtitle: 'Semua yang anda perlukan tahu sebelum anda melancarkan aplikasi.',
      items: [
        {
          q: 'Apa itu Nexow?',
          a: 'Nexow adalah ruang kerja asli AI untuk pasaran. Anda menerangkan widget — carta, jadual, peta haba atau isyarat — dalam bahasa biasa, dan Nexow menjana kod sumbernya, menjalankannya dalam iframe sandbok, dan mengalirkan data pasaran langsung ke kanvas bentuk bebas. Sekitarnya ia menambah bot awan, ejen AI, Copilot dan komuniti pembuat.',
        },
        {
          q: 'Adakah saya perlu tahu cara mengod?',
          a: 'Tidak. Anda menerangkan apa yang anda inginkan dalam bahasa biasa dan Nexow menulis dan menjalankan widget untuk anda. Jika anda membaca kod, sumber setiap widget dan sejarah versi tersedia untuk diperiksa dan disempurnakan.',
        },
        {
          q: 'Adakah data saya swasta? Adakah saya memerlukan akaun?',
          a: 'Tiada akaun diperlukan. Nexow berjalan sepenuhnya tempatan secara lalai: tambah kunci API Anthropic anda sendiri dan penghasilan widget berlaku di penyemak imbas anda, dengan widget, versi dan log disimpan dalam IndexedDB. Akaun percuma sentiasa pilihan — ia menambah kredit AI, segerak awan dan komuniti, tetapi anda boleh terus membina 100% tempatan.',
        },
        {
          q: 'Pasaran dan tempat apa yang disokong?',
          a: 'Nexow mempunyai 45 penyambung langsung (83 dalam katalog) merentasi FX (OANDA, LMAX, FXCM), kripto (Binance, Coinbase, Kraken, Deribit, BitMEX), ekuiti dan niaga hadapan (Interactive Brokers, Alpaca, TradeStation, Polygon, Rithmic, IQFeed), pasaran ramalan (Kalshi, Polymarket), pembekal data dan pangkalan data (Alpha Vantage, Intrinio, Trading Economics, Postgres, ClickHouse, Qdrant) dan suapan sosial (X, YouTube, Discord, Telegram, Spotify).',
        },
        {
          q: 'Apa itu bot dan ejen?',
          a: 'Bot adalah automasi awan yang memantau data anda dan menembak isyarat dan amaran ke widget anda walaupun tab anda ditutup — terangkan amaran dalam perkataan biasa atau sambungkannya secara visual dengan ambang, perubahan %, persilangan purata bergerak dan perdagangan baru dalam akaun broker yang disambungkan. Ejen adalah AI dengan tali kendali lengkap (model, memori, kemahiran, alatan, pengetahuan, pencetus) — reka bentuk anda hari ini dalam pembina tali kendali visual; penyebaran awan dan pembantu Copilot akan datang segera.',
        },
        {
          q: 'Adakah ada komuniti dan pasaran?',
          a: 'Komuniti langsung — buat akaun percuma, tuntut @handle awam anda, ikuti pembuat, pos ke suapan, dan kongsi widget yang boleh ditambah oleh orang lain terus ke perpustakaan mereka. Pasaran untuk membeli dan menjual widget dan isyarat strategi yang diaudit yang boleh anda menang akan datang seterusnya.',
        },
        {
          q: 'Apa itu XP dan ganjaran?',
          a: 'Nexow menambah lapisan gamifikasi ke akaun: membina widget, menjalankan bot dan berkongsi dengan komuniti akan menang XP dan buka lencana untuk pencapaian — dan pencapaian akan ubah menjadi kredit ganjaran yang boleh anda belanjakan semasa penggunaan AI. Ia bergulir segera; akaun awal adalah baris depan.',
        },
        {
          q: 'Berapa harganya?',
          a: 'Percuma selamanya untuk membina — secara tempatan dengan kunci anda sendiri, atau dengan 10,000 kredit AI yang dikhaskan pada akaun percuma. Pelan berbayar (Penyokong dan Penaja) menambah kredit bulanan dan had bot dan ejen yang lebih tinggi, dan Rakan adalah untuk pasukan yang memerlukan infrastruktur swasta. Pembayaran berbayar akan datang segera; lihat halaman pelan.',
        },
        {
          q: 'Model AI mana yang kuasa Nexow?',
          a: 'Nexow menjana dengan model Claude Anthropic melalui SDK Anthropic — Claude Opus 4.8 secara lalai, dengan Sonnet 4.6 dan Haiku 4.5 untuk penghasilan yang lebih cepat dan lebih murah. Dalam mod swasta anda membekalkan kunci anda sendiri, jadi anda kekal dalam kawalan penuh penggunaan dan kos.',
        },
      ],
    },
    cta: {
      title: 'Bina widget pertama anda dalam minit berikutnya',
      subtitle: 'Pratonton langsung dan percuma untuk dicuba. Tiada pendaftaran, tiada persediaan — hanya terangkan apa yang anda ingin lihat.',
      primary: 'Lancarkan Nexow',
      secondary: 'Teroka ciri-ciri',
    },
  },
  features: {
    meta: {
      title: 'Ciri-ciri — Nexow',
      description:
        'Penghasilan widget bahasa biasa, masa jalan sandbok, kanvas bentuk bebas dengan kumpulan dan pautan, 45+ penyambung data pasaran, bot dan ejen awan, komuniti pembuat dengan ganjaran XP, mod tempatan swasta dan perpustakaan widget versi. Terokai semua yang Nexow lakukan.',
    },
    hero: {
      badge: 'Ciri-ciri',
      title: 'Semua yang anda perlukan untuk membina papan pemuka pasaran dengan perkataan',
      subtitle:
        'Nexow menukar ayat menjadi widget sebenar yang berjalan dan disambungkan data — kemudian memberikan anda kanvas, penyambung, automasi awan dan rangkaian untuk membina stesen kerja sebenar.',
    },
    groups: [
      {
        title: 'Jana',
        body: 'Terangkan apa yang anda ingin lihat; Nexow menulis dan menjalankannya.',
        items: [
          { icon: 'sparkles', title: 'Penghasilan kod bahasa biasa', body: 'Terangkan widget dan Nexow menjana sumbernya yang penuh dengan Claude — carta, jadual, peta haba, buku pesanan, isyarat tersuai.' },
          { icon: 'wand', title: 'Sempurna berdasarkan perbualan', body: 'Ubah apa-apa dengan bertanya. "Tambah EMA 200", "tukar ke skala log", "warna mengikut kadar pembiayaan" — Nexow suntingan widget di tempat.' },
          { icon: 'history', title: 'Versi & dapat diperiksa', body: 'Setiap generasi adalah versi dengan log. Gulung balik, bandingkan, dan baca sumber yang tepat berjalan dalam setiap widget.' },
        ],
      },
      {
        title: 'Jalankan',
        body: 'Masa jalan selamat dan pantas untuk kod yang dijana.',
        items: [
          { icon: 'shield', title: 'Iframe sandbok', body: 'Widget melaksanakan dalam iframe terpencil dengan sempadan ketat — kod yang dijana dapat membuat dan mengambil, tetapi tidak boleh sentuh ruang kerja atau widget lain anda.' },
          { icon: 'bolt', title: 'Data langsung, mengalir', body: 'Widget melanggan harga masa nyata, buku pesanan dan data rujukan dengan latensi minimum.' },
          { icon: 'layers', title: 'Kanvas bentuk bebas & ruang kerja', body: 'Susun widget pada kanvas bentuk bebas, kelompokkan mereka ke ruang kerja dan skrin, dan tukar antara persediaan secara serta-merta.' },
          { icon: 'link', title: 'Kumpulan & Pautan', body: 'Bundel widget ke kumpulan dengan susun mozek atau susun tab, dan sambung widget bersama dengan Pautan — paip satu hala atau dua hala yang mengalirkan data satu widget ke yang lain.' },
        ],
      },
      {
        title: 'Sambung',
        body: 'Data yang boleh pasang daripada tempat yang sebenarnya anda gunakan.',
        items: [
          { icon: 'plug', title: '45+ penyambung data pasaran', body: 'Pangkalan data, suapan sosial, pasaran, dompet dan perkhidmatan web — Postgres, ClickHouse, Qdrant, X, YouTube, Discord, OANDA, Binance, Coinbase, MetaMask, Ledger, Polygon, Kalshi dan banyak lagi.' },
          { icon: 'globe', title: 'Penyemak imbas langsung di mana mungkin', body: 'Di mana CORS membenarkan, panggilan tempat yang disahkan menjalankan terus dari penyemak imbas anda dan lintasan proksi kami sepenuhnya.' },
          { icon: 'database', title: 'Pangkalan data & sosial juga', body: 'Arahkan widget ke Postgres, ClickHouse atau Qdrant, atau tarik daripada X, YouTube, Discord dan Telegram bersama pasaran langsung.' },
        ],
      },
      {
        title: 'Automasi',
        body: 'Automasi awan dan AI yang bertindak semasa anda pergi.',
        items: [
          { icon: 'bot', title: 'Bot awan', body: 'Terangkan amaran atau sambungkan secara visual — ambang, perubahan %, persilangan MA, ringkasan, atau perdagangan baru dalam akaun broker yang disambungkan. Bot berjalan pada degup jantung awan dan tolak isyarat ke widget anda, tab ditutup.' },
          { icon: 'cpu', title: 'Ejen AI', body: 'Ejen dengan tali kendali lengkap — model, memori, kemahiran, alatan, pengetahuan dan pencetus. Bina dalam pembina tali kendali visual dan sebarkan ke awan dengan kebenaran alatan dan sejarah larian langsung.' },
          { icon: 'chat', title: 'Copilot', body: 'Pembantu untuk ruang kerja anda: pasangkan tangkapan layar atau data widget dan tanya ia untuk menjelaskan, meringkaskan atau mencadangkan apa yang hendak dipantau seterusnya — dalam perbualan selari yang terus membina di latar belakang.' },
        ],
      },
      {
        title: 'Rangkaian',
        body: 'Bina bersama dunia pembuat.',
        items: [
          { icon: 'users', title: 'Komuniti', body: 'Ikuti pembuat, pos ke suapan, dan kongsi widget yang boleh ditambah oleh orang lain terus ke perpustakaan mereka — langsung hari ini, dengan profil pembuat awam.' },
          { icon: 'store', title: 'Pasaran', body: 'Terbitkan dan pasang widget, tema, skrin dan bot siap pakai — langsung hari ini, dengan salasilah yang memberi kredit kepada setiap buatan semula. Membeli dan menjual datang seterusnya.' },
          { icon: 'signal', title: 'Isyarat strategi', body: 'Terbitkan rekod jejak yang diaudit, melanggan isyarat yang anda percayai, dan menang dalam strategi yang anda jalankan. Akan datang segera.' },
          { icon: 'trophy', title: 'Reputasi & pingat', body: 'Peroleh mata reputasi untuk membina dan berkongsi, buka pencapaian berperingkat dan pingat jarang — langsung hari ini. Kredit ganjaran datang seterusnya.' },
        ],
      },
      {
        title: 'Milik',
        body: 'Swasta secara lalai, milik anda untuk disimpan.',
        items: [
          { icon: 'lock', title: 'Mod tempatan swasta', body: 'Bawa kunci Anthropic anda sendiri dan jana widget sebelah pihak klien. Tiada yang dihantar ke pelayan kami — tiada akaun diperlukan.' },
          { icon: 'sync', title: 'Segerak awan pilihan', body: 'Buat akaun percuma untuk menyegerak ruang kerja, widget dan tetapan ke setiap peranti — dengan peti kelayakan dienkripsi.' },
          { icon: 'library', title: 'Perpustakaan boleh diguna semula', body: 'Simpan mana-mana widget ke perpustakaan anda dan lepas ke mana-mana papan pemuka dalam satu klik.' },
        ],
      },
    ],
  },
  plansPage: {
    meta: {
      title: 'Pelan — Nexow',
      description:
        'Percuma selamanya untuk membina — secara tempatan dengan kunci anda sendiri, atau dengan 10,000 kredit AI yang dikhaskan pada akaun percuma. Bandingkan Percuma, Penyokong, Penaja dan Rakan untuk kredit, bot, ejen dan penyesuaian.',
    },
    hero: {
      badge: 'Pelan',
      title: 'Percuma untuk mula. Ruang untuk berkembang.',
      subtitle:
        'Bina percuma — jalankan tempatan dengan kunci anda sendiri, atau mendaftar untuk menempah 10,000 kredit AI. Tingkat naik apabila anda memerlukan lebih banyak kapasiti, automasi dan potongan.',
    },
    comingSoon:
      'Pembayaran Penyokong & Penaja akan datang segera, dan kredit platform dilancarkan bersama. Semua orang berada pada Percuma hari ini — buat akaun untuk menjadi yang pertama apabila pembilangan terbuka.',
    highlights: {
      title: 'Apa yang berskala dengan pelan anda',
      items: [
        {
          icon: 'coins',
          title: 'Kredit AI',
          body: 'Kuasa penghasilan widget, balas Copilot dan logik bot. Percuma menempah 10K untuk mula; pelan berbayar segarkan bulanan.',
        },
        {
          icon: 'bot',
          title: 'Bot & ejen',
          body: 'Bot memantau pasaran dan pencetus tindakan. Ejen menjalankan alur kerja multi-langkah. Pelan yang lebih tinggi menaikkan had serentak.',
        },
        {
          icon: 'sparkles',
          title: 'Penyesuaian',
          body: 'Warna aksen, logo dan UI premium membuka kunci semasa anda tingkat naik — buat Nexow terasa seperti milik anda.',
        },
      ],
    },
    included: {
      title: 'Termasuk dalam setiap pelan',
      items: [
        'Skrin, ruang kerja & widget tanpa had',
        '45+ penyambung data pasaran langsung',
        'Masa jalan widget sandbok',
        'Copilot global (akan datang segera)',
        'Akses komuniti & pasaran',
      ],
    },
    billing: { monthly: 'Bulanan', yearly: 'Tahunan', save: '2 bulan percuma' },
    tiers: [
      {
        name: 'Percuma',
        tagline: 'Semua yang anda perlukan untuk membina.',
        priceMonthly: '$0',
        priceYearly: '$0',
        cadence: 'selamanya',
        stats: ['10K kredit', '10 bot', '3 ejen'],
        cta: 'Mulai percuma',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '10,000 kredit AI dikhaskan semasa mendaftar',
          'Skrin, ruang kerja & widget tanpa had',
          'Sambungan penyemak imbas tanpa had',
          'Segerak awan merentasi peranti',
          'Copilot global (akan datang segera)',
          'Akses komuniti & pasaran',
        ],
      },
      {
        name: 'Penyokong',
        tagline: 'Untuk pembuat yang mahukan lebih banyak ruang.',
        priceMonthly: '$9.99',
        priceYearly: '$8.33',
        billedYearly: '$99.90 dibilkan tahunan',
        cadence: '/bln',
        badge: 'Akan datang segera',
        stats: ['50K kredit/bln', '30 bot', '10 ejen'],
        note: 'Semua dalam Percuma, tambah:',
        cta: 'Menjadi Penyokong',
        ctaHref: 'https://x.nexow.ai',
        features: [
          '50,000 kredit setiap bulan',
          'Sehingga 30 bot & 10 ejen',
          'Copilot per ruang kerja',
          'Warna aksen kedua (kecerunan)',
          'UI & pilihan penampilan eksklusif',
        ],
      },
      {
        name: 'Penaja',
        tagline: 'Untuk pengguna kuasa yang pergi pro.',
        priceMonthly: '$69.99',
        priceYearly: '$58.33',
        billedYearly: '$699.90 dibilkan tahunan',
        cadence: '/bln',
        badge: 'Pulangan terbaik',
        stats: ['800K kredit/bln', '300 bot', '100 ejen'],
        note: 'Semua dalam Penyokong, tambah:',
        cta: 'Menjadi Penaja',
        ctaHref: 'https://x.nexow.ai',
        featured: true,
        features: [
          '800,000 kredit setiap bulan',
          'Sehingga 300 bot & 100 ejen',
          'Sambungan tersuai (Pembina Penyambung)',
          'Copilot per skrin',
          'Muat naik logo anda sendiri',
          'Penyesuaian UI premium',
        ],
      },
      {
        name: 'Rakan',
        tagline: 'Untuk pasukan yang memerlukan semuanya.',
        priceMonthly: 'Tersuai',
        priceYearly: 'Tersuai',
        cadence: '',
        stats: ['Infrastruktur swasta', 'Sarung tangan putih', 'SLA'],
        note: 'Semua dalam Penaja, tambah:',
        cta: 'Hubungi kami',
        ctaHref: 'mailto:partners@nexow.ai',
        features: [
          'Infrastruktur swasta',
          'Persediaan sarung tangan putih',
          'Pembangunan tersuai kelas satu',
          'Penjenamaan & personalisasi mukhtak',
          'Sokongan khusus',
        ],
      },
    ],
    faqTitle: 'Soalan pelan',
    faq: [
      { q: 'Adakah Nexow benar-benar percuma?', a: 'Ya. Anda boleh membina percuma selamanya — jalankan sepenuhnya tempatan dengan kunci Anthropic anda sendiri (anda hanya bayar penggunaan API anda sendiri), atau buat akaun percuma yang menempah 10,000 kredit AI untuk apabila mod platform terbuka, jadi tiada kunci anda sendiri diperlukan.' },
      { q: 'Apa itu kredit?', a: 'Kredit meter penggunaan AI — menjana widget, pautan, bot dan balas Copilot. Akaun percuma menempah 10,000 untuk mula, dan pelan berbayar memberikan elaun bulanan (50K pada Penyokong, 800K pada Penaja). Metering kredit hidup dengan mod platform, dan anda boleh beli lebih banyak bila saja.' },
      { q: 'Bilakah pelan berbayar dilancarkan?', a: 'Penyokong dan Penaja ditakrifkan dan ditunjukkan dalam aplikasi, tetapi pembayaran berbayar akan datang segera. Semua orang berada pada Percuma hari ini — buat akaun untuk menjadi yang pertama apabila pembilangan terbuka.' },
      { q: 'Bolehkah saya bayar tahunan?', a: 'Ya. Pembilangan tahunan memberikan anda dua bulan percuma berbanding membayar bulanan. Anda boleh tukar antara bulanan dan tahunan pada bila-bila masa.' },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Penyambung — Nexow',
      description:
        'Layari setiap penyambung Nexow — 45 langsung dan 83 dalam katalog. Broker, pertukaran, DEX, pasaran ramalan, pembekal data, pangkalan data dan suapan sosial. Cari, tapis dan sambung.',
    },
    hero: {
      badge: 'Penyambung',
      title: 'Setiap pasaran, satu kanvas',
      subtitle:
        'Cari katalog lengkap tempat Nexow sambung — broker, pertukaran, pembekal data, pangkalan data dan sosial. Penyambung langsung bekerja hari ini; selebihnya akan datang segera.',
    },
    searchPlaceholder: 'Cari penyambung…',
    filters: 'Penapis',
    all: 'Semua',
    categories: { finance: 'Kewangan', wallets: 'Dompet', services: 'Perkhidmatan', data: 'Data', socials: 'Sosial' },
    status: { all: 'Semua', live: 'Langsung', soon: 'Segera hadir' },
    kinds: {
      broker: 'Broker',
      exchange: 'Pertukaran',
      prediction: 'Pasaran ramalan',
      dex: 'DEX',
      aggregator: 'Agregator',
      data: 'Data pasaran',
      sql: 'Pangkalan data SQL',
      nosql: 'Pangkalan data NoSQL',
      warehouse: 'Gudang data',
      vector: 'Pangkalan data vektor',
      messaging: 'Pemesejan',
      social: 'Rangkaian sosial',
      video: 'Video',
      community: 'Komuniti',
      music: 'Muzik',
      wallet: 'Dompet kripto',
      browser: 'Automasi penyemak imbas',
      scraping: 'Pengikisan web',
      search: 'Carian web',
      weather: 'Cuaca & udara',
      open_data: 'Data terbuka',
      knowledge: 'Pengetahuan',
      news: 'Berita',
      geo: 'Geo & pengangkutan',
    },
    assets: {
      equities: 'Ekuiti',
      indices: 'Indeks',
      fixed_income: 'Pendapatan tetap',
      fx: 'FX',
      commodities: 'Komoditi',
      crypto: 'Kripto',
      volatility: 'Volatiliti',
      prediction_markets: 'Ramalan',
    },
    visit: 'Lawati laman',
    results: '{n} penyambung',
    empty: 'Tiada penyambung sepadan carian anda.',
    exploreCta: 'Teroka semua penyambung',
    countLive: 'langsung',
    countCatalog: 'dalam katalog',
  },
  about: {
    meta: {
      title: 'Tentang — Nexow',
      description:
        'Nexow membina stesen kerja asli AI untuk pasaran: terangkan mana-mana widget dalam bahasa biasa dan dapatkan papan pemuka sebenar yang berjalan dan disambungkan data. Swasta secara lalai. Pelajari tentang misi kami.',
    },
    hero: {
      badge: 'Tentang',
      title: 'Stesen kerja asli AI untuk pasaran',
      subtitle:
        'Kami berpikir membina papan pemuka perdagangan harus secepatnya menghuraikannya. Nexow menukar bahasa biasa menjadi widget sebenar yang berjalan dan disambungkan data — dan membuat anda kawalan kunci dan data anda.',
    },
    missionTitle: 'Mengapa kami membina Nexow',
    mission: [
      'Setiap pedagang dan penganalisis akhirnya membina semula carta, jadual dan monitor yang sama dengan tangan — melekatkan API, melawan websocket, dan melawan susun. Alatan-alatan itu berkuasa tetapi perlahan, dan yang baik dikunci di belakang platform berat.',
      'Nexow membalikkan itu. Anda menerangkan apa yang anda ingin lihat dan AI menulis widget sebenar yang berjalan — sandbok, versi dan disambungkan ke data langsung daripada tempat yang sudah anda gunakan. Papan pemuka memasang sendirinya, dan anda menyempurnakannya dalam bahasa biasa.',
      'Kami membinanya swasta-pertama: jalankan sepenuhnya tempatan dengan kunci anda sendiri, simpan data anda di penyemak imbas anda, dan sambung terus ke tempat di mana mungkin. Apabila kami menambah ejen perdagangan, komponen pelayan dan lapisan komuniti, prinsip itu tetap diperbaiki — kunci anda, data anda, mesin anda.',
    ],
    valuesTitle: 'Apa yang kami hargai',
    values: [
      { icon: 'lock', title: 'Swasta secara lalai', body: 'Tempatan-pertama, bawa kunci anda sendiri, tiada data meninggalkan mesin anda melainkan anda pilihnya.' },
      { icon: 'bolt', title: 'Kecepatan ke wawasan', body: 'Daripada ayat kepada widget langsung dalam beberapa saat — laluan terpendek antara soalan dan carta.' },
      { icon: 'shield', title: 'Selamat mengikut reka bentuk', body: 'Kod yang dijana berjalan sandbok dengan sempadan ketat, jadi kuasa tidak pernah bermakna risiko.' },
      { icon: 'globe', title: 'Buka ke setiap pasaran', body: 'FX, kripto, ekuiti, niaga hadapan, opsyen dan pasaran ramalan — satu kanvas untuk semuanya.' },
    ],
    ctaTitle: 'Lihat sendiri',
    ctaBody: 'Pratonton langsung. Terangkan widget dan tonton Nexow membinanya.',
    cta: 'Lancarkan aplikasi',
  },
  blog: {
    meta: {
      title: 'Blog — Nexow',
      description:
        'Panduan dan penggalian mendalam tentang membina papan pemuka pasaran dengan AI, menyambung data langsung, dan alatan perdagangan — daripada pasukan di Nexow.',
    },
    title: 'Blog Nexow',
    subtitle: 'Membina alatan pasaran asli AI — panduan, penggalian mendalam dan nota produk.',
    latest: 'Terbaru',
    readMore: 'Baca artikel',
    backToBlog: 'Kembali ke blog',
    published: 'Diterbitkan',
    updated: 'Dikemas kini',
    minRead: 'min baca',
  },
  notFound: {
    title: 'Laman ini hanyut ke luar kanvas',
    body: 'Laman yang anda cari tidak wujud — tetapi papan pemuka berikutnya anda mungkin.',
    cta: 'Kembali ke rumah',
  },
  privacyPage: {
    badge: 'Privasi',
    title: 'Dasar Privasi',
    subtitle: 'Bagaimana Nexow mengendalikan data anda — versi pendek: sebaik mungkin.',
    meta: {
      title: 'Dasar Privasi — Nexow',
      description: 'Nexow swasta secara lalai. Pelajari cara kami mengendalikan data, kunci dan sambungan.',
    },
    updated: 'Terakhir dikemas kini: 1 Julai 2026',
    sections: [
      { h: 'Swasta secara lalai', p: 'Nexow berjalan sepenuhnya tempatan secara lalai. Dalam mod swasta anda membekalkan kunci API Anthropic anda sendiri dan penghasilan widget berlaku sepenuhnya di penyemak imbas anda. Rumusan dan kod yang dijana anda dihantar daripada penyemak imbas anda terus ke Anthropic — bukan melalui pelayan kami.' },
      { h: 'Apa yang kami simpan', p: 'Widget, versi, log dan perpustakaan anda disimpan di penyemak imbas anda menggunakan IndexedDB. Mereka kekal di peranti anda dan tidak dimuat naik ke Nexow. Mengosongkan penyimpanan penyemak imbas anda menghapusnya secara kekal.' },
      { h: 'Sambungan data pasaran', p: 'Di mana tempat membenarkannya, Nexow sambung terus dari penyemak imbas anda, dan bukti kelayakan tempat anda digunakan hanya untuk bercakap dengan tempat itu. Sesetengah tempat memerlukan penghalaan melalui proksi nipis; dalam kes tersebut hanya data yang diperlukan untuk memenuhi permintaan berlalu.' },
      { h: 'Laman web ini', p: 'Laman pemasaran ini adalah laman statik. Kami mengekalkan analitik minimum dan menghormati privasi, dan kami tidak menjual data peribadi. Pautan keluar (seperti aplikasi) dilabelkan dengan jelas.' },
      { h: 'Hubungi', p: 'Soalan tentang privasi? Email hello@nexow.ai.' },
    ],
  },
};
