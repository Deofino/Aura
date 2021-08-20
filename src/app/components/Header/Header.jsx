import React from "react";
import Navbar from './Navbar';

export const ContextHeader = React.createContext(null);

export default function Header() {
    const [ isDrawer, setDrawer ] = React.useState("");

    return (
        <ContextHeader.Provider value={ [ isDrawer, setDrawer ] }>

            <header className='l-headerMain relative shadow'>
                <Navbar />
            </header>
            <section className='c-waves relative'>
                <div className="c-waves__wave" id="wave1">
                </div>
                <div className="c-waves__wave" id="wave2">
                </div>
                <div className="c-waves__wave" id="wave3">
                </div>
                <div className="c-waves__wave" id="wave4">
                </div>
            </section>

        </ContextHeader.Provider>
    );
}