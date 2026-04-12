const API_URL = import.meta.env.VITE_API_URL;

export async function criarProcesso(dados) {
  return fetch(`${API_URL}/criarProcesso`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  }).then(r => r.json());
}

export async function uploadDocumento(formData) {
  return fetch(`${API_URL}/uploadDocumento`, {
    method: "POST",
    body: formData
  }).then(r => r.json());
}

export async function listarProcessos() {
  return fetch(`${API_URL}/listarProcessos`)
    .then(r => r.json());
}

export async function listarDocumentos() {
  return fetch(`${API_URL}/listarDocumentos`)
    .then(r => r.json());
}

export async function getDocumento(nome) {
  return fetch(`${API_URL}/getDocumento?nome=${encodeURIComponent(nome)}`);
}

export async function deleteDocumento(nome) {
  return fetch(`${API_URL}/deleteDocumento?nome=${encodeURIComponent(nome)}`, {
    method: "DELETE"
  }).then(r => r.json());
}
