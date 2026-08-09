<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img
          :src="logoIcon"
          alt="Aprovação Administrativa"
          class="w-32 md:w-40 h-auto"
        />
      </router-link>

      <!-- Botão mobile -->
      <button
        class="md:hidden text-[var(--azul-escuro)] text-3xl focus:outline-none"
        @click="menuAberto = !menuAberto"
        aria-label="Abrir menu"
      >
        <!-- Ícone hambúrguer -->
        <svg v-if="!menuAberto" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- Ícone fechar -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu desktop -->
      <nav
        class="hidden md:flex items-center gap-10 text-[var(--azul-escuro)] font-semibold text-base tracking-wide"
      >
        <router-link to="/" class="transition hover:text-[var(--azul-medio)]">Home</router-link>
        <router-link to="/servicos" class="transition hover:text-[var(--azul-medio)]">Serviços</router-link>
        <router-link to="/sobre" class="transition hover:text-[var(--azul-medio)]">Sobre</router-link>
        <router-link to="/faq" class="transition hover:text-[var(--azul-medio)]">FAQ</router-link>
        <router-link to="/contato" class="transition hover:text-[var(--azul-medio)]">Contato</router-link>
      </nav>
    </div>

    <!-- Menu mobile -->
    <nav
      v-if="menuAberto"
      class="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4
             text-[var(--azul-escuro)] font-semibold text-base tracking-wide"
    >
      <router-link @click="menuAberto = false" to="/" class="block transition hover:text-[var(--azul-medio)]">Home</router-link>
      <router-link @click="menuAberto = false" to="/servicos" class="block transition hover:text-[var(--azul-medio)]">Serviços</router-link>
      <router-link @click="menuAberto = false" to="/sobre" class="block transition hover:text-[var(--azul-medio)]">Sobre</router-link>
      <router-link @click="menuAberto = false" to="/faq" class="block transition hover:text-[var(--azul-medio)]">FAQ</router-link>
      <router-link @click="menuAberto = false" to="/contato" class="block transition hover:text-[var(--azul-medio)]">Contato</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoIcon from '../assets/img/logo-icon.png'

const menuAberto = ref(false)
</script>