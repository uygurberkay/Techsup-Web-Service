import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className="checkout__ad" src={require('./img/Checkout_Image1.jpg')} alt='' />
        </div>
        <div>
            <h1 className='checkout__title'>
                Your Shopping Basket
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
            </h1>
        </div>
        <div className='checkour_right'>
            <h2>
                The subtotal will go there
            </h2>
        </div>
    </div>
  )
}

export default Checkout