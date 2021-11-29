/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import classnames from 'classnames/dedupe';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../icon';
import Dropdown from '../bs-dropdown';

/**
 * Component
 *
 * @param {Object} props component props.
 * @return {Object} component.
 */
const Widget = ( props ) => {
    const {
        className,
        title,
        showDropdown,
        children,
    } = props;

    return (
        <div className={ classnames( 'rui-widget', className ) }>
            { title && showDropdown ? (
                <div className="rui-widget-head">
                    { title ? (
                        <h4 className="rui-widget-title">{ title }</h4>
                    ) : '' }
                    { showDropdown ? (
                        <Dropdown tag="div" className="ml-auto" openOnHover showTriangle>
                            <Dropdown.Toggle tag="a" href="#" className="dropdown-item mnr-8">
                                <span className="btn btn-custom-round">
                                    <Icon name="more-vertical" />
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu tag="ul" className="dropdown-menu dropdown-menu-right" right modifiers={ { offset: { offset: '10,12' } } }>
                                <li>
                                    <Link className="dropdown-item" to="#">Export to XLS</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Export to PDF</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Export to XML</Link>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : '' }
                </div>
            ) : '' }
            { children }
        </div>
    );
};

export default Widget;
