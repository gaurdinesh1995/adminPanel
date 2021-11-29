/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';
import Dropdown from '../../components/bs-dropdown';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="dropdownBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Dropdown from \'../../components/bs-dropdown\';',
                            'import Icon from \'../../components/icon\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        showTriangle
                        className="dib"
                    >
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-long">
                            <span className="text">Dropdown</span>
                            <span className="icon">
                                <Icon name="chevron-down" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav">
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;{ ' ' }
                    <Dropdown
                        tag="div"
                        className="btn-group"
                        showTriangle
                    >
                        <button className="btn btn-brand btn-long">Split Dropdown</button>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-uniform">
                            <Icon name="chevron-down" />
                        </Dropdown.Toggle>
                    </Dropdown>
                </Snippet>

                <div className="rui-gap-4" id="dropdownHover" />
                <h2>Hover</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Alert } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        tag="div"
                        className="btn-group"
                        openOnHover
                        showTriangle
                    >
                        <Dropdown.Toggle tag="a" href="#" className="dropdown-item">
                            <Icon name="plus-circle" />
                            <span>Dropdown</span>
                            <span className="rui-nav-circle"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav">
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;{ ' ' }
                    <Dropdown
                        tag="div"
                        className="btn-group ml-20"
                        openOnHover
                        showTriangle
                    >
                        <Dropdown.Toggle tag="a" href="#" className="dropdown-item">
                            <span>Dropdown</span>
                            <Icon name="chevron-down" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav">
                            <li>
                                <Link to="#" className="nav-link">
                                    <span>Action</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <span>Another action</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <span>Something else here</span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                </Snippet>

                <div className="rui-gap-4" id="dropdownDirectionUp" />
                <h2>Direction</h2>
                <h3>Up</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Dropdown from \'../../components/bs-dropdown\';',
                            'import Icon from \'../../components/icon\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        showTriangle
                        className="dib"
                        direction="up"
                    >
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-long">
                            <span className="text">Dropup</span>
                            <span className="icon">
                                <Icon name="chevron-up" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav">
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;{ ' ' }
                    <Dropdown
                        tag="div"
                        className="btn-group"
                        direction="up"
                        showTriangle
                    >
                        <button className="btn btn-brand btn-long">Split Dropup</button>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-uniform">
                            <Icon name="chevron-up" />
                        </Dropdown.Toggle>
                    </Dropdown>
                </Snippet>

                <div className="rui-gap-4" id="dropdownDirectionRight" />
                <h3>Right</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Dropdown from \'../../components/bs-dropdown\';',
                            'import Icon from \'../../components/icon\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        showTriangle
                        className="dib"
                        direction="right"
                    >
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-long">
                            <span className="text">Dropright</span>
                            <span className="icon">
                                <Icon name="chevron-right" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;{ ' ' }
                    <Dropdown
                        tag="div"
                        className="btn-group"
                        direction="right"
                        showTriangle
                    >
                        <button className="btn btn-brand btn-long">Split Dropright</button>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-uniform">
                            <Icon name="chevron-right" />
                        </Dropdown.Toggle>
                    </Dropdown>
                </Snippet>

                <div className="rui-gap-4" id="dropdownDirectionLeft" />
                <h3>Left</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Dropdown from \'../../components/bs-dropdown\';',
                            'import Icon from \'../../components/icon\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        showTriangle
                        className="dib"
                        direction="left"
                    >
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-long">
                            <span className="text">Dropleft</span>
                            <span className="icon">
                                <Icon name="chevron-left" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    &nbsp;{ ' ' }
                    <Dropdown
                        tag="div"
                        className="btn-group"
                        direction="left"
                        showTriangle
                    >
                        <button className="btn btn-brand btn-long">Split Dropleft</button>
                        <Dropdown.Menu tag="ul" className="nav" modifiers={ { offset: { offset: '-20' } } }>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-uniform">
                            <Icon name="chevron-left" />
                        </Dropdown.Toggle>
                    </Dropdown>
                </Snippet>

                <div className="rui-gap-4" id="dropdownAlignment" />
                <h2>Menu Alignment</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Dropdown from \'../../components/bs-dropdown\';',
                            'import Icon from \'../../components/icon\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Dropdown
                        showTriangle
                        className="dib"
                        direction="up"
                    >
                        <Dropdown.Toggle tag="button" className="btn btn-brand btn-long">
                            <span className="text">Right Align Menu</span>
                            <span className="icon">
                                <Icon name="chevron-up" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="ul" className="nav" right>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="plus-circle" />
                                    <span>Action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="x-circle" />
                                    <span>Another action</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="nav-link">
                                    <Icon name="check-circle" />
                                    <span>Something else here</span>
                                    <span className="rui-nav-circle"></span>
                                </Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
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
