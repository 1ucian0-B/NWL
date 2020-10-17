import React from 'react';
import './Styles/global.css';
import logoImg from './Images/Logo.svg';
import './Styles/Pages/landing.css';


function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt=" Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Vesite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Guarda</span>
        </div>

        <a href="" className="enter-app">

          >
        </a>
      </div>
    </div>
  );
}

export default App;
