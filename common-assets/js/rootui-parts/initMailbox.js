import { $, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Mailbox

-------------------------------------------------------------------*/
function initMailbox() {
    $doc.on( 'click', '.rui-mailbox-item, .rui-mailbox-content-back', function( e ) {
        e.preventDefault();
        const $this = $( this );
        const $mailbox = $this.closest( '.rui-mailbox' );
        const $content = $mailbox.find( '.rui-mailbox-content' );

        if ( $this.hasClass( 'rui-mailbox-item' ) ) {
            $mailbox.addClass( 'open show' );
            $content.addClass( 'open show' );
        }
        if ( $this.hasClass( 'rui-mailbox-content-back' ) ) {
            $mailbox.removeClass( 'open' );
            $content.removeClass( 'open' );

            setTimeout( () => {
                $mailbox.removeClass( 'show' );
                $content.removeClass( 'show' );
            }, 150 );
        }
    } );
}

export { initMailbox };
