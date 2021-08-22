import React, { useContext } from "react";
import Menu from "./Menu";
import logo from '../../../img/project/logo192.png';
import { ContextHeader } from './Header';

export default function Navbar() {

    const [ isDrawer, setDrawer ] = useContext(ContextHeader);

    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                <img className="c-navbar__image" alt='Logo' src={ logo } />
            </div>

            <button
                className={ "d-none shadow btn-openDrawer" + isDrawer }
                onClick={ () => setDrawer(isDrawer === "" ? " active" : "") }
            ></button>

            <Menu />
        </nav>
    );
}
