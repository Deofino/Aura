import React from "react";
import Navbar from './Navbar';
export default class Header extends React.Component{
    render(){
        return(
            <header className='l-headerMain relative shadow'>
                <Navbar />
            </header>
        );  
    }
}