import React from "react";

export default class Menu extends React.Component{

    render(){
        return(
            <ul className={'c-menu'+this.props.isDrawer}>
                <li className="c-menu__item c-menu__item--focus">
                    <a href="/" className="c-menu__link">Home</a>
                </li>
                <li className="c-menu__item">
                    <a href="/" className="c-menu__link">Products</a>
                </li>
                <li className="c-menu__item">
                    <a href="/" className="c-menu__link">About</a>
                </li>
                <li className="c-menu__item">
                    <a href="/" className="c-menu__link">Contact</a>
                </li>
            </ul>
        )
    }
}