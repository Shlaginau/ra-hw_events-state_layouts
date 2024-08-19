import React from 'react';

function ShopItem({ product }) {
  return (
    <div className="list-item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="color">{product.color}</p>
      <span className="price">${product.price}</span>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ShopItem;
