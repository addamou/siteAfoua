import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import chambresData from '../../data/hospitalisation'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#E3FDD1',
      padding :'1rem 0'
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));


const Chambres = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
          <div>
              <h1 className="Chmbre__titre">NOS CHAMBRES D'HOSPITALISATION</h1>
          </div>
        <GridList className={classes.gridList} cols={2.5}>
        {chambresData.map((chambres) => (
          <GridListTile key={chambres.img}>
            <img src={chambres.img} alt={chambres.title} />
            <GridListTileBar
              title={chambres.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
    );
}

export default Chambres

