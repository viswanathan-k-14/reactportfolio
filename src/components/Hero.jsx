import Typewriter from 'typewriter-effect';
import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div>
      <header id='header-home'>
        <div className='container'>
          <nav id='main-nav'>
            <Link to='/' style={{ borderBottom: 'none' }}>
              {' '}
              <img src={Logo} alt='Viswanathan K' className='logo' />{' '}
            </Link>
            <ul>
              <li>
                <Link to='/' className='current'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/work'>Work</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className='header-content'>
            <h1>
              👋 I am Viswanathan
              <span>
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'FrontEnd Developer',
                      'Fullstack Developer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />{' '}
              </span>
            </h1>
            <p className='lead' style={{ marginBottom: '0' }}>
              I design and develop experiences to make people's life simpler.
            </p>
            <a
              href='#about-a'
              className='btn-light'
              style={{ borderRadius: '20px', marginRight: '5px' }}
            >
              Know More
            </a>
            <a
              className='btn-dark my-1'
              rel='noreferrer'
              href='https://github.com/viswanathan-k-14'
              style={{ borderRadius: '20px', textAlign: 'center' }}
              target='_blank'
            >
              <i className='fab fa-github'></i> github
            </a>
            <div class='scroll-down'></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
