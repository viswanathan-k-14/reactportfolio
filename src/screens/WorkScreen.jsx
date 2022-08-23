import React from 'react';
import NavWork from '../components/NavWork';
import Projects from '../components/Projects';
const WorkScreen = () => {
  return (
    <div>
      <NavWork />
      <Projects />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <strong>
          <p className='my-1'>See source code and demos in github</p>
        </strong>
        <a
          class='btn-dark my-1'
          rel='noreferrer'
          href='https://github.com/viswanathan-k-14'
          style={{ width: '60px', borderRadius: '20px', textAlign: 'center' }}
          target='_blank'
        >
          <i className='fab fa-github'></i> github
        </a>
      </section>
    </div>
  );
};

export default WorkScreen;
