---
title: 'Peribadi secara lalai: mengapa stesen kerja pasaran AI anda harus berjalan secara tempatan'
description: 'Nexow berjalan sepenuhnya tempatan secara lalai — bawa codegen kunci anda sendiri di pelayar, ketekunan IndexedDB, dan sambungan terus ke tempat. Inilah apa maksud peribadi secara lalai dan mengapa ia penting bagi peniaga.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['privasi', 'seni bina', 'keamanan']
category: deep-dive
---

Kebanyakan alat AI menghantar data anda ke pelayan secara lalai. Untuk stesen kerja pasaran — di mana kunci, kedudukan dan strategi anda adalah keseluruhan permainan — lalai itu terbalik. Nexow membalikkannya: **peribadi secara lalai, tempatan mengikut reka bentuk.**

Inilah apa yang sebenarnya bermakna.

## Bawa codegen kunci anda sendiri, di pelayar

Dalam mod peribadi anda menambahkan kunci API Anthropic anda sendiri, dan penjanaan widget berjalan pihak klien. Apabila anda meminta widget, permintaan pergi dari penyemak imbas anda kepada Anthropic dengan kunci anda — bukan melalui infrastruktur Nexow. Sesi yang tidak disahkan menghargai kami tiada apa-apa untuk dijalankan kerana tidak ada apa-apa untuk dijalankan: kerja berlaku pada mesin anda.

## Widget anda hidup di pelayar anda

Setiap widget yang anda bina, setiap versi, setiap log, dan seluruh perpustakaan widget anda bertahan dalam **IndexedDB** pelayar anda. Mereka tersedia luar talian dan terikat pada akaun tidak. Padam penyimpanan anda dan mereka hilang — tiada salinan sisi pelayan kerana tidak ada muat naik sisi pelayan.

## Sambungan terus ke tempat

Di mana dasar CORS tempat membenarkannya, Nexow berhubung dengannya **terus dari penyemak imbas anda**, melepaskan proksi kami sepenuhnya. Bukti kelayakan pertukaran anda digunakan untuk bercakap dengan pertukaran — bukan untuk bercakap dengan kami. Lebih sedikit lompatan bermakna latensi rendah dan permukaan amanah yang lebih kecil.

## Mengapa peribadi secara lalai penting

- **Keselamatan.** Semakin sedikit pihak yang menyentuh kunci anda, semakin sedikit tempat mereka boleh bocor. Tempatan-pertama menghilangkan kami dari laluan sepenuhnya dalam mod peribadi.
- **Latensi.** Sambungan terus melangkau lompatan rangkaian, yang penting apabila anda memantau buku pesanan.
- **Pemilikan.** Papan pemantau anda adalah milik anda. Tiada penguncian, tiada tarian ekspor — mereka hidup di mesin anda.
- **Kos.** Anda hanya membayar untuk penggunaan model anda sendiri, tanpa penanda-harga dan tiada langganan yang diperlukan untuk membina di kanvas hari ini.

## Pertukaran, jujur

Tempatan-pertama bukan bebas daripada pertukaran. Sesetengah tempat tidak membenarkan sambungan terus pelayar dan mesti laluan melalui proksi nipis. Ketekunan tempatan bermakna kerja anda terikat pada profil pelayar sehingga anda memilih untuk segerakan. Dan menjalankan kunci anda sendiri bermakna mengurus penggunaan anda sendiri. Kami fikir itu pertukaran yang betul untuk alat yang duduk sedekat ini dengan wang anda.

Semasa kami menambahkan pelan yang dianjurkan, agen perdagangan dan komponen pelayan, prinsip tetap tetap: **kunci anda, data anda, mesin anda** — melainkan anda secara eksplisit memilih untuk masuk ke awan.

[Lancarkan Nexow](https://x.nexow.ai) dan lihat mod peribadi untuk diri anda sendiri.