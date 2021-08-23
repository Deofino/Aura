import React from "react";
import project from '../../../img/svg/svg-projects.svg';
import Slider from "./Slider";

export default function Projects(props) {
    const ourProjects = [
        {
            alt: "Projeto MVC",
            title: "Projeto MVC",
        },
        {
            alt: "Projeto React-Native",
            title: "Projeto React-Native",
        },
        {
            alt: "Projeto PHP",
            title: "Projeto PHP",
        },
        {
            alt: "Projeto Loja virtual",
            title: "Projeto Loja virtual",
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

            <Slider images={ ourProjects } className='c-projects__slider' perView={ 3 } bullets styleSlide={ { backgroundColor: '#5a89ff', textAlign: 'start', paddingLeft: 20, paddingTop: 60, paddingBottom: 60 } } />
        </React.Fragment>
    );
}