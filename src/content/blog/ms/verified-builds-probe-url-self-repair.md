---
title: 'Widget yang memeriksa plumbing sendiri: probe_url, ejen verifier dan satu pembaikan percuma'
description: 'Sumber terbesar widget mati ialah kod ditulis terhadap API khayalan. Kini builder fetch endpoint semasa menulis, verifier re-probe apa yang dilangkau, dan crash dalam 45 saat pertama membeli satu fix automatik.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['produk', 'ai', 'cara-ia-berfungsi']
---

Cara paling biasa widget dijana gagal bukan bug dalam kod dijana. Ia endpoint
yang tidak pernah wujud.

Model mengambil URL dari ingatan — atau dari baris direktori yang pautannya
*halaman dokumentasi*, bukan endpoint — meneka bentuk respons, menulis kod
parsing teliti terhadap tekaan itu, dan ship. Apa yang anda dapat spinner
abadi atau carta kosong, tanpa apa pada skrin yang memberitahu mengapa.

Keluaran ini menutup gelung tiga kali: semasa model menulis, sejurus selepas
menulis, dan sekali lagi jika masih crash di hadapan anda.

## Semasa menulis: `probe_url`

Builder kini ada alat yang **GET endpoint awam tanpa kunci sekarang**, melalui
proxy pelayan yang sama `ctx.data.http()` guna pada runtime, dan mengembalikan
status HTTP sebenar dan badan respons sebenar.

Identiti itulah keseluruhan maksudnya. Probe yang berjaya *ialah* panggilan
runtime yang berjaya. Probe yang gagal ialah widget yang akan ship rosak — dan
ia gagal sekarang, semasa masih ada giliran untuk betulkan, bukan pada kanvas
anda.

Ia di dasar tangga builder diminta kerjakan bukan fikir dari ingatan: docs
rujukan venue dahulu, kemudian **direktori 691 API awam tanpa kunci merentasi
47 kategori**, boleh dicari mengikut topik merentasi nama *dan* penerangan setiap
entri — kerana permintaan sebenar («tide times», «air quality») jarang padan
kategori sesiapa teka. Direktori itu sentiasa tersedia kepada builder, apa pun
skop, kerana fallback tanpa kunci universal. Pautannya dokumentasi, jadi langkah
akhir sentiasa sama: derive endpoint, kemudian probe.

«Adakah data untuk X?» soalan dijawab dengan melihat, bukan memikir dataset
mana mungkin wujud. Sampai hujung tangga dan kata *no* selepas benar-benar
semak ialah hasil baik. Menegaskan dari ingatan tidak, dan ia salah jauh lebih
kerap daripada rasa.

## Sejurus selepas menulis: verifier

Meminta model verify kerja sendiri ialah permintaan, bukan jaminan. Jadi saat
kod widget mendarat, dua perkara berlaku tanpa bergantung model bersetuju.

Pertama, hasil alat **menamakan endpoint yang tidak pernah probed giliran ini**
dan suruh semak semasa giliran masih ada.

Kedua — bahagian tanpa kerjasama — verifier berjalan **serentak semasa model
menulis ringkasannya**, dan buat sendiri:

- **Lint modul** untuk kelas kegagalan senyap secara reka. Export `render`
  hilang. Kod tidak parse. `fetch` atau `WebSocket` mentah ke hos pihak ketiga,
  yang sandbox sekat — kegagalan senyap paling merosakkan dalam widget dijana,
  kerana tiada apa dalam konsol. URL imej atau video luar ditetapkan terus ke
  `src`. URL tile hard-coded diberikan kepada pustaka peta, yang mount dan pan
  sempurna sementara setiap permintaan tile ditolak senyap.
- **Probe setiap endpoint model langkau** (sehingga lima per modul), dan baca
  verdict seperti model: unreachable, atau 4xx yang kata URL atau parameternya
  salah.

Masalah sebenar membeli **satu giliran pembaikan automatik in-turn**, dengan
output probe dilampirkan sebagai bukti dan arahan betulkan hanya yang dinamakan.
Giliran itu semasa konteks penuh build masih panas — jauh lebih murah daripada
ship rosak dan habiskan giliran baru kemudian. Model rewrite modul mid-flight,
verification yang berjalan superseded dan verdict dibuang. Verifier gagal
dalam — verify bersih: boleh delay build, tidak pernah break satu.

## Jika masih crash: satu pembaikan, terikat ketat

Konteks self-repair sudah suap ralat runtime ke giliran chat *seterusnya* — tetapi
hanya bila anda hantar satu. Widget crash saat selepas build kekal rosak sehingga
anda perasan, buka semula composer dan taip «it's broken».

Kini host runtime habiskan **satu giliran fix automatik** bila build segar crash.
Giliran automatik ialah app membelanjakan kredit atau kunci anda, jadi sempadan
sengaja ketat:

- hanya versi build AI *baru* hasilkan — crash dalam versi lama anda restore,
  atau kod edit tangan, tidak layak;
- hanya dalam **45 saat** build itu, kerana crash sejam kemudian maklumat baru
  untuk anda, bukan kecacatan build jelas;
- **sekali per versi**, dan versi dihasilkan *oleh* giliran auto-repair sendiri
  tidak layak. Satu build paling banyak trigger satu susulan automatik — tidak
  pernah rantai model bayar diri sendiri terus gagal.

Giliran pembaikan diword sebagai app melaporkan kecacatan, dengan arahan sama:
jika kegagalan melibatkan endpoint data, probe sebelum rewrite. Betulkan, kekalkan
yang berfungsi, jangan kembangkan skop widget.

Di pihak pelayan, build latar belakang diselamatkan kini tunggu bila giliran lain
widget sama sudah langsung, bukannya race ke versi duplikat.

## Gelung sama, setiap mod

Semua ini hidup dalam satu modul kongsi, jadi build platform, build
bring-your-own-key dalam pelayar, dan sapuan build pelayan dapat tingkah laku
**identik** — alat sama, format probe sama, verifier sama, bajet pembaikan sama.
Mod tidak boleh drift alat mana wujud atau ketat widget disemak, kerana hanya satu
implementasi jawapan. Ia juga gelung yang hasilkan [sepuluh widget contoh](/blog/starter-widgets-examples-workspace)
ship dengan keluaran seterusnya: dibina tepat dengan ini, dengan semakan ini.

Tiada apa menjadikan model betul. Ia menjadikan salah boleh survive, dan biasanya
tidak kelihatan: endpoint disemak sebelum kod bergantung padanya, semakan
berjalan sama ada model mahu atau tidak, dan crash pertama dapat satu percubaan
jujur sebelum sampai kepada anda.

[Lancarkan Nexow](https://x.nexow.ai) dan minta sesuatu jarang — tide times, air
quality, public holidays. Perhatikan activity rail probe endpoint sebelum tulis
baris parsing.
