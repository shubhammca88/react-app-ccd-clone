import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>Welcome to</span>
        <h1>Cafe Coffee Day</h1>
        <h2>coffee pene chle <br />CCD Coffee</h2>
        <button className="btn">
          <a href="" target="_blank">Join Now</a>
        </button>
      </div>
      <div className="home-img">
        <img src="img/home.png" alt="Coffee Cup" />
      </div>
    </section>
  );
}

export default Home;