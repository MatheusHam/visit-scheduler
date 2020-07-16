import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../styles'


const Container = props => {

    const classes = useStyles();
    const car = props.car;
    const days = props.days;
    const timeschedules = props.timeschedules



    return (
        <div className={classes.root}>
            <Grid container spacing={1}>


                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={5} >
                        <img src={require("../media/car.jpg")} alt="Loop Logo"></img>
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
                            {days.map(function (day, index) {
                                return(<Button variant="contained" className={classes.customButtonWeek} key={index}>{day}</Button>);
                            })}
                        </div>
                        <div>
                            {timeschedules.map(function (time, index) {
                                return(<Button variant="contained" className={classes.customButtonWeek} key={index}>{time}</Button>);
                            })}
                        </div>

                        <Button variant="contained" className={classes.customButtonSchedule} disableElevation onClick={() => {props.removeComponents()}}>Agendar Visita</Button>

                    </Paper>
                </Grid>

            </Grid>
        </div >
    );
}

class visitContainer extends React.Component {
    render() {
        const { car, days, timeschedules, removeComponents } = this.props;
        return (
            <div>
                <Container car={car} days={days} timeschedules={timeschedules} removeComponents={removeComponents} />
            </div>
        );
    }
}

export default visitContainer;