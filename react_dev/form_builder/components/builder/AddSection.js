import React from "react";
import BootstrapModal  from "../common/Bootstrap/Modal";
import AddSectionForm from "./AddSectionForm";
import {connect} from "react-redux";
import { Button }  from "react-bootstrap";
import { addSectionAction } from "../../actions/builder";

class AddSection extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

   close() {
     this.setState({ showModal: false });
   }

   open() {
     this.setState({ showModal: true });
   }

   render() {
    const { addSectionAction } = this.props;
    const addSectionBody = <AddSectionForm addSectionAction={addSectionAction} showModal={this.state.showModal} hideModal={this.close} />
    return (
      <div class="col-sm-12">
        <hr />
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
        Add Section
        </Button>
        <BootstrapModal
          showModal={this.state.showModal}
          closeModal={this.close}
          title="Add Section"
          body={addSectionBody}
        />
      </div>
    )
  }
}

export default connect(null, { addSectionAction })(AddSection);
