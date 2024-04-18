## SSG

也就是：静态站点生成 （static site  Generation）

### 1、简要描述

在构建时将动态内容转换为静态 HTML 文件，并将这些文件提前生成并存储在服务器上，

让页面快速加载出来， 而不是用户在每次请求时动态生成。

### 2、如何实现？

选择静态站点生成器

市场上有许多流行的静态站点生成器，如Gatsby、Next.js、Nuxt.js（Vue）等。(公司使用Nuxt.js)

以Nuxt.js举例：

1）创建Nuxt.js 项目
* npm install -g create-nuxt-app
* create-nuxt-app my-nuxt-project
* npm i下载依赖
* npm run dev即可运行项目

2）配置 nuxt.config.js
```javaScript
export default {
  // 设置为静态站点生成模式
  target: 'static'
}
```

3) 编写页面组件
* pages 目录下创建您要生成的页面组件。
* 例如创建名为about.vue文件生成关于页面的静态文件(可直接基于默认的index.vue)
```javaScript
<template>
  <div>
    <h2>about index</h2>
    <p>This is an index page.</p>
  </div>
</template>
```

4) 生成静态站点文件
* npm run generate
* 在dist目录中生成的 HTML 文件和相关资源，直接部署到支持静态文件托管服务器上


5) 部署 Nuxt.js 生成的静态内容到支持静态文件托管的服务器