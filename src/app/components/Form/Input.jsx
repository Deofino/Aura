import React from 'react';
import { FaTimes } from 'react-icons/fa'
import InputMask from 'react-input-mask'

/**
 * @function Input -  Componente Input ,
 * @props {id=[required]} Id do input (para o for do href funcionar)
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
export default function Input(props) {
    return (
        <>
            {props.title && <label htmlFor={props.id || null} className="c-input__title">{props.title}</label>}
            < div className={props.error ? 'c-input c-input--error' : 'c-input'} >
                {props.icon ? <div className='c-input__icon' style={props.styleIcon || null}>{props.icon}</div> : null}
                <InputMask
                    mask={props.mask || null}
                    type={props.type || 'text'}
                    className='c-input__item'
                    style={props.style || null}
                    defaultValue={props.defaultValue || null}
                    placeholder={props.placeholder || null}
                    required={props.required ? true : false}
                    id={props.id}
                    maxLength={props.max || null}
                    name={props.id || null}
                    minLength={props.min || null}
                    inputMode={props.inputMode || null}
                    onChange={(e) => props.onChange || console.log('onChange ' + props.id)}
                />
                {props.delete ? <span className='c-input__delete'> <FaTimes fillOpacity={0.6} onClick={props.onDeleteClick || null} /> </span> : null}
            </div>
            {props.errorText ? <small className='c-input__errorText'>{props.errorText}</small> : null}
        </>
    )
}
