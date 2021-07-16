import React from 'react'
import Form from '../Form/Form';
export default class Main extends React.Component {

    render() {
        return (
            <main className='l-main shadow radius'>
                <Form />
                <div className='l-main__image'>
                    <img src={__dirname + 'img/svg-login.svg'} alt='Imagem bonita' />
                </div>
            </main>
        )
    }
}