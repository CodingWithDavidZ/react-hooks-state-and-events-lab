import React, { useState } from 'react';

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState('');

  function cartClickHandler() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button
        className={isInCart ? 'remove' : 'add'}
        onClick={cartClickHandler}
      >
        {isInCart ? 'Remove' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
