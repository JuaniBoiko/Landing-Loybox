import React from 'react';
import './landing.css';

const Landing = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=TylevORrA-k&ab_channel=Loybox';
  const youtubeVideoId = new URL(youtubeUrl).searchParams.get('v');
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?controls=0&showinfo=0&rel=0&autoplay=1`;
  return (
    <div className="landing-user">
      <div className='landing-user-navbar'>
        <div className='landing-user-navbar-main'>
          <div class="svg-container">
            <svg width="82" height="72" viewBox="-10 -10 82 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="path1" d="M47.5679 34.2657L47.5679 17.6978L61.5 25.9817L61.5 42.5496L47.5679 34.2657Z" fill="white"/>
              <path class="path2" d="M46.0618 35.0185L46.0618 17.6975L14.8087 35.7716L14.8087 2.00803e-06L0.500054 7.90741L0.500055 43.3025L15.5618 51.9629L31 42.9259L46.4383 51.9629L60.747 43.679L46.0618 35.0185Z" fill="white"/>
              <path class="path3" d="M30.6234 25.2284L30.6234 7.90741L16.3148 6.2545e-07L16.3148 33.5123L30.6234 25.2284Z" fill="white"/>
            </svg>
          </div>
          <p className='loybox-text'>Loybox</p>
        </div>
        <div className='landing-user-navbar-buttons'>
          <a className='landing-user-navbar-button'>Plataforma</a>
          <a className='landing-user-navbar-button'>Beneficios</a>
          <a className='landing-user-navbar-button'>Negocios</a>
          <a className='landing-user-navbar-button'>Ayuda</a>
          <a className='landing-user-navbar-button-register'>
            <img src='/img/arrowad.svg' className='landing-user-navbar-button-registrate-img'></img>
            Registrate
          </a>
        </div>
      </div>
      <div className='landing-user-div'>
        <div className='landing-user-div-1'>
          <p className='landing-user-div-1-text-1'>
            Democratizando la fidelización de clientes
          </p>
          <p className='landing-user-div-1-text-2'>
            Sumá <strong>puntos</strong> y disfrutá de increíbles <strong>recompensas</strong>
          </p>
          <div className='landing-user-div-1-button-container'>
            <a className='landing-user-div-1-button-1'>
              <img className='landing-user-div-1-button-1-icon' src='/img/arrowadblack.svg'></img>
              Empezar ahora
            </a>
            <a className='landing-user-div-1-button-2'>
              <img className='landing-user-div-1-button-2-icon' src='/img/plus.svg'></img>
              Sumar mi negocio
            </a>
          </div>
        </div>
        <div className='landing-user-div-2'>
          <p className='landing-user-div-2-text-1'>Comprá en tus comercios favoritos y conseguí beneficios. La plataforma que
            te premia por ser un cliente fiel. Todos tus negocios en un mismo lugar.
          </p>
          <div className='landing-user-div-2-line'></div>
          <div className='landing-user-div-2-text-2'>
            <img className='landing-user-div-2-text-2-img' src="/img/marketicon.svg"></img>
            <p className='landing-user-div-2-text-2-p'>
              <span className='landing-user-div-2-text-2-p-strong'>+ 100</span> Comercios adheridos en Argentina
            </p>
          </div>
          <div className='landing-user-div-2-text-3'>
            <img className='landing-user-div-2-text-3-img' src="/img/personicon.svg"></img>
            <p className='landing-user-div-2-text-3-p'>
                <span className='landing-user-div-2-text-3-p-strong'>+ 5.000</span> Clientes en la plataforma
            </p>
          </div>
        </div>
      </div>
      <div className='video-container'>
        <iframe className='video'
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>
      
      <p className='landing-user-title-2'>
        Seguís <span className='landing-user-title2-strong'>comprando</span> en los locales de siempre, solo que ahora <span className='landing-user-title2-strong'>ganás</span> por volver.
      </p>
      <img className='loybox-logos-img' src='/img/loyboxlogos.svg'></img>
      
    </div>
  );
};

export default Landing;
