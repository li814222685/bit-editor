import Command from "@ckeditor/ckeditor5-core/src/command";
import _ from "lodash";
interface NodeConfig {
  type: string;
}
//插入Table CC
/**
 * 1.改变单元格背景色
 * 2.单元格内部元素全部变为 严格编辑，不再需要范围
 */
export class TableTextCommand extends Command {
  execute(option?: NodeConfig) {
    //todo：普通编辑模式下有个bug ，如果删除当前可编辑元素内的所有字符，它不会保留空白区间。
    const selection = this.editor.model.document.selection;
    const mapper = this.editor.editing.mapper;
    const tableCell = [...selection.getSelectedBlocks()][0] as any;

    const td = mapper.toViewElement(tableCell.parent);
    this.editor.editing.view.change((writer) => {
      writer.setStyle(
        {
          "background-color": "rgba(255, 169, 77, 0.2)",
        },
        td
      );
    });
    //用户选择全部单元格元素时候不再需要执行全选了，二次权限会导致选中当前表格
    if (!_.isEqual(selection.anchor?.path.slice(-2), [0, 0])) {
      this.editor.execute("selectAll");
      this.editor.editing.view.focus();
    }
    this.editor.execute("restrictedEditingException");
  }
}
