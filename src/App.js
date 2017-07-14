import React, { Component } from 'react';
import Display from './components/Container'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
