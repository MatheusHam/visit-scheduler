import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const ConfirmationBox = props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const classes = props.classes;

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeTelefone = (event) => {
        setTelefone(event.target.value);
    };

    return (
        <Grid item xs={8} >
            <Paper className={classes.paper} elevation={5}>
                <Typography variant="h5" className={classes.titlePaperRight}>
                    Concluir Agendamento
                            </Typography>
                <form className={classes.root} noValidate autoComplete="off">

                    <div>
                        <FormControl variant="filled">
                            <InputLabel htmlFor="component-filled" className={classes.formName}>Nome</InputLabel>
                            <FilledInput id="component-filled" value={name} onChange={handleChangeName} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="filled">
                            <InputLabel htmlFor="component-filled">E-mail</InputLabel>
                            <FilledInput id="component-filled" value={email} onChange={handleChangeEmail} />
                        </FormControl>

                        <FormControl variant="filled">
                            <InputLabel htmlFor="component-filled">Telefone</InputLabel>
                            <FilledInput id="component-filled" value={telefone} onChange={handleChangeTelefone} />
                        </FormControl>
                    </div>
                </form>
                <Button variant="contained" className={classes.customButtonConfirm}
                    disableElevation onClick={() => { props.changeComponents('finished') }}>
                    Concluir
                </Button>
            </Paper>
        </Grid >
    )
};

export default ConfirmationBox;