import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
            <img src="" alt="" />
            <h3>Portfolio Title</h3>
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
          <img src="" alt="" />
            <h3>Portfolio Title</h3>
            <a href="" className='btn'>Github</a>
            <a href="" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
