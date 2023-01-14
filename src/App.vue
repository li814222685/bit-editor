<script lang="ts" setup>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { onMounted, ref, StyleValue } from "vue";
import BitEditor from "./components/BitEditor.vue";
import { EditorMode } from "./types";

class EditorInstance extends ClassicEditor {}
interface BitEditorProps {
  mode: EditorMode;
  id: string;
  classes?: any;
  style?: StyleValue | undefined;
  data: string;
  onMounted: (editor: any) => void;
  unMounted: (editor: any) => void;
}
defineProps<BitEditorProps>();
const initData = ref("Talk is cheap，Show me ur code");

const addEditorInstanceToWindow = (
  editor: EditorInstance,
  instanceName: string
) => {
  (window as any)[instanceName] = editor;
};

const setDataToRestrict = () => {
  const normalData = (window as any).editor.getData();
  (window as any).devEditor.setData(normalData);
};
</script>
<template>
  <div>
    <h1>Normal：</h1>
    <BitEditor
      :mode="EditorMode.Normal"
      :id="'editor'"
      :style="style"
      :classes="classes"
      :data="initData"
      :on-mounted="
        (editor) => {
          addEditorInstanceToWindow(editor, 'editor');
        }
      "
      :un-mounted="unMounted"
    />
  </div>
  <div>
    <h1>RESTRICT：<button @click="setDataToRestrict()">导入数据</button></h1>
    <BitEditor
      :mode="EditorMode.Restrict"
      :id="'devEditor'"
      :style="style"
      :classes="classes"
      :data="initData"
      :on-mounted="
        (editor) => {
          addEditorInstanceToWindow(editor, 'devEditor');
        }
      "
      :un-mounted="unMounted"
    />
  </div>
</template>
