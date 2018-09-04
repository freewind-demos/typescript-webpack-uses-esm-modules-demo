JavaScript Rollup Demo
======================

Rollup是一个打包工具，它假定代码只使用ES6中的`import from`标准，然后把关联的代码打包成指定的模块系统。

```
npm install
npm run demo
```

将会生成`bundle.js`文件。

`rollup.config.js` -> `external`
--------------------------------

在代码中，如果使用了第三方类库，比如`lodash`，需要在rollup的命令中声明一下`--external lodash`，这样将不会产生下面的警告：

```
(!) Unresolved dependencies
https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
lodash (imported by hello.js)
```
