import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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
                    <input type='text' value={email}/>
                    <h5>
                        Şifre
                    </h5>
                    <input type='password' value={password}/>
                    <button className='login__signInButton' >Giriş Yap</button>
                </form>
                <p>
                    Giriş yaparak KKVA'nın maddelerini kabul etmiş sayılırsıınız. Reklamlara izin verirsiniz.
                </p>
                <button className='login__registerButton'>
                    echsup hesabını oluştur.
                </button>
            </div>
        </div>
    )
}

export default Login