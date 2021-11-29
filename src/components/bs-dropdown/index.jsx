/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import classnames from 'classnames/dedupe';
import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

/**
 * Dropdown Component
 */
class BsDropdown extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            dropdownOpen: !! props.isOpen,
        };

        this.$ref = React.createRef();

        this.toggle = this.toggle.bind( this );
        this.fixDropdownPosition = this.fixDropdownPosition.bind( this );
    }

    componentDidUpdate( prevProps, prevState ) {
        this.fixDropdownPosition( prevState );
    }

    toggle() {
        this.setState( ( prevState ) => ( {
            dropdownOpen: ! prevState.dropdownOpen,
        } ) );
    }

    fixDropdownPosition( prevState ) {
        const {
            dropdownOpen,
        } = this.state;

        if ( ! dropdownOpen || prevState.dropdownOpen === dropdownOpen ) {
            return;
        }

        const $dropdown = this.$ref && this.$ref.current && this.$ref.current.containerRef ? this.$ref.current.containerRef.current : false;

        if ( ! $dropdown ) {
            return;
        }

        const $this = window.jQuery( $dropdown );
        const $menu = $this.children( '.dropdown-menu' );
        const $item = $this.children( '.dropdown-item' );
        const $triangle = $menu.children( '.dropdown-menu-triangle' );

        $menu.css( 'margin-left', '' );
        $triangle.css( 'margin-left', '' );

        if ( ( $menu.offset().left + $menu.outerWidth() ) > window.innerWidth ) {
            // $item.dropdown('update');
            $menu.css( 'margin-left', ( ( $menu.offset().left + $menu.outerWidth() ) - ( window.innerWidth - 27 ) ) / -1 );

            setTimeout( () => {
                if ( $triangle.length ) {
                    $triangle.css( 'margin-left', ( $item.offset().left - $triangle.offset().left ) + ( ( $item.outerWidth() / 2 ) - ( $triangle.outerWidth() / 2 ) ) );
                }
            }, 1 );
        }
    }

    render() {
        const {
            toggle,
            dropdownOpen,
            openOnHover,
            showTriangle,
        } = this.props;

        const {
            dropdownOpen: stateDropdownOpen,
        } = this.state;

        const customToggle = !! toggle;

        const props = {
            ...this.props,
            toggle: customToggle ? toggle : this.toggle,
            isOpen: customToggle ? dropdownOpen : stateDropdownOpen,
        };

        // Hover open.
        if ( ! customToggle && openOnHover ) {
            props.onMouseOver = () => {
                if ( ! stateDropdownOpen ) {
                    this.toggle();
                }
            };
            props.onMouseLeave = () => {
                if ( stateDropdownOpen ) {
                    this.toggle();
                }
            };
            // props.isOpen = true;
            props.className = classnames( props.className, 'dropdown-hover' );
        }

        // Triangle.
        if ( showTriangle ) {
            props.className = classnames( props.className, 'dropdown-triangle' );
        }

        delete props.openOnHover;
        delete props.showTriangle;

        return (
            <Dropdown
                ref={ this.$ref }
                { ...props }
            />
        );
    }
}

/**
 * Dropdown Menu Component
 */
class BsDropdownMenu extends Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <DropdownMenu { ...this.props }>
                { children }
                <span className="dropdown-menu-triangle" />
            </DropdownMenu>
        );
    }
}

BsDropdown.Menu = BsDropdownMenu;

BsDropdown.Toggle = DropdownToggle;
BsDropdown.Item = DropdownItem;

export default BsDropdown;
