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
