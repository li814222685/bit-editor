# bit-editor

**CK5 Normal/Restrict 双模式通用组件，VUE3 + typescript **

## 安装依赖
```
yarn install
```

### CK插件 开发模式
```
npm run dev
```

### 打包为lib(后续视情况会搞个一键发布脚本)
```
npm run lib
```

### 发布 npm包

** npm run lib完成后，cd lib 需要手动创建 package.json (npm init -y)**

![image-20230109150857180](../cmd1.png)

修改NPM包的信息以及Version

```json
{
  "name": "lib",   // => 修改为bit-editor
  "version": "1.0.0",  // => 在npm 当前版本 + 0.0.1
  "main": "bitEditor.common.js", 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```

最后：

```
npm run publish
```

## CK5 插件开发结构规范（可直接复制后进行改造）：

\```js

── src

│   ├── App.vue

│   ├── components

│   ├── main.ts

│   └── plugins

│       ├── controlsMenu                  => 插件名

│       │   ├── command.js                => 插件指令逻辑         

│       │   ├── constant.ts               => 插件特有的字符串 统一放在此处声明

│       │   ├── editing.js                => 插件逻辑、转换逻辑、schema注册等

│       │   ├── index.js                  => 暴露插件

│       │   ├── toolbar.js                => 插件工具栏(忽略这个)

│       │   ├── ui.js                     => 插件UI

│       │   └── util.ts                   => 插件的工具函数
