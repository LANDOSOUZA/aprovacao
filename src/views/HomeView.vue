<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-20">

    <!-- Headline -->
    <section class="text-center space-y-4">
      <h1 class="text-3xl font-bold text-[var(--azul-escuro)]">
        Serviços administrativos especializados para cadastros, regularizações e defesas administrativas junto à Vigilância Sanitária municipal.
      </h1>
      <p class="text-lg text-gray-700">
        Atendimento 100% on-line, com orientação clara, preço justo e foco total em resolver o problema do empreendedor.
      </p>
      <a
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-block bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar agora pelo WhatsApp
      </a>
    </section>

    <!-- O que fazemos -->
    <Card>
      <h2 class="text-xl font-bold mb-4">O que fazemos</h2>
      <p>
        A Aprovação Administrativa oferece suporte documental e técnico para empreendedores que precisam regularizar seus estabelecimentos ou responder a Autos de Infração emitidos pela Vigilância Sanitária municipal.
      </p>
      <ul class="list-disc pl-6 mt-4 space-y-2">
        <li>Cadastro e Regularização</li>
        <li>Defesa Administrativa</li>
        <li>Orientação documental</li>
        <li>Acompanhamento de processos</li>
      </ul>
    </Card>

    <!-- Nossos serviços -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Serviços em destaque</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-[var(--azul-escuro)]">📌 Cadastro e Regularização</h3>
          <p class="text-sm mt-2">
            Organização de documentos, preenchimento de formulários, orientações e acompanhamento do processo até a aprovação.
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-[var(--azul-escuro)]">📌 Defesa Administrativa</h3>
          <p class="text-sm mt-2">
            Elaboração de defesa administrativa, análise do Auto, organização documental e protocolo dentro do prazo.
            <br />
            <span class="text-xs text-gray-600 italic">Atuação exclusivamente administrativa, sem caráter jurídico.</span>
          </p>
        </div>
      </div>
    </Card>

    <!-- Por que escolher -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Por que escolher a Aprovação Administrativa</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Atendimento claro e humanizado</li>
        <li>Experiência prática com processos administrativos</li>
        <li>Respostas rápidas</li>
        <li>Preço acessível</li>
        <li>Segurança e sigilo documental</li>
        <li>Atendimento 100% on-line</li>
      </ul>
    </Card>

    <!-- Chamada final -->
    <section class="text-center space-y-4">
      <h2 class="text-xl font-bold text-[var(--azul-escuro)]">
        Precisa regularizar seu negócio ou responder a um Auto de Infração?
      </h2>
      <p>Entre em contato e receba orientação imediata.</p>
      <a
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-block bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar agora pelo WhatsApp
      </a>
    </section>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
