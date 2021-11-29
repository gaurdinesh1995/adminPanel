/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/dedupe';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Dropdown from '../bs-dropdown';

/**
 * Component
 */
class PageTitle extends Component {
    constructor( props ) {
        super( props );

        this.prepareSubmenus = this.prepareSubmenus.bind( this );
        this.prepareCrumbs = this.prepareCrumbs.bind( this );
    }

    prepareSubmenus( sub ) {
        const {
            settings,
        } = this.props;

        if ( settings.breadcrumbs_presets[ sub ] ) {
            return (
                <>
                    { Object.keys( settings.breadcrumbs_presets[ sub ] ).map( ( url ) => {
                        const isActive = window.location.hash === `#${ url }`;

                        return (
                            <li key={ `crumb-${ url }` }>
                                <Link to={ url } className={ classnames( 'dropdown-item', isActive ? 'active' : '' ) }>{ settings.breadcrumbs_presets[ sub ][ url ] }</Link>
                            </li>
                        );
                    } ) }
                </>
            );
        }

        return sub || '';
    }

    prepareCrumbs( crumbs ) {
        return Object.keys( crumbs ).map( ( url ) => {
            const title = crumbs[ url ];

            // crumb with dropdown.
            if ( typeof title !== 'string' ) {
                const data = title;

                return (
                    <Dropdown
                        key={ `crumb-${ url }` }
                        tag="li"
                        className="breadcrumb-item dropdown-menu-sm"
                        openOnHover
                        showTriangle
                    >
                        <Dropdown.Toggle tag="a" href={ url || '#' } className="dropdown-item">
                            { data.title }
                        </Dropdown.Toggle>
                        <Dropdown.Menu tag="div">
                            <ul className="dropdown-menu-scroll">
                                { this.prepareSubmenus( data.sub ) }
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            }

            // default crumb.
            return (
                <BreadcrumbItem key={ `crumb-${ url }` }>
                    <Link to={ url || '#' }>{ crumbs[ url ] }</Link>
                </BreadcrumbItem>
            );
        } );
    }

    render() {
        const {
            className,
            children,
            breadcrumbs,
        } = this.props;

        return (
            <div className={ classnames( 'rui-page-title', className ) }>
                <Container fluid>
                    { breadcrumbs && Object.keys( breadcrumbs ).length ? (
                        <Breadcrumb>
                            { this.prepareCrumbs( breadcrumbs ) }
                        </Breadcrumb>
                    ) : '' }
                    { children }
                </Container>
            </div>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( PageTitle );
