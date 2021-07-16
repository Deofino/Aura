import React from 'react';

export default class Form extends React.Component {


    render() {

        return (
            <form action='/' className='c-form padding ' method='GET'>
                <h1 className='c-form__headline'>Formulario</h1>
                <p className='c-form__text'>Preencha todos os campos corretamente.</p>
                <div className="c-form__item">
                    <label htmlFor="name" className="c-form__label">Nome: </label>
                    <input type="text" className="c-form__input" name="name" id="name" />
                </div>
                <div className="c-form__item">
                    <label htmlFor="email" className="c-form__label">E-mail: </label>
                    <input type="email" className="c-form__input" name="email" id="email" />
                </div>
                <div className="c-form__item">
                    <label htmlFor="tel" className="c-form__label">Telefone: </label>
                    <input type="tel" className="c-form__input" name="tel" id="tel" />
                </div>
                <div className="c-form__item">
                    <label htmlFor="password" className="c-form__label">Senha: </label>
                    <input type="password" className="c-form__input" name="password" id="password" />
                </div>
                <div className="c-form__item">
                    <button type="button" className="c-form__button" id="password">Cadastrar</button>
                </div>
            </form>
        )
    }
}