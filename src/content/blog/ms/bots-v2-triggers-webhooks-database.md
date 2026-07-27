---
title: 'Bot v2: pencetus RSI dan volum, penghantaran webhook dan pangkalan data, serta pembina yang lebih kemas'
description: 'Bot awan belajar helah baharu — syarat RSI dan lonjakan volum, pemantau dagangan, isyarat yang POST ke webhook anda atau menambah baris ke pangkalan data anda, dan pembina yang dipecah kepada Bot saya dan Cipta.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['produk', 'automasi', 'bot']
---

Semasa bot dilancarkan, ia boleh memantau ambang, pergerakan peratus,
persilangan dan ringkasan, dan menembakkan isyarat ke kanvas anda. Teras itu
tidak berubah. Di sekelilingnya, hampir semuanya menjadi lebih mendalam: lebih
banyak syarat untuk dicetuskan, lebih banyak tempat untuk isyarat mendarat, dan
pembina yang tidak mengganggu kerja anda.

## Syarat baharu untuk dicetuskan

Katalog pemproses berkembang. Di samping ambang, % perubahan dan persilangan
purata bergerak, bot kini menilai:

- **RSI** — mencetus apabila momentum melintasi ke kawasan terlebih beli atau
  terlebih jual
- **Lonjakan volum** — tangkap aktiviti luar biasa yang belum ditindak balas
  oleh harga
- **Dagangan baharu** — mencetus atas pengisian baharu daripada akaun tersambung
- **Aktiviti dan baki dompet** — pantau alamat atas rantaian, diulas dalam
  [catatan dompet kami](/ms/blog/wallets-on-the-canvas)

Seperti biasa: terangkan peraturan dalam satu ayat dan biarkan AI merangka bot
itu, atau sambungkannya secara visual dan laraskan setiap parameter sendiri.

## Isyarat pergi ke tempat anda bekerja

Dahulu isyarat bot sampai ke peti masuk dan widget anda. Dua destinasi baharu
mengubah kegunaan bot:

- **Webhook** — POST setiap isyarat ke URL yang anda namakan. Itu Discord, Slack
  atau Telegram melalui URL webhook mereka, atau pelayan anda sendiri. Bot anda
  menjadi pengeluar yang boleh diguna oleh mana-mana sistem.
- **Pangkalan data anda** — tambahkan setiap isyarat sebagai baris ke salah satu
  pangkalan data tersambung anda. Biarkan bot berjalan selama sebulan dan anda
  mempunyai log setiap cetusan yang boleh dikueri, sedia untuk dicartakan oleh
  widget.

Penghantaran ialah satu set, bukan satu pilihan — satu bot boleh memberitahu
anda, mengemas kini widget anda, mengping Discord dan menulis baris itu,
semuanya daripada cetusan yang sama.

## Bot saya dan Cipta, akhirnya terpisah

Panel bot kini memisahkan **Bot saya** — armada anda yang sedang berjalan,
dengan status sepintas lalu — daripada **Cipta**, tempat bot baharu terbentuk.
Borangnya sendiri menjadi lebih ringan: bahagian pilihan kekal terlipat sehingga
anda memerlukannya, jadi amaran ambang yang mudah mengambil beberapa saat sahaja
manakala kedalaman penuh kekal satu klik sahaja jauhnya.

## Draf bermula selamat

Satu perincian yang disengajakan: apabila AI merangka bot untuk anda, sink
webhooknya bermula **kosong**. Automasi yang dijana tidak pernah dihantar dengan
destinasi yang anda tidak taip sendiri — anda yang menentukan ke mana isyarat
pergi, secara eksplisit, setiap kali.

[Lancarkan Nexow](https://x.nexow.ai), buka Bot, dan beri amaran anda yang
seterusnya tempat mendarat yang lebih baik daripada peti masuk.
