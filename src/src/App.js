import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueryInput from './components/queryInput/'
import ContentList from './components/displayWrap/'
const url = '/weather'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '', // user input value
      response: {} // response
    }
    this.handleResponse = this.handleResponse.bind(this)
  }
  handleResponse(res) {
    this.setState({
      response: res
    })
  }
  render() {
    const response = this.state.response
    const value = {
      url,
      handleResponse: this.handleResponse
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather demo app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <QueryInput value={ value }/>
        <ContentList response = { response }/>
      </div>
    );
  }
}

export default App;
