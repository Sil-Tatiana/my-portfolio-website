import React from 'react'
import './portfolio.css'
import PLANTREAT from "../assets/plantreat.png";
import BARKAWAY from "../assets/barkaway.png";

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
            <img src={PLANTREAT} alt="Plant app" />
            <h3>Portfolio Title</h3>
            <a href="https://github.com/felipesferreiradev/plantreat" target='_blank' className='btn'>Github</a>
            <a href="http://www.plantreat.lol/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
          <img src={BARKAWAY} alt="Dog walker website" />
            <h3>Portfolio Title</h3>
            <a href="https://github.com/felipesferreiradev/BARK_AWAY" target='_blank' className='btn'>Github</a>
            <a href="https://bark-away.herokuapp.com/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
