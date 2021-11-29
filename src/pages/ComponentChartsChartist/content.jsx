/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chartist from 'react-chartist';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="chartLine">Line</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Chartist from \'react-chartist\';',
                        ].join( '\n' )
                    }
                >
                    <Chartist
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                            series: [
                                [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                            ],
                        } }
                        { ...{
                            type: 'Line',
                            options: {
                                fullWidth: true,
                                height: '320px',
                                showArea: true,
                                seriesBarDistance: 48,
                                showLine: false,
                                chartPadding: {
                                    top: 30,
                                    right: 30,
                                    bottom: 0,
                                    left: 0,
                                },
                                axisX: {
                                    showGrid: false,
                                },
                                axisY: {
                                    showGrid: false,
                                    onlyInteger: true,
                                },
                            },
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="chartBar"></div>
                <h2>Bar</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Chartist from \'react-chartist\';',
                        ].join( '\n' )
                    }
                >
                    <Chartist
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                            series: [
                                [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                            ],
                        } }
                        { ...{
                            type: 'Bar',
                            options: {
                                fullWidth: true,
                                height: '320px',
                                showArea: true,
                                seriesBarDistance: 48,
                                showLine: false,
                                chartPadding: {
                                    top: 30,
                                    right: 30,
                                    bottom: 0,
                                    left: 0,
                                },
                                axisX: {
                                    showGrid: false,
                                },
                                axisY: {
                                    showGrid: false,
                                    onlyInteger: true,
                                },
                            },
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="chartPie"></div>
                <h2>Pie</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Chartist from \'react-chartist\';',
                        ].join( '\n' )
                    }
                >
                    <Chartist
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                            series: [ 5, 3, 4 ],
                        } }
                        { ...{
                            type: 'Pie',
                            options: {
                                fullWidth: true,
                                height: '320px',
                                labelOffset: 10,
                                showArea: true,
                            },
                        } }
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
