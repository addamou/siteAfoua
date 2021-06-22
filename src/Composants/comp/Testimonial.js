import React, {useState, useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Grid} from '@material-ui/core'
import './Testimonial.css'
import {dataTemoignage} from '../data/dataTemoignage'




const Testimonial = () => {
    const [state, setState] = useState([])
    useEffect(() => {
       setState(dataTemoignage)
    }, [])

    return (
        <section>
            
            <Grid container spacing={3}>
        <Grid item xs={12}>
        <h1>Témoignages de Nos Clients</h1>
        </Grid>
        {state.map((temoignage) => {
                return (
                        <Grid item xs={12} sm={3}>
                        <div className="card" key={temoignage.index} style={{background:`${temoignage.color}`, color: '#fff'}} >
                            <div className="card-head">
                                <LazyLoadImage src={temoignage.image} alt={temoignage.alt} className="card-img" />
                            </div>
                            <div className="card-test">
                                <h2 className='h'>{temoignage.identite}</h2>
                                <h4 className='h'>{temoignage.fonction}</h4>
                                <p>{temoignage.temoignage}</p>
                            </div>
                        </div>
                        </Grid>
                )
            })}
      </Grid>
        </section>
    )
}

export default Testimonial

/**
 * 
 
 * 
 */