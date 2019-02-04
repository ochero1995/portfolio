import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = props => (
    <button className="hamburger-button">
        <div className="hamburger-button__line"></div>
        <div className="hamburger-button__line"></div>
        <div className="hamburger-button__line"></div>
    </button>
);

export default HamburgerButton;