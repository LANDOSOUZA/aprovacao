<template>
  <div class="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">

    <h1 class="text-3xl font-bold text-[var(--azul-escuro)]">
      Obrigado pelo contato!
    </h1>

    <p class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
      Sua mensagem foi recebida com sucesso. Nossa equipe já está analisando e
      retornará em breve pelo WhatsApp ou e-mail.
    </p>

    <p class="text-gray-600">
      Atendimento de segunda a sexta-feira, das 08h às 18h.
    </p>

    <div class="space-y-4 pt-4">
      
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-flex items-center gap-2 bg-[var(--verde-whatsapp)] text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar pelo WhatsApp
      </a>

      <router-link
        to="/"
        class="block text-[var(--azul-medio)] font-semibold hover:text-[var(--azul-escuro)] transition"
      >
        Voltar para a página inicial
      </router-link>
    </div>

  </div>
</template>

<script setup>
</script>