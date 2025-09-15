import React from 'react';
import { SOCIAL_LINKS } from '../utils/constants';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="social">
        {SOCIAL_LINKS.map((social, index) => (
          <a href={social.url} key={index}>
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <p>&#169;Shubham</p>
    </section>
  );
}

export default Contact;