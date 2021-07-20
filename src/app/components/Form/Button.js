import React from 'react';
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";


/**
 * @class {Button} Componente Button ,
 * @props {onClick} funcao callback realizada no click
 * @props {type? = button} submit, reset, button.
 * @props {styleButton} Estilo do botao
 * @props {styleText} Estilo do texto
 * @props {isLoading? = false} Mostra botao em carregamento
 */
export default class Button extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <button
                onClick={this.props.onClick || null}
                className='c-button'
                type={this.props.type}
                style={this.props.styleButton || null}
            >
                {this.props.isLoading === true ? <Dots /> : <span style={this.props.styleText || null}>{this.props.icon || null}{this.props.children}</span>}
            </button>
        )
    }
}