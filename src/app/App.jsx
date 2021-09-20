import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Routes from './routes/Routes'; // Controla as telas e chama os layouts
import logox from '../img/project/logo5x.png';
import logo from '../img/project/logo5.png';
import wave from '../img/project/wave.png';

import { BrowserRouter as Router } from 'react-router-dom';
function App () {

  React.useEffect(() => {
    let intro = document.querySelector('.c-splash');
    let logoSpan = document.querySelectorAll('.logo');

    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {

        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);

  }, []);



  return (
    <>
      <Router basename="/">
        <div className="c-splash">
          <h1 className="logo-header">
            <img src={ logo } className="logo" alt='LogoA' />
            <img src={ logox } className="logo" alt='LogoX' />
          </h1>
          <img src={ wave } className="wave" alt='Wave' />
        </div>
        <Header />
        {/* <Switch> */ }
        <Routes />
        {/* </Switch> */ }
        <Footer />
      </Router>
    </>
  );
}

export default App;
