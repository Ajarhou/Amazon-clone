import React from 'react';
import './Product.css';
import star from '../Icones/star.png';

const Product = ({id,image,price,title,rating}) => {
  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

        </div>
        <div className='product-rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={star} />
            </p>
          ))}

        </div>
        <img src={image} alt="product-img" className=''/>
        <button>Add to Basket</button>

    </div>
  )
}

export default Product