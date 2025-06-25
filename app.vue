<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import 'aos/dist/aos.css';
import AOS from 'aos';
import { onMounted } from 'vue';

// Initialize AOS (Animate On Scroll)
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    offset: 10
  });
});

// Add global meta tags
useHead({
  htmlAttrs: {
    lang: 'id',
    class: 'scroll-smooth'
  },
  meta: [
    { name: 'description', content: 'Fintek Indonesia - Aplikasi Kasir Modern untuk Bisnis Anda' },
    { name: 'theme-color', content: '#0ea5e9' },
    { name: 'msapplication-TileColor', content: '#0ea5e9' },
    { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
    { name: 'apple-mobile-web-app-title', content: 'Fintek Indonesia' },
    { name: 'application-name', content: 'Fintek Indonesia' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#0ea5e9' },
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
  ]
});
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Custom selection color */
::selection {
  background-color: #0ea5e9;
  color: white;
}
</style>
