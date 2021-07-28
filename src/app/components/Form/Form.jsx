import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { AlertSuccess, AlertError, AlertWarning } from '../Alert/Modal'
import { FaUserPlus, FaUser, FaAt, FaPhone, FaLock } from 'react-icons/fa'
export default function Form(props) {

    const [isLoading, setLoading] = useState(false);

    return (
        <form action='/' className='c-form ' method='GET'>
            <h1 className='c-form__headline'>Formulario</h1>
            <p className='c-form__text'>Preencha todos os campos corretamente.</p>
            <div className="c-form__item">
                <Input
                    id='name'
                    title='Nome: '
                    delete
                    required
                    icon={<FaUser fill='white' />} />
            </div>
            <div className="c-form__item">
                <Input
                    id='email'
                    required
                    delete
                    icon={<FaAt fill='white' />}
                    title='E-mail: ' />
            </div>
            <div className="c-form__item">
                <Input
                    required
                    id='tel'
                    delete
                    icon={<FaPhone fill='white' />}
                    title='Numero de celular: '
                    mask='(99) 99999-9999'
                    type='tel'
                />
            </div>
            <div className="c-form__item">
                <Input
                    required
                    id='password'
                    delete
                    title='Senha: '
                    icon={<FaLock fill='white' />}
                    max='16'
                    min='8'
                    type='password'
                />
            </div>
            <div className="c-form__item ">
                <Button
                    type='submit'
                    isLoading={isLoading}
                    icon={<FaUserPlus fill='#FFFFFF' />}
                    onClick={() => AlertWarning({})}
                >Cadastrar</Button>
            </div>
        </form>
    )
}