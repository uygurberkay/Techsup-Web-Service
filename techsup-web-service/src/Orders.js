import React, {useEffect, useState} from 'react';
import './Orders.css';
import {db} from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    // eslint-disable-next-line no-unused-vars
    const [{basket, user} ,dispatch] = useStateValue();

    // eslint-disable-next-line no-unused-vars
    const [orders, setOrders] = useState([]); 

    useEffect(() =>{
        if(user){
            db
            .collection('users')
            .doc(user.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(doc => ({
                    id : doc.id,
                    data : doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
        
    }, [user]);

    return (  
        <div className='orders'>
            <h1>Siparişlerin</h1>
            <div className='orders__order'>
                {orders?.map(order =>(
                    <Order order={order}/>
                ))}
            </div>
        </div>
  )
}

export default Orders