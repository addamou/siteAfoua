import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Imge from "../images/persn.png"
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor : 'blue',
    margin : '0',
    color : '#fff'

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto ',
    maxWidth: "75%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));




const Propos = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>A PROPOS DE NOUS</h1>
      <Card className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="" src={Imge} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                When I was 12, I set the all-time high record at my local laser tag facility by reverse engineering the charging station and weapon protocols with a photo-resistor, micro-cassette recorder, and a lot of patience. I was unstoppable.

- At 13, I went to space camp and fell in love. I went back two more times and promised myself that I'd work in space. I've since helped build three generations of satellites and have contributed to two more.

- At 14, I was almost expelled for finding a backdoor into my high school's file server and telling everyone but the faculty members about it. Later that year, I figured out how to turn off the internet firewall by editing system registry keys. I anonymously shared my work months later.

- At 16, I participated in a foreign exchange program in Dortmund, Germany. Since then, I've gone back almost every year.
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Propos
