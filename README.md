# QR Generator

URL girip QR kodu JPEG olarak indirmenizi sağlayan tek sayfalık Angular uygulaması.

- Angular 21 (standalone + signals)
- Taiga UI 5
- QR kod tamamen tarayıcıda üretilir, sunucu gerekmez

## Geliştirme

```bash
npm install
npm start
```

Uygulama `http://localhost:4200/` adresinde çalışır.

## Build

```bash
npm run build
```

Çıktı `dist/qr-generator/browser` klasörüne üretilir.

## Vercel'e Deploy

Repo'yu Vercel'e bağlamanız yeterli; ayarlar `vercel.json` içinde tanımlıdır.
