import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            < HiOutlineMail/>
            <h4>Email</h4>
            <h5>siltatiana.sn@gmail.com</h5>
            <a href="mailto:siltatiana.sn@gmail.com">Email me</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" id="textarea_contact" rows="7" required></textarea>
        </form>
      </div>
    </section>
  )
}

export default Contact
