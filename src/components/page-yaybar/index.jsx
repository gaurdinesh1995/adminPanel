/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

/**
 * Internal Dependencies
 */
import '../../../common-assets/js/yaybar/yaybar';
import { initPluginYaybar } from '../../../common-assets/js/rootui-parts/initPluginYaybar';
import Dropdown from '../bs-dropdown';
import Icon from '../icon';

import { updateAuth as actionUpdateAuth } from '../../actions';

window.RootUI.initPluginYaybar = initPluginYaybar;

/**
 * Component
 */
class PageYaybar extends Component {
    constructor( props ) {
        super( props );

        this.renderSubmenus = this.renderSubmenus.bind( this );
        this.logOut = this.logOut.bind( this );
    }

    componentDidMount() {
        window.RootUI.initPluginYaybar();
    }

    logOut() {
        const {
            updateAuth,
        } = this.props;

        updateAuth( {
            token: '',
        } );
    }

    renderSubmenus( nav, returnObject = false ) {
        let thereIsActive = false;

        const result = Object.keys( nav ).map( ( url ) => {
            const data = nav[ url ];
            const isActive = window.location.hash === `#${ url }`;
            let isOpened = false;

            if ( isActive ) {
                thereIsActive = true;
            }

            let sub = '';
            if ( data.sub ) {
                const subData = this.renderSubmenus( data.sub, true );

                sub = (
                    <ul className="yay-submenu dropdown-triangle">
                        { subData.content }
                    </ul>
                );

                if ( subData.thereIsActive ) {
                    isOpened = true;
                    thereIsActive = true;
                }
            }

            return (
                <React.Fragment key={ `${ url }-${ data.name }` }>
                    { data.label ? (
                        <li className="yay-label">{ data.label }</li>
                    ) : '' }
                    <li className={ classnames( {
                        'yay-item-active': isActive,
                        'yay-submenu-open': isOpened,
                    } ) }>
                        { data.name ? (
                            <NavLink
                                to={ data.sub ? '#' : url }
                                className={ data.sub ? 'yay-sub-toggle' : '' }
                            >
                                { data.icon ? (
                                    <>
                                        <span className="yay-icon">
                                            <Icon name={ data.icon } />
                                        </span>
                                        <span>{ data.name }</span>
                                        <span className="rui-yaybar-circle" />
                                    </>
                                ) : (
                                    data.name
                                ) }
                                { data.sub ? (
                                    <span className="yay-icon-collapse">
                                        <Icon name="chevron-right" strokeWidth="1" className="rui-icon-collapse" />
                                    </span>
                                ) : '' }
                            </NavLink>
                        ) : '' }
                        { sub }
                    </li>
                </React.Fragment>
            );
        } );

        if ( returnObject ) {
            return {
                content: result,
                thereIsActive,
            };
        }

        return result;
    }

    render() {
        const {
            settings,
        } = this.props;

        return (
            <>
                <div className={
                    classnames(
                        'yaybar rui-yaybar yay-hide-to-small yay-gestures',
                        settings.sidebar_dark && ! settings.night_mode ? 'rui-yaybar-dark' : '',
                        settings.sidebar_static ? 'yay-static' : '',
                        settings.sidebar_effect ? `yay-${ settings.sidebar_effect }` : '',
                    )
                }
                >
                    <div className="yay-wrap-menu">
                        <div className="yaybar-wrap">
                            <ul>
                                {/* <li>
                                    <a href="../dashboard.html">
                                        <span
                                            className="yay-icon"
                                            dangerouslySetInnerHTML={ { __html: require( '!svg-inline-loader!../../../common-assets/images/logo-html-inherit.svg' ) } }
                                        />
                                        <span>Switch to HTML</span>
                                        <span className="rui-yaybar-circle"></span>
                                    </a>
                                </li> */}

                                { this.renderSubmenus( settings.navigation_sidebar ) }

                                <li className="yay-label">Sign</li>
                                <li>
                                    <NavLink
                                        to="#"
                                        onClick={ this.logOut }
                                    >
                                        <span className="yay-icon">
                                            <Icon name="log-out" />
                                        </span>
                                        <span>Log Out</span>
                                        <span className="rui-yaybar-circle"></span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rui-yaybar-icons">
                        <Row className="no-gutters justify-content-around">
                            <Col xs="auto">
                                <Link to={ settings.home_url } className="btn btn-custom-round">
                                    <Icon name="settings" />
                                </Link>
                            </Col>
                            <Col xs="auto">
                                <Link to={ settings.home_url } className="btn btn-custom-round">
                                    <Icon name="bell" />
                                </Link>
                            </Col>
                            <Col xs="auto" className="d-flex mt-3">
                                <Dropdown tag="li" direction="up" openOnHover showTriangle>
                                    <Dropdown.Toggle className="btn btn-custom-round">
                                        <Icon name="plus-circle" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu tag="ul" className="dropdown-menu nav" modifiers={ { offset: { offset: '-30px' }, flip: false } }>
                                        <li>
                                            <Link to="#" className="nav-link">
                                                <Icon name="plus-circle" />
                                                <span>Create new Post</span>
                                                <span className="rui-nav-circle" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link">
                                                <Icon name="book" />
                                                <span>Project</span>
                                                <span className="rui-nav-circle" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link">
                                                <Icon name="message-circle" />
                                                <span>Message</span>
                                                <span className="rui-nav-circle" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="nav-link">
                                                <Icon name="mail" />
                                                <span>Mail</span>
                                                <span className="rui-nav-circle" />
                                            </Link>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs="auto">
                                <Link to={ settings.home_url } className="btn btn-custom-round">
                                    <Icon name="clock" />
                                </Link>
                            </Col>
                            <Col xs="auto">
                                <Link to={ settings.home_url } className="btn btn-custom-round">
                                    <Icon name="heart" />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="rui-yaybar-bg" />
            </>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
), { updateAuth: actionUpdateAuth } )( PageYaybar );
