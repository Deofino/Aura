import React from 'react';
import Slider from './Slider';
import camylly from '../../../img/project/members/Camylly.png';
import gaby from '../../../img/project/members/Gabriely.png';
import delfino from '../../../img/project/members/Guilherme.png';
import kaue from '../../../img/project/members/Kaue.png';
import paulo from '../../../img/project/members/Paulo.png';
import vitoria from '../../../img/project/members/Vitoria.png';
import ruy from '../../../img/project/members/Ruy.png';
import members from '../../../img/svg/svg-members.svg';
export default function Members() {

    const images = [

        {
            path: camylly, // Caminho da foto
            alt: "Foto integrande Camylly Lima",
            title: "Camylly Lima",
            description: "UI designer e DBA",
        },
        {
            path: gaby, // Caminho da foto
            alt: "Foto integrande Gabriely Brito",
            title: "Gabriely Brito",
            description: "UI Designer e DBA",
        },
        {
            path: delfino, // Caminho da foto
            alt: "Foto integrande Guilherme Delfino",
            title: "Guilherme Delfino",
            description: "Fullstack e Team Manager",
        },
        {
            path: kaue, // Caminho da foto
            alt: "Foto integrande Kaue Oliveira",
            title: "Kauê Loviz",
            description: "Fullstack",
        },
        {
            path: paulo, // Caminho da foto
            alt: "Foto integrande Paulo Moreira",
            title: "Paulo Moreira",
            description: "Fullstack e Graphic Designer",
        },
        {
            path: ruy, // Caminho da foto
            alt: "Foto Ruy Barbosa",
            title: "Ruy Barbosa",
            description: "UI/UX Designer",
        },
        {
            path: vitoria, // Caminho da foto
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
                        <img src={ members } alt="team, members, people" />
                    </div>
                    <Slider images={ images } className='c-members__slider' type='slider' perView={ 3 } bullets arrows />
                </div>
            </section>

        </React.Fragment>
    );
}