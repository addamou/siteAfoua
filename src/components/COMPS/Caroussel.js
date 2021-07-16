import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'

const Caroussel = ({slides}) => {
    return (
        
        <Slider autoplay={4000}>
            {slides.map((slides, index) => (
                <div
                    key={index}
                    style={{ background: `url('${slides.image}')`, 
                    backgroundSize : 'cover', backgroundRepeat : 'no-repeat', 
                    backgroundAttachment:'fixed', objectFit : 'contain'}}
                >
                    
                        <div style={{marginTop : 100, color : '#fff', textAlign :'center'}}> 
                        <h1>{slides.title}</h1>
                        <p>{slides.adresse}</p>
                        <p>{slides.contact}</p>
                        <p>{slides.email}</p>
                        </div>
                    </div>
                
            ))}
            </Slider>
    )
}

export default Caroussel
