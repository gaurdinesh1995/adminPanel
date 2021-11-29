/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import TextEditor from '../../components/text-editor';

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
                            'import TextEditor from \'../../components/text-editor\';',
                        ].join( '\n' )
                    }
                >
                    <TextEditor />
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
