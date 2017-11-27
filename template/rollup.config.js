import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
{{#buble}}
import buble from 'rollup-plugin-buble';
{{/buble}}
import pkg from './package.json';

export default {
  input: 'src/index.js',
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: '{{name}}'
    },
    {
      dest: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    {{#buble}}
    buble(),
    {{/buble}}
    resolve(),
    commonjs()
  ]
}
