import './register.css';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isPasswordTooShort = password.length > 0 && password.length < 8;
  const isPasswordMatch = password === confirmPassword;
  const isNameValid = /^[A-Za-z]+$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isRegisterButtonDisabled =
    !name ||
    !email ||
    !isEmailValid ||
    !password ||
    !confirmPassword ||
    isPasswordTooShort ||
    !isPasswordMatch;

  return (
    <div>
      <div className="container">
        <div className="register">
          <a href="/">
              <div class="svg-container">
                <svg width="82" height="72" viewBox="-10 -10 82 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="path1" d="M47.5679 34.2657L47.5679 17.6978L61.5 25.9817L61.5 42.5496L47.5679 34.2657Z" fill="white"/>
                  <path class="path2" d="M46.0618 35.0185L46.0618 17.6975L14.8087 35.7716L14.8087 2.00803e-06L0.500054 7.90741L0.500055 43.3025L15.5618 51.9629L31 42.9259L46.4383 51.9629L60.747 43.679L46.0618 35.0185Z" fill="white"/>
                  <path class="path3" d="M30.6234 25.2284L30.6234 7.90741L16.3148 6.2545e-07L16.3148 33.5123L30.6234 25.2284Z" fill="white"/>
                </svg>
              </div>
            </a>
          <p className="register-text-titulo">Registrarse</p>
          <p className="register-text-subtitulo">
            Creá tu cuenta ahora y formá parte de nuestra comunidad de clientes leales para obtener beneficios exclusivos.
          </p>
          <div className="register-boton-google">
            <img className="register-boton-google-img" src="/img/googlelogo.svg" alt="" />
            <p className="register-boton-google-text">Continuar con Google</p>
          </div>
          <div className="register-line"></div>
          <p className="register-text">Nombre</p>
          <input type="text" className="register-input" placeholder="Loylo" value={name} onChange={handleNameChange} />
          {!isNameValid && name && <div className="name-invalid">Por favor, ingresa un nombre válido.</div>}
          <p className="register-text">Email</p>
          <input type="text" className="register-input" placeholder="hola@loybox.com.ar" value={email} onChange={handleEmailChange} />
          {!isEmailValid && email && <div className="email-invalid">Por favor, ingresa un email válido.</div>}
          <p className="register-text">Contraseña</p>
          <input
            type="password"
            className="register-input"
            placeholder="••••••••••"
            value={password}
            onChange={handlePasswordChange}
          />
          {isPasswordTooShort && (
            <div className="password-warning">La contraseña debe tener al menos 8 caracteres.</div>
          )}
          <p className="register-text">Confirmar contraseña</p>
          <input
            type="password"
            className="register-input"
            placeholder="••••••••••"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!isPasswordMatch && confirmPassword && <div className="password-mismatch">Las contraseñas no coinciden.</div>}
          <a href="/onboarding" className={`register-boton-register ${isRegisterButtonDisabled ? 'disabled' : ''}`}>
            Registrarse
          </a>
          <p className="register-inicia-sesion-text">
            ¿Ya tenés una cuenta?
            <a href="/login"> Inicia sesión</a>
          </p>
        </div>
        <div className="imagenregister">
          <img className="imgloginuser" src="/img/imgregisteruser.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
