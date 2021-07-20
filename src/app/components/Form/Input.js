import React from 'react';
import { FaTimes } from 'react-icons/fa'
import InputMask from 'react-input-mask'

/**
 * @class Input -  Componente Input ,
 * @props {id=[required]} Id do input (pro for do href funcionar)
 * @props {onChange?} funcao callback ao mudanca de texto
 * @props {type? = text} text, email, password, tel, file...
 * @props {max?} Maximo caracter receber
 * @props {min?} Minimo caracter receber
 * @props {required?} Se o input eh requirido
 * @props {defaultValue?} Valor padrao
 * @props {placeholder?} Dica/Hint/Ajuda no input
 * @props {title?} Titulo do input acima dele
 * @props {error?} Input com modo de erro
 * @props {errorText?} Mostra o texto de erro
 * @props {inputMode?=text} modo de entrada no input (text,decimal, url, search, email, numeric,tel)
 * @props {icon?} Define icone do input
 * @props {delete?} Icone de limpar a direita
 * @props {onDeleteClick?} Define acao do click do botao de deletar
 * @props {style?} Define estilo do input
 * @props {styleIcon?} Define estilo do icone
 * 
 */
export default class Input extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <>
                {this.props.title && <label htmlFor={this.props.id || null} className="c-input__title">{this.props.title}</label>}
                < div className={this.props.error ? 'c-input c-input--error' : 'c-input'} >
                    {this.props.icon ? <div className='c-input__icon' style={this.props.styleIcon || null}>{this.props.icon}</div> : null}
                    <InputMask
                        mask={this.props.mask || null}
                        maskChar='#'
                        type={this.props.type || 'text'}
                        className='c-input__item'
                        style={this.props.style || null}
                        defaultValue={this.props.defaultValue || null}
                        placeholder={this.props.placeholder || null}
                        required={this.props.required ? true : false}
                        id={this.props.id}
                        maxLength={this.props.max || null}
                        name={this.props.id || null}
                        minLength={this.props.min || null}
                        inputMode={this.props.inputMode || null}
                        onChange={(e) => this.props.onChange || console.log('onChange ' + this.props.id)}
                    />
                    {this.props.delete ? <span className='c-input__delete'> <FaTimes fillOpacity={0.6} onClick={this.props.onDeleteClick || null} /> </span> : null}
                </div>
                {this.props.errorText ? <small className='c-input__errorText'>{this.props.errorText}</small> : null}
            </>
        )
    }
}
