/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Dropdown from '../../components/bs-dropdown';

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
                            'import { Breadcrumb, BreadcrumbItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="#">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="#">Library</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            Data
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Snippet>

                <div className="rui-gap-4" id="breadcrumbDropdown" />
                <h2>Dropdown</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Breadcrumb, BreadcrumbItem } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                            'import Dropdown from \'../../components/bs-dropdown\';',
                        ].join( '\n' )
                    }
                >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="#">Home</Link>
                        </BreadcrumbItem>
                        <Dropdown
                            tag="li"
                            className="breadcrumb-item dropdown-menu-sm"
                            openOnHover
                            showTriangle
                        >
                            <Dropdown.Toggle tag="a" href="#" className="dropdown-item">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu tag="div">
                                <ul className="dropdown-menu-scroll">
                                    <li>
                                        <Link to="#" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="#" className="dropdown-item active">Dropdown Item 2</Link>
                                        <Link to="#" className="dropdown-item">Dropdown Item 3</Link>
                                        <Link to="#" className="dropdown-item">Dropdown Item 4</Link>
                                    </li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Breadcrumb>
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
