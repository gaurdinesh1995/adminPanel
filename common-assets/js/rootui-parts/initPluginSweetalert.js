import { $, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Sweetalert

-------------------------------------------------------------------*/
function initPluginSweetalert() {
    $doc.on( 'click', '.rui-sweetalert', function() {
        if ( typeof swal === 'undefined' ) {
            return;
        }

        const $this = $( this );
        const dataType = $this.attr( 'data-swal-type' );
        const dataTitle = $this.attr( 'data-swal-title' );
        const dataContent = $this.attr( 'data-swal-content' );

        window.swal.fire( dataTitle, dataContent, dataType );
    } );
}

export { initPluginSweetalert };
