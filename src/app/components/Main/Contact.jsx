import React from 'react';
import { Button, Input } from '../Form/index';
import contact from '../../../img/svg/svg-contact.svg';
import { FaUser, FaEnvelope, FaPhone, FaArrowRight, FaAt } from 'react-icons/fa';
export default function Contact(props) {


    return (

        <section className='c-contact'>
            <form className='c-contact__form' id='contact'>
                <Input title='Nome: ' className='c-contact__input' icon={ <FaUser /> } type='text' inputMode='text' />
                <Input title='E-mail: ' className='c-contact__input' icon={ <FaAt /> } type='email' inputMode='email' />
                <Input title='Telefone: ' className='c-contact__input' type='numeric' inputMode='tel' mask={ [ '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ] } icon={ <FaPhone /> } />
                <Input title='Mensagem: ' className='c-contact__input' multiline rows={ 5 } icon={ <FaEnvelope /> } type='text' inputMode='text' />
                <Button icon={ <FaArrowRight /> }>Enviar</Button>
            </form>
            <div className="c-contact__right">
                <h2 className="c-contact__headline">Entre em contato!</h2>
                <p className="c-contact__text">Alguma duvida ou interesse em nossos servicos? Mande uma mensagem para gente!</p>
                <img src={ contact } alt="Entre em contato, contato, interesse, servico, pessoas, email, numero, telefone, nome, sobrenome, contato" className='c-contact__image' />
            </div>
        </section>

    );
}