import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'



const ScheduleBox = props => {

    const classes = props.classes;
    
    return (
        <Grid item xs={8}>
            <Paper className={classes.paper} elevation={5}>

                <Typography variant="h5" className={classes.titlePaperRight}>
                    Agende o dia e horário de sua visita
                            </Typography>

                <Typography variant="h6" className={classes.monthInformation}>
                    Julho 2020
                            </Typography>
                <div>
                    {props.days.map(function (day, index) {
                        return (
                            <Button variant="contained"
                                className={classes.customButtonWeek}
                                key={index}>
                                {day}
                            </Button>);
                    })}
                </div>
                <div>
                    {props.timeschedules.map(function (time, index) {
                        return (<Button variant="contained"
                            className={classes.customButtonWeek} key={index}>
                            {time}
                        </Button>);
                    })}
                </div>

                <Button variant="contained" className={classes.customButtonSchedule}
                    disableElevation onClick={() => { props.changeComponents('confirmation') }}>
                    Agendar Visita
                </Button>

            </Paper>
        </Grid>
    );
}

export default ScheduleBox;