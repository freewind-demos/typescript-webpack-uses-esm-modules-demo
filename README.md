JavaScript Webpack Uses "esm" modules with "module" field in "package.json" Issue Demo
=======================================================================================

There are 2 modules (`module1/module2`) in this demo. In their `package.json`, 
there is no `main` field, but have `module` field points to the bundle file with `esm` format,
and they have published to npmjs.

In the root dir, I try to use them with webpack. Since they have only `module` field in package.json, 
I specify:

```
resolve: {
  mainFields: ['module']
}
```

in webpack config files for both js and typescript.

## JS version:

```
npm install
npm run js
```

Failed with error message:

```
$ npm run js
> @ js /Users/peng.li/development/typescript-webpack-uses-esm-modules-demo
> webpack --display-modules=true --config js-webpack.config.js && node dist/bundle-js.js

Hash: 9758077343f6180a2175
Version: webpack 4.29.6
Time: 78ms
Built at: 03/23/2019 1:01:53 AM
            Asset      Size  Chunks             Chunk Names
dist/bundle-js.js  5.43 KiB    main  [emitted]  main
Entrypoint main = dist/bundle-js.js
[./index-js.js] 87 bytes {main} [built]
[./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs] 192 bytes {main} [built]

ERROR in ./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs
Module not found: Error: Can't resolve 'typescript-webpack-uses-esm-modules-demo--module1' in '/Users/peng.li/development/typescript-webpack-uses-esm-modules-demo/node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist'
 @ ./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs 1:0-76 5:2-9
 @ ./index-js.js

```

## TypeScript version:

```
npm install
npm run ts
```

Failed with error messages:

```
$ npm run ts
> @ ts /Users/peng.li/development/typescript-webpack-uses-esm-modules-demo
> webpack --display-modules=true --config ts-webpack.config.js && node dist/bundle-ts.js

Hash: a745a53c5a21a561a600
Version: webpack 4.29.6
Time: 567ms
Built at: 03/23/2019 1:02:27 AM
            Asset      Size  Chunks             Chunk Names
dist/bundle-ts.js  5.45 KiB    main  [emitted]  main
Entrypoint main = dist/bundle-ts.js
[./index-ts.ts] 102 bytes {main} [built]
[./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs] 192 bytes {main} [built]

ERROR in ./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs
Module not found: Error: Can't resolve 'typescript-webpack-uses-esm-modules-demo--module1' in '/Users/peng.li/development/typescript-webpack-uses-esm-modules-demo/node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist'
 @ ./node_modules/typescript-webpack-uses-esm-modules-demo--module2/dist/bundle.mjs 1:0-76 5:2-9
 @ ./index-ts.ts

```

It seems webpack can only find the `module` fields of direct dependencies.

Do I miss anything? Is it possible to make them work?
