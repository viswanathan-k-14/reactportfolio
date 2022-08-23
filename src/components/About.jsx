import React from 'react';

const About = () => {
  return (
    <div>
      <section id='about-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            Let me tell you a little about myself and what I do...
          </p>
          <div className='about-info'>
            <div
              className='bio bg-light'
              style={{
                padding: '50px',
                width: 'fit-content',
                margin: '0 auto',
              }}
            >
              <br />

              <div className='contentabout'>
                {' '}
                <h4 className='my-1'>Your Project Is In Safe Hands</h4>
                <p className='my-1'>
                  ✔️ &nbsp; Hi there I am Viswanathan a self taught full stack
                  developer.
                </p>
                <p className='my-1'>
                  ✔️ &nbsp; I am specialized in Computer science and
                  engineering.
                </p>
                <p className='my-1'>
                  ✔️ &nbsp; I love to develop applications with modern tech
                  stack and convert ideas into real world products
                </p>
                <p className='my-1'>
                  ✔️ &nbsp; I am a part time freelancer too.Apart from tech I am
                  interested in cricket 🏏 and aviation ✈️ .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
