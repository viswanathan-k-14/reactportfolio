import React from 'react';

const Footer = () => {
  return (
    <footer id='main-footer'>
      <div class='footer-content container'>
        <p>Made with 💛 by Viswanathan</p>
        <div class='social'>
          <a
            href='https://twitter.com/viswanath_k_14'
            target='_blank'
            rel='noreferrer'
            style={{ color: 'white' }}
          >
            <i class='fab fa-twitter'></i>
          </a>
          <a
            href='https://github.com/viswanathan-k-14'
            target='_blank'
            rel='noreferrer'
            style={{ color: 'white' }}
          >
            <i class='fab fa-github'></i>
          </a>

          <i class='fab fa-instagram'></i>
          <i class='fab fa-linkedin'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
