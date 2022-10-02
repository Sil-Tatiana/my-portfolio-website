import React from 'react'
import './about.css'
import PORTRAIT from '../assets/portrait.jpg'
import { GrCertificate } from "react-icons/gr";
import { AiOutlineBarChart} from "react-icons/ai";
import { HiOutlineFolder} from "react-icons/hi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PORTRAIT} alt="Portrait" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__icon">
              <GrCertificate />
              </div>
              <h5>Experience</h5>
              <small>Le Wagon -Bootcamp</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
              <AiOutlineBarChart/>
              </div>
              <h5>Background</h5>
              <small>Hospitality/Finance</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
              <HiOutlineFolder />
              </div>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <div className="about__content">
          <p>Passionate Front-end Web developer with a Hospitality/Finance background bringing forth a very dynamic attitude, willing to learn, and always ready to improve.
            Detail-oriented and able to perform under pressure. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
