<template>
  <Header />
  
  <main>
    <router-view />
  </main>

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
  margin: 0;
  padding: 0;
}

main {
  min-height: 60vh;
}
</style>
