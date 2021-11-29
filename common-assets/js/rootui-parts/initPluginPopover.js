import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Popover

-------------------------------------------------------------------*/
function initPluginPopover() {
    $( '.rui-popover:not(.rui-popover-ready)' )
        .addClass( 'rui-popover-ready' )
        .popover( {
            container: 'body',
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginPopover();
} );

export { initPluginPopover };
