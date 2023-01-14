import { Command } from "@ckeditor/ckeditor5-core";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {
  COMMAND_NAME_INSERT_TEXTCC,
  COMMAND_NAME_INSERT_TABLE_TEXT,
} from "./constant";
import { TableTextCommand } from "./commands/normal/tableTextCC";

class InsertTextCCCommand extends Command {
  execute(...options: unknown[]): void {
    const editor = this.editor;
    const model = editor.model;
    const selectedBlocks = model.document.selection.getSelectedBlocks();
    const [elementBlock] = selectedBlocks;
    if (elementBlock) {
      const isInTableCell = elementBlock.findAncestor("table");
      console.log(isInTableCell);
      isInTableCell
        ? //表格文本框
          editor.execute(COMMAND_NAME_INSERT_TABLE_TEXT)
        : //普通文本框
          editor.execute("restrictedEditingException");
    }
  }
}

class InsertTextCCEditing extends Plugin {
  init(): void | Promise<void> {
    this.editor.commands.add(
      COMMAND_NAME_INSERT_TABLE_TEXT,
      new TableTextCommand(this.editor)
    );
    this.editor.commands.add(
      COMMAND_NAME_INSERT_TEXTCC,
      new InsertTextCCCommand(this.editor)
    );
  }
}
/** 修改图片src 插件，用于图片src的回显 */
export default class InsertTextCC extends Plugin {
  static get requires() {
    return [InsertTextCCEditing];
  }
}
