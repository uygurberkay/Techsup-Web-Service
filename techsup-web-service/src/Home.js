/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Home.css';
import Product from './Product'

function Home(){
    return(
        <div className="home" >
            <div className="home__container">
                <img className="home__image" src={require('./img/MainPage_Pt1.png')} />
                {/*<img className="home__image" src={require('./img/MainPage_Pt2.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt3.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt4.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt5.png')} /> */}
            </div>
            <div className="home__row" >
                {/* Product */}
                <Product title='ARC 770/Intel Core i5 12400F/INTEL Arc A770 16GB GDDR6/16GB DDR4/512GB M.2 NVMe SSD/INTEL ARC PC'
                price={'19.000'} image ={require('./img/Product_Img1.png')} rating={4}/>
                {/* Product */}
                <Product title={'Lenovo Tab M10 HD Tablet 2. Nesil, 10.1" HD, MediaTek Helio P22T, 2.3 GHz, 4GB RAM, 64GB, Demir Gri, ZA6W0121TR'}
                price ={'3.299'} image = {require('./img/Product_Img2.png')} rating={3}
                />
            </div>
            <div className="home__row" >
                {/* Product */}
                <Product title={'Fluke 15B+ Dijital Multimetre'}
                price = {'3.945,31'}  image = {require('./img/Product_Img3.png')}  rating={5}
                />
                {/* Product */}
                <Product title={'Alienware Mechanical RGB Oyun Klavyesi - AW410K US Int. (QWERTY)'}
                price={'3.027,'} image = {require('./img/Product_Img4.png')} rating={4}/>
                {/* Product */}
                <Product title={'Philips HD9255/60 Airfryer Fritöz, Uzaktan Bağlantı, 0.8 kg, 7 Ön Ayar'}
                price = {'4.494'} image = {require('./img/Product_Img6.png')} rating={4}  
                />
            </div>
            <div className="home__row" >
                {/* Product */}
                <Product title={'Gigabyte G32QC A oyun monitörü (32 inç, VA panel, 165 Hz, QHD çözünürlük, kavisli ekran)'}
                price ={'7.035'} image = {require('./img/Product_Img5.png')} rating= {5}/> 
            </div>
        </div>
    )
}
export default Home