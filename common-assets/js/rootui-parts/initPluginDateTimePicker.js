import {
    $, $wnd, wndW, debounceResize, bodyOverflow,
} from './_utility';

/*------------------------------------------------------------------

  Init DateTimePicker

-------------------------------------------------------------------*/
function initPluginDateTimePicker() {
    if ( typeof $.fn.datetimepicker === 'undefined' ) {
        return;
    }

    const self = this;

    $( '.rui-datetimepicker:not(.rui-datetimepicker-ready)' )
        .addClass( 'rui-datetimepicker-ready' )
        .each( function() {
            const $this = $( this );
            const dataFormat = String( $this.attr( 'data-datetimepicker-format' ) );
            const dataDate = String( $this.attr( 'data-datetimepicker-date' ) );
            const dataTime = String( $this.attr( 'data-datetimepicker-time' ) );
            const conf = {};

            if ( dataFormat ) {
                conf.format = dataFormat;
            }
            if ( dataDate === 'false' ) {
                conf.datepicker = false;
            }
            if ( dataTime === 'false' ) {
                conf.timepicker = false;
            }

            function wrapPicker( $item ) {
                if ( wndW < 576 && ! $item.parent( '.rui-datetimepicker-wrap' ).length ) {
                    $item.wrap( '<div class="rui-datetimepicker-wrap"></div>' );
                }
                if ( wndW > 576 && $item.parent( '.rui-datetimepicker-wrap' ).length ) {
                    $item.unwrap();
                }
            }
            conf.onGenerate = () => {
                const $picker = $( '.xdsoft_datetimepicker' );
                if ( ! $picker.hasClass( 'feather-complete' ) ) {
                    $( '<span stroke-width="1.5" data-feather="chevron-left" class="rui-icon"></span>' ).appendTo( $picker.find( '.xdsoft_prev, .xdsoft_next' ) );
                    $( '<span stroke-width="1.5" data-feather="home" class="rui-icon"></span>' ).appendTo( $picker.find( '.xdsoft_today_button' ) );

                    self.initPluginFeather();
                    $picker.addClass( 'feather-complete' );
                }
                wrapPicker( $picker );
                debounceResize( () => {
                    wrapPicker( $picker );
                } );
            };
            conf.onShow = ( a, b, picker ) => {
                const $picker = $( picker.target );
                const $wrapPicker = $picker.parent( '.rui-datetimepicker-wrap' );
                if ( $wrapPicker.length ) {
                    $wrapPicker.addClass( 'show' );
                    bodyOverflow( 1 );
                }
            };
            conf.onClose = ( a, b, picker ) => {
                const $picker = $( picker.target );
                const $wrapPicker = $picker.parent( '.rui-datetimepicker-wrap' );
                if ( $wrapPicker.length ) {
                    $wrapPicker.removeClass( 'show' );
                    bodyOverflow( 0 );
                }
            };

            $this.datetimepicker( conf );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginDateTimePicker();
} );

export { initPluginDateTimePicker };
