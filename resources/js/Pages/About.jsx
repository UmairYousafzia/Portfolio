import React from 'react'
import MainLayout from './MainLayout'
import profile from "./../../images/1.png";
const About = () => {
  return (
    <MainLayout>
      <div id="about" class="about-style-one-area default-padding">
            <div class="container_hh">
                <div class="row">
                    <div class="col-lg-5 abot">
                        <div className="about-style-one-thumb">
                            <img src={profile} alt="Image Not found"/>
                            <div class="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text>
                                        <textPath href="#textPath">Years of experience</textPath>
                                    </text>
                                </svg>
                                <h4>4</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 mt-50">
  <div className="about-style-one-info">
    <h3 className="sub-title">About Me</h3>
    <h2 className="title">I build web solutions <br /> that solve real problems</h2>
    <p>
      I'm a full-stack developer specializing in Laravel, React, HTML/CSS, Bootstrap, and WordPress. 
      I create responsive, scalable, and user-friendly applications that meet business goals and user needs.
    </p>

    <ul>
      <li>Custom web app development using Laravel and React.</li>
      <li>Frontend design with Bootstrap & Tailwind.</li>
      <li>CMS solutions with WordPress.</li>
    </ul>

    <div className="about-item">
      <h3> Biography</h3>
      <ul className="biography-table">
        <li>
          <h5>Name</h5>
          <p>Umair Hussain</p>
        </li>
        <li>
          <h5>Email</h5>
          <p>umairsb84@gmail.com</p>
        </li>
        <li>
          <h5>GitHub</h5>
          <p>github.com/UmairYousafzia</p>
        </li>
        <li>
          <h5>LinkedIn</h5>
          <p>linkedin.com/in/umair-hussain-872026278/</p>
        </li>
      </ul>
    </div>

    <div className="about-item">
    <h3> Technical Skills</h3>
      <ul className="skill-items mt-10">
        <li>
          <div className="icon">
            <i className="fab fa-laravel"></i>
          </div>
          <div className="content">
            <span>90%</span>
            <h5>Laravel & PHP</h5>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fab fa-react"></i>
          </div>
          <div className="content">
            <span>85%</span>
            <h5>React & JavaScript</h5>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="content">
            <span>80%</span>
            <h5>HTML, CSS, Bootstrap</h5>
          </div>
        </li>
      </ul>
    </div>

    <div className="about-item">
      <h3> Education</h3>
      <ul className="education-table">
        <li>
          <h4> BS Computer Science</h4>
          <h5>Fuuast University</h5>
          <span>2021 - Present</span>
          <p>
           FYP Dental Managment System For Molar And incisors Clinic.
          </p>
        </li>
        <li>
          <h4>WEB Engineering – Advanced</h4>
          <h5>Hazza Institute of Technology </h5>
          <span>2022</span>
          <p>
            Practical training in Laravel/Php to build end-to-end web applications.
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default About
