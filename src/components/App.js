import React, { Component } from 'react';
import NavBar from './navigation/Navigation';
import About from './about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <About />  
        </main>
         
      </div>
    );
  }
}

export default App;
