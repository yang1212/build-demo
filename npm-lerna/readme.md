```
输出：

是写完组件库，再打包提交到git，然后项目重装依赖

next

lerna
```

### create 初始化demo
```
npm install lerna@3.18.1 -g

mkdir npm-lerna && cd npm-lerna

lerna init
```

启用 yarn Workspaces

将依赖关系“提升”到最顶层的 Lerna 项目级别的node_modules目录, 减少开发和构建环境中对大量包副本的时间和空间需求
```
package.json 添加
"private": true,
"workspaces": [
    "packages/*"
]

lerna.json 添加
"useWorkspaces": true,
"npmClient": "yarn"
```


你可能遇到： 

[yarn安装慢](https://juejin.cn/post/6844903574216900621)

[verdaccio搭建私有npm库](https://segmentfault.com/a/1190000021612560)

[npm publish 报错 “code EPUBLISHCONFLICT”](https://zhangangs.github.io/2018/10/22/npm%20publish%20%E6%8A%A5%E9%94%99%20%E2%80%9Ccode%20EPUBLISHCONFLICT%E2%80%9D/)
* 也可能是最外层package.json中的name有存在重名情况