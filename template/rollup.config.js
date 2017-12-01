import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';<% if (buble) { %>
import buble from 'rollup-plugin-buble';<% } %>
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.browser,
			format: 'umd'
		},
		name: '<%= moduleName %>',
		plugins: [<% if (buble) { %>
      buble(),<% } %>
			resolve(),
			commonjs()
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
    ],
    plugins: [<% if (buble) { %>buble()<% } %>]
	}
]
