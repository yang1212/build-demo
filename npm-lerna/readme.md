```
是写完组件库，再打包提交到git，然后项目重装依赖

next

npm link 

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