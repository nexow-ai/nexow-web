---
title: "İstemden canlı widget'a: Nexow bir cümleyi ticaret panolarına nasıl dönüştürüyor"
description: "Nexow'un, düz dil isteminden çalışan, veriye bağlı pazar widget'ı nasıl oluşturduğunun kapak altında bir görünüş — codegen, sandbox ve canlı bağlayıcılar açıklanmıştır."
pubDate: 2026-06-24
heroImage: ../../../assets/blog/codegen.svg
tags: ['ürün', 'yapay zeka', 'nasıl çalışır']
---

Bir ticaret panosu inşa etmek her zaman aynı çalışma anlamına geldi: bir API bulun, doçları okuyun, websocket ile kavga edin, yükleme normalleştirin, grafik kitaplığı seçin, düzen ile dövüşün ve önemsediğiniz her enstrüman için tekrarlayın. Nexow tüm döngüyü bir cümlede ezilir.

İstem yazma ve canlı widget'ınızı tuvalinizde gösterme arasında gerçekte olan şey.

## 1. Görmek istediğinizi tanımlayın

İstem sadece doğal dildir:

> Coinbase'den 20 ve 50 EMA ve altında bir RSI paneli ile BTC-USD mum grafiği gösterin.

Öğrenilecek şema ve yapılandırma dosyası yok. Sonucu açıklarsınız — enstrüman, mekan, göstergeler, düzen — bir meslektaşa nasıl tanımlayacağınız gibi.

## 2. Nexow, widget'ın kaynağını oluşturur

Nexow istemini Anthropic SDK aracılığıyla Anthropic'in Claude modellerine gönderir, ihtiyaç duyduğu bağlamla birlikte: hangi bağlayıcılar mevcuttur, döndürdükleri verilerin şekli ve bir widget'ın karşılaması gereken çalışma zamanı sözleşmesi. Claude, widget'ın gerçek kaynak kodunu yazar — getir mantığı, dönüşümleri ve oluşturmayı.

Model sabit bir şablonu doldurma yerine gerçek kod yazıldığından, oluşturabileceğiniz şeyin kapsamı açık uçludur: sipariş defteri derinlik grafikleri, finansman oranı haritaları, korelasyon matrisleri, özel sinyaller, düz tablolar. Bunu tanımlayabilirseniz, Nexow genellikle inşa edebilir.

## 3. Widget kumluk içinde çalışır

Oluşturulan kod güçlüdür, bu nedenle katı sınır arkasında çalışır. Her widget izole bir iframe içinde yürütülür: UI'ı render edebilir ve ihtiyaç duyduğu verileri getirebilir, ancak çalışma alanınıza ulaşamaz, diğer widget'ları okuyamaz veya verilmemiş hiçbir şeye dokunmuyor. Risiko olmadan güç.

## 4. Canlı veriler bağlayıcılar aracılığıyla akar

Bir widget yalnızca gerçek verilerle faydalıdır. Nexow, FX, kripto, hisse senetleri, vadeli işlemler, seçenekler ve tahmin pazarlarında 20'den fazla takılabilir bağlayıcı gönderir — OANDA, Binance, Coinbase, Kraken, Interactive Brokers, Polygon, Kalshi, Polymarket ve daha fazlası. Widget, adlandırdığınız mekanla ilgili sorunlara abone olur ve fiyatlar, sipariş defterleri ve referans veriler doğrudan akar.

Mekanın CORS politikası izin verdiğinde, bu çağrılar **doğrudan tarayıcınızdan** çalışır ve sunucularımızdan geçmez — bu da gecikmeyi düşük tutar ve kimlik bilgilerinizi makinenizde tutar.

## 5. Bunu düz dilde iyileştirirsiniz

İlk nesil nadiren son nesldir. Her şey konuşma tarafından düzenlenebilir kalır: *"200 EMA ekle"*, *"log ölçeğine geç"*, *"mumları finansman oranına göre renklendirin."* Nexow widget'ı yerinde yeniden yazar, değişimi sürümler ve inceleyebileceğiniz veya geri alabilileceğiniz bir günlük tutar.

## Bunun neden önemli olduğu

Fikirden grafiğe giden geleneksel yol saatler cinsinden ölçülür. Nexow ile saniyeler cinsinden ölçülür ve aldığınız yapı gerçek, denetlenebilir bir widget'tır — kara kutu değildir. Pano kendi kendini bir araya getirir ve kod, veriler ve anahtarlar üzerinde kontrol sahibi kalırsınız.

Denemek için hazır mısınız? [Uygulamayı başlatın](https://x.nexow.ai) ve ilk widget'ınızı tanımlayın.