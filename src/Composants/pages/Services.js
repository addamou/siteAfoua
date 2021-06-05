import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Grid, ListItem, ListItemText,Divider} from '@material-ui/core';
import Urgence from "../images/urgence.jpg"
import Orl from "../images/orl.jpg"
import Radio from "../images/radiologie.jpg"
import Eco from "../images/ecographie.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin:'20px 0',
    color: theme.palette.text.secondary,
  },
}));

const Services = () => {
    const classes = useStyles(); 
    /*const data = [
      {
        img : Urgence,
        services : 'Medecine Generale',
        Compet1 : "Urgences",
        Compet2 : "Pediatrie",
        Compet3 : ""
      },
    ]*/
    return (
    <div className={classes.root} style={{backgroundColor:'#0c1638', padding :"auto 50px", marginTop:'10px'}} >
    <Container>
      <Grid container spacing={3} style={{padding: "auto 60px"}}>
      <Grid item xs={12}>
          <h1 style={{color:"#fff", textAlign:"center"}}>NOS SERVICES</h1> 
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
              <div>
                  <img src={Urgence} alt="" className="Avatar" />
                  <h3>Services des Urgences</h3>
                  <ListItem button> 
                    <ListItemText primary="ACCUEIL" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ECOUTE" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ACCOMPAGNEMENT" />
                  </ListItem>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} >
          <Paper className={classes.paper}>
                <div>
                  <img src={Orl} alt="" className="Avatar" />
                  <h3>Services ORL</h3>
                  <ListItem button> 
                    <ListItemText primary="ACCUEIL" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ECOUTE" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ACCOMPAGNEMENT" />
                  </ListItem>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
                <div>
                  <img src={Eco} alt="" className="Avatar" />
                  <h3>Maternité</h3>
                  <ListItem button> 
                    <ListItemText primary="ACCUEIL" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ECOUTE" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ACCOMPAGNEMENT" />
                  </ListItem>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
                <div>
                  <img src={Radio} alt="" className="Avatar" />
                  <h3>Laboratoire</h3>
                  <ListItem button> 
                    <ListItemText primary="ACCUEIL" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ECOUTE" />
                  </ListItem>
                    <Divider />
                  <ListItem button> 
                    <ListItemText primary="ACCOMPAGNEMENT" />
                  </ListItem>
              </div>
          </Paper>
        </Grid>
      </Grid>
        </Container>
    </div>
    )
}

export default Services
