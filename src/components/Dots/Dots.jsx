import React from "react";
import "./dots.css";
import dots from "../../images/dots-three-circle-vertical.svg";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import EditMovie from "../EditMovie/EditMovie";

class Dots extends React.Component {
  state = {
    showDropdown: false,
    showEdit: false,
    showDelete: false,
  };

  handleOpenMenuClick = () => {
    this.setState({ ...this.state, showDropdown: true });
  };

  handleCloseMenuClick = () => {
    this.setState({ ...this.state, showDropdown: false });
  };

  handleOpenEditClick = () => {
    this.setState({ showDropdown: false, showDelete: false, showEdit: true });
  };

  handleOpenDeleteClick = () => {
    this.setState({ showDropdown: false, showDelete: true, showEdit: false });
  };

  handleCloseModalClick = () => {
    this.setState({ showDropdown: false, showDelete: false, showEdit: false });
  };

  render() {
    const { item } = this.props;
    return (
      <div className="dots-container" onMouseLeave={this.handleCloseMenuClick}>
        <button className="dots-button" onClick={this.handleOpenMenuClick}>
          <img className="dots-image" src={dots} alt="dots" />
        </button>

        {this.state.showDropdown && (
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

        {this.state.showEdit && (
          <EditMovie item={item} onClose={this.handleCloseModalClick} />
        )}

        {this.state.showDelete && (
          <DeleteMovie id={item.id} onClose={this.handleCloseModalClick} />
        )}
      </div>
    );
  }
}

export default Dots;
