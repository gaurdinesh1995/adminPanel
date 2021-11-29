/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import {
    addToast as actionAddToast,
} from '../../actions';

/**
 * Component
 */
class Content extends Component {
    render() {
        const {
            addToast,
        } = this.props;

        return (
            <Fragment>
                <Snippet
                    language="html"
                    preview
                >
                    <button
                        className="btn btn-danger rui-toast-show"
                        onClick={ () => {
                            addToast( {
                                title: 'RootUI React',
                                content: 'Hey, this is a demo notice.',
                                time: new Date(),
                                duration: 8000,
                            } );
                        } }
                    >Show Toast</button>
                </Snippet>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
), {
    addToast: actionAddToast,
} )( Content );
