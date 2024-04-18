## 乾坤微前端

### 1、简要描述

### 2、如何实现？

以乾坤微前端为案例：

1）搭建主应用
* 全局安装Vue CLI：npm install -g @vue/cli
* 使用 Vue CLI 创建主应用：vue create main-app
* 进入应用，安装乾坤微前端框架
```javaScript
cd main-app
npm install qiankun --save
```

2）配置主应用
* 在主应用的入口文件（如 src/main.js）中，引入乾坤微前端框架并初始化
```javaScript
import { registerMicroApps, start } from 'qiankun';

// 注册子应用
registerMicroApps([
  // 子应用配置信息
]);

// 启动乾坤微前端框架
start();
```

3) 创建子应用
* 使用 Vue CLI 创建子应用：vue create sub-app1
* 根目录下创建 public-path.js 文件：设置子应用的基础路径
```javaScript
// public-path.js
__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
```
* 

4) 注册子应用
