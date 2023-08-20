import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isPasswordValid = password.length >= 8;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isLoginButtonDisabled = !isEmailValid || !isPasswordValid;

  return (
    <div>
      <div className="container">
        <div className="login">
          <a href="/">
            <div class="svg-container">
              <svg width="82" height="72" viewBox="-10 -10 82 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="path1" d="M47.5679 34.2657L47.5679 17.6978L61.5 25.9817L61.5 42.5496L47.5679 34.2657Z" fill="white"/>
                <path class="path2" d="M46.0618 35.0185L46.0618 17.6975L14.8087 35.7716L14.8087 2.00803e-06L0.500054 7.90741L0.500055 43.3025L15.5618 51.9629L31 42.9259L46.4383 51.9629L60.747 43.679L46.0618 35.0185Z" fill="white"/>
                <path class="path3" d="M30.6234 25.2284L30.6234 7.90741L16.3148 6.2545e-07L16.3148 33.5123L30.6234 25.2284Z" fill="white"/>
              </svg>
            </div>
          </a>
          <p className="login-text-titulo">Iniciar Sesión</p>
          <p className="login-text-subtitulo">
            Ingresá a tu cuenta de Loybox y suma puntos para obtener grandes beneficios en tus comercios favoritos.
          </p>
          <div className="login-boton-google">
            <img
              className="login-boton-google-img"
              src="/img/googlelogo.svg"
              alt=""
            />
            <p className="login-boton-google-text">Continuar con Google</p>
          </div>
          <div className="login-line"></div>
          <p className={`login-text ${email && isEmailValid ? 'valid' : ''}`}>Email</p>
          <input
            type="text"
            className="login-input"
            placeholder="hola@loybox.com.ar"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => email && isEmailValid ? setEmail(email) : null}
          />
          {!isEmailValid && email && <div className="email-invalid">Por favor, ingresa un email válido.</div>}
          <p className={`login-text ${password && isPasswordValid ? 'valid' : ''}`}>Contraseña</p>
          <input
            type="password"
            className="login-input"
            placeholder="••••••••••"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => password && isPasswordValid ? setPassword(password) : null}
          />
          {!isPasswordValid && password && <div className="password-warning">La contraseña debe tener al menos 8 caracteres.</div>}
          <a href='/changepassword' className='login-text-extra'>¿Olvidaste tu contraseña?</a>
          <div className={`login-boton-login ${isLoginButtonDisabled ? 'disabled' : ''}`}>
            Iniciar sesión
          </div>
          <p className="login-inicia-sesion-text">¿Todavía no tenés cuenta? <a href="/register">Registrate</a>
          </p>
        </div>
        <div className="imagenlogin">
          <img className="imgloginuser" src="/img/imgloginuser.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
