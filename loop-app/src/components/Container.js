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
    },

    container: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        borderRadius: 25,
    },

    paper: {
        marginTop: theme.spacing(0),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 25,
        width: '90%',
    },

    paperBox: {
        marginTop: theme.spacing(3),
        marginBottom: 20,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 10
    },

    ButtonActionBar: {
        marginTop: theme.spacing(2),
        width: 25,
        height: 20,
        backgroundColor: 'white',
        color: 'black',
    },

    paperLeft: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 25,
        height: 225,
        width: 100,
    },


    Button: {
        width: 200
    },

}));



export default function AutoGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                </Grid>

                <Grid item xs={9}>
                    <Button variant="contained" color="secondary" className={classes.ButtonActionBar}>
                        voltar
                                </Button>
                </Grid>

                <Grid item xs={3}>
                </Grid>

                <Grid item xs={1}>
                    <Paper className={classes.paperLeft}>Car Information</Paper>
                </Grid>


                <Grid item xs={4}>
                    <Paper className={classes.control}>
                        <Grid container className={classes.container}>
                            <Grid item xs={12}>
                                <Paper elevation={2} className={classes.paper}> Agende a visita!
                                    </Paper>
                            </Grid>




                            <Grid item xs={12}>
                                <p className={classes.schedule}>Escolha a data:</p>
                                <FormLabel></FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    row
                                >
                                    {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                                        <FormControlLabel
                                            key={value}
                                            value={value.toString()}
                                            control={<Radio />}
                                            label={value.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </Grid>




                            <Grid item xs={12}>
                                <p className={classes.schedule} >oioioioiasdasdasdasdasdasdasdoioioi</p>
                                <FormLabel></FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    overflow="hidden"
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


                            <Grid item className={classes.actionButton}>
                                <Button variant="contained" color="secondary" className={classes.Button}>
                                    Agendar Visita
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>


            </Grid>
        </div>
    );
}
