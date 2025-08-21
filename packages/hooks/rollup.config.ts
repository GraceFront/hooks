import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { cleanPlugin, copyFilePlugin } from './build/plugins'

const __dirname = process.cwd()
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')) as {
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
]

export default [
  defineConfig({
    input: 'src/index.ts',
    external,
    output: [
      {
        dir: 'dist/es',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist/lib',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].cjs',
      },
    ],
    plugins: [
      cleanPlugin([path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'README.md')]),
      resolve({ extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'] }),
      commonjs(),
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        declaration: false,
      }),
    ],
    treeshake: { moduleSideEffects: false },
  }),
  defineConfig({
    input: 'src/index.ts',
    output: {
      dir: 'dist/types',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].d.ts',
    },
    plugins: [
      dts(),
      copyFilePlugin({
        from: path.resolve(__dirname, '../../README.md'),
        to: path.resolve(__dirname, 'README.md'),
      }),
    ],
    external,
  }),
]
