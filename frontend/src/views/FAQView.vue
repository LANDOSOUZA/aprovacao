<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Perguntas Frequentes (FAQ)
    </h1>

    <Card>
      <h2 class="text-xl font-bold mb-4">Dúvidas comuns</h2>

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

      </div>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
