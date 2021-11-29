import {
    $, $wnd, wndW, debounceResize, $doc,
} from './_utility';

/*------------------------------------------------------------------

  Init Plugin Pickr

-------------------------------------------------------------------*/
function initPluginPickr() {
    if ( typeof Pickr === 'undefined' ) {
        return;
    }

    $( '.rui-colorpicker:not(.rui-colorpicker-ready)' )
        .addClass( 'rui-colorpicker-ready' )
        .each( function() {
            const $this = $( this );
            const $input = $this.find( '.rui-colorpicker-input' );
            const $addon = $this.find( '.rui-colorpicker-addon' );
            const $result = $this.find( '.rui-colorpicker-result' );
            const dataRepresentation = $this.attr( 'data-pickr-representation' );
            const conf = {};

            if ( ! $addon.length ) {
                $( '<div class="rui-colorpicker-addon"></div>' ).appendTo( $this );
                $this.addClass( 'rui-colorpicker-presence-addon' );
            }
            if ( $input.length ) {
                conf.default = String( $input.val() );
            } else {
                conf.default = $addon.text();
            }

            if ( dataRepresentation ) {
                conf.defaultRepresentation = dataRepresentation;
            } else {
                conf.defaultRepresentation = 'HEX';
            }

            conf.el = $this[ 0 ].querySelector( '.rui-colorpicker-addon' );
            conf.position = 'bottom-end';
            conf.components = {
                preview: true,
                opacity: true,
                hue: true,
                interaction: {
                    hex: true,
                    rgba: true,
                    input: true,
                    save: true,
                },
            };

            // eslint-disable-next-line
            const pickr = new Pickr(conf);

            if ( $input.length || $result.length ) {
                pickr.on( 'save', () => {
                    $input.val( pickr.getColor()[ `to${ pickr._representation }` ]().toString() );
                    $result.text( pickr.getColor()[ `to${ pickr._representation }` ]().toString() );
                } );
                $input.on( 'change', () => {
                    pickr.setColor( $input.val() );
                } );
            }

            // Wrap
            function wrapPicker( $item ) {
                const $wrapPicker = $item.parent( '.rui-colorpicker-wrap' );
                if ( wndW < 576 && ! $wrapPicker.length ) {
                    $item.wrap( '<div class="rui-colorpicker-wrap"></div>' );
                }
                if ( wndW > 576 && $wrapPicker.length ) {
                    $item.unwrap();
                }
            }

            const dataOffset = $this.attr( 'data-pickr-offset' );
            pickr.on( 'init', ( e ) => {
                const $picker = $( e.getRoot().app );

                wrapPicker( $picker );
                debounceResize( () => {
                    wrapPicker( $picker );
                } );

                if ( dataOffset !== undefined && ! $picker.parents( '.rui-colorpicker-wrap' ) ) {
                    $picker.css( { 'margin-top': parseInt( dataOffset.split( ',' )[ 1 ], 10 ), 'margin-left': parseInt( dataOffset.split( ',' )[ 0 ], 10 ) } );
                }
            } );
        } );

    $doc.on( 'click', '.rui-colorpicker-input', function() {
        const $this = $( this ).parent( '.rui-colorpicker' );
        if ( $this.hasClass( 'rui-colorpicker-presence-addon' ) ) {
            $this.find( '.pcr-button' ).click();
        }
    } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginPickr();
} );

export { initPluginPickr };
