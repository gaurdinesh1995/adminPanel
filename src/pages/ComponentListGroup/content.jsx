/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <h2 id="listGroupBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { ListGroup, ListGroupItem, Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <ListGroup>
                        <ListGroupItem active>Active</ListGroupItem>
                        <ListGroupItem>Default</ListGroupItem>
                        <ListGroupItem className="d-flex justify-content-between align-items-center">
                            Default Badge
                            <Badge color="brand" className="badge-circle">2</Badge>
                        </ListGroupItem>
                        <ListGroupItem disabled>Disabled</ListGroupItem>
                    </ListGroup>
                </Snippet>

                <div className="rui-gap-4" id="listGroupLink" />
                <h2>Link</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { ListGroup, ListGroupItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <ListGroup>
                        <Link to="#" className="list-group-item active">Link Active</Link>
                        <Link to="#" className="list-group-item">Link Default</Link>
                        <Link to="#" className="list-group-item disabled">Link Disabled</Link>
                    </ListGroup>
                </Snippet>

                <div className="rui-gap-4" id="listGroupFlush" />
                <h2>Flush</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { ListGroup, ListGroupItem, Badge } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <ListGroup flush>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </Snippet>

                <div className="rui-gap-4" id="listGroupContextualClasses" />
                <h2>Contextual Classes</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { ListGroup, ListGroupItem, Badge } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <ListGroup>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-brand">A simple brand list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</Link>
                        <Link to="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</Link>
                    </ListGroup>
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
