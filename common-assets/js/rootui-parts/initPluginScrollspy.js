import { $, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Scrollspy

-------------------------------------------------------------------*/
function initPluginScrollspy() {
    if ( typeof $.fn.scrollspy === 'undefined' ) {
        return;
    }
    const $navbarTop = $( '.rui-navbar-top' );

    $doc.on( 'click', '.rui-page-sidebar .nav-link', function( e ) {
        e.preventDefault();

        if ( $( this ).attr( 'href' ) !== '' ) {
            const $htmlBody = $( 'html, body' );
            if ( $navbarTop.length ) {
                $htmlBody.animate( {
                    scrollTop: $( $.attr( this, 'href' ) ).offset().top - $navbarTop.innerHeight(),
                }, 500 );
            } else {
                $htmlBody.animate( {
                    scrollTop: $( $.attr( this, 'href' ) ).offset().top,
                }, 500 );
            }
        }
    } );
}

export { initPluginScrollspy };
