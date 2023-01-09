import "../Modal/modal.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addMovie } from "../../redux/movieSlice";

const AddMovie = (props) => {
  const { onClose } = props;
  const dispatch = useDispatch();

  const [film, setFilm] = useState({
    id: "",
    key: "",
    title: "",
    url: "",
    genres: "",
    overview: "",
    releaseDate: "",
    runtime: "",
    posterPath: "",
    tagline: "",
    voteAverage: "",
    voteCount: "",
    budget: "",
    revenue: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const random = nanoid();

    dispatch(
      addMovie({
        id: random,
        title: film.title,
        key: random,
        releaseDate: film.releaseDate,
        genres: [film.genres],
        runtime: film.runtime,
        posterPath: film.posterPath,
        overview: film.overview,
      })
    );
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
      id: "",
      key: "",
      title: "",
      url: "",
      genres: "",
      overview: "",
      releaseDate: "",
      runtime: "",
      posterPath:
        "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      tagline: "",
      voteAverage: "",
      voteCount: "",
      budget: "",
      revenue: "",
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
          value={film.releaseDate}
          type="data"
          className="modal--input"
          name="releaseDate"
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
          name="posterPath"
          value={film.posterPath}
          onChange={handleInputChange}
          placeholder="Movie URL here"
        />
        <br></br>
        <label htmlFor="genres" className="modal--label">
          GENRE
        </label>
        <br></br>
        {
          <select
            className="modal--select"
            name="genres"
            onChange={handleInputChange}
            value={film.genres}
            multiple={false}
          >
            <option className="addMovie--option--genre">Select genre</option>
            <option className="addMovie--option--genre">Crime</option>
            <option className="addMovie--option--genre">Documentary</option>
            <option className="addMovie--option--genre">Horror</option>
            <option className="addMovie--option--genre">Comedy</option>
          </select>
        }

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
