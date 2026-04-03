<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Sobre a Aprovação Administrativa
    </h1>

    <!-- Quem somos -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Quem somos</h2>
      <p>
        A Aprovação Administrativa é um serviço especializado em apoio
        administrativo para empreendedores e empresas que precisam lidar com
        processos junto à Prefeitura e demais órgãos públicos municipais,
        incluindo a Vigilância Sanitária.
      </p>
      <p class="mt-2">
        Nosso trabalho é voltado à orientação clara, organização documental e
        suporte técnico, auxiliando o cliente a conduzir a regularização do seu
        negócio com mais segurança, previsibilidade e tranquilidade.
      </p>
    </Card>

    <!-- Missão -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Nossa missão</h2>
      <p>
        Simplificar a burocracia administrativa por meio de serviços de apoio
        acessíveis, eficientes e realizados de forma totalmente on-line,
        contribuindo para que o empreendedor foque no desenvolvimento do seu
        negócio.
      </p>
    </Card>

    <!-- Valores -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Nossos valores</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Transparência em todas as etapas do atendimento</li>
        <li>Responsabilidade no tratamento de documentos e prazos</li>
        <li>Clareza e objetividade na comunicação</li>
        <li>Compromisso com a qualidade do serviço prestado</li>
        <li>Ética e respeito em cada orientação administrativa</li>
      </ul>
    </Card>

    <!-- Como atuamos -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Como atuamos</h2>
      <p>
        Nossa atuação é exclusivamente administrativa e compreende, entre
        outras atividades:
      </p>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Análise e organização de documentação</li>
        <li>Preenchimento e protocolo de formulários administrativos</li>
        <li>Elaboração de manifestações e defesas administrativas</li>
        <li>Acompanhamento de processos junto a órgãos municipais</li>
        <li>Suporte remoto e orientação ao cliente</li>
      </ul>
      <p class="mt-4">
        Todo o atendimento é realizado de forma 100% on-line, proporcionando
        agilidade, comodidade e acompanhamento contínuo.
      </p>
      <p class="text-xs text-gray-600 italic mt-2">
        Atuação exclusivamente administrativa, sem prestação de serviços
        jurídicos ou advocatícios.
      </p>
    </Card>

    <!-- Propósito -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Por que existimos</h2>
      <p>
        A rotina administrativa pode ser complexa e gerar insegurança para quem
        empreende. Existimos para tornar esse caminho mais simples, oferecendo
        suporte técnico e administrativo que ajude o cliente a compreender
        exigências, prazos e procedimentos, com mais organização e clareza.
      </p>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>