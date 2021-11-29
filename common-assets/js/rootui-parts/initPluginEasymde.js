import { $, $wnd, $body } from './_utility';

/*------------------------------------------------------------------

  Init Plugin EasyMDE

-------------------------------------------------------------------*/
function initPluginEasymde() {
    if ( typeof EasyMDE === 'undefined' ) {
        return;
    }

    $( '.rui-markdown:not(.rui-markdown-ready)' )
        .addClass( 'rui-markdown-ready' )
        .each( function() {
            const markdown = new window.EasyMDE( {
                element: this,
            } );
            markdown.codemirror.on( 'optionChange', ( e ) => {
                if ( e.options.fullScreen ) {
                    $body.addClass( 'rui-markdown-fullscreen' );
                } else {
                    $body.removeClass( 'rui-markdown-fullscreen' );
                }
            } );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginEasymde();
} );

export { initPluginEasymde };
