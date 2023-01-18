import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";



function Login() {
    // Change the url after log-in or sign-in
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault(); // Block web-site reflesh
        // Firebase login algorithms
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/')
        }).catch((e)=>{
            alert(e.message)
        });
    }
    const register = (e)  =>{
        e.preventDefault();
        //Firebase login functions
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            // It succesfully create the user
            console.log(auth)
            if(auth){
                history.push('/')
            }
        }).catch((e)=>{
            alert(e.message)
        });
    }
    // DOESNT LINK MAİN MENU AFTER REGİSTER THERE WHERE I HOLD 4:01:00
    
    return (
        <div className='login'>
            <Link to='/' onClick={() => window.location.replace('/')}>
                <img className="login__logo" src={require('./img/TECHSUP_icon_transparent.png')} alt='' />
            </Link>
            <div className='login__container'>
                <h1>
                    Giriş Yap
                </h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>
                        Şifre
                    </h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Giriş Yap</button>
                </form>
                <p>
                    Giriş yaparak KKVA'nın maddelerini kabul etmiş sayılırsıınız. Reklamlara izin verirsiniz.
                </p>
                <button onClick={register} className='login__registerButton'>
                    TechSup hesabını oluştur
                </button>
                
                
            </div>
        </div>
        
    )
}

export default Login