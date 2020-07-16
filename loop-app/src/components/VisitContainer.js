import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../styles'


const Container = props => {

    const classes = useStyles();
    const car = props.car;

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={5} >
                        <img src={require("../car.jpg")} alt="Loop Logo"></img>
                        <p>{car.name}</p>
                        <p>{car.specs}</p>
                        <p>{car.price}</p>
                        <hr></hr>
                        <p>{car.city}</p>
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

class visitContainer extends React.Component {
    render() {
        const { car } = this.props;
        return (
            <div>
                <Container car={car} />
            </div>
        );
    }
}

export default visitContainer;