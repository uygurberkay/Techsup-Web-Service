import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
// import { getBasketTotal } from './reducer';



function Subtotal() {
const [{basket}, /*dispatch*/] = useStateValue();

console.log(basket)
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText = {(value)=> (
                <>
                    <p>
                        {/* Will done after homework */}
                        Toplam fiyat ({basket.length} ürün): <strong>0 ₺</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type={'checkbox'}/> Hediye olarak satın al.
                    </small>
                </>
            )}
            decimalScale= {2}
            value = {0}  
            displayType = {'text'}
            thousandSeperator = {true}
            prefix={'₺'}
        />
        <button> Satın al</button>
    </div>
  )
}

export default Subtotal