// Copies images and documents from the old CSZ site into this project.
// Run with:  npm run assets   (while the old site is still online)
import { access, mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { institutionalMembers } from '../src/data/members.js'
import { council, secretariat, chapters } from '../src/data/people.js'
import { extraAssets, OLD_SITE_BASE } from '../src/data/assets.js'

const jobs = new Map() // where to save -> where to download from

for (const m of institutionalMembers) jobs.set(join('public', 'images', 'members', m.file), OLD_SITE_BASE + m.path)
const people = [council, secretariat, ...Object.values(chapters)].flat().map((p) => p.img)
for (const path of [...people, ...extraAssets]) jobs.set(join('public', 'images', 'uploads', path), OLD_SITE_BASE + path)

const exists = (file) => access(file).then(() => true, () => false)
let saved = 0
let skipped = 0
const failed = []

for (const [file, url] of jobs) {
  if (await exists(file)) { skipped++; continue }
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('HTTP ' + res.status)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, Buffer.from(await res.arrayBuffer()))
    saved++
  } catch (err) {
    failed.push(url + ' (' + err.message + ')')
  }
}

console.log('Saved ' + saved + ', skipped ' + skipped + ' that you already have, of ' + jobs.size + ' files.')
if (failed.length) console.log('Failed:\n' + failed.join('\n'))
console.log('Next: in src/data/assets.js change ASSET_BASE to /images/uploads/')
