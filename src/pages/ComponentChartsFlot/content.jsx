/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactFlot from 'react-flot';
import 'flot/source/jquery.flot.pie.js';

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
                            'import ReactFlot from \'react-flot\';',
                        ].join( '\n' )
                    }
                >
                    <ReactFlot
                        id="line-chart"
                        options={ {
                            series: {
                                lines: {
                                    show: true,
                                    lineWidth: 1,
                                    fill: false,
                                    fillColor: {
                                        colors: [
                                            { opacity: 1 },
                                            { opacity: 1 },
                                        ],
                                    },
                                },
                            },
                            yaxis: {
                                showTicks: false,
                                gridLines: false,
                                color: 'transparent',
                            },
                            xaxis: {
                                showTicks: false,
                                gridLines: false,
                                ticks: [ [ 1, 'Jan' ], [ 2, 'Feb' ], [ 3, 'Mar' ], [ 4, 'Apr' ], [ 5, 'May' ], [ 6, 'Jun' ], [ 7, 'Jul' ], [ 8, 'Aug' ], [ 9, 'Sep' ] ],
                                color: 'transparent',
                            },
                            grid: {
                                borderWidth: 0,
                            },
                        } }
                        data={ [
                            {
                                data: [ [ 1, 0 ], [ 2, 10 ], [ 3, 10 ], [ 4, 13 ], [ 5, 10 ], [ 6, 20 ], [ 7, 10 ], [ 8, 10 ], [ 9, 25 ] ],
                                color: 'rgba(171, 184, 255, 0.8)',
                                shadowSize: 0,
                                points: {
                                    show: true,
                                    fillColor: '#fff',
                                    lineWidth: 1,
                                },
                            },
                            {
                                data: [ [ 1, 0 ], [ 2, 9 ], [ 3, 15 ], [ 4, 10 ], [ 5, 30 ], [ 6, 15 ], [ 7, 25 ], [ 8, 18 ], [ 9, 20 ] ],
                                color: 'rgba(94, 119, 255, 0.8)',
                                shadowSize: 0,
                                points: {
                                    show: true,
                                    fillColor: '#fff',
                                    lineWidth: 1,
                                },
                            },
                        ] }
                        width="100%"
                        height="320px"
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
                            'import ReactFlot from \'react-flot\';',
                        ].join( '\n' )
                    }
                >
                    <ReactFlot
                        id="bar-chart"
                        options={ {
                            series: {
                                bars: {
                                    show: true,
                                    lineWidth: 0,
                                    barWidth: 0.6,
                                    align: 'center',
                                    fill: true,
                                    fillColor: {
                                        colors: [
                                            { opacity: 1 },
                                            { opacity: 1 },
                                        ],
                                    },
                                },
                            },
                            yaxis: {
                                showTicks: false,
                                gridLines: false,
                                color: 'transparent',
                            },
                            xaxis: {
                                mode: 'categories',
                                showTicks: false,
                                gridLines: false,
                                ticks: [ [ 1, 'Jan' ], [ 2, 'Feb' ], [ 3, 'Mar' ], [ 4, 'Apr' ], [ 5, 'May' ], [ 6, 'Jun' ], [ 7, 'Jul' ], [ 8, 'Aug' ], [ 9, 'Sep' ] ],
                                color: 'transparent',
                            },
                            grid: {
                                borderWidth: 0,
                            },
                        } }
                        data={ [
                            {
                                data: [ [ 1, 0 ], [ 2, 10 ], [ 3, 10 ], [ 4, 13 ], [ 5, 10 ], [ 6, 20 ], [ 7, 10 ], [ 8, 10 ], [ 9, 25 ] ],
                                color: 'rgba(171, 184, 255, 0.8)',
                            },
                            {
                                data: [ [ 1, 0 ], [ 2, 9 ], [ 3, 15 ], [ 4, 10 ], [ 5, 30 ], [ 6, 15 ], [ 7, 25 ], [ 8, 18 ], [ 9, 20 ] ],
                                color: 'rgba(94, 119, 255, 0.8)',
                            },
                        ] }
                        width="100%"
                        height="320px"
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
                            'import ReactFlot from \'react-flot\';',
                        ].join( '\n' )
                    }
                >
                    <ReactFlot
                        id="pie-chart"
                        options={ {
                            series: {
                                pie: {
                                    show: true,
                                    radius: 1,
                                    label: {
                                        show: true,
                                        radius: 2 / 4,
                                        formatter( t ) {
                                            return `<div style="font-size:12px;text-align:center;padding:2px;color:white;">${ t }</div>`;
                                        },
                                    },
                                    stroke: {
                                        width: 0,
                                    },
                                },
                            },
                            yaxis: {
                                showTicks: false,
                                gridLines: false,
                                color: 'transparent',
                            },
                            xaxis: {
                                showTicks: false,
                                gridLines: false,
                                color: 'transparent',
                            },
                            grid: {
                                borderWidth: 0,
                            },
                        } }
                        data={ [
                            {
                                data: 5,
                                label: 'Jan',
                                color: 'rgba(94, 119, 255, 0.8)',
                            },
                            {
                                data: 3,
                                label: 'Feb',
                                color: 'rgba(94, 119, 255, 0.6)',
                            },
                            {
                                data: 4,
                                label: 'Mar',
                                color: 'rgba(94, 119, 255, 0.4)',
                            },
                        ] }
                        width="100%"
                        height="320px"
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
