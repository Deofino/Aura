import React from "react";
import project from '../../../img/svg/svg-projects.svg';
import Slider from "./Slider";

import shoes from '../../../img/project/projects/shoes.png';
import pokedex from '../../../img/project/projects/pokedex.png';
import renascent from '../../../img/project/projects/renascent.png';
import terms from '../../../img/project/projects/Sterms.png';
import adega from '../../../img/project/projects/adega.png';


export default function Projects(props) {
    const ourProjects = [
        {
            path: shoes,
            alt: "Shoes, tenis",
            title: "Projeto Tenis com PHP, Mysql e Ajax",
        },
        {
            path: renascent,
            alt: "Renascent",
            title: "Projeto renascentista, Crud completo",
        },
        {
            path: terms,
            alt: "Sterms, ingles e programacao",
            title: "Projeto Integrando ingles e programação com React-Native",
        },
        {
            path: adega,
            alt: "Adega, Gella Guela, cerveja",
            title: "Projeto Firebase Adega",
        },
    ];

    return (
        <React.Fragment>
            <section className="c-projects" id='projects'>
                <div className='c-projects__image'>
                    <img src={ project } alt="Nossos projetos, projetos, feitos, realizado" />
                </div>
                <div className="c-projects__body">
                    <h2 className='c-projects__headline'>Nossos Projetos</h2>
                    <p className='c-projects__text'>Nossos projetos são baseados no uso de tecnologias como HTML, JS, PHP, SQL e React Native, assim, extraindo o maximo e o melhor de cada tecnologia, a fim de promover uma melhor experiencia ao usuario, trazendo interatividade, facil usabilidade e rapido aprendizado.</p>
                </div>
            </section>

            <Slider images={ ourProjects } className='c-projects__slider' perView={ 2 } bullets />
        </React.Fragment>
    );
}