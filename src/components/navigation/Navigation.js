import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="main-nav">
                    <li><a href="#" className="logo">annoyedSquire</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;