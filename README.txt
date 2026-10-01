# Pengeluaran Berdua — PWA

Frontend PWA ini membungkus Web App Google Apps Script yang sudah kamu punya.

Backend:
https://script.google.com/macros/s/AKfycbyRRasTbhcWRu9pimhwAdjVsBcj7bz58j7poSOfoN2G_5_ADC6Pa9-D40XHPmqmsCvRFQ/exec

File:
- index.html
- manifest.webmanifest
- sw.js
- icon.svg

Cara pakai:
1. Upload folder ini ke hosting HTTPS yang mendukung static files (misalnya GitHub Pages, Netlify, Cloudflare Pages, atau hosting web biasa).
2. Buka URL hosting dari iPhone/Android.
3. Tambahkan ke Home Screen.
4. Icon "Pengeluaran Berdua" akan muncul seperti aplikasi.

Catatan:
- Google Apps Script tetap menjadi backend/database melalui Web App yang sudah ada.
- Internet tetap diperlukan untuk membaca/menyimpan transaksi.
- PWA shell dapat dicache, tetapi transaksi tetap bergantung pada backend Google Apps Script.
