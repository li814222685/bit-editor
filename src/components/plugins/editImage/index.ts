import { Command } from "@ckeditor/ckeditor5-core";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import { COMMAND_NAME_EDIT_IMAGE } from "./constant";

class EditImageCommand extends Command {
  execute(...options: unknown[]): string | number | boolean | undefined {
    const editor = this.editor;
    const model = editor.model;
    const selectedElement = model.document.selection.getSelectedElement();
    return selectedElement ? selectedElement.getAttribute("src") : undefined;
  }
}

class EditImageEditing extends Plugin {
  init(): void | Promise<void> {
    this.editor.commands.add(
      COMMAND_NAME_EDIT_IMAGE,
      new EditImageCommand(this.editor)
    );
  }
}
/** 修改图片src 插件，用于图片src的回显 */
export default class EditImage extends Plugin {
  static get requires() {
    return [EditImageEditing];
  }
}
