---
title: 'Dari permintaan ke widget langsung: bagaimana Nexow mengubah kalimat menjadi papan pemantau perdagangan'
description: 'Pandangan di bawah tudung tentang bagaimana Nexow menjana widget pasaran yang berjalan dan bersambung data daripada permintaan bahasa biasa — codegen, pasir dan penyambung langsung dijelaskan.'
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['produk', 'ai', 'cara-ia-berfungsi']
---

Membina papan pemantau perdagangan selalu bermakna penggilingan yang sama: cari API, baca dokumen, keliaran websocket, normalisasi muatan, pilih perpustakaan carta, pertarungan susun atur, dan ulangi untuk setiap instrumen yang anda ambil berat. Nexow meruntuhkan gelung keseluruhan itu menjadi satu kalimat.

Inilah apa yang sebenarnya berlaku antara menaip permintaan dan menonton widget langsung muncul di kanvas anda.

## 1. Anda terangkan apa yang anda mahu lihat

Permintaan hanya bahasa semula jadi:

> Tunjukkan carta candlestick BTC-USD dari Coinbase dengan 20 dan 50 EMA, dan panel RSI di bawah.

Tiada skema untuk belajar dan tiada fail konfigurasi. Anda menerangkan hasil — instrumen, tempat, penunjuk, susun atur — cara anda menerangkannya kepada rakan sekerja.

## 2. Nexow menjana sumber widget

Nexow menghantar permintaan anda ke model Claude Anthropic melalui SDK Anthropic, bersama-sama dengan konteks yang diperlukan: penyambung yang tersedia, bentuk data yang mereka kembalikan, dan kontrak masa jalan yang mesti dipenuhi widget. Claude menulis kod sumber widget yang sebenarnya — logik ambil, ubah, dan pemaparannya.

Kerana model menulis kod sebenar dan bukannya mengisi templat tetap, pelbagai apa yang boleh anda bina adalah terbuka: carta kedalaman buku pesanan, peta haba kadar pendanaan, matriks korelasi, isyarat tersuai, jadual biasa. Jika anda boleh menerangkannya, Nexow biasanya boleh membinanya.

## 3. Widget berjalan bersandikan

Kod yang dijana adalah kuat, jadi ia berjalan di belakang sempadan ketat. Setiap widget dilaksanakan di dalam iframe terpencil: ia dapat memberikan UI dan mengambil data yang diperlukan, tetapi ia tidak dapat menjangkau ke ruang kerja anda, membaca widget lain, atau menyentuh apa-apa yang tidak diberikan. Kuasa tanpa risiko.

## 4. Data langsung mengalir masuk melalui penyambung

Widget hanya berguna dengan data sebenar. Nexow menghantar lebih dari 20 penyambung boleh pasang merentasi FX, kripto, ekuiti, niaga hadapan, pilihan dan pasaran ramalan — OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi, Polymarket dan banyak lagi. Widget melanggan tempat yang anda namakan, dan harga, buku pesanan dan data rujukan mengalir terus masuk.

Di mana dasar CORS tempat membenarkannya, panggilan itu berjalan **terus dari penyemak imbas anda** dan tidak pernah melalui pelayan kami — yang mengekalkan latensi rendah dan bukti kelayakan anda pada mesin anda.

## 5. Anda menyempurnakannya dalam bahasa biasa

Generasi pertama jarang yang terakhir. Semuanya kekal boleh disunting oleh perbualan: *"tambah 200 EMA"*, *"tukar kepada skala log"*, *"warna lilin mengikut kadar pendanaan."* Nexow menulis semula widget di tempat, versi perubahan, dan menyimpan log yang boleh anda periksa atau kembali.

## Mengapa ini penting

Jalan tradisional daripada idea kepada carta diukur dalam jam. Dengan Nexow ia diukur dalam beberapa saat, dan artifak yang anda dapatkan adalah widget sebenar yang boleh diperiksa — bukan kotak hitam. Papan pemantau memasang sendiri, dan anda tetap menguasai kod, data dan kunci.

Bersedia untuk mencubanya? [Lancarkan aplikasi](https://x.nexow.ai) dan terangkan widget pertama anda.