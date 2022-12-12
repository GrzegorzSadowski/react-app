import React, { Component } from "react";

class DeleteMovie extends Component {
  handleDeleteClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
        <p className="modal--text">
          Are you sure you want to delete this movie?
        </p>
    );
  }
}

export default DeleteMovie;
