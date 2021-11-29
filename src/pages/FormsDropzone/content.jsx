/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Dropzone from '../../components/dropzone';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Dropzone from \'../../components/dropzone\';',
                        ].join( '\n' )
                    }
                >
                    <Dropzone onChange={ ( files ) => {
                        // eslint-disable-next-line no-console
                        console.log( files );
                    } } />
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
