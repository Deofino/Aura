import React from "react";
import Glide from '@glidejs/glide';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
export default function Slider(props) {

    React.useEffect(() => {
        new Glide(".glide", {
            type: props.type || 'slider',
            focusAt: 'center',
            startAt: 1,
            perView: props.perView || 4,
            autoplay: props.delay || 4000,
            gap: 10,
            breakpoints: {
                800: {
                    perView: 2
                },
                400: {
                    perView: 1
                }
            }
        }).mount();
    }, []);

    return (
        <div className="glide">
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <FaArrowLeft />
                </button>
            </div>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    { props.images.map((el, i) => (
                        <li className='glide__slide'>
                            <img src={ el.path } alt={ el.alt } className="glide__image" key={ i } />
                            { el.title && <h3 className='glide__title'>{ el.title } </h3> }
                            { el.description && <small className='glide__description'>{ el.description } </small> }
                        </li>
                    )) }
                </ul>
            </div>


            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <FaArrowRight />
                </button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                { props.images.map((el, i) => (
                    <button className="glide__bullet" data-glide-dir={ "=" + i }></button>
                )) }
            </div>
        </div>
    );
}