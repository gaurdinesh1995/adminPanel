import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Jstree

-------------------------------------------------------------------*/
function initPluginJstree() {
    if ( typeof $.fn.jstree === 'undefined' ) {
        return;
    }

    const self = this;

    $( '.rui-jstree:not(.rui-jstree-ready)' )
        .addClass( 'rui-jstree-ready' )
        .each( function() {
            const $this = $( this );
            $this.jstree();
            $this.on( 'open_node.jstree', () => {
                self.initPluginFeather();
            } );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginJstree();
} );

export { initPluginJstree };
