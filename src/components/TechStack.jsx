import React from 'react';

const TechStack = () => {
  return (
    <div>
      <section id='home-a' class='text-center py-2'>
        <div class='container'>
          <h2 class='section-title'>My Tech Stack</h2>
          <div class='bottom-line'></div>
          <p class='lead'>
            <strong>M</strong>ongo / <strong>E</strong>xpress /
            <strong>R</strong>eact / <strong>N</strong>ode
          </p>
          <div class='specials'>
            <div>
              <i class='fab fa-react fa-2x'></i>
              <h3>React</h3>
              <p>
                A super fast single page ui library backed by facebook developer
                community.
              </p>
            </div>
            <div>
              <i class='fab fa-node fa-2x'></i>
              <h3>Node</h3>
              <p>
                An open-source, cross-platform, back-end JavaScript runtime
                environment.
              </p>
            </div>
            <div>
              <i class='fas fa-bolt fa-2x'></i>
              <h3>Express</h3>
              <p>
                A Node framework to scale back-end development faster and make
                robust apps.
              </p>
            </div>
            <div>
              <i class='fas fa-cloud fa-2x'></i>
              <h3>Mongo</h3>
              <p>
                A document based No-Sql database that provides distributed
                clusters to store information securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
