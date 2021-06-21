// @ts-nocheck
import ts from "rollup-plugin-ts"
import image from '@rollup/plugin-image'
import url from '@rollup/plugin-url'
import sourceMap from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

const config = [
  {
    input: './src/index.ts',
    output: [
      {
        format: "cjs",
        file: "dist/commonjs/index.js",
        sourcemap: true
      }, {
        format: "es",
        file: "dist/esmodule/sgeom.esm.js",
        sourcemap: true
      },
      {
        format: "umd",
        file: "dist/umd/sgeom.umd.js",
        name: "sgeom",
        sourcemap: true
      }
    ],
    plugins: [
      ts({
        tsconfig: 'tsconfig.json'
      }),
      image(),
      url(),
      sourceMap(),
      terser()
    ]
  }
];

export default config;