import "../Modal/modal.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const AddMovie = (props) => {
  const { onClose, setFilms } = props;

  const [film, setFilm] = useState({
    id: null,
    key: null,
    title: null,
    url: null,
    genre: null,
    overview: null,
    released: null,
    runtime: null,
    img: "../../images/img1.jpg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilms(film);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setFilm({
      ...film,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setFilm({
      ...film,
      title: null,
      url: null,
      genre: null,
      overview: null,
      released: null,
      runtime: null,
    });
  };

  return (
    <Modal
      handleCloseModalClick={onClose}
      submitButtonText={"SUBMIT"}
      resetButtonText={"RESET"}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      title={"ADD MOVIE"}
    >
      <form className="modal--form" id="form" onSubmit={handleSubmit}>
        <label htmlFor="title" className="modal--label">
          TITLE
        </label>
        <br></br>
        <input
          type="text"
          className="modal--input"
          name="title"
          value={film.title}
          placeholder="Movie title here"
          onChange={handleInputChange}
        />

        <br></br>
        <label htmlFor="released" className="modal--label">
          RELEASE DATE
        </label>
        <br></br>
        <input
          value={film.released}
          type="data"
          className="modal--input"
          name="released"
          onChange={handleInputChange}
          placeholder="Select date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <br></br>
        <label htmlFor="url" className="modal--label">
          MOVIE URL
        </label>
        <br></br>
        <input
          type="text"
          className="modal--input"
          name="url"
          value={film.url}
          onChange={handleInputChange}
          placeholder="Movie URL here"
        />
        <br></br>
        <label htmlFor="genre" className="modal--label">
          GENRE
        </label>
        <br></br>
        <select
          className="modal--select"
          name="genre"
          onChange={handleInputChange}
          value={film.genre}
        >
          <option value="Select genre" disabled selected>
            Select genre
          </option>
          <option className="addMovie--option--genre">Crime</option>
          <option className="addMovie--option--genre">Documentary</option>
          <option className="addMovie--option--genre">Horror</option>
          <option className="addMovie--option--genre">Comedy</option>
        </select>
        <br></br>
        <label htmlFor="overview" className="modal--label">
          OVERVIEW
        </label>
        <br></br>
        <input
          type="text"
          className="modal--input"
          name="overview"
          placeholder="Overview here"
          value={film.overview}
          onChange={handleInputChange}
        />
        <br></br>
        <label htmlFor="runtime" className="modal--label">
          RUNTIME
        </label>
        <br></br>
        <input
          type="text"
          className="modal--input"
          name="runtime"
          placeholder="Runtime here"
          value={film.runtime}
          onChange={handleInputChange}
        />
      </form>
    </Modal>
  );
};

export default AddMovie;
