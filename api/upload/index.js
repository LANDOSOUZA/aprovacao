module.exports = async function (context, req) {
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: 'Método não permitido'
    }
    return
  }

  const processId = req.query.processId
  const token = req.query.token

  if (!processId || !token) {
    context.res = {
      status: 400,
      body: 'Token inválido ou processo inválido'
    }
    return
  }

  if (!req.body || !req.body.length) {
    context.res = {
      status: 400,
      body: 'Nenhum arquivo recebido'
    }
    return
  }

  context.res = {
    status: 200,
    body: 'Arquivo recebido com sucesso'
  }
}