import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
    
    
    
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            SuperM
          </Typography>
          <Button className={classes.menuButton}><Link to="/">Home</Link></Button>
          <Button className={classes.menuButton}><Link to="/About">About us</Link></Button>
          <Button className={classes.menuButton}><Link to="/products">Products</Link></Button>
          <Button className={classes.menuButton}><Link to="/Cart">Cart</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}