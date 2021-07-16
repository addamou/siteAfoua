import React from 'react'
import "./style.css"
import {Propos} from "../../Data/Propos"
import DG from "../../images/dg.png"
import {Container, Grid} from "@material-ui/core"
const About = () => {
    
    return (
        <div className="about">
            <Container>
            <h1 style={{ marginTop: 0, fontSize: 30, textAlign: 'center' }}>A PROPOS DE NOUS</h1>
                {
                    Propos.map((item)=> {
                        return (
                            
                            <Grid container spacing={3}>
                                 <Grid item xs={12} sm={6} key={item.alt}>
                                     <p className="p">{item.texte}</p>
                                 </Grid>
                                 <Grid item xs={12} sm={6}>
                                <embed src={DG} alt={item.alt} className="image" />
                                <figcaption>  {item.auteur} </figcaption>
                                <figcaption>  {item.poste} </figcaption>
                                </Grid>
                            </Grid>
                        )
                    })
                }
                </Container>
        </div>
    )
}

export default About
