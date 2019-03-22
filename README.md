JavaScript Rollup Esm uses Commonjs as External Demo
=====================================================

这个Demo是项目中遇到的一个问题的简化。

- cjs-module1: 是一个只有commonjs的module
- esm-module2: 以external的形式引用了cjs-module1，自己本身同时提供了cjs, esm两种格式的bundle
- esm-module3: 以external的形式引用了esm-module2，自己本身同时提供了cjs, esm两种格式的bundle

主项目：

- 分别使用js和ts两种方式来引用esm-module3中的函数，看是否正常

结果：都正常。

```
npm install
npm run demo
```

