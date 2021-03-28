import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    fontSize: 18,
    textAlign: 'left'
  },
  pos: {
    marginBottom: 1
  }
});

interface GridItemProps {
  title: string;
  priority: number;
  tags: string[];
}

const GridItem: React.FC<GridItemProps> = ({ title, priority, tags }) => {
  const [open, setOpen] = useState(false);
  const classes: any = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography className={classes.title} variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {priority}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleClickOpen}>
            edit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Email Address'
                type='email'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button onClick={handleClose} color='primary'>
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
