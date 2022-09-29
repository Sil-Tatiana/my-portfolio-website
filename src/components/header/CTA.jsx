import React from 'react'
import CV from '../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download>Download cv</a>
      <a href="#contact">Contact me</a>
    </div>
  )
}

export default CTA
