/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import DatePicker from '../../components/date-time-picker';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            firstVal: '',
            secondVal: '',
            thirdVal: '',
        };
    }

    render() {
        return (
            <Fragment>
                <h2 id="dateTimePicker">DateTime</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import DatePicker from \'../../components/date-time-picker\';',
                        ].join( '\n' )
                    }
                >
                    <DatePicker
                        selected={ this.state.firstVal }
                        onChange={ ( val ) => {
                            this.setState( {
                                firstVal: val,
                            } );
                        } }
                        showTimeSelect
                        placeholder="Select date and time"
                        dateFormat="yyyy/MM/dd h:mm aa"
                        className="rui-datetimepicker form-control w-auto"
                    />
                </Snippet>

                <div className="rui-gap-4" id="datePicker"></div>
                <h2>Date</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import DatePicker from \'../../components/date-time-picker\';',
                        ].join( '\n' )
                    }
                >
                    <DatePicker
                        selected={ this.state.secondVal }
                        onChange={ ( val ) => {
                            this.setState( {
                                secondVal: val,
                            } );
                        } }
                        placeholder="Select date"
                        dateFormat="yyyy/MM/dd"
                        className="rui-datetimepicker form-control w-auto"
                    />
                </Snippet>

                <div className="rui-gap-4" id="timePicker"></div>
                <h2>Time</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import DatePicker from \'../../components/date-time-picker\';',
                        ].join( '\n' )
                    }
                >
                    <DatePicker
                        selected={ this.state.thirdVal }
                        onChange={ ( val ) => {
                            this.setState( {
                                thirdVal: val,
                            } );
                        } }
                        showTimeSelect
                        showTimeSelectOnly
                        placeholder="Select time"
                        dateFormat="h:mm aa"
                        className="rui-datetimepicker form-control w-auto"
                    />
                </Snippet>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
