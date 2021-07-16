import React, { Fragment } from 'react'
import Caroussel from '../../COMPS/Caroussel'
import { SliderData } from '../../Data/SliderData'

export const Home = () => {
    return (
        <Fragment>
            <Caroussel slides={SliderData} />
        </Fragment>
    )
}
