import type { SiteContent } from '../content';

export const ms = {
  nav: {
    links: [
      { label: 'Ciri-ciri', href: '/features' },
      { label: 'Komuniti', href: '/community' },
      { label: 'Penyambung', href: '/connectors' },
      { label: 'Pelan', href: '/plans' },
      { label: 'Bantuan', href: '/help' },
      { label: 'Blog', href: '/blog' },
      { label: 'Tentang', href: '/about' },
    ],
    launch: 'Lancarkan aplikasi',
    menu: 'Buka menu',
    close: 'Tutup menu',
    themeToDark: 'Tukar ke mod gelap',
    themeToLight: 'Tukar ke mod cerah',
  },
  footer: {
    tagline: 'Terangkan widget. Nexow membinanya, menghubungkannya dengan data pasaran langsung, dan meletakkannya di kanvas anda.',
    columns: [
      {
        title: 'Produk',
        links: [
          { label: 'Ciri-ciri', href: '/features' },
          { label: 'Komuniti', href: '/community' },
          { label: 'Penyambung', href: '/connectors' },
          { label: 'Pelan', href: '/plans' },
          { label: 'Bantuan', href: '/help' },
          { label: 'Untuk pedagang', href: '/for/traders' },
          { label: 'Untuk pengasas', href: '/for/founders' },
          { label: 'Untuk pembina', href: '/for/builders' },
        ],
      },
      {
        title: 'Syarikat',
        links: [
          { label: 'Tentang', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Log perubahan', href: '/changelog' },
          { label: 'Keselamatan', href: '/security' },
          { label: 'Hubungi kami', href: '/contact' },
          { label: 'Jemput', href: '/invite' },
          { label: 'Undang-undang', href: '/legal' },
        ],
      },
      {
        title: 'Undang-undang',
        links: [
          { label: 'Privasi', href: '/privacy' },
          { label: 'Syarat penggunaan', href: '/terms' },
          { label: 'Kuki', href: '/cookies' },
          { label: 'Penggunaan diterima', href: '/acceptable-use' },
          { label: 'Buka apl', href: 'https://x.nexow.ai' },
        ],
      },
    ],
    rights: 'Semua hak terpelihara.',
    disclaimer:
      'Nexow adalah platform alatan dan visualisasi. Tiada di sini adalah nasihat kewangan. Pasaran membawa risiko; berdagang dengan bertanggungjawab.',
    newsletter: {
      eyebrow: 'Surat berita',
      title: 'Kekal dimaklumkan',
      subtitle: 'Kemas kini produk, tip kanvas dan nota keluaran — sekali-sekala, tiada spam.',
      placeholder: 'anda@email.com',
      submit: 'Langgan',
      submitting: 'Melanggan…',
      success: 'Anda telah berjaya. Terima kasih kerana melanggan.',
      error: 'Sesuatu tidak kena. Sila cuba lagi.',
      invalid: 'Masukkan alamat e-mel yang sah.',
    },
  },
  home: {
    meta: {
      title: 'Nexow — Bina papan pemuka pasaran dengan AI, dalam bahasa biasa',
      description:
        'Nexow adalah ruang kerja asli AI untuk pasaran. Terangkan widget dalam bahasa Inggeris biasa dan Nexow membinanya, menghubungkannya dengan data langsung daripada 90 penyambung, dan menambah bot awan, ejen AI, komuniti pembuat dan ganjaran XP — swasta secara lalai, percuma untuk dimulai.',
    },
    hero: {
      badge: 'Pratonton kini langsung',
      titleLead: 'Terangkan.',
      titleGradient: 'Nexow membinanya.',
      titleTail: 'Dagangannya.',
      titleKicker: 'Dalam beberapa saat — bukan minggu atau bulan.',
      subtitle:
        'Ruang kerja asli AI untuk pasaran. Minta mana-mana widget dalam bahasa biasa — Nexow menulis kod, menjalankannya dengan selamat, dan mengalirkan data langsung ke kanvas bentuk bebas. Otomatkannya dengan bot awan dan ejen, kemudian pasangkannya ke komuniti pembuat.',
      ctaPrimary: 'Lancarkan aplikasi',
      ctaSecondary: 'Lihat cara kerjanya',
      note: 'Tiada pendaftaran untuk mencuba · Swasta dalam penyemak imbas anda · Atau akaun percuma dengan 10K kredit yang dikhaskan',
      promptExample: 'Tunjukkan carta batang lilin BTC-USD daripada Coinbase dengan EMA 20 & 50 dan RSI di bawah.',
      promptPlaceholder: 'Terangkan widget…',
      promptExamplesLabel: 'Atau mula dengan contoh',
      promptExamplesMore: 'Lagi contoh',
      promptExamples: [
        {
          icon: 'candlestick',
          label: 'Meja kripto',
          prompt: 'Bina meja kripto: lilin BTC-USD daripada Binance dengan EMA 20 dan 50, kedalaman buku pesanan dan panel kadar funding.',
        },
        {
          icon: 'lineChart',
          label: 'Senarai saham',
          prompt: 'Buat senarai pantau saham dengan harga langsung, perubahan harian, tarikh pendapatan dan carta setahun.',
        },
        {
          icon: 'radar',
          label: 'Peta gempa bumi',
          prompt: 'Petakan semua gempa bumi USGS melebihi magnitud 4 dalam 24 jam lalu, dengan histogram magnitud dan suapan peristiwa.',
        },
        {
          icon: 'cloudSun',
          label: 'Papan cuaca',
          prompt: 'Bina papan cuaca untuk tiga bandar: ramalan setiap jam, kebarangkalian hujan dan carta suhu seminggu.',
        },
        {
          icon: 'grid',
          label: 'Papan projek',
          prompt: 'Cipta pusat kawalan projek: papan kanban, burndown sprint, penghalang mengikut pemilik dan garis masa.',
        },
        {
          icon: 'flame',
          label: 'Penjejak tabiat',
          prompt: 'Buat penjejak rentetan untuk enam tabiat harian dengan peta haba bulanan dan skor mingguan.',
        },
        {
          icon: 'newspaper',
          label: 'Meja berita',
          prompt: 'Buat meja berita dengan berita utama dari Reuters, The Guardian dan Hacker News, ditapis mengikut kata kunci.',
        },
        {
          icon: 'rocket',
          label: 'HQ pengasas',
          prompt: 'Bina papan pemuka pengasas: saluran prospek, carta MRR, senarai semak pelancaran dan kalendar kandungan.',
        },
        {
          icon: 'activity',
          label: 'Kualiti udara',
          prompt: 'Tunjukkan kualiti udara bandar saya daripada OpenAQ dengan tolok PM2.5, trend 7 hari dan jalur kesihatan.',
        },
        {
          icon: 'earth',
          label: 'Penunjuk dunia',
          prompt: 'Bandingkan KDNK per kapita, inflasi dan populasi lima negara menggunakan penunjuk Bank Dunia.',
        },
        {
          icon: 'target',
          label: 'Pasaran ramalan',
          prompt: 'Tunjukkan odds Polymarket dan Kalshi bersebelahan dengan garis masa kebarangkalian dan jadual pergerakan terbesar.',
        },
        {
          icon: 'wallet',
          label: 'Penjejak wallet',
          prompt: 'Jejak wallet saya: baki token, prestasi 30 hari dan carta pai agihan mengikut aset.',
        },
        {
          icon: 'play',
          label: 'Permainan mini',
          prompt: 'Bina permainan memori kecil dengan pengira langkah, pemasa dan rekod skor terbaik.',
        },
        {
          icon: 'music',
          label: 'Statistik lagu',
          prompt: 'Buat papan pemuka pendengaran daripada Spotify: artis teratas, carta pai genre dan mainan setiap minggu.',
        },
        {
          icon: 'databaseZap',
          label: 'Pangkalan data saya',
          prompt: 'Sambungkan Postgres saya dan cartakan pendaftaran harian, churn dan hasil mengikut pelan, dengan baris KPI di atas.',
        },
        {
          icon: 'heart',
          label: 'Log latihan',
          prompt: 'Tunjukkan larian Strava saya bulan ini dengan trend pace, jumlah mingguan dan jadual rekod peribadi.',
        },
      ],
    },
    ticker: { label: 'Penyambung langsung' },
    trust: 'Satu kanvas untuk setiap pasaran — FX, kripto, ekuiti, niaga hadapan, opsyen & pasaran ramalan.',
    stats: [
      { n: 90, label: 'penyambung langsung untuk data, dompet, sosial dan pasaran' },
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
      eyebrow: 'Aplikasi',
      title: 'Setiap permukaan Nexow',
      subtitle:
        'Widget pada kanvas bentuk bebas, penyambung langsung, bot dan ejen awan, komuniti pembuat dengan sembang masa nyata, pasaran, tema, serta toolbar dan Dock yang tidak menghalang.',
      items: [
        {
          icon: 'sparkles',
          title: 'Widget',
          body: 'Terangkan widget dalam perkataan biasa. Nexow menjana antara muka dan logik, menjalankannya dalam sandbok, dan membolehkan anda memperhalusinya melalui perbualan.',
        },
        {
          icon: 'layers',
          title: 'Kanvas & ruang kerja',
          body: 'Seret, ubah saiz dan susun widget merentasi ruang kerja dan skrin. Kelompokkan, pautkan datanya dengan Links, dan tukar susunan serta-merta.',
        },
        {
          icon: 'plug',
          title: 'Penyambung',
          body: 'Pasang widget ke pasaran, pangkalan data, dompet dan apl sosial — atau kekalkan keadaan tempatan sehingga anda perlukan data langsung.',
        },
        {
          icon: 'bot',
          title: 'Bot',
          body: 'Automasi awan yang memantau data anda dan menghantar isyarat kembali ke widget — walaupun tab anda ditutup.',
        },
        {
          icon: 'cpu',
          title: 'Ejen',
          body: 'Rakan sepasukan AI dengan model, memori, kemahiran, alatan, pengetahuan dan pencetus — bina, sebar dan semak larian di awan.',
        },
        {
          icon: 'chat',
          title: 'Copilot',
          body: 'Pembantu AI untuk seluruh ruang kerja: bina widget, susun kanvas dan tanya apa yang perlu diubah seterusnya.',
        },
        {
          icon: 'users',
          title: 'Komuniti',
          body: 'Ikuti pembuat, siarkan ke suapan, kongsi widget ke perpustakaan dan tuntut @handle awam.',
        },
        {
          icon: 'store',
          title: 'Pasaran',
          body: 'Terbitkan dan pasang widget, tema, skrin, bot dan ejen — dengan salasilah yang memberi kredit kepada setiap buatan semula.',
        },
        {
          icon: 'mail',
          title: 'Sembang masa nyata',
          body: 'Mesej rakan dan kenalan secara langsung — DM 1:1 dan kumpulan dengan kehadiran, reaksi dan peti masuk pada Dock.',
        },
        {
          icon: 'vault',
          title: 'Akaun',
          body: 'Akaun percuma dengan kredit, reputasi, penggunaan, pelan, notis, App Lock dan pertukaran berbilang akaun.',
        },
        {
          icon: 'moon',
          title: 'Tema & tetapan',
          body: 'Tema seluruh Chrome — warna, fon, ketumpatan, corak — serta pintasan, keselamatan dan keutamaan pemasangan.',
        },
        {
          icon: 'grid',
          title: 'Toolbar & Dock',
          body: 'Toolbar header boleh konfigur untuk tindakan kanvas, dan Dock kaca untuk Copilot, panel, pemberitahuan dan mesej.',
        },
      ],
      map: {
        hint: 'Pilih nod untuk meneroka permukaan — kemudian buka app atau baca lanjut.',
        moreLabel: 'Lagi info',
        openLabel: 'Buka dalam app',
        closeLabel: 'Tutup',
      },
      groups: [
        {
          title: 'Bina',
          items: [
          {
            icon: 'sparkles',
            title: 'Widget',
            body: 'Terangkan widget dalam perkataan biasa. Nexow menjana antara muka dan logik, menjalankannya dalam sandbok, dan membolehkan anda memperhalusinya melalui perbualan.',
          },
          {
            icon: 'layers',
            title: 'Kanvas & ruang kerja',
            body: 'Seret, ubah saiz dan susun widget merentasi ruang kerja dan skrin. Kelompokkan, pautkan datanya dengan Links, dan tukar susunan serta-merta.',
          },
          {
            icon: 'library',
            title: 'Perpustakaan widget',
            body: 'Simpan mana-mana widget ke perpustakaan anda dan letakkannya ke papan pemuka lain dalam satu klik — versi dan log kekal bersama.',
          },
        ],
        },
        {
          title: 'Automasi',
          items: [
          {
            icon: 'bot',
            title: 'Bot',
            body: 'Automasi awan yang memantau data anda dan menghantar isyarat kembali ke widget — walaupun tab anda ditutup.',
          },
          {
            icon: 'cpu',
            title: 'Ejen',
            body: 'Rakan sepasukan AI dengan model, memori, kemahiran, alatan, pengetahuan dan pencetus — bina, sebar dan semak larian di awan.',
          },
          {
            icon: 'chat',
            title: 'Copilot',
            body: 'Pembantu AI untuk seluruh ruang kerja: bina widget, susun kanvas dan tanya apa yang perlu diubah seterusnya.',
          },
        ],
        },
        {
          title: 'Sambung & kongsi',
          items: [
          {
            icon: 'plug',
            title: 'Penyambung',
            body: '90 penyambung langsung merentasi pasaran, pangkalan data, dompet dan apl sosial — terus dari pelayar di mana CORS membenarkan.',
          },
          {
            icon: 'globe',
            title: 'Apl media sosial',
            body: 'Tarik suapan langsung dan isyarat daripada X, YouTube, Discord, Telegram, Reddit, Bluesky, Mastodon dan banyak lagi ke widget anda.',
          },
          {
            icon: 'users',
            title: 'Komuniti',
            body: 'Ikuti pembuat, siarkan ke suapan, kongsi widget ke perpustakaan dan tuntut @handle awam.',
          },
          {
            icon: 'store',
            title: 'Pasaran',
            body: 'Terbitkan dan pasang widget, tema, skrin, bot dan ejen — dengan salasilah yang memberi kredit kepada setiap buatan semula.',
          },
          {
            icon: 'mail',
            title: 'Sembang masa nyata',
            body: 'Mesej rakan dan kenalan secara langsung — DM 1:1 dan kumpulan dengan kehadiran, reaksi dan peti masuk pada Dock.',
          },
        ],
        },
        {
          title: 'Chrome & akaun',
          items: [
          {
            icon: 'vault',
            title: 'Akaun',
            body: 'Akaun percuma dengan kredit, reputasi, penggunaan, pelan, notis, App Lock dan pertukaran berbilang akaun.',
          },
          {
            icon: 'moon',
            title: 'Tema & tetapan',
            body: 'Tema seluruh Chrome — warna, fon, ketumpatan, corak — serta pintasan, keselamatan dan keutamaan pemasangan.',
          },
          {
            icon: 'sliders',
            title: 'Toolbar',
            body: 'Tambah widget, auto-susun, tangkapan skrin, undo/redo, kunci, mod warna, kredit dan segerak — tunjuk atau sembunyikan setiap tindakan.',
          },
          {
            icon: 'grid',
            title: 'Dock',
            body: 'Pil kaca boleh seret untuk Copilot, pintasan panel, pemberitahuan dan mesej — auto sembunyi menjadi puck apabila melahu.',
          },
        ],
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
      note: '{live} penyambung aktif hari ini dan {total} ada dalam katalog: tempat dagangan, API data pasaran, pangkalan data, sumber sosial, dompet kripto dan perkhidmatan web.',
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
        { status: 'shipped', title: '90 penyambung data pasaran', body: 'Pangkalan data, sosial, broker, pertukaran, dompet, data terbuka dan perkhidmatan web mengalir secara langsung.' },
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
      eyebrow: "Soalan Lazim",
      title: "Soalan sebelum bermula",
      subtitle: "Jawapan terus tentang apa itu Nexow, cara ia berfungsi, dan berapa kosnya.",
      items: [
        {
          q: "Apakah Nexow?",
          a: "Nexow ialah kanvas widget. Huraikan keperluan anda dalam bahasa biasa dan ia menjana widget yang berfungsi — moodboard, perancang, permainan, alat sosial, pangkalan data, papan pasaran atau aliran kerja tersuai — yang boleh anda susun, edit melalui perbualan, dan guna semula merentas ruang kerja.",
        },
        {
          q: "Perlukah saya tahu mengekod?",
          a: "Tidak. Bahasa semula jadi cukup untuk menjana dan memperhalusi widget. Jika anda membaca kod, sumber, versi dan log setiap widget tersedia untuk diperiksa, digulung balik atau dilaras.",
        },
        {
          q: "Perlukah akaun?",
          a: "Anda boleh mencuba Nexow tanpa akaun. Akaun percuma membuka kredit AI permulaan, sync awan merentas peranti, komuniti, reputasi dan marketplace — tanpa kad kredit. Lebih suka sepenuhnya tempatan? Bawa kunci Anthropic anda sendiri dan kekalkan penjanaan dalam pelayar.",
        },
        {
          q: "Bagaimana Nexow mengendalikan privasi?",
          a: "Widget yang dijana berjalan dalam runtime kotak pasir, kelayakan penyambung terhad kepada perkhidmatan yang anda sambungkan, dan versi serta log kekal dengan ruang kerja anda. Sync awan direka supaya widget anda kekal mudah alih dan di bawah kawalan anda.",
        },
        {
          q: "Adakah Nexow hanya untuk trading?",
          a: "Tidak. Papan pemuka trading ialah ujian tekanan awal untuk widget langsung, tetapi platform ini tujuan umum: penjejak tabiat, papan projek, suapan penyelidikan, alat dalaman dan aliran kerja tersuai semuanya berjalan pada kanvas yang sama.",
        },
        {
          q: "Apakah penyambung?",
          a: "Penyambung menyambungkan widget kepada data langsung — 90 hari ini merentas pangkalan data, dompet, apl sosial, broker, bursa dan data terbuka. Di mana CORS membenarkan, panggilan boleh berjalan terus dari pelayar. Banyak widget tidak memerlukan penyambung dan menyimpan keadaan secara tempatan sehingga anda sync.",
        },
        {
          q: "Apakah bot dan ejen?",
          a: "Bot ialah pemerhati awan: mereka menyemak sumber mengikut jadual dan menghantar isyarat atau amaran apabila syarat benar — walaupun tab ditutup. Ejen ialah pekerja AI dengan harness penuh (model, memori, kemahiran, alatan, pengetahuan, pencetus) yang menaakul dalam gelung alatan dan bertindak. Copilot membantu anda bina dan susun ruang kerja itu sendiri.",
        },
        {
          q: "Berapa kosnya?",
          a: "Free merangkumi kanvas widget penuh, perpustakaan, sync awan, 10 bot, 3 ejen, akses komuniti dan 10,000 kredit AI semasa daftar. Supporter dan Sponsor menambah kredit bulanan, kuota automasi lebih tinggi dan rupa premium — pembayaran akan datang tidak lama lagi. Lihat Pelan untuk perbandingan penuh.",
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
  communityPage: {
    meta: {
      title: 'Komuniti — Nexow',
      description: 'Nexow ialah ruang kerja sosial untuk pembuat: siaran interaktif, papan penyelidikan, papan pemuka langsung, pasaran USDC di Solana, dan DAO yang akan membiarkan komuniti mengemudi peta jalan.',
    },
    hero: {
      badge: 'Komuniti',
      titleLead: 'Aplikasi sosial untuk',
      titleGradient: 'pembuat yang menghantar',
      titleTail: 'kerja sebenar.',
      subtitle: 'Kongsi widget interaktif, penyelidikan dan papan pemuka. Ikuti pembuat, berbual secara masa nyata, terbitkan ke pasaran yang diselesaikan dalam USDC di Solana — dan tumbuhkan komuniti yang berganda.',
      ctaPrimary: 'Sertai komuniti',
      ctaSecondary: 'Terokai pasaran',
      chips: [
        'Suapan langsung',
        'Papan & papan pemuka',
        'USDC di Solana',
        'DAO tidak lama lagi',
      ],
    },
    social: {
      eyebrow: 'Suapan sosial',
      title: 'Siaran yang benar-benar berjalan — bukan sekadar tangkapan skrin.',
      subtitle: 'Suapan dibina untuk pembina. Kongsi widget, imej, video atau nota penyelidikan; orang lain boleh suka, komen, buat semula dan pasang apa yang anda hantar.',
      items: [
        {
          icon: 'sparkles',
          title: 'Siaran widget interaktif',
          body: 'Lampirkan widget langsung pada siaran. Penonton pratontonnya dalam suapan, kemudian tambah terus ke pustaka — dengan keturunan yang mengkredit kerja anda.',
        },
        {
          icon: 'chat',
          title: 'Suka, komen & sebutan',
          body: 'Balasan berbenang, reaksi dan peti masuk sebutan supaya perbualan kekal pada siaran — bukan berselerak dalam DM.',
        },
        {
          icon: 'mail',
          title: 'Sembang masa nyata',
          body: 'DM 1:1 dan kumpulan dengan kehadiran dan reaksi, dari Akaun atau dok — rakan dan kenalan satu klik sahaja.',
        },
        {
          icon: 'users',
          title: 'Profil pembuat awam',
          body: 'Tuntut @handle anda, pin siaran, tunjukkan papan dan biarkan orang mengikuti kerja yang anda terbitkan.',
        },
      ],
    },
    research: {
      eyebrow: 'Penyelidikan & papan pemuka',
      title: 'Kumpul sumber. Bina meja. Kekalkan ia langsung.',
      subtitle: 'Papan memegang jejak penyelidikan — pautan, media dan widget. Papan pemuka dan skrin menjadikannya meja kerja yang boleh dikongsi atau dibuat semula.',
      items: [
        {
          icon: 'library',
          title: 'Papan profil',
          body: 'Papan mood untuk pembuat: letak widget, muat naik media, pin siaran dari suapan, dan simpan pautan dari TikTok, YouTube, artikel dan di mana sahaja.',
        },
        {
          icon: 'link',
          title: 'Kongsi ke Nexow',
          body: 'Pasang PWA atau guna sasaran kongsi — URL mendarat pada papan dengan pratonton, sedia dibuka pada kanvas anda.',
        },
        {
          icon: 'layers',
          title: 'Papan pemuka, skrin & ruang kerja',
          body: 'Susun widget langsung pada kanvas bebas, kumpulkan ke skrin dan ruang kerja, dan tukar persediaan tanpa membina semula dari sifar.',
        },
        {
          icon: 'bolt',
          title: 'Buka papan pada kanvas',
          body: 'Tukar pautan tersimpan kepada benaman langsung pada papan pemuka dalam satu tindakan — penyelidikan kekal bersambung dengan alatan yang menggunakannya.',
        },
      ],
    },
    grow: {
      eyebrow: 'Tumbuhkan rangkaian',
      title: 'Reputasi yang mengikuti kerja yang anda kongsi.',
      subtitle: 'Membina, menghantar dan membantu orang lain mendapat mata, pingat dan tahap pada profil awam anda — permukaan reputasi yang sama merentasi Free dan pelan berbayar.',
      items: [
        {
          icon: 'trophy',
          title: 'Mata, pingat & tahap',
          body: 'Peroleh reputasi untuk widget, bot, kongsi dan aktiviti sosial. Buka pencapaian berperingkat dan pingat jarang yang ditunjukkan pada profil anda.',
        },
        {
          icon: 'signal',
          title: 'Temui & ikut',
          body: 'Layari suapan Discover, tapis mengikut widget, imej atau video, cari orang dan siaran, dan ikut pembuat yang kerja mereka anda mahu dalam strim anda.',
        },
        {
          icon: 'award',
          title: 'Kenalan yang berganda',
          body: 'Ikutan bersama menjadi kenalan. Sembang kumpulan, sebutan dan rangkaian dikongsi menjadikan kerjasama seperti produk — bukan saluran sampingan.',
        },
        {
          icon: 'globe',
          title: 'Satu akaun percuma membukanya',
          body: 'Segerak awan, kredit permulaan, suapan, pasaran dan lapisan reputasi datang dengan akaun percuma. Tiada kad diperlukan untuk bermula.',
        },
      ],
    },
    referrals: {
      eyebrow: 'Rujukan',
      badge: 'Tidak lama lagi',
      title: 'Kembangkan rangkaian. Dapatkan ganjaran bila ia berkompaun.',
      subtitle: 'Jemput pembuat yang menghantar hasil — dan dapat ganjaran bila pengikut baharu masuk orbit anda.',
      body: 'Ganjaran rujukan dan bonus pengikut ialah langkah seterusnya pada landasan komuniti. Tuntut @handle sekarang supaya anda bersedia bila lejar live.',
      pillars: [
        {
          icon: 'gift',
          title: 'Dapat ganjaran dari rujukan',
          body: 'Kongsi jemputan anda. Bila seseorang yang anda bawa bina, hantar atau naik taraf, anda dapat bahagian upside.',
        },
        {
          icon: 'users',
          title: 'Dapat ganjaran dari pengikut baharu',
          body: 'Tarik audiens dan diganjarkan apabila rangkaian anda berkembang — reputasi yang membayar dua arah.',
        },
        {
          icon: 'sparkles',
          title: 'Kredit & kemudian NXW',
          body: 'Ganjaran awal datang sebagai kredit; bonus terikat NXW dibuka dengan DAO. Reputasi sama, cara baharu untuk menjana.',
        },
      ],
      cta: 'Tuntut @handle anda',
    },
    marketplace: {
      eyebrow: 'Pasaran',
      title: 'Terbitkan sekali. Jual dalam USDC. Kekalkan keturunan.',
      subtitle: 'Satu dialog kongsi meliputi widget, skrin, ruang kerja, bot, ejen dan tema — percuma dipasang, atau berharga dalam USDC dan diselesaikan di Solana.',
      intro: 'Nexow tidak pernah menjaga wang. Jualan ialah pemindahan token SPL terus dari dompet pembeli kepada anda. Platform mengesahkan rantaian, membuka aset, dan hanya menyimpan perakaunan yang kedua-dua pihak perlukan untuk mempercayai hasilnya.',
      pillars: [
        {
          icon: 'store',
          title: 'Satu dialog, enam jenis',
          body: 'Kongsi dari Pustaka, Bot, Ejen atau Tema. Pilih percuma atau harga USDC, tambah penerangan dan tag, dan pilihan umumkan ke suapan komuniti.',
        },
        {
          icon: 'history',
          title: 'Keturunan pada setiap remake',
          body: 'Jika anda menerbitkan remake, dialog menamakan kerja siapa ia berasal sebelum apa-apa dihantar. Kredit bukan sesuatu yang anda temui kemudian.',
        },
        {
          icon: 'shield',
          title: 'Tiada escrow, tiada potongan platform',
          body: 'Phantom menandatangani pemindahan USDC. Nexow tidak memegang dana dan tidak mengambil potongan — hanya mengesahkan resit on-chain sebelum membuka pemasangan.',
        },
        {
          icon: 'check',
          title: 'Kemas kini kekal dengan pembeli',
          body: 'Membeli mana-mana versi memberi anda hak kepada versi kemudian daripada pengarang yang sama. Remake orang lain ialah produk berasingan dengan harganya sendiri.',
        },
      ],
      railTitle: 'Bagaimana pembelian USDC berfungsi',
      railBody: 'Harga disebut dalam USDC di Solana. Pelayan mencipta pesanan; dompet anda membayar; rantaian mesti bersetuju sebelum aset dibuka.',
      railSteps: [
        {
          n: '01',
          title: 'Cipta pesanan',
          body: 'Checkout bertanya kepada pelayan untuk harga dan dompet penjual — klien tidak pernah mencipta jumlah.',
        },
        {
          n: '02',
          title: 'Bayar dengan Phantom',
          body: 'Dompet anda menandatangani pemindahan USDC dengan id pesanan dalam memo dan menyiarkannya di Solana.',
        },
        {
          n: '03',
          title: 'Sahkan on-chain',
          body: 'Nexow membaca semula transaksi: disahkan, memo sepadan, baki USDC penjual naik sekurang-kurangnya jumlah disebut, mint betul.',
        },
        {
          n: '04',
          title: 'Pasang apa yang anda beli',
          body: 'Hak dibuka. Pasang widget, tema, bot atau ejen — pratonton berbayar kekal dikunci sehingga penyelesaian.',
        },
      ],
      railNotes: [
        'Resit disimpan secara setempat sebaik sahaja dompet mengembalikan tandatangan — jika tab ditutup semasa pengesahan, «Selesaikan pembelian» menyambung tanpa membayar dua kali.',
        'Bot yang dipasang tiba dijeda; ejen tidak dilancarkan; tema tidak pernah digunakan secara automatik. Larian pertama sentiasa pilihan anda.',
        'Bahagian peribadi tidak bergerak: arahan, sejarah sembang, id sambungan, alamat dompet dan memori ejen kekal dengan pengarang.',
      ],
      kindsTitle: 'Apa yang boleh anda terbitkan',
      kinds: [
        {
          label: 'Widget',
          body: 'Kod versi aktif — bersandbox dan boleh dibuat semula.',
        },
        {
          label: 'Skrin & ruang kerja',
          body: 'Geometri, kod widget dan pautan sebagai meja boleh alih.',
        },
        {
          label: 'Bot',
          body: 'Pemproses, parameter dan jadual — tiba dijeda untuk pembeli.',
        },
        {
          label: 'Ejen',
          body: 'Model, kemahiran, geran alat dan rentak — tidak dilancarkan sehingga mereka sambungkan milik mereka.',
        },
        {
          label: 'Tema',
          body: 'Warna, fon, jejari dan ketumpatan — ditambah ke pustaka, tidak pernah dipaksa.',
        },
      ],
    },
    dao: {
      eyebrow: 'Tadbir urus',
      badge: 'Tidak lama lagi',
      title: 'Miliki peta jalan dengan Nexow DAO.',
      subtitle: 'NXW ialah token tadbir urus. Perolehnya dengan membina dan menghantar; belanjakannya dengan mencadang, mengundi dan mengemudi perbendaharaan bersama.',
      body: 'Tab DAO sudah ada dalam panel komuniti sebagai teaser — undian sebenar, perbendaharaan dan ganjaran pencipta datang seterusnya. Sementara itu reputasi dan pingat sudah langsung supaya pembuat awal bermula di hadapan.',
      pillars: [
        {
          icon: 'lightbulb',
          title: 'Cadang',
          body: 'Cadangkan ciri, penyambung dan peraturan. Sesiapa yang memegang NXW boleh meletakkan idea pada undian.',
        },
        {
          icon: 'vote',
          title: 'Undi',
          body: 'Undian awam dan telus memutuskan apa yang dibina seterusnya dan dalam urutan apa.',
        },
        {
          icon: 'vault',
          title: 'Perbendaharaan',
          body: 'Perbendaharaan bersama membiayai baunti dan geran yang komuniti undi.',
        },
        {
          icon: 'gift',
          title: 'Ganjaran pencipta',
          body: 'Pembina mendapat bahagian apabila DAO menghantar dan mempromosikan kerja mereka.',
        },
      ],
      previewTitle: 'Undian pertama',
      previewBadge: 'Pratonton',
      forLabel: '{pct}% menyokong',
      votesLabel: '{n} undi',
      proposals: [
        {
          title: 'Biayai program baunti widget komuniti',
          tag: 'Perbendaharaan',
          pct: 72,
          votes: 341,
        },
        {
          title: 'Kongsi hasil untuk pencipta pasaran',
          tag: 'Ganjaran',
          pct: 87,
          votes: 512,
        },
        {
          title: 'Sumber terbuka runtime widget',
          tag: 'Peta jalan',
          pct: 64,
          votes: 289,
        },
        {
          title: 'Turunkan ambang cadangan NXW kepada 1,000',
          tag: 'Tadbir urus',
          pct: 58,
          votes: 203,
        },
        {
          title: 'Potong yuran pasaran Solana kepada 2.5%',
          tag: 'Yuran',
          pct: 81,
          votes: 456,
        },
        {
          title: 'Pilih moderator papan penyelidikan',
          tag: 'Moderasi',
          pct: 69,
          votes: 318,
        },
      ],
      footer: 'Dibentuk secara terbuka dengan komuniti — butiran mendarat dahulu dalam tab DAO.',
    },
    cta: {
      title: 'Tuntut @handle anda dan hantar sesuatu.',
      subtitle: 'Akaun percuma. Suapan langsung. Pasaran dengan USDC. DAO seterusnya.',
      primary: 'Lancarkan Nexow',
      secondary: 'Lihat semua ciri',
    },
  },
  features: {
    meta: {
      title: 'Ciri — Nexow',
      description:
        'Terokai setiap permukaan Nexow: widget, kanvas, toolbar dan Dock, penyambung dan apl sosial, bot dan ejen, komuniti dan sembang masa nyata, pasaran, akaun, tema dan tetapan.',
    },
    hero: {
      badge: 'Ciri',
      title: 'Seluruh aplikasi, permukaan demi permukaan',
      subtitle:
        'Nexow ialah kanvas widget dengan produk penuh di sekelilingnya — panel sisi untuk akaun, komuniti, pasaran, perpustakaan, bot, ejen, penyambung, tema dan tetapan, serta toolbar dan Dock yang mengekalkan Chrome boleh konfigur.',
    },
    groups: [
      {
        title: 'Widget',
        body: 'Terangkan apa yang anda mahu. Nexow menjadikannya widget yang berfungsi dan boleh diperiksa.',
        items: [
          { icon: 'sparkles', title: 'Penghasilan kod bahasa biasa', body: 'Terangkan widget dan Nexow menjana sumber penuh dengan Claude — papan mood, perancang, permainan, suapan, carta, jadual dan alatan tersuai.' },
          { icon: 'wand', title: 'Perhalusi melalui perbualan', body: 'Ubah apa sahaja dengan bertanya. "Jadikan lebih hangat", "tambah kalendar streak", "jadikan permainan" — Nexow menyunting widget di tempat.' },
          { icon: 'history', title: 'Berversi & boleh diperiksa', body: 'Setiap penjanaan berversi dengan log. Undur, bandingkan, dan baca sumber tepat yang berjalan dalam setiap widget.' },
          { icon: 'shield', title: 'Runtime sandbok', body: 'Widget berjalan dalam iframe terpencil dengan sempadan ketat — kod yang dijana boleh memapar dan mengambil data, tetapi tidak boleh menyentuh ruang kerja atau widget lain.' },
          { icon: 'library', title: 'Perpustakaan boleh guna semula', body: 'Simpan mana-mana widget ke perpustakaan anda dan letakkannya ke mana-mana papan pemuka dalam satu klik — versi dan log kekal bersama.' },
        ],
      },
      {
        title: 'Ruang kerja',
        body: 'Kanvas bentuk bebas dengan Chrome yang kekal boleh konfigur.',
        items: [
          { icon: 'layers', title: 'Kanvas, ruang kerja & skrin', body: 'Susun widget pada kanvas bentuk bebas bertema, kelompokkan ke ruang kerja dan skrin, dan tukar antara susunan serta-merta.' },
          { icon: 'link', title: 'Kumpulan & Links', body: 'Bundarkan widget ke kumpulan dengan susun atur mozek atau tab, dan sambungkan widget dengan Links — paip sehala atau dua hala yang menstrim data satu widget ke yang lain.' },
          { icon: 'sliders', title: 'Toolbar', body: 'Dulang boleh konfigur di bawah header: tambah widget, auto-susun, tangkapan skrin, undo/redo, kunci, mod warna, kredit dan segerak awan — tunjuk atau sembunyikan setiap tindakan.' },
          { icon: 'grid', title: 'Dock', body: 'Pil kaca boleh seret untuk Copilot, pintasan panel, pemberitahuan dan mesej. Sesuaikan item yang dipaparkan, saiz semula, dan biarkan auto sembunyi menjadi puck apabila melahu.' },
          { icon: 'bolt', title: 'Interaktif secara lalai', body: 'Widget mengekalkan keadaan, bertindak balas kepada acara, melanggan data dan kemas kini secara langsung — ruang kerja anda kekal alat yang berfungsi, bukan mockup statik.' },
        ],
      },
      {
        title: 'Penyambung',
        body: 'Data langsung daripada pasaran, pangkalan data, dompet dan apl sosial.',
        items: [
          { icon: 'plug', title: '90 penyambung langsung', body: 'Pangkalan data, pasaran, dompet dan perkhidmatan web — Postgres, ClickHouse, Qdrant, OANDA, Binance, Coinbase, MetaMask, Ledger, Polygon, Kalshi dan banyak lagi.' },
          { icon: 'globe', title: 'Integrasi media sosial', body: 'Sambung X, YouTube, Discord, Telegram, Reddit, Bluesky, Mastodon, Lemmy, Dev.to dan Hacker News supaya widget boleh membaca dan bertindak balas kepada suapan yang anda sudah guna.' },
          { icon: 'signal', title: 'Terus dari pelayar jika boleh', body: 'Di mana CORS membenarkan, panggilan disahkan berjalan terus dari pelayar anda dan memintas proksi kami sepenuhnya.' },
          { icon: 'database', title: 'Keadaan tempatan juga', body: 'Ramai widget tidak perlukan data luaran langsung: permainan, perancang, papan mood dan penjejak peribadi boleh hidup dalam pelayar sehingga anda pilih untuk segerak.' },
        ],
      },
      {
        title: 'Automasi',
        body: 'Bot, ejen dan Copilot yang terus bekerja apabila tab anda ditutup.',
        items: [
          { icon: 'bot', title: 'Bot', body: 'Automasi awan yang memantau data anda dan menghantar isyarat ke widget. Terangkan amaran dalam perkataan biasa atau sambungkannya secara visual — peringatan streak, ringkasan, kemas kini sosial, ambang atau pergerakan pasaran.' },
          { icon: 'cpu', title: 'Ejen', body: 'Ejen AI dengan tali kendali sebenar — model, memori, kemahiran, alatan, pengetahuan dan pencetus. Bina secara visual, sebar ke awan dengan kebenaran alatan, dan semak sejarah larian langsung.' },
          { icon: 'chat', title: 'Copilot', body: 'Pembantu AI untuk seluruh ruang kerja anda. Sembang dalam tab selari, biarkannya membina widget di latar belakang, susun kanvas anda, dan tanya apa yang perlu diubah seterusnya.' },
        ],
      },
      {
        title: 'Rangkaian',
        body: 'Komuniti, pasaran dan sembang masa nyata dengan rakan dan kenalan.',
        items: [
          { icon: 'users', title: 'Komuniti', body: 'Ikuti pembuat, suka dan ulas dalam suapan sosial untuk pembina, terokai papan, dan kongsi widget yang boleh ditambah orang lain terus ke perpustakaan — dengan profil pembuat awam.' },
          { icon: 'mail', title: 'Sembang masa nyata', body: 'Mesej rakan dan kenalan secara langsung dari Akaun atau Dock — DM 1:1 dan kumpulan dengan kehadiran, reaksi, pengikut/mengikuti dan peti masuk kenalan.' },
          { icon: 'store', title: 'Pasaran', body: 'Terbitkan dan pasang widget, tema, skrin, bot dan ejen — dengan salasilah yang memberi kredit kepada setiap buatan semula. Membeli dan menjual datang seterusnya.' },
          { icon: 'trophy', title: 'Reputasi & pingat', body: 'Peroleh mata reputasi kerana membina dan berkongsi, buka pencapaian berperingkat dan pingat jarang — langsung hari ini. Kredit ganjaran datang seterusnya.' },
        ],
      },
      {
        title: 'Akaun & penampilan',
        body: 'Identiti, tema, tetapan dan segerak merentasi peranti.',
        items: [
          { icon: 'vault', title: 'Akaun', body: 'Log masuk untuk kredit, reputasi, carta penggunaan, pelan, notis, pek token, App Lock, kawalan keselamatan dan pertukaran berbilang akaun — atau kekal sepenuhnya tempatan dengan kunci anda sendiri.' },
          { icon: 'moon', title: 'Tema', body: 'Bina tema penampilan untuk warna, fon, radius, ketumpatan, kaca dan corak. Terbitkan ke pasaran atau pasang tema pembuat lain.' },
          { icon: 'sliders', title: 'Tetapan', body: 'Keutamaan umum, pintasan papan kekunci boleh suai, pilihan keselamatan, sandaran/pulihkan dan kawalan pemasangan/PWA — semuanya dalam panel Tetapan.' },
          { icon: 'sync', title: 'Segerak awan', body: 'Segerakkan ruang kerja, widget, keutamaan Dock dan toolbar, tema dan tetapan di setiap peranti — dengan peti besi bukti kelayakan disulitkan.' },
          { icon: 'lock', title: 'Sempadan ruang kerja', body: 'Widget yang dijana berjalan dalam sandbok, dengan akses penyambung terhad kepada perkhidmatan dan data yang setiap widget perlukan.' },
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
        '90 penyambung data pasaran langsung',
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
        ctaHref: '/contact?type=partnership',
        features: [
          'Infrastruktur swasta',
          'Persediaan sarung tangan putih',
          'Pembangunan tersuai kelas satu',
          'Penjenamaan & personalisasi mukhtak',
          'Sokongan khusus',
        ],
      },
    ],
    faqTitle: "Pelan & bil",
    faq: [
      {
        q: "Adakah Nexow benar-benar percuma?",
        a: "Ya. Free ialah ruang kerja penuh — skrin, widget dan penyambung tanpa had, perpustakaan boleh guna semula, sync awan, 10 bot, 3 ejen, komuniti dan reputasi, ditambah 10,000 kredit AI yang ditempah semasa daftar. Pelan berbayar menambah muat semula kredit bulanan, kuota lebih tinggi dan rupa premium — teras tidak digate.",
      },
      {
        q: "Apakah kredit?",
        a: "Kredit mengukur penggunaan AI: menjana widget, mengedit melalui perbualan, mencipta pautan dan menggunakan Copilot. Satu kredit bersamaan satu token output Sonnet kos pembekal, jadi harga tidak bergantung pada model yang dipilih — Haiku meregangkan kredit kepada kira-kira 3 token; Opus menggunakannya dalam kira-kira 0.6. Free menempah 10,000 semasa daftar; Supporter memberi 115,000 sebulan; Sponsor 800,000 — dan anda boleh beli pek bila-bila masa.",
      },
      {
        q: "Bila pelan berbayar dilancarkan?",
        a: "Supporter dan Sponsor ditakrifkan dan dipaparkan dalam apl, tetapi pembayaran berbayar akan datang tidak lama lagi. Semua orang pada Free hari ini — buat akaun untuk berada di hadapan apabila bil dibuka.",
      },
      {
        q: "Bolehkah saya bayar tahunan?",
        a: "Ya. Bil tahunan memberi anda dua bulan percuma berbanding bulanan — $99.90 setahun untuk Supporter, $699.90 untuk Sponsor. Anda boleh tukar antara bulanan dan tahunan bila-bila masa.",
      },
      {
        q: "Bagaimana reputasi dikira?",
        a: "Di pihak klien, daripada aktiviti anda sendiri — Nexow tidak ranking anda berbanding orang lain pada pelayan. Siaran dan widget 5 mata setiap satu, papan 10, bot 15, aset diterbitkan 25, pemasangan 10, pengikut 3 — ditambah bonus lencana (20 setiap peringkat, 100 jarang, 250 legenda). Tahap: Bronze, Silver pada 250, Gold pada 1,000, Platinum pada 5,000, Legend pada 20,000.",
      },
      {
        q: "Adakah lencana terikat pada pelan?",
        a: "Tidak. Semua 34 lencana, lima tahap dan lapisan komuniti penuh tersedia pada Free. Pelan membeli kapasiti dan rupa, bukan status — akaun Free boleh mencapai Legend.",
      },
      {
        q: "Bila ganjaran kredit dan token tiba?",
        a: "Lencana dan mata sudah hidup hari ini. Menukarkannya kepada kredit dan token tadbir urus NXW datang bersama Nexow DAO; undian pertama meratifikasi jadual akhir. Nombor pada halaman ini ialah cadangan yang kami komitmenkan.",
      },
    ],
  },
  connectorsPage: {
    meta: {
      title: 'Penyambung — Nexow',
      description:
        'Layari setiap penyambung Nexow — 90 langsung dan 155 dalam katalog. Broker, pertukaran, DEX, pasaran ramalan, pembekal data, pangkalan data dan suapan sosial. Cari, tapis dan sambung.',
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
    capability: { all: 'Semua', trading: 'Dagangan', readonly: 'Data sahaja' },
    filterSubcategories: 'Jenis',

    filterAssets: 'Aset',
    filterAlpha: 'Nama',
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
      fitness: 'Kecergasan',
      wallet: 'Dompet kripto',
      browser: 'Automasi penyemak imbas',
      scraping: 'Pengikisan web',
      search: 'Carian web',
      weather: 'Cuaca & udara',
      open_data: 'Data terbuka',
      knowledge: 'Pengetahuan',
      news: 'Berita',
      geo: 'Geo & pengangkutan',
      analytics: 'Analitik',
      observability: 'Kebolehcerapan',
      payments: 'Pembayaran',
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
    openDetails: 'Lihat butiran',
    comingSoon: 'Akan datang',
    comingSoonHint: 'Penyambung ini belum tersedia dalam apl.',
    tradingBadge: 'Dagangan',
    connect: 'Sambung dalam Nexow',
    visitWebsite: 'Lawati laman web',
    close: 'Tutup',
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
      title: 'Blog Nexow',
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
  waitlist: {
    eyebrow: 'Senarai menunggu pengebilan',
    title: 'Pembayaran hampir tiba',
    subtitle: 'Pengebilan Supporter dan Sponsor akan tiba tidak lama lagi. Tinggalkan e-mel anda dan kami akan memberitahu pada hari pembayaran dibuka — tiada spam.',
    placeholder: 'anda@email.com',
    submit: 'Sertai senarai menunggu',
    submitting: 'Menyertai…',
    success: 'Anda dalam senarai. Kami akan e-mel apabila pengebilan dibuka.',
    error: 'Sesuatu tidak kena. Sila cuba lagi.',
    invalid: 'Masukkan alamat e-mel yang sah.',
  },
  changelogPage: {
    meta: {
      title: 'Log perubahan — Nexow',
      description: 'Kemas kini produk Nexow terkini, ciri yang dihantar dan nota keluaran daripada blog.',
    },
    hero: {
      badge: 'Log perubahan',
      title: 'Apa yang kami hantar baru-baru ini',
      subtitle: 'Kemas kini produk daripada blog Nexow — terbaharu dahulu.',
    },
    empty: 'Belum ada kemas kini produk — lihat blog untuk panduan dan nota.',
    readMore: 'Baca kemas kini',
    viewBlog: 'Lihat semua siaran',
  },
  contactPage: {
    meta: {
      title: 'Hubungi kami — Nexow',
      description: 'Hubungi Nexow untuk sokongan, jualan atau pertanyaan perkongsian. Kami membaca setiap mesej.',
    },
    hero: {
      badge: 'Hubungi kami',
      title: 'Bercakap dengan pasukan Nexow',
      subtitle: 'Soalan sokongan, jualan untuk pasukan atau idea perkongsian — pilih satu jenis dan kami akan hantar ke peti masuk yang betul.',
    },
    form: {
      name: 'Nama',
      email: 'E-mel',
      type: 'Jenis pertanyaan',
      types: [
        {
          value: 'support',
          label: 'Sokongan',
        },
        {
          value: 'sales',
          label: 'Jualan',
        },
        {
          value: 'partnership',
          label: 'Perkongsian',
        },
        {
          value: 'other',
          label: 'Lain-lain',
        },
      ],
      message: 'Bagaimana kami boleh membantu?',
      submit: 'Hantar mesej',
      submitting: 'Membuka e-mel…',
      success: 'Klien e-mel anda sepatutnya dibuka dengan mesej sedia. Terima kasih kerana menghubungi kami.',
      error: 'Sesuatu tidak kena. Sila e-mel kami terus.',
      invalid: 'Sila isi e-mel yang sah dan mesej ringkas.',
    },
    aside: {
      title: 'Lebih suka e-mel terus?',
      body: 'Kami membalas daripada alamat di bawah. Permintaan perkongsian dan pelan Partner pergi ke partners@.',
      channels: [
        {
          label: 'Umum',
          value: 'hello@nexow.ai',
          href: 'mailto:hello@nexow.ai',
        },
        {
          label: 'Sokongan',
          value: 'support@nexow.ai',
          href: 'mailto:support@nexow.ai',
        },
        {
          label: 'Rakan kongsi',
          value: 'partners@nexow.ai',
          href: 'mailto:partners@nexow.ai',
        },
      ],
    },
  },
  invitePage: {
    meta: {
      title: 'Jemput — Nexow',
      description: 'Jemput pencipta ke Nexow. Tuntut nama pengguna anda, kongsi pautan dan berkembang bersama komuniti.',
    },
    hero: {
      badge: 'Rujukan',
      title: 'Jemput pencipta yang menghantar',
      subtitle: 'Nexow berkembang apabila pembina membawa pembina. Tuntut nama pengguna anda, kongsi jemputan dan bersedia apabila ganjaran rujukan bermula.',
    },
    body: 'Ganjaran rujukan dan bonus pengikut berada dalam pelan komuniti. Pautan jemputan anda membuka terus aplikasi supaya rakan tiba sedia menuntut nama pengguna.',
    pillars: [
      {
        icon: 'gift',
        title: 'Kongsi jemputan anda',
        body: 'Hantar pautan. Sesiapa yang masuk melaluinya tiba di komuniti dengan pendaftaran dibuka.',
      },
      {
        icon: 'users',
        title: 'Kembangkan orbit anda',
        body: 'Ikuti pencipta, kongsi widget dan bina rangkaian yang terkumpul pada reputasi yang sama.',
      },
      {
        icon: 'sparkles',
        title: 'Ganjaran akan tiba',
        body: 'Ganjaran awal tiba sebagai kredit; bonus terikat NXW dibuka bersama DAO. Lapisan permainan sama, cara baharu untuk memperoleh.',
      },
    ],
    ctaPrimary: 'Tuntut nama pengguna',
    ctaSecondary: 'Terokai komuniti',
    codeLabel: 'Kod jemputan',
    codeHint: 'Pautan ini menyertakan kod jemputan anda untuk apabila penjejakan rujukan bermula.',
  },
  helpPage: {
    meta: {
      title: 'Bantuan — Nexow',
      description: 'Bermula dengan Nexow: buka aplikasi, baca panduan, terokai ciri dan cari bantuan komuniti.',
    },
    hero: {
      badge: 'Bantuan',
      title: 'Mulakan dengan Nexow',
      subtitle: 'Laluan ringkas ke dalam produk — buka kanvas, ikut panduan, atau selami ciri dan komuniti.',
    },
    guides: [
      {
        icon: 'sparkles',
        title: 'Buka aplikasi',
        body: 'Terangkan widget dalam bahasa biasa dan letakkannya pada kanvas anda. Akaun percuma termasuk kredit permulaan.',
        href: 'https://x.nexow.ai/?signup',
        cta: 'Lancarkan Nexow',
      },
      {
        icon: 'library',
        title: 'Daripada gesaan ke widget langsung',
        body: 'Panduan tentang bagaimana penjanaan kod, sandbox dan kanvas bergabung.',
        href: '/blog/from-prompt-to-live-widget',
        cta: 'Baca panduan',
      },
      {
        icon: 'layers',
        title: 'Terokai setiap permukaan',
        body: 'Widget, penyambung, bot, ejen, komuniti, pasaran — peta produk penuh.',
        href: '/features',
        cta: 'Lihat ciri',
      },
      {
        icon: 'plug',
        title: 'Sambungkan data langsung',
        body: 'Layari 90 penyambung merentas pasaran, dompet, sosial dan pangkalan data.',
        href: '/connectors',
        cta: 'Layari penyambung',
      },
      {
        icon: 'users',
        title: 'Sertai komuniti',
        body: 'Kongsi widget, ikuti pencipta dan tuntut @nama anda.',
        href: '/community',
        cta: 'Buka komuniti',
      },
      {
        icon: 'shield',
        title: 'Keselamatan & kepercayaan',
        body: 'Bagaimana sandbox, kelayakan dan sempadan ruang kerja berfungsi.',
        href: '/security',
        cta: 'Baca keselamatan',
      },
    ],
    ctaTitle: 'Masih tersekat?',
    ctaBody: 'E-mel sokongan atau hantar borang hubungan — kami membaca setiap mesej.',
    cta: 'Hubungi kami',
  },
  securityPage: {
    meta: {
      title: 'Keselamatan & kepercayaan — Nexow',
      description: 'Bagaimana Nexow menghadkan widget, kelayakan, versi dan penyegerakan — runtime sandbox, penyambung keistimewaan minimum, pemilikan ruang kerja.',
    },
    hero: {
      badge: 'Keselamatan',
      title: 'Kepercayaan terbina dalam kanvas',
      subtitle: 'Nexow direka supaya kuasa tidak pernah bermakna akses terbuka. Kod yang dijana berjalan dalam sandbox, kelayakan kekal terhad dan sejarah ruang kerja anda kekal milik anda.',
    },
    pillars: [
      {
        icon: 'shield',
        title: 'Widget dalam sandbox',
        body: 'Setiap widget yang dijana berjalan dalam iframe terpencil dengan sempadan ketat — ia boleh memapar dan mengambil data, bukan mencapai akaun anda atau widget lain.',
      },
      {
        icon: 'lock',
        title: 'Kelayakan terhad',
        body: 'Kelayakan penyambung terhad kepada perkhidmatan yang anda sambungkan dan widget yang memerlukannya. Keistimewaan minimum secara lalai.',
      },
      {
        icon: 'history',
        title: 'Asal usul ruang kerja',
        body: 'Versi, log dan kod sumber yang dijana kekal terikat pada sejarah ruang kerja anda supaya anda boleh memeriksa, mengundur dan mengaudit apa yang berjalan.',
      },
      {
        icon: 'sync',
        title: 'Penyegerakan yang anda kawal',
        body: 'Penyegerakan awan memastikan ruang kerja tersedia merentas peranti tanpa menjadikan kanvas anda produk orang lain.',
      },
    ],
    principlesTitle: 'Apa yang kami janjikan',
    principles: [
      'Kod yang dijana tidak pernah berjalan dengan akses tanpa had ke akaun anda.',
      'Gesaan peribadi, sejarah sembang dan id sambungan kekal dengan pengarang.',
      'Pemasangan pasaran tiba dijeda atau belum digunakan — larian pertama sentiasa pilihan anda.',
      'Butiran privasi undang-undang ada dalam Dasar Privasi kami; halaman ini ialah pandangan produk.',
    ],
    ctaTitle: 'Baca butiran halus',
    ctaBody: 'Seni bina produk di sini; Dasar Privasi merangkumi butiran pemprosesan undang-undang.',
    ctaPrimary: 'Dasar Privasi',
    ctaSecondary: 'Hubungi kami',
  },
  useCasePages: {
    traders: {
      meta: {
        title: 'Nexow untuk pedagang',
        description: 'Bina meja dagangan langsung daripada satu gesaan — carta, senarai pantau, buku pesanan dan peta haba pasaran pada kanvas yang anda kawal.',
      },
      hero: {
        badge: 'Untuk pedagang',
        title: 'Meja yang membina semula apabila pasaran berubah',
        subtitle: 'Terangkan widget yang anda perlukan. Nexow menjananya, menyambung penyambung langsung dan menyusunnya pada satu kanvas — daripada candlestick ke pasaran ramalan.',
      },
      prompt: 'Bina saya meja kripto: carta candlestick, senarai pantau, kedalaman buku pesanan, peta haba dan derivatif.',
      points: [
        'Data pasaran langsung daripada API awam — Binance, BitMEX, Kalshi dan banyak lagi.',
        'Bot yang memantau keadaan dan mencetuskan amaran walaupun tab ditutup.',
        'Setiap widget dalam sandbox supaya skrip buruk tidak pernah menguasai meja anda.',
      ],
      ctaPrimary: 'Bina meja dagangan',
      ctaSecondary: 'Lihat penyambung',
    },
    founders: {
      meta: {
        title: 'Nexow untuk pengasas',
        description: 'Bina ibu pejabat pengasas daripada satu gesaan — saluran paip, senarai semak pelancaran, kalendar kandungan dan MRR pada satu kanvas.',
      },
      hero: {
        badge: 'Untuk pengasas',
        title: 'Pusat kawalan anda daripada satu ayat',
        subtitle: 'Pengasas solo tidak perlukan lima alat. Terangkan papan pemuka yang anda mahu dan Nexow membina widgetnya — saluran paip, hasil, pelan pelancaran dan nota bersama.',
      },
      prompt: 'Bina papan pemuka pengasas solo: saluran paip prospek, senarai semak pelancaran, kalendar kandungan, carta MRR dan nota pantas.',
      points: [
        'Lima widget daripada satu gesaan — disusun mengikut cara anda bekerja.',
        'Penyegerakan awan merentas peranti supaya ibu pejabat mengikut anda.',
        'Kongsi widget langsung dengan rakan pengasas tanpa mengeksport tangkapan skrin.',
      ],
      ctaPrimary: 'Bina ibu pejabat',
      ctaSecondary: 'Lihat contoh',
    },
    builders: {
      meta: {
        title: 'Nexow untuk pembina',
        description: 'Hantar widget interaktif, bot dan ejen pada kanvas bersandbox — kemudian terbitkan ke pasaran komuniti.',
      },
      hero: {
        badge: 'Untuk pembina',
        title: 'Hantar perisian pada kelajuan satu gesaan',
        subtitle: 'Nexow ialah runtime widget dengan bot, ejen, penyambung dan komuniti pencipta. Jana, perhalus melalui perbualan dan terbitkan apa yang berkesan.',
      },
      prompt: 'Cipta pusat kawalan projek: papan kanban, garis masa Gantt, KPI, risiko dan beban kerja pasukan.',
      points: [
        'Kod sumber boleh diperiksa dan berversi untuk setiap widget yang dijana.',
        'Bot dan ejen awan dengan harness penuh — model, alat, pencetus.',
        'Salasilah pasaran supaya penciptaan semula memberi kredit kepada pembina asal.',
      ],
      ctaPrimary: 'Mula membina',
      ctaSecondary: 'Sertai komuniti',
    },
  },
} as unknown as SiteContent;
