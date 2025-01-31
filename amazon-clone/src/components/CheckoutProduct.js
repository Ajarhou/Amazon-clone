import React from 'react';
import './CheckoutProduct.css';
import stars from '../Icones/star.png'

const CheckoutProduct = ({id,image,title,price,rating}) => {
  return (
    <div className='checkoutProduct'>
        <img src={image} className='checkoutProduct-image'/>
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
            {
                Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>
                        <img src={stars}/>
                    </p>
                ))
            }

        </div>
        <button>Remove from Basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct