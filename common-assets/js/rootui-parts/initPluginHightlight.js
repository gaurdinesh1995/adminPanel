import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Feather

-------------------------------------------------------------------*/
function initPluginHightlight() {
    if ( typeof window.hljs === 'undefined' ) {
        return;
    }

    $( 'pre:not(.hljs) code' )
        .each( function() {
            window.hljs.highlightBlock( this );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginHightlight();
} );

export { initPluginHightlight };
