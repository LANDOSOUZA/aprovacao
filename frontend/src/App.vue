<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  background-color: var(--cinza-claro);
  color: var(--cinza-escuro);
  font-family: 'Inter', sans-serif;
}
</style>

