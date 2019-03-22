import pkg from './package.json';

export default {
  input: 'module.js',
  output: [{
    file: pkg.module,
    format: 'esm',
  }],
  external: ['typescript-webpack-uses-esm-modules-demo--module1']
}
