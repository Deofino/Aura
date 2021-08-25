import React from 'react';
import partner from '../../../img/svg/svg-partner.svg';
import evoke from '../../../img/partners/evoke.png';
import saturn from '../../../img/partners/saturn.png';
import lunar from '../../../img/partners/lunar.jpeg';
import bifrost from '../../../img/partners/bifrost.jpeg';
export default function Partner() {


    return (
        <React.Fragment>
            <section className="c-partner" id='partner'>
                <h2 className="c-partner__headline">Nossos parceiros</h2>
                <div className="c-partner__body">
                    <div className="c-partner__about">
                        <h3 className="c-partner__about__headline">Conheça nossos amigos!</h3>
                        <p className="c-partner__about__text">Nossos Amigos também são da área de desenvolvimento e você pode sugerir eles para serviços que você necessita também!
                            Com garantia de qualidade e conforto para uma solução que você precisa na sua empresa ou mesmo serviço pessoal!</p>
                        <img src={ partner } className='c-partner__about__image' alt="Partner, Amigos, Parceiros" />
                    </div>
                    <section className="c-partner__right">
                        <a className="c-partner__card" href='/'>
                            <div className="c-partner__card__background bg-white">
                                <img src={ evoke } alt="Evoke, Site, Desenvolvimento" />
                            </div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Evoke</span>
                                <small className='c-partner__card__small'>A empresa evoke é atuante no setor de informática e é especializada no desenvolvimento de softwares.</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='/'>
                            <div className="c-partner__card__background bg-white">
                                <img src={ saturn } alt="Saturn, Site, Desenvolvimento" />

                            </div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Saturno</span>
                                <small className='c-partner__card__small'>A empresa Saturno atua no setor de Desenvolvimento de sistemas, refletindo no crescimento dos clientes de todas as áreas da indústria, comércio ou serviço.</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='/'>
                            <div className="c-partner__card__background bg-dark">
                                <img src={ bifrost } className='max' alt="Bifrost, Site, Desenvolvimento" />
                            </div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Bifrost</span>
                                <small className='c-partner__card__small'>A Bifrost é uma startup de desenvolvimento de software, que busca trazer soluções para os problemas de uma forma rápida e eficaz.</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='/'>
                            <div className="c-partner__card__background bg-white">
                                <img src={ lunar } alt="Lunar, Site, Desenvolvimento" />
                            </div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Lunar</span>
                                <small className='c-partner__card__small'>Nossa empresa atuante no setor da tecnologia da informação é especializada no desenvolvimento de sistemas e aplicativos.</small>
                            </div>
                        </a>
                    </section>
                </div>
            </section>

        </React.Fragment>
    );
}