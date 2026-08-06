<template>
  <div class="min-h-[60vh] flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white border rounded-lg p-8 space-y-6 text-center shadow-sm">

      <h1 class="text-2xl font-bold text-[var(--azul-escuro)]">
        🔒 Área Administrativa
      </h1>

      <p class="text-sm text-gray-600 leading-relaxed">
        Esta área é destinada exclusivamente à equipe interna.
        Para continuar, faça login com sua conta autorizada.
      </p>

      <div class="flex flex-col gap-3 pt-2">
        <button
          @click="entrar"
          :disabled="loading"
          class="px-4 py-2 rounded bg-gray-900 text-white font-semibold hover:bg-black transition disabled:opacity-50"
        >
          Entrar como Admin
        </button>

        <router-link
          to="/"
          class="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Voltar para a página inicial
        </router-link>
      </div>

      <p v-if="loading" class="text-sm text-gray-500">
        Verificando sessão...
      </p>

      <p v-if="erro" class="text-sm text-red-600">
        {{ erro }}
      </p>

    </div>
  </div>
</template>

<script>
import { getUser, signIn, handleSignInCallback } from '@/services/cognitoAuth'

export default {
  name: 'AdminGateView',

  data() {
    return {
      loading: true,
      erro: null
    }
  },

  async mounted() {
    try {
      const callbackUser = await handleSignInCallback()
      if (callbackUser) {
        this.$router.replace('/admin/form')
        return
      }

      const user = await getUser()
      if (user) {
        this.$router.replace('/admin/form')
        return
      }
    } catch (e) {
      this.erro = 'Não foi possível verificar sua sessão. Tente novamente.'
    }

    this.loading = false
  },

  methods: {
    async entrar() {
      this.loading = true
      try {
        await signIn()
      } catch (e) {
        this.erro = 'Não foi possível iniciar o login. Tente novamente.'
        this.loading = false
      }
    }
  }
}
</script>