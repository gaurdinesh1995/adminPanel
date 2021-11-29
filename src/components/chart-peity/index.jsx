/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import 'peity';
import React, { Component } from 'react';

const $ = window.jQuery;

/**
 * Component
 */
class Peity extends Component {
    constructor( props ) {
        super( props );

        this.$chartRef = React.createRef();
        this.$chart = false;
    }

    componentDidMount() {
        const {
            type = 'line',
            options = {},
        } = this.props;

        this.$chart = $( this.$chartRef.current ).peity( type, options );
    }

    componentDidUpdate( prevProps ) {
        // nothing changed
        if ( JSON.stringify( prevProps.data ) === JSON.stringify( this.props.data ) ) {
            return false;
        }

        if ( this.$chart ) {
            this.$chart
                .change();
        }
    }

    render() {
        const {
            data = '',
        } = this.props;

        return (
            <span
                ref={ this.$chartRef }
                className="peity"
            >
                { data.join( ',' ) }
            </span>
        );
    }
}

export default Peity;
