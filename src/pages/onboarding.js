import React from 'react';
import './onboarding.css';


const Onboarding = () => {
  return (
    <div className="onboarding">    
      <div class="svg-container">
        <svg width="82" height="72" viewBox="-10 -10 82 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="path1" d="M47.5679 34.2657L47.5679 17.6978L61.5 25.9817L61.5 42.5496L47.5679 34.2657Z" fill="white"/>
          <path class="path2" d="M46.0618 35.0185L46.0618 17.6975L14.8087 35.7716L14.8087 2.00803e-06L0.500054 7.90741L0.500055 43.3025L15.5618 51.9629L31 42.9259L46.4383 51.9629L60.747 43.679L46.0618 35.0185Z" fill="white"/>
          <path class="path3" d="M30.6234 25.2284L30.6234 7.90741L16.3148 6.2545e-07L16.3148 33.5123L30.6234 25.2284Z" fill="white"/>
        </svg>
      </div>
      <p className='onboarding-title'>Gracias por unirte a Loybox</p>
      <div className='onboarding-photos-and-texts'>
        <div className='onboarding-part-1'>
          <img className='onboarding-img-1' src="/img/img1onboarding.png" alt=""/>
          <p className='onboarding-text-1'>Cuando realices un consumo en tu local 
            favorito, mostrale tu código de usuario al empleado al que le vayas a 
            pagar y él se encargará de asociarte al Loybox del local y que obtengas 
            tus  Loys en el mismo.
          </p>
        </div>
        <div className='onboarding-part-2'>
          <img className='onboarding-img-2' src="/img/img2onboarding.png" alt=""/>
          <p className='onboarding-text-2'>Te aparecerá en tu cuenta el local, con 
            los loys correspondientes que hayas acumulado y el nivel con su progreso,
            tocando en cada uno de ellos podrás ver los beneficios que estos tienen 
            para vos.
          </p>
        </div>
      </div>
      <a className='onboarding-button'>
        <p className='onboarding-button-text'>
          Empecemos
        </p>
      </a>
    </div>
  );
};

export default Onboarding;
