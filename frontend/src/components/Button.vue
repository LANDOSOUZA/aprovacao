<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
    class="rounded font-semibold text-white transition focus:outline-none
           flex items-center justify-center gap-2
           disabled:bg-gray-400 disabled:cursor-not-allowed
           hover:brightness-110 active:brightness-90"
    :class="[
      tamanhoClasses,
      varianteClasses
    ]"
    :aria-disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  tamanho: { type: String, default: 'md' },   // sm, md, lg, full
  variante: { type: String, default: 'primary' } // primary, secondary, danger
})

const tamanhoClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
  full: 'w-full px-4 py-2'
}[props.tamanho]

const varianteClasses = {
  primary: 'bg-[var(--azul-medio)] hover:bg-[var(--azul-escuro)]',
  secondary: 'bg-gray-600 hover:bg-gray-700',
  danger: 'bg-red-600 hover:bg-red-700'
}[props.variante]
</script>
