module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: {
      method: req.method,
      query: req.query,
      headers: req.headers,
      hasBody: !!req.rawBody
    }
  }
}