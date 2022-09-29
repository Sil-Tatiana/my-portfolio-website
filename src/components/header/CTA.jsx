import React from 'react'
import CV from '../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download cv</a>
      <a href="#contact" className='btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA
