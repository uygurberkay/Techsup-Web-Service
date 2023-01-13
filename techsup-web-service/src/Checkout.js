import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className="checkout__ad" src={require('./img/Checkout_Image1.png')} alt='' />
        </div>
        <div>
            <h1 className='checkout__title'>
                Ürün Sepetiniz
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
                {/*Basket Item */}
            </h1>
        </div>
        <div className='checkout__right'>
            <h2>
                <Subtotal />
            </h2>
        </div>
    </div>
  )
}

export default Checkout