import React from "react";
import { ItemTypes } from './drag';
import { DragSource } from 'react-dnd'

const ItemSource = {
  beginDrag(props) {
    console.log(props);
    const { type, title, icon } = props.data;
    return { type, title, icon };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}


@DragSource(ItemTypes.TOOL_ITEM, ItemSource, collect)
class ToolBoxItem extends React.Component {

  render() {
    const { connectDragSource, isDragging, connectDragPreview } = this.props;

    const { icon, title, type } = this.props.data;
    return connectDragSource(
      <div>
      <div class="col-sm-6">
         <span class={icon} title={title} type={type}></span>
      </div>
      </div>
    )
  }
}

export default ToolBoxItem;
