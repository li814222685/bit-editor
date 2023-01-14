一个基于 CK5 && Vue 二次封装的编辑器组件
自己基于 CK5 plugin 开发了一些需要用到的业务功能

An editor component based on CK5&&Vue secondary encapsulation

I developed some business functions needed based on CK5 plugin

```vue
//Component Props
  <BitEditor
    mode="normal"  //normal or restrict
    id="id"
    class="some classes"
    :data="htmlData"
    :on-mounted="editorMounted" //callback (editor) =>{......}
  />
```

