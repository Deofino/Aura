import React from 'react';
import partner from '../../../img/svg/svg-partner.svg';
export default function Partner(props) {


    return (
        <React.Fragment>
            <section className="c-partner" id='partner'>
                <h2 className="c-partner__headline">Nossos parceiros</h2>
                <div className="c-partner__body">
                    <div className="c-partner__about">
                        <h3 className="c-partner__about__headline">Conheça nossos amigos!</h3>
                        <p className="c-partner__about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam saepe iste placeat recusandae vero animi quidem quia fuga ipsa consequatur, officiis tenetur voluptate quibusdam fugiat libero maiores provident repudiandae eaque doloremque molestiae harum accusamus odio non assumenda. In, voluptatem optio.</p>
                        <img src={ partner } className='c-partner__about__image' alt="Partner, Amigos, Parceiros" />
                    </div>
                    <section className="c-partner__right">
                        <a className="c-partner__card" href='#'>
                            <div className="c-partner__card__background"></div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Evoke</span>
                                <small className='c-partner__card__small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, explicabo?</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='#'>
                            <div className="c-partner__card__background"></div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Saturn</span>
                                <small className='c-partner__card__small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, explicabo?</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='#'>
                            <div className="c-partner__card__background"></div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Bifrost</span>
                                <small className='c-partner__card__small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, explicabo?</small>
                            </div>
                        </a>
                        <a className="c-partner__card" href='#'>
                            <div className="c-partner__card__background"></div>
                            <div className="c-partner__card__body">
                                <span className="c-partner__card__span" >Do Kayan</span>
                                <small className='c-partner__card__small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, explicabo?</small>
                            </div>
                        </a>
                    </section>
                </div>
            </section>

        </React.Fragment>
    );
}