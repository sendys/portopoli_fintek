# Fintek Indonesia - Aplikasi Kasir Modern

Aplikasi kasir modern berbasis web dengan Nuxt.js untuk membantu bisnis mengelola penjualan, inventori, dan laporan keuangan dengan mudah.

## Fitur Utama

- 💰 Manajemen Transaksi
- 📊 Laporan Keuangan
- 📦 Manajemen Inventori
- 👥 Manajemen Pelanggan
- 📱 Responsive Design
- 🔐 Sistem Keamanan Terjamin
- 📈 Analisis Penjualan

## Teknologi yang Digunakan

- 🚀 Nuxt.js 3
- 🎨 Tailwind CSS
- ⚡ Vue 3
- 📱 Responsive Design
- 🎨 Ikon dari Font Awesome
- ✨ Animasi dengan AOS (Animate On Scroll)

## Persyaratan Sistem

- Node.js 16.x atau lebih baru
- npm 8.x atau lebih baru
- Git

## Cara Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/fintek-indonesia.git
   cd fintek-indonesia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Buat file `.env` di root project dan sesuaikan dengan konfigurasi yang dibutuhkan:
   ```env
   NUXT_PUBLIC_API_URL=https://api.fintek.id
   NUXT_PUBLIC_APP_NAME="Fintek Indonesia"
   ```

4. Jalankan development server:
   ```bash
   npm run dev
   ```

5. Buka browser dan akses:
   ```
   http://localhost:3000
   ```

## Build untuk Produksi

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Preview build produksi:
   ```bash
   npm run preview
   ```

3. Generate static site:
   ```bash
   npm run generate
   ```

## Struktur Direktori

```
fintek-indonesia/
├── assets/           # Aset statis (gambar, font, dll.)
├── components/       # Komponen Vue yang dapat digunakan ulang
├── composables/      # Composable functions
├── layouts/          # Layout aplikasi
├── pages/            # Halaman aplikasi
├── plugins/          # Plugin Vue/Nuxt
├── public/           # File publik (favicon, robots.txt, dll.)
├── server/           # Server middleware dan API routes
├── app.vue           # File entry point aplikasi
├── nuxt.config.ts    # Konfigurasi Nuxt
└── tailwind.config.js # Konfigurasi Tailwind CSS
```

## Kontribusi

1. Fork repository ini
2. Buat branch untuk fitur baru (`git checkout -b feature/namafitur`)
3. Commit perubahan Anda (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/namafitur`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontak

- Email: info@fintek.id
- Website: [https://fintek.id](https://fintek.id)
- Telepon: +62 21 1234 5678

---

Dibuat dengan ❤️ oleh Tim Pengembang Fintek Indonesia
