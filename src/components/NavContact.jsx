import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
const NavContact = () => {
  return (
    <div>
      <header id='header-inner'>
        <div class='container'>
          <nav id='main-nav'>
            <Link style={{ borderBottom: 'none' }} to='/'>
              <img src={Logo} alt='Viswanathan K' class='logo' />
            </Link>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/work'>Work</Link>
              </li>
              <li>
                <Link to='/contact' class='current'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavContact;
