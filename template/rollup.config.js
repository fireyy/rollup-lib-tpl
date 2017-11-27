import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';<% if (buble) { %>
import buble from 'rollup-plugin-buble';<% } %>
import pkg from './package.json';

export default {
  input: 'src/index.js',
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: '<%= name %>'
    },
    {
      dest: pkg.module,
      format: 'es'
    }
  ],
  plugins: [<% if (buble) { %>
    buble(),<% } %>
    resolve(),
    commonjs()
  ]
}
