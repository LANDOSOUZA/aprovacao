<template>
  <div class="max-w-5xl mx-auto space-y-8 py-10 px-4">

    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Entre em Contato
    </h1>

    <!-- WhatsApp -->
    <Card>
      <div class="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.436 5.166L2 22l4.99-1.31A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.06-1.11l-.29-.17-3.02.79.81-2.94-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
        <h2 class="text-xl font-bold">WhatsApp</h2>
      </div>

      <p class="mb-4 text-gray-700">
        Atendimento rápido e direto. Envie dúvidas, documentos ou solicitações administrativas.
      </p>

      
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
      <div class="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h2 class="text-xl font-bold">E-mail</h2>
      </div>

      <p class="mb-4 text-gray-700">
        Para envio de documentos e solicitações formais:
      </p>

      
        href="mailto:contato@aprovacaoadm.com.br"
        aria-label="Enviar e-mail para contato@aprovacaoadm.com.br"
        class="font-semibold text-[var(--azul-escuro)] hover:underline"
      >
        contato@aprovacaoadm.com.br
      </a>
    </Card>

    <!-- Horário -->
    <Card>
      <div class="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-xl font-bold">Horário de atendimento</h2>
      </div>

      <p class="text-gray-700 leading-relaxed">
        Segunda a sexta-feira<br />
        08h às 18h<br />
        Atendimento 100% on-line e remoto
      </p>
    </Card>

    <!-- Privacidade -->
    <Card>
      <div class="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <h2 class="text-xl font-bold">Privacidade</h2>
      </div>

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