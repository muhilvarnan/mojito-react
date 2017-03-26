import React from "react";
import EditSectionForm from "./EditSectionForm";
import BootstrapModal  from "../common/Bootstrap/Modal";
import { ItemTypes } from './drag';
import { DropTarget } from 'react-dnd';


const squareTarget = {
  drop(props) {
    console.log(props);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

@DropTarget(ItemTypes.TOOL_ITEM, squareTarget, collect)
class DropSectionItem extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.deleteItem = this.deleteItem.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
  }

  componentWillMount() {
    const {id, section_title} = this.props.data;
    this.setState({
      id,
      section_title})
  }

  deleteItem(e) {
    this.props.deleteSectionAction(this.props.data.id);
  }

  openEditModal() {
    this.props.showEditModal(this.state);
  }

  render() {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget  (
      <div class="col-sm-12">
        { isOver ? "Drop Here" : null}
        <h1>{this.props.data.section_title}</h1>
        <button onClick={this.deleteItem}>Delete</button>
        <button onClick={this.openEditModal}>Edit</button>
      </div>
    )
  }
}

DropSectionItem.propTypes = {
  deleteSectionAction:React.PropTypes.func.isRequired
}

export default DropSectionItem;
