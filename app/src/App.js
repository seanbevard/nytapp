import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saved from './Components/children/Saved'
import Search from './Components/children/Search'

class App extends Component {
  render() {
        return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>New York Times Search</strong></h2>
          <p><em>Version: React.0</em></p>
          <hr />
        </div>
        <div className="row">
          <Search />
          <Saved />
        </div>

      </div>
    );
  }
}

export default App;
