<template>
  <div class="envio-documentos">
    <h2>Envio de documentos</h2>
    <p>Anexe abaixo os documentos solicitados.</p>

    <form @submit.prevent="enviar">
      <input
        ref="fileInput"
        type="file"
        name="file"
        multiple
        required
      />

      <br /><br />

      <button type="submit" :disabled="enviando">
        {{ enviando ? 'Enviando...' : 'Enviar documentos' }}
      </button>
    </form>

    <p v-if="msg" style="margin-top: 1rem; color: green;">
      {{ msg }}
    </p>

    <p v-if="erro" style="margin-top: 1rem; color: red;">
      {{ erro }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const fileInput = ref(null)
const enviando = ref(false)
const erro = ref('')
const msg = ref('')

const processId = route.params.processo
const token = route.query.token

async function enviar() {
  erro.value = ''
  msg.value = ''

  if (!processId || !token) {
    erro.value = 'Link inválido. Verifique se o endereço está correto.'
    return
  }

  const files = fileInput.value?.files
  if (!files || files.length === 0) {
    erro.value = 'Selecione pelo menos 1 arquivo.'
    return
  }

  const fd = new FormData()
  for (const f of files) fd.append('file', f)

  enviando.value = true
  try {
    const url = `/api/upload?processId=${encodeURIComponent(processId)}&token=${encodeURIComponent(token)}`
    const r = await fetch(url, { method: 'POST', body: fd })

    const text = await r.text()
    if (!r.ok) {
      erro.value = text || `Erro HTTP ${r.status}`
      return
    }

    msg.value = text || 'Enviado com sucesso.'
  } catch (e) {
    erro.value = 'Falha ao enviar.'
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
.envio-documentos {
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>