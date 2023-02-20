## 版本

当前运行版本:
```
node: v16.0.0

yarn: v1.22.17
```

<br/>

## 🚀 操作步骤

### 1、初始化

```
npm init @vitejs/app (运行后根据按需配置即可)
```

<br/>

### 2、包下载

eslint
```javaScript
"eslint": "^7.32.0",
"eslint-plugin-vue": "^7.17.0",
```

prettier
```javaScript
"prettier": "^2.6.1",
"@vue/eslint-config-typescript": "^7.0.0",
"@vue/eslint-config-prettier": "^6.0.0",
```

stylelint
* js 和 vue 文件可以使用 eslint 校验，css 我们采用 stylelint 校验
```javaScript
"stylelint": "^13.13.1",
"stylelint-config-prettier": "^8.0.2",
"stylelint-config-recess-order": "^2.5.0",
"stylelint-config-standard": "^22.0.0",
"stylelint-order": "^4.1.0",
"stylelint-scss": "^3.21.0"
```

TS
```javaScript
"@typescript-eslint/eslint-plugin": "^4.31.0",
"@typescript-eslint/parser": "^4.31.0",
"@vue/eslint-config-typescript": "^7.0.0",
```

<br/>

### 3、eslint相关文件配置

1）.eslintrc.js
```javaScript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],
  globals: {
    defineProps: 'readonly'
  }
}

```

2）.eslintignore
```javaScript
/node_modules/
/public/
.vscode
.idea
```

<br/>

### 4、prettier相关文件配置

1） VSCode settings.json 配置

```javaScript
  // 保存时格式化代码
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "eslint.autoFixOnSave" : true
  }
```

2）.prettierrc.json
* 配置文件更改后，记得重启vscode
* [关于Delete`CR`eslint(prettier/prettier) 报错的解决方案](https://shuliqi.github.io/2020/06/06/%E5%85%B3%E4%BA%8EDelete%60CR%60eslint-prettier-prettier-%E6%8A%A5%E9%94%99%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/#%E9%97%AE%E9%A2%98%E7%9A%84%E6%8F%90%E5%87%BA)
```javaScript
{ 
  "semi": false,
  "eslintIntegration": true,
  "singleQuote": true,
  "endOfLine": "auto",
  "tabWidth": 2,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}

```

<br/>

### 5、husky配置 

1） husky, lint-staged安装

```javaScript
"husky": "^4.2.5"
"lint-staged": "7.2.0"
```

2）执行命令
需基于包含.git的主目录执行，如在此demo中，需要/build-demo这一层执行

```javaScript
npx husky install
```

3）package.json配置
```javaScript
 "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

<br/>


## 问题

1、vite不是内部命令，也不是外部命令

* 删除node_modules,重新npm install
