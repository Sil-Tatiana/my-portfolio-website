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
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PORTRAIT} alt="Portrait" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GrCertificate />
              <h5>Experience</h5>
              <small>Le Wagon - Bootcamp</small>
            </article>
            <article className="about__card">
              <AiOutlineBarChart/>
              <h5>Background</h5>
              <small>Hospitality/Finance</small>
            </article>
            <article className="about__card">
              <HiOutlineFolder />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p></p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
