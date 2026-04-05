<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="max-w-md w-full bg-white border rounded-lg p-6 space-y-6 text-center">
      <h1 class="text-xl font-semibold">🔒 Área administrativa</h1>

      <p class="text-sm text-gray-600">
        Esta área é destinada apenas à equipe interna.
      </p>

      <div class="flex flex-col gap-3">
        <a
          href="/admin/form"
          class="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-800"
        >
          Entrar como Admin
        </a>

        <a
          href="/"
          class="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  </div>
</template>