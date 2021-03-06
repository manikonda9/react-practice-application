import React, { Component } from 'react';
// import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import Appbar from "./components/appbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Appbar />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    title : state.title
  }
}

export default connect(mapStateToProps)(App);
