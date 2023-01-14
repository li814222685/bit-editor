# bit-editor

**CK5 Normal/Restrict 双模式通用组件，VUE3 + typescript **



一个基于 CkEditor5 && Vue 二次封装的编辑器组件

自己基于 CkEditor5 plugin 开发了一些需要用到的业务功能



An editor component based on CK5&&Vue secondary encapsulation



I developed some business functions needed based on CkEditor5 plugin



\```vue

//Component Props <BitEditor mode="normal" //normal or restrict id="id" class="some classes"

:data="htmlData" :on-mounted="editorMounted" //callback (editor) =>{......} />

\```

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
