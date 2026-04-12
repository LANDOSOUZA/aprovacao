<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Sobre a Aprovação Administrativa
    </h1>

    <!-- Quem somos -->
    <Card title="Quem somos">
      <p class="text-gray-700 leading-relaxed">
        A Aprovação Administrativa é um serviço especializado em apoio administrativo
        para empreendedores e empresas que precisam lidar com processos junto à
        Prefeitura e demais órgãos públicos municipais, incluindo a Vigilância Sanitária.
      </p>

      <p class="mt-3 text-gray-700 leading-relaxed">
        Nosso foco é oferecer orientação clara, organização documental e suporte técnico,
        ajudando o cliente a conduzir a regularização do seu negócio com mais segurança,
        previsibilidade e tranquilidade.
      </p>
    </Card>

    <!-- Missão -->
    <Card title="Nossa missão">
      <p class="text-gray-700 leading-relaxed">
        Simplificar a burocracia administrativa por meio de serviços acessíveis,
        eficientes e totalmente on-line, permitindo que o empreendedor concentre sua
        energia no crescimento do negócio.
      </p>
    </Card>

    <!-- Valores -->
    <Card title="Nossos valores">
      <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
        <li>Transparência em todas as etapas do atendimento</li>
        <li>Responsabilidade no tratamento de documentos e prazos</li>
        <li>Clareza e objetividade na comunicação</li>
        <li>Compromisso com a qualidade do serviço prestado</li>
        <li>Ética e respeito em cada orientação administrativa</li>
      </ul>
    </Card>

    <!-- Como atuamos -->
    <Card title="Como atuamos">
      <p class="text-gray-700 leading-relaxed">
        Nossa atuação é exclusivamente administrativa e compreende, entre outras atividades:
      </p>

      <ul class="list-disc pl-6 space-y-2 mt-3 text-gray-700 leading-relaxed">
        <li>Análise e organização de documentação</li>
        <li>Preenchimento e protocolo de formulários administrativos</li>
        <li>Elaboração de manifestações e defesas administrativas</li>
        <li>Acompanhamento de processos junto a órgãos municipais</li>
        <li>Suporte remoto e orientação ao cliente</li>
      </ul>

      <p class="mt-4 text-gray-700 leading-relaxed">
        Todo o atendimento é realizado de forma 100% on-line, garantindo agilidade,
        comodidade e acompanhamento contínuo.
      </p>

      <p class="text-xs text-gray-600 italic mt-2">
        Atuação exclusivamente administrativa, sem prestação de serviços jurídicos ou advocatícios.
      </p>
    </Card>

    <!-- Propósito -->
    <Card title="Por que existimos">
      <p class="text-gray-700 leading-relaxed">
        A rotina administrativa pode ser complexa e gerar insegurança para quem empreende.
        Existimos para tornar esse caminho mais simples, oferecendo suporte técnico e
        administrativo que ajude o cliente a compreender exigências, prazos e procedimentos
        com mais organização e clareza.
      </p>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
