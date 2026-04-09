import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import apiRoutes from './routes/index.js' // ✅ IMPORTA DE VERDADE

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middlewares
app.use(express.json())

// ✅ SERVIR O VUE (build)
app.use(express.static(path.join(__dirname, '..', 'public')))

// ✅ API SOMENTE EM /api
app.use('/api', apiRoutes)

// ✅ FALLBACK SPA (SEMPRE O ÚLTIMO)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

export default app