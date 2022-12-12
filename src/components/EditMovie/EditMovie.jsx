import React, {Component} from "react";
import "../Modal/modal.css";
import Modal from "../Modal/Modal";
import AddMovie from "../AddMovie/AddMovie";

class EditMovie extends Component {


    state = {
        id: 1,
        title: "ull",
        released: "01-Dec-22",
        url: "http: ..",
        genre: "Comedy",
        overview: "overview text goes here",
        runtime: "runtime text goes here",
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
        const {onClose} = this.props;
        return <Modal
            handleCloseModalClick={onClose}
            submitButtonText={'SAVE'}
            resetButtonText={'RESET'}
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
            title={'EDIT MOVIE'}
        >
            <form
                className="modal--form"
                id="addMovie--form"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="modal--movieID" className="modal--label">
                    MOVIE ID
                </label>
                <br></br>
                <p className="modal--movieID">{this.state.id}</p>
                <br></br>

                <label htmlFor="title" className="modal--label">
                    TITLE
                </label>
                <br></br>
                <input
                    type="text"
                    className="modal--input"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />

                <br></br>
                <label htmlFor="released" className="modal--label">
                    RELEASE DATE
                </label>
                <br></br>
                <input
                    value={this.state.released}
                    type="data"
                    className="modal--input"
                    name="released"
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
                    value={this.state.url}
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
                    onChange={this.handleInputChange}
                >
                    <option value="Select genre" disabled selected>
                        {this.state.genre}
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
                    value={this.state.overview}
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
                    value={this.state.runtime}
                    onChange={this.handleInputChange}
                />
            </form>
        </Modal>
    }
}

export default EditMovie;
