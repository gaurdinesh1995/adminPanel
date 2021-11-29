/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Slider, { createSliderWithTooltip, Range } from '../../components/range-slider';

const SliderWithTooltip = createSliderWithTooltip( Slider );

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            val1: 20,
            val2: 30,
            val3: 30,
            val4: 250,
            val5: 10,
        };
    }

    render() {
        return (
            <Fragment>
                <h2 id="rangeSlider">Range</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Slider, { Range } from \'../../components/range-slider\';',
                        ].join( '\n' )
                    }
                >
                    <label htmlFor="nothing">Basic</label>
                    <Range
                        allowCross={ false }
                        defaultValue={ [ 0, 20 ] }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Step = 10</label>
                    <Range
                        step={ 10 }
                        defaultValue={ [ 20, 40 ] }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Step = 20, Dots</label>
                    <Range
                        dots
                        step={ 20 }
                        defaultValue={ [ 20, 80 ] }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Disabled</label>
                    <Range
                        allowCross={ false }
                        defaultValue={ [ 0, 20 ] }
                        disabled
                    />
                </Snippet>

                <div className="rui-gap-4" id="slider"></div>
                <h2>Slider</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Slider, { createSliderWithTooltip, Range } from \'../../components/range-slider\';',
                            'const SliderWithTooltip = createSliderWithTooltip( Slider );',
                        ].join( '\n' )
                    }
                >
                    <label htmlFor="nothing">Basic</label>
                    <Slider
                        value={ this.state.val1 }
                        min={ 10 }
                        max={ 60 }
                        onChange={ ( val ) => {
                            this.setState( {
                                val1: val,
                            } );
                        } }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Step = 10</label>
                    <Slider
                        value={ this.state.val2 }
                        step={ 10 }
                        min={ 0 }
                        max={ 50 }
                        onChange={ ( val ) => {
                            this.setState( {
                                val2: val,
                            } );
                        } }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Step = 20, Dots</label>
                    <Slider
                        dots
                        value={ this.state.val3 }
                        step={ 20 }
                        min={ 20 }
                        max={ 120 }
                        onChange={ ( val ) => {
                            this.setState( {
                                val3: val,
                            } );
                        } }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">With Tooltip</label>
                    <SliderWithTooltip
                        value={ this.state.val4 }
                        min={ 5 }
                        max={ 800 }
                        onChange={ ( val ) => {
                            this.setState( {
                                val4: val,
                            } );
                        } }
                    />

                    <div className="rui-gap-1" />
                    <label htmlFor="nothing">Disabled</label>
                    <Slider
                        value={ this.state.val5 }
                        min={ 0 }
                        max={ 20 }
                        disabled
                        onChange={ ( val ) => {
                            this.setState( {
                                val5: val,
                            } );
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
