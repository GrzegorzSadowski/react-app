import React from "react";
import "./dots.css";
import dots from "../../images/dots-three-circle-vertical.svg";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";
import AddMovie from "../AddMovie/AddMovie";
import DeleteMovie from "../DeleteMovie/DeleteMovie";

class Dots extends React.Component {
    state = {
        showModal: false,
        showEdit: false,
        showDelete: false,
    };

    handleOpenMenuClick = () => {
        this.setState({...this.state, showModal: true});
    };

    handleCloseMenuClick = () => {
        this.setState({...this.state, showModal: false});
    };

    handleOpenEditClick = () => {
        this.setState({showModal: false, showDelete: false, showEdit: true});
    };

    handleOpenDeleteClick = () => {
        this.setState({showModal: false, showDelete: true, showEdit: false});
    };

    handleCloseModalClick = () => {
        this.setState({showModal: false, showDelete: false, showEdit: false});
    };

    render() {
        return (
            <div className="dots-container" onMouseLeave={this.handleCloseMenuClick}>
                <button className="dots-button" onClick={this.handleOpenMenuClick}>
                    <img className="dots-image" src={dots} alt="dots"/>
                </button>

                {this.state.showModal && (
                    <ul className="dots-dropdown">
                        <button
                            onClick={this.handleCloseMenuClick}
                            className="dots--button--x"
                        >
                            &#x2716;
                        </button>
                        <li>
                            <button onClick={this.handleOpenEditClick}>Edit</button>
                        </li>
                        <li>
                            <button onClick={this.handleOpenDeleteClick}>Delete</button>
                        </li>
                    </ul>
                )}

                {this.state.showEdit && <EditMovie onClose={this.handleCloseModalClick}/>}

                {this.state.showDelete && <DeleteMovie/>}
            </div>
        );
    }
}

export default Dots;
