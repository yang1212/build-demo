js类库基于rollup是个好选择，node版本要大于v10 ~

1、初始化
````
npm init
````

2、安装rollup
````
npm install rollup --save-dev
````

3、如想配合babel使用:

```
npm install rollup-plugin-babel --save-dev

npm install @babel/core @babel/preset-env --save-dev
```

4、支持压缩
```
npm install rollup-plugin-terser --save-dev
```

5、支持引入第三方包

rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。
所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。

```
npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs --save-dev
```

6、开启热更新
```
npm install rollup-plugin-livereload --save-dev
```

7、开启本地服务器
```
npm install rollup-plugin-serve --save-dev
```

8、babelRc, rollup.config文件参考此demo

[rollup-npm-yf-utils](https://gitee.com/Tibooyang/rollup-demo-yf/tree/master)

9、others

我们实际开发并不会打包成umd格式的文件，因为umd格式的包文件很大。一般会分开打包一个cjs包和一个es包。然后把cjs包写进package.json的main属性，把es包写进package.json的module属性, 对modules属性不熟悉，[看这](https://github.com/SunshowerC/blog/issues/8)

10、rollup-npm-yf-utils 包中 peerDependencies说明

[peerDependencies](https://www.cnblogs.com/wonyun/p/9692476.html)

[参考来源](https://juejin.cn/post/6844904058394771470)
