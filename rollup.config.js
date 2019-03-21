export default {
    input: 'main.js',
    output: {
        file: 'bundle.mjs',
        format: 'esm',
    },
    external: ['lodash']
}
