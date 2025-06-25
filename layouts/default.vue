<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header will be included here if needed -->
    <slot />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>
