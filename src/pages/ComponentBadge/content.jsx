/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Badge, Button } from 'reactstrap';

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
                <h2 id="badgeBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <h1>Example heading <Badge color="secondary">New</Badge></h1>
                    <h2>Example heading <Badge color="secondary">New</Badge></h2>
                    <h3>Example heading <Badge color="secondary">New</Badge></h3>
                    <h4>Example heading <Badge color="secondary">New</Badge></h4>
                    <h5>Example heading <Badge color="secondary">New</Badge></h5>
                    <h6 className="mb-0">Example heading <Badge color="secondary">New</Badge></h6>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Badge, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand">
                        <span>Notifications</span>
                        <Badge color="light">4</Badge>
                    </Button>
                    { ' ' }
                    <Button color="brand">
                        <span>Notifications</span>
                        <Badge color="light" className="badge-circle">4</Badge>
                    </Button>
                    { ' ' }
                    <Button color="brand">
                        <Badge color="light" className="badge-circle">46</Badge>
                        <span>Notifications</span>
                    </Button>
                </Snippet>

                <div className="rui-gap-4" id="badgeContext"></div>
                <h2>Contextual variations</h2>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Badge color="brand">Brand</Badge>
                    { ' ' }
                    <Badge color="primary">Primary</Badge>
                    { ' ' }
                    <Badge color="secondary">Secondary</Badge>
                    { ' ' }
                    <Badge color="success">Success</Badge>
                    { ' ' }
                    <Badge color="danger">Danger</Badge>
                    { ' ' }
                    <Badge color="warning">Warning</Badge>
                    { ' ' }
                    <Badge color="info">Info</Badge>
                    { ' ' }
                    <Badge color="light">Light</Badge>
                    { ' ' }
                    <Badge color="dark">Dark</Badge>
                </Snippet>

                <div className="rui-gap-4" id="badgePill"></div>
                <h2>Pills</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Badge color="brand" pill>Brand</Badge>
                </Snippet>

                <div className="rui-gap-4" id="badgeLink"></div>
                <h2>Links</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Badge color="brand" href="#">Brand</Badge>
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
