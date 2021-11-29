import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin TouchSpin

-------------------------------------------------------------------*/
function initPluginTouchSpin() {
    if ( typeof $.fn.TouchSpin === 'undefined' ) {
        return;
    }

    $( '.rui-touchspin:not(.rui-touchspin-ready)' )
        .addClass( 'rui-touchspin-ready' )
        .each( function() {
            const $this = $( this );
            const input = $this.find( 'input' );
            const dataBtn = input.attr( 'data-touchspin-btn' );
            const dataMin = input.attr( 'min' );
            const dataMax = input.attr( 'max' );
            const dataStep = input.attr( 'step' );
            const dataVertical = input.attr( 'data-touchspin-vertical' );
            const conf = {};

            conf.boostat = 5;
            conf.maxboostedstep = 10;
            conf.forcestepdivisibility = 'none';

            if ( dataVertical === 'true' ) {
                conf.verticalbuttons = dataVertical;
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
            if ( dataBtn ) {
                conf.buttondown_class = `btn ${ dataBtn } btn-uniform`;
                conf.buttonup_class = `btn ${ dataBtn } btn-uniform`;
            } else {
                conf.buttondown_class = 'btn btn-grey-2 btn-uniform';
                conf.buttonup_class = 'btn btn-grey-2 btn-uniform';
            }

            input.TouchSpin( conf );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginTouchSpin();
} );

export { initPluginTouchSpin };
