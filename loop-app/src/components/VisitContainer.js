import React from 'react';
import ScheduleInput from './scheduleInput'


export default class visitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: 'true' };
    }
    render() {
        const { car, days, timeschedules, removeComponents, status } = this.props;

        return (
            <ScheduleInput car={car} days={days} timeschedules={timeschedules} removeComponents={removeComponents} status={status} />
        );
    };
}
