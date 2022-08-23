import React from 'react';
import item1 from '../img/items/item1.png';
import item2 from '../img/items/item2.png';
import item3 from '../img/items/item3.png';
import item4 from '../img/items/item4.png';
import item5 from '../img/items/item5.png';
import item6 from '../img/items/item6.png';
import item7 from '../img/items/item7.png';
import item8 from '../img/items/item8.png';
import item9 from '../img/items/item9.png';
import DemoButton from './DemoButton';
const Projects = () => {
  return (
    <div>
      <section id='work-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>My Work</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Check out some of my projects</p>
          <div className='items'>
            <div className='item'>
              <div className='item-image'>
                <img src={item1} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Api React</p>
                  <h2 className='item-text-title'>Github finder</h2>
                  <DemoButton demoLink='https://gitcheck.netlify.app/' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item2} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Full stack</p>
                  <h2 className='item-text-title'>MERN E-commerce</h2>
                  <DemoButton demoLink='https://gamehubstore.herokuapp.com/' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item3} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Rapid Api</p>
                  <h2 className='item-text-title'>Crypto News</h2>
                  <DemoButton demoLink='https://cryptoinfohub.netlify.app/' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item4} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Rapid Api</p>
                  <h2 className='item-text-title'>web surfer</h2>
                  <DemoButton demoLink='#' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item5} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Full stack</p>
                  <h2 className='item-text-title'>Mern Chat</h2>
                  <DemoButton demoLink='#' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item6} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Node Backend</p>
                  <h2 className='item-text-title'>Dev Skool</h2>
                  <DemoButton demoLink='https://documenter.getpostman.com/view/14070563/UV5Rkf8C' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item7} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>UI/UX</p>
                  <h2 className='item-text-title'>SASS LANDING</h2>
                  <DemoButton demoLink='' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item8} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>UI/UX</p>
                  <h2 className='item-text-title'>Restaurant LANDING</h2>
                  <DemoButton demoLink='' />
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src={item9} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>UI/UX</p>
                  <h2 className='item-text-title'>NEWS LANDING</h2>
                  <DemoButton demoLink='https://news-360.netlify.app/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
