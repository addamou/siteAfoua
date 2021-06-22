import React from 'react'
import { Fragment } from 'react'
import Caroussel from '../comp/Caroussel'
import { SliderData } from '../data/SliderData'
import Service from './Service'
import Testimonial from '../comp/Testimonial'
import Equipe from '../comp/Equipe'
import Propos from './Propos'


const Accueil = () => {
    return (
        <Fragment>
            <Caroussel slides={SliderData} />
            <Service/>
            <Testimonial/>
            <Equipe />
            <Propos />
        </Fragment>
    )
}

export default Accueil
