<template>
  <div class="max-w-3xl mx-auto p-6 space-y-10">

    <!-- Cabeçalho -->
    <header class="space-y-1">
      <h1 class="text-2xl font-semibold text-[var(--azul-escuro)]">
        Painel — Link e Mensagem para o Cliente
      </h1>
      <p class="text-sm text-gray-600">
        Gere link + mensagem e abra WhatsApp/E-mail automaticamente.
      </p>
    </header>

    <!-- Atalho: Tabela de Preços -->
    <div class="flex justify-center">
      <router-link
        to="/admin/tabela-precos"
        class="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        📄 Tabela de Preços
      </router-link>
    </div>

    <!-- Dados do processo -->
    <section class="bg-white rounded-lg border p-5 space-y-5 shadow-sm">
      <h2 class="font-semibold text-[var(--azul-escuro)]">Dados do processo</h2>

      <div class="grid md:grid-cols-3 gap-4">
        <div>
          <label class="text-sm text-gray-700">Processo</label>
          <input
            v-model.trim="processId"
            class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="ex.: 2026-001"
          />
        </div>

        <div>
          <label class="text-sm text-gray-700">Token</label>
          <input
            v-model.trim="token"
            class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="ex.: AbC9xY9Pq2Lm4N"
          />
        </div>

        <div>
          <label class="text-sm text-gray-700">Nome do cliente (opcional)</label>
          <input
            v-model.trim="clienteNome"
            class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="ex.: João"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="text-sm text-gray-700">WhatsApp (opcional)</label>
          <input
            v-model.trim="telefone"
            class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="5511999999999"
          />
          <p class="text-xs text-gray-500 mt-1">
            Se vazio, abre WhatsApp para você escolher o contato.
          </p>
        </div>

        <div>
          <label class="text-sm text-gray-700">E-mail (opcional)</label>
          <input
            v-model.trim="email"
            class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            placeholder="cliente@exemplo.com"
          />
        </div>
      </div>

      <!-- Link -->
      <div class="space-y-2">
        <label class="text-sm text-gray-700">Link do cliente (upload)</label>
        <div class="flex gap-2">
          <input
            :value="clientLink"
            readonly
            class="w-full border rounded px-3 py-2 bg-gray-50"
          />
          <button
            @click="copy(clientLink)"
            class="px-3 py-2 rounded bg-gray-900 text-white hover:bg-black transition"
          >
            Copiar
          </button>
        </div>

        <p v-if="!clientLinkOk" class="text-sm text-red-600">
          Preencha Processo e Token para gerar o link.
        </p>
      </div>
    </section>

    <!-- Checklist: pedir do cliente -->
    <section class="bg-white rounded-lg border p-5 space-y-4 shadow-sm">
      <h2 class="font-semibold text-[var(--azul-escuro)]">
        Documentos que o cliente deve ENVIAR
      </h2>

      <div class="grid md:grid-cols-2 gap-3">
        <label
          v-for="d in requestDocs"
          :key="d.id"
          class="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 transition"
        >
          <input type="checkbox" v-model="d.checked" />
          <span>{{ d.label }}</span>
        </label>
      </div>

      <div class="flex gap-2">
        <input
          v-model.trim="requestCustom"
          class="w-full border rounded px-3 py-2"
          placeholder="Adicionar item (ex.: Foto do imóvel)"
        />
        <button
          @click="addCustom('request')"
          class="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>
    </section>

    <!-- Checklist: você envia -->
    <section class="bg-white rounded-lg border p-5 space-y-4 shadow-sm">
      <h2 class="font-semibold text-[var(--azul-escuro)]">
        Documentos que VOCÊ está ENVIANDO
      </h2>

      <div class="grid md:grid-cols-2 gap-3">
        <label
          v-for="d in sendDocs"
          :key="d.id"
          class="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 transition"
        >
          <input type="checkbox" v-model="d.checked" />
          <span>{{ d.label }}</span>
        </label>
      </div>

      <div class="flex gap-2">
        <input
          v-model.trim="sendCustom"
          class="w-full border rounded px-3 py-2"
          placeholder="Adicionar item (ex.: Procuração para assinatura)"
        />
        <button
          @click="addCustom('send')"
          class="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>
    </section>

    <!-- Mensagem pronta -->
    <section class="bg-white rounded-lg border p-5 space-y-4 shadow-sm">
      <h2 class="font-semibold text-[var(--azul-escuro)]">Mensagem pronta</h2>

      <textarea
        :value="message"
        readonly
        class="w-full h-56 border rounded px-3 py-2 bg-gray-50"
      ></textarea>

      <div class="flex flex-wrap gap-2">
        <button
          @click="copy(message)"
          class="px-3 py-2 rounded bg-gray-900 text-white hover:bg-black transition"
        >
          Copiar mensagem
        </button>

        <a
          :href="whatsHref"
          target="_blank"
          class="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
        >
          Abrir WhatsApp
        </a>

        <a
          :href="mailHref"
          class="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Criar E-mail
        </a>
      </div>
    </section>

    <!-- Documentos enviados -->
    <section class="bg-white rounded-lg border p-5 space-y-4 shadow-sm">
      <h2 class="font-semibold text-[var(--azul-escuro)]">Documentos enviados</h2>

      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="border-b bg-gray-50">
            <th class="text-left py-2 px-1">Nome</th>
            <th class="text-left py-2 px-1">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="doc in documentos"
            :key="doc.nome"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="py-2 px-1">{{ doc.nome }}</td>
            <td class="py-2 px-1 flex gap-2">
              <button
                @click="baixarDocumento(doc.nome)"
                class="px-2 py-1 bg-gray-800 text-white rounded hover:bg-black transition"
              >
                Baixar
              </button>
              <button
                @click="excluirDocumento(doc.nome)"
                class="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Toast -->
    <p v-if="toast" class="text-sm text-green-700">{{ toast }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { listarDocumentos, getDocumento, deleteDocumento } from '@/services/api'

// Dados do processo
const processId = ref('')
const token = ref('')
const clienteNome = ref('')
const telefone = ref('')
const email = ref('')

// Checklists
const requestDocs = ref([
  { id: 'rg', label: 'RG ou CNH', checked: true },
  { id: 'cpf', label: 'CPF', checked: true },
  { id: 'comprovante', label: 'Comprovante de residência', checked: true },
  { id: 'procuracao', label: 'Procuração assinada', checked: false },
  { id: 'notificacao', label: 'Auto de Infração / Notificação recebida', checked: false }
])

const sendDocs = ref([
  { id: 'proposta', label: 'Proposta de honorários', checked: true },
  { id: 'contrato', label: 'Contrato de prestação de serviço', checked: true },
  { id: 'procuracao-modelo', label: 'Modelo de procuração para assinatura', checked: false }
])

const requestCustom = ref('')
const sendCustom = ref('')

function addCustom(type) {
  const list = type === 'request' ? requestDocs : sendDocs
  const input = type === 'request' ? requestCustom : sendCustom
  const label = input.value.trim()
  if (!label) return

  list.value.push({ id: `custom-${Date.now()}`, label, checked: true })
  input.value = ''
}

// Link do cliente
const clientLinkOk = computed(() => Boolean(processId.value && token.value))

const clientLink = computed(() => {
  if (!clientLinkOk.value) return ''
  const base = `${window.location.origin}/enviar/${encodeURIComponent(processId.value)}`
  return `${base}?token=${encodeURIComponent(token.value)}`
})

// Mensagem pronta
const message = computed(() => {
  const saudacao = clienteNome.value ? `Olá, ${clienteNome.value}!` : 'Olá!'
  const itens = requestDocs.value
    .filter(d => d.checked)
    .map(d => `- ${d.label}`)
    .join('\n')

  return [
    saudacao,
    '',
    `Para darmos continuidade ao processo ${processId.value || '[processo]'}, envie os documentos abaixo pelo link:`,
    clientLink.value || '[preencha processo e token para gerar o link]',
    '',
    'Documentos necessários:',
    itens || '- (nenhum item selecionado)',
    '',
    'Qualquer dúvida, estamos à disposição.'
  ].join('\n')
})

const whatsHref = computed(() => {
  const numero = telefone.value.replace(/\D/g, '')
  return `https://wa.me/${numero}?text=${encodeURIComponent(message.value)}`
})

const mailHref = computed(() => {
  const assunto = encodeURIComponent(`Documentos – Processo ${processId.value || ''}`)
  const corpo = encodeURIComponent(message.value)
  return `mailto:${email.value}?subject=${assunto}&body=${corpo}`
})

// Toast
const toast = ref('')
function showToast(texto) {
  toast.value = texto
  setTimeout(() => { toast.value = '' }, 2500)
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text || '')
    showToast('Copiado para a área de transferência!')
  } catch {
    showToast('Não foi possível copiar.')
  }
}

// Documentos enviados
const documentos = ref([])

async function carregarDocumentos() {
  try {
    const resposta = await listarDocumentos()
    documentos.value = Array.isArray(resposta) ? resposta : (resposta?.documentos ?? [])
  } catch {
    documentos.value = []
  }
}

onMounted(carregarDocumentos)

async function baixarDocumento(nome) {
  try {
    const res = await getDocumento(nome)
    if (!res.ok) throw new Error('Falha ao baixar')

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = nome
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch {
    showToast('Erro ao baixar o documento.')
  }
}

async function excluirDocumento(nome) {
  if (!confirm(`Excluir o documento "${nome}"?`)) return

  try {
    await deleteDocumento(nome)
    documentos.value = documentos.value.filter(d => d.nome !== nome)
    showToast('Documento excluído.')
  } catch {
    showToast('Erro ao excluir o documento.')
  }
}
</script>
