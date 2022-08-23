import React from 'react';

const Timeline = () => {
  return (
    <div>
      <section id='home-b' className='text-center py-2'>
        <h2 className='section-title'>My Timeline</h2>
        <div className='stats'>
          <div>
            <ul>
              <li>
                <i className='fas fa-hourglass-start fa-3x'></i>
              </li>
              <li className='stats-title'>2019</li>
              <strong>
                <li>Started exploring the web with html,css,js and php</li>
              </strong>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-award fa-3x'></i>
              </li>
              <li className='stats-title'>2019</li>
              <strong>
                <li>Won codefest for best coding practice at ceg , guindy</li>
              </strong>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-code fa-3x'></i>
              </li>
              <li className='stats-title'>2020</li>
              <strong>
                <li>
                  Made projects using modern frontend <br />
                  and backend frameworks / freelancing
                </li>
              </strong>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-hourglass-end fa-3x'></i>
              </li>
              <li className='stats-title'>2021</li>
              <strong>
                <li>Exploring tech as a fullstack dev</li>
              </strong>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
