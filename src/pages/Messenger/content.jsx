/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Messenger from '../../components/messenger';

/**
 * Component
 */
class Content extends Component {
    render() {
        const { settings } = this.props;

        return (
            <Fragment>
                <Messenger settings={ settings } full />
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
