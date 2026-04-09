<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-md">
      <slot />
      <div class="mt-4 text-right">
        <Button @click="close">Fechar</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  show: Boolean
})

defineEmits(['close'])

function close() {
  emit('close')
}
</script>
