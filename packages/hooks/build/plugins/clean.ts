import * as fs from 'node:fs'
import * as path from 'node:path'

const cleanPlugin = (targets: string[]) => {
  return {
    name: 'clean',
    buildStart() {
      for (const p of targets) {
        const abs = path.resolve(p)
        try {
          fs.rmSync(abs, { recursive: true, force: true })
          console.log(`[clean] removed: ${abs}`)
        } catch {
          console.warn(`[clean] failed to remove: ${abs}`)
        }
      }
    },
  }
}

export default cleanPlugin
