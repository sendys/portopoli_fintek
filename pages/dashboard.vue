<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10">
      <div class="flex items-center justify-center h-16 bg-primary-600 px-4">
        <div class="flex items-center">
          <span class="text-white text-xl font-bold">Fintek</span>
          <span class="text-primary-200 text-xl font-bold">ID</span>
        </div>
      </div>
      <nav class="mt-6">
        <div>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-white bg-primary-700 border-l-4 border-primary-400">
            <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-gray-300">
            <svg class="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Produk
          </a>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-gray-300">
            <svg class="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Transaksi
          </a>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-gray-300">
            <svg class="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Pelanggan
          </a>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-gray-300">
            <svg class="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Laporan
          </a>
          <a href="#" class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-gray-300">
            <svg class="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Pengaturan
          </a>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Navigation -->
      <header class="bg-white shadow-sm">
        <div class="flex justify-between items-center px-6 py-4">
          <div class="flex items-center">
            <button class="text-gray-500 focus:outline-none lg:hidden">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-xl font-semibold text-gray-800 ml-4">Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div class="relative">
              <button @click="isProfileMenuOpen = !isProfileMenuOpen" class="flex items-center focus:outline-none">
                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User profile">
                <span class="ml-2 text-sm font-medium text-gray-700 hidden md:inline">John Doe</span>
                <svg class="ml-1 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil Saya</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pengaturan</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="handleLogout">Keluar</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-gray-500 text-sm font-medium">Total Pendapatan</h3>
                <p class="text-2xl font-semibold text-gray-900">Rp 12.450.000</p>
                <p class="text-xs text-green-600 flex items-center">
                  <svg class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12.5% dari bulan lalu
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-green-100 text-green-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-gray-500 text-sm font-medium">Total Transaksi</h3>
                <p class="text-2xl font-semibold text-gray-900">1,248</p>
                <p class="text-xs text-green-600 flex items-center">
                  <svg class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  8.2% dari bulan lalu
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-gray-500 text-sm font-medium">Total Pelanggan</h3>
                <p class="text-2xl font-semibold text-gray-900">856</p>
                <p class="text-xs text-green-600 flex items-center">
                  <svg class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  4.3% dari bulan lalu
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-red-100 text-red-600">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-gray-500 text-sm font-medium">Produk Terjual</h3>
                <p class="text-2xl font-semibold text-gray-900">3,245</p>
                <p class="text-xs text-red-600 flex items-center">
                  <svg class="h-3 w-3 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  1.8% dari bulan lalu
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-gray-900">Grafik Penjualan</h2>
              <div class="flex">
                <button class="px-3 py-1 text-xs font-medium rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Minggu
                </button>
                <button class="px-3 py-1 text-xs font-medium border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  Bulan
                </button>
                <button class="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-r-md border border-primary-600">
                  Tahun
                </button>
              </div>
            </div>
            <div class="h-64">
              <!-- Placeholder for chart -->
              <div class="h-full flex items-center justify-center bg-gray-50 rounded-lg">
                <p class="text-gray-500">Grafik Penjualan</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-gray-900">Kategori Produk Terlaris</h2>
              <button class="text-sm text-primary-600 hover:text-primary-800">Lihat Semua</button>
            </div>
            <div class="space-y-4">
              <div v-for="(category, index) in categories" :key="index" class="flex items-center">
                <div class="flex-shrink-0 w-2 h-2 rounded-full" :class="category.color"></div>
                <div class="ml-3 w-full">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-700">{{ category.name }}</span>
                    <span class="font-medium text-gray-900">{{ category.percentage }}%</span>
                  </div>
                  <div class="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div class="h-2 rounded-full" :class="category.color" :style="`width: ${category.percentage}%`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Transactions -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-gray-900">Transaksi Terbaru</h2>
              <button class="text-sm text-primary-600 hover:text-primary-800">Lihat Semua</button>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Transaksi</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Aksi</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="transaction in recentTransactions" :key="transaction.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ transaction.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" :src="transaction.customer.avatar" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ transaction.customer.name }}</div>
                        <div class="text-sm text-gray-500">{{ transaction.customer.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ transaction.date }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {{ transaction.amount }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="getStatusBadgeClass(transaction.status)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                      {{ transaction.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-primary-600 hover:text-primary-900">Detail</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isProfileMenuOpen = ref(false);

const categories = [
  { name: 'Elektronik', percentage: 35, color: 'bg-blue-500' },
  { name: 'Fashion', percentage: 28, color: 'bg-green-500' },
  { name: 'Makanan & Minuman', percentage: 22, color: 'bg-yellow-500' },
  { name: 'Kecantikan', percentage: 15, color: 'bg-purple-500' },
];

const recentTransactions = [
  {
    id: '#TRX-001',
    customer: {
      name: 'Budi Santoso',
      email: 'budi@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    date: '12 Jun 2023, 14:30',
    amount: 'Rp 1.250.000',
    status: 'Selesai'
  },
  {
    id: '#TRX-002',
    customer: {
      name: 'Siti Aisyah',
      email: 'siti@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    date: '12 Jun 2023, 13:15',
    amount: 'Rp 2.750.000',
    status: 'Diproses'
  },
  {
    id: '#TRX-003',
    customer: {
      name: 'Agus Setiawan',
      email: 'agus@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    date: '12 Jun 2023, 11:45',
    amount: 'Rp 875.000',
    status: 'Dikirim'
  },
  {
    id: '#TRX-004',
    customer: {
      name: 'Dewi Lestari',
      email: 'dewi@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    date: '12 Jun 2023, 10:20',
    amount: 'Rp 1.950.000',
    status: 'Selesai'
  },
  {
    id: '#TRX-005',
    customer: {
      name: 'Rudi Hermawan',
      email: 'rudi@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    date: '11 Jun 2023, 16:10',
    amount: 'Rp 3.200.000',
    status: 'Dibatalkan'
  }
];

const getStatusBadgeClass = (status) => {
  const statusClasses = {
    'Selesai': 'bg-green-100 text-green-800',
    'Diproses': 'bg-yellow-100 text-yellow-800',
    'Dikirim': 'bg-blue-100 text-blue-800',
    'Dibatalkan': 'bg-red-100 text-red-800',
  };
  return statusClasses[status] || 'bg-gray-100 text-gray-800';
};

const handleLogout = () => {
  // Handle logout logic here
  router.push('/login');
};

// Close profile menu when clicking outside
const handleClickOutside = (event) => {
  const profileMenu = document.querySelector('.relative');
  if (profileMenu && !profileMenu.contains(event.target)) {
    isProfileMenuOpen.value = false;
  }
};

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
