<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">

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
      <div class="flex items-center gap-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        <span class="text-sm font-medium text-gray-500">Visão geral</span>
      </div>
      <p class="text-gray-700 leading-relaxed">
        A Aprovação Administrativa oferece suporte documental e técnico para empreendedores que precisam regularizar seus estabelecimentos ou atender a exigências e notificações emitidas por órgãos públicos municipais.
      </p>

      <ul class="list-disc pl-6 mt-4 space-y-2 text-gray-700 leading-relaxed">
        <li>Cadastro e regularização administrativa</li>
        <li>Defesa administrativa</li>
        <li>Elaboração de plantas técnicas para LTA</li>
        <li>Orientação e organização documental</li>
        <li>Acompanhamento de processos junto à Prefeitura</li>
      </ul>
    </Card>

    <!-- Nossos serviços -->
    <Card title="Serviços em destaque">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="font-semibold text-[var(--azul-escuro)]">Cadastro e Regularização</h3>
          </div>
          <p class="text-sm mt-2 text-gray-700 leading-relaxed">
            Organização de documentos, preenchimento de formulários, orientações e acompanhamento do processo junto à Prefeitura e órgãos competentes.
          </p>
        </div>

        <div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="font-semibold text-[var(--azul-escuro)]">Defesa Administrativa</h3>
          </div>
          <p class="text-sm mt-2 text-gray-700 leading-relaxed">
            Elaboração de defesa administrativa, análise de notificações ou autos administrativos, organização documental e protocolo dentro do prazo.
            <br />
            <span class="text-xs text-gray-600 italic">
              Atuação exclusivamente administrativa, sem caráter jurídico.
            </span>
          </p>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 21v-4m0 0V5a2 2 0 012-2h9.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2H6a2 2 0 01-2-2zm10-16v4a2 2 0 002 2h4" />
            </svg>
            <h3 class="font-semibold text-[var(--azul-escuro)]">Plantas para LTA</h3>
          </div>
          <p class="text-sm mt-2 text-gray-700 leading-relaxed">
            Elaboração de plantas técnicas para Laudo Técnico de Avaliação (LTA), com revisão e responsabilidade técnica de engenheiro parceiro (ART).
          </p>
          <router-link to="/servicos/lta" class="text-sm font-medium text-[var(--azul-medio)] hover:underline mt-2 inline-block">
            Saiba mais →
          </router-link>
        </div>
      </div>
    </Card>

    <!-- Por que escolher -->
    <Card title="Por que escolher a Aprovação Administrativa">
      <div class="flex items-center gap-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm font-medium text-gray-500">Diferenciais</span>
      </div>
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