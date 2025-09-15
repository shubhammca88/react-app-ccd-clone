import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Menu from './components/Menu';
import CCD from './components/CCD';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Shop />
      <Menu />
      <CCD />
      <About />

      {/* Menu */}
      <section className="menu" id="menu">
        <div className="heading">
          <span>Get Now</span>
          <h1>Order with CCD</h1>
        </div>
        <div className="container">
          <div className="delivery-img">
            <img src="img/menu.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* CCD */}
      <section className="ccd" id="ccd">
        <div className="heading">
          <span>Enjoy Coffe</span>
          <h1>with Ccd</h1>
        </div>
        <div className="container">
          <div className="delivery-img">
            <img src="img/1.png" alt="" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-img">
          <img src="img/cel.png" alt="" />
        </div>
        <div className="about-text">
          <h2>Celebrating 20 Years of Cafe Coffee Day</h2>
          <p>
            As we raise our cups to mark two decades of Cafe Coffee Day, we are filled with gratitude, pride, and a
            warm sense of nostalgia. It has been an incredible journey, one that began with a simple idea: to create
            a space where people could connect over a cup of coffee. Today, we celebrate not just 20 years of
            serving coffee but 20 years of crafting experiences, fostering relationships, and being a part of
            countless stories across the nation.From our very first café in 2004 to over 1,500 outlets today, our
            journey has been fueled by a passion for coffee and a commitment to quality. We have traveled across the
            lush coffee estates of Chikmagalur to bring the finest beans to your cup, ensuring that every sip is a
            testament to the rich heritage of Indian coffee. Our baristas have perfected the art of brewing, each
            cup a masterpiece that reflects their dedication and love for the craft.Over the past 20 years, Cafe
            Coffee Day has evolved into more than just a coffee shop. We have become a place where friendships are
            forged, ideas are born, and memories are made. Whether it's a quiet corner for contemplation, a vibrant
            space for laughter, or a cozy nook for a first date, we have had the privilege of being a part of your
            lives in the most meaningful ways.
          </p>
          <a href="#" target="_blank" className="btn">Learn More</a>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;
