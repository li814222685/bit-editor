/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@ckeditor/ckeditor5-essentials/src/essentials";
declare module "@ckeditor/ckeditor5-basic-styles/src/bold";
declare module "@ckeditor/ckeditor5-basic-styles/src/italic";
declare module "@ckeditor/ckeditor5-table/src/tablecolumnresize";
declare module "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
declare module "@/../lib/bitEditor.common.js";
