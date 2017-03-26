import React from "react";
import { Button, Modal, OverlayTrigger }  from "react-bootstrap";

class BootstrapModal extends React.Component {

  constructor() {
    super();
    this.close = this.close.bind(this);

  }
  close() {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

BootstrapModal.propTypes = {
  showModal: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default BootstrapModal;
