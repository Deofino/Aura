import React, { useState } from "react";
import Menu from "./Menu";

export default function Navbar(props) {

    const [isDrawer, setDrawer] = useState("");

    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo shadow">
                <h2 className="c-navbar__image">LOGO</h2>
            </div>

            <button
                className={"d-none shadow btn-openDrawer" + isDrawer}
                onClick={() => setDrawer(isDrawer === "" ? " active" : "")}
            ></button>

            <Menu isDrawer={isDrawer} />
        </nav>
    );
}
