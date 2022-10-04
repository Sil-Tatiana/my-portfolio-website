import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_anl8ylh', 'template_xjeirtn', form.current, 'uiJAcmMTrKCVNGgn3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            < HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>siltatiana.sn@gmail.com</h5>
            <a href="mailto:siltatiana.sn@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" id="textarea_contact" rows="7" required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
