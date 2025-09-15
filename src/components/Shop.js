import React from 'react';
import { PRODUCTS } from '../utils/constants';

function Shop() {

  return (
    <section className="shop" id="shop">
      <div className="heading">
        <span>Shop now</span>
        <h1>Shop Coffee</h1>
      </div>
      <div className="shop-container">
        {PRODUCTS.map((product, index) => (
          <div className="box" key={index}>
            <div className="box-img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="stars">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <a href="#" className="btn">Order Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;