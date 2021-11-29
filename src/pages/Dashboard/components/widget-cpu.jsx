/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

/**
 * Internal Dependencies
 */
import Icon from '../../../components/icon';
import Widget from '../../../components/widget';

class WidgetCPU extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            chartData: Array.from( { length: 40 }, () => Math.floor( ( Math.random() * ( 100 - 40 ) ) + 40 ) ),
        };

        this.carouselSwiper = false;
        this.maybeUpdateChartData = this.maybeUpdateChartData.bind( this );
    }

    componentDidMount() {
        this.maybeUpdateChartData();
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    maybeUpdateChartData() {
        setTimeout( () => {
            if ( this.isUnmounted ) {
                return;
            }

            const {
                chartData,
            } = this.state;

            chartData.shift();
            chartData.push( Math.floor( ( Math.random() * ( 100 - 40 ) ) + 40 ) );

            this.setState( {
                chartData,
            } );

            this.maybeUpdateChartData();
        }, 3000 );
    }

    render() {
        const {
            getChartjsData,
            getChartjsOptions,
        } = this.props;

        const {
            chartData,
        } = this.state;

        return (
            <Widget title="CPU Usage" className="rui-widget-server" showDropdown>
                <div className="rui-widget-content mnt-5">
                    <Icon name="cpu" />
                    2x 3.60 MHz
                </div>
                <div className="rui-widget-server-chart">
                    <Line
                        data={ ( canvas ) => getChartjsData( canvas, chartData, '#6bdea7' ) }
                        options={ getChartjsOptions( ( t ) => [ `Utilization ${ t.value }%`, `Processes ${ parseInt( ( t.value / 10 ), 10 ) }` ] ) }
                        className="rui-chartjs rui-chartjs-line rui-chartjs-cpu"
                        height={ 80 }
                    />
                </div>
            </Widget>
        );
    }
}

export default WidgetCPU;
