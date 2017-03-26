import React from "react";
import ToolBoxItem from "./ToolBoxItem";

class ToolBox extends React.Component {

  tool_box_items() {
    const toolBoxItems = [
          {
            'icon':"glyphicon glyphicon-text-width",
            'title':"Text Field",
            "type":"textField"
          },{
            'icon':"glyphicon glyphicon-ok",
            'title':"Drop Down",
            "type":"dropDown"
          },
          {
            'icon':"glyphicon glyphicon-ok",
            'title':"Image Field",
            "type":"imageField"
          }
        ]
    return toolBoxItems.map((value, key) => <ToolBoxItem key={key} data={value} />)
  }

  render() {
    const mappedToolBoxItems = this.tool_box_items();
    return (
      <div class="row">
        {mappedToolBoxItems}
      </div>
    )
  }
}

export default ToolBox;
