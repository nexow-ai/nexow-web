---
title: 'Panonuzu kaydedin, kamera balonuyla birlikte'
description: 'Ekran kaydı araç çubuğuna girdi: tuvalinizden on dakikaya kadar kayıt, web kameranız sürüklenebilir bir balon olarak içine yerleştirilmiş hâlde, yüzen bir denetim çubuğuyla ve durduğunuzda verilecek bir kararla — kaydet, paylaş ya da yayımla.'
pubDate: 2026-08-07
heroImage: ../../../assets/blog/recorder.svg
tags: ['ürün', 'kayıt', 'topluluk']
---

Güzel bir şey kurup göstermek istersiniz — hareket hâlinde, ekran görüntüsü olarak değil.
Şimdiye kadar bu, uygulamadan çıkmak, ayrı bir kayıt programı bulmak, bir tarayıcı
penceresini kadraja almak ve sonucun izlenebilir olmasını ummak demekti. Artık araç
çubuğunda bir düğme.

**Panoyu yakala** iki şey sunar: kaydetmeden önce kırpılabilen bir **ekran görüntüsü** ya
da **video kaydet** — tuvaliniz, canlı olarak, siz durdurana ya da on dakikaya ulaşana dek.

## Kadraja ne girecek

Başlamadan önce karara bağlanan üç anahtar:

- **Kamera balonu** — web kameranız, videoya daire olarak yerleştirilir
- **Mikrofon** — anlatımınız
- **Sekme sesi** — sayfanın kendi çaldığı ses

Kamera balonu bir köşeye çakılı değildir. **İstediğiniz yere sürükleyin**; bıraktığınız
yere en yakın köşeye, seçtiğiniz boyutta yapışır. Sonradan üzerine bindirilmiş bir katman
değil, videonun parçasıdır; yani kadraja aldığınız şey dosyanın içeriğidir.

Kayıt sırasında yüzen bir **denetim çubuğu** yoldan çekilir ve iş üstünde gerçekten
gereken dört şeyi yapar: duraklat ve sürdür, mikrofonu sustur, sekme sesini sustur, kamera
balonunu gizle ya da taşı — ve durdur. Bir sayaç boyunca çalışır ve on dakikalık tavana
yaklaşırken açıklamasız kesilmek yerine sizi uyarır.

## Sonra bir karar, indirme değil

Durdurduğunuzda kayıt, videoyla ve dört seçenekle bir gözden geçirme ekranında açılır:
**Kaydet**, **Paylaş**, **Yayımla**, **Sil**.

Yayımla onu topluluk akışına gönderir ve sınırı olan tek seçenek budur: on dakikalık bir
kayıt, akışın yüklemelerine izin verdiği boyutu aşabilir. Bu durumda Yayımla **devre dışı
kalır ve nedenini açıklar**, azami değeri belirterek; Kaydet ve Paylaş ise kullanılabilir
kalır, çünkü ikisi de o tavana yaklaşmaz. Size sayıyı söyleyen soluk bir düğme, yükleme
çubuğu dolduktan sonra başarısız olan bir düğmeden iyidir.

## Dosyayı iyi yapan gösterişsiz kısımlar

Bir ekran kaydedicinin işinin çoğu, düzgün çalışırken görünmez:

- **Görüntü, kamera balonu olmasa bile her zaman sabit boyutlu bir tuvale bindirilir.**
  Bir sekme yakalamasının çözünürlüğü pencereyi izler; dolayısıyla kayıt ortasında tek bir
  boyut değişikliği video kanalını yeniden pazarlığa açardı ve içinde çözünürlük değişimi
  olan dosyalar çoğu oynatıcıda bozuktur. Boyutu başlangıçta bir kez sabitlemek, çıktıyı
  tek ve temiz bir kodlamaya dönüştüren şeydir: 30 fps'de 1080p, tarayıcı yine de tam ekran
  bir kaynak verdiğinde 720p'ye inerek.
- **Kapsayıcı çalışma anında seçilir, varsayılmaz.** Firefox WebM kaydeder, Safari MP4
  kaydeder, Chromium ise sürümüne göre ikisini de çıkarmıştır. Kaydedici önce MP4 dener —
  sonrasında götüreceğiniz her yerde oynayan dosya odur —, gerekirse WebM'e iner ve dosyayı
  istenen biçime göre değil, tarayıcının gerçekten kullandığı biçime göre adlandırır.
- **Kareler, sayfadan bağımsız bir saatle üretilir.** Arka plandaki bir sekme animasyonu
  kısar ama sesi kısmaz; donmuş görüntü üzerine devam eden anlatım tam olarak böyle oluşur.
  Kayıt sırasında sekme gizliyse, gözden geçirme ekranı bunu sonradan keşfetmenize
  bırakmak yerine söyler.
- **Her kanal, her çıkış yolunda durdurulur** — başlatmanın ortasında yaşanan bir hata
  dahil. Yanık kalan bir kamera ışığı, sizi izliyormuş gibi görünen bir uygulamadır ve
  bunun kabul edilebilir bir sürümü yoktur.

Hatalar iki yönde de dürüsttür. Tarayıcının seçicisini kapatmak bir hata değildir ve sessiz
kalır: hiçbir şey paylaşmadınız, buna dair bir bildirim yalnızca gürültü olurdu. Ama hiç
görüntü göndermeyen bir kaynak, gri bir dikdörtgenin üzerine beş dakika konuşmanızdan önce
uyarır; videoyu hiç kodlayamayan bir tarayıcı da boş dosya üretmek yerine bunu söyler.

## Sırada: tek bir widget'ı kaydetmek

Bir sonraki güncellemeyle bunun daha küçük ve daha keskin sürümü geliyor: **widget'ın kendi
başlığındaki bir kamera düğmesi**, *yalnızca o widget'ı* kaydediyor — widget gövdesine
kırpılarak, böylece düğmenin durduğu başlık da denetim çubuğu da kadrajın dışında kalıyor.
Kayıt göstergesi siz kaydederken tam orada durabiliyor ve videoya girmiyor.

Region Capture üzerine kurulu; bu da bugün Chromium'un masaüstündeki bir yeteneği. Bu
yüzden düğme, sonradan özür dilemesi gerekecek bir şey sunmak yerine yalnızca gerçekten
karşılayabildiği yerde beliriyor. Widget'ı taşırsanız peşinden geliyor ve widget ekrandan
ayrılırsa temiz biçimde duruyor.

İkisi bir arada, "bakın ne kurdum" bir ekran görüntüsü artı bir paragraf olmaktan çıkıyor.

[Nexow'u açın](https://x.nexow.ai), araç çubuğunda **Panoyu yakala**'yı bulun ve tuvalinizi
kaydedin.
