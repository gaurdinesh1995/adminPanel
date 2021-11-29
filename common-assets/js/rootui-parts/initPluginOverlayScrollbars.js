import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Overlay Scrollbars

-------------------------------------------------------------------*/
function initPluginOverlayScrollbars() {
    if ( typeof $.fn.overlayScrollbars === 'undefined' ) {
        return;
    }

    $( '.rui-scrollbar:not(.rui-scrollbar-ready)' )
        .addClass( 'rui-scrollbar-ready' )
        .overlayScrollbars( {
            scrollbars: {
                clickScrolling: true,
            },
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginOverlayScrollbars();
} );

export { initPluginOverlayScrollbars };
