import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init DateRangePicker

-------------------------------------------------------------------*/
function initPluginDateRangePicker() {
    if ( typeof $.fn.daterangepicker === 'undefined' ) {
        return;
    }

    const self = this;

    $( '.rui-daterange:not(.rui-daterange-ready)' )
        .addClass( 'rui-daterange-ready' )
        .each( function() {
            const $this = $( this );
            const dataFormat = $this.attr( 'data-daterangepicker-format' );

            $this.daterangepicker( {
                autoUpdateInput: false,
                locale: {
                    cancelLabel: 'Clear',
                },
            } );
            $this.on( 'apply.daterangepicker', ( ev, picker ) => {
                if ( dataFormat ) {
                    $this.val( `${ picker.startDate.format( dataFormat ) } - ${ picker.endDate.format( dataFormat ) }` );
                } else {
                    $this.val( `${ picker.startDate.format( 'MM/DD/YYYY' ) } - ${ picker.endDate.format( 'MM/DD/YYYY' ) }` );
                }
            } );
            $this.on( 'cancel.daterangepicker', () => {
                $this.val( '' );
            } );
            $this.on( 'showCalendar.daterangepicker', () => {
                $( '<span stroke-width="1.5" data-feather="chevron-left" class="rui-icon"></span>' ).appendTo( $( '.daterangepicker' ).find( '.prev, .next' ) );
                self.initPluginFeather();
            } );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginDateRangePicker();
} );

export { initPluginDateRangePicker };
