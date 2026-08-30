---
title: 'Bir trading cockpit\'in anatomisi: bir ekran, sekiz widget ve her birini ne besliyor'
description: 'Referans masa karo karo sökülmüş — her widget nedir, hangi bağlantı besliyor, hangi kablolar bir arada tutuyor ve sekme kapalıyken ne çalışmaya devam ediyor. Release note\'dan çok harita.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/cockpit-teardown.svg
tags: ['söküm', 'çalışma alanı', 'kripto']
category: teardown
---

Burada yayımladığımız çoğu şey bir release note: bir şey çıktı, işte ne yapıyor.
Bu yazı farklı türden. Aşağıdaki hiçbir şey yeni değil. Ayrı ayrı gönderdiğimiz
parçaların gerçekte nasıl bir araya geldiğini görmeniz için sökülmüş, bitmiş bir
ekran.

Masa bir kripto cockpit — bir ekranda sekiz widget, her yerde anahtar yok,
herkese açık piyasa verisiyle kurulmuş. Hiçbir şeyi özel değil. Mesele bu: her
parça, tarif ederek yeniden kurabileceğiniz bir şey.

## Ekran

![Bir ila sekiz arası numaralandırılmış sekiz widget karosu olan bir ekran](../../../assets/blog/anatomy-of-a-trading-cockpit-fig1.svg "Tüm masa. Bir ekran, sekiz widget, serbest tuvalde yerleştirilmiş — numaralar aşağıdaki listeye karşılık gelir.")

1. **Mum grafikleri.** Çapa karo. Bir sembol, bir aralık, canlı son mum. Ekrandaki
   diğer her şey ya onu besler ya onu takip eder.
2. **Emir defteri derinliği.** Bid ve ask\'ler üst üste çubuklar halinde; ince bir
   defter çıkarım değil görünür olsun.
3. **Watchlist.** Bir avuç sembol, biri seçili. Bu karo ekranın direksiyonu — aşağıda
   daha fazlası.
4. **Cüzdan bakiyeleri.** Herkese açık adres, salt okunur, cüzdan bağlantısıyla.
   İmza yok, anahtar yok, onaylanacak bir şey yok.
5. **Funding oranları.** Son birkaç pencerede perp funding, sıfır çizgisinin iki
   yanında pozitif ve negatif.
6. **Heatmap.** Watchlist ile aynı evren, boyutlu ve gölgeli — okumak değil bakmak
   için.
7. **Tahmin piyasaları.** Kalabalığın fiyatladığı, emir defterinin fiyatladığının
   yanında. İlginç olan ikisinin ayrışması.
8. **Uyarı gelen kutusu.** Günün çoğu boş. Sekme kapalıyken de çalışan bir bot
   doldurur.

**Ekran** widget\'ların bir düzenlemesidir. **Workspace** birkaç tanesini tutar.
Tuval serbest — istediğiniz yere koyarsınız, gruplar karoları mozaik veya sekmelere
istifleyebilir — ama sonsuz düzlem değil, kaybolacağınız; kenarları olan bir tuval.

## Bir karoyu en alta kadar izleyin

O ekrandaki her karonun altında aynı dört katman var. Watchlist\'i alın:

![Soldan sağa bir yol: bir bağlantı üretilmiş kodu besler, kod kesikli sandbox sınırı içinde widget render eder, bir kablo değeri grafiğe taşır](../../../assets/blog/anatomy-of-a-trading-cockpit-fig2.svg "Bir karo, yukarıdan aşağı: bağlantı, üretilmiş kod, çalışan widget ve değer çıkaran kablo.")

1. **Bir bağlantı.** 90 canlı connector\'dan biri — burada kimlik bilgisi gerektirmeyen
   herkese açık piyasa verisi. Bağlantılar envanterdir, yapılandırma değil: birini
   widget\'a eklersiniz ve widget nasıl kullanacağını bilerek yeniden kurulur.
2. **Üretilmiş kod.** Bir watchlist tarif ettiniz; bir build bir tane yazdı. Sürüm
   geçmişi var ve onu üreten konuşmanın her turunu okuyabilirsiniz.
3. **Çalışan widget.** Sandbox\'ta çalışır. Yanlış davranan bir widget kendi karosunu
   mahveder, ekrandaki başka hiçbir şeyi değil — okumadığınız yazılımı çalıştırmanın
   makul olmasının tek nedeni bu.
4. **Dışarı kablo.** Bir satıra tıkladığınızda karo emit eder. Tek başına hiçbir
   yere gitmez. Bunu sekiz ayrı karo yerine cockpit yapan sonraki kısımdır.

