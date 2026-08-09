---
title: 'Veri akışı yayımlayın: widget''ınızı anahtarınız olmadan çalıştırsınlar'
description: 'Binance ya da OANDA bağlantınız üzerine kurulmuş bir widget başka hiç kimsenin işine yaramıyordu. Artık yaptığı okumaların tam olarak kendisini, kendi profiliniz altında salt okunur ve önbellekli bir uç nokta olarak yayımlayabilirsiniz — anahtar paylaşmadan, açık bir vekil sunucu kurmadan.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/datafeeds.svg
tags: ['ürün', 'widget''lar', 'veri']
---

Paylaşmanın rahatsız edici bir boşluğu vardı. OANDA bağlantınız üzerine güzel bir FX
grafiği kuruyor, yayımlıyorsunuz ve onu ilk kuran kişi *Bu veriyi kullanmak için OANDA'yı
bağlayın* yazısını görüyor — bu, bir yabancıdan sırf bir grafiğe bakabilmek için aracı
kurum hesabı açmasını istemenin kibar yoludur. Canlı bir ekranda paylaşıldığında daha da
kötüydü: widget küçük bir görsele donuyordu.

Çözüm kimseye anahtarınızı ödünç vermek değil. Çözüm, **widget'ınızın gerçekten yaptığı
okumaları**, kendi uç noktaları hâlinde, kendi profiliniz altında yayımlamak:

```
GET /<kullanıcı-adı>/api/w/<widget>/<endpoint>?symbol=EUR_USD&interval=H1
```

Yayımlama penceresinden — *Salt okunur veri akışı yayımla* — açıyorsunuz ve kendi
bağlantısı olmayanlar, bağlanmaları istenmek yerine sizin akışınızı okuyor.

## Üç kural ve her biri bir ret

**Yalnızca paylaşması güvenli okumalar.** On üç veri yöntemi yayımlanabilir. Kalanı, her
biri kendi gerekçesiyle, engellidir: `account` ve `positions` da okumadır, ama bakiyenizi,
net değerinizi, kâr-zararınızı ve açık pozisyonlarınızı döndürür. `order` ve
`closePosition` para hareket ettirir. `upsert` ve `delete` veriyi yok eder. `scrape` her
çağrıda üçüncü bir tarafa fatura çıkarır. Yalın `http` ise zaten kimlik bilgisi taşımaz;
onu yayımlamak yalnızca üzerinde adınız yazan açık bir vekil sunucu kurardı.

**Yalnızca widget'ın gerçekten yaptığı çağrılar.** Widget'ınızın başarılı okumaları o
çalışırken kaydedilir ve yayımlama penceresi listeyi size gösterir — *Binance'ten mumlar —
BTCUSDT, 1h* — kabul ettiğiniz somut şey olarak. Hiç yayımlamadığınız bir parametreyi
isteyen ya da genişlettiğiniz kümenin dışında bir değer isteyen bir istek, herhangi bir şey
çözülmeden önce reddedilir. Bir URL'de işi olmayan parametreler — bir SQL sorgusu, bir
vektör — orada asla görünmez: depodan olduğu gibi yeniden oynatılır.

**Retler birbirinden ayırt edilemez.** Var olmayan bir uç nokta, listesinin dışındaki bir
parametre ve dahil olmadığınız bir kitle — hepsi aynı 404'ü döndürür. Yalnızca arkadaşlara
açık bir akışın var olup olmadığı bile yazar hakkında bir bilgidir ve yanıt bunu asla
sızdırmaz.

## Kim okuyabilir ve size neye mal olur

Kitle, unutulup gidecek dördüncü bir anahtar değildir: **duyuru gönderisini izler** —
herkes, takipçileriniz ya da arkadaşlarınız. Gizli bir duyuru akışı tamamen kapatır, çünkü
yalnızca sizin görebildiğiniz bir duyurunun başkalarının çağırdığı bir uç noktayı
desteklemesi tutarsızdır.

Maliyet, anlaşılmaya değer kısımdır; çünkü korkulan kısım odur. Bir yenileme aralığı
seçersiniz — 30 saniyede bir, 5 dakikada, saatlik ya da günlük — ve bu, widget'ı kaç kişi
açarsa açsın bağlantınızın kullanılabileceği **azami** ölçüdür. Okuyanlar tek bir
önbellek kopyasını paylaşır. On izleyici de on bin izleyici de aynı sayıda çağrı üretir ve
birden çok okuyucu aynı anda önbelleği ıskalasa bile pencere başına tam olarak bir yenileme
çalışabilir.

Anahtarınız sunucudan asla çıkmaz. Bakiyeniz, pozisyonlarınız ve emirleriniz asla
yayımlanmaz. Akış da kayda bağlıdır: widget'ı listeden kaldırın, uç noktalar hizmet vermeyi
bırakır.

## İzleyicinin kendi bağlantısı her zaman kazanır

Yayımlanmış bir akış yedektir, ikame değil. Widget'ınızı açan kişinin kendi OANDA
bağlantısı varsa widget **onunkini** kullanır: onun hesabı, onun verisi, onun limitleri.
Akışa yalnızca widget kendi bağlantısını bulamadıktan sonra başvurulur ve bulunamama
sessizdir: kişi öğrenmesi gereken yeni bir hata yerine her zamanki *bu mekânı bağlayın*
iletisini görür.

Bu uç noktalar uygulamanın halihazırda içerdiği gerçek mekân adaptörlerinden geçer; bu
yüzden yayımlanmış bir akış, widget'ı kurarken gördüğünüzle aynı biçimleri döndürür —
katalogdaki her etkin mekânda ve hiçbirine özel kod olmadan.

## Bilerek yapmadıkları

- **Paylaşılan bir işlem panosu grafiğini çizer, hesap panelini değil.** Bu, engel
  listesinin işini yapmasıdır, kusur değil.
- **Bir sembol seçici yalnızca sizin saydığınız sembolleri sunar.** Serbest metin girişi
  olan bir widget sabit bir kümeye iner. Aracı kurumunuza açık bir vekil kurmamanın bedeli
  budur.
- **Gizli moddaki yazarlar akış yayımlayamaz.** Gizli modda kimlik bilgileriniz yalnızca bu
  cihazın mührü içinde yaşar: hiçbir sunucu onlara sahip değildir, dolayısıyla hiçbiri sizin
  adınıza yenileme yapamaz.
- **Bir çatal akışı devralmaz.** Akışlar bir widget'ın soyuna bağlıdır; kurulan her kopya
  aynı uç noktalara çözümlenir, çatal ise hiçbirine çözümlenmez.

Açması küçük bir iş, ama yayımlamanın anlamını değiştiriyor: paylaştığınız widget artık
insanların gerçekten çalıştırabildiği bir widget.

[Nexow'u açın](https://x.nexow.ai), anahtarlı bir bağlantı üzerine kurduğunuz bir widget
alın ve akışı açık hâlde yayımlayın.
