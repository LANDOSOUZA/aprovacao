import { mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'

const src = 'public/staticwebapp.config.json'
const dst = 'dist/staticwebapp.config.json'

if (!existsSync(src)) {
  console.error(`ERRO: não achei ${src}`)
  process.exit(1)
}

mkdirSync(dirname(dst), { recursive: true })
copyFileSync(src, dst)

console.log(`OK: copiado ${src} -> ${dst}`)
