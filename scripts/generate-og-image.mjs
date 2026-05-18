import sharp from 'sharp'
import path from 'node:path'

const PUB = path.resolve('public')
const W = 1200
const H = 630

const svgOverlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1628" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#0a1628" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="80" y="${H - 230}" font-family="Inter, Arial, sans-serif" font-weight="700"
        font-size="28" fill="#60a5fa" letter-spacing="6">ÉLECTRICIEN · ANGERS &amp; 49</text>
  <text x="80" y="${H - 150}" font-family="Inter, Arial, sans-serif" font-weight="800"
        font-size="84" fill="#ffffff" letter-spacing="-2">GP elec</text>
  <text x="80" y="${H - 90}" font-family="Inter, Arial, sans-serif" font-weight="500"
        font-size="30" fill="rgba(255,255,255,0.85)">Installation · Rénovation · Dépannage · Domotique</text>
  <text x="80" y="${H - 45}" font-family="Inter, Arial, sans-serif" font-weight="500"
        font-size="22" fill="rgba(255,255,255,0.55)">06 18 96 57 36 · 40 ans d'expertise · Devis gratuit</text>
</svg>
`

const heroBuf = await sharp(path.join(PUB, 'images/hero/hero.webp'))
  .resize(W, H, { fit: 'cover', position: 'center' })
  .toBuffer()

await sharp(heroBuf)
  .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(PUB, 'og-image.jpg'))

const meta = await sharp(path.join(PUB, 'og-image.jpg')).metadata()
console.log(`og-image.jpg  ${meta.width}x${meta.height}  ${(meta.size / 1024).toFixed(0)} KB`)
