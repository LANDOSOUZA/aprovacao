<template>
  <div class="envio-documentos">
    <h2>Envio de documentos</h2>

    <form @submit.prevent="enviar">
      <input
        ref="fileInput"
        type="file"
        multiple
        required
      />

      <br /><br />

      <button type="submit">Enviar documentos</button>
    </form>

    <p v-if="erro" style="color:red">{{ erro }}</p>
    <p v-if="ok" style="color:green">Enviado com sucesso</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const fileInput = ref(null)
const erro = ref('')
const ok = ref(false)

const processId = route.params.processo
const token = route.query.token

async function enviar () {
  erro.value = ''
  ok.value = false

  const files = fileInput.value?.files
  if (!files || files.length === 0) {
    erro.value = 'Selecione um arquivo'
    return
  }

  const fd = new FormData()
  for (const f of files) fd.append('file', f)

  const url =
    'https://aprovacao-adm-upload-bjbpeuaaa7fyfydm.brazilsouth-01.azurewebsites.net/api/upload' +
    '?code=SEU_CODE_AQUI' +
    `&processId=${encodeURIComponent(processId)}` +
    `&token=${encodeURIComponent(token)}`

  const r = await fetch(url, { method: 'POST', body: fd })

  if (!r.ok) {
    erro.value = await r.text()
    return
  }

  ok.value = true
}
</script>

<style scoped>
.envio-documentos {
  max-width: 500px;
  margin: 40px auto;
}
</style>
