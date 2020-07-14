import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignContent: 'center',
        width: '400vh'

    },
    paper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 200,
        width: 100,
    },

    container: {
        marginTop: theme.spacing(3)
    },

    paperTop: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 200

    },

    paperBox: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 10
    },

    Button: {

    }


}));



export default function AutoGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className={classes.root}>

            <Grid container spacing={1}>

                <Grid item xs={2}>
                    <Paper className={classes.paper}>Car Information</Paper>
                </Grid>


                <Grid item xs={3}>
                    <Paper className={classes.control}>
                        <Grid container className={classes.container}>
                            <Grid item>
                                <Paper elevation={2} className={classes.paperBox}> Agende o dia e horario da sua visita!
                                    </Paper>

                            </Grid>


                            <Grid item>
                                <FormLabel></FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    row
                                >
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                                        <FormControlLabel
                                            key={value}
                                            value={value.toString()}
                                            control={<Radio />}
                                            label={value.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </Grid>


                            <Grid item>
                                <Button variant="contained" color="secondary" className={classes.Button}>
                                    Agendar Visita
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={6}>

                </Grid>


            </Grid>
        </div>
    );
}
