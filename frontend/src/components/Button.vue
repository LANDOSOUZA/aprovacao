<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="onClick"
    class="px-4 py-2 rounded font-semibold text-white transition
           bg-[var(--azul-medio)] hover:bg-[var(--azul-escuro)]
           disabled:bg-gray-400 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  onClick: Function
})
</script>
