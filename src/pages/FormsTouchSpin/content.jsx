/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import TouchSpin from '../../components/touch-spin';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            val1: 56,
            val2: 56,
            val3: 56,
            val4: 56,
            val5: 56,
            val6: 56,
        };
    }

    render() {
        return (
            <Fragment>
                <h2 id="touchSpinBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import TouchSpin from \'../../components/touchspin\';',
                        ].join( '\n' )
                    }
                >
                    <TouchSpin
                        value={ this.state.val1 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val1: value,
                            } );
                        } }
                    />
                    <TouchSpin
                        position="left"
                        value={ this.state.val2 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val2: value,
                            } );
                        } }
                    />
                    <TouchSpin
                        position="right"
                        value={ this.state.val3 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val3: value,
                            } );
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="touchSpinVertical"></div>
                <h2>Vertical</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import TouchSpin from \'../../components/touchspin\';',
                        ].join( '\n' )
                    }
                >
                    <TouchSpin
                        verticalButtons
                        position="left"
                        value={ this.state.val4 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val4: value,
                            } );
                        } }
                    />
                    <TouchSpin
                        verticalButtons
                        value={ this.state.val5 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val5: value,
                            } );
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="touchSpinOverlay"></div>
                <h3>Overlay</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import TouchSpin from \'../../components/touchspin\';',
                        ].join( '\n' )
                    }
                >
                    <TouchSpin
                        verticalButtons
                        verticalButtonsOverlay
                        position="right"
                        value={ this.state.val6 }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                        onChange={ ( value ) => {
                            this.setState( {
                                val6: value,
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
