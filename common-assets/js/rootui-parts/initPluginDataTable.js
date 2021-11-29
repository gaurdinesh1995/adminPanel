import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init DataTable

-------------------------------------------------------------------*/
function initPluginDataTable() {
    if ( typeof $.fn.dataTable === 'undefined' ) {
        return;
    }
    $( '.rui-datatable:not(.rui-datatable-ready)' )
        .addClass( 'rui-datatable-ready' )
        .each( function() {
            const $this = $( this );
            const dataOrder = $this.attr( 'data-datatable-order' );
            const dataSearch = $this.attr( 'data-datatable-search' );
            const dataPaging = $this.attr( 'data-datatable-paging' );
            const dataInfo = $this.attr( 'data-datatable-info' );
            const conf = {};

            if ( dataOrder ) {
                const dataOrderOne = dataOrder.split( ',' )[ 0 ];
                const dataOrderTwo = dataOrder.split( ',' )[ 1 ];

                if ( dataOrderOne && dataOrderTwo ) {
                    conf.order = [ [ parseInt( dataOrderOne.split( ':' )[ 0 ], 10 ), dataOrderOne.split( ':' )[ 1 ] ], [ parseInt( dataOrderTwo.split( ':' )[ 0 ], 10 ), dataOrderTwo.split( ':' )[ 1 ] ] ];
                }
                if ( dataOrderOne && ! dataOrderTwo ) {
                    conf.order = [ parseInt( dataOrderOne.split( ':' )[ 0 ], 10 ), dataOrderOne.split( ':' )[ 1 ] ];
                }
            }
            if ( dataSearch === 'false' ) {
                conf.searching = false;
            }
            if ( dataPaging === 'false' ) {
                conf.paging = false;
            }
            if ( dataInfo === 'false' ) {
                conf.info = false;
            }

            $this.dataTable( conf );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginDataTable();
} );

export { initPluginDataTable };
