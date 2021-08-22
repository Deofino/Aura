import React from "react";

export default function Triangle(props) {


    return (
        <React.Fragment>
            { props.left ?
                <img src={ __dirname + 'img/svg/svg-triangle.svg' } alt="Triangle" className='c-triangle c-triangle--left' style={ { top: props.mt || 0 } } />
                : <img src={ __dirname + 'img/svg/svg-triangle.svg' } alt="Triangle" className='c-triangle c-triangle--right' style={ { top: props.mt || 0 } } /> }
        </React.Fragment>
    );
}