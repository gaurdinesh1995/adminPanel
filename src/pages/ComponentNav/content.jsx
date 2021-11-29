/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
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
                <h2 id="navBase">Base</h2>
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
                    <Nav>
                        <NavItem>
                            <Link className="nav-link active" to="#">Active</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </NavItem>
                    </Nav>
                </Snippet>

                <div className="rui-gap-4" id="navIcon"></div>
                <h2>Icon</h2>
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
                    <Nav>
                        <NavItem>
                            <Link className="nav-link active" to="#">
                                <Icon name="check" />
                                <span>Active</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">
                                <Icon name="check" />
                                <span>Link</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">
                                <Icon name="check" />
                                <span>Link</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">
                                <Icon name="check" />
                                <span>Disabled</span>
                            </Link>
                        </NavItem>
                    </Nav>
                </Snippet>

                <div className="rui-gap-4" id="navVertical"></div>
                <h2>Vertical</h2>
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
                    <Nav className="flex-column">
                        <NavItem>
                            <Link className="nav-link active" to="#">Active</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </NavItem>
                    </Nav>
                </Snippet>

                <div className="rui-gap-4" id="navTabs"></div>
                <h2>Tabs</h2>
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
                    <Nav className="nav-tabs">
                        <NavItem>
                            <Link className="nav-link active" to="#">Active</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </NavItem>
                    </Nav>
                </Snippet>

                <div className="rui-gap-4" id="navPills"></div>
                <h2>Pills</h2>
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
                    <Nav className="nav-pills">
                        <NavItem>
                            <Link className="nav-link active" to="#">Active</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </NavItem>
                    </Nav>
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
