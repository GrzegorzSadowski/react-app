import "../Modal/modal.css";
import React, { Component } from "react";

class AddMovie extends Component {
  state = {
    title: null,
    released: null,
    url: null,
    genre: null,
    overview: null,
    runtime: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleReset = (event) => {
    this.setState({
      title: null,
      released: null,
      url: null,
      genre: null,
      overview: null,
      runtime: null,
    });
  };

  render() {
    return (
      <div className="insidemodal--container">
        <h1 className="modal--title">ADD MOVIE</h1>
        <form
          className="modal--form"
          id="addMovie--form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="title" className="modal--label">
            TITLE
          </label>
          <br></br>
          <input
            type="text"
            className="modal--input"
            name="title"
            placeholder="Movie title here"
            onChange={this.handleInputChange}
            required
          />

          <br></br>
          <label htmlFor="released" className="modal--label">
            RELEASE DATE
          </label>
          <br></br>
          <input
            type="data"
            placeholder="Select date"
            className="modal--input"
            name="released"
            required
            onChange={this.handleInputChange}
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
            placeholder="Movie URL here"
            required
            onChange={this.handleInputChange}
          />
          <br></br>
          <label htmlFor="genre" className="modal--label">
            GENRE
          </label>
          <br></br>
          <select
            className="modal--select"
            name="genre"
            required
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          />
        </form>
        <div className="modal--buttons">
          <br></br>
          <button
            type="reset"
            form="addMovie--form"
            value="RESET"
            className="modal--reset"
            onClick={this.handleReset}
          >
            RESET
          </button>
          <button
            type="submit"
            form="addMovie--form"
            value="SUBMIT"
            className="modal--submit"
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default AddMovie;
