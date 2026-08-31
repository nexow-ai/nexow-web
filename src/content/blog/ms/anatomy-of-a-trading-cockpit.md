---
title: 'Anatomi cockpit dagangan: satu skrin, lapan widget dan apa yang menyuap setiap satu'
description: 'Meja rujukan dibongkar jubin demi jubin — apa setiap widget, sambungan mana yang menyuapnya, wayar mana yang mengikatnya, dan apa yang terus berjalan bila tab ditutup. Kurang nota keluaran, lebih peta.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['bongkaran', 'ruang kerja', 'kripto']
category: teardown
---

Kebanyakan catatan di sini ialah nota keluaran: sesuatu dilancarkan, inilah
fungsinya. Catatan ini berbeza. Tiada apa di bawah yang baharu. Ia satu skrin
siap, dibongkar, supaya anda nampak bagaimana bahagian yang kami hantar
berasingan sebenarnya bersatu.

Meja ini ialah crypto cockpit — lapan widget pada satu skrin, dibina daripada
data pasaran awam, tiada kunci di mana-mana. Tiada yang istimewa padanya. Itu
titiknya: setiap bahagian boleh anda bina semula dengan menerangkannya.

## Skrin

![Skrin dengan lapan jubin widget, setiap satu ditandakan nombor satu hingga lapan](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "Keseluruhan meja. Satu skrin, lapan widget, disusun pada kanvas bebas — nombor merujuk senarai di bawah.")

1. **Lilin.** Jubin sauh. Satu simbol, satu selang, lilin terakhir langsung.
   Semua yang lain pada skrin sama ada menyuapnya atau mengikutnya.
2. **Kedalaman order book.** Bids dan asks sebagai bar bertindan, supaya buku
   nipis kelihatan, bukan disimpulkan.
3. **Watchlist.** Segelintir simbol, satu dipilih. Jubin ini ialah stereng
   skrin — lebih lanjut di bawah.
4. **Baki dompet.** Alamat awam, baca sahaja, melalui sambungan dompet. Tiada
   tandatangan, tiada kunci, tiada apa untuk diluluskan.
5. **Funding rates.** Funding perp merentasi beberapa tetingkap terakhir,
   positif dan negatif di kedua-dua sisi garis sifar.
6. **Heatmap.** Alam yang sama dengan watchlist, bersaiz dan berbayang, untuk
   imbasan bukan bacaan.
7. **Pasaran ramalan.** Apa yang dinilai orang ramai, bersebelahan apa yang
   dinilai order book. Yang menarik ialah apabila keduanya tidak sependapat.
8. **Peti amaran.** Kebanyakannya kosong sepanjang hari. Diisi oleh bot yang
   terus bekerja walaupun tab ditutup.

**Skrin** ialah satu susunan widget. **Workspace** memegang beberapa daripadanya.
Kanvas bebas — anda letakkan di mana mahu, dan kumpulan boleh tindan jubin
menjadi mozek atau tab — tetapi ia kanvas berbingkai, bukan bidang tak terhingga
yang anda sesat.

## Ikuti satu jubin hingga ke dasar

Setiap jubin pada skrin itu mempunyai empat lapisan yang sama di bawahnya.
Ambil watchlist:

