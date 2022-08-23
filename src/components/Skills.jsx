import React, { useEffect } from 'react';
import { skills } from '../data';
const Skills = () => {
  useEffect(() => {
    console.log(skills);
  }, []);

  return (
    <div>
      <section id='home-c' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>Other technologies</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            I always learn new tech skills and add it into my tech bucket ! 😉
          </p>
          <div className='process'>
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <i
                    className={`fab fa-${skill.fontName} fa-3x process-icon my-2`}
                  >
                    <div class='process-step'>{index + 1}</div>
                  </i>
                  <h3>{skill.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
