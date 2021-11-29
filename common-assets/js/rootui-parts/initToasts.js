import { $, $doc, $body } from './_utility';

/*------------------------------------------------------------------

  Init Toasts

-------------------------------------------------------------------*/
function initToasts() {
    // Create container
    const $toastsContainer = $( '<div class="rui-toast-container"></div>' ).appendTo( $body );

    // Paste toast in container
    function pasteNotice( $item ) {
        return $item.clone().removeClass( 'hide' ).prependTo( $toastsContainer );
    }

    // Show on startup
    $( '.rui-toast[data-toast-show-on-startup]' ).each( function() {
        const $pastedToast = pasteNotice( $( this ) );
        $pastedToast.toast( 'show' );
    } );

    // Show on click
    $doc.on( 'click', '.rui-toast-show', function( e ) {
        e.preventDefault();
        const $this = $( this );
        const $toast = $( $this.attr( 'href' ) );

        if ( $toast && $toast.length ) {
            const $pastedToast = pasteNotice( $toast );
            $pastedToast.toast( 'show' );
        }
    } );
}

export { initToasts };
