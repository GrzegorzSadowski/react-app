import "./header.css";
import React from "react";
import Name from "../Name/Name";
import AddMovie from "../AddMovie/AddMovie";

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

        {this.state.showModal && (
          <AddMovie onClose={this.handleCloseModalClick} />
        )}
      </header>
    );
  }
}

export default Header;
