import React from 'react'
import {
    Grid,
    CardActionArea,
    CardContent,
    Typography,
    Card,
    Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Services } from '../../Data/Services'
import "./style.css"
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    card: {
        background: '#0D77A5FA',
        color: '#fff',
    }
}));

const Service = () => {
    const classes = useStyles();


    return (

        <div className="service">
            <Container>
                <motion.h1 style={{ marginTop: 0, fontSize: 30, textAlign: 'center' }}
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                transition={{type: "spring", stiffness: 120}}
                >NOS SPECIALITES</motion.h1>
                <Grid container
                    spacing={2}
                    justify="center"
                    alignItems="center">
                    {
                        Services.map((item) => {
                            return (
                                <Grid item
                                    xs={12}
                                    sm={4}>
                                    <Card className={
                                        classes.card
                                    }
                                        key={
                                            item.titre
                                        }>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h3">
                                                    {
                                                        item.titre
                                                    } </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">{item.text}</Typography>
                                                <Typography gutterBottom variant="p" component="h5">
                                                    {
                                                        item.texte
                                                    } </Typography>
                                                <Typography gutterBottom variant="p" component="h5">
                                                    {
                                                        item.heure
                                                    } </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            )
                        })
                    } </Grid>
            </Container>

        </div>
    )
}

export default Service