npm包demo, 基于vue-cli3, node版本要大于v8.9 ~

### 1、如存在旧版本：卸载掉旧版本  

```
npm uninstall vue-cli -g 
```
### 2、安装@vue/cli(此时安装3.1.3的版本)
```
npm install @vue/cli@3.1.3 -g
```

### 3、创建项目
```
vue create nav-ui  (不要使用驼峰式命名)
```

### 4、配置vue.config.js 
```
按照官方文档按需配置即可
```

### 5、package.json配置
```
main属性记得配置：如 "main": "lib/npm-nav-ui.umd.min.js"
```

### 6、更改
```
每次更改后：
记得执行npm run lib， 输出最新文件
记得更改版本号，再执行npm publish
```
