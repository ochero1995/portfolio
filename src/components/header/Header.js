import React, { Component } from 'react';
import '../../styles/App.css'

class Header extends Component {
    render(){
        return (
            <header className="App-header">
                <p>
                    Welcome to my <code>Portfolio.js</code>.
                </p>
                <button className="primary-button pulsate">Click here!</button>
            </header>
        );
    }
}

export default Header;