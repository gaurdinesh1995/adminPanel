/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, createRef } from 'react';

window.jQuery.DataTable = require( 'datatables' );

/**
 * Component
 */
class DataTables extends Component {
    constructor( props ) {
        super( props );

        this.ref = createRef();
    }

    componentDidMount() {
        if ( ! this.ref ) {
            return;
        }

        const {
            data,
        } = this.props;

        window.jQuery( this.ref.current ).DataTable( data );
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        if ( ! this.ref ) {
            return;
        }

        window.jQuery( this.ref.current )
            .DataTable()
            .destroy( true );
    }

    render() {
        const {
            className,
            children,
        } = this.props;

        return (
            <table className={ className } ref={ this.ref }>
                { children }
            </table>
        );
    }
}

export default DataTables;
