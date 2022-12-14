import React, { Component } from "react";
import Modal from "../Modal/Modal";

class DeleteMovie extends Component {
  state = {
    id: this.props.id,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.id);
  };

  render() {
    const { onClose } = this.props;
    return (
      <Modal
        handleCloseModalClick={onClose}
        submitButtonText={"CONFIRM"}
        handleSubmit={this.handleSubmit}
        title={"DELETE MOVIE"}
      >
        <p className="modal--text">
          Are you sure you want to delete this movie?
        </p>
      </Modal>
    );
  }
}

export default DeleteMovie;
