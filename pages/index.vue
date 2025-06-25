<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div class="container mx-auto px-4 py-20 md:py-28">
        <div class="flex flex-col lg:flex-row items-center">
          <!-- Left Content -->
          <div class="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Aplikasi Kasir Modern untuk Bisnis Anda
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8">
              Kelola penjualan, inventori, dan laporan keuangan dengan mudah menggunakan Fintek Indonesia. Solusi terbaik untuk bisnis retail, restoran, dan UMKM.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <NuxtLink to="/register" class="btn btn-primary text-center">
                Coba Gratis 14 Hari
              </NuxtLink>
              <a href="#fitur" class="btn btn-outline text-center">
                Pelajari Lebih Lanjut
              </a>
            </div>
            <div class="mt-8 flex items-center space-x-2 text-sm text-gray-500">
              <div class="flex -space-x-2">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User">
              </div>
              <span>Digunakan oleh 10.000+ pelaku bisnis di Indonesia</span>
            </div>
          </div>
          
          <!-- Right Content -->
          <div class="lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div class="relative">
              <div class="relative z-10 w-full max-w-md mx-auto">
                <img src="/images/sale.png" alt="Dashboard Preview" class="rounded-full shadow-2xl w-full h-auto animate-pulse">
              </div>
              <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute -top-6 -left-6 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Trusted By -->
    <!-- <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <p class="text-center text-gray-500 mb-8">Dipercaya oleh pelaku bisnis terkemuka</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div v-for="(logo, index) in trustedLogos" :key="index" class="opacity-60 hover:opacity-100 transition-opacity">
            <img :src="logo" :alt="'Logo ' + (index + 1)" class="h-8 md:h-10 w-auto">
          </div>
        </div>
      </div>
    </section> -->

    <!-- Features Section -->
    <section id="fitur" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">Fitur Unggulan</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Semua yang Anda Butuhkan dalam Satu Aplikasi</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Kelola bisnis Anda dengan lebih efisien menggunakan fitur-fitur lengkap dari Fintek Indonesia
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" 
               class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
               data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl mb-6" :class="feature.bgColor">
              <font-awesome-icon :icon="['fas', feature.icon]" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">Cara Kerja</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mudah Digunakan, Hasil Maksimal</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Hanya butuh beberapa menit untuk memulai dan melihat perbedaannya
          </p>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-100 to-secondary-100"></div>
          
          <div class="space-y-16">
            <div v-for="(step, index) in steps" :key="index" 
                 class="relative flex flex-col lg:flex-row items-center lg:items-start lg:even:flex-row-reverse">
              <div class="lg:w-1/2 mb-8 lg:mb-0" :class="index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'" data-aos="fade-right">
                <div class="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-xl mb-4 mx-auto">
                  {{ index + 1 }}
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
                <p class="text-gray-600 mb-4">{{ step.description }}</p>
                <ul class="space-y-2">
                  <li v-for="(item, i) in step.items" :key="i" class="flex items-start">
                    <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div class="lg:w-1/2 flex justify-center" :class="index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'" data-aos="fade-left">
                <div class="relative bg-white p-4 rounded-xl shadow-lg max-w-sm">
                  <img :src="step.image" :alt="step.title" class="rounded-lg w-full h-auto">
                  <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="harga" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">Harga</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilih Paket yang Tepat untuk Bisnis Anda</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Harga terjangkau dengan fitur lengkap untuk segala skala bisnis
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div v-for="(plan, index) in pricingPlans" :key="index" 
               class="relative bg-white rounded-2xl shadow-lg overflow-hidden flex-1 flex flex-col"
               :class="{'border-2 border-primary-500 transform md:-translate-y-4': plan.popular}">
            <div v-if="plan.popular" class="absolute top-0 right-0 bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
              POPULER
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-600 mb-6">{{ plan.description }}</p>
              <div class="mb-8">
                <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
                <span class="text-gray-500">/bulan</span>
              </div>
              <ul class="space-y-3 mb-8 flex-1">
                <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <NuxtLink :to="'/register?plan=' + plan.id" 
                       class="mt-auto btn w-full text-center"
                       :class="plan.popular ? 'btn-primary' : 'btn-outline'">
                Pilih Paket
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-6">Butuh penawaran khusus untuk bisnis Anda?</p>
          <a href="#kontak" class="text-primary-600 font-semibold hover:text-primary-700">Hubungi Kami</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">Testimoni</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan Kami</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelaku bisnis telah mempercayakan pengelolaan toko mereka pada Fintek Indonesia
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" 
               class="bg-white p-8 rounded-xl shadow-lg"
               data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="flex items-center mb-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
            <div class="mt-4 flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="{'text-gray-300': i > testimonial.rating}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">FAQ</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar Fintek Indonesia
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6 border-b border-gray-200 pb-6">
            <button 
              @click="toggleFaq(index)"
              class="flex justify-between items-center w-full text-left focus:outline-none"
              :aria-expanded="openFaq === index"
              :aria-controls="'faq-content-' + index">
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
              <svg 
                class="w-6 h-6 text-primary-600 transform transition-transform duration-200" 
                :class="{'rotate-180': openFaq === index}" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="openFaq === index"
              :id="'faq-content-' + index"
              class="mt-4 text-gray-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h2>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
          Bergabunglah dengan ribuan bisnis yang telah mempercayakan pengelolaan toko mereka pada Fintek Indonesia
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/register" class="btn bg-white text-primary-700 hover:bg-gray-100">
            Mulai Gratis 14 Hari
          </NuxtLink>
          <a href="#kontak" class="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
            Hubungi Penjualan
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openFaq = ref(0);

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const trustedLogos = [
  '/images/logo-1.svg',
  '/images/logo-2.svg',
  '/images/logo-3.svg',
  '/images/logo-4.svg',
  '/images/logo-5.svg',
];

