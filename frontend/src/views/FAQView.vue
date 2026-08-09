<template>
  <div class="max-w-5xl mx-auto space-y-8 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Perguntas Frequentes (FAQ)
    </h1>

    <Card>
      <div class="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--azul-escuro)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-xl font-bold">Dúvidas comuns</h2>
      </div>

      <div class="space-y-4">

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            O atendimento é realmente 100% on-line?
          </summary>
          <p class="text-gray-700 mt-2">
            Sim. Todo o processo — envio de documentos, orientações, elaboração de defesas e acompanhamento — é realizado de forma totalmente digital.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Como envio meus documentos?
          </summary>
          <p class="text-gray-700 mt-2">
            Você pode enviar por WhatsApp ou e-mail. Assim que iniciarmos o atendimento, informamos exatamente quais documentos são necessários.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Vocês fazem defesa jurídica?
          </summary>
          <p class="text-gray-700 mt-2">
            Não. Nossa atuação é exclusivamente administrativa, voltada à organização documental e à elaboração de defesas administrativas, sem prestação de serviços jurídicos.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Quanto tempo leva para regularizar meu cadastro?
          </summary>
          <p class="text-gray-700 mt-2">
            O prazo depende da demanda do órgão público competente. Nós agilizamos tudo na parte administrativa, mas o tempo de análise é definido pelo órgão público.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Preciso ter CNPJ para contratar?
          </summary>
          <p class="text-gray-700 mt-2">
            Não. Atendemos tanto pessoas físicas quanto jurídicas.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Como funciona o pagamento?
          </summary>
          <p class="text-gray-700 mt-2">
            O pagamento é feito via Pix. O valor é informado antes do início do serviço, sem surpresas.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Vocês atendem apenas Campinas?
          </summary>
          <p class="text-gray-700 mt-2">
            Não. Como o atendimento é on-line, podemos auxiliar empreendedores de qualquer município.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Vocês acompanham o processo até o final?
          </summary>
          <p class="text-gray-700 mt-2">
            Sim. Após o envio da documentação ou defesa administrativa, acompanhamos o andamento e mantemos você informado.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Vocês garantem aprovação?
          </summary>
          <p class="text-gray-700 mt-2">
            Não. A decisão final é sempre da autoridade pública. O que garantimos é qualidade técnica, organização documental e cumprimento de prazos.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            O que acontece se eu perder um prazo administrativo?
          </summary>
          <p class="text-gray-700 mt-2">
            Cada município tem regras específicas. Entre em contato o quanto antes para avaliarmos a situação.
          </p>
        </details>

        <details class="group border-b pb-4">
          <summary class="font-semibold cursor-pointer group-open:text-[var(--azul-escuro)]">
            Quem assina a planta técnica de LTA?
          </summary>
          <p class="text-gray-700 mt-2">
            A planta é elaborada por nossa equipe e revisada e assinada por um engenheiro parceiro, que assume a responsabilidade técnica (ART) perante o órgão competente.
          </p>
        </details>

      </div>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>