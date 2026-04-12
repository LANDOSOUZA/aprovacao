<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título principal -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Nossos Serviços
    </h1>

    <!-- Cadastro e Regularização -->
    <Card title="Cadastro e Regularização Administrativa">
      <p class="text-gray-700 leading-relaxed">
        Apoio administrativo completo para empreendedores que precisam realizar ou atualizar
        cadastros e regularizações junto à Prefeitura e órgãos públicos municipais,
        incluindo Vigilância Sanitária.
      </p>

      <h3 class="font-semibold mt-6 text-[var(--azul-escuro)]">Como funciona</h3>
      <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700">
        <li>Análise da situação atual</li>
        <li>Orientação sobre documentos necessários</li>
        <li>Preenchimento de formulários</li>
        <li>Organização e envio da documentação</li>
        <li>Acompanhamento do processo até a conclusão</li>
      </ul>

      <h3 class="font-semibold mt-6 text-[var(--azul-escuro)]">Benefícios</h3>
      <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700">
        <li>Evita erros que atrasam o processo</li>
        <li>Reduz risco de autuações</li>
        <li>Atendimento claro e acessível</li>
        <li>Processo 100% on-line</li>
      </ul>

      <div class="mt-6">
        <a
          href="https://wa.me/5519997070990"
          target="_blank"
          class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Solicitar regularização
        </a>
      </div>
    </Card>

    <!-- Defesa Administrativa -->
    <Card title="Defesa Administrativa em Processos Municipais">
      <p class="text-gray-700 leading-relaxed">
        Elaboração de defesa administrativa para responder notificações, exigências ou
        Autos de Infração emitidos por órgãos públicos municipais, com foco em organização
        documental e argumentação técnica.
      </p>

      <h3 class="font-semibold mt-6 text-[var(--azul-escuro)]">Como funciona</h3>
      <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700">
        <li>Análise completa da notificação ou auto</li>
        <li>Identificação de inconsistências e pontos críticos</li>
        <li>Orientação sobre documentos complementares</li>
        <li>Elaboração da defesa administrativa</li>
        <li>Protocolo dentro do prazo</li>
        <li>Acompanhamento do andamento</li>
      </ul>

      <h3 class="font-semibold mt-6 text-[var(--azul-escuro)]">O que está incluído</h3>
      <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700">
        <li>Redação técnica da defesa</li>
        <li>Organização de documentos</li>
        <li>Orientação sobre exigências</li>
        <li>Suporte durante todo o processo</li>
      </ul>

      <p class="text-xs text-gray-600 italic mt-4">
        Atuação exclusivamente administrativa, sem caráter jurídico.
      </p>

      <div class="mt-6">
        <a
          href="https://wa.me/5519997070990"
          target="_blank"
          class="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Solicitar defesa administrativa
        </a>
      </div>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
