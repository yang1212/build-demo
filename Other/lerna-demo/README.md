一段无法言语的心路历程~ 
```
两个组件库， A依赖B，当B更新后

// 公仓 master更新
对于B: 先是要手动更改B的版本号, 打包、提交到git, 发布B

对于A: 重新安装依赖B, 手动更改A的版本号, 打包、提交到git, 发布A
```


有问题就会有解决方案，经过不断的google,了解到monorepo

### 1、monorepo

一种将多个package放在一个repo中的代码管理模式，摒弃了传统的多个package多个repo的模式。目前 Babel, React, Angular, Ember, Meteor, Jest等许多开源项目都使用该种模式来管理代码。

解决的问题：

* 多个repo难以管理，编辑器需要打开多个项目；
* 某个模块升级，依赖改模块的其他模块需要手动升级，容易疏漏；
* 公用的npm包重复安装，占据大量硬盘容量，比如打包工具webpack会在每个项目中安装一次；
* 对新人友好，一句命令即可完成所有模块的依赖安装，且整个项目模块不用到各个仓库去找；


带来的问题：

* 所有package代码集中在一个项目，单个项目体积较大；
* 所有package代码对所有人可见，无法做权限管理；


### 2、如何实现monorepo
 
当前主流方案基于lerna + yarn Workspaces实现

### 3、lerna

一个用来管理有多个包的JS项目的工具

1）初始化[demo](https://gitee.com/Tibooyang/npm-lerna-demo)
```
npm install lerna@3.18.1 -g  (3.0.0版本，执行lerna init没反应，也不知道为啥~)

mkdir npm-lerna && cd npm-lerna

lerna init
```

2）新增包(基于packages目录)
```
mkdir module1 && cd module1(包名不要和npm中存在的包重复, 并且包名不要有-符号 否则发布时会报错~)

npm init -y
```

3）安装yarn
```
安装yarn

npm install yarn -g

切换镜像源

yarn config set registry https://registry.npm.taobao.org

```

4）启用 yarn Workspaces

将依赖关系“提升”到最顶层的 Lerna 项目级别的node_modules目录, 减少开发和构建环境中对大量包副本的时间和空间需求

```
最外层package.json 添加:
"workspaces": [
    "packages/*"
]

lerna.json 添加:
"useWorkspaces": true,
"npmClient": "yarn"
```
```
执行： yarn install
```

5）收尾动作

* 新增.gitignore文件

* 子包配置发布源
    ```
    "publishConfig": {
       "registry": "https://registry.npmjs.org/"
    }
    ```
* 将代码推到远程仓库（仓库我用的码云，github配置了n种方法，还是提交超时）


6）发布包
```
登录npm账号

npm login(没有npm账号去注册一个就可)

发布
lerna publish(一定一定要记得执行lerna publish不允许有未提交代码)

```

发布成功后，去到[npm](https://www.npmjs.com/)，就可查看到发布的包了，如下图所示：

![3](https://user-images.githubusercontent.com/17806205/134280200-81588279-d33a-4424-b323-db1cdb30bcf4.png)



7）lerna知识点补充

两种模式：

Fixed/Locked mode (默认模式)

* 适用包之间关联性比较大的，如babel, vue， 在发布的时候, 对于改动的包会与lerna.json中的version保持一致。

独立模式

*  反之包之间关联不强可使用，相对灵活，每个 package 都可以有自己的版本号。版本号维护在各自 package.json 的 version 中
    ```
    lerna.json文件：
    
    "version": "independent"
    ```

end
