---
title: 'Terbitkan suapan data: biar orang lain jalankan widget anda tanpa kunci anda'
description: 'Widget yang dibina atas sambungan Binance atau OANDA anda tidak berguna kepada sesiapa pun yang lain. Kini anda boleh menerbitkan tepat bacaan yang dilakukannya sebagai titik akhir baca sahaja bercache di bawah profil anda sendiri — tanpa berkongsi kunci, tanpa proksi terbuka.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['produk', 'widget', 'data']
---

Ada satu lompang janggal dalam perkongsian. Anda membina carta FX yang cantik atas
sambungan OANDA anda, menerbitkannya, dan orang pertama yang memasangnya membaca
*Sambungkan OANDA untuk menggunakan data ini* — satu cara sopan untuk meminta orang
asing membuka akaun broker semata-mata untuk melihat sebuah carta. Dikongsi pada skrin
langsung, ia lebih teruk lagi: widget itu membeku menjadi imej kecil.

Penyelesaiannya bukan meminjamkan kunci anda kepada sesiapa. Penyelesaiannya ialah
menerbitkan **bacaan yang benar-benar dilakukan oleh widget anda**, sebagai titik
akhir tersendiri, di bawah profil anda sendiri:

```
GET /<nama-pengguna>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Hidupkannya dari dialog penerbitan — *Terbitkan suapan data baca sahaja* — dan penonton
tanpa sambungan sendiri akan membaca suapan anda dan bukannya diminta menyambung.

## Tiga peraturan, dan setiap satunya satu penolakan

**Hanya bacaan yang selamat dikongsi.** Tiga belas kaedah data boleh diterbitkan.
Selebihnya disekat, setiap satu atas sebabnya sendiri: `account` dan `positions` juga
bacaan, tetapi ia memulangkan baki, nilai bersih, untung rugi dan kedudukan terbuka
anda. `order` dan `closePosition` menggerakkan wang. `upsert` dan `delete` memusnahkan
data. `scrape` mengenakan caj kepada pihak ketiga setiap kali dipanggil. Dan `http`
kosong pun sudah tanpa bukti kelayakan, jadi menerbitkannya hanya akan membina sebuah
proksi terbuka yang membawa nama anda.

**Hanya panggilan yang benar-benar dibuat oleh widget itu.** Bacaan yang berjaya
dirakam semasa widget berjalan, dan dialog penerbitan menunjukkan senarainya kepada
anda — *lilin daripada Binance — BTCUSDT, 1h* — sebagai perkara konkrit yang anda
persetujui. Permintaan yang meminta parameter yang tidak pernah anda terbitkan, atau
nilai di luar set yang anda luaskan, ditolak sebelum apa-apa dinyahsulit. Parameter
yang memang tidak sepatutnya berada dalam URL — pertanyaan SQL, sebuah vektor — tidak
pernah muncul di sana: ia dimainkan semula secara harfiah daripada storan.

**Penolakan tidak dapat dibezakan.** Titik akhir yang tidak wujud, parameter di luar
senarainya, dan khalayak yang anda bukan sebahagian daripadanya — semuanya memulangkan
404 yang sama. Sama ada suapan khas rakan wujud atau tidak itu sendiri ialah maklumat
tentang penulisnya, dan jawapannya tidak pernah membocorkannya.

## Siapa boleh membacanya, dan apa kosnya kepada anda

Khalayak bukan suis keempat yang mudah dilupakan: ia **mengikut siaran pengumuman** —
semua orang, pengikut anda, atau rakan anda. Pengumuman peribadi mematikan suapan itu
sepenuhnya, kerana pengumuman yang hanya anda boleh lihat menyokong titik akhir yang
dipanggil orang lain memang tidak masuk akal.

Kos ialah bahagian yang berbaloi difahami, kerana itulah bahagian yang ditakuti. Anda
memilih selang penyegaran — setiap 30 saat, 5 minit, sejam sekali atau sehari sekali —
dan itulah **had maksimum** penggunaan sambungan anda, berapa ramai pun yang membuka
widget itu. Pembaca berkongsi satu salinan cache. Sepuluh penonton dan sepuluh ribu
menghasilkan bilangan panggilan yang sama, dan hanya satu penyegaran dibenarkan bagi
setiap tetingkap walaupun beberapa pembaca terlepas cache pada saat yang sama.

Kunci anda tidak pernah meninggalkan pelayan. Baki, kedudukan dan pesanan anda tidak
pernah diterbitkan. Dan suapan itu terikat pada penyenaraian: tarik widget itu daripada
senarai dan titik akhirnya berhenti berkhidmat.

## Sambungan penonton sendiri sentiasa menang

Suapan yang diterbitkan ialah sandaran, bukan pengganti. Jika orang yang membuka widget
anda mempunyai sambungan OANDA sendiri, widget itu menggunakan **milik mereka**: akaun
mereka, data mereka, had mereka. Suapan hanya dirujuk selepas widget gagal menemui
sambungannya sendiri, dan kegagalan itu senyap: mereka melihat mesej biasa *sambungkan
tempat ini* dan bukannya ralat baharu yang perlu dipelajari.

Titik akhir itu melalui penyesuai tempat sebenar yang memang sudah ada dalam aplikasi,
jadi suapan yang diterbitkan memulangkan bentuk yang serupa dengan apa yang anda lihat
semasa membina widget itu — merentas setiap tempat aktif dalam katalog, tanpa kod
khusus bagi mana-mana satu.

## Apa yang sengaja tidak dilakukannya

- **Papan pemuka dagangan yang dikongsi melukis cartanya, bukan panel akaunnya.** Itu
  senarai sekatan menjalankan tugasnya, bukan pepijat.
- **Pemilih simbol hanya menawarkan simbol yang anda senaraikan.** Widget dengan input
  bebas merosot kepada satu set tetap. Itulah harganya kerana tidak membina proksi
  terbuka ke arah broker anda.
- **Penulis dalam mod peribadi tidak boleh menerbitkan suapan.** Dalam mod peribadi
  bukti kelayakan anda hidup hanya dalam meterai peranti ini: tiada pelayan memilikinya,
  maka tiada pelayan boleh menyegarkan apa-apa bagi pihak anda.
- **Cabang tidak mewarisi suapan.** Suapan terikat pada keturunan sesebuah widget, jadi
  setiap salinan yang dipasang menyelesaikan titik akhir yang sama, dan cabang tidak
  menyelesaikan apa-apa.

Ia perkara kecil untuk dihidupkan, tetapi ia mengubah maksud menerbitkan: widget yang
anda kongsikan kini widget yang orang benar-benar boleh jalankan.

[Buka Nexow](https://x.nexow.ai), ambil widget yang anda bina atas sambungan berkunci,
dan terbitkannya dengan suapan dihidupkan.
