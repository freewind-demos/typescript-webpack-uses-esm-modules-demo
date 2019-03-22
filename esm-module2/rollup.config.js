import pkg from './package.json';

export default {
  input: 'index.js',
  output: [{
    file: pkg.module,
    format: 'esm',
  },{
    file: pkg.main,
    format: 'cjs',
  }],
  external: ['javascript-rollup-esm-uses-commonjs-as-external-demo--cjs-module1']
}
