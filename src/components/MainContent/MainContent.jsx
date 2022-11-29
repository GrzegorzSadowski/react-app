import logo404 from '../../images/logo404.png'; 
import './MainContent.css';                 
import React from 'react';

class MainContent extends React.Component {
  render() {
    return (
    <div className="MainContent">
      <h2>Page not found</h2>
      <img src={logo404} alt = "404"/>
      <a href='#' target="blank"><button type="button" >
        GO BACK TO HOME
      </button></a>
    </div>
    )
  };
}


export default MainContent;