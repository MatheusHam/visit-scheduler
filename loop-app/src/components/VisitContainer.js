import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 300,
        minHeight: 400,
    },

    titlePaperRight: {
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#2e323c',
        borderRadius: 10,
        fontSize: 18,
        color: 'white',
        lineHeight: "30px"
    },

    monthInformation: {
        color: '#2e323c',
        fontSize: 16,
        lineHeight: "60px",
        marginBottom: theme.spacing(3)
    },

    bar: {
        alignItens: 'center'
    },

    customButtonWeek: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(6),
        borderRadius: '100%',
        lineHeight: '50px',
        backgroundColor: 'white'
    },

    customButtonTime: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(6),
        borderRadius: '15%',
        lineHeight: '20px',
        backgroundColor: 'white'
    },

    customeButtonSchedule: {
        backgroundColor: 'red'
    }

}));

export default function VisitContainer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>

                <Grid item xs={4}>

                    <Paper className={classes.paper} elevation={5} >
                        <img src={require("../car.jpg")} alt="Loop Logo"></img>
                        <p>Car Name</p>
                        <p>Specs</p>
                        <p>Price</p>
                        <hr></hr>
                        <p>Address City</p>

                    </Paper>
                </Grid>



                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={5}>

                        <Typography variant="h5" className={classes.titlePaperRight}>
                            Agende o dia e horário de sua visita
                            </Typography>

                        <Typography variant="h6" className={classes.monthInformation}>
                            Julho 2020
                            </Typography>
                        <div>
                            <Button variant="contained" className={classes.customButtonWeek}>Seg</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Seg</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Ter</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Qua</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Qui</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Sex</Button>
                            <Button variant="contained" className={classes.customButtonWeek}>Sex</Button>
                        </div>
                        <div>
                            <Button variant="contained" className={classes.customButtonTime}>08:00</Button>
                            <Button variant="contained" className={classes.customButtonTime}>10:00</Button>
                            <Button variant="contained" className={classes.customButtonTime}>12:00</Button>
                            <Button variant="contained" className={classes.customButtonTime}>14:00</Button>
                            <Button variant="contained" className={classes.customButtonTime}>16:00</Button>
                            <Button variant="contained" className={classes.customButtonTime}>18:00</Button>
                        </div>

                        <Button variant="contained" className={classes.customButtonSchedule} disableElevation>Agendar Visita</Button>

                    </Paper>
                </Grid>

            </Grid>
        </div >
    );
}