import React from 'react';

function ShopCard({ product }) {
  return (
    <div className="shop-card">
      <h3>{product.name}</h3>
      <p>{product.color}</p>
      <img src={product.img} alt={product.name} />
      <div className='cardInfo'>
        <p className='price'>${product.price}</p>
        <button className='add-to-cart'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
