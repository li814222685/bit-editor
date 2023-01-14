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
import RestrictedEditingMode from "@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";

export const RESTRICT_CONFIG = {
  plugins: [
    Heading,
    Essentials,
    Bold,
    Italic,
    Paragraph,
    Link,
    RestrictedEditingMode,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TableColumnResize,
  ],
  restrictedEditing: {
    allowedCommands: [
      "bold",
      "heading",
      "insertSimpleBox",
      "insertTableRowAbove",
    ],
    allowedAttributes: ["bold", "simpleBox", "heading", "insertTableRowAbove"],
  },
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
          "simpleBox",
          "restrictedEditing",
        ]
      : null,
};
