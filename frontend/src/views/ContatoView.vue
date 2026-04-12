<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Entre em Contato
    </h1>

    <!-- WhatsApp -->
    <Card>
      <h2 class="text-xl font-bold mb-4">WhatsApp</h2>

      <p class="mb-4 text-gray-700">
        Atendimento rápido e direto. Envie dúvidas, documentos ou solicitações administrativas.
      </p>

      <a
        href="https://wa.me/5519997070990"
        target="_blank"
        aria-label="Falar com atendimento pelo WhatsApp"
        class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        <span>Falar pelo WhatsApp</span>
      </a>
    </Card>

    <!-- E-mail -->
    <Card>
      <h2 class="text-xl font-bold mb-4">E-mail</h2>

      <p class="mb-4 text-gray-700">
        Para envio de documentos e solicitações formais:
      </p>

      <a
        href="mailto:contato@aprovacaoadm.com.br"
        aria-label="Enviar e-mail para contato@aprovacaoadm.com.br"
        class="font-semibold text-[var(--azul-escuro)] hover:underline"
      >
        contato@aprovacaoadm.com.br
      </a>
    </Card>

    <!-- Horário -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Horário de atendimento</h2>

      <p class="text-gray-700 leading-relaxed">
        Segunda a sexta-feira<br />
        08h às 18h<br />
        Atendimento 100% on-line e remoto
      </p>
    </Card>

    <!-- Privacidade -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Privacidade</h2>

      <p class="text-gray-700 leading-relaxed">
        Seus dados e documentos são tratados com total sigilo e utilizados exclusivamente
        para fins administrativos relacionados ao serviço contratado.
      </p>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
