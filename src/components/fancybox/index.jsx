/**
 * Styles
 */
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import './style.scss';

/**
 * External Dependencies
 */
import '@fancyapps/fancybox';
import React, { Component } from 'react';

let uid = 1;

/**
 * Component
 */
class FancyBox extends Component {
    constructor( props ) {
        super( props );

        this.uid = uid++;
        this.$link = React.createRef();

        this.getId = this.getId.bind( this );
        this.getOptions = this.getOptions.bind( this );
    }

    componentDidMount() {
        const {
            src,
            popupRender,
            galleryId,
        } = this.getOptions();

        if ( galleryId ) {
            return;
        }

        const opts = {
            src,
        };

        if ( popupRender ) {
            opts.src = `#${ this.getId() }`;
        }

        // init fancybox.
        window.jQuery( this.$link.current ).fancybox( opts );
    }

    getId() {
        return `rui-fancybox-${ this.uid }`;
    }

    getOptions() {
        const {
            className,
            tagName = 'a',
            href = '#',
            children,
            popupClassName,

            src = '',
            keyboard = true,
            touch = true,
            closeExisting = false,
            autoFocus = true,
            popupRender,
            galleryId,
        } = this.props;

        return {
            className,
            tagName,
            href,
            children,
            popupClassName,

            src,
            keyboard,
            touch,
            closeExisting,
            autoFocus,
            popupRender,
            galleryId,
        };
    }

    render() {
        const {
            className,
            tagName: TagName,
            href,
            children,
            popupRender: PopupRender,
            popupClassName,

            keyboard,
            touch,
            closeExisting,
            autoFocus,
            galleryId,
        } = this.getOptions();

        const attrs = {
            className,
            'data-keyboard': keyboard ? 'true' : 'false',
            'data-touch': touch ? 'true' : 'false',
            'data-close-existing': closeExisting ? 'true' : 'false',
            'data-auto-focus': autoFocus ? 'true' : 'false',
        };

        if ( TagName === 'a' ) {
            attrs.href = href;
        }

        if ( galleryId ) {
            attrs[ 'data-fancybox' ] = galleryId;
        }

        return (
            <>
                <TagName
                    ref={ this.$link }
                    { ...attrs }
                >
                    { children }
                </TagName>
                { PopupRender ? (
                    <div
                        className={ popupClassName }
                        style={ { display: 'none' } }
                        id={ this.getId() }
                    >
                        <PopupRender />
                    </div>
                ) : '' }
            </>
        );
    }
}

export default FancyBox;
