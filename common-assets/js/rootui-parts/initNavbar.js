import {
    $, throttleScroll, bodyOverflow, $body, $doc,
} from './_utility';

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/
function initNavbar() {
    const self = this;
    const $navbar = $( '.rui-navbar' );
    const $navbarTop = $( '.rui-navbar-top' );

    // hide / show
    // add / remove solid color
    const $autohideNav = $body.filter( '.rui-navbar-autohide' );

    if ( $autohideNav.length ) {
        self.throttleScroll( ( type, scroll ) => {
            const start = 400;
            const hideClass = 'rui-navbar-hide';
            const showClass = 'rui-navbar-show';

            // hide / show
            if ( type === 'down' && scroll > start ) {
                $autohideNav.removeClass( showClass ).addClass( hideClass );
            } else if ( type === 'up' || type === 'end' || type === 'start' ) {
                $autohideNav.removeClass( hideClass ).addClass( showClass );
            }
        } );
    }

    // Mobile (show / hide)
    const $navbarMobile = $( '.rui-navbar-mobile' );
    const $navbarCollapse = $navbarMobile.find( '.rui-navbar-collapse' );
    $doc.on( 'show.bs.collapse hide.bs.collapse', '.rui-navbar-collapse', ( e ) => {
        if ( e.type === 'show' ) {
            $navbarMobile.addClass( 'rui-navbar-show' );
            bodyOverflow( 1 );
        }
        if ( e.type === 'hide' ) {
            $navbarMobile.removeClass( 'rui-navbar-show' );
            bodyOverflow( 0 );
        }
    } );
    $doc.on( 'keyup', ( e ) => {
        if ( e.keyCode === 27 && $navbarCollapse.hasClass( 'show' ) && $navbarCollapse.collapse ) {
            $navbarCollapse.collapse( 'hide' );
        }
    } );
    $doc.on( 'click', '.rui-navbar-bg', () => {
        if ( $navbarCollapse.collapse ) {
            $navbarCollapse.collapse( 'hide' );
        }
    } );

    // Scroll
    if ( $navbarTop.hasClass( 'rui-navbar-fixed' ) || $navbarTop.hasClass( 'rui-navbar-sticky' ) ) {
        throttleScroll( ( type, scroll ) => {
            if ( scroll > 200 ) {
                $navbarTop.addClass( 'rui-navbar-scroll' );
            } else {
                $navbarTop.removeClass( 'rui-navbar-scroll' );
            }
        } );
    }

    // Dark
    function toggleDarkNavbar() {
        // don't run if NightMode
        if ( self.isNightMode() ) {
            return;
        }

        $( 'input.rui-darkNavbar-toggle' ).prop( 'checked', $navbar.hasClass( 'rui-navbar-dark' ) );

        let mode = '';
        if ( $navbar.hasClass( 'rui-navbar-dark' ) ) {
            mode = 'night';
        } else {
            mode = 'day';
        }
        $( `.rui-navbar [data-src-${ mode }]` ).each( function() {
            const $img = $( this );
            $img.attr( 'src', $img.attr( `data-src-${ mode }` ) );
        } );
    }
    toggleDarkNavbar();
    $doc.on( 'change', 'input.rui-darkNavbar-toggle', () => {
        $navbar.toggleClass( 'rui-navbar-dark' );
        toggleDarkNavbar();
    } );
}

export { initNavbar };
