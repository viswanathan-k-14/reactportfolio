import React from 'react';

const DemoButton = ({ demoLink }) => {
  return (
    <div>
      <a
        className='my-2'
        rel='noreferrer'
        href={demoLink}
        style={{
          borderRadius: '20px',
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
        }}
        target='_blank'
      >
        Demo
      </a>
    </div>
  );
};

export default DemoButton;
