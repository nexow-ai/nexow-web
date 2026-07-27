---
title: 'Botlar v2: RSI ve hacim tetikleyicileri, webhook ve veritabanı teslimatı, daha derli toplu bir oluşturucu'
description: 'Bulut botları yeni numaralar öğrendi — RSI ve hacim sıçraması koşulları, işlem izleyiciler, webhook''larınıza POST eden veya veritabanınıza satır ekleyen sinyaller ve Botlarım ile Oluştur olarak ikiye ayrılan bir oluşturucu.'
pubDate: 2026-07-22
heroImage: ../../../assets/blog/bots-v2.svg
tags: ['ürün', 'otomasyon', 'botlar']
---

Botlar ilk çıktığında eşikleri, yüzde hareketlerini, kesişimleri ve özetleri
izleyebiliyor ve tuvalinize sinyal gönderebiliyordu. O çekirdek değişmedi.
Etrafındaki neredeyse her şey ise derinleşti: tetiklenecek daha fazla koşul,
sinyallerin ineceği daha fazla yer ve yolunuza çıkmayan bir oluşturucu.

## Takılacak yeni koşullar

İşlemci kataloğu büyüdü. Eşiklerin, % değişimin ve hareketli ortalama
kesişimlerinin yanında botlar artık şunları da değerlendiriyor:

- **RSI** — momentum aşırı alım veya aşırı satım bölgesine geçtiğinde
  tetiklenir
- **Hacim sıçramaları** — fiyatın henüz tepki vermediği olağan dışı
  hareketliliği yakalayın
- **Yeni işlemler** — bağlı bir hesaptaki taze gerçekleşmelerde tetiklenir
- **Cüzdan etkinliği ve bakiyesi** — zincir üstü adresleri izleyin;
  [cüzdanlar yazımızda](/tr/blog/wallets-on-the-canvas) anlattık

Her zamanki gibi: kuralı bir cümleyle anlatın ve botun taslağını yapay zeka
çıkarsın, ya da görsel olarak bağlayın ve her parametreyi kendiniz ayarlayın.

## Sinyaller çalıştığınız yere gider

Bir botun sinyali eskiden gelen kutunuza ve widget'larınıza ulaşırdı. İki
yeni hedef, botların ne işe yaradığını değiştiriyor:

- **Webhook'lar** — her sinyali belirlediğiniz bir URL'ye POST edin. Bu,
  webhook URL'leri üzerinden Discord, Slack veya Telegram ya da kendi
  sunucunuz demek. Botunuz, herhangi bir sistemin tüketebileceği bir üretici
  haline gelir.
- **Veritabanınız** — her sinyali bağlı veritabanlarınızdan birine satır
  olarak ekleyin. Bir botu bir ay çalışır bırakın; elinizde her tetiklemenin
  sorgulanabilir bir günlüğü olur — bir widget'ın grafiğe dökmesine hazır.

Teslimat bir seçim değil, bir kümedir — tek bir bot aynı tetiklemeden size
bildirim gönderebilir, widget'larınızı güncelleyebilir, Discord'a ping
atabilir ve satırı yazabilir.

## Botlarım ve Oluştur, nihayet ayrı

Botlar paneli artık **Botlarım** — durumu bir bakışta görünen çalışan
filonuz — ile yeni botların şekillendiği **Oluştur**'u ayırıyor. Formun
kendisi de hafifledi: isteğe bağlı bölümler siz gerek duyana kadar kapalı
kalır; basit bir eşik uyarısı saniyeler sürerken tüm derinlik bir tık uzakta
durur.

## Taslaklar güvenli başlar

Bilinçli bir ayrıntı: yapay zeka sizin için bir bot taslakladığında, webhook
hedefi **boş** başlar. Üretilmiş bir otomasyon, kendi elinizle yazmadığınız
bir hedefle asla gelmez — sinyallerin nereye gideceğine her seferinde açıkça
siz karar verirsiniz.

[Nexow'u başlatın](https://x.nexow.ai), Botlar'ı açın ve bir sonraki
uyarınıza gelen kutusundan daha iyi inecek bir yer verin.
