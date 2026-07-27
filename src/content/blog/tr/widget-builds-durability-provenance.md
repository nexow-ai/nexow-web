---
title: 'Güvenebileceğiniz widget inşası: dayanıklı inşalar, dürüst sürümler, sohbette lint'
description: 'Oluşturucu bir bellek ve bir vicdan kazandı — inşalar kopmalardan sağ çıkıyor ve temizce yeniden deneniyor, her sürüm nereden geldiğini kaydediyor ve lint ile çalışma zamanı sorunları konsola değil sohbete düşüyor.'
pubDate: 2026-07-21
heroImage: ../../../assets/blog/builds.svg
tags: ['ürün', 'widget''lar', 'yapay zeka']
---

İstemden widget'a giden yol her zaman işin gösterişli kısmıydı. Bu sürüm ise
o vaadin gösterişsiz yarısı hakkında: inşanın ortasında ağ koptuğunda, bir
üretim başarısız olduğunda, bir widget'ın aslında hangi sürümüne baktığınızı
bilmek istediğinizde ne olur? Artık cevap şu: hiçbir şey kaybolmaz ve hiçbir
şey arkanızdan yeniden yazılmaz.

## Sizden sağ çıkan inşalar

Widget inşaları artık **dayanıklı işlerdir**. Üretimin ortasında dizüstünü
kapatın, Wi-Fi'yi kaybedin, en kötü anda sayfayı yenileyin — inşa sunucudaki
yerini korur ve siz olmadan biter. Bir tur gerçekten başarısız olursa
üzerinde bir **Yeniden dene** durur ve bir kopma işleri tuhaf bir halde
bıraktıktan sonra bile çalışır. Bayat inşalar oluşturucuyu artık
kilitleyemez.

Sözleriniz de aynı ölçüde dayanıklı: oluşturucuda bekleyen gönderilmemiş bir
istem widget'la birlikte saklanır; zamansız bir yenileme, tam göndermek üzere
olduğunuz paragrafı yutmaz.

## Kökeni belli sürümler

Her widget sürümü artık **nereden geldiğini** kaydediyor — bir istem, bir
düzeltme, elle bir kayıt — ve düzenlemeler eski sürümleri yerinde yeniden
yazmak yerine yenilerini oluşturuyor. Her widget'ın ilk sürümü, yani
**genesis**'i asla budanmaz: ilk istemin ne ürettiğine her zaman geri
dönebilirsiniz. Ve sohbetteki bir sürüm çipi budanmış bir geçmişi
gösteriyorsa, sohbet yokmuş gibi davranmak yerine bunu söyler.

## İnşa, nesi bozuksa kendisi söyler

Üretilen kod denetlenir ve bulgular zaten baktığınız yere gider: **lint ve
çalışma zamanı sorunları, konuşmanın bir parçası olarak inşanın sohbet
balonunda görünür**. Yanıtlayarak düzeltin — sorunlar, bir sonraki turun
zaten bildiği bağlamdır.

Kumluk sıkı kaldı, hatta daha da sıkılaştı: widget'lar doğrudan ağ çağrısı
yapamaz — veri bağlayıcılardan gelir — ve yükleyebilecekleri varlıklar
bilinen kaynaklara sabitlenmiştir.

## Daha zengin konuşmalar

Oluşturucu **ekler** kazandı — yapay zekaya ne demek istediğinizi göstermek
için sohbete bir görsel bırakın — ve **sabitlenmiş bağlantılar** sayesinde
bir widget'ın konuşması hangi veri kaynaklarına karşı inşa ettiğini her zaman
bilir. Kendi API anahtarınızla inşa ediyorsanız, hesabınızdaki diğer cihazlar
gizemli bir meşgul durumu yerine sürmekte olan inşayı görür.

Bunların hiçbiri inşa etme hissini değiştirmiyor: anlat, izle, incelt.
Değiştirdiği şey, çıkan sonuca ne kadar güvenebileceğiniz.

[Nexow'u başlatın](https://x.nexow.ai) ve inşanın ortasında bağlantınızı
koparın — sizsiz bitiririz.
