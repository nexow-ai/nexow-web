---
title: 'Sepuluh widget contoh kini datang dengan Nexow — perbualan dan semuanya'
description: 'Akaun baharu tidak lagi dibuka pada kanvas kosong. Sepuluh widget siap tiba sebagai workspace Contoh, setiap satu membawa chat sebenar yang membinaannya dan sejarah versi sebenar — dibina oleh gelung codegen yang sama yang anda gunakan, tanpa apa-apa disambungkan.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['produk', 'onboarding', 'widgets']
---

Skrin paling sukar di Nexow sentiasa yang pertama: kanvas kosong, kotak prompt,
dan tiada bukti ia berfungsi. Anda boleh baca docs, atau taip sesuatu dan harap.

Dengan keluaran seterusnya, akaun baharu boot ke **workspace Contoh** — sepuluh
widget siap merentasi tiga skrin, semua berjalan pada muat pertama, dengan
**tiada apa disambungkan**. Bukan tangkapan skrin, bukan lawatan berpandu.
Widget berfungsi yang boleh dibuka, diedit, dibongkar dan diterbitkan
daripadanya.

## Apa dalam pek

**Live world** — jam dunia dengan cincin siang/malam dan bar pertindihan waktu
bekerja; ramalan cuaca tujuh hari dengan lengkung setiap jam; setiap gempa bumi
jam, hari atau minggu lepas pada peta langsung, bersaiz mengikut magnitud; dan
kualiti udara langsung dengan pencemar yang kini memacu indeks.

**Markets** — Binance candlesticks dengan lilin terakhir langsung dan lencana
perubahan 24j; penukar FX pada kadar rujukan ECB dengan sejarah 90 hari;
soalan Polymarket paling aktif dan apa yang dipercayai orang ramai; dan mana-mana
penunjuk World Bank, untuk dua negara sekaligus, sebagai carta jangka panjang.

**Make and play** — papan nota melekit yang tahan reload melalui storan tahan
lama per item, dan suapan Wikipedia on-this-day dengan thumbnail dan pemilih
tarikh.

Setiap sumber tanpa kunci: Open-Meteo, USGS, data awam Binance, Frankfurter,
Polymarket, World Bank, Wikipedia. Itu peraturan, bukan kebetulan — contoh yang
buka pada «Connect OANDA» lebih teruk daripada kanvas kosong.

## Mereka benar-benar dibina, bukan ditulis

Setiap contoh bermula sebagai brief ditulis cara manusia menaip — apa yang
diingini dan mengapa, bukan spesifikasi. `starter:build` menjalankan brief itu
melalui **`runWidgetToolLoop`**: modul yang sama yang laluan codegen platform
dan laluan bring-your-own-key pelayar kedua-duanya pacu, dengan kontrak, alat
dan verifier in-turn yang sama. Tiada HTTP stream, tiada credit ledger, tiada
pelayar — tetapi gelung yang sama.

Jadi transkrip dalam tab chat widget ialah perbualan sebenar, dan setiap giliran
yang menghasilkan kod ialah versi sebenar pada rail. Kebanyakan ada tiga. **Air
quality ada lima**, kerana tiga pertama membiarkannya buka kotak kosong «enter a
city», dan giliran kelima ialah laporan bug: enam jubin pencemar semua menunjukkan
sengkang, dan cap masa membaca *«-6375 min ago»*. Build itu dalam pek tepat
seperti berlaku.

Penting, brief dijalankan **tanpa provider dilampirkan** — tepat apa yang ada
pada akaun baharu. Apa pun keluar dari gelung itu berfungsi pada hari pertama
seseorang.

## Bukan katalog kedua

Setiap contoh ialah aset marketplace biasa, diterbitkan oleh akaun rasmi melalui
RPC yang sama kerja orang lain: sanitizer sama, graf lineage sama, laluan install
sama, rantaian royalty sama. Tiada apa pada starter widget di-special-case pada
pelayan, sengaja — fork satu dan anda teruskan lineage sebenar bukannya
menemui contoh app hidup dalam dialek peribadi.

Registry kurasi di atas hanya pegang kurasi: aset diterbitkan mana membentuk
pek, susunan mana, skrin mana. Tulisan service-role sahaja; bacaan awam, kerana
pelawat signed-out mungkin melihat halaman senarai untuk satu.

## Di mana pek mendarat, dan apa yang tidak akan dilakukan

Seeding digated tiga cara. Ia berjalan **sekali per akaun, bukan sekali per
peranti** — bendera ialah tetapan direplikasi, dibaca semula apabila tukar akaun.
Ia tidak pernah seed kanvas yang sudah digunakan. Dan boleh dipaksa dari
**Settings → General → Add example widgets**, untuk akaun pra-pek atau sesiapa
yang memadam workspace dan mahu kembali.

Contoh mendarat *sebelah* workspace kosong anda bukannya menggantikannya, jadi
onboarding masih beri skrin bersih untuk menaip. Keseluruhan pek satu langkah
undo.

Setiap widget seeded distamp sebagai marketplace install sebenarnya, jadi
memperbaiki satu dan menerbitkannya teruskan lineage rasmi bukannya salinan
saingan. Apabila kami ship versi contoh lebih baik, **pengguna sudah seeded
kekalkan milik mereka** — widget mereka sekarang, mungkin diedit. Tiada laluan
push-update, dan tidak sepatutnya ada.

## Disahkan sebagai pek, bukan dengan mata

Sebelum mana-mana sampai ke akaun, keseluruhan pek berjalan dalam Chrome sebenar
dan dinilai per widget: ralat boot, gelung animasi liar, bingkai perlahan, render
kosong — plus tangkapan skrin setiap satu. Semak langsung berasingan memperoleh
setiap endpoint awam daripada kod committed dan mengesahkan ia masih menjawab,
supaya ujian tidak lapuk sementara widget berubah.

Bar untuk yang kesebelas sama dengan sepuluh ini: sifar sambungan, verdict smoke
bersih, mesej sebenar bukan jubin kosong bila sumber datanya hari buruk, dan
tiada apa peribadi dalam perbualan — kerana perbualan juga dihantar.

Pek ship dengan keluaran seterusnya, dan akaun sedia ada boleh tarik masuk dari
**Settings → General** bila-bila mahu. Buka satu, baca chat yang membinaannya,
kemudian ubah sesuatu — masih cara terpantas belajar apa kanvas boleh lakukan.

[Lancarkan Nexow](https://x.nexow.ai) dan mula membina sementara itu.
