import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="img/cel.png" alt="CCD Celebration" />
      </div>
      <div className="about-text">
        <h2>Celebrating 20 Years of Cafe Coffee Day</h2>
        <p>
          As we raise our cups to mark two decades of Cafe Coffee Day, we are filled with gratitude, pride, and a
          warm sense of nostalgia. It has been an incredible journey, one that began with a simple idea: to create
          a space where people could connect over a cup of coffee. Today, we celebrate not just 20 years of
          serving coffee but 20 years of crafting experiences, fostering relationships, and being a part of
          countless stories across the nation.
        </p>
        <a href="#" target="_blank" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default About;