JavaScript Webpack Uses "esm" modules Demo
==========================================

这个Demo是项目中遇到的一个问题的简化。

`esm-module1`和`esm-module2`是两个只有esm格式bundle文件的module，
其中`esm-module2`以external的形式引用了`esm-module1`，
在主项目中将会调用`esm-module2`中的一个函数，
看这个过程是否会出问题。

结果：正常。

```
npm install
npm run demo
```

