import React from 'react';
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";


/**
 * @function {Button} Componente Button ,
 * @props {onClick} funcao callback realizada no click
 * @props {type? = button} submit, reset, button.
 * @props {styleButton} Estilo do botao
 * @props {styleText} Estilo do texto
 * @props {isLoading? = false} Mostra botao em carregamento
 */
export default function Button(props) {


    return (
        <button
            onClick={props.onClick || null}
            className='c-button'
            type={props.type}
            style={props.styleButton || null}
        >
            {props.isLoading === true ? <Dots /> : <span style={props.styleText || null}>{props.icon || null}{props.children}</span>}
        </button>
    )
}