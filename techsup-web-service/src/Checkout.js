import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from './StateProvider'

function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [{basket,user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className="checkout__ad" src={require('./img/Checkout_Image1.png')} alt='' />
            </div>
            <div>
                <h3>Merhaba , {user}</h3>
                <h1 className='checkout__title'>
                    {/*Basket Item */}
                    Ürün Sepetiniz
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