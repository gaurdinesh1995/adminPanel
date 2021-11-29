/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';

/**
 * Component
 */
class PageWrap extends Component {
    render() {
        const {
            className,
            children,
        } = this.props;

        return (
            <div className={ classnames( 'rui-page rui-page-react content-wrap', className ) }>
                <div>
                    { children }
                </div>
            </div>
        );
    }
}

export default PageWrap;
