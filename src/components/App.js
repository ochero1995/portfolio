import React, { Component } from 'react';
import '../styles/App.scss';
import Header from './header/Header';
import About from './about/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <About />      
      </div>
    );
  }
}

export default App;
