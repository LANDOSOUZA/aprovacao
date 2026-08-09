<template>
  <footer class="bg-gray-100 border-t border-gray-200 mt-10 py-8">
    <div class="max-w-6xl mx-auto px-4 text-center space-y-3">

      <!-- Nome da empresa -->
      <p class="text-xl font-semibold text-[var(--azul-escuro)]">
        Aprovação Administrativa
      </p>

      <!-- CNPJ e Localização -->
      <p class="text-sm text-gray-700">
        CNPJ: 66.052.603/0001-45
      </p>

      <p class="text-sm text-gray-700">
        Campinas – SP
      </p>

      <!-- Descrição -->
      <p class="text-gray-700 mt-2">
        Serviços de Apoio Administrativo
      </p>

      <!-- E-mail -->
      <p class="text-sm text-gray-600 mt-2">
        
          href="mailto:contato@aprovacaoadm.com.br"
          class="hover:underline"
          aria-label="Enviar e-mail para contato@aprovacaoadm.com.br"
        >
          contato@aprovacaoadm.com.br
        </a>
      </p>

      <!-- Links -->
      <div class="flex justify-center gap-6 text-sm mt-4">
        <router-link
          to="/politica"
          class="hover:text-[var(--azul-medio)] transition"
          aria-label="Política de Privacidade"
        >
          Política de Privacidade
        </router-link>

        <router-link
          to="/termos"
          class="hover:text-[var(--azul-medio)] transition"
          aria-label="Termos de Uso"
        >
          Termos de Uso
        </router-link>

        <router-link
          to="/admin"
          class="text-gray-400 hover:text-gray-600 transition"
          aria-label="Acesso administrativo"
        >
          Admin
        </router-link>
      </div>

      <!-- Direitos -->
      <p class="text-xs text-gray-500 mt-6">
        © {{ new Date().getFullYear() }} Aprovação Administrativa — Todos os direitos reservados.
      </p>

    </div>
  </footer>
</template>

<script setup>
</script>