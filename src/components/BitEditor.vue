<script lang="ts" setup>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { onMounted, ref, StyleValue } from "vue";
import { NORMAL_CONFIG } from "./editorConfig/normal";
import { RESTRICT_CONFIG } from "./editorConfig/restrict";
import { EditorMode } from "@/types";
import "./plugins/controls/text/controls.less";

class EditorInstance extends ClassicEditor {}

interface BitEditorProps {
  mode: EditorMode;
  id: string;
  classes?: any;
  style?: StyleValue | undefined;
  data: string;
  onMounted: (editor: EditorInstance) => void;
  unMounted: (editor: EditorInstance) => void;
}

const props = defineProps<BitEditorProps>();

onMounted(() => {
  InitEditor();
});

/** 编辑器初始化 */
const InitEditor = () => {
  ClassicEditor.create(
    document.getElementById(props.id),
    props.mode === EditorMode.Normal ? NORMAL_CONFIG : RESTRICT_CONFIG
  )
    .then((editor: EditorInstance) => {
      if (props?.onMounted) {
        props?.onMounted(editor);
      }
      editor.setData(props.data);
      const widgetTypeAroundPlugin = editor.plugins.get("WidgetTypeAround");
      widgetTypeAroundPlugin.forceDisabled("MyApplication");
    })
    .catch((error: Error) => {
      console.error(error);
    });
};
</script>

<template>
  <div class="editor-container">
    <div
      :class="props.classes"
      :style="{ ...props.style as any, height: '100%' }"
      :id="id"
    ></div>
  </div>
</template>

<style lang="less">
.editor-container {
  height: 100%;
  .ck-editor {
    height: calc(100% - 40px) !important;
    width: 794px !important;

    .ck-editor__main {
      height: 100%;
      .ck-content {
        height: 100%;
      }
    }
    .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused),
    .ck.ck-editor__editable_inline {
      box-shadow: none !important;
      padding-top: 90px;
      padding-bottom: 100px;
      padding-left: 100px;
      padding-right: 100px;
      box-sizing: border-box;
    }
  }
}
figure {
  width: 100%;
  max-width: 100%;
  table {
    table-layout: fixed;
  }
}
</style>
