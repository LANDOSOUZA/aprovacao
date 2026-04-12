# 🗂️ Sistema Administrativo de Processos, Clientes e Documentos  
### Versão 1.0 — Arquitetura, Fluxo e Estrutura do Projeto

Este projeto tem como objetivo organizar e automatizar o fluxo administrativo de atendimentos, processos, documentos e formulários utilizados em serviços como Vigilância Sanitária, Prefeitura, Conselhos, Bombeiros e outros órgãos.

O sistema é composto por:

- **Admin** (interface interna)
- **Área do Cliente** (envio de documentos)
- **Backend** (API + banco de dados)
- **Armazenamento de documentos**
- **Integrações externas (Adobe Cloud)**

---

# 📌 1. Objetivo Geral

Transformar o fluxo administrativo em um processo:

- organizado  
- rápido  
- seguro  
- escalável  
- com histórico  
- com automações  
- com geração e assinatura de documentos  

---

# 🧱 2. Arquitetura Geral

- **Frontend Admin:** Vue.js + Tailwind  
- **Frontend Cliente:** página simples para upload  
- **Backend:** Node.js (Express)  
- **Banco de Dados:** SQLite  
- **Armazenamento:** local + Adobe Cloud  
- **Integrações:** Adobe PDF Services, Adobe Sign, Adobe Cloud Storage  

---

# 🗄️ 3. Banco de Dados (SQLite)

## 3.1. Tabela CLIENTES  
Preenchida **após** o recebimento dos documentos.

| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| nomeRazao | TEXT |
| tipoPessoa (F/J) | TEXT |
| cpfCnpj | TEXT |
| rgIe | TEXT |
| inscricaoMunicipal | TEXT |
| endereco | TEXT |
| numero | TEXT |
| complemento | TEXT |
| bairro | TEXT |
| cidade | TEXT |
| estado | TEXT |
| cep | TEXT |
| telefone1 | TEXT |
| telefone2 | TEXT |
| telefone3 | TEXT |
| email | TEXT |
| cevs | TEXT |
| conselho | TEXT |
| iptuCodigo | TEXT |
| observacoes | TEXT |
| dataCriacao | DATETIME |

---

## 3.2. Tabela PROCESSOS  
Criada **no início**, com nome + telefone.

| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| processId | TEXT |
| token | TEXT |
| clienteId | INTEGER (FK) |
| nomeInicial | TEXT |
| telefoneInicial | TEXT |
| servico | TEXT |
| status | TEXT |
| dataCriacao | DATETIME |
| dataConclusao | DATETIME |

---

## 3.3. Tabela DOCUMENTOS  
Documentos enviados pelo cliente.

| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| processId | INTEGER (FK) |
| nomeArquivo | TEXT |
| caminho | TEXT |
| tipo | TEXT |
| dataEnvio | DATETIME |

---

## 3.4. Tabela FORMULARIOS  
Formulários internos organizados por categoria.

| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| nome | TEXT |
| categoria | TEXT |
| caminho | TEXT |
| tipo | TEXT |

---

# 🔄 4. Fluxo Completo do Atendimento

## 4.1. Etapa 1 — Contato inicial
Cliente envia mensagem no WhatsApp.  
Você coleta:
- Nome  
- Telefone  
- Serviço desejado  

---

## 4.2. Etapa 2 — Criar Processo
Na página **/admin/novo-atendimento**, você registra:

- nomeInicial  
- telefoneInicial  
- servico  

O backend gera:
- processId  
- token  
- status: “Aguardando documentos”

---

## 4.3. Etapa 3 — Gerar link
Na página **/admin/processo/:id**, você vê:

- Link para envio de documentos  
- Botão WhatsApp  
- Botão E-mail  

---

## 4.4. Etapa 4 — Cliente envia documentos
O cliente acessa a área de upload e envia:

- fotos  
- PDFs  
- documentos diversos  

O backend registra na tabela DOCUMENTOS.

---

## 4.5. Etapa 5 — Criar Cliente (Ficha Completa)
Com base nos documentos recebidos, você preenche:

- CPF/CNPJ  
- RG/IE  
- Endereço completo  
- Telefones adicionais  
- E-mail  
- CEVS  
- Conselho  
- IPTU  
- Observações  

O cliente é criado na tabela CLIENTES.

---

## 4.6. Etapa 6 — Vincular Processo ao Cliente
O processo recebe:

clienteId = id do cliente

Código

---

## 4.7. Etapa 7 — Complementar, gerar formulários, anexar
Na página do processo:

- Ver documentos enviados  
- Baixar formulários internos  
- Preencher PDFs  
- Enviar para assinatura  
- Anexar documentos gerados  
- Atualizar status  

---

## 4.8. Etapa 8 — Conclusão
Quando tudo estiver pronto:

- status = “Concluído”  
- dataConclusao = agora  

---

# 📁 5. Formulários Internos (Organizados por Categoria)

Estrutura:

/formularios/
vigilancia/
prefeitura/
bombeiros/
meio-ambiente/
conselhos/
outros/

Código

Página **/admin/formularios**:

- Lista por categoria  
- Botão “Baixar”  
- Botão “Enviar ao cliente”  
- Botão “Anexar ao processo”  

---

# ☁️ 6. Integração com Adobe Cloud

O sistema utilizará:

## 6.1. Adobe Cloud Storage  
- Armazenamento seguro de PDFs  
- Acesso via API  

## 6.2. Adobe PDF Services  
- Preenchimento automático de PDFs  
- Mesclagem  
- Compressão  
- Conversão  
- OCR (extração de texto)  

## 6.3. Adobe Sign  
- Envio para assinatura  
- Acompanhamento de status  
- Retorno automático do PDF assinado  

---

# 🧭 7. Páginas do Admin

- **/admin/novo-atendimento** — criar processo  
- **/admin/processos** — lista com filtros  
- **/admin/processo/:id** — detalhes do processo  
- **/admin/cliente/:id** — ficha completa do cliente  
- **/admin/formularios** — formulários internos por categoria  

---

# 🧩 8. Prioridades do Projeto (Roadmap)

## PRIORIDADE 1 — Banco de Dados
- Criar tabelas CLIENTES, PROCESSOS, DOCUMENTOS, FORMULARIOS

## PRIORIDADE 2 — Fluxo Inicial
- Novo atendimento  
- Gerar processo  
- Gerar link  
- Cliente envia documentos  

## PRIORIDADE 3 — Ficha do Cliente
- Criar cliente  
- Vincular processo  

## PRIORIDADE 4 — Formulários Internos
- Página de formulários  
- Organização por categoria  

## PRIORIDADE 5 — Integração Adobe Cloud
- Armazenamento  
- Preenchimento automático  
- Assinatura eletrônica  
- OCR  
- Conversão  

## PRIORIDADE 6 — Dashboard e Relatórios
- Atendimentos por dia/mês/ano  
- Processos por cliente  
- Processos por serviço  

---

# ✔️ Status: Estrutura definida e pronta para implementação
Este documento consolida todas as decisões e serve como referência oficial do projeto.

swa deploy ./dist --deployment-token "caa1e31ede2d8751ba6a1fbfc80d929460b0d36f649b0e83a71acbe011e5893701-04491351-29bc-48b9-b8d1-12b091f52e6e01029320cfe3a510" --env production

git branch
git config user.name
git config user.email
git remote -v
