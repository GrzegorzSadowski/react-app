import React, { useState } from "react";
import "../Modal/modal.css";
import Modal from "../Modal/Modal";
import { updateMovie } from "../../redux/movieSlice";
import { useDispatch } from "react-redux";

const EditMovie = (props) => {
  const { onClose, item } = props;
  const dispatch = useDispatch();
  const [film, setFilm] = useState(item);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateMovie({
        id: film.id,
        title: film.title,
        key: film.id,
        releaseDate: film.releaseDate,
        genres: [film.genres],
        runtime: film.runtime,
        posterPath: film.posterPath,
        overview: film.overview,
        tagline: film.tagline,
        voteAverage: film.voteAverage,
        voteCount: film.voteCount,
        budget: film.budget,
        revenue: film.revenue,
      })
    );

    //handleChange(film);
    console.log(film);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setFilm({ ...film, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setFilm({
      ...film,
      title: item.title,
      url: item.posterPath,
      genre: item.genres[0],
      overview: item.overview,
      released: item.releaseDate,
      runtime: item.runtime,
    });
  };

  return (
    <Modal
      handleCloseModalClick={onClose}
      submitButtonText={"SAVE"}
      resetButtonText={"RESET"}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      title={"EDIT MOVIE"}
    >
      <form className="modal--form" id="form" onSubmit={handleSubmit}>
        <label htmlFor="modal--movieID" className="modal--label">
          MOVIE ID
        </label>
        <br></br>
        <p className="modal--movieID">{film.id}</p>
        <br></br>

        <label htmlFor="title" className="modal--label">
          TITLE
        </label>
        <br></br>
        <input
          type="text"
          className="modal--input"
          name="title"
          value={film.title}
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
          name="released"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={handleInputChange}
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
          value={film.posterPath}
          onChange={handleInputChange}
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
        >
          <option value="Select genre" disabled selected>
            {film.genres[0]}
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
          value={film.runtime}
          onChange={handleInputChange}
        />
      </form>
    </Modal>
  );
};

export default EditMovie;
