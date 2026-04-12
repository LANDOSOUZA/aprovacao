<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-20">

    <!-- Headline -->
    <section class="text-center space-y-4 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-[var(--azul-escuro)] leading-snug">
        Serviços administrativos especializados para cadastros, regularizações e defesas administrativas junto à Prefeitura e órgãos públicos municipais.
      </h1>

      <p class="text-lg text-gray-700 leading-relaxed">
        Atendimento 100% on-line, com orientação clara, preço justo e foco em simplificar processos administrativos para o empreendedor.
      </p>

      <a
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar agora pelo WhatsApp
      </a>
    </section>

    <!-- O que fazemos -->
    <Card title="O que fazemos">
      <p class="text-gray-700 leading-relaxed">
        A Aprovação Administrativa oferece suporte documental e técnico para empreendedores que precisam regularizar seus estabelecimentos ou atender a exigências e notificações emitidas por órgãos públicos municipais.
      </p>

      <ul class="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-relaxed">
        <li>Cadastro e regularização administrativa</li>
        <li>Defesa administrativa</li>
        <li>Orientação e organização documental</li>
        <li>Acompanhamento de processos junto à Prefeitura</li>
      </ul>
    </Card>

    <!-- Nossos serviços -->
    <Card title="Serviços em destaque">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div>
          <h3 class="font-semibold text-[var(--azul-escuro)]">📌 Cadastro e Regularização</h3>
          <p class="text-sm mt-2 text-gray-700 leading-relaxed">
            Organização de documentos, preenchimento de formulários, orientações e acompanhamento do processo junto à Prefeitura e órgãos competentes.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-[var(--azul-escuro)]">📌 Defesa Administrativa</h3>
          <p class="text-sm mt-2 text-gray-700 leading-relaxed">
            Elaboração de defesa administrativa, análise de notificações ou autos administrativos, organização documental e protocolo dentro do prazo.
            <br />
            <span class="text-xs text-gray-600 italic">
              Atuação exclusivamente administrativa, sem caráter jurídico.
            </span>
          </p>
        </div>

      </div>
    </Card>

    <!-- Por que escolher -->
    <Card title="Por que escolher a Aprovação Administrativa">
      <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
        <li>Atendimento claro e humanizado</li>
        <li>Experiência prática com processos administrativos</li>
        <li>Respostas rápidas</li>
        <li>Preço acessível</li>
        <li>Segurança e sigilo documental</li>
        <li>Atendimento 100% on-line</li>
      </ul>
    </Card>

    <!-- Chamada final -->
    <section class="text-center space-y-4 max-w-2xl mx-auto">
      <h2 class="text-xl font-bold text-[var(--azul-escuro)] leading-snug">
        Precisa regularizar seu negócio ou atender a uma exigência administrativa?
      </h2>

      <p class="text-gray-700">
        Entre em contato e receba orientação administrativa clara e objetiva.
      </p>

      <a
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar agora pelo WhatsApp
      </a>

      <a href="/admin" class="block text-sm text-gray-500 hover:text-gray-800 mt-2">
        Entrar como Admin
      </a>
    </section>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
