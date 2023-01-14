import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import StandardEditingMode from "@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import EditImage from "../plugins/editImage/index";
import InsertTextCC from "../plugins/controls/text";

export const NORMAL_CONFIG = {
  plugins: [
    Heading,
    Essentials,
    Bold,
    Italic,
    Paragraph,
    Link,
    StandardEditingMode,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    Bold,
    ImageInsert,
    TableColumnResize,
    AutoImage,
    Image,
    ImageResize,
    EditImage,
    InsertTextCC,
  ],
  toolbar:
    process.env.NODE_ENV == "development"
      ? [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "numberedList",
          "bulletedList",
          "|",
          "abbreviation",
          "abbreviations",
          "bubble",
          "restrictedEditingException",
          "|",
          "insertImage",
        ]
      : null,

  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
    tableProperties: {
      // ...
    },
  },
};