![Laluan kiri ke kanan: sambungan menyuap kod dijana, kod merender widget dalam sempadan sandbox putus-putus, dan wayar membawa nilai ke carta](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Satu jubin, atas ke bawah: sambungan, kod dijana, widget berjalan, dan wayar yang membawa nilai keluar daripadanya.")

1. **Sambungan.** Salah satu daripada 90 penyambung langsung — di sini, data
   pasaran awam, yang tidak perlukan kelayakan langsung. Sambungan ialah
   inventori, bukan konfigurasi: anda lampirkan satu pada widget dan widget
   dibina semula mengetahui cara menggunakannya.
2. **Kod dijana.** Anda terangkan watchlist; satu build menulisnya. Ia ada
   sejarah versi, dan anda boleh baca setiap giliran perbualan yang
   menghasilkannya.
3. **Widget berjalan.** Ia dilaksanakan dalam sandbox. Widget yang berkelakuan
   buruk merosakkan jubin sendiri dan tiada yang lain pada skrin — sebab
   tunggal mengapa masuk akal menjalankan perisian yang anda tidak baca.
4. **Wayar keluar.** Jubin memancarkan apabila anda klik baris. Sendiri ia
   tidak pergi ke mana-mana. Apa yang menjadikannya cockpit bukan lapan jubin
   berasingan ialah bahagian seterusnya.

## Yang memegangnya bersama ialah wayar, bukan kod

![Graf lapan widget bernombor yang sama, dengan wayar dua hala antara watchlist dan carta, wayar sehala ke jubin order book dan funding, serta sambungan, bot dan agent dilampirkan dari kiri](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Lapan jubin yang sama sebagai graf. Garis pepejal ialah wayar antara widget; garis putus-putus ialah lampiran daripada baki inventori anda.")

Dua mekanisme berada di sebalik satu perkataan *wayar*, dan perbezaannya
kelihatan pada rajah sebagai pepejal berbanding putus-putus:

- **Widget ke widget** ialah **glue link** — kod dijana sebenar, dengan sejarah
  versi sendiri, berjalan dalam runtime tersembunyi sendiri, memetakan apa yang
  satu jubin pancarkan ke apa yang dijangka oleh yang lain. Lengkung antara
  watchlist dan carta dua hala: tukar simbol di mana-mana dan kedua-duanya
  ikut. Wayar dua hala akan bergema selama-lamanya tanpa bantuan, jadi nilai
  yang dihantar diingati dan pantulan identik dibuang sekali.
- **Widget ke sambungan, bot atau agent** ialah **attachment** — rekod apa yang
  rebuild ajar *kod sendiri* widget untuk lakukan. Itu garis putus-putus.
  Berperingkat bukan automatik, jadi melayari lima sumber berturut-turut
  kos satu rebuild, bukan lima.

Pada skrin ini wayar sengaja nipis: watchlist memacu carta dua hala, dan order
book serta jubin funding sehala. Tiga wayar. Menambah keempat untuk heatmap
menggoda dan salah — jubin yang berubah apabila anda tidak melihatnya ialah
jubin yang anda berhenti percaya.

Editor wayar ada bar **Uji** untuk ini. Pilih topik dan nilai, pilih hujung
mana yang pura-pura memancar, dan hantar peristiwa sebenar melalui runtime
sebenar. Verdict membezakan *wayar ini tidak berjalan* daripada *ia berjalan
tetapi tidak meneruskan apa-apa untuk topik itu* daripada *diteruskan, tetapi
widget itu tidak pada skrin untuk menerima*. Sebelum ini wujud, wayar rosak dan
wayar ke skrin lain kelihatan sama: tiada apa berlaku.

## Apa yang terus berjalan bila tab ditutup

Jubin 8 ialah satu-satunya yang bukan widget dalam erti biasa. Ia peti masuk,
dan yang mengisinya ialah **bot**.

Bot sengaja tidak glamor — katalog tetap pemproses (threshold, change,
crossover, RSI, volume spike, digest, new trade, wallet activity, wallet
balance) merentasi tepat tiga jenis: lilin pasaran, akaun broker, alamat
dompet awam. Tiada model dalam gelung, sebab tepat mengapa anda boleh biarkan
satu berjalan sebulan. Apabila satu meletup, ia diedarkan ke empat tempat
serentak: peti amaran, widget bus (supaya jubin 8 kemas kini langsung), webhook,
dan pangkalan data bersambung.

**Agents** separuh lagi, dan bentuk bertentangan: tujuan umum, dengan grant
per-alat untuk carian web, sosial, data pasaran, pangkalan data, memori dan
lagi, pada pencetus manual atau 15 minit hingga harian. Agent ialah apa yang
anda capai bila soalannya *«ringkaskan apa yang berlaku semalaman»* bukan
*«beritahu bila ini melintasi itu»*. Kedua-duanya menyuap jubin 8; hanya satu
murah dibiarkan tanpa pengawasan.

## Apa yang skrin ini sengaja tidak lakukan

Ia tidak berdagang. Tiada apa di sini meletakkan pesanan — itu grant berasingan,
pada penyambung berasingan, dan meletakkannya pada skrin yang sama dengan
heatmap yang anda imbas ialah cara kemalangan berlaku.

Ia tidak menyimpan kunci. Setiap sumber awam: lilin, depth, funding, pasaran
ramalan, alamat baca sahaja. Meja yang boleh anda serahkan kepada orang lain
tanpa membatalkan apa-apa selepasnya lebih bernilai daripada meja dengan dua
jubin extra.

Dan ia tidak siap, kerana itu bukan keadaan yang dicapai skrin. Versi jujur
bongkaran ini ialah susun atur di atas ialah yang keempat; tiga pertama ada
lebih banyak jubin dan memberitahu kurang.

[Lancarkan Nexow](https://x.nexow.ai) dan terangkan jubin pertama. Tujuh yang
lain lebih mudah.
