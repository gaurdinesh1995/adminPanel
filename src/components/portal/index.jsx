/**
 * External Dependencies
 */
import { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import { canUseDOM } from '../../utils';

/**
 * Component
 */
class Portal extends Component {
    componentWillUnmount() {
        if ( this.defaultNode ) {
            document.body.removeChild( this.defaultNode );
        }

        this.defaultNode = null;
    }

    render() {
        if ( ! canUseDOM ) {
            return null;
        }

        const {
            node,
            children,
        } = this.props;

        if ( ! node && ! this.defaultNode ) {
            this.defaultNode = document.createElement( 'div' );
            document.body.appendChild( this.defaultNode );
        }

        return ReactDOM.createPortal( children, node || this.defaultNode );
    }
}

export default Portal;
