import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className='header'>
            <div className="header-content">
                <div className="logo">
                   <img src="images/logo.png" alt="" style={{ width: '210px', height: '220px' }} />
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='red'><path d="M0 0h24v24H0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
                </button>
                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul className="link-list">
                        <li onClick={closeMenu}><Link to="/" style={{textDecoration: 'none'}}>Ireo Sera</Link></li>
                        <li onClick={closeMenu}><Link to="/addSera" style={{textDecoration: 'none'}}>Hisera</Link> </li>
                        <li onClick={closeMenu}><Link to="/hitady" style={{textDecoration: 'none'}}>Hitady</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
