import React, { Component } from "react";

class DeleteMovie extends Component {
  handleDeleteClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="insidemodal--container">
        <h1 className="modal--title">DELETE MOVIE</h1>
        <p className="modal--text">
          Are you sure you want to delete this movie?
        </p>
        <div className="modal--buttons">
          <button
            type="submit"
            value="CONFIRM"
            className="modal--submit"
            onClick={this.handleDeleteClick}
          >
            CONFIRM
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteMovie;
