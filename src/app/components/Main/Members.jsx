import React from 'react';
import Slider from './Slider';
export default function Members() {

    const images = [

        {
            path: __dirname + 'img/project/members/Camylly.png', // Caminho da foto
            alt: "Foto integrande Camylly Lima",
            title: "Camylly Lima",
            description: "UI designer e DBA",
        },
        {
            path: __dirname + 'img/project/members/Gabriely.png', // Caminho da foto
            alt: "Foto integrande Gabriely Brito",
            title: "Gabriely Brito",
            description: "UI Designer e DBA",
        },
        {
            path: __dirname + 'img/project/members/Guilherme.png', // Caminho da foto
            alt: "Foto integrande Guilherme Delfino",
            title: "Guilherme Delfino",
            description: "Fullstack e Team Manager",
        },
        {
            path: __dirname + 'img/project/members/Kaue.png', // Caminho da foto
            alt: "Foto integrande Kaue Oliveira",
            title: "Kauê Loviz",
            description: "Fullstack",
        },
        {
            path: __dirname + 'img/project/members/Paulo.png', // Caminho da foto
            alt: "Foto integrande Paulo Moreira",
            title: "Paulo Moreira",
            description: "Fullstack e Graphic Designer",
        },
        {
            path: __dirname + 'img/project/members/Ruy.png', // Caminho da foto
            alt: "Foto Ruy Barbosa",
            title: "Ruy Barbosa",
            description: "UI/UX Designer",
        },
        {
            path: __dirname + 'img/project/members/Vitoria.png', // Caminho da foto
            alt: "Foto integrande Vitoria Golcalves",
            title: "Vitoria Golçalves",
            description: "Front-end e UI/UX Designer",
        },

    ];

    return (
        <React.Fragment>

            <section className='c-members'>
                <div className="c-members__top">
                    <h2 className='c-members__headline'>Nossos integrantes</h2>
                </div>
                <div className="c-members__bottom">
                    <div className="c-members__image">
                        <img src={ __dirname + `img/svg/svg-members.svg` } alt="team, members, people" />
                    </div>
                    <Slider images={ images } className='c-members__slider' perView={ 3 } bullets arrows options={ {} } />
                </div>
            </section>

        </React.Fragment>
    );
}