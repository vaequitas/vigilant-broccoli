import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import withWidth, { isWidthUp, isWidthDown  } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    boxShadow: theme.shadows[15],
  },
});

const gridWidthMap = {
  xs: 1.4,
  sm: 2.4,
  md: 3.4,
  lg: 3.4,
  xl: 3.4,
}

const YoutubeList = (props) => {
  const { classes, width } = props;

  const tileData = [
    {
      title: 'Ride - Dreams Burn Down',
      id: 'tsmHP3ce010',
    },
    {
      title: 'Kailee Morgue - Discovery',
      id: '4XZYws3wV-g',
    },
    {
      title: 'girl in red - i wanna be your girlfriend',
      id: 'COOBN-cdJbo',
    },
    {
      title: 'EXES - Taxi',
      id: 'mcjAf9USlNU',
    },
    {
      title: 'Ashe - Someone to Lose',
      id: 'InBP_pOp4bs',
    },
  ]

  const cols = gridWidthMap[width]
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={cols}>
        {tileData.map(tile => (
          <GridListTile key={tile.id}>
            <iframe
              title={tile.title}
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${tile.id}`}
              frameBorder="0"
              allow="encrypted-media;"
              allowFullScreen >
            </iframe>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(withStyles(styles)(YoutubeList));
