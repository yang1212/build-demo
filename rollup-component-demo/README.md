js类库基于rollup是个好选择，node版本要大于v10 ~

1、初始化
````
npm init
````

2、安装rollup
````
npm install rollup --save-dev
````

3、配置rollup.config.js
````javaScript
export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  }
}
````

至此一个差不多的demo就可，如想配合babel使用，还需接着往下

1、安装rollup-plugin-babel

npm install rollup-plugin-babel --save-dev

2、配置rollup.config.js

````javaScript
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
````
3、安装@babel/core 和 @babel/preset-env

npm install @babel/core @babel/preset-env --save-dev

4、添加babelRc
```javaScript
{
  "presets": [
    ["@babel/env", {
      "modules": false
    }]
  ]
}
```

5、执行npm run build看看吧

此时输出代码已由babel转译

6、压缩代码

npm install rollup-plugin-terser --save-dev

rollup.config.js
```javaScript
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
```

7、引入第三方包
rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。
所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。

安装@rollup/plugin-node-resolve和@rollup/plugin-commonjs


8、others

不过我们实际开发并不会打包成umd格式的文件，因为umd格式的包文件很大。

一般会分开打包一个cjs包和一个es包。然后把cjs包写进package.json的main属性，

把es包写进package.json的module属性

[来源](https://juejin.cn/post/6844904058394771470)
