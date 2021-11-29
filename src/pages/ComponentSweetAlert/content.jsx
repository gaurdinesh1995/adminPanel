/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';

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
            showSuccess: false,
            showError: false,
            showWarning: false,
            showInfo: false,
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
                            'import SweetAlert from \'sweetalert2-react\';',
                        ].join( '\n' )
                    }
                >
                    <button
                        className="btn btn-success"
                        onClick={ () => this.setState( { showSuccess: true } ) }
                    >
                        Success
                    </button>
                    <SweetAlert
                        type="success"
                        show={ this.state.showSuccess }
                        title="Success"
                        html="You clicked the <strong>Success</strong> button!"
                        confirmButtonColor="#725ec3"
                        onConfirm={ () => this.setState( { showSuccess: false } ) }
                        onCancel={ () => this.setState( { showSuccess: false } ) }
                        onEscapeKey={ () => this.setState( { showSuccess: false } ) }
                    />

                    { ' ' }
                    <button
                        className="btn btn-danger"
                        onClick={ () => this.setState( { showError: true } ) }
                    >
                        Error
                    </button>
                    <SweetAlert
                        type="error"
                        show={ this.state.showError }
                        title="Error"
                        html="You clicked the <strong>Error</strong> button!"
                        confirmButtonColor="#725ec3"
                        onConfirm={ () => this.setState( { showError: false } ) }
                        onCancel={ () => this.setState( { showError: false } ) }
                        onEscapeKey={ () => this.setState( { showError: false } ) }
                    />

                    { ' ' }
                    <button
                        className="btn btn-warning"
                        onClick={ () => this.setState( { showWarning: true } ) }
                    >
                        Warning
                    </button>
                    <SweetAlert
                        type="warning"
                        show={ this.state.showWarning }
                        title="Warning"
                        html="You clicked the <strong>Warning</strong> button!"
                        confirmButtonColor="#725ec3"
                        onConfirm={ () => this.setState( { showWarning: false } ) }
                        onCancel={ () => this.setState( { showWarning: false } ) }
                        onEscapeKey={ () => this.setState( { showWarning: false } ) }
                    />

                    { ' ' }
                    <button
                        className="btn btn-info"
                        onClick={ () => this.setState( { showInfo: true } ) }
                    >
                        Info
                    </button>
                    <SweetAlert
                        type="info"
                        show={ this.state.showInfo }
                        title="Info"
                        html="You clicked the <strong>Info</strong> button!"
                        confirmButtonColor="#725ec3"
                        onConfirm={ () => this.setState( { showInfo: false } ) }
                        onCancel={ () => this.setState( { showInfo: false } ) }
                        onEscapeKey={ () => this.setState( { showInfo: false } ) }
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
