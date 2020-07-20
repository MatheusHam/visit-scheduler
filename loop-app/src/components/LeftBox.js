import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles'
import { Typography } from '@material-ui/core';


const LeftBox = props => {
    const car = props.car;
    const classes = useStyles();
    return (
        <Grid item xs={4}>
            <Paper className={classes.paper} elevation={5} >
                <img src={require("../media/car.jpg")} alt="Loop Logo"></img>
                <Typography className={classes.leftBoxyTypo}>{car.name}</Typography>
                <Typography className={classes.leftBoxyTypo}>{car.specs}</Typography>
                <Typography className={classes.leftBoxyTypo}>{car.price}</Typography>
                <hr></hr>
                <Typography className={classes.leftBoxyTypo}>{car.city}</Typography>
            </Paper>
        </Grid>
    )
}

export default LeftBox;