const features = [
  {
    icon: 'shopping-cart',
    title: 'Transaksi Cepat',
    description: 'Proses penjualan lebih cepat dengan antarmuka yang mudah digunakan',
    bgColor: 'bg-blue-100'
  },
  {
    icon: 'chart-line',
    title: 'Laporan Lengkap',
    description: 'Pantau performa bisnis dengan laporan keuangan yang detail',
    bgColor: 'bg-green-100'
  },
  {
    icon: 'box-open',
    title: 'Manajemen Stok',
    description: 'Kelola stok barang dengan sistem inventori yang terintegrasi',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: 'users',
    title: 'Manajemen Pelanggan',
    description: 'Kelola data pelanggan dan riwayat transaksi dengan mudah',
    bgColor: 'bg-purple-100'
  },
  {
    icon: 'mobile-alt',
    title: 'Multi-Device',
    description: 'Akses dari mana saja melalui perangkat desktop, tablet, atau smartphone',
    bgColor: 'bg-red-100'
  },
  {
    icon: 'shield-alt',
    title: 'Keamanan Terjamin',
    description: 'Data bisnis Anda aman dengan enkripsi tingkat tinggi',
    bgColor: 'bg-indigo-100'
  }
];

const steps = [
  {
    title: 'Daftar Akun',
    description: 'Buat akun Fintek Indonesia dalam hitungan menit',
    items: [
      'Isi formulir pendaftaran',
      'Verifikasi email Anda',
      'Pilih paket yang sesuai'
    ],
    image: '/images/step-1.png'
  },
  {
    title: 'Atur Toko Anda',
    description: 'Mulai mengatur toko Anda dengan mudah',
    items: [
      'Tambah produk dan kategori',
      'Atur harga dan diskon',
      'Tambahkan staf dan atur hak akses'
    ],
    image: '/images/step-2.png'
  },
  {
    title: 'Mulai Berjualan',
    description: 'Mulai kelola penjualan Anda',
    items: [
      'Lakukan transaksi penjualan',
      'Kelola pesanan pelanggan',
      'Pantau laporan keuangan'
    ],
    image: '/images/step-3.png'
  }
];

const pricingPlans = [
  {
    id: 'basic',
    name: 'Starter',
    price: 'Rp 149.000',
    description: 'Cocok untuk bisnis kecil yang baru memulai',
    popular: false,
    features: [
      'Hingga 50 transaksi/bulan',
      '1 Pengguna',
      'Manajemen Produk',
      'Laporan Penjualan Dasar',
      'Dukungan Email',
      'Pembaruan Berkala'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 'Rp 299.000',
    description: 'Solusi lengkap untuk bisnis yang sedang berkembang',
    popular: true,
    features: [
      'Hingga 200 transaksi/bulan',
      '3 Pengguna',
      'Manajemen Stok & Produk',
      'Laporan Lengkap',
      'Dukungan Prioritas',
      'Integrasi Pembayaran',
      'Backup Otomatis',
      'Diskon 10% untuk pembayaran tahunan'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solusi khusus untuk bisnis besar',
    popular: false,
    features: [
      'Transaksi Tidak Terbatas',
      'Pengguna Tidak Terbatas',
      'Semua Fitur Professional',
      'Dedicated Account Manager',
      'Integrasi Khusus',
      'Pelatihan Khusus',
      'Server Khusus',
      'Prioritas Pengembangan Fitur'
    ]
  }
];

const testimonials = [
  {
    name: 'Bapak Zainal Abidin',
    role: 'Pemilik Toko Sembako',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Sejak menggunakan Fintek Indonesia, pengelolaan stok dan laporan keuangan menjadi jauh lebih mudah. Sangat direkomendasikan untuk UMKM!',
    rating: 5
  },
  {
    name: 'Ibu Maria Ulfa',
    role: 'Manajer Restoran',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Aplikasinya sangat user-friendly dan tim supportnya responsif. Membantu sekali dalam mengelola pesanan pelanggan.',
    rating: 5
  },
  {
    name: 'Bapak Safrizal',
    role: 'Pemilik Toko Elektronik',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'Fitur laporannya sangat membantu dalam mengambil keputusan bisnis. Harga juga sangat terjangkau untuk fitur yang didapatkan.',
    rating: 4
  }
];

const faqs = [
  {
    question: 'Apakah ada versi gratis yang tersedia?',
    answer: 'Ya, kami menawarkan uji coba gratis selama 14 hari untuk semua paket. Anda dapat mencoba semua fitur lengkap tanpa biaya dan tanpa perlu kartu kredit.'
  },
  {
    question: 'Bagaimana cara meningkatkan paket saya?',
    answer: 'Anda dapat meningkatkan paket kapan saja melalui dashboard akun Anda. Perubahan paket akan berlaku untuk siklus penagihan berikutnya.'
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Ya, kami melakukan pencadangan data secara berkala untuk memastikan keamanan data Anda.'
  },
  {
    question: 'Apakah ada biaya tambahan untuk update?',
    answer: 'Tidak, semua pembaruan dan peningkatan fitur termasuk dalam biaya berlangganan Anda tanpa biaya tambahan.'
  },
  {
    question: 'Bagaimana jika saya membutuhkan bantuan?',
    answer: 'Kami menyediakan dukungan pelanggan melalui email, live chat, dan telepon. Tim dukungan kami siap membantu Anda selama jam kerja.'
  }
];
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
