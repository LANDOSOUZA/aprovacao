<template>
  <div
    v-if="mostrar"
    class="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded shadow-lg transition-opacity duration-300"
  >
    {{ mensagem }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  mensagem: String,
  mostrar: Boolean
})
</script>
