import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault(); // Block web-site reflesh

        // Firebase login algorithms
    }
    const register = e  =>{
        e.preventDefault();

        //Firebase login functions
    }

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
                    <input type='text' value={email} onChange={e => setEmail(e.value.target)}/>
                    <h5>
                        Şifre
                    </h5>
                    <input type='password' value={password} onChange={e => setPassword(e.value.target)}/>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Giriş Yap</button>
                </form>
                <p>
                    Giriş yaparak KKVA'nın maddelerini kabul etmiş sayılırsıınız. Reklamlara izin verirsiniz.
                </p>
                <button onClick={register}className='login__registerButton'>
                    Techsup hesabını oluştur.
                </button>
            </div>
        </div>
    )
}

export default Login