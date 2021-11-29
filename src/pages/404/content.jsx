/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <p className="display-4 mb-30">Page Not Found</p>
                <Link to="/" className="btn btn-brand">Back Home</Link>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
