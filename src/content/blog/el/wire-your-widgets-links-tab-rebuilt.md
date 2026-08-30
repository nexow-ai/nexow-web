---
title: 'Συνδέστε τα widgets σας: tek yüzey, tek cümle ve Test it düğmesi'
description: 'Ό,τι μπορεί να συνδεθεί σε widget ζει τώρα πίσω από ένα search box — diğer widget\'lar, bağlantılar, bot\'lar ve agent\'lar. Kablolamayı düz dilde tarif edin ve hangi uçun kırık olduğunu bulmak için gerçek bir olay gönderin.'
pubDate: 2026-08-08
heroImage: ../../../assets/blog/wires.svg
tags: ['προϊόν', 'widgets', 'αυτοματοποίηση']
---

**Link** iki widget arasında olay taşır: birinde sembolü değiştirin, diğeri tepki
verir. Two-way\'i açın, her iki yönde senkron kalırlar. Ayrı karolarla dolu ekran
ile tek enstrüman gibi davranan ekran arasındaki fark budur.

Fikir iyiydi. Onu bulmak değildi, işe yarayıp yaramadığını bilmek de değildi.
İkisi de bu sürümde düzeltildi.

## Tek yüzey ve «All» gerçekten hepsi demek

Seçici eskiden iki alt sekmeye bölünmüştü — *Widgets* ve *Sources* — envanterinizin
yarısı her zaman basmanız gereken bir toggle\'ın arkasındaydı. Ekranında yalnız
widget boş ızgara gösterirdi; bot, agent ve bağlantıların var olduğuna dair ipucu
yoktu.

Artık tek arama kutusu ve her şeyin üstünde bir tür filtresi satırı: bu ekranda,
bu workspace\'te veya başka yerde diğer widget\'lar; veri bağlantılarınız; bot\'larınız;
agent\'larınız. **All** hepsini gösterir.

Sıra da değişti. **My wiring** artık gezinti yüzeyinin *üstünde*. Eskiden onlarca
karoya uzanan seçici ızgarasının altındaydı — yönetmek için döndüğünüz liste,
bunu devre dışı bırak, şunu kaldır — her şeyin altına kaydırmanız gerekirken, yalnızca
yeni eklerken ihtiyaç duyduğunuz seçici her seferinde karşıladı.

Aynı bölgede küçük dürüstlük düzeltmesi: boş durum artık bağlanacak bir şey
olmadığını iddia etmeden önce bot ve agent store\'larının yanıt vermesini bekler,
bu arada **Looking…** gösterir; her filtre chip\'inin kendi sayacı vardır. «Hâlâ
yükleniyor» anlamına gelen boş ızgara, arayüzün rutin olarak söylediği bir yalandı.

## İki mekanizma, bir soru

Tek seçicinin arkasında gerçekten farklı iki şey var:

- **Başka widget** → AI üretilmiş **glue link**. Gerçek kod, kendi sürüm geçmişi,
  kendi gizli runtime\'ında çalışır; A\'nın emit ettiğini B\'nin beklediğine map eder.
- **Bağlantı, bot veya agent** → hafif **attachment**; rebuild\'in bu widget\'ın
  *kendi* koduna ne öğrettiğinin kaydı. Kademeli, otomatik değil — arka arkaya beş
  kaynağa bakmak beş rebuild değil bir rebuild tutar.

Ne olmasını istediğinizi söylemeden hangisini istediğinizi bilmek kötü ilk sorudur.
Links sekmesi artık bir composer ile açılır: **describe the wiring**.

> *«Sync the symbol both ways with the chart.»*
> *«When I click a row here, filter the other widget.»*
> *«Show my price-alert bot's signals in this widget.»*

Planner seçicinin gösterdiği aynı envanteri okur; mekanizmayı ve karşı tarafı çözer
— «the price bot» bir id olur. **Yalnızca çözer**; asla üretmez. Pahalı streaming
codegen her zaman çalıştığı yerde çalışır; kendi Stop düğmesi ve sürüm geçmişiyle.

Kendiniz işaret etmeyi tercih ederseniz seçici hâlâ yapar — ve artık zaten bağlı
olduğunuzu işaretler; ikinci seçim birinciyi sessizce tekrarlamak yerine *«already
linked»* okunur. Tekrar seçmek yinelenen satır eklemek yerine mevcut kablolamayı
günceller; rozet rebuild ödemeden **önce** bunu söyler.

## «Test it»: hangi uç gerçekten kırık?

Bu sürüme kadar link yalnızca yazma içindi. Tarif ettiniz, codegen ödediniz,
düzenleyiciden çıktınız, bir şey olup olmadığını görmek için gerçek widget\'lara
dokundunuz. Hiçbir şey olmadığında *hangi* parçanın yanlış olduğunu söylemenin yolu
yoktu — emit etmeyen widget, map etmeyen link, dinlemeyen diğer widget.

Düzenleyicide artık **Test it** çubuğu var. Topic ve değer seçin, hangi uçun emit
ediyormuş gibi davranacağını seçin (yalnızca two-way link\'te sunulur — one-way
uzak taraftan her zaman hiçbir şey bildirir), gönderin. Olay link\'in gerçek runtime\'ına
girer, üretilmiş `connect(ctx)`\'i çalıştırır — simülasyon değil — karar her boş
kalma biçimini ayırır:

- **This link isn't running.** Açın — veya henüz kod yok.
- **It ran but forwarded nothing for that topic.** Mapping yanlış; Logs sekmesinde
  ayrıntı.
- **Sent "symbol" on to Chart.** Çalışıyor.
- **Forwarded, but that widget isn't on screen to receive it.** Bug değil — diğer
  uç başka ekranda.

Test sizi başka yere atmak yerine listede kalır; kaydedici yalnızca çubuk ekrandayken
silahlanır — tick akışı ileten link enstrümantasyon için ödeme yapmaz.

## Sessiz olanlar

Two-way link\'ler yardım olmadan sonsuza echo eder; teslim edilen değer hatırlanır,
özdeş geri sekme bir kez düşürülür — kanonik A↔B ayna döngüsü kırılır, gerçekten
yeni değer geçer. Link\'ler ve attachment\'lar tek bir sekmede yaşamak yerine
sekmeler ve cihazlar arasında çoğalır; başka yerde silmek düzenleyicide **gone**
durumu gösterir, hiçbir şeye kaydetmenize izin vermez. Rebuild başarısız olursa
söyler ve Builder sekmesini gösterir; cevap olması gereken yerde spinner bırakmaz.

Bir değişiklik daha yolda: uygulama insanların zaten kullandığı kelimenin etrafında
yeniden adlandırılıyor. *Link* **wire** oluyor; *My wiring* tam olduğu yerde kalıyor.

[Ξεκινήστε το Nexow](https://x.nexow.ai), herhangi bir widget\'ın Links sekmesini
açın ve tıkladığınızda ne olması gerektiğini tarif edin. Sonra ayrılmadan önce test edin.
