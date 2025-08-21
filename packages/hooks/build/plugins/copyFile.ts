import * as fs from 'node:fs'
import * as path from 'node:path'

const copyFilePlugin = (options: { from: string; to: string }) => {
  return {
    name: 'copy-file',
    writeBundle() {
      const { from, to } = options
      fs.mkdirSync(path.dirname(to), { recursive: true })
      if (!fs.existsSync(from)) {
        console.warn(`[copy-file] skip, not found: ${from}`)
        return
      }
      fs.copyFileSync(from, to)
      console.log(`[copy-file] ${from} -> ${to}`)
    },
  }
}

export default copyFilePlugin
