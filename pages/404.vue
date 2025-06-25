<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="flex justify-center">
        <div class="flex items-center">
          <span class="text-4xl font-bold text-gray-900">Fintek</span>
          <span class="text-4xl font-bold text-primary-600">Indonesia</span>
        </div>
      </div>
      
      <h1 class="mt-12 text-6xl font-extrabold text-gray-900">404</h1>
      <h2 class="mt-4 text-3xl font-extrabold text-gray-900">Halaman tidak ditemukan</h2>
      <p class="mt-4 text-lg text-gray-600">Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
      
      <div class="mt-8">
        <NuxtLink to="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Kembali ke Beranda
        </NuxtLink>
      </div>
      
      <div class="mt-12">
        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-50 text-gray-500">
                Atau
              </span>
            </div>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-2 gap-3">
          <div>
            <NuxtLink to="/login" class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Masuk
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/register" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              Daftar Akun Baru
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
