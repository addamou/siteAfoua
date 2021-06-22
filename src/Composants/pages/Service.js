import React, {useState, useEffect} from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Card,
    Container
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {dataService} from '../data/services'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    card: {
        maxWidth: 345
    },

    service: {
        background: '#BDBDBDB9',
        width: '95%',
        padding: '40px 20px'
    }


}));


const Service = () => {
    const classes = useStyles();
    const [state, setState] = useState([])
    useEffect(() => {
        setState(dataService)
    }, [])

    return (

        <Container className={
            classes.service
        }>
            <Grid container
                spacing={3}
                justify="center"
                alignItems="center">
                <Grid item
                    xs={12}>
                    <h1>Nos Services</h1>
                </Grid>
                {
                state.map((service) => {
                    return (
                        <Grid item
                            xs={12}
                            sm={3}>
                            <Card className={
                                    classes.card
                                }
                                key={
                                    service.key
                            }>
                                <CardActionArea>
                                    <CardMedia component="img"
                                        alt={
                                            service.title
                                        }
                                        height="140"
                                        image={
                                            service.image
                                        }
                                        title={
                                            service.title
                                        }/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {
                                            service.title
                                        } </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Responsable : {
                                            service.responsable
                                        } </Typography>
                                        <Typography gutterBottom variant="h5" component="h4">
                                            {
                                            service.horaire
                                        } </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    )
                })
            } </Grid>
        </Container>
    )
}

export default Service
