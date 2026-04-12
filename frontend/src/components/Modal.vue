<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity"
    @click.self="close"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn"
      ref="modalBox"
    >
      <slot />

      <div class="mt-4 text-right">
        <Button @click="close">Fechar</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const modalBox = ref(null)

function close() {
  emit('close')
}

// Fecha com ESC
function handleKey(e) {
  if (e.key === 'Escape') close()
}

watch(() => props.show, (val) => {
  if (val) {
    document.addEventListener('keydown', handleKey)
    setTimeout(() => modalBox.value?.focus(), 50)
  } else {
    document.removeEventListener('keydown', handleKey)
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.15s ease-out;
}
</style>
