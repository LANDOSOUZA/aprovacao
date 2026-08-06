const API_URL = import.meta.env.VITE_API_URL;

export async function criarProcesso(dados) {
  return fetch(`${API_URL}/criarProcesso`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  }).then(r => r.json());
}

export function uploadDocumento(formData, onProgress) {
  // Usa XMLHttpRequest (em vez de fetch) porque fetch não expõe
  // progresso de upload — o callback onProgress precisa disso.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/uploadDocumento`);

    if (onProgress) {
      xhr.upload.addEventListener("progress", onProgress);
    }

    xhr.onload = () => {
      let data = {};
      try {
        data = JSON.parse(xhr.responseText || "{}");
      } catch {
        resolve({ error: "Resposta inválida do servidor." });
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(data);
      } else {
        resolve({ error: data.error || `Erro ${xhr.status} ao enviar documentos.` });
      }
    };

    xhr.onerror = () => reject(new Error("Erro de rede ao enviar documentos."));

    xhr.send(formData);
  });
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
