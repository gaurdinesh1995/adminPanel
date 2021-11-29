/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Scrollspy from 'react-scrollspy';

/**
 * Component
 */
class PageContent extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeScrollSpy: false,
        };

        this.setActiveScrollspy = this.setActiveScrollspy.bind( this );
        this.getNavigationItem = this.getNavigationItem.bind( this );
    }

    onLinkClick( e ) {
        e.preventDefault();

        if ( e.currentTarget.hash ) {
            const $htmlBody = window.jQuery( 'html, body' );
            const hash = e.currentTarget.hash.split( '#' ).pop();
            const $target = window.jQuery( `#${ hash }` );

            if ( ! $target.length ) {
                return;
            }

            const $navbarTop = window.jQuery( '.rui-navbar-top' );

            if ( $navbarTop.length ) {
                $htmlBody.animate( {
                    scrollTop: $target.offset().top - $navbarTop.innerHeight(),
                }, 500 );
            } else {
                $htmlBody.animate( {
                    scrollTop: $target.offset().top,
                }, 500 );
            }
        }
    }

    setActiveScrollspy( item ) {
        if ( item && item.id ) {
            this.setState( {
                activeScrollSpy: `#${ item.id }`,
            } );
        }
    }

    getNavigationItem( data ) {
        const {
            activeScrollSpy,
        } = this.state;

        return (
            <li key={ `${ data.to }-${ data.title }` }>
                <Link
                    className={ classnames( 'nav-link', activeScrollSpy && activeScrollSpy === data.to ? 'active' : '' ) }
                    to={ data.to }
                    onClick={ this.onLinkClick }
                >
                    { data.title }
                </Link>
                { data.sub ? (
                    <ul className="nav flex-column">
                        { data.sub.map( ( innerData ) => (
                            this.getNavigationItem( innerData )
                        ) ) }
                    </ul>
                ) : '' }
            </li>
        );
    }

    render() {
        const {
            sideNav,
        } = this.props;

        const divProps = {
            ...this.props,
        };

        if ( divProps.sideNav ) {
            delete divProps.sideNav;
        }

        // page content.
        let content = (
            <Container fluid>
                <div { ...divProps } />
            </Container>
        );

        // add side navigation.
        if ( sideNav && sideNav.length ) {
            const items = sideNav.map( ( data ) => (
                data.to.replace( '#', '' )
            ) );

            content = (
                <Row className="align-items-start mr-0">
                    <Col xl={ 10 }>
                        { content }
                    </Col>
                    <Col xl={ 2 } className="d-none d-xl-block rui-scrollbar rui-page-sidebar-sticky">
                        <nav className="rui-page-sidebar">
                            <Scrollspy
                                items={ items }
                                className="nav"
                                currentClassName=""
                                onUpdate={ this.setActiveScrollspy }
                            >
                                { sideNav.map( ( data ) => (
                                    this.getNavigationItem( data )
                                ) ) }
                            </Scrollspy>
                        </nav>
                    </Col>
                </Row>
            );
        }

        return (
            <>
                <div className="rui-page-content">
                    { content }
                </div>
                <footer className="rui-footer">
                    <Container fluid>
                        <p className="mb-0">2021 © NCARE.</p>
                    </Container>
                </footer>
            </>
        );
    }
}

export default PageContent;
