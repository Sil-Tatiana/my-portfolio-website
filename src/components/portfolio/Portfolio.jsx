import React from 'react'
import './portfolio.css'
import PLANTREAT from "../assets/plantreat2.png";
import BARKAWAY from "../assets/barkaway6.png";

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
            <img src={PLANTREAT} alt="Plant app" />
          </div>
            <h3>Plantreat</h3>
            <p>The app you need to help you treat your plants</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/felipesferreiradev/plantreat" target='_blank' className='btn'>Github</a>
              <a href="http://www.plantreat.lol/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__itme-image">
            <img src={BARKAWAY} alt="Dog walker website" />
          </div>
            <h3>Barkaway</h3>
            <p>The website that takes your dog on a walk</p>
            <div className="portfolio__item-cta">
              <a href="https://github.com/felipesferreiradev/BARK_AWAY" target='_blank' className='btn'>Github</a>
              <a href="https://bark-away.herokuapp.com/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
