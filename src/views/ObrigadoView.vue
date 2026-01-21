<template>
  <div class="max-w-3xl mx-auto px-4 py-20 text-center space-y-8">

    <h1 class="text-3xl font-bold text-[var(--azul-escuro)]">
      Obrigado pelo contato!
    </h1>

    <p class="text-lg text-gray-700 leading-relaxed">
      Recebemos sua mensagem e nossa equipe já está analisando.
      Em breve você receberá uma resposta no WhatsApp ou por e-mail.
    </p>

    <p class="text-gray-600">
      Nosso atendimento é de segunda a sexta-feira, das 08h às 18h.
    </p>

    <div class="space-y-4">
      <a
        href="https://wa.me/seu_numero"
        target="_blank"
        class="inline-block bg-[var(--verde-whatsapp)] text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
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
