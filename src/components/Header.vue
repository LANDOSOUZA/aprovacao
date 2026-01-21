<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

      <router-link to="/" class="flex items-center space-x-2">
        <img 
          :src="logoIcon" 
          alt="Ícone Aprovação Administrativa" 
          class="w-48 h-auto"
        />
      </router-link>


      <!-- Botão mobile -->
      <button
        class="md:hidden text-[var(--azul-escuro)] text-3xl"
        @click="menuAberto = !menuAberto"
      >
        ☰
      </button>

      <!-- Menu desktop -->
      <nav class="hidden md:flex gap-10 text-[var(--azul-escuro)] font-semibold text-base tracking-wide">
        <router-link 
          to="/" 
          class="transition hover:[color:var(--azul-medio)]"
        >
          Home
        </router-link>

        <router-link 
          to="/servicos" 
          class="transition hover:[color:var(--azul-medio)]"
        >
          Serviços
        </router-link>

        <router-link 
          to="/sobre" 
          class="transition hover:[color:var(--azul-medio)]"
        >
          Sobre
        </router-link>

        <router-link 
          to="/faq" 
          class="transition hover:[color:var(--azul-medio)]"
        >
          FAQ
        </router-link>

        <router-link 
          to="/contato" 
          class="transition hover:[color:var(--azul-medio)]"
        >
          Contato
        </router-link>
      </nav>



    </div>

    <!-- Menu mobile -->
    <nav
      v-if="menuAberto"
      class="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 
            text-[var(--azul-escuro)] font-semibold text-base tracking-wide"
    >
      <router-link 
        @click="menuAberto = false" 
        to="/" 
        class="block transition hover:[color:var(--azul-medio)]"
      >
        Home
      </router-link>

      <router-link 
        @click="menuAberto = false" 
        to="/servicos" 
        class="block transition hover:[color:var(--azul-medio)]"
      >
        Serviços
      </router-link>

      <router-link 
        @click="menuAberto = false" 
        to="/sobre" 
        class="block transition hover:[color:var(--azul-medio)]"
      >
        Sobre
      </router-link>

      <router-link 
        @click="menuAberto = false" 
        to="/faq" 
        class="block transition hover:[color:var(--azul-medio)]"
      >
        FAQ
      </router-link>

      <router-link 
        @click="menuAberto = false" 
        to="/contato" 
        class="block transition hover:[color:var(--azul-medio)]"
      >
        Contato
      </router-link>
    </nav>

  </header>
</template>

<script setup>
import logoIcon from '../assets/img/logo-icon.png'
import { ref } from 'vue'
const menuAberto = ref(false)
</script>
