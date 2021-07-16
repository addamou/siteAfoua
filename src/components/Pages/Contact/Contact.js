import React from 'react'
import Map from "../../images/map.png"
import "./style.css"
import { Container, Grid } from "@material-ui/core";
import Formulaire from '../Forme/Formulaire';

const Contact = () => {

    return (
        <div className="contact">
            <Container >
                <h1 style={{fontSize : 30, color : 'blue'}}>CONTACT</h1>
                <Grid container spacing={1}>

                    <Grid item xs={12} sm={4}>
                        <h4>Notre Adresse</h4>
                        <p>ISSA BERI, RUE DE LA MAGGIA</p>
                        <p>NIAMEY / PLATEAU</p>
                        <strong>BP : 11 454</strong> <br />
                        <strong>EMAIL : cliniqueafou@gmail.com</strong> <br />
                        <strong>TEL: +227 20 75 34 39</strong>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Formulaire />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h4>Horaire d'Ouverture</h4>
                        <p>TOUS LES JOURS 24H /24</p>
                    </Grid>
                    <Grid item xs={12}>
                        <embed src={Map} alt="Google Maps" className="imag" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact
