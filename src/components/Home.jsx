import React from 'react';
import Geography from '../images/Geography.svg'
import Devops from '../images/Devops.svg'
import Teacher from '../images/Teacher.svg'
import CardImage from '../images/13236360.png'
const Home = (props) => {
    return ( 
        <>
              <div className="hero">
                    <div className="content">
                          <h1>EMBRACING THE UNKNOWN</h1>
                          <p>Meet Romeyn</p>
                    </div>
                    <svg className="hero-design" width="100" height="100" viewBox="0 0 100 100" fill="none" >
                  <rect className="square-anim" width="100" height="100" fill="#F9866F"/>
                  <rect className="square-anim" width="100" height="100" fill="#F9866F"/>
                  <rect className="square-anim" width="100" height="100" fill="#F9866F"/>
                  <rect className="square-anim" width="100" height="100" fill="#F9866F"/>
                  <rect className="square-anim" width="100" height="100" fill="#F9866F"/>

                  </svg>
                  <svg className="triangle-anim hero-design2" width="329" height="100" viewBox="0 0 329 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L328.5 47.2906L0 100V0Z" fill="#F9866F"/>
</svg>
                  <svg className="hero-design-canvas hero-design3" width="529" height="500" viewBox="0 0 529 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="528" height="499" fill="#F2F2F2" stroke="#596C73"/>
</svg>

                    
              </div>
              <section className="featured">
                    
      <img className="left transition2 featured-img" src={CardImage} alt="" />
                    
                    <div className="right">
                          <div className="inner-transition2">
                                <p className="subtitle">featured project</p>
                                <a href="#" className="featured-title">Card Magic Game</a>
                                <p className="featured-desc">Intelligent card game that guesses your card!</p>
                          </div>
                    </div>
              </section>
              <section className="skills">
                  <div className="skills-container">
                        <ul>
                              <li className="transition2">
                                    <div className="icon-container one">
                                          <img src={Geography} alt="" />
                                    </div>
                                    <p className="skill-title">Web developer</p>
                                    <p className="featured-desc skill-desc">I make webapps using Javascript</p>
                              </li>
                              <li className="transition2">
                                    <div className="icon-container two">
                                          <img src={Devops} alt="" />
                                    </div>
                                    <p className="skill-title">Web developer</p>
                                    <p className="featured-desc skill-desc">I make webapps using Javascript</p>
                              </li>
                              <li className="transition2">
                                    <div className="icon-container three">
                                          <img src={Teacher} alt="" />
                                    </div>
                                    <p className="skill-title">Web developer</p>
                                    <p className="featured-desc skill-desc">I make webapps using Javascript</p>
                              </li>
                        </ul>
                  </div>
              </section>
              <section className="call-to-action">
                    <div className="cta-container transition3">
                           <a href="#">Got a job? Contact Me</a>
                    </div>

              </section>
 
        </>

    );
}
 
export default Home;