import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from "netlify-identity-widget"


class App extends Component {
  componentDidMount() {
    netlifyIdentity.init();
  }
  handleIdentity = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <p><a href="#" onClick={this.handleIdentity}>User Status</a></p>
        </p>
      </div>
    );
  }
}

export default App;
