<template>
  <transition name="fade-slide">
    <div
      v-if="mostrar"
      class="fixed bottom-6 right-6 px-4 py-3 rounded shadow-lg text-white z-50"
      :class="corClasses"
      role="alert"
    >
      {{ mensagem }}
    </div>
  </transition>
</template>

<script setup>
import { watch, computed } from 'vue'

const props = defineProps({
  mensagem: String,
  mostrar: Boolean,
  tipo: { type: String, default: 'info' }, // info, sucesso, erro, aviso
  duracao: { type: Number, default: 3000 } // 3s
})

const emit = defineEmits(['update:mostrar'])

const corClasses = computed(() => ({
  info: 'bg-gray-800',
  sucesso: 'bg-green-600',
  erro: 'bg-red-600',
  aviso: 'bg-yellow-600'
}[props.tipo]))

// Auto-esconde
watch(() => props.mostrar, (val) => {
  if (val) {
    setTimeout(() => emit('update:mostrar', false), props.duracao)
  }
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
