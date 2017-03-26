import React from "react";
import { connect } from "react-redux";
import DropSectionItem from "./DropSectionItem";
import EditSectionForm from "./EditSectionForm";
import BootstrapModal  from "../common/Bootstrap/Modal";
import { deleteSectionAction, editSectionAction, sortSection } from "../../actions/builder";


import { sortable } from 'react-sortable';
  import { SortableElement, SortableContainer } from 'react-sortable-hoc';

export const SortableItem = SortableElement(({deleteSectionAction, editSectionAction, data, showEditModal}) =>
  <DropSectionItem deleteSectionAction={deleteSectionAction} data={data} showEditModal={showEditModal} />
);

export const SortableList = SortableContainer(({items, deleteSectionAction, showEditModal}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} deleteSectionAction={deleteSectionAction} showEditModal={showEditModal} data={value} />
      ))}
    </ul>
  );
});


class DropSection extends React.Component {

  constructor() {
    super();
    this.state = {
      show_edit_modal: false,
      edit_form_data: {}
    }
    this.showEditModal  = this.showEditModal.bind(this);
    this.hideEditModal = this.hideEditModal.bind(this);
  }

  showEditModal(data) {

    const editSectionBody = <EditSectionForm
                              data={data}
                              editSectionAction={this.props.editSectionAction}
                              hideEditModal={this.hideEditModal}
                            />
    this.setState({
      show_edit_modal:true,
      edit_form: editSectionBody
    });
  }

  hideEditModal() {
    this.setState({
      show_edit_modal:false,
      edit_form_data: null
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.sortSection(oldIndex, newIndex);
  };

  render() {
    const { formBuilderSections, deleteSectionAction, editSectionAction } = this.props;
    var childProps = { className:"section" };
    const sections = <SortableList items={formBuilderSections} deleteSectionAction={deleteSectionAction} showEditModal={this.showEditModal} onSortEnd={this.onSortEnd} />
    return (
      <div class="row">
        <div>{sections}</div>
        <BootstrapModal
            showModal={this.state.show_edit_modal}
            closeModal={this.hideEditModal}
            title="Edit Section"
            body={this.state.edit_form}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    formBuilderSections: state.formBuilderSections
  }
}

export default connect(mapStateToProps, { deleteSectionAction, editSectionAction, sortSection })(DropSection);
