import {
    $, $wnd, $doc, $body, wndW, debounceResize, bodyOverflow,
} from './_utility';

const options = {
    // duration of animations
    dropdown_toggle_transition: 200,
    sidebar_toggle_transition: 250,

    // set small sidebar when window width < resizeWnd
    resizeWnd: 1200,

    // completely hide sidebar when window width < resizeSmallWnd
    resizeSmallWnd: 576,

    // close sibling dropdowns
    closeSiblings: true,

    // close children dropdowns
    closeChilds: true,

    // use gestures to show / hide menu
    gestures: true,

    menuWrapSelector: '.yay-wrap-menu',
    contentSelector: '.content-wrap',
    toggleSelector: '.yay-toggle',
    submenuSelector: '.yay-submenu',
    submenuToggleSelector: '.yay-sub-toggle',

    htmlOverflowClass: 'yay-html-overflow',
    rtlClass: 'yay-rtl',
    hideClass: 'yay-hide',
    effectOverlayClass: 'yay-overlay',
    effectPushClass: 'yay-push',
    effectShrinkClass: 'yay-shrink',
    overlapContentClass: 'yay-content-overlay',
    staticPositionClass: 'yay-static',
    submenuOpenClass: 'yay-submenu-open',
};

/*------------------------------------------------------------------

  Init Plugin Yaybar

-------------------------------------------------------------------*/
function initPluginYaybar() {
    // Init Yaybar
    if ( typeof window.YAYBAR === 'undefined' ) {
        return;
    }
    const $yaybar = $( '.yaybar' );
    const classShrink = options.effectShrinkClass;
    const classPush = options.effectPushClass;
    const classOverlay = options.effectOverlayClass;

    // Hide Yaybar
    function hideYaybar() {
        $yaybar.data( 'yaybar' ).hideYay();
    }

    // Show Yaybar
    function showYaybar() {
        $yaybar.data( 'yaybar' ).showYay();
    }

    $yaybar.each( function() {
        const Yaybar = new window.YAYBAR();
        const $this = $( this );
        const $submenu = $this.find( '.yay-submenu' );

        $this.data( 'yaybar', Yaybar );
        Yaybar.setOptions( options );
        Yaybar.init( $this );

        // Add Triangle
        if ( $submenu.hasClass( 'dropdown-triangle' ) ) {
            $submenu.append( '<span class="dropdown-menu-triangle"></span>' );
        }

        // Body
        if ( $body.hasClass( 'yay-hide' ) ) {
            hideYaybar();
        }

        // Hide Yaybar when Spotlight is shown
        if ( $body.hasClass( 'rui-spotlightmode' ) ) {
            hideYaybar();
        }

        $this.on( 'show.yaybar hide.yaybar', ( e ) => {
            if ( $this.hasClass( classOverlay ) ) {
                if ( e.type === 'show' ) {
                    bodyOverflow( 1 );
                }
                if ( e.type === 'hide' ) {
                    bodyOverflow( 0 );
                }
            } else {
                bodyOverflow( 0 );
            }
        } );

        // Hide Yaybar on small window width
        let prevEffect = '';
        let isHiddenCompletely = false;
        function maybeResizeYay() {
            if ( ! isHiddenCompletely && wndW < options.resizeSmallWnd ) {
                $this.removeClass( 'yay-hide-to-small' );
                isHiddenCompletely = true;

                setTimeout( debounceResize, 100 );
            } else if ( isHiddenCompletely && wndW >= options.resizeSmallWnd ) {
                $this.addClass( 'yay-hide-to-small' );
                isHiddenCompletely = false;

                setTimeout( debounceResize, 100 );
            }

            if ( wndW < options.resizeWnd ) {
                if ( ! prevEffect ) {
                    if ( $yaybar.hasClass( classShrink ) ) {
                        prevEffect = classShrink;
                    } else if ( $yaybar.hasClass( classPush ) ) {
                        prevEffect = classPush;
                    } else if ( $yaybar.hasClass( classOverlay ) ) {
                        prevEffect = classOverlay;
                    } else {
                        prevEffect = true;
                    }

                    $this.removeClass( `${ classShrink } ${ classPush }` ).addClass( classOverlay );
                    hideYaybar();
                }
            } else if ( prevEffect ) {
                if ( prevEffect !== classOverlay ) {
                    $this.removeClass( `${ classShrink } ${ classPush } ${ classOverlay }` ).addClass( prevEffect );
                    showYaybar();
                }
                prevEffect = '';
            }
        }
        if ( wndW < options.resizeWnd ) {
            maybeResizeYay();
        }
        $wnd.on( 'ready load resize orientationchange', maybeResizeYay );

        // Hide mobile yaybar after ajax.
        $wnd.on( 'rui-ajax-loaded', () => {
            if ( $this.hasClass( classOverlay ) && ! $body.hasClass( 'yay-hide' ) ) {
                hideYaybar();
            }
        } );
    } );

    // Hide Yaybar when Navbar is shown
    $doc.on( 'show.bs.collapse', '.rui-navbar-collapse', () => {
        hideYaybar();
    } );

    // Hide Yaybar when Spotlight is shown
    $doc.on( 'change', 'input.rui-spotlightmode-toggle', () => {
        if ( $body.hasClass( 'rui-spotlightmode' ) ) {
            hideYaybar();
        }
    } );

    // Hide Yaybar when clicking on the Bg (window width < 575)
    $doc.on( 'click', '.rui-yaybar-bg', () => {
        hideYaybar();
    } );

    // Dark
    $doc.on( 'change', 'input.rui-darkSidebar-toggle', () => {
        $yaybar.toggleClass( 'rui-yaybar-dark' );
    } );

    // Static
    function toggleStaticSidebar() {
        $( 'input.rui-staticSidebar-toggle' ).prop( 'checked', $yaybar.hasClass( 'yay-static' ) );
    }
    toggleStaticSidebar();
    $doc.on( 'change', 'input.rui-staticSidebar-toggle', () => {
        $yaybar.toggleClass( 'yay-static' );
        toggleStaticSidebar();
    } );
}

export { initPluginYaybar };
