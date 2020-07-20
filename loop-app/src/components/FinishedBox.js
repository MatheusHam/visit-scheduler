import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const FinishedBox = props => {
    const classes = props.classes;

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} elevation={5}>
                <Typography variant="h5" className={classes.titlePaperRight}>
                    Agendamento Concluido
                            </Typography>
            </Paper>
        </Grid>
    );
};

export default FinishedBox;