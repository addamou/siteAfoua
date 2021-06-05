import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, ListItemAvatar, Avatar, ListItemText, ListItem, 
  Divider, List} from '@material-ui/core'
import Formulaires from './Comps/Formulaires';
import { FaBuilding, FaMapMarkerAlt, FaTty, FaEnvelopeOpenText, FaAndroid } from 'react-icons/fa';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    margin : 0,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Contact = () => {
  const classes = useStyles();
  
 
  return (
    <div style={{margin:0}}>
      <Container className={classes.root}>
        <h1 className="titre">CONTACTER NOUS</h1>
      <Grid container spacing={1} justify="center">
        
        <Grid item xs={12} sm={4}>
        <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaBuilding />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="CLINIQUE AFOUA"/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaMapMarkerAlt />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ADRESSE" secondary="Plateau Rue-PL 250" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaTty />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TELPHONE" secondary="(00227) 20.75.52.45 " />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaEnvelopeOpenText />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="EMAIL" secondary="contact@afoua.ne" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaAndroid />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="APPLICATION MOBILE" secondary="Playstore & Appstore" />
      </ListItem>
    </List>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Formulaires />
        </Grid>
      </Grid>
      </Container>
    </div>
    
  )
}

export default Contact
