---
title: 'Varsayılan olarak özel: AI pazar istasyonunuz neden yerel olarak çalışmalı'
description: 'Nexow tamamen yerel çalışır — tarayıcıda kendi anahtarınızı getir codegen, IndexedDB kalıcılığı ve mekanlarla doğrudan bağlantılar. Varsayılan olarak özel ne anlama geldiği ve tüccarlar için neden önemli olduğu.'
pubDate: 2026-07-01
heroImage: ../../../assets/blog/private.svg
tags: ['gizlilik', 'mimari', 'güvenlik']
category: deep-dive
---

Çoğu yapay zeka aracı varsayılan olarak verilerinizi bir sunucuya gönderir. Pazar istasyonu için — anahtarlarınız, pozisyonlarınız ve stratejileriniz oyunun tamamı olduğu — bu varsayılan geriye doğrudur. Nexow onu tersine çevirir: **varsayılan olarak özel, tasarım gereği yerel.**

Bunun gerçekten ne anlama geldiği.

## Tarayıcıda kendi anahtarı getir codegen

Özel modda kendi Anthropic API anahtarınızı eklersiniz ve widget oluşturma istemci tarafında çalışır. Bir widget istediğinizde, istek tarayıcınızdan Nexow altyapısı aracılığıyla değil, anahtarınızla Anthropic'e gider. Yetkilendirilmemiş bir oturum, çalıştırılacak hiçbir şey olmadığı için bize hiçbir maliyete mal olmaz: iş makinenizde gerçekleşir.

## Widget'larınız tarayıcınızda yaşar

Oluşturduğunuz her widget, her sürüm, her günlük ve tüm widget kitaplığınız tarayıcınızın **IndexedDB** dosyasında kalır. Çevrimdışı olarak mevcutturlar ve herhangi bir hesaba bağlı değildir. Depolama alanını temizleyin ve gitmişlerdir — hiçbir zaman sunucu tarafı yüklemesi olmadığından sunucu tarafı kopya yok.

## Mekanlarla doğrudan bağlantılar

Mekanın CORS politikası izin verdiğinde, Nexow bununla **doğrudan tarayıcınızdan** bağlanır, proxy'mizi tamamen atlar. Borsa kimlik bilgileriniz borsayla konuşmak için kullanılır — bizimle konuşmak için değil. Daha az atlama, daha düşük gecikme ve daha küçük bir güven yüzeyi anlamına gelir.

## Varsayılan olarak özel neden önemli

- **Güvenlik.** Anahtarlarınıza dokunan taraflar ne kadar azsa, o kadar az yer sızıntı yapabilirler. Yerel ilk, özel modda bizi tamamen yoldan çıkarır.
- **Gecikme.** Doğrudan bağlantılar ağ atlamasını atlıyor, bu da sipariş defteri izlerken önemli.
- **Sahiplik.** Panolarınız sizindir. Kilit yok, dışa aktarma dansı yok — makinenizde yaşarlar.
- **Maliyet.** Sadece kendi model kullanımı için ödeme yaparsınız, işaretleme olmadan ve bugün tuvalde inşa etmek için abonelik gerekli değildir.

## Ödünleşmeler, dürüst olmak gerekirse

Yerel ilk ödünleşmelerden muaf değil. Bazı mekanlar tarayıcı doğrudan bağlantılara izin vermez ve ince bir proxy'den geçilmelidir. Yerel kalıcılık, seçmeye kadar çalışmanızı tarayıcı profiline bağlar senkronize. Ve kendi anahtarınızı çalıştırmak, kendi kullanımınızı yönetmek anlamına gelir. Bunların paranız kadar yakın oturan bir araç için doğru ödünleşmeler olduğunu düşünüyoruz.

Barındırılan planlar, ticaret ajanları ve sunucu bileşenleri ekledikçe, ilke sabit kalır: **anahtarlarınız, verileriniz, makineniz** — açıkça buluta katılmamayı seçmedikçe.

[Nexow'u başlatın](https://x.nexow.ai) ve özel modu kendiniz görün.