import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
const NavWork = () => {
  return (
    <div>
      <header id='header-inner'>
        <div class='container'>
          <nav id='main-nav'>
            <Link to='/' style={{ borderBottom: 'none' }}>
              <img src={Logo} alt='Viswanathan K' class='logo' />
            </Link>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/work' class='current'>
                  Work
                </Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavWork;
