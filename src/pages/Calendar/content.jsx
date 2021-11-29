/**
 * Styles
 */
import '@fullcalendar/common/main.css';
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listWeekPlugin from '@fullcalendar/list';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        // Auto Date
        const date = new Date();
        let dateMonth = date.getMonth() + 1;
        let dateDay = date.getDate();
        let dateDayNext = date.getDate() + 1;

        if ( dateMonth < 10 ) {
            dateMonth = `0${ dateMonth }`;
        }
        if ( dateDay < 10 ) {
            dateDay = `0${ dateDay }`;
        }
        if ( dateDayNext < 10 ) {
            dateDayNext = `0${ dateDayNext }`;
        }

        const dateTomorrow = String( `${ date.getFullYear() }-${ dateMonth }-${ dateDayNext }` );
        const dateToday = String( `${ date.getFullYear() }-${ dateMonth }-${ dateDay }` );

        const events = [
            {
                id: 'a',
                title: 'Training',
                start: `${ dateToday }T09:00:00`,
                allDay: false,
                className: 'fc-event-brand',
            },
            {
                id: 'b',
                title: 'Repetition',
                start: `${ dateToday }T11:00:00`,
                allDay: false,
                className: 'fc-event-primary',
            },
            {
                id: 'c',
                title: 'Pick up the parcel',
                start: `${ dateToday }T13:00:00`,
                allDay: false,
                className: 'fc-event-warning',
            },
            {
                id: 'd',
                title: 'Film',
                start: `${ dateToday }T16:00:00`,
                allDay: false,
                className: 'fc-event-success',
            },
            {
                id: 'e',
                title: 'Stroll',
                start: `${ dateToday }T19:00:00`,
                allDay: false,
            },
            {
                id: 'f',
                title: 'Meeting',
                start: dateTomorrow,
                className: 'fc-event-danger',
            },
        ];

        this.state = {
            options: {
                defaultView: 'dayGridMonth',
                plugins: [ dayGridPlugin, timeGridPlugin, listWeekPlugin ],
                header: {
                    left: 'prev,next, today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridDay,listWeek',
                },
                eventLimit: true,
                eventLimitText: 'More',
                events,
            },
        };
    }

    render() {
        const {
            options,
        } = this.state;

        return (
            <Fragment>
                <div className="rui-calendar rui-calendar-navs">
                    <FullCalendar
                        { ...options }
                    />
                </div>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
