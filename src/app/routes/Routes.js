import React from 'react';

// Components 
import Main from '../components/Main/Main';
import About from '../components/Main/About';
import { Route } from 'react-router-dom';

export default function Routes() {

    return (
        <>
            <Route exact path='/'>
                <Main>
                    <About />
                </Main>
            </Route>
        </>
    );
}