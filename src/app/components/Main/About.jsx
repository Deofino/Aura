import React from 'react';
import about from '../../../img/svg/svg-about.png';
export default function About() {

    return (
        <React.Fragment>

            <section className='c-about' id='about'>
                <div className="c-about__left">
                    <h2 className='c-about__title'>Sobre nós</h2>
                    <p className='c-about__body'>
                        A corporação Aura atua no ramo da tecnologia especificada e profissionalizada na criação de softwares para empresas de pequeno e médio porte, que surgiu por intermédio de pretensões em comum, sobre realizar projetos que cooperem com as necessidades da sociedade e que possam ser supridas com base na tecnologia. Temos o intuito de proporcionar para os nossos clientes um futuro promissor através de sistemas que supram sua total expectativa, fazendo com que, a busca da evolução e se manter à frente do mercado tecnológico sejam sempre constantes.
                    </p>
                </div>
                <div className="c-about__right">
                    <div className="c-about__image">
                        <img src={ about } alt="Grupo, sobre, quem somos" />
                    </div>
                </div>

            </section>

        </React.Fragment>
    );
}