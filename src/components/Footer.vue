<template>
  <footer class="bg-gray-100 border-t border-gray-200 mt-16 py-10">
    <div class="max-w-6xl mx-auto px-4 text-center space-y-4">

      <p class="text-xl font-semibold text-[var(--azul-escuro)]">
        Aprovação Administrativa
        CNPJ: 66.052.603/0001-45
        Campinas - SP
      </p>

      <p class="text-gray-700">
        Serviços Administrativos Especializados
      </p>

      <p class="text-sm text-gray-600">
        contato@aprovacaoadm.com.br
      </p>

      <div class="flex justify-center gap-6 text-sm mt-4">
        <router-link to="/politica" class="hover:text-[var(--azul-medio)] transition">
          Política de Privacidade
        </router-link>
        <router-link to="/termos" class="hover:text-[var(--azul-medio)] transition">
          Termos de Uso
        </router-link>
      </div>

      <p class="text-xs text-gray-500 mt-6">
        © {{ new Date().getFullYear() }} Aprovação Administrativa — Todos os direitos reservados.
      </p>

    </div>
  </footer>
</template>

<script setup>
</script>
