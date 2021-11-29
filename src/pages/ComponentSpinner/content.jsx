/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="spinnerBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Spinner } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Spinner color="brand" />
                    { ' ' }
                    <Spinner color="primary" />
                    { ' ' }
                    <Spinner color="secondary" />
                    { ' ' }
                    <Spinner color="success" />
                    { ' ' }
                    <Spinner color="danger" />
                    { ' ' }
                    <Spinner color="warning" />
                    { ' ' }
                    <Spinner color="info" />
                    { ' ' }
                    <Spinner color="light" />
                    { ' ' }
                    <Spinner color="dark" />
                </Snippet>

                <div className="rui-gap-4" id="spinnerGrowing"></div>
                <h2>Growing Spinner</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Spinner } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Spinner type="grow" color="brand" />
                    { ' ' }
                    <Spinner type="grow" color="primary" />
                    { ' ' }
                    <Spinner type="grow" color="secondary" />
                    { ' ' }
                    <Spinner type="grow" color="success" />
                    { ' ' }
                    <Spinner type="grow" color="danger" />
                    { ' ' }
                    <Spinner type="grow" color="warning" />
                    { ' ' }
                    <Spinner type="grow" color="info" />
                    { ' ' }
                    <Spinner type="grow" color="light" />
                    { ' ' }
                    <Spinner type="grow" color="dark" />
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
