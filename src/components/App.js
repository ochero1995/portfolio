import React, { Component } from 'react';
import NavBar from './navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main style={{marginTop: '64px'}}>
        </main>     
      </div>
    );
  }
}

export default App;
