import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const PUB = path.resolve('public/images')

async function ensureDir(p) {
  if (!existsSync(p)) await mkdir(p, { recursive: true })
}

async function download(url) {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`Fetch ${url} → ${r.status}`)
  return Buffer.from(await r.arrayBuffer())
}

async function toWebp(input, output, { width = 1600, quality = 72 } = {}) {
  const buf = typeof input === 'string' ? input : input
  const pipeline = sharp(buf).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 })
  const out = await pipeline.toBuffer()
  await writeFile(output, out)
  const meta = await sharp(out).metadata()
  console.log(`✔ ${path.relative(process.cwd(), output)}  ${meta.width}×${meta.height}  ${(out.length / 1024).toFixed(0)} KB`)
}

await ensureDir(path.join(PUB, 'services'))
await ensureDir(path.join(PUB, 'villes'))

// 1. neuf.jpg (538KB) → neuf.webp ≈ ~80KB
await toWebp(path.join(PUB, 'services/neuf.jpg'), path.join(PUB, 'services/neuf.webp'), { width: 1600, quality: 72 })

// 2. angers-pano.jpg (212KB) → angers-pano.webp
await toWebp(path.join(PUB, 'villes/angers-pano.jpg'), path.join(PUB, 'villes/angers-pano.webp'), { width: 1600, quality: 72 })

// 3. logo PNG → WebP (transparence supportée)
await toWebp(path.join(PUB, 'logo-gp-elec.png'), path.join(PUB, 'logo-gp-elec.webp'), { width: 800, quality: 90 })

// 4. Renovation Unsplash → local
const reno = await download('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80')
await toWebp(reno, path.join(PUB, 'services/renovation.webp'), { width: 1600, quality: 72 })

// 5. Domotique Unsplash → local
const domo = await download('https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80')
await toWebp(domo, path.join(PUB, 'services/domotique.webp'), { width: 1600, quality: 72 })

console.log('\nDone.')
