import React from 'react'
import { Grid, Card, Container } from '@material-ui/core'
import './testimonial.css'
import { Temoignage } from '../../Data/Temoignage'

const Testimonial = () => {

    return (
        <div className="testimonal">
            <Container >
                <h1 style={{ marginTop: 0, fontSize: 30, textAlign: 'center' }}>TEMOIGNAGES DE NOS PARTENAIRES</h1>
                <Grid container spacing={2}>
                    {
                        Temoignage.map((item) => {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <Card key={item.auteur} style={{ background: `${item.color}`, color: '#fff', padding: 10, borderRadius: 20, textAlign: 'center' }} >
                                        <p>{item.texte}</p>
                                        <h4 className='h'>{item.auteur}</h4>
                                        <h5 className='h'>{item.poste}</h5>
                                    </Card>
                                </Grid>
                            )
                        })
                    }

                </Grid>

            </Container>
        </div>
    )
}

export default Testimonial
