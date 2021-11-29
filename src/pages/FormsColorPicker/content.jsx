/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ChromePicker, SketchPicker } from 'react-color';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

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
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { ChromePicker, SketchPicker } from \'react-color\';',
                        ].join( '\n' )
                    }
                >
                    <ChromePicker
                        color="#725ec3"
                        // eslint-disable-next-line no-console
                        onChangeComplete={ ( { hex } ) => console.log( hex ) }
                    />
                    <br />
                    <SketchPicker
                        color="#725ec3"
                        // eslint-disable-next-line no-console
                        onChangeComplete={ ( { hex } ) => console.log( hex ) }
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
