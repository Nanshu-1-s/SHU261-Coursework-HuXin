// 把 diagrams/ 下的 SVG 源文件渲染成 images/ 下的 PNG。
// 用法：node diagrams/build.mjs
// 依赖：npm i @resvg/resvg-js （只在渲染时需要，见同目录 package.json）

import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(here, '..', 'images')
fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(here).filter((f) => f.endsWith('.svg'))
if (files.length === 0) {
  console.error('diagrams/ 下没有找到 SVG 文件')
  process.exit(1)
}

for (const file of files) {
  const svg = fs.readFileSync(path.join(here, file), 'utf8')
  const resvg = new Resvg(svg, {
    font: { loadSystemFonts: true, defaultFontFamily: 'Microsoft YaHei' },
  })
  const png = resvg.render().asPng()
  const out = path.join(outDir, file.replace(/\.svg$/, '.png'))
  fs.writeFileSync(out, png)
  console.log(`${file} -> images/${path.basename(out)}  (${(png.length / 1024).toFixed(1)} KB)`)
}
