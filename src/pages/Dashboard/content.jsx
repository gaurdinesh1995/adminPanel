/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Carousel from './components/carousel';
import WidgetMemory from './components/widget-memory';
import WidgetDisc from './components/widget-disc';
import WidgetCPU from './components/widget-cpu';
import WidgetTasks from './components/widget-tasks';
import WidgetUploads from './components/widget-uploads';
import WidgetActivity from './components/widget-activity';
import Map from './components/map';
import WidgetCountries from './components/widget-countries';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.getChartjsOptions = this.getChartjsOptions.bind( this );
        this.getChartjsData = this.getChartjsData.bind( this );
        this.getChartistOptions = this.getChartistOptions.bind( this );
    }

    getChartjsOptions( label ) {
        return {
            tooltips: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#393f49',
                bodyFontSize: 11,
                bodyFontColor: '#d7d9e0',
                bodyFontFamily: "'Open Sans', sans-serif",
                xPadding: 10,
                yPadding: 10,
                displayColors: false,
                caretPadding: 5,
                cornerRadius: 4,
                callbacks: {
                    title: () => {},
                    label,
                },
            },
            legend: {
                display: false,
            },
            maintainAspectRatio: true,
            spanGaps: false,
            plugins: {
                filler: {
                    propagate: false,
                },
            },
            scales: {
                xAxes: [ { display: false } ],
                yAxes: [ {
                    display: false,
                    ticks: {
                        beginAtZero: true,
                    },
                } ],
            },
        };
    }

    getChartjsData( canvas, data, color = '#8e9fff' ) {
        const ctx = canvas.getContext( '2d' );
        const gradient = ctx.createLinearGradient( 0, 0, 0, 90 );
        gradient.addColorStop( 0, Chart.helpers.color( color ).alpha( 0.1 ).rgbString() );
        gradient.addColorStop( 1, Chart.helpers.color( color ).alpha( 0 ).rgbString() );

        return {
            labels: data,
            datasets: [
                {
                    backgroundColor: gradient,
                    borderColor: color,
                    borderWidth: 2,
                    pointHitRadius: 5,
                    pointBorderWidth: 0,
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    pointHoverBorderWidth: 0,
                    pointHoverBackgroundColor: color,
                    data,
                },
            ],
        };
    }

    getChartistOptions() {
        return {
            type: 'Pie',
            options: {
                donut: true,
                showLabel: false,
                donutWidth: 4,
                width: 150,
                height: 150,
            },
            listener: {
                created( ctx ) {
                    const defs = ctx.svg.elem( 'defs' );
                    defs.elem( 'linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0,
                    } ).elem( 'stop', {
                        offset: 0,
                        'stop-color': '#8e9fff',
                    } ).parent().elem( 'stop', {
                        offset: 1,
                        'stop-color': '#2bb7ef',
                    } );
                },
            },
        };
    }

    render() {
        return (
            <Fragment>
                { /* Swiper */ }
                <Carousel
                    getChartjsData={ this.getChartjsData }
                    getChartjsOptions={ this.getChartjsOptions }
                    getChartistOptions={ this.getChartistOptions }
                />

                { /* Latest Actions */ }
                <div className="rui-gap-2" />
                <Row className="vertical-gap">
                    <Col lg="4">
                        <WidgetTasks />
                    </Col>
                    <Col lg="4">
                        <WidgetUploads />
                    </Col>
                    <Col lg="4">
                        <WidgetActivity />
                    </Col>
                </Row>

                { /* Server Data */ }
                <div className="rui-gap-2" />
                <Row className="vertical-gap">
                    <Col lg="4">
                        <WidgetMemory
                            getChartjsData={ this.getChartjsData }
                            getChartjsOptions={ this.getChartjsOptions }
                        />
                    </Col>
                    <Col lg="4">
                        <WidgetDisc
                            getChartjsData={ this.getChartjsData }
                            getChartjsOptions={ this.getChartjsOptions }
                        />
                    </Col>
                    <Col lg="4">
                        <WidgetCPU
                            getChartjsData={ this.getChartjsData }
                            getChartjsOptions={ this.getChartjsOptions }
                        />
                    </Col>
                </Row>

                { /* Earnings by countries and map */ }
                <div className="rui-gap-3" />
                <h2>Earnings by Countries</h2>
                <Row className="vertical-gap">
                    <Col lg="8">
                        <Map />
                    </Col>
                    <Col lg="4">
                        <WidgetCountries />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
