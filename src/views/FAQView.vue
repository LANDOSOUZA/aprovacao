<template>
  <div class="max-w-5xl mx-auto space-y-10 py-10 px-4">

    <!-- Título -->
    <h1 class="text-3xl font-bold text-[var(--azul-escuro)] text-center">
      Perguntas Frequentes (FAQ)
    </h1>

    <!-- FAQ -->
    <Card>
      <h2 class="text-xl font-bold mb-4">Dúvidas comuns</h2>

      <div class="space-y-6">

        <div>
          <h3 class="font-semibold">O atendimento é realmente 100% on-line</h3>
          <p class="text-gray-700">
            Sim. Todo o processo — envio de documentos, orientações, elaboração de defesas e acompanhamento — é realizado de forma totalmente digital.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Como envio meus documentos</h3>
          <p class="text-gray-700">
            Você pode enviar por WhatsApp ou e-mail. Assim que iniciarmos o atendimento, informamos exatamente quais documentos são necessários.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Vocês fazem defesa jurídica</h3>
          <p class="text-gray-700">
            Não. Nossa atuação é exclusivamente administrativa, voltada à elaboração de defesas administrativas e organização documental.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Quanto tempo leva para regularizar meu cadastro</h3>
          <p class="text-gray-700">
            O prazo depende da demanda da Vigilância Sanitária do seu município. Nós agilizamos tudo na parte administrativa, mas o tempo de análise é definido pelo órgão público.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Preciso ter CNPJ para contratar</h3>
          <p class="text-gray-700">
            Não. Atendemos tanto pessoas físicas quanto jurídicas.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Como funciona o pagamento</h3>
          <p class="text-gray-700">
            O pagamento é feito via Pix. O valor é informado antes do início do serviço, sem surpresas.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Vocês atendem apenas Campinas</h3>
          <p class="text-gray-700">
            Não. Como o atendimento é on-line, podemos auxiliar empreendedores de qualquer município.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Vocês acompanham o processo até o final</h3>
          <p class="text-gray-700">
            Sim. Após o envio da documentação ou defesa administrativa, acompanhamos o andamento e mantemos você informado.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Vocês garantem aprovação</h3>
          <p class="text-gray-700">
            Não. A decisão final é sempre da autoridade pública. O que garantimos é qualidade técnica, organização documental e cumprimento de prazos.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">O que acontece se eu perder o prazo do Auto de Infração</h3>
          <p class="text-gray-700">
            Cada município tem regras específicas. Entre em contato o quanto antes para avaliarmos a situação.
          </p>
        </div>

      </div>
    </Card>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
