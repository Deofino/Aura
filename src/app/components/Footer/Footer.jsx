import React from 'react';
import logo from '../../../img/project/logo192.png';
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp, FaEnvelopeSquare } from 'react-icons/fa';
import { Input, Button } from '../Form';
import wave from '../../../img/svg/svg-footer.png';
export default function Footer() {
    return (
        <footer className="l-footer mt">
            <section className='l-footer__social'>
                <div className="l-footer__logo">
                    <img src={ logo } alt="Aura, Logotipo" />
                </div>
                <ul className='l-footer__socialList'>
                    <li className='l-footer__listItem'><a href="/"><FaFacebook /></a> </li>
                    <li className='l-footer__listItem'><a href="/"><FaInstagram /></a> </li>
                    <li className='l-footer__listItem'><a href="/"><FaEnvelopeSquare /></a> </li>
                    <li className='l-footer__listItem'><a href="/"><FaWhatsapp /></a></li>
                </ul>
            </section>
            <section className='l-footer__menu'>
                <h3 className="l-footer__headline">Para onde quer ir?</h3>
                <nav className="l-footer__nav">
                    <ul className="l-footer__nav__menu">
                        <li className="l-footer__nav__item" onClick={ () => { window.scrollTo({ top: 0 }); } }><a href="#home">Inicio</a></li>
                        <li className="l-footer__nav__item"><a href="#about">Sobre</a></li>
                        <li className="l-footer__nav__item"><a href="#projects">Projetos</a></li>
                        <li className="l-footer__nav__item"><a href="#partner">Parcerias</a></li>
                        <li className="l-footer__nav__item"><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </section>
            <section className='l-footer__newsletter'>
                <div className="l-footer__row">
                    <FaEnvelope />
                    <p className='l-footer__text'>Fique atualizado de nossas novidades
                        assine nossa newsletter!</p>
                </div>
                <Input title='Seu e-mail:' type='email' icon='@' inputMode='email' className='l-footer__input' id='l-footer__input' />
                <Button>Inscreva-se</Button>
            </section>
            <img src={ wave } className='l-footer__wave' alt="Onda, Wave" />
        </footer>
    );
}