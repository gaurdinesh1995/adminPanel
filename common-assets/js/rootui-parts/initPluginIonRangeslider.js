import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init IonRangeSlider

-------------------------------------------------------------------*/
function initPluginIonRangeslider() {
    if ( typeof $.fn.ionRangeSlider === 'undefined' ) {
        return;
    }

    $( '.rui-irs:not(.rui-irs-ready)' )
        .addClass( 'rui-irs-ready' )
        .each( function() {
            const $this = $( this );
            const $input = $this.find( 'input' );
            const $irsVal = $this.find( '.rui-irs-value' );

            const dataMin = parseInt( $input.attr( 'min' ), 10 );
            const dataMax = parseInt( $input.attr( 'max' ), 10 );
            const dataStep = parseInt( $input.attr( 'step' ), 10 );
            const dataFrom = parseInt( $input.attr( 'data-irs-from' ), 10 );
            const dataTo = parseInt( $input.attr( 'data-irs-to' ), 10 );
            const dataSeparator = String( $input.attr( 'data-irs-separator' ) );
            const conf = {};

            function irsValue() {
                if ( $irsVal.length && dataSeparator.length && $input.data( 'to' ) !== undefined ) {
                    $irsVal.text( `${ $input.data( 'from' ) }${ dataSeparator }${ $input.data( 'to' ) }` );
                }
                if ( $irsVal.length && $input.data( 'to' ) === undefined ) {
                    $irsVal.text( $input.data( 'from' ) );
                }
            }

            if ( dataMin ) {
                conf.min = dataMin;
            }
            if ( dataMax ) {
                conf.max = dataMax;
            }
            if ( dataStep ) {
                conf.step = dataStep;
            }
            if ( dataFrom ) {
                conf.type = 'single';
                conf.from = dataFrom;
            }
            if ( dataTo ) {
                conf.type = 'double';
                conf.to = dataTo;
            }
            if ( dataSeparator ) {
                conf.values_separator = dataSeparator;
            }
            conf.grid = false;
            conf.drag_interval = false;

            conf.onStart = () => {
                irsValue();
            };
            conf.onChange = () => {
                irsValue();
                $this.addClass( 'rui-irs-change' );
            };
            conf.onFinish = () => {
                $this.removeClass( 'rui-irs-change' );
            };

            $input.ionRangeSlider( conf );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginIonRangeslider();
} );

export { initPluginIonRangeslider };
