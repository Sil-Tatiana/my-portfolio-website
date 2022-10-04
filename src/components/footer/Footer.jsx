import React from 'react'
import './footer.css'
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Silvia_Neves</a>

      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Sil-Tatiana"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/silvia-neves-silvianeves"><GrLinkedin /></a>
      </div>

      <div className="footer__label">
        <small>&copy; Silvia Neves_ Made with React</small>
      </div>
    </footer>
  )
}

export default Footer
