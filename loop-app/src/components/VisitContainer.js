import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles'
import LeftBox from './LeftBox';
import ScheduleBox from './ScheduleBox'
import ConfirmationBox from './ConfirmationBox'
import Button from '@material-ui/core/Button'
import FinishedBox from './FinishedBox'

const Container = props => {
    const classes = useStyles();

    if (props.page === 'initial') {
        return (
            <div className={classes.root}>
                <Button className={classes.backButton}
                    onClick={() => { props.changeComponents('initial') }}>Voltar</Button>
                <Grid container spacing={1}>
                    <LeftBox car={props.car} />
                    <ScheduleBox days={props.days}
                        timeschedules={props.timeschedules}
                        changeComponents={props.changeComponents}
                        classes={classes} />
                </Grid>
            </div >
        );
    }
    else if (props.page === 'confirmation') {
        return (
            <div className={classes.root}>
                <Button className={classes.backButton}
                    onClick={() => { props.changeComponents('initial') }}>Voltar</Button>
                <Grid container spacing={1}>
                    <LeftBox car={props.car} />
                    <ConfirmationBox classes={classes}
                        changeComponents={props.changeComponents} />
                </Grid>
            </div >
        );
    }
    else if (props.page === 'finished') {
        return (
            <div className={classes.root}>
                                <Button className={classes.backButton}
                    onClick={() => { props.changeComponents('initial') }}>Inicio</Button>
                <FinishedBox classes={classes}/>
            </div>
        )
    }
}

class visitContainer extends React.Component {
    render() {
        const { car,
            days,
            timeschedules,
            changeComponents,
            page,
            formHandler } = this.props;

        return (
            <Container car={car}
                days={days}
                timeschedules={timeschedules}
                changeComponents={changeComponents}
                page={page}
                formHandler={formHandler} />
        );
    }
}

export default visitContainer;