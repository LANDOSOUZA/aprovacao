<template>
  <div class="max-w-md mx-auto py-10 px-4 space-y-8">

    <!-- Título -->
    <h2 class="text-2xl font-bold text-center text-[var(--azul-escuro)]">
      Envio de documentos
    </h2>

    <!-- Link inválido -->
    <div
      v-if="!processId || !token"
      class="p-4 bg-red-100 text-red-700 rounded border border-red-300"
    >
      Link inválido. Verifique se o endereço está correto.
    </div>

    <!-- Formulário -->
    <form
      v-else
      @submit.prevent="enviar"
      class="space-y-6 bg-white border rounded-lg p-6 shadow-sm"
    >
      <!-- Instruções -->
      <div class="text-gray-700 text-sm leading-relaxed">
        <p>
          Envie os documentos solicitados para dar continuidade ao processo
          <strong>{{ processId }}</strong>.
        </p>
        <p class="mt-1">
          Aceitamos arquivos <strong>PDF, JPG, JPEG e PNG</strong> com até
          <strong>10 MB</strong> cada.
        </p>
      </div>

      <!-- Input -->
      <div class="space-y-2">
        <label class="block font-medium text-gray-800">
          Selecione seus documentos:
        </label>

        <input
          ref="fileInput"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          @change="listarArquivos"
          class="block w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <!-- Lista de arquivos -->
      <div
        v-if="arquivos.length"
        class="space-y-3 bg-gray-50 p-3 rounded border"
      >
        <div
          v-for="(a, i) in arquivos"
          :key="i"
          class="p-2 bg-white rounded border flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <span class="font-medium text-gray-800">{{ a.name }}</span>
            <button
              type="button"
              @click="removerArquivo(i)"
              class="text-red-600 text-sm hover:underline"
            >
              remover
            </button>
          </div>

          <div class="text-xs text-gray-500">
            {{ (a.size / 1024 / 1024).toFixed(2) }} MB
          </div>

          <!-- Preview -->
          <img
            v-if="a.preview"
            :src="a.preview"
            class="w-full rounded border"
          />

          <!-- Barra de progresso -->
          <div v-if="a.progress !== null" class="w-full bg-gray-200 h-2 rounded">
            <div
              class="h-2 bg-green-600 rounded transition-all"
              :style="{ width: a.progress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Erro -->
      <p v-if="erro" class="text-red-600 text-sm font-medium">
        {{ erro }}
      </p>

      <!-- Sucesso -->
      <p v-if="ok" class="text-green-600 text-sm font-medium">
        Documentos enviados com sucesso!
      </p>

      <!-- Botão -->
      <button
        type="submit"
        :disabled="loading || arquivos.length === 0"
        class="w-full bg-[var(--azul-escuro)] text-white py-2 rounded font-semibold hover:bg-blue-900 disabled:opacity-50 transition"
      >
        {{ loading ? "Enviando..." : "Enviar documentos" }}
      </button>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { uploadDocumento } from '@/services/api'

const route = useRoute()

const fileInput = ref(null)
const arquivos = ref([])
const erro = ref('')
const ok = ref(false)
const loading = ref(false)

const processId = route.params.processo
const token = route.query.token

function listarArquivos() {
  erro.value = ''
  ok.value = false

  const files = Array.from(fileInput.value.files)

  arquivos.value = files.map(f => ({
    file: f,
    name: f.name,
    size: f.size,
    progress: null,
    preview: f.type.startsWith('image/')
      ? URL.createObjectURL(f)
      : null
  }))
}

function removerArquivo(index) {
  arquivos.value.splice(index, 1)
  if (arquivos.value.length === 0) {
    fileInput.value.value = ''
  }
}

async function enviar() {
  erro.value = ''
  ok.value = false

  if (!arquivos.value.length) {
    erro.value = 'Selecione ao menos um arquivo.'
    return
  }

  // Validação de tamanho
  for (const a of arquivos.value) {
    if (a.size > 10 * 1024 * 1024) {
      erro.value = `O arquivo ${a.name} excede 10 MB.`
      return
    }
  }

  loading.value = true

  try {
    const fd = new FormData()
    fd.append('processId', processId)
    fd.append('token', token)

    arquivos.value.forEach(a => {
      fd.append('file', a.file)
      a.progress = 0
    })

    // Upload com progresso
    const resposta = await uploadDocumento(fd, progressEvent => {
      const total = progressEvent.total
      const loaded = progressEvent.loaded

      const percent = Math.round((loaded / total) * 100)

      arquivos.value.forEach(a => {
        a.progress = percent
      })
    })

    if (resposta?.error) {
      erro.value = resposta.error
      loading.value = false
      return
    }

    ok.value = true
    arquivos.value = []
    fileInput.value.value = ''
  } catch (e) {
    erro.value = 'Erro ao enviar documentos. Tente novamente.'
  }

  loading.value = false
}
</script>
