import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/movieSlice";

const DeleteMovie = (props) => {
  const { onClose, id } = props;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteMovie(id));
    console.log(id);
  };

  return (
    <Modal
      handleCloseModalClick={onClose}
      submitButtonText={"CONFIRM"}
      handleSubmit={handleSubmit}
      title={"DELETE MOVIE"}
    >
      <p className="modal--text">Are you sure you want to delete this movie?</p>
    </Modal>
  );
};

export default DeleteMovie;
