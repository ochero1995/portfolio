import React, { } from 'react';
import './NavBar.css';
import './Hero.css'
import HamburgerButton from '../buttons/HamburgerButton';

const NavBar = (props) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <HamburgerButton />
            </div>
            <div className="toolbar__logo"><a href="/" className="">annoyedSquire</a></div>
            <div className="spacer"></div>
            <ul className="toolbar__navigation-items">
                <li><a href="/">About Me</a></li>
                <li><a href="/">Work</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
        <div className="hero">
            <div class="hero__blurb">
                <h1>Hello!</h1>
                <h2>Welcome to my portfolio</h2>
                <a href="/" class="btn">View Projects</a>
            </div>
        </div>
    </header>
);

export default NavBar;