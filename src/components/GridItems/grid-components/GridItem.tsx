import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

interface GridItemProps {
  title: string;
  priority: number;
  tags: string[];
}

const GridItem: React.FC<GridItemProps> = ({ title, priority, tags }) => {
  const classes: any = useStyles();
  const bull: JSX.Element = <span className={classes.bullet}>•</span>;

  return (
    <Grid item>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {title ? title : 'Completing the project'}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {priority ? priority : 'priority'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
