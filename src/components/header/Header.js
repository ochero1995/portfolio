import React, { Component } from 'react';
import NavBar from '../navigation/Navigation'
import '../../styles/App.scss'

class Header extends Component {
    render(){
        return (
            <div className="App-header">
            <NavBar />
            <h1 class="headline">Hello<span className="blinking-cursor">|</span></h1>
            </div>
        );
    }
}

export default Header;