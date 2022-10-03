import React from 'react'
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/silvia-neves-silvianeves" target= "_blank" rel="noopener noreferrer"><GrLinkedin /></a>
      <a href="https://github.com/Sil-Tatiana" target= "_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
