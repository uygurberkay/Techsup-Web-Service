/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product ({id,title,image,price,rating}){

    const [{basket}, dispatch] = useStateValue();

    console.log('this is basket >>>> ', basket)

    const addToBasket = () =>{
        // Dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id : id,
                title : title , 
                image : image , 
                price : price ,
                rating : rating
            },
        });
    };
    return (
    <div className="product" >
        <div className="product__info" >
            <p> {title} </p>
            <p className= "product__price"> Ürün Fiyatı : 
                <strong>{price}</strong>
                <small>₺</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i) => {
                    return <p>⭐</p>
                })}
            </div>
        </div>
        
        <img src= {image} alt=""/>
        <button className="button" onClick={addToBasket}> Sepete Ekle</button>
    </div>
    )
}

export default Product;