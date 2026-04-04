<template>
  <div class="envio-documentos">
    <h2>Envio de documentos</h2>
    <p>Anexe abaixo os documentos solicitados.</p>

    <form
      :action="uploadAction"
      method="post"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        name="file"
        multiple
        required
      />

      <br /><br />

      <button type="submit">
        Enviar documentos
      </button>
    </form>

    <p v-if="erro" style="color: red; margin-top: 1rem;">
      {{ erro }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const erro = ref(null)

// vem da rota /enviar/:processo
const processId = route.params.processo

// vem da query ?token=
const token = route.query.token

if (!processId || !token) {
  erro.value = 'Link inválido. Verifique se o endereço está correto.'
}

const uploadAction = computed(() => {
  if (!processId || !token) return '#'

  return `/api/upload?processId=${encodeURIComponent(processId)}&token=${encodeURIComponent(token)}`
})
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
