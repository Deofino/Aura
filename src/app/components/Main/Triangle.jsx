import React from "react";
import triangle from '../../../img/svg/svg-triangle.svg';
export default function Triangle(props) {


    return (
        <React.Fragment>
            { props.left ?
                <img src={ triangle } alt="Triangle" className='c-triangle c-triangle--left' style={ { top: props.mt || 0 } } />
                : <img src={ triangle } alt="Triangle" className='c-triangle c-triangle--right' style={ { top: props.mt || 0 } } /> }
        </React.Fragment>
    );
}