## Bir arada tutan kablolama, kod değil

![Watchlist ile grafik arasında çift yönlü kablo, emir defteri ve funding karolarına tek yönlü kablolar ve soldan ekli bağlantı, bot ve agent ile aynı sekiz numaralı widget grafiği](../../../assets/blog/anatomy-of-a-trading-cockpit-fig3.svg "Aynı sekiz karo graf olarak. Düz çizgiler widget\'lar arası kablolar; kesikli çizgiler envanterinizin geri kalanından ekler.")

Tek *wire* kelimesinin arkasında iki mekanizma var; ayrım diyagramda düz ve kesikli
olarak görünür:

- **Widget\'tan widget\'a** bir **glue link** — gerçek üretilmiş kod, kendi sürüm
  geçmişi, kendi gizli runtime\'ında çalışır, bir karonun emit ettiğini diğerinin
  beklediğine map eder. Watchlist ile grafik arasındaki yay çift yönlü: sembolü
  ikisinden birinde değiştirin, ikisi de takip eder. Çift yönlü kablolar yardım
  olmadan sonsuza echo eder; teslim edilen değer hatırlanır, özdeş geri sekme bir
  kez düşürülür.
- **Widget\'tan bağlantı, bot veya agent\'a** bir **attachment** — rebuild\'in bu
  widget\'ın *kendi* koduna ne öğrettiğinin kaydı. Bunlar kesikli çizgiler. Otomatik
  değil kademeli — arka arkaya beş kaynağa göz atmak beş rebuild değil bir rebuild
  tutar.

Bu ekranda kablolama kasıtlı olarak ince: watchlist grafiği her iki yönde sürükler,
emir defteri ve funding karosunu tek yönde. Üç kablo. Heatmap için dördüncüsünü
eklemek cazip geldi ve yanlıştı — bakmadığınızda değişen karo, güvenmeyi bıraktığınız
karodur.

Kablo düzenleyicisinde tam bunun için **Test it** çubuğu var. Bir topic ve değer
seçin, hangi uç emit ediyormuş gibi davranacağını seçin, gerçek runtime\'dan gerçek
bir olay gönderin. Karar *bu kablo çalışmıyor* ile *çalıştı ama o topic için hiçbir
şey iletmedi* ile *iletti ama alacak widget ekranda değil* arasında ayrım yapar.
Bu yokken kırık kablo ve başka ekrana giden kablo aynı görünürdü: hiçbir şey olmazdı.

## Sekme kapalıyken ne çalışmaya devam eder

Karo 8 olağan anlamda widget olan tek değil. Bir gelen kutusu ve onu dolduran bir
**bot**.

Bot\'lar kasıtlı olarak gösterişsiz — sabit bir işlemci kataloğu (threshold, change,
crossover, RSI, volume spike, digest, new trade, wallet activity, wallet balance)
tam üç tür şey üzerinde: piyasa mumları, broker hesabı, herkese açık cüzdan adresi.
Döngüde model yok — tam da bir ay bırakabilmenizin nedeni bu. Biri tetiklenince
aynı anda dört yere yayılır: uyarı gelen kutusu, widget bus (karo 8 canlı güncellenir),
webhook ve bağlı veritabanı.

**Agent\'lar** diğer yarı, zıt biçim: genel amaçlı, web araması, sosyal, piyasa
verisi, veritabanları, bellek ve daha fazlası için araç başına grant, manuel veya
15 dakikadan günlüğe tetikleyici. Soru *«gece boyunca ne oldu özetle»* iken agent,
*«şu bunu geçince söyle»* değil. İkisi de karo 8\'i besler; yalnızca biri gözetimsiz
bırakmak ucuz.

## Bu ekranın kasıtlı olarak yapmadıkları

İşlem yapmaz. Burada hiçbir şey emir vermez — ayrı grant, ayrı connector; heatmap\'e
göz attığınız aynı ekrana koymak kaza yoludur.

Anahtar tutmaz. Her kaynak herkese açık: mumlar, derinlik, funding, tahmin piyasaları,
salt okunur adres. Sonradan bir şey iptal etmeden başkasına verebileceğiniz masa,
iki ekstra karolu masadan değerlidir.

Ve bitmiş değil — ekranların ulaştığı bir durum bu değil. Bu sökümün dürüst hali:
yukarıdaki düzen dördüncü; ilk üçünde daha fazla karo vardı, daha az anlatıyordu.

[Nexow\'u başlatın](https://x.nexow.ai) ve ilk karoyu tarif edin. Diğer yedi daha
kolay.
