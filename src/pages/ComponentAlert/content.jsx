/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            visible: true,
        };

        this.onDismiss = this.onDismiss.bind( this );
    }

    onDismiss() {
        this.setState( { visible: false } );
    }

    render() {
        return (
            <Fragment>
                <h2 id="alertBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Alert } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Alert color="brand">
                        A simple brand alert—check it out!
                    </Alert>
                    <Alert color="primary">
                        A simple primary alert—check it out!
                    </Alert>
                    <Alert color="secondary">
                        A simple secondary alert—check it out!
                    </Alert>
                    <Alert color="success">
                        A simple success alert—check it out!
                    </Alert>
                    <Alert color="danger">
                        A simple danger alert—check it out!
                    </Alert>
                    <Alert color="warning">
                        A simple warning alert—check it out!
                    </Alert>
                    <Alert color="info">
                        A simple info alert—check it out!
                    </Alert>
                    <Alert color="light">
                        A simple light alert—check it out!
                    </Alert>
                    <Alert color="dark">
                        A simple dark alert—check it out!
                    </Alert>
                </Snippet>

                <div className="rui-gap-4" id="alertLink" />
                <h2>Link</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Alert } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Alert color="brand">
                        A simple brand alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                    </Alert>
                </Snippet>

                <div className="rui-gap-4" id="alertContent" />
                <h2>Additional Content</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Alert } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Alert color="success" className="alert-content">
                        <h4 className="h3">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <hr />
                        <p className="mnb-6">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </Alert>
                </Snippet>

                <div className="rui-gap-4" id="alertDismissible"></div>
                <h2>Dismissible</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Alert } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Alert color="warning" isOpen={ this.state.visible }>
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={ this.onDismiss }
                        >
                            <Icon name="x" />
                        </button>
                    </Alert>
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
