import type { LegalBundle } from './types';
import { ADDRESS, APP, CONTACT_BLOCK, EMAIL, ENTITY, WEB } from './shared';

const UPDATED = 'Dikemas kini: 29 Julai 2026';

export const ms: LegalBundle = {
  privacyPage: {
    badge: 'Privasi',
    title: 'Dasar Privasi',
    subtitle:
      'Cara Nexow, Inc. mengumpul, menggunakan dan melindungi maklumat peribadi apabila anda menggunakan nexow.ai dan aplikasi Nexow.',
    meta: {
      title: 'Dasar Privasi — Nexow',
      description:
        'Dasar Privasi Nexow, Inc.: data yang kami kumpul, cara kami menggunakannya, kuki dan hak privasi anda di bawah GDPR, CCPA/CPRA serta undang-undang lain yang terpakai.',
    },
    updated: UPDATED,
    governingNote:
      'Bahasa yang mengikat Dasar Privasi ini ialah Bahasa Inggeris (English). Terjemahan disediakan semata-mata untuk kemudahan dan tidak mengubah versi Bahasa Inggeris.',
    sections: [
      {
        h: '1. Siapa kami',
        paragraphs: [
          `Dasar Privasi ini menerangkan cara ${ENTITY} (“Nexow”, “kami” atau “kita”) memproses maklumat peribadi berkaitan dengan laman web kami (termasuk ${WEB}), aplikasi web Nexow (${APP}) dan perkhidmatan berkaitan (secara kolektif, “Perkhidmatan”).`,
          `Pengawal / perniagaan: ${CONTACT_BLOCK}`,
          'Jika anda mempunyai soalan tentang Dasar ini atau ingin menggunakan hak privasi, hubungi kami di alamat atau e-mel di atas dengan subjek “Privacy Request”.',
        ],
      },
      {
        h: '2. Skop',
        paragraphs: [
          'Dasar ini terpakai kepada maklumat peribadi yang kami proses apabila anda melawat laman pemasaran kami, mencipta atau menggunakan akaun Nexow, membina atau berkongsi ruang kerja dan widget, menyambung perkhidmatan pihak ketiga, membeli atau mengurus pelan, atau berinteraksi dengan Perkhidmatan.',
          'Ia tidak terpakai kepada laman web, aplikasi, venue atau API pihak ketiga yang anda pilih untuk disambungkan; perkara tersebut diatur oleh terma privasi mereka sendiri. Apabila penyambung berjalan dalam pelayar anda terhadap pihak ketiga, pihak ketiga itu biasanya pengawal bebas bagi data yang anda hantar kepadanya.',
        ],
      },
      {
        h: '3. Maklumat yang kami kumpul',
        paragraphs: [
          'Data akaun dan profil: alamat e-mel, nama paparan, pengecam pengesahan, status pelan atau bil, keutamaan dan tetapan akaun yang serupa.',
          'Data ruang kerja dan produk: widget, prompt, kod atau konfigurasi yang dijana, versi, log, item perpustakaan, keadaan penyelarasan, metadata kolaborasi dan kandungan berkaitan yang anda cipta atau muat naik dalam Perkhidmatan.',
          'Data sambungan: token, kunci API atau kredensial OAuth yang anda berikan untuk penyambung pihak ketiga (dikendalikan seperti diterangkan dalam “Sambungan dan kredensial”), serta metadata teknikal yang diperlukan untuk mengekalkan sambungan tersebut.',
          'Data penggunaan dan peranti: alamat IP, jenis pelayar, maklumat peranti atau OS, lokasi anggaran daripada IP, rujukan, halaman yang dilawati, penggunaan ciri, acara prestasi dan diagnostik, serta telemetri serupa yang diperlukan untuk mengendalikan dan melindungi Perkhidmatan.',
          'Komunikasi: mesej yang anda hantar kepada kami (sokongan, privasi atau permintaan undang-undang) dan surat-menyurat berkaitan.',
          'Data pembayaran: jika anda membeli pelan berbayar, kaedah pembayaran dan butiran bil biasanya diproses oleh pemproses pembayaran kami; kami menerima metadata bil terhad (cth., pelan, status, empat digit terakhir atau token setara) dan bukan nombor kad penuh jika pemproses membenarkannya.',
          'Kuki dan teknologi serupa: lihat Dasar Kuki kami untuk butiran.',
        ],
      },
      {
        h: '4. Cara kami menggunakan maklumat',
        paragraphs: [
          'Kami menggunakan maklumat peribadi untuk: menyediakan, mengekalkan dan menambah baik Perkhidmatan; mengesahkan pengguna dan melindungi akaun; menyimpan dan menyelaraskan kandungan ruang kerja yang anda minta; memproses transaksi dan menghantar notis berkaitan perkhidmatan; menjawab permintaan sokongan dan privasi; memantau kebolehpercayaan, penyalahgunaan dan keselamatan; mematuhi undang-undang; dan, jika dibenarkan, memaklumkan kemas kini produk (anda boleh menarik diri daripada pemasaran bukan penting).',
          'Kami tidak menjual maklumat peribadi sebagaimana “jualan” biasanya ditakrifkan di bawah CCPA/CPRA, dan kami tidak berkongsi maklumat peribadi untuk pengiklanan tingkah laku merentas konteks seperti ditakrifkan di bawah undang-undang California, kecuali seperti didedahkan dalam Dasar Kuki kami jika kami memperkenalkan kuki pengiklanan (dalam hal itu kami akan mengemas kini Dasar ini dan menyediakan pilihan opt-out yang diperlukan).',
        ],
      },
      {
        h: '5. Asas undang-undang (EEA / UK / Switzerland)',
        paragraphs: [
          'Apabila GDPR EU, UK GDPR atau FADP Switzerland terpakai, kami memproses data peribadi atas satu atau lebih asas berikut: pelaksanaan kontrak (menyediakan Perkhidmatan yang anda minta); kepentingan sah (melindungi dan menambah baik Perkhidmatan, mencegah penyalahgunaan, analitik asas), diimbangi dengan hak anda; persetujuan (apabila diperlukan, cth., kuki tertentu atau pemasaran pilihan); dan kewajipan undang-undang (menyimpan rekod atau membalas permintaan sah).',
        ],
      },
      {
        h: '6. Sambungan dan kredensial',
        paragraphs: [
          'Apabila perkhidmatan pihak ketiga membenarkannya, Nexow boleh menyambung terus daripada pelayar anda supaya kredensial digunakan terutamanya untuk berkomunikasi dengan perkhidmatan tersebut. Sesetengah perkhidmatan memerlukan proksi atau komponen pelayan; dalam kes itu kami hanya memproses apa yang diperlukan untuk memenuhi permintaan dan mengendalikan penyambung.',
          'Anda bertanggungjawab memastikan anda berhak menyambung setiap perkhidmatan dan mengkonfigurasi kredensial dengan keistimewaan minimum. Batalkan akses dalam perkhidmatan pihak ketiga dan dalam Nexow apabila sambungan tidak lagi diperlukan.',
        ],
      },
      {
        h: '7. Kandungan dijana dan ciri AI',
        paragraphs: [
          'Apabila anda menggunakan ciri penjanaan atau bantuan AI, prompt dan konteks berkaitan mungkin diproses oleh kami dan/atau pembekal model atau infrastruktur yang kami gunakan untuk menyediakan ciri tersebut. Kami menggunakan pemprosesan itu untuk menjana hasil untuk ruang kerja anda dan untuk mengendalikan serta menambah baik Perkhidmatan, tertakluk kepada kontrak kami dengan pembekal tersebut.',
          'Jangan hantar rahsia, data peribadi terkawal atau data pihak ketiga sulit dalam prompt melainkan anda mempunyai asas sah dan menerima risiko bahawa kandungan sedemikian mungkin diproses oleh subpemproses yang terlibat dalam penjanaan.',
        ],
      },
      {
        h: '8. Perkongsian dan pemproses',
        paragraphs: [
          'Kami berkongsi maklumat peribadi dengan: pembekal perkhidmatan (hos, analitik, e-mel, pembayaran, pemantauan ralat, pembekal AI/model) di bawah kontrak yang mengehadkan penggunaan untuk menyediakan perkhidmatan kepada kami; penasihat profesional; pihak berkuasa apabila dikehendaki oleh undang-undang atau untuk melindungi hak dan keselamatan; dan pengganti dalam penggabungan, pengambilalihan atau pemindahan aset (dengan notis apabila diperlukan).',
          'Kami juga mungkin berkongsi maklumat yang anda pilih untuk dijadikan awam atau dikongsi dengan pengguna lain (cth., widget diterbitkan, ciri komuniti) mengikut tetapan anda.',
        ],
      },
      {
        h: '9. Pemindahan antarabangsa',
        paragraphs: [
          `${ENTITY} berpusat di Amerika Syarikat. Jika anda mengakses Perkhidmatan dari EEA, UK, Switzerland atau rantau lain, maklumat anda mungkin dipindahkan dan diproses di Amerika Syarikat dan negara lain yang mungkin mempunyai peraturan perlindungan data berbeza.`,
          'Apabila diperlukan, kami menggunakan perlindungan yang sesuai untuk pemindahan (seperti Standard Contractual Clauses atau mekanisme pengganti) dan mengambil langkah yang kami anggap munasabah untuk melindungi maklumat peribadi.',
        ],
      },
      {
        h: '10. Penyimpanan',
        paragraphs: [
          'Kami menyimpan maklumat peribadi selagi akaun anda aktif atau sebagaimana diperlukan untuk menyediakan Perkhidmatan, mematuhi kewajipan undang-undang, menyelesaikan pertikaian dan menguatkuasakan perjanjian. Kandungan ruang kerja biasanya kekal sehingga anda memadamkannya atau menutup akaun, tertakluk kepada sandaran dan tempoh pegangan undang-undang. Anda boleh meminta pemadaman seperti diterangkan di bawah; sesetengah salinan sisa mungkin kekal dalam sandaran untuk tempoh terhad.',
        ],
      },
      {
        h: '11. Keselamatan',
        paragraphs: [
          'Kami melaksanakan langkah teknikal dan organisasi yang direka untuk melindungi maklumat peribadi (kawalan akses, penyulitan semasa transit jika sesuai, amalan keistimewaan minimum). Tiada kaedah penghantaran atau penyimpanan yang benar-benar selamat; anda bertanggungjawab melindungi kredensial akaun dan peranti.',
        ],
      },
      {
        h: '12. Hak anda — Eropah dan UK (GDPR)',
        paragraphs: [
          'Jika anda berada di EEA, UK atau Switzerland, anda mungkin berhak untuk mengakses, membetulkan, memadam, mengehadkan atau membantah pemprosesan tertentu; kepada kebolehpindahan data; dan menarik balik persetujuan apabila pemprosesan berasaskan persetujuan, tanpa menjejaskan pemprosesan sah terdahulu. Anda boleh mengemukakan aduan kepada pihak berkuasa penyeliaan tempatan anda.',
          `Untuk menggunakan hak ini, e-mel ${EMAIL} dengan subjek “Privacy Request”. Kami mungkin perlu mengesahkan identiti anda sebelum memenuhi permintaan.`,
        ],
      },
      {
        h: '13. Hak anda — Amerika Syarikat (termasuk CCPA/CPRA)',
        paragraphs: [
          'Bergantung pada negeri tempat tinggal anda (termasuk California di bawah CCPA/CPRA), anda mungkin berhak untuk mengetahui/mengakses, memadam, membetulkan dan menarik diri daripada jualan atau perkongsian maklumat peribadi, serta mengehadkan penggunaan maklumat peribadi sensitif jika terpakai. Kami tidak akan mendiskriminasi anda kerana menggunakan hak privasi.',
          `Hantar permintaan ke ${EMAIL} (subjek: “Privacy Request”) atau melalui pos ke ${ADDRESS}. Ejen yang diberi kuasa boleh mengemukakan permintaan jika dibenarkan undang-undang; kami mungkin memerlukan bukti kebenaran dan pengesahan identiti.`,
          'Jika kami menawarkan kawalan “Do Not Sell or Share” atau serupa (termasuk Global Privacy Control jika kami menghormatinya), kami akan menerangkannya dalam Dasar Kuki atau tetapan produk.',
        ],
      },
      {
        h: '14. Nota Asia-Pasifik (tahap umum)',
        paragraphs: [
          `Jika anda berada di bidang kuasa seperti Singapura (PDPA), Jepun (APPI), Korea Selatan (PIPA) atau rantau Asia-Pasifik lain dengan undang-undang data peribadi, kami memproses maklumat seperti diterangkan dalam Dasar ini dan selaras dengan keperluan tempatan yang terpakai setakat ia terpakai kepada ${ENTITY} sebagai pembekal Perkhidmatan dalam talian AS.`,
          `Anda boleh hubungi kami di ${EMAIL} untuk meminta akses, pembetulan atau pemadaman selaras dengan undang-undang terpakai. Apabila undang-undang tempatan memerlukan wakil tempatan atau notis tambahan, kami akan mengemas kini Dasar ini atau menyediakan notis khusus rantau.`,
        ],
      },
      {
        h: '15. Kanak-kanak',
        paragraphs: [
          'Perkhidmatan tidak ditujukan kepada kanak-kanak di bawah 16 tahun (atau umur lebih tinggi yang dikehendaki dalam bidang kuasa anda). Kami tidak sengaja mengumpul maklumat peribadi kanak-kanak. Jika anda percaya kanak-kanak telah memberikan maklumat kepada kami, hubungi kami dan kami akan mengambil langkah yang sesuai untuk memadamkannya.',
        ],
      },
      {
        h: '16. Laman pemasaran',
        paragraphs: [
          'Laman web pemasaran kami kebanyakannya statik dan menggunakan analitik dan kuki terhad seperti diterangkan dalam Dasar Kuki. Kami tidak menjual data peribadi yang dikumpul dari laman pemasaran. Pautan keluar (termasuk ke aplikasi) dilabelkan jika praktikal.',
        ],
      },
      {
        h: '17. Perubahan',
        paragraphs: [
          'Kami mungkin mengemas kini Dasar ini dari semasa ke semasa. Tarikh “Dikemas kini” akan berubah apabila kami menyiarkan semakan. Perubahan material mungkin diserlahkan di laman atau dimaklumkan melalui e-mel jika sesuai. Penggunaan berterusan Perkhidmatan selepas kemas kini merupakan penerimaan Dasar yang disemak setakat dibenarkan undang-undang.',
        ],
      },
      {
        h: '18. Hubungi',
        paragraphs: [
          `Permintaan privasi dan perlindungan data: ${EMAIL}`,
          `Pos: ${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  termsPage: {
    badge: 'Terma',
    title: 'Terma Penggunaan',
    subtitle: 'Perjanjian antara anda dan Nexow, Inc. untuk penggunaan nexow.ai dan aplikasi Nexow.',
    meta: {
      title: 'Terma Penggunaan — Nexow',
      description:
        'Terma Penggunaan laman web dan aplikasi Nexow, Inc.: akaun, penggunaan boleh diterima, harta intelek, penafian, liabiliti dan undang-undang terpakai.',
    },
    updated: UPDATED,
    governingNote:
      'Bahasa yang mengikat Terma Penggunaan ini ialah Bahasa Inggeris (English). Terjemahan disediakan semata-mata untuk kemudahan dan tidak mengubah versi Bahasa Inggeris.',
    sections: [
      {
        h: '1. Perjanjian',
        paragraphs: [
          `Terma Penggunaan ini (“Terma”) membentuk perjanjian mengikat antara anda dan ${ENTITY} (“Nexow”, “kami” atau “kita”) yang mengawal akses kepada dan penggunaan ${WEB}, ${APP} dan perkhidmatan berkaitan (“Perkhidmatan”).`,
          'Dengan mengakses atau menggunakan Perkhidmatan, mencipta akaun atau menerima Terma ini, anda bersetuju dengannya serta Dasar Privasi dan Dasar Kuki kami. Jika anda tidak bersetuju, jangan gunakan Perkhidmatan.',
          'Jika anda menggunakan Perkhidmatan bagi pihak organisasi, anda menyatakan bahawa anda mempunyai kuasa untuk mengikat organisasi tersebut, dan “anda” termasuk organisasi itu.',
        ],
      },
      {
        h: '2. Perkhidmatan',
        paragraphs: [
          'Nexow menyediakan alat untuk menerangkan, menjana, mengkonfigurasi, memvisualkan dan berkongsi widget dan ruang kerja, termasuk sambungan ke sumber data pihak ketiga dan ciri kolaborasi, komuniti atau marketplace pilihan apabila kami sediakan.',
          'Kami boleh mengubah, menggantung atau menamatkan ciri, pelan atau Perkhidmatan (keseluruhan atau sebahagian) dengan notis munasabah jika praktikal. Ciri pratonton atau beta mungkin tidak stabil dan disediakan seadanya.',
        ],
      },
      {
        h: '3. Kelayakan dan akaun',
        paragraphs: [
          'Anda mesti sekurang-kurangnya mencapai umur persetujuan digital dalam bidang kuasa anda (dan dalam apa jua keadaan sekurang-kurangnya 16 tahun, atau 18 jika dikehendaki) untuk menggunakan Perkhidmatan. Anda mesti memberikan maklumat akaun yang tepat dan mengekalkan kerahsiaan kredensial. Anda bertanggungjawab atas aktiviti di bawah akaun anda.',
          'Kami boleh menggantung atau menamatkan akaun yang melanggar Terma ini, menimbulkan risiko keselamatan atau kekal tidak aktif untuk tempoh yang lama.',
        ],
      },
      {
        h: '4. Pelan, kredit dan pembayaran',
        paragraphs: [
          'Sesetengah ciri memerlukan pelan berbayar, kredit atau had penggunaan lain. Harga, kuota termasuk dan tempoh bil diterangkan di halaman Pelan atau dalam produk. Melainkan dinyatakan sebaliknya, yuran tidak boleh dikembalikan kecuali dikehendaki undang-undang.',
          'Anda memberi kuasa kepada kami dan pemproses pembayaran kami untuk mengenakan yuran terpakai. Cukai mungkin terpakai. Kami boleh menukar harga dengan notis; perubahan berkuat kuasa pada pembaharuan seterusnya melainkan dinyatakan sebaliknya.',
        ],
      },
      {
        h: '5. Kandungan anda dan lesen',
        paragraphs: [
          'Anda mengekalkan pemilikan kandungan yang anda hantar atau cipta dalam Perkhidmatan (“Kandungan Pengguna”), termasuk prompt, widget dan konfigurasi, tertakluk kepada hak pihak ketiga dan Nexow ke atas platform, templat dan kerangka yang dijana kami yang tidak unik kepada input anda.',
          `Anda memberikan ${ENTITY} lesen di seluruh dunia dan tidak eksklusif untuk menghos, memproses, menghantar, memaparkan dan mencipta karya terbitan Kandungan Pengguna semata-mata setakat diperlukan untuk mengendalikan, melindungi dan menambah baik Perkhidmatan dan seperti yang anda arahkan (cth., berkongsi atau menerbitkan).`,
          'Anda menyatakan bahawa anda mempunyai semua hak yang diperlukan untuk menghantar Kandungan Pengguna dan menyambung sebarang perkhidmatan pihak ketiga, dan bahawa Kandungan Pengguna tidak melanggar undang-undang atau hak pihak ketiga.',
        ],
      },
      {
        h: '6. Penggunaan boleh diterima',
        paragraphs: [
          'Anda mesti mematuhi Dasar Penggunaan Boleh Diterima kami dan semua undang-undang terpakai. Anda tidak boleh menyalahgunakan Perkhidmatan, mengganggu orang lain, cuba akses tanpa kebenaran, mengikis secara berlebihan atau menggunakan Perkhidmatan untuk perdagangan haram, penipuan, malware atau pelanggaran.',
          'Nexow ialah platform alat dan visualisasi. Tiada apa-apa dalam Perkhidmatan merupakan nasihat kewangan, pelaburan, undang-undang atau cukai. Data pasaran dan contoh mungkin ilustratif; anda bertanggungjawab sepenuhnya atas keputusan yang anda buat.',
        ],
      },
      {
        h: '7. Perkhidmatan pihak ketiga',
        paragraphs: [
          'Penyambung dan integrasi adalah pilihan dan tertakluk kepada terma pihak ketiga. Kami tidak bertanggungjawab atas ketersediaan, ketepatan, yuran atau amalan data pihak ketiga. Kredensial yang anda berikan digunakan seperti diterangkan dalam Dasar Privasi.',
        ],
      },
      {
        h: '8. Harta intelek',
        paragraphs: [
          `Perkhidmatan, termasuk perisian, penjenamaan, dokumentasi dan kandungan bukan Kandungan Pengguna, dimiliki oleh ${ENTITY} atau pemberi lesennya dan dilindungi oleh undang-undang harta intelek. Kecuali hak terhad untuk menggunakan Perkhidmatan di bawah Terma ini, tiada hak diberikan.`,
          'Maklum balas yang anda berikan boleh digunakan oleh kami tanpa kewajipan kepada anda.',
        ],
      },
      {
        h: '9. Kerahsiaan dan keselamatan',
        paragraphs: [
          'Anda tidak boleh cuba meneroka, memintas atau mengganggu kawalan keselamatan. Laporkan kelemahan yang disyaki secara bertanggungjawab. Kami melaksanakan langkah keselamatan munasabah tetapi tidak dapat menjamin keselamatan mutlak.',
        ],
      },
      {
        h: '10. Penafian jaminan',
        paragraphs: [
          'PERKHIDMATAN DISEDIAKAN “SEADANYA” DAN “SEBAGAIMANA TERSEDIA.” SETAKAT MAKSIMUM YANG DIBENARKAN UNDANG-UNDANG, KAMI MENAFIKAN SEMUA JAMINAN, TERSURAT ATAU TERSIRAT, TERMASUK KEBOLEHDAGANGAN, KESESUAIAN UNTUK TUJUAN TERTENTU DAN BUKAN PELANGGARAN. KAMI TIDAK MENJAMIN BAHAWA PERKHIDMATAN AKAN BEBAS GANGGUAN, RALAT ATAU KOMPONEN BERBAHAYA, ATAU BAHAWA OUTPUT (TERMASUK KANDUNGAN DIJANA AI) AKAN TEPAT, LENGKAP ATAU SESUAI UNTUK TUJUAN ANDA.',
        ],
      },
      {
        h: '11. Had liabiliti',
        paragraphs: [
          `SETAKAT MAKSIMUM YANG DIBENARKAN UNDANG-UNDANG, ${ENTITY.toUpperCase()} DAN PENGARAH, PEGAWAI, PEKERJA DAN EJENNYA TIDAK AKAN BERTANGGUNGJAWAB ATAS KEROSAKAN TIDAK LANGSUNG, SAMPINGAN, KHAS, AKIBAT, CONTOH ATAU PUNITIF, ATAU KEHILANGAN KEUNTUNGAN, HASIL, DATA ATAU GOODWILL, YANG TIMBUL DARIPADA ATAU BERKAITAN DENGAN PERKHIDMATAN ATAU TERMA INI, SAMA ADA BERDASARKAN KONTRAK, TORT ATAU SEBALIKNYA, WALAUPUN DINASIHATKAN KEMUNGKINANNYA.`,
          'LIABILITI AGREGAT KAMI UNTUK SEMUA TUNTUTAN BERKAITAN PERKHIDMATAN ATAU TERMA INI TIDAK MELEBIHI YANG LEBIH TINGGI ANTARA (A) JUMLAH YANG ANDA BAYAR KEPADA KAMI UNTUK PERKHIDMATAN DALAM DUA BELAS (12) BULAN SEBELUM TUNTUTAN ATAU (B) SERATUS DOLAR AS (100 USD). SESSETENGAH BIDANG KUASA TIDAK MEMBENARKAN HAD TERTENTU; DALAM KES ITU LIABILITI KAMI TERHAD KEPADA MAKSIMUM YANG DIBENARKAN.',
        ],
      },
      {
        h: '12. Indemniti',
        paragraphs: [
          `Anda akan mempertahankan dan menanggung rugi ${ENTITY} terhadap tuntutan, kerosakan dan perbelanjaan (termasuk yuran peguam munasabah) yang timbul daripada Kandungan Pengguna anda, penggunaan Perkhidmatan, sambungan pihak ketiga anda atau pelanggaran Terma ini atau undang-undang.`,
        ],
      },
      {
        h: '13. Penamatan',
        paragraphs: [
          'Anda boleh berhenti menggunakan Perkhidmatan pada bila-bila masa dan meminta penutupan akaun melalui produk atau dengan menghubungi kami. Kami boleh menggantung atau menamatkan akses kerana pelanggaran, risiko atau sebab undang-undang. Peruntukan yang secara semula jadi harus kekal (termasuk harta intelek, penafian, had, indemniti dan undang-undang terpakai) akan kekal selepas penamatan.',
        ],
      },
      {
        h: '14. Undang-undang terpakai dan pertikaian',
        paragraphs: [
          `Terma ini diatur oleh undang-undang Negeri Delaware, Amerika Syarikat, tanpa mengira peraturan konflik undang-undang. Tertakluk kepada perlindungan mandatori pengguna di negara tempat tinggal anda, mahkamah di Delaware (atau mahkamah persekutuan dengan bidang kuasa di sana) akan mempunyai bidang kuasa eksklusif ke atas pertikaian, kecuali kami boleh memohon injunksi di mana-mana bidang kuasa.`,
          'Jika anda pengguna di EEA/UK, anda juga mungkin mendapat manfaat daripada perlindungan mandatori tempatan dan, apabila dikehendaki undang-undang, membawa prosiding di tempat tinggal anda.',
        ],
      },
      {
        h: '15. Perubahan',
        paragraphs: [
          'Kami boleh mengemas kini Terma ini dengan menyiarkan versi disemak dengan tarikh dikemas kini. Perubahan material mungkin dimaklumkan dalam produk atau melalui e-mel. Penggunaan berterusan selepas tarikh berkuat kuasa merupakan penerimaan, kecuali undang-undang terpakai memerlukan sebaliknya.',
        ],
      },
      {
        h: '16. Hubungi',
        paragraphs: [
          `Notis undang-undang: ${EMAIL}`,
          `${ENTITY}, ${ADDRESS}`,
          `Web: ${WEB}`,
        ],
      },
    ],
  },
  cookiesPage: {
    badge: 'Kuki',
    title: 'Dasar Kuki',
    subtitle:
      'Cara Nexow, Inc. menggunakan kuki dan teknologi serupa di nexow.ai dan dalam aplikasi Nexow.',
    meta: {
      title: 'Dasar Kuki — Nexow',
      description:
        'Dasar Kuki Nexow, Inc.: jenis kuki, tujuan, persetujuan dan cara mengurus keutamaan.',
    },
    updated: UPDATED,
    governingNote:
      'Bahasa yang mengikat Dasar Kuki ini ialah Bahasa Inggeris (English). Terjemahan disediakan semata-mata untuk kemudahan dan tidak mengubah versi Bahasa Inggeris.',
    sections: [
      {
        h: '1. Pengenalan',
        paragraphs: [
          `${ENTITY} (“Nexow”, “kami”) menggunakan kuki dan teknologi serupa (storan tempatan, piksel, SDK) di ${WEB} dan Perkhidmatan berkaitan. Dasar Kuki ini menerangkan apa yang kami gunakan, mengapa dan cara anda boleh mengawalinya. Ia harus dibaca bersama Dasar Privasi kami.`,
          `Hubungi: ${EMAIL} · ${ADDRESS}`,
        ],
      },
      {
        h: '2. Apakah kuki?',
        paragraphs: [
          'Kuki ialah fail teks kecil yang disimpan pada peranti anda. Teknologi serupa menyimpan atau membaca maklumat dengan cara yang setara. Ia boleh “sesi” (dipadam apabila pelayar ditutup) atau “kekal” (disimpan sehingga tamat tempoh atau dipadam), dan “first-party” (ditetapkan oleh kami) atau “third-party” (ditetapkan oleh domain lain).',
        ],
      },
      {
        h: '3. Cara kami menggunakan kuki',
        paragraphs: [
          'Sangat diperlukan: diperlukan untuk keselamatan, imbangan beban, pengesahan, storan persetujuan dan fungsi teras. Ia tidak memerlukan persetujuan apabila undang-undang terpakai menyediakan pengecualian.',
          'Keutamaan / fungsi: mengingati bahasa, tetapan UI atau pilihan serupa.',
          'Analitik / prestasi: membantu kami memahami trafik dan menambah baik laman atau aplikasi (cth., paparan halaman agregat). Apabila diperlukan (termasuk di EU/UK), kami meminta persetujuan sebelum kuki analitik bukan penting.',
          'Pemasaran / pengiklanan: kami pada masa ini tidak bergantung pada kuki pengiklanan pihak ketiga di laman pemasaran. Jika itu berubah, kami akan mengemas kini Dasar ini dan mendapatkan persetujuan apabila diperlukan.',
        ],
      },
      {
        h: '4. Storan tempatan dan keadaan aplikasi',
        paragraphs: [
          'Aplikasi Nexow mungkin menggunakan storan pelayar (cth., localStorage, IndexedDB) untuk menyimpan data ruang kerja, keutamaan atau keadaan sesi. Storan itu diperlukan untuk mengendalikan ciri produk yang anda gunakan dan diterangkan lebih lanjut dalam Dasar Privasi.',
        ],
      },
      {
        h: '5. Persetujuan (Eropah dan rejim serupa)',
        paragraphs: [
          'Apabila Arahan ePrivacy / GDPR (atau setara UK) memerlukan persetujuan untuk kuki bukan penting, kami akan memintanya sebelum menetapkannya dan menghormati penarikan balik. Kuki sangat diperlukan boleh ditetapkan tanpa mengira banner persetujuan.',
          'Anda boleh menukar tetapan pelayar untuk menyekat atau memadam kuki; sesetengah ciri mungkin tidak berfungsi dengan betul jika kuki penting disekat.',
        ],
      },
      {
        h: '6. Amerika Syarikat dan rantau lain',
        paragraphs: [
          'Di AS, pendedahan kuki menyokong ketelusan di bawah undang-undang privasi negeri (termasuk konsep “jualan”/“perkongsian” CCPA/CPRA apabila kuki pengiklanan digunakan). Pengguna Asia-Pasifik mungkin mempunyai hak ketelusan dan pilihan serupa di bawah undang-undang tempatan (cth., PDPA, APPI); hubungi kami untuk menggunakan hak terpakai.',
        ],
      },
      {
        h: '7. Mengurus kuki',
        paragraphs: [
          'Kawalan pelayar: gunakan halaman bantuan pelayar anda untuk menolak atau memadam kuki.',
          'Kawalan dalam produk / laman: apabila kami menyediakan alat keutamaan kuki, gunakannya untuk melaraskan kategori bukan penting.',
          `Soalan: ${EMAIL}`,
        ],
      },
      {
        h: '8. Perubahan',
        paragraphs: [
          'Kami mungkin mengemas kini Dasar Kuki ini apabila amalan kami berubah. Semak tarikh “Dikemas kini”. Perubahan material akan dipaparkan di halaman ini dan, apabila diperlukan, melalui persetujuan baharu.',
        ],
      },
    ],
  },
  legalPage: {
    badge: 'Undang-undang',
    title: 'Maklumat Undang-undang & Syarikat',
    subtitle: 'Butiran rasmi syarikat dan dokumen undang-undang awam Nexow, Inc.',
    meta: {
      title: 'Undang-undang — Nexow, Inc.',
      description:
        'Maklumat undang-undang dan syarikat Nexow, Inc., termasuk alamat berdaftar dan pautan ke dasar Privasi, Terma, Kuki dan Penggunaan Boleh Diterima.',
    },
    updated: UPDATED,
    governingNote:
      'Maklumat syarikat dan dokumen undang-undang disediakan dalam Bahasa Inggeris (English) sebagai bahasa mengikat melainkan versi tempatan mandatori dikehendaki oleh undang-undang.',
    sections: [
      {
        h: '1. Butiran syarikat',
        paragraphs: [
          `Entiti undang-undang: ${ENTITY}`,
          `Alamat berdaftar / pos: ${ADDRESS}`,
          `Laman web: ${WEB}`,
          `Aplikasi: ${APP}`,
          `Hubungan umum: ${EMAIL}`,
        ],
      },
      {
        h: '2. Dokumen undang-undang awam',
        paragraphs: [
          'Dokumen berikut membentuk kontrak undang-undang awam kami untuk laman web dan aplikasi:',
          '• Dasar Privasi — cara kami memproses maklumat peribadi (peka GDPR/CCPA, dengan nota Asia-Pasifik).',
          '• Terma Penggunaan — terma yang mengawal penggunaan Perkhidmatan.',
          '• Dasar Kuki — kuki dan teknologi serupa.',
          '• Dasar Penggunaan Boleh Diterima — kelakuan dilarang dan dikehendaki.',
          'Pautan tersedia di footer laman dan di /privacy, /terms, /cookies dan /acceptable-use.',
        ],
      },
      {
        h: '3. Notis gaya imprint',
        paragraphs: [
          `Bagi pengguna yang mencari “notis undang-undang”, “imprint” atau maklumat pengenalan syarikat: Perkhidmatan dikendalikan oleh ${ENTITY}, di ${ADDRESS}. Hubungan dalam talian: ${EMAIL}. Halaman ini bertujuan memenuhi jangkaan ketelusan biasa di Amerika Syarikat, Eropah dan rantau lain untuk mengenal pasti pengendali perkhidmatan.`,
        ],
      },
      {
        h: '4. Pemprosesan data',
        paragraphs: [
          'Nexow memproses data peribadi seperti diterangkan dalam Dasar Privasi. Pelanggan yang memerlukan Data Processing Addendum (DPA) atau terma kontrak setara untuk GDPR Artikel 28 (atau setara) boleh memintanya melalui e-mel dengan subjek “DPA Request”. Subpemproses standard dan perlindungan pemindahan diterangkan dalam Dasar Privasi atau disediakan atas permintaan.',
        ],
      },
      {
        h: '5. Penafian',
        paragraphs: [
          'Nexow ialah platform alat dan visualisasi. Kandungan di laman pemasaran dan dalam aplikasi (termasuk contoh data pasaran) bukan nasihat kewangan, pelaburan, undang-undang atau cukai. Anda kekal bertanggungjawab sepenuhnya untuk mematuhi undang-undang terpakai kepada penggunaan venue dan data yang disambungkan.',
        ],
      },
      {
        h: '6. Bahasa mengikat',
        paragraphs: [
          'Bahasa Inggeris (English) ialah bahasa mengikat dokumen undang-undang kami. UI atau ringkasan dalam bahasa tempatan disediakan semata-mata untuk kemudahan dan tidak mengubah terma Bahasa Inggeris melainkan kami secara jelas menerbitkan versi tempatan mengikat.',
        ],
      },
      {
        h: '7. Hubungi untuk hal undang-undang',
        paragraphs: [
          `E-mel: ${EMAIL} (subjek: “Legal”)`,
          `Pos: ${ENTITY}, ${ADDRESS}`,
        ],
      },
    ],
  },
  acceptableUsePage: {
    badge: 'Penggunaan Boleh Diterima',
    title: 'Dasar Penggunaan Boleh Diterima',
    subtitle: 'Peraturan untuk menggunakan laman web Nexow dan aplikasi Nexow secara bertanggungjawab dan sah.',
    meta: {
      title: 'Dasar Penggunaan Boleh Diterima — Nexow',
      description:
        'Dasar Penggunaan Boleh Diterima Nexow, Inc.: aktiviti dilarang, peraturan keselamatan dan penguatkuasaan.',
    },
    updated: UPDATED,
    governingNote:
      'Bahasa yang mengikat Dasar Penggunaan Boleh Diterima ini ialah Bahasa Inggeris (English). Terjemahan disediakan semata-mata untuk kemudahan.',
    sections: [
      {
        h: '1. Tujuan',
        paragraphs: [
          `Dasar Penggunaan Boleh Diterima ini (“AUP”) terpakai kepada penggunaan Perkhidmatan yang dikendalikan oleh ${ENTITY}. Ia melengkapkan Terma Penggunaan. Pelanggaran boleh mengakibatkan penggantungan atau penamatan.`,
        ],
      },
      {
        h: '2. Aktiviti dilarang',
        paragraphs: [
          'Anda tidak boleh menggunakan Perkhidmatan untuk: melanggar undang-undang atau hak pihak ketiga; mengedarkan malware, spam atau phishing; cuba akses tanpa kebenaran ke sistem, akaun atau data; mengganggu atau menggangu Perkhidmatan; mengikis atau memungut data dengan cara yang membebankan infrastruktur atau melanggar terma orang lain; memintas had kadar atau kawalan keselamatan; salah nyatakan identiti atau gabungan anda; atau memuat naik data haram, melanggar atau sangat sensitif terkawal tanpa kebenaran.',
          'Anda tidak boleh menggunakan Perkhidmatan untuk memudahkan penipuan, manipulasi pasaran, elak sanksi atau aktiviti perdagangan haram. Anda tidak boleh menjana atau melancarkan widget yang tujuan utamanya ialah penyalahgunaan, penipuan atau kemudaratan.',
        ],
      },
      {
        h: '3. Kredensial dan penyambung',
        paragraphs: [
          'Gunakan hanya kredensial yang anda dibenarkan gunakan. Jangan kongsi akses akaun secara tidak selamat. Konfigurasi penyambung dengan keistimewaan minimum. Jangan cuba mengekstrak rahsia milik pengguna lain.',
        ],
      },
      {
        h: '4. AI dan output dijana',
        paragraphs: [
          'Jangan gunakan ciri penjanaan untuk mencipta kandungan haram, yang melanggar IP atau bertujuan menipu orang lain secara berskala (cth., tingkah laku tidak autentik terkoordinasi). Anda bertanggungjawab menyemak output sebelum bergantung padanya.',
        ],
      },
      {
        h: '5. Penggunaan sumber adil',
        paragraphs: [
          'Pelan dan kredit mempunyai had penggunaan. Penggunaan automatik atau berlebihan yang merosakkan perkhidmatan untuk orang lain mungkin dihadkan atau disekat.',
        ],
      },
      {
        h: '6. Pelaporan dan penguatkuasaan',
        paragraphs: [
          `Laporkan penyalahgunaan ke ${EMAIL} dengan subjek “Abuse”. Kami boleh menyiasat dan membuang kandungan, menggantung ciri atau menamatkan akaun. Kami mungkin melaporkan aktiviti haram kepada pihak berkuasa jika sesuai.`,
        ],
      },
      {
        h: '7. Hubungi',
        paragraphs: [
          `${ENTITY}, ${ADDRESS} · ${EMAIL} · ${WEB}`,
        ],
      },
    ],
  },
};
