import pkg from './package.json';

export default {
  input: 'module.js',
  output: [{
    file: pkg.module,
    format: 'esm',
  }]
}
