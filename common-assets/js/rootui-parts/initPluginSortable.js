import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Sortable

-------------------------------------------------------------------*/
function initPluginSortable() {
    if ( typeof Sortable === 'undefined' ) {
        return;
    }

    $( '.rui-sortable:not(.rui-sortable-ready)' )
        .addClass( 'rui-sortable-ready' )
        .each( function() {
            const $this = $( this );
            const element = $this.get( 0 );
            const dataGroup = $this.attr( 'data-sortable-classNameGroup' );
            const conf = {};

            if ( dataGroup ) {
                conf.group = $this.closest( dataGroup ).attr( 'class' );
            }

            // eslint-disable-next-line
            new Sortable(element, conf);
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginSortable();
} );

export { initPluginSortable };
