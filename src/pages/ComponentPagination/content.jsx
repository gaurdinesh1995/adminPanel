/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="paginationBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Pagination, PaginationItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <Link className="page-link" to="#">Previous</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">Next</Link>
                        </PaginationItem>
                    </Pagination>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Pagination, PaginationItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <Link className="page-link" to="#">
                                <Icon name="chevron-left" />
                            </Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">
                                <Icon name="chevron-right" />
                            </Link>
                        </PaginationItem>
                    </Pagination>
                </Snippet>

                <div className="rui-gap-4" id="paginationDisabledActive"></div>
                <h2>Disabled and Active</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Nav, NavItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                            <Link className="page-link" to="#">Previous</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem active>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">Next</Link>
                        </PaginationItem>
                    </Pagination>
                </Snippet>

                <div className="rui-gap-4" id="paginationSizing"></div>
                <h2>Sizing</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Nav, NavItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Pagination aria-label="Page navigation example" size="lg">
                        <PaginationItem active>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                    </Pagination>

                    <br />

                    <Pagination aria-label="Page navigation example">
                        <PaginationItem active>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                    </Pagination>

                    <br />

                    <Pagination aria-label="Page navigation example" size="sm">
                        <PaginationItem active>
                            <Link className="page-link" to="#">1</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">2</Link>
                        </PaginationItem>
                        <PaginationItem>
                            <Link className="page-link" to="#">3</Link>
                        </PaginationItem>
                    </Pagination>
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
