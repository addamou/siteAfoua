import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardHeader, CardMedia, CardContent, Avatar, Typography, Grid} from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { MdFavoriteBorder } from "react-icons/md";
import testimonial from '../../data/testimonial'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: teal[500],
  },
}));

const Testimonials = () => {

  const classes = useStyles();
 
  return (
    <Container>
      <Container>
        <Grid container spacing={3} style={{padding: "auto 60px"}}>
          <Grid item xs={12}>
            <h1 style={{ textAlign:"center"}}>NOTRE TEAMS</h1> 
          </Grid>
        {
          testimonial.map((testi) => (
            <Grid item xs={12} sm={4}>
            <Card className={classes.root} >
            <CardHeader
              avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
              LOGO
            </Avatar>
          
        }
       
        title={testi.Nom}
        subheader={testi.Poste}
        key={testi.ID}
      />

      <CardMedia
        className={classes.media}
        image={testi.Img}
        title={testi.Nom}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <MdFavoriteBorder /> {testi.Avis}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
          ))
        }
        
      </Grid>
        </Container>
    </Container>
  );
}

export default Testimonials
