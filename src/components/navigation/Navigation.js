import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul className="container">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;