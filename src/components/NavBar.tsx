import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
