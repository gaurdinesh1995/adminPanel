import {
    $, $wnd, $doc, wndW, wndH,
} from './_utility';

/*------------------------------------------------------------------

  Init Dropdown

-------------------------------------------------------------------*/
function initDropdown() {
    // dropdown on hover.
    $doc.on( 'mouseenter mouseleave', '.dropdown.dropdown-hover', function( e ) {
        const $this = $( this );

        if ( e.type === 'mouseenter' ) {
            $this.children( '.dropdown-item' ).dropdown( 'toggle' );

            if ( $this.parents( '.dropdown-hover' ).length ) {
                $this.parents( '.dropdown-menu' ).dropdown( 'show' );
            }
        }
        if ( e.type === 'mouseleave' ) {
            $this.children( '.dropdown-item' ).dropdown( 'toggle' );

            if ( $this.parents( '.dropdown-hover' ).length ) {
                $this.parents( '.dropdown-menu' ).dropdown( 'show' );
            }
        }
    } );
    $doc.on( 'show.bs.dropdown', '.dropdown', function() {
        const $this = $( this );
        const $menu = $this.children( '.dropdown-menu' );

        if ( $this.hasClass( 'dropdown-hover' ) ) {
            $this.addClass( 'hover' );
            $menu.addClass( 'hover' );
        } else {
            $this.addClass( 'focus' );
            $menu.addClass( 'focus' );
        }
    } );
    $doc.on( 'hidden.bs.dropdown', '.dropdown', function() {
        const $this = $( this );
        const $menu = $this.children( '.dropdown-menu' );

        if ( $this.hasClass( 'dropdown-hover' ) ) {
            $this.removeClass( 'hover' );
            $menu.removeClass( 'hover' );
        } else {
            $this.removeClass( 'focus' );
            $menu.removeClass( 'focus' );
        }
        if ( $this.hasClass( 'dropdown-autoposition' ) ) {
            $this.removeClass( 'dropdown-autoposition' );
            $this.children( '.dropdown-item' ).dropdown( 'dispose' );
        }
    } );

    // Fix position
    $doc.on( 'shown.bs.dropdown', '.dropdown', function() {
        const $this = $( this );
        const $menu = $this.children( '.dropdown-menu' );
        const $item = $this.children( '.dropdown-item' );
        const $triangle = $menu.children( '.dropdown-menu-triangle' );

        $menu.css( 'margin-left', '' );
        $triangle.css( 'margin-left', '' );

        if ( ( $menu.offset().left + $menu.outerWidth() ) > wndW ) {
            $this.addClass( 'dropdown-autoposition' );
            $item.dropdown( 'update' );
            $menu.css( 'margin-left', ( ( $menu.offset().left + $menu.outerWidth() ) - ( wndW - 27 ) ) / -1 );

            if ( $triangle.length ) {
                $triangle.css( 'margin-left', ( $item.offset().left - $triangle.offset().left ) + ( ( $item.outerWidth() / 2 ) - ( $triangle.outerWidth() / 2 ) ) );
            }
        }

        // Nested dropdown
        setTimeout( () => {
            if ( $this.parents( '.dropdown-hover' ).length ) {
                // Default on right
                $menu.attr( 'x-placement', 'right-start' ).css( { transform: '', left: '', top: '' } );

                if ( ( $menu.offset().top + $menu.outerHeight() ) > wndH ) {
                    $menu.attr( 'x-placement', 'right-end' );
                }
                // Left
                if ( ( $menu.offset().left + $menu.outerWidth() ) > wndW ) {
                    $menu.attr( 'x-placement', 'left-start' );

                    if ( ( $menu.offset().top + $menu.outerHeight() ) > wndH ) {
                        $menu.attr( 'x-placement', 'left-end' );
                    }
                }
            }
        }, 10 );
    } );

    // prevent dropdown close when click inside
    $doc.on( 'click', '.dropdown-keep-open .dropdown-menu', ( e ) => {
        e.stopPropagation();
    } );

    // create triangle
    function createTriangle() {
        $( '.dropdown:not(.rui-dropdown-triangle-ready)' )
            .addClass( 'rui-dropdown-triangle-ready' )
            .each( function() {
                const $this = $( this );
                const $menu = $this.children( '.dropdown-menu' );

                if ( $this.hasClass( 'dropdown-triangle' ) ) {
                    $menu.append( '<span class="dropdown-menu-triangle"></span>' );
                }
            } );
    }
    createTriangle();
    $wnd.on( 'rui-ajax-loaded', createTriangle );
}

export { initDropdown };
