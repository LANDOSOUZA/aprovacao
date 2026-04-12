<template>
  <div
    class="rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
    :class="customClasses"
    role="region"
    :aria-label="title || 'Seção de conteúdo'"
  >
    <div class="p-5 md:p-6">

      <!-- Título opcional -->
      <h2
        v-if="title"
        class="text-xl font-bold mb-4 text-[var(--azul-escuro)]"
      >
        {{ title }}
      </h2>

      <!-- Conteúdo -->
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  customClasses: {
    type: String,
    default: ''
  }
})
</script>
