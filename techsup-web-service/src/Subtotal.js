import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {useHistory} from 'react-router-dom';
// import { getBasketTotal } from './reducer';



function Subtotal() {
const history = useHistory();
// eslint-disable-next-line no-unused-vars
const [{basket}, dispatch] = useStateValue();


  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText = {(value)=> (
                <>
                    <p>
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
        <button onClick={e => history.push('/payment')}> Satın al</button>
    </div>
  )
}

export default Subtotal