import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from '../components/navigation/Navigation';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />        
      </div>
    );
  }
}

export default App;
