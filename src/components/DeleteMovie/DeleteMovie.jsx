import React, { useState } from "react";
import Modal from "../Modal/Modal";

const DeleteMovie = (props) => {
  const { onClose, /*onDelete,*/ id, films, setFilms } = props;

  const handleDelete = (id) => {
    const deletedFilms = films.filter((film) => film.id !== id);
    setFilms(deletedFilms);
    console.log("deleted");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDelete(id);
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
