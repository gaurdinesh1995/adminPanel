import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin InputMask

-------------------------------------------------------------------*/
function initPluginInputmask() {
    if ( typeof $.fn.inputmask === 'undefined' ) {
        return;
    }
    $( '.rui-inputmask:not(.rui-inputmask-ready)' )
        .addClass( 'rui-inputmask-ready' )
        .inputmask( {
            rightAlign: false,
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginInputmask();
} );

export { initPluginInputmask };
