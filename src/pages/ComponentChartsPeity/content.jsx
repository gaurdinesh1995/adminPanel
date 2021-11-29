/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Peity from '../../components/chart-peity';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            updatingData: [ 2, 6, 3, 5, 7, 9, 8, 7, 3, 1 ],
        };
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            const data = this.state.updatingData;
            data.shift();
            data.push( Math.round( Math.random() * 10 ) );

            this.setState( {
                updatingData: data,
            } );
        }, 1000 );
    }

    componentWillUnmount() {
        if ( this.interval ) {
            clearInterval( this.interval );
        }
    }

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
                            'import Peity from \'../../components/chart-peity\';',
                        ].join( '\n' )
                    }
                >
                    Stars open
                    { ' ' }
                    <Peity
                        type="line"
                        data={ [ 5, 3, 9, 6, 5, 9, 7, 3, 5, 2 ] }
                        options={ {
                            height: 16,
                            strokeWidth: 0,
                            fill: 'rgba(114, 94, 195, 0.8)',
                        } }
                    />
                    { ' ' }
                    bring Cattle life void night sixth give firmament.
                </Snippet>

                <div className="rui-gap-4" id="chartBar"></div>
                <h2>Bar</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Peity from \'../../components/chart-peity\';',
                        ].join( '\n' )
                    }
                >
                    Stars open
                    { ' ' }
                    <Peity
                        type="bar"
                        data={ [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ] }
                        options={ {
                            height: 16,
                            strokeWidth: 0,
                            fill: [ 'rgba(114, 94, 195, 0.8)', 'rgba(114, 94, 195, 0.8)' ],
                        } }
                    />
                    { ' ' }
                    bring Cattle life void night sixth give firmament.
                </Snippet>

                <div className="rui-gap-4" id="chartPie"></div>
                <h2>Pie</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Peity from \'../../components/chart-peity\';',
                        ].join( '\n' )
                    }
                >
                    Stars open
                    { ' ' }
                    <Peity
                        type="pie"
                        data={ [ 5, 3, 4 ] }
                        options={ {
                            height: 16,
                            strokeWidth: 0,
                            fill: [
                                'rgba(114, 94, 195, 0.8)',
                                'rgba(114, 94, 195, 0.6)',
                                'rgba(114, 94, 195, 0.4)',
                            ],
                        } }
                    />
                    { ' ' }
                    bring Cattle life void night sixth give firmament.
                </Snippet>

                <div className="rui-gap-4" id="chartUpdating"></div>
                <h2>Updating</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Peity from \'../../components/chart-peity\';',
                        ].join( '\n' )
                    }
                >
                    Stars open
                    { ' ' }
                    <Peity
                        type="line"
                        data={ [ ...this.state.updatingData ] }
                        options={ {
                            height: 16,
                            stroke: 'rgba(114, 94, 195, 0.8)',
                            fill: 'rgba(114, 94, 195, 0.2)',
                        } }
                    />
                    { ' ' }
                    bring Cattle life void night sixth give firmament.
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
