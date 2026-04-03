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
        A Aprovação Administrativa nasceu com o propósito de facilitar a vida do pequeno
        empreendedor que precisa lidar com processos administrativos junto à Prefeitura
        e órgãos públicos municipais, incluindo Vigilância Sanitária.
        Nosso foco é oferecer orientação clara, organização documental e suporte técnico
        para que cada cliente consiga regularizar seu negócio com tranquilidade e segurança.
      </p>
    </Card>

    <!-- Missão -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Nossa missão</h2>
      <p>
        Ajudar empreendedores a superar a burocracia, oferecendo serviços administrativos
        acessíveis, eficientes e totalmente on-line.
      </p>
    </Card>

    <!-- Valores -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Nossos valores</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Transparência em todas as etapas do processo</li>
        <li>Responsabilidade no tratamento de documentos e prazos</li>
        <li>Clareza na comunicação</li>
        <li>Compromisso com a qualidade do atendimento</li>
        <li>Ética em cada orientação prestada</li>
      </ul>
    </Card>

    <!-- Como trabalhamos -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Como trabalhamos</h2>
      <p>
        Atuamos exclusivamente na esfera administrativa, oferecendo:
      </p>
      <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Análise documental</li>
        <li>Preenchimento de formulários</li>
        <li>Elaboração de defesas administrativas</li>
        <li>Acompanhamento de processos</li>
        <li>Suporte remoto</li>
      </ul>
      <p class="mt-4">
        Todo o atendimento é realizado de forma 100% on-line, garantindo agilidade
        e praticidade para o cliente.
      </p>
      <p class="text-xs text-gray-600 italic mt-2">
        Atuação exclusivamente administrativa, sem prestação de serviços jurídicos.
      </p>
    </Card>

    <!-- Propósito -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Por que existimos</h2>
      <p>
        Sabemos que muitos empreendedores se sentem perdidos diante de exigências, prazos
        e documentos. Nosso objetivo é simplificar esse caminho, oferecendo suporte técnico
        e administrativo para que cada cliente possa focar no que realmente importa:
        o próprio negócio.
      </p>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>