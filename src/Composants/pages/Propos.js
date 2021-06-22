import { Grid } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {about} from '../data/About'
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from '../images/docteur.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : '30px 20px',
    background: '#202020'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

  


const Box = styled.div`
  min-height: 287px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
            0 3px 1px -2px rgba(0,0,0,0.12),
            0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 3% 2%;
  margin-right: 3%;
  margin-bottom: 3%;
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s ease-out;
  :hover {
    box-shadow:  0 8px 17px 2px rgba(0,0,0,0.14),
            0 3px 14px 2px rgba(0,0,0,0.12),
            0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s;
  }
  :last-of-type{
    margin-right: 0;
  }
  a{
    margin-top: auto;
    color: #7fa1e8;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-height: auto;
    padding: 5%;
  }
`

const Propos = () => {
    const classes = useStyles();
    const [state, setState] = useState([])
    useEffect(() => {
        setState(about)
    }, [])
    return (
        <div className={classes.root}>
            <h1>A propos de nous</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <LazyLoadImage src={Image} alt="docteur" style={{maxWidth : '400px' , height: 400}} />
        </Grid>
        <Grid item xs={12} sm={5}>
        <Box>
        {state.map((info) => {
            return (
                <>
                    <h3>{info.title}</h3>
                    <p> {info.description}</p>
                    <Link
                        to={info.path}>
                        Read more
                    </Link>
                </>
                )
            })}
        </Box>
        </Grid>
      </Grid>
    </div>
    )
}

export default Propos
