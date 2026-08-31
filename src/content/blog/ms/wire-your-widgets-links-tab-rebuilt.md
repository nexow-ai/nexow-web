---
title: 'Wayar widget anda: satu permukaan, satu ayat dan butang Uji'
description: 'Semua yang widget boleh diwayar kini di belakang satu kotak carian — widget lain, sambungan, bot dan agent. Terangkan wayar dalam bahasa biasa, dan tembak peristiwa sebenar untuk ketahui hujung mana rosak.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['produk', 'widgets', 'automasi']
---

**Link** membawa peristiwa antara dua widget: tukar simbol dalam satu dan yang
lain bertindak balas. Hidupkan Two-way dan mereka kekal sync dua hala. Perbezaan
antara skrin penuh jubin berasingan dan skrin yang berkelakuan seperti satu
instrumen.

Ideanya baik. Mencarinya tidak, dan mengetahui ia berfungsi juga tidak. Kedua-dua
dibetulkan dalam keluaran ini.

## Satu permukaan, dan «All» benar-benar maksudkan semua

Picker dahulu split dua sub-tab — *Widgets* dan *Sources* — bermakna separuh
inventori sentiasa tersembunyi di belakang toggle yang perlu anda tahu tekan.
Widget sendirian pada skrinnya tunjuk grid kosong, tanpa petunjuk bot, agent dan
sambungan wujud langsung.

Kini satu kotak carian dan satu baris penapis jenis atas semuanya: widget lain
pada skrin ini, dalam workspace ini atau di tempat lain; sambungan data anda;
bot anda; agent anda. **All** tunjuk semuanya.

Susunan juga berubah. **My wiring** kini *di atas* permukaan layar. Dahulu di
bawah grid picker yang boleh puluhan jubin — senarai yang anda kembali urus,
disable, buang, perlu scroll lalu semua, sementara picker untuk tambah baru
menyapa setiap kali.

Pembetulan jujur kecil: keadaan kosong kini tunggu store bot dan agent jawab
sebelum kata tiada apa untuk wayar, tunjuk **Looking…** sementara itu, dan setiap
chip penapis ada count sendiri. Grid kosong «masih loading» ialah pembohongan
antara muka kerap kata.

## Dua mekanisme, satu soalan

Di belakang picker tunggal dua perkara benar berbeza:

- **Widget lain** → **glue link** dijana AI. Kod sebenar, sejarah versi sendiri,
  berjalan runtime tersembunyi sendiri, memetakan A pancar → B jangka.
- **Sambungan, bot atau agent** → **attachment** ringan, rekod apa rebuild ajar
  *kod sendiri* widget ini lakukan. Berperingkat bukan automatik — layari lima
  sumber berturut kos satu rebuild, bukan lima.

Tahu yang mana sebelum boleh kata apa mahu berlaku — soalan pertama buruk.
Tab Links kini buka dengan composer: **describe the wiring**.

> *«Sync the symbol both ways with the chart.»*
> *«When I click a row here, filter the other widget.»*
> *«Show my price-alert bot's signals in this widget.»*

Perancang baca inventori sama picker tunjuk dan resolve mekanisme dan counterpart
— «the price bot» jadi id. Ia **resolves only**; tidak pernah generate. Codegen
streaming mahal masih berjalan di tempat biasa, dengan Stop sendiri dan sejarah
versi sendiri.

Lebih suka tunjuk sendiri — picker masih buat, dan kini tanda sudah diwayar,
jadi pilih kedua baca *«already linked»* bukannya ulang senyap pertama. Pilih
lagi kemas kini wiring sedia ada, badge kata **before** bayar rebuild.

## «Test it»: hujung mana sebenarnya rosak?

Sehingga keluaran ini link write-only. Anda terangkan, bayar codegen, tinggalkan
editor dan sentuh widget sebenar ketahui ada apa berlaku. Bila tiada — tiada cara
kata *bahagian* mana salah: widget tidak pancar, link tidak map, widget lain tidak
dengar.

Editor ada bar **Test it**. Pilih topik dan nilai, pilih hujung mana pura-pura
pancar (ditawarkan hanya pada link two-way — one-way sentiasa lapor tiada dari
jauh), hantar. Peristiwa masuk runtime sebenar link dan jalankan `connect(ctx)`
dijana — bukan simulasi — verdict bezakan setiap cara kosong:

- **This link isn't running.** Hidupkan — atau belum ada kod.
- **It ran but forwarded nothing for that topic.** Mapping salah; tab Logs ada
  detail.
- **Sent "symbol" on to Chart.** Berfungsi.
- **Forwarded, but that widget isn't on screen to receive it.** Bukan bug — hujung
  lain pada skrin lain.

Ujian kekal dalam senarai bukannya lontar ke tempat lain; recorder armed hanya
semasa bar pada skrin — link forward tick stream tidak bayar instrumentation.

## Yang senyap

Link two-way bergema selama-lamanya tanpa bantuan — nilai dihantar diingati,
pantulan identik dibuang sekali — gelung cermin kanonikal A↔B putus, nilai baru
sebenar masih lalu. Link dan attachment replicate merentasi tab dan peranti bukan
hidup dalam satu — padam di tempat lain tunjuk keadaan **gone** dalam editor
bukannya biar save ke nothing. Rebuild gagal — kata dan tunjuk tab Builder,
bukan spinner tempat jawapan patut.

Satu lagi perubahan dalam perjalanan: app dinamakan semula sekitar perkataan
orang sudah guna. *Link* jadi **wire**, *My wiring* kekal tepat di situ.

[Lancarkan Nexow](https://x.nexow.ai), buka tab Links mana-mana widget, dan
terangkan apa patut berlaku bila klik sesuatu. Kemudian uji sebelum pergi.
