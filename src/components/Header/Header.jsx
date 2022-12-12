import "./header.css";
import React from "react";
import Name from "../Name/Name";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";

class Header extends React.Component {
  state = {
    showModal: false,
  };

  handleOpenModalClick = () => {
    this.setState({ ...this.state, showModal: true });
  };

  handleCloseModalClick = () => {
    this.setState({ ...this.state, showModal: false });
  };

  render() {
    const { showButton } = this.props;

    return (
      <header className="header">
        <Name />
        {showButton && (
          <button
            onClick={this.handleOpenModalClick}
            className="header--button"
          >
            + ADD MOVIE
          </button>
        )}

        {this.state.showModal &&
          ReactDOM.createPortal(
            <Modal
              handleCloseModalClick={this.handleCloseModalClick}
              showAddMovie={true}
              showEditMovie={false}
              showDeleteMovie={false}
            />,
            document.getElementById("findYourMovie--container")
          )}
      </header>
    );
  }
}

export default Header;
