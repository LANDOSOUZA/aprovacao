<template>
  <div class="max-w-5xl mx-auto space-y-8 py-10 px-4">

    <!-- Título -->
    <div class="text-center space-y-3 max-w-2xl mx-auto">
      <div class="flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 21v-4m0 0V5a2 2 0 012-2h9.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2H6a2 2 0 01-2-2zm10-16v4a2 2 0 002 2h4" />
        </svg>
        <h1 class="text-3xl font-bold text-[var(--azul-escuro)]">
          Planta Técnica para LTA
        </h1>
      </div>
      <p class="text-gray-700 leading-relaxed">
        Elaboração de plantas técnicas para Laudo Técnico de Avaliação, com revisão
        e responsabilidade técnica de engenheiro parceiro.
      </p>
    </div>

    <!-- O que é -->
    <Card title="O que é o LTA">
      <p class="text-gray-700 leading-relaxed">
        O Laudo Técnico de Avaliação (LTA) é um documento exigido por órgãos municipais
        para regularização de estabelecimentos, avaliando as condições físicas e estruturais
        do imóvel. A planta técnica é parte essencial desse processo, representando com
        precisão os espaços e instalações do local.
      </p>
    </Card>

    <!-- O que é ART -->
    <Card title="O que é a ART">
      <p class="text-gray-700 leading-relaxed">
        A Anotação de Responsabilidade Técnica (ART) é o documento que formaliza a
        responsabilidade de um engenheiro registrado pela elaboração ou revisão de um
        projeto técnico. Toda planta entregue para fins de LTA precisa estar acompanhada
        de uma ART válida, emitida por profissional habilitado.
      </p>
    </Card>

    <!-- Como funciona a parceria -->
    <Card title="Como funciona">
      <div class="flex items-center gap-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span class="text-sm font-medium text-gray-500">Processo</span>
      </div>
      <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
        <li>Levantamento das medidas e características do imóvel</li>
        <li>Elaboração da planta técnica</li>
        <li>Revisão e assinatura por engenheiro parceiro, com emissão da ART</li>
        <li>Entrega da documentação pronta para protocolo no órgão competente</li>
      </ul>
      <p class="text-xs text-gray-600 italic mt-4">
        A planta é elaborada por nossa equipe e revisada por engenheiro parceiro,
        que assume a responsabilidade técnica perante o órgão competente.
      </p>
    </Card>

    <!-- Benefícios -->
    <Card title="Benefícios">
      <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
        <li>Processo mais ágil, com responsabilidade técnica garantida</li>
        <li>Documentação pronta para protocolo</li>
        <li>Atendimento integrado com os demais serviços administrativos</li>
        <li>Valor definido conforme a complexidade do projeto</li>
      </ul>
    </Card>

    <!-- CTA -->
    <div class="text-center space-y-4 max-w-xl mx-auto pt-2">
      <p class="text-gray-700">
        Precisa de uma planta técnica para regularizar seu estabelecimento?
      </p>

      <a
      
        href="https://wa.me/5519997070990"
        target="_blank"
        class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
      >
        Falar agora pelo WhatsApp
      </a>
    </div>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>