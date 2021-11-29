import { $, $wnd, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Tabs Sliding

-------------------------------------------------------------------*/
function initTabsSliding() {
    function recalculateSlideSize( slide, item ) {
        slide.css( { width: item.innerWidth(), height: item.outerHeight(), transform: `translate(${ item.position().left }px, ${ item.position().top }px)` } );
    }

    function prepareSlidingTabs() {
        $( '.rui-tabs-sliding:not(.rui-tabs-sliding-ready)' )
            .addClass( 'rui-tabs-sliding-ready' )
            .each( function() {
                const $this = $( this );
                const $tabsObject = $( '<li class="rui-tabs-slide"></li>' );
                const $tabsLinkActive = $this.find( '.rui-tabs-link.active' );

                $this.prepend( $tabsObject );

                if ( $tabsLinkActive.length ) {
                    recalculateSlideSize( $tabsObject, $tabsLinkActive );
                }
            } );
    }
    prepareSlidingTabs();
    $wnd.on( 'rui-ajax-loaded', prepareSlidingTabs );

    $doc.on( 'click', '.rui-tabs-link', function( e ) {
        e.preventDefault();
        const $this = $( this );
        const $tabsObject = $this.closest( '.rui-tabs-sliding' ).find( '.rui-tabs-slide' );

        if ( $this.length ) {
            recalculateSlideSize( $tabsObject, $this );
        }
    } );
}

export { initTabsSliding };
