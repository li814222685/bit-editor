import BitEditor from "./components/BitEditor.vue";

BitEditor.install = (app: any) => {
  app.component(BitEditor.name, BitEditor);
};

export default BitEditor;
