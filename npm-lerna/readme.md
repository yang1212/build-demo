一段无法言语的心路历程~
```
两个组件库， A依赖B，当B更新后

对于B: 先是要手动更改B的版本号, 打包、提交到git, 发布B

对于A: 重新安装依赖B, 手动更改A的版本号, 打包、提交到git, 发布A
```


有问题就会有解决方案，经过不断的google,了解到monorepo


### monorepo

一种将多个package放在一个repo中的代码管理模式，摒弃了传统的多个package多个repo的模式。目前 Babel, React, Angular, Ember, Meteor, Jest等许多开源项目都使用该种模式来管理代码。

解决的问题：
```
多个repo难以管理，编辑器需要打开多个项目；
某个模块升级，依赖改模块的其他模块需要手动升级，容易疏漏；
公用的npm包重复安装，占据大量硬盘容量，比如打包工具webpack会在每个项目中安装一次；
对新人友好，一句命令即可完成所有模块的依赖安装，且整个项目模块不用到各个仓库去找；
```

带来的问题：
```
所有package代码集中在一个项目，单个项目体积较大；
所有package代码对所有人可见，无法做权限管理；
```

以上对monorepo的描述来源于[此文](https://bbs.huaweicloud.com/blogs/detail/230193)


### 如何实现monorepo
 
当前主流方案基于lerna + yarn Workspaces实现

### lerna

一个用来管理有多个包的JS项目的工具






### 初始化demo
```
npm install lerna@3.18.1 -g  (3.0.0版本，执行lerna init没反应，也不知道为啥~)

mkdir npm-lerna && cd npm-lerna

lerna init
```

### 新增包(基于packages目录)
```
mkdir module1 && cd module1
npm init -y

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

npm publish 报错 “code EPUBLISHCONFLICT”
* 包名不要有-符号
* 也可能是最外层package.json中的name有存在重名情况

lerna.json 中的version:

// 独立模式： 自动更新， 且子模块随之自动更新