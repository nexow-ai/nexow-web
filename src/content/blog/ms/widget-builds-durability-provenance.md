---
title: 'Pembinaan widget yang boleh anda percayai: binaan tahan lasak, versi yang jujur, lint dalam sembang'
description: 'Komposer kini punya memori dan hati nurani — binaan terselamat daripada putusan sambungan dan mencuba semula dengan bersih, setiap versi merekodkan asal usulnya, dan isu lint serta masa jalan mendarat dalam sembang, bukan konsol.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['produk', 'widget', 'ai']
---

Permintaan-ke-widget sentiasa menjadi bahagian yang bergaya. Keluaran ini
tentang separuh lagi janji itu yang kurang glamor: apa yang berlaku apabila
rangkaian terputus di tengah binaan, apabila penjanaan gagal, apabila anda mahu
tahu versi widget mana yang sebenarnya sedang anda lihat. Jawapannya, sekarang:
tiada apa yang hilang, dan tiada apa yang ditulis semula di belakang anda.

## Binaan yang terselamat tanpa anda

Binaan widget kini ialah **kerja tahan lasak**. Tutup komputer riba di tengah
penjanaan, hilang Wi-Fi, muat semula pada saat paling buruk — binaan itu
mengekalkan pajakannya di pelayan dan selesai tanpa anda. Jika sesuatu giliran
gagal, butang **Cuba semula** berada betul-betul di atasnya, dan ia berfungsi
walaupun selepas putusan sambungan meninggalkan keadaan yang pelik. Binaan basi
tidak lagi boleh menyekat komposer.

Kata-kata anda sama tahan lasak: permintaan yang belum dihantar dalam komposer
kekal bersama widget, jadi muat semula yang tersalah masa tidak menelan
perenggan yang anda hampir hantar.

## Versi dengan asal usul

Setiap versi widget kini merekodkan **dari mana ia datang** — permintaan,
pindaan, simpanan manual — dan suntingan mencipta versi baharu dan bukannya
menulis semula yang lama di tempatnya. Versi pertama setiap widget,
**genesisnya**, tidak pernah dipangkas: anda sentiasa boleh menatal kembali
kepada apa yang dihasilkan oleh permintaan yang paling pertama. Dan apabila cip
versi dalam sembang menunjuk kepada sejarah yang telah dipangkas, sembang itu
memberitahunya dan bukannya berpura-pura.

## Binaan memberitahu anda apa yang salah dengannya

Kod yang dijana diperiksa, dan penemuannya pergi ke tempat anda sudah memandang:
**isu lint dan masa jalan muncul pada gelembung sembang binaan**, sebagai
sebahagian daripada perbualan. Betulkannya dengan membalas — isu itu ialah
konteks yang sudah diketahui oleh giliran seterusnya.

Sandbox kekal ketat, malah menjadi lebih ketat: widget tidak boleh membuat
panggilan rangkaian terus — data datang melalui penyambung — dan aset yang boleh
dimuatkannya terikat kepada origin yang dikenali.

## Perbualan yang lebih kaya

Komposer kini menerima **lampiran** — jatuhkan imej ke dalam sembang untuk
menunjukkan kepada AI apa yang anda maksudkan — dan **sambungan yang
disematkan**, jadi perbualan widget sentiasa tahu sumber data mana yang menjadi
asas binaannya. Jika anda membina dengan kunci API anda sendiri, peranti lain
pada akaun anda melihat binaan sedang berjalan dan bukannya status sibuk yang
misteri.

Tiada satu pun daripada ini mengubah rasa membina: terangkan, perhatikan,
perhalusi. Ia mengubah sejauh mana anda boleh mempercayai apa yang terhasil.

[Lancarkan Nexow](https://x.nexow.ai) dan putuskan sambungan anda di tengah
binaan — kami akan menyelesaikannya tanpa anda.
