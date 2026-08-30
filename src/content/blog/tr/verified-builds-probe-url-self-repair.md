---
title: 'Kendi tesisatını kontrol eden widget\'lar: probe_url, bir verifier agent ve bir ücretsiz onarım'
description: 'Ölü widget\'ların en büyük kaynağı hayali bir API\'ye yazılmış koddur. Artık builder yazarken endpoint\'i çeker, verifier atladıklarını yeniden probe eder ve ilk 45 saniyedeki crash bir otomatik düzeltme satın alır.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/verify.svg
tags: ['ürün', 'yapay zeka', 'nasıl çalışır']
---

Üretilmiş bir widget\'ın başarısız olmasının en yaygın yolu üretilmiş kodda bug
değildi. Hiç var olmamış bir endpoint\'ti.

Model bellekten bir URL aldı — veya linki *dokümantasyon sayfası* olan, endpoint
olmayan bir directory satırından — yanıt şeklini tahmin etti, o tahmine karşı
özenli parsing kodu yazdı ve gönderdi. Sonsuz spinner veya boş grafik aldınız;
ekranda nedenini söyleyen hiçbir şey yoktu.

Bu sürüm döngüyü üç kez kapatır: model yazarken, yazdıktan hemen sonra ve hâlâ
önünüzde crash olursa bir kez daha.

## Yazarken: `probe_url`

Builder\'ın artık **şimdi herkese açık anahtarsız bir endpoint\'e GET yapan** bir
aracı var; runtime\'da `ctx.data.http()`\'nin kullandığı aynı sunucu proxy\'si
üzerinden gerçek HTTP durumunu ve gerçek yanıt gövdesini döndürür.

Kimlik bütün mesele bu. Başarılı probe *başarılı bir runtime çağrısıdır*. Başarısız
probe kırık gönderilecek widget\'dır — ve canvas\'ınızda değil, düzeltmek için
hâlâ tur varken şimdi başarısız olur.

Builder\'a hafızadan akıl yürütmek yerine tırmanması söylenen merdivenin dibinde
durur: önce venue reference docs, sonra **47 kategoride 691 anahtarsız herkese açık
API\'den oluşan directory**, her girişin adı *ve* açıklamasında konuya göre
aranabilir — çünkü gerçek istekler («tide times», «air quality») nadiren tahmin
edilecek kategoriye oturur. Bu directory artık builder\'a her zaman açık, kapsam
ne olursa olsun; evrensel anahtarsız fallback. Linkleri dokümantasyon; son adım
her zaman aynı: endpoint türet, sonra probe et.

«X için veri var mı?» sorusu akıl yürüterek değil bakarak yanıtlanır. Merdivenin
sonuna gelip gerçekten kontrol ettikten sonra *hayır* demek iyi sonuçtur. Bellekten
iddia etmek değil; hissettiğinizden çok daha sık yanlıştı.

## Yazdıktan hemen sonra: verifier

Modele kendi işini doğrulamasını istemek taleptir, garanti değil. Widget kodu
indiği anda modele bağlı olmayan iki şey olur.

Birincisi, tool sonucu **bu turda hiç probe etmediği endpoint\'leri adlandırır**
ve tur kaldıkça gidip kontrol etmesini söyler.

İkincisi — iş birliğine dayanmayan kısım — verifier **model özetini yazarken
eşzamanlı** çalışır ve işi kendisi yapar:

- **Modül lint** — yapı gereği sessiz hata sınıfları için. Eksik `render` export.
  Parse olmayan kod. Sandbox\'ın engellediği üçüncü taraf host\'a ham `fetch` veya
  `WebSocket` — üretilmiş widget\'larda en zararlı sessiz hata, konsolda hiçbir şey
  görünmez. `src`\'ye doğrudan atanmış harici görüntü veya video URL\'si. Harita
  kütüphanesine verilen hard-coded tile URL\'si; mount ve pan mükemmel, her tile
  isteği sessizce reddedilir.
- **Modelin atladığı her endpoint\'i probe et** (modül başına beşe kadar), kararı
  model gibi oku: erişilemez veya URL ya da parametrelerin yanlış olduğunu söyleyen
  4xx.

Gerçek sorunlar **bir otomatik in-turn onarım turu** satın alır; probe çıktısı
kanıt olarak eklenir, yalnızca adlandırılanı düzelt talimatı verilir. Tur build\'in
tam bağlamı hâlâ sıcakken — kırık gönderip sonra bütün tur harcamaktan çok daha
ucuz. Model modülü yarı yolda yeniden yazarsa, çalışan doğrulama geçersiz kalır,
karar atılır. İçten başarısız verifier temiz doğrular: build\'i geciktirebilir,
asla kırmaz.

## Hâlâ crash olursa: bir onarım, sıkı sınırlı

Self-repair bağlamı runtime hatalarını zaten *sonraki* chat turuna besliyordu —
ama yalnızca siz bir tane gönderdiğinizde. Build\'den saniyeler sonra crash olan
widget, fark edip composer\'ı yeniden açıp «it's broken» yazana kadar kırık kalırdı.

Runtime host artık taze build crash olunca **bir otomatik düzeltme turu** harcar.
Otomatik tur uygulamanın kredinizi veya anahtarınızı harcamasıdır; sınırlar kasıtlı
sıkı:

- yalnızca AI build\'in *az önce* ürettiği sürüm — geri yüklediğiniz eski sürümde
  veya elle düzenlediğiniz kodda crash asla uygun değil;
- yalnızca o build\'in **45 saniyesi** içinde; bir saat sonra crash sizin için yeni
  bilgi, bariz build kusuru değil;
- **sürüm başına bir kez**; auto-repair turunun *ürettiği* sürümün kendisi uygun
  değil. Bir build en fazla bir otomatik takip tetikler — modelin kendini ödeyerek
  başarısız kalmaya devam ettiği zincir asla.

Onarım turu uygulamanın kusur bildirdiği şekilde yazılır; aynı talimat: hata veri
endpoint\'i içeriyorsa, yeniden yazmadan önce probe et. Düzelt, çalışanı koru,
widget kapsamını büyütme.

Sunucu tarafında kurtarılan arka plan build\'i, aynı widget\'ın başka turu zaten
canlıyken bekler; yinelenen sürüme yarış etmez.

## Aynı döngü, her modda

Bütünü tek paylaşılan modülde; platform build\'leri, tarayıcıdaki bring-your-own-key
build\'leri ve sunucu tarafı build taraması **özdeş** davranış alır — aynı araçlar,
probe biçimi, verifier, onarım bütçesi. Modlar hangi araçların var olduğu veya
widget\'ın ne kadar sıkı kontrol edildiği konusunda ayrışamaz; yanıtın tek
implementasyonu var. [On örnek widget](/blog/starter-widgets-examples-workspace)\'ı
sonraki sürümle gönderen de bu döngü: tam bununla, tam bu kontrollerle kuruldu.

Hiçbiri modeli doğru yapmaz. Yanlış olmayı hayatta kalınabilir ve genelde görünmez
kılar: endpoint kod bağımlı olmadan önce kontrol edilir; kontrol model istese de
istemese de çalışır; ilk crash size ulaşmadan önce bir dürüst düzeltme denemesi alır.

[Nexow\'u başlatın](https://x.nexow.ai) ve gizemli bir şey isteyin — tide times,
air quality, public holidays. Activity rail\'in parsing satırı yazmadan önce endpoint\'i
probe etmesini izleyin.
