import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import IconButton from '@material-ui/core/IconButton';

interface NavBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appbar: {
      background: '#1E1C31',
      color: '#b8d9de'
    }
  })
);

const NavBar: React.FC<NavBarProps> = ({}) => {
  const classes: any = useStyles();
  return (
    <>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <ListAltIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Your Personal Task Planner
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
