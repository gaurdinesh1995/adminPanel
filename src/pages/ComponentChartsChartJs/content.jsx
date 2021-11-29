/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Line, Bar, Pie } from 'react-chartjs-2';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    render() {
        const chartOptions = {
            tooltips: {
                mode: 'nearest',
                intersect: false,
                backgroundColor: '#393f49',
                titleMarginBottom: 8,
                titleFontSize: 14,
                titleFontColor: '#f8f9fa',
                titleFontFamily: "'Open Sans', sans-serif",
                bodyFontSize: 11,
                bodyFontColor: '#d7d9e0',
                bodyFontFamily: "'Open Sans', sans-serif",
                footerMarginTop: 10,
                footerFontSize: 11,
                footerFontColor: '#f8f9fa',
                footerFontFamily: "'Open Sans', sans-serif",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 5,
                cornerRadius: 4,
            },
            legend: {
                labels: {
                    padding: 30,
                    fontSize: 14,
                    fontColor: '#6c757d',
                    fontFamily: "'Open Sans', sans-serif",
                    boxWidth: 14,
                },
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        lineWidth: 0,
                        color: 'transparent',
                        zeroLineWidth: 0,
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        fontSize: 12,
                        fontColor: '#bcbec0',
                        fontFamily: "'Open Sans', sans-serif",
                    },
                } ],
                yAxes: [ {
                    gridLines: {
                        lineWidth: 0,
                        color: 'transparent',
                        zeroLineWidth: 0,
                        zeroLineColor: 'transparent',
                    },
                    ticks: {
                        fontSize: 12,
                        fontColor: '#bcbec0',
                        fontFamily: "'Open Sans', sans-serif",
                    },
                } ],
            },
        };

        return (
            <Fragment>
                <h2 id="chartLine">Line</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Line } from \'react-chartjs-2\';',
                        ].join( '\n' )
                    }
                    reactRenderOptions={ {
                        filterProps: [ 'data' ],
                    } }
                >
                    <Line
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                            datasets: [
                                {
                                    label: 'Chart 1',
                                    backgroundColor: 'rgba(94, 119, 255, 0.8)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    pointRadius: 3,
                                    pointHoverRadius: 3,
                                    pointHitRadius: 100,
                                    pointBackgroundColor: 'transparent',
                                    pointHoverBackgroundColor: 'rgba(94, 119, 255, 1)',
                                    data: [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                },
                                {
                                    label: 'Chart 2',
                                    backgroundColor: 'rgba(171, 184, 255, 0.8)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    pointRadius: 3,
                                    pointHoverRadius: 3,
                                    pointHitRadius: 100,
                                    pointBackgroundColor: 'transparent',
                                    pointHoverBackgroundColor: 'rgba(171, 184, 255, 1)',
                                    data: [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                                },
                            ],
                        } }
                        options={ chartOptions }
                        height={ 80 }
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
                            'import { Bar } from \'react-chartjs-2\';',
                        ].join( '\n' )
                    }
                    reactRenderOptions={ {
                        filterProps: [ 'data' ],
                    } }
                >
                    <Bar
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                            datasets: [
                                {
                                    label: 'Chart 1',
                                    backgroundColor: 'rgba(94, 119, 255, 0.8)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    pointRadius: 3,
                                    pointHoverRadius: 3,
                                    pointHitRadius: 100,
                                    pointBackgroundColor: 'transparent',
                                    pointHoverBackgroundColor: 'rgba(94, 119, 255, 1)',
                                    data: [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                },
                                {
                                    label: 'Chart 2',
                                    backgroundColor: 'rgba(171, 184, 255, 0.8)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    pointRadius: 3,
                                    pointHoverRadius: 3,
                                    pointHitRadius: 100,
                                    pointBackgroundColor: 'transparent',
                                    pointHoverBackgroundColor: 'rgba(171, 184, 255, 1)',
                                    data: [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                                },
                            ],
                        } }
                        options={ chartOptions }
                        height={ 90 }
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
                            'import { Pie } from \'react-chartjs-2\';',
                        ].join( '\n' )
                    }
                    reactRenderOptions={ {
                        filterProps: [ 'data' ],
                    } }
                >
                    <Pie
                        data={ {
                            labels: [ 'Jan', 'Feb', 'Mar' ],
                            datasets: [ {
                                label: 'Chart Example',
                                backgroundColor: [
                                    'rgba(142, 159, 255, 1)',
                                    'rgba(171, 184, 255, 1)',
                                    'rgba(202, 210, 255, 1)',
                                ],
                                borderColor: '#fff',
                                borderWidth: 0,
                                pointBorderWidth: 1,
                                pointBackgroundColor: 'rgba(114, 94, 195, 1)',
                                data: [ 5, 3, 4 ],
                            } ],
                        } }
                        options={ chartOptions }
                        height={ 80 }
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
