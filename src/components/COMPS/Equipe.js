import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {dataEquipe} from '../data/dataEquipe'
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {MdStarBorder} from 'react-icons/md';


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            overflow: 'hidden',
            backgroundColor: '#ffdeaa',
            padding : 20
          },
          gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
            width : '600px'
            
          },
          icon: {
            color: 'rgba(255, 255, 255, 0.54)',
          },
        }));

const Equipe = () => {
    const classes = useStyles();
    const [state, setState] = useState([])

    useEffect(() => {
        setState(dataEquipe)
    }, [])
   

    return (
        <div className={classes.root}>
            <h1>Notre Equipe Gagnants</h1>
      <GridList cellHeight={250} className={classes.gridList}>
        {state.map((tile) => (
          <GridListTile key={tile.index} cols={2}>
            <LazyLoadImage src={tile.image} alt={tile.identite} />
            <GridListTileBar
              title={tile.identite}
              subtitle={<span>{tile.poste} : {tile.mot}</span>}
              actionIcon={
                  <MdStarBorder />
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
}
 
export default Equipe
