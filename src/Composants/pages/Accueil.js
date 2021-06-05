import React, { Fragment } from 'react';
import Landing from './Comps/Landing';
import Services from "../pages/Services";
import Chambres from "./Comps/Chambres";
import Propos from './Propos';
import Testimonials from './Comps/Testimonials';
import Contact from './Contact'


const Accueil = () => {
    return (
        <Fragment>
            <Landing/>
            <Services />
            <Chambres />
            <Propos /> 
            <Testimonials />
            <Contact />
        </Fragment>
    )
}

export default Accueil;