import React from 'react'
import { performances } from '../Data/Performance'
import { Container, Grid } from '@material-ui/core'

const Performance = () => {
    return (
        <div style={{padding: "40px 10px", background: "#B31E03", color:'#f2f3f4'}}>
            <Container>
            
                <Grid container spacing={3}>
            {
                performances.map((item)=> {
                    return (
                        <Grid item xs={12} sm={3} key={item.texte}>
                        <strong>{item.taux}</strong>
                        <br/>
                        <em> {item.texte} </em>
                        </Grid>  
                    )
                })
            }
            </Grid>
                </Container>             
        </div>
    )
}

export default Performance
