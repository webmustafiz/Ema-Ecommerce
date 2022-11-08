import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/Order">Order</a>
            <a href="/Order-review">Order Review</a>
            <a href="/Inventory">Manage Inventory</a>
            <a href="/Log in">Log in</a>
            </div>
        </nav>
    );
};

export default Header;