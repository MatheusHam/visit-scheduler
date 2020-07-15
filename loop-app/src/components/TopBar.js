import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  bar: {
    backgroundColor: 'white'
  },

  logo: {
    marginRight: theme.spacing(20)
  }
}));


export default function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
          <img src={require("../looplogo.png")} alt="Loop Logo" ></img>
          </Typography>
          
            <Button color="black">Vender</Button>
            <Button color="black">Comprar</Button>
            <Button color="black">Lojas</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}