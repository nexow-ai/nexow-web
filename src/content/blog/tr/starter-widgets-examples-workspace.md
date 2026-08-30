---
title: 'On örnek widget artık Nexow ile geliyor — konuşma dahil'
description: 'Yeni hesap artık boş tuvalde açılmıyor. On bitmiş widget Örnekler workspace\'i olarak geliyor; her biri onu kuran gerçek sohbeti ve gerçek sürüm geçmişini taşıyor — sizin kullandığınız codegen döngüsüyle, hiçbir şey bağlı değilken üretilmiş.'
pubDate: 2026-08-09
heroImage: ../../../assets/blog/starters.svg
tags: ['ürün', 'onboarding', 'widgets']
---

Nexow\'daki en zor ekran her zaman ilkiydi: boş tuval, prompt kutusu ve hiçbir
şeyin işe yaradığına dair kanıt yok. Dokümanları okuyabilir ya da bir şey yazıp
umabilirdiniz.

Sonraki sürümle yeni hesap bir **Örnekler workspace**\'ine açılıyor — üç ekranda
on bitmiş widget, hepsi ilk yüklemede çalışıyor, **hiçbir şey bağlı değil**.
Ekran görüntüsü değil, rehberli tur değil. Açıp düzenleyebileceğiniz, söküp
üzerine yayımlayabileceğiniz çalışan widget\'lar.

## Pakette ne var

**Canlı dünya** — gün/gece halkası ve çalışma saati örtüşme çubuğu olan dünya
saati; saatlik eğrili yedi günlük hava tahmini; son saat, gün veya haftanın tüm
deprem olayları canlı haritada, büyüklüğe göre boyutlu; indeksi şu an sürükleyen
kirleticiyle canlı hava kalitesi.

**Piyasalar** — canlı son mum ve 24s değişim rozetiyle Binance mum grafikleri;
ECB referans kurları ve 90 günlük geçmişle FX dönüştürücü; en aktif Polymarket
soruları ve kalabalığın inandığı; iki ülke birden, uzun vadeli grafik olarak
herhangi bir Dünya Bankası göstergesi.

**Yap ve oyna** — yeniden yüklemeye dayanıklı öğe başına kalıcı depolamayla
yapışkan not panosu; küçük resimler ve tarih seçiciyle Wikipedia on-this-day
akışı.

Her kaynak anahtarsız: Open-Meteo, USGS, Binance public data, Frankfurter,
Polymarket, Dünya Bankası, Wikipedia. Bu kural, tesadüf değil — «Connect OANDA\"
ile açılan örnek boş tuvalden kötüdür.

## Gerçekten yazılmadı, kuruldu

Her örnek bir insanın yazdığı gibi bir brief ile başladı — ne istediği ve neden,
spesifikasyon değil. `starter:build` bu brief\'leri **`runWidgetToolLoop`**\'tan
geçirir: platform codegen rotası ve tarayıcının bring-your-own-key yolunun
ikisinin de sürdürdüğü modül, aynı sözleşme, araçlar ve in-turn verifier ile.
HTTP stream yok, kredi defteri yok, tarayıcı yok — ama aynı döngü.

Widget\'ın chat sekmesindeki transkript gerçek konuşmadır; kod üreten her tur rail\'de
gerçek sürümdür. Çoğunda üç var. **Hava kalitesinde beş var**; ilk üçü boş «enter
a city» kutusunda açıyordu, beşinci tur bir bug report: altı kirletici karosu
hepsi tire, zaman damgası *«-6375 min ago»*. O build pakette olduğu gibi duruyor.

Brief\'ler **hiç provider ekli değilken** çalışır — tam yeni hesabın sahip
olduğu. O döngüden çıkan her şey birinin ilk gününde çalışır.

## İkinci katalog değil

Her örnek sıradan bir marketplace varlığıdır; resmi hesap herkesin işinin gittiği
aynı RPC ile yayımlar: aynı sanitizer\'lar, lineage grafi, kurulum yolu, royalty
zinciri. Starter widget sunucuda kasıtlı olarak özel değil — fork edince gerçek
lineage devam eder, uygulamanın örneklerinin özel lehçede yaşadığını keşfetmezsiniz.

Üstte bir curation registry yalnızca kürasyonu tutar: paketi hangi yayımlanmış
varlıklar oluşturur, hangi sırada, hangi ekranda. Yazmalar yalnızca service-role;
okumalar herkese açık — oturum açmamış ziyaretçi birinin listeleme sayfasına
bakıyor olabilir.

## Paket nereye iner ve ne yapmaz

Tohum üç yolla sınırlı. **Hesap başına bir kez, cihaz başına değil** — bayrak
çoğaltılmış ayardır, hesap değişiminde yeniden okunur. Birinin kullandığı tuvali
asla tohumlamaz. **Settings → General → Add example widgets**\'tan zorlanabilir —
paketten önceki hesaplar veya workspace\'i silip geri isteyenler için.

Örnekler kendi boş workspace\'inizin *yanına* iner, yerine geçmez; onboarding
hâlâ yazmanız için temiz ekran verir. Tüm paket tek undo adımı.

Tohumlanan her widget gerçekte olduğu marketplace kurulumu olarak damgalanır;
iyileştirip yayımlamak resmi lineage\'ı sürdürür, rakip kopya başlatmaz. Daha iyi
örnek sürümü gönderdiğimizde **zaten tohumlanmış kullanıcılar kendi sürümlerini
tutar** — artık onların widget\'ı, belki düzenlenmiş. Push-update yolu yok ve
olmamalı.

## Paket olarak doğrulandı, gözle değil

Hesaba ulaşmadan önce tüm paket gerçek Chrome\'da çalışır, widget başına not
verilir: boot hataları, kaçak animasyon döngüleri, yavaş kareler, boş render —
artı her biri için ekran görüntüsü. Ayrı canlı kontrol committed kodundan her
herkese açık endpoint türetir ve hâlâ yanıt verdiğini doğrular; widget\'lar
değişirken test bayatlamaz.

On birincinin çıtası bu on ile aynı: sıfır bağlantı, temiz smoke kararı, veri
kaynağının kötü gününde boş karo yerine gerçek mesaj, konuşmada hiçbir yerde
kişisel bir şey yok — çünkü konuşma da gönderiliyor.

Paket sonraki sürümle geliyor; mevcut hesaplar istedikleri zaman **Settings →
General**\'dan çekebilir. Birini açın, onu kuran sohbeti okuyun, bir şeyi
değiştirin — tuvalin ne yapabildiğini öğrenmenin hâlâ en hızlı yolu bu.

[Nexow\'u başlatın](https://x.nexow.ai) ve bu arada kurmaya başlayın.
