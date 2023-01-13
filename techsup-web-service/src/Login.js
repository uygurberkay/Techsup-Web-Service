import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <Link to='/' onClick={() => window.location.replace('/')}>
            <img className="login__logo" src={require('./img/TECHSUP_icon_transparent.png')} alt='' />
        </Link>
        <div className='login__container'>
            <h1>
                Sign-in
            </h1>
            <form>
                <h5>
                    E-mail
                </h5>
                <input type='text' />
                <h5>
                    Password
                </h5>
                <input type='password' />
                <button>Sign in</button>
            </form>
            <p></p>
        </div>
    </div>
  )
}

export default Login