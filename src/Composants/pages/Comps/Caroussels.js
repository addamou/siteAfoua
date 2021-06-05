import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fond1 from "../../images/equipe.jpg"
import Fond2 from "../../images/docteur.jpg"
import Fond3 from "../../images/urgence.jpg"


function Caroussels() {
  return (
    
    <Carousel>
                <div>
                    <img src={Fond1} alt='' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Fond2} qlt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Fond3} alt='' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

  )
}

export default Caroussels
