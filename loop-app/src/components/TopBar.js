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
    menuButton: {
      marginRight: theme.spacing(1),
      width: theme.spacing(15)
    },
    title: {
      flexGrow: 1,
    },

    bar: {
      backgroundColor: 'white'
    }
  }));


export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            Loop Carros
          </Typography>
          <Button color="black">Carros</Button>
          <Button color="black">Compras</Button>
          <Button color="black">Vendas</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}