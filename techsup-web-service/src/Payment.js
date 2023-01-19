import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    // eslint-disable-next-line no-unused-vars
    const [{basket,user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Sepetiniz : {basket?.length} ürün
                </h1>
                {/*Payment Section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3> Kargo Adresi</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user}</p>
                        <p>Erzene Mah. 45. Sok No.27</p>
                        <p>Bornova / Izmir</p>
                    </div>
                </div>
                {/*Payment Section - review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Ürün değerlendirmesi ve Kargo takibi</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct   
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment Section - payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                            {/* Stripe magic will go */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment