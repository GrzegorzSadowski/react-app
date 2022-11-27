import logo404 from './logo404.png';
import './MainContent.css';
import React from 'react';

class MainContent extends React.Component {
  render() {
    return (
    <div className="App">
      <h2>Page not found</h2>
      <img src={logo404} alt = "logo"/>
    </div>
    )
  };
}

export default MainContent;