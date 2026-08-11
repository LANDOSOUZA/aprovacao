<template>
  <div class="precos-container">
    <h1 class="title">Tabela de Preços</h1>
    <p class="subtitle">
      Valores de referência para serviços administrativos.
    </p>

    <div class="card">
      <table class="precos-table">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Valor Mínimo</th>
            <th>Valor Máximo</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in tabela" :key="item.servico">
            <td>{{ item.servico }}</td>
            <td v-if="item.sobConsulta" colspan="2" class="sob-consulta">
              {{ item.sobConsulta }}
            </td>
            <template v-else>
              <td>R$ {{ item.min }}</td>
              <td>R$ {{ item.max }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const tabela = [
  { servico: "Licença Inicial", min: 350, max: 900 },
  { servico: "Renovação de Licenciamento", min: 250, max: 600 },
  { servico: "Alvará", min: 300, max: 700 },
  { servico: "Requerimentos Diversos", min: 50, max: 250 },
  { servico: "Defesa de Auto de Infração", min: 300, max: 1200 },
  { servico: "Defesa de AIP", min: 500, max: 1800 },
  { servico: "Planta Técnica para LTA", sobConsulta: "Sob consulta, conforme complexidade do projeto" },
];
</script>

<style scoped>
.precos-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--azul-escuro);
}

.subtitle {
  color: #666;
  margin-bottom: 20px;
}

.card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.precos-table {
  width: 100%;
  border-collapse: collapse;
}

.precos-table th {
  text-align: left;
  padding: 12px;
  background: var(--cinza-claro);
  font-weight: 600;
}

.precos-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.precos-table tr:hover {
  background: #fafafa;
}

.sob-consulta {
  color: var(--azul-medio, #2563eb);
  font-style: italic;
}
</style>