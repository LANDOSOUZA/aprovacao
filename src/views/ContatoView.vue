<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Entre em Contato
    </h1>

    <!-- WhatsApp -->
    <Card>
      <h2 class="text-xl font-bold mb-4">WhatsApp</h2>
      <p class="mb-4">
        Atendimento rápido e direto. Envie sua dúvida, documento ou Auto de Infração.
      </p>

      <a
        href="https://wa.me/seu_numero"
        target="_blank"
        class="inline-block bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar pelo WhatsApp
      </a>
    </Card>

    <!-- E-mail -->
    <Card>
      <h2 class="text-xl font-bold mb-4">E-mail</h2>
      <p class="mb-4">
        Para envio de documentos e solicitações formais:
      </p>

      <p class="font-semibold text-[var(--azul-escuro)]">
        contato@aprovacaoadministrativa.com.br
      </p>
    </Card>

    <!-- Horário de atendimento -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Horário de atendimento</h2>
      <p>
        Segunda a sexta-feira<br />
        08h às 18h<br />
        Atendimento 100% on-line
      </p>
    </Card>

    <!-- Aviso de privacidade -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Privacidade</h2>
      <p class="text-gray-700">
        Seus dados e documentos são tratados com total sigilo e utilizados exclusivamente para fins administrativos relacionados ao serviço contratado.
      </p>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
