<template>
  <div class="max-w-3xl mx-auto p-6 space-y-6">
    <header class="space-y-1">
      <h1 class="text-2xl font-semibold">Painel — Link e Mensagem para o Cliente</h1>
      <p class="text-sm text-gray-600">Gere link + mensagem e abra WhatsApp/E-mail automaticamente.</p>
    </header>

    <!-- Dados do processo -->
    <section class="bg-white rounded-lg border p-4 space-y-4">
      <h2 class="font-semibold">Dados do processo</h2>

      <div class="grid md:grid-cols-3 gap-3">
        <div>
          <label class="text-sm text-gray-700">Processo</label>
          <input v-model.trim="processId" class="mt-1 w-full border rounded px-3 py-2" placeholder="ex.: 2026-001" />
        </div>

        <div>
          <label class="text-sm text-gray-700">Token</label>
          <input v-model.trim="token" class="mt-1 w-full border rounded px-3 py-2" placeholder="ex.: AbC9xY9Pq2Lm4N" />
        </div>

        <div>
          <label class="text-sm text-gray-700">Nome do cliente (opcional)</label>
          <input v-model.trim="clienteNome" class="mt-1 w-full border rounded px-3 py-2" placeholder="ex.: João" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-3">
        <div>
          <label class="text-sm text-gray-700">WhatsApp (opcional)</label>
          <input v-model.trim="telefone" class="mt-1 w-full border rounded px-3 py-2" placeholder="DDI+DDD+Número (somente dígitos). Ex: 5511999999999" />
          <p class="text-xs text-gray-500 mt-1">Se vazio, abre WhatsApp com texto para você escolher o contato.</p>
        </div>

        <div>
          <label class="text-sm text-gray-700">E-mail (opcional)</label>
          <input v-model.trim="email" class="mt-1 w-full border rounded px-3 py-2" placeholder="cliente@exemplo.com" />
        </div>
      </div>

      <div class="space-y-2">
        <label class="text-sm text-gray-700">Link do cliente (upload)</label>
        <div class="flex gap-2">
          <input :value="clientLink" readonly class="w-full border rounded px-3 py-2 bg-gray-50" />
          <button @click="copy(clientLink)" class="px-3 py-2 rounded bg-gray-900 text-white">Copiar</button>
        </div>
        <p v-if="!clientLinkOk" class="text-sm text-red-600">Preencha Processo e Token para gerar o link.</p>
      </div>
    </section>

    <!-- Checklist: pedir do cliente -->
    <section class="bg-white rounded-lg border p-4 space-y-4">
      <h2 class="font-semibold">Documentos que o cliente deve ENVIAR</h2>

      <div class="grid md:grid-cols-2 gap-2">
        <label v-for="d in requestDocs" :key="d.id" class="flex items-center gap-2 p-2 border rounded">
          <input type="checkbox" v-model="d.checked" />
          <span>{{ d.label }}</span>
        </label>
      </div>

      <div class="flex gap-2">
        <input v-model.trim="requestCustom" class="w-full border rounded px-3 py-2" placeholder="Adicionar item (ex.: Foto do imóvel)" />
        <button @click="addCustom('request')" class="px-3 py-2 rounded bg-blue-600 text-white">Adicionar</button>
      </div>
    </section>

    <!-- Checklist: você envia para o cliente -->
    <section class="bg-white rounded-lg border p-4 space-y-4">
      <h2 class="font-semibold">Documentos que VOCÊ está ENVIANDO para o cliente</h2>

      <div class="grid md:grid-cols-2 gap-2">
        <label v-for="d in sendDocs" :key="d.id" class="flex items-center gap-2 p-2 border rounded">
          <input type="checkbox" v-model="d.checked" />
          <span>{{ d.label }}</span>
        </label>
      </div>

      <div class="flex gap-2">
        <input v-model.trim="sendCustom" class="w-full border rounded px-3 py-2" placeholder="Adicionar item (ex.: Procuração para assinatura)" />
        <button @click="addCustom('send')" class="px-3 py-2 rounded bg-blue-600 text-white">Adicionar</button>
      </div>
    </section>

    <!-- Mensagem pronta -->
    <section class="bg-white rounded-lg border p-4 space-y-3">
      <h2 class="font-semibold">Mensagem pronta</h2>

      <textarea :value="message" readonly class="w-full h-56 border rounded px-3 py-2 bg-gray-50"></textarea>

      <div class="flex flex-wrap gap-2">
        <button @click="copy(message)" class="px-3 py-2 rounded bg-gray-900 text-white">Copiar mensagem</button>
        <a :href="whatsHref" target="_blank" class="px-3 py-2 rounded bg-green-600 text-white">Abrir WhatsApp</a>
        <a :href="mailHref" class="px-3 py-2 rounded bg-indigo-600 text-white">Criar E-mail</a>
      </div>
    </section>

    <p v-if="toast" class="text-sm text-green-700">{{ toast }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

OnMounted(() => {
  console.log('[ADMIN FORM] mounted')
  console.log('[ADMIN FORM] route:', route.fullPath)
})
const processId = ref('')
const token = ref('')
const clienteNome = ref('')
const telefone = ref('') // só dígitos, ex 5511999999999
const email = ref('')

const requestCustom = ref('')
const sendCustom = ref('')
const toast = ref('')

const mk = (id, label, checked=false) => ({ id, label, checked })

const requestDocs = ref([
  mk('rgcpf', 'RG e CPF'),
  mk('comp_end', 'Comprovante de endereço'),
  mk('contrato_social', 'Contrato social (se PJ)'),
  mk('cnpj', 'Cartão CNPJ (se PJ)'),
  mk('proc', 'Procuração (se aplicável)'),
  mk('outros', 'Outros documentos solicitados'),
])

const sendDocs = ref([
  mk('contrato', 'Contrato / Proposta de prestação de serviço'),
  mk('autorizacao', 'Autorização / Declaração'),
  mk('form', 'Formulário para assinatura'),
  mk('anexo', 'Anexos do processo'),
])

const clientLinkOk = computed(() => !!processId.value && !!token.value)

const clientLink = computed(() => {
  if (!clientLinkOk.value) return ''
  return `https://www.aprovacaoadm.com.br/enviar/${encodeURIComponent(processId.value)}?token=${encodeURIComponent(token.value)}`
})

const selectedRequest = computed(() => requestDocs.value.filter(d => d.checked).map(d => d.label))
const selectedSend = computed(() => sendDocs.value.filter(d => d.checked).map(d => d.label))

const message = computed(() => {
  const nome = clienteNome.value ? `, ${clienteNome.value}` : ''
  const reqList = selectedRequest.value.length
    ? selectedRequest.value.map(i => `• ${i}`).join('\n')
    : '• (informe os documentos necessários)'

  const sendList = selectedSend.value.length
    ? selectedSend.value.map(i => `• ${i}`).join('\n')
    : ''

  const link = clientLinkOk.value ? clientLink.value : '(link do envio: preencha Processo e Token)'

  return [
    `Olá${nome}!`,
    ``,
    `Para darmos continuidade ao processo ${processId.value || '(processo)'}, peço por gentileza:`,
    ``,
    `📌 Documentos que preciso receber de você:`,
    reqList,
    ``,
    sendList ? `📄 Documentos que estou te enviando para assinatura/leitura:\n${sendList}\n` : '',
    `✅ Por favor, envie os documentos pelo link abaixo:`,
    link,
    ``,
    `Qualquer dúvida, fico à disposição.`,
    `Aprovação Administrativa`,
  ].filter(Boolean).join('\n')
})

const whatsHref = computed(() => {
  const text = encodeURIComponent(message.value)
  const fone = (telefone.value || '').replace(/\D/g, '')
  return fone ? `https://wa.me/${fone}?text=${text}` : `https://wa.me/?text=${text}`
})

const mailHref = computed(() => {
  const to = encodeURIComponent(email.value || '')
  const subject = encodeURIComponent(`Processo ${processId.value || ''} - Envio de documentos`)
  const body = encodeURIComponent(message.value)
  return `mailto:${to}?subject=${subject}&body=${body}`
})

function addCustom(kind) {
  if (kind === 'request') {
    const v = requestCustom.value.trim()
    if (!v) return
    requestDocs.value.push(mk(`req_${Date.now()}`, v, true))
    requestCustom.value = ''
    return
  }
  const v = sendCustom.value.trim()
  if (!v) return
  sendDocs.value.push(mk(`send_${Date.now()}`, v, true))
  sendCustom.value = ''
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast.value = 'Copiado!'
    setTimeout(() => (toast.value = ''), 1200)
  } catch {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    toast.value = 'Copiado!'
    setTimeout(() => (toast.value = ''), 1200)
  }
}
</script>
