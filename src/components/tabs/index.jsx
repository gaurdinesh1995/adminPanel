/* eslint-disable react/prop-types */
/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';
import {
    Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';

/**
 * Internal Dependencies
 */
import { initTabsSliding } from '../../../common-assets/js/rootui-parts/initTabsSliding';

window.RootUI.initTabsSliding = initTabsSliding;
window.RootUI.initTabsSliding();

/**
 * Component
 */
class Tabs extends Component {
    componentDidMount() {
        window.jQuery( window ).trigger( 'rui-ajax-loaded' );
    }

    render() {
        const {
            sliding = false,
            pills = false,
            children,
            className,
        } = this.props;

        return (
            <Nav className={ classnames( pills ? 'nav-pills' : 'nav-tabs', sliding ? 'rui-tabs-sliding' : '', className ) }>
                { children }
            </Nav>
        );
    }
}

/**
 * Component Item
 */
class TabsNavItem extends Component {
    render() {
        const {
            children,
            isActive,
            className,
            onClick,
        } = this.props;

        return (
            <NavItem>
                <NavLink
                    className={ classnames( { active: isActive }, 'rui-tabs-link', className ) }
                    onClick={ onClick }
                    href="#"
                >
                    { children }
                </NavLink>
            </NavItem>
        );
    }
}

Tabs.NavItem = TabsNavItem;

Tabs.Content = TabContent;

Tabs.Pane = TabPane;

export default Tabs;
