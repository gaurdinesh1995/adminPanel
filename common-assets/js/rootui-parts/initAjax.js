import {
    $, $doc, $body, $wnd,
} from './_utility';

/*------------------------------------------------------------------

  Init AJAX Page Load

-------------------------------------------------------------------*/
function initAjax() {
    const self = this;

    // loading state
    const $preloader = $( '.rui-page-preloader' );
    let removeClassTimeout = null;

    self.setLoadingAnimation = ( loading = true ) => {
        clearTimeout( removeClassTimeout );

        if ( loading ) {
            $body.addClass( 'rui-page-loading-state' );
            $preloader.addClass( 'rui-page-preloader-active' );
        } else {
            $body.removeClass( 'rui-page-loading-state' );

            // we need to create timeout, so the preloader will fade in with transition.
            removeClassTimeout = setTimeout( () => {
                $preloader.removeClass( 'rui-page-preloader-active' );
            }, 300 );
        }
    };

    // AJAX
    if ( ! self.options.ajax || typeof window.history === 'undefined' ) {
        return;
    }

    // Check if the page is RootUI layout
    function isRootUiLayout( $newHTML ) {
        return $newHTML.find( '.yaybar' ).length && $newHTML.find( '.rui-page' ).length;
    }

    // Prevent ajax on default pages without sidebar.
    if ( ! isRootUiLayout( $doc ) ) {
        return;
    }

    let currentPage = window.location.href;

    // Return the `href` component of given URL object with the hash portion removed.
    function stripHash( href ) {
        return href.replace( /#.*/, '' );
    }

    // cache pages
    const cache = {};
    function setCache( key = false, data = false ) {
        if ( ! key || ! data || cache[ key ] ) {
            return;
        }
        cache[ key ] = data;
    }
    function getCache( key = false ) {
        if ( ! key || ! cache[ key ] ) {
            return false;
        }
        return cache[ key ];
    }

    // Load dynamic scripts and styles with callback.
    function loadAssets( array, callback ) {
        const loader = ( data, handler ) => {
            switch ( data.type ) {
            case 'style':
                const $link = document.createElement( 'link' );
                $link.setAttribute( 'rel', 'stylesheet' );

                $link.setAttribute( 'href', data.src );

                const $after = data.afterCSS ? $( `link[href="${ data.afterCSS }"]` ) : false;

                if ( $after && $after.length ) {
                    $after.after( $link );
                } else {
                    $( 'head' ).append( $link );
                }

                handler();
                break;
            case 'script':
                const $script = document.createElement( 'script' );

                $script.onload = $script.onreadystatechange = () => {
                    $script.onload = $script.onreadystatechange = null;
                    handler();
                };

                $script.setAttribute( 'src', data.src );

                document.body.appendChild( $script );
                break;
            }
        };
        ( function run() {
            if ( array.length ) {
                loader( array.shift(), run );
            } else if ( callback ) {
                callback();
            }
        }() );
    }

    // parse and render new page content
    function renderNewPage( href = '', $newHTML, cb ) {
        const $page = $( '.rui-page' );
        const $newPage = $newHTML.find( '.rui-page' );
        const $newAdditionalJs = $newHTML.find( '.rui-page-additional-js' );
        const $yaybar = $( '.yaybar-wrap > ul' );
        const $navs = $( '.rui-navbar-top, .rui-navbar-mobile, .rui-navbar-side-icons' );

        const missingAssets = [];

        // Find and insert missing styles
        $newHTML.find( 'link[rel="stylesheet"]' ).each( function() {
            const $this = $( this );
            const linkHref = $this.attr( 'href' );

            if ( ! $( `link[href="${ linkHref }"]` ).length ) {
                missingAssets.push( {
                    src: linkHref,
                    afterCSS: $this.prev( 'link' ).attr( 'href' ),
                    type: 'style',
                } );
            }
        } );

        // Find missing scripts
        $newHTML.find( 'script[src]' ).each( function() {
            const src = $( this ).attr( 'src' );

            if ( ! $( `script[src="${ src }"]` ).length ) {
                missingAssets.push( {
                    src,
                    type: 'script',
                } );
            }
        } );

        // Load missing scripts and styles.
        loadAssets( missingAssets, () => {
            // update page title
            const title = $newHTML.find( 'title:eq(0)' ).text() || document.title;
            $( 'title' ).html( title );

            // remove Yaybar old active classes
            $yaybar.find( '.yay-item-active, .yay-submenu-open' ).each( function() {
                const $item = $( this );
                let removeClass = 'yay-item-active';

                // check if item doesn't have submenu and remove unneeded class
                if ( ! $item.children( '.yay-submenu' ).length ) {
                    removeClass += ' yay-submenu-open';
                }

                $item.removeClass( removeClass );
            } );

            // add Yaybar new active classes
            $yaybar.find( 'li > a' ).each( function() {
                const $item = $( this );
                if ( this.href && this.href === href ) {
                    // add active classes to menu item and it's parents
                    $item.add( $item.closest( '.yay-submenu' ) ).parent( 'li' ).addClass( 'yay-item-active yay-submenu-open' );
                }
            } );

            // remove Navs old active classes
            $navs.find( '.nav-link, .dropdown-item' ).each( function() {
                const $item = $( this );
                let removeClass = 'active';

                // check if item doesn't have submenu and remove unneeded class
                if ( ! $item.children( '.yay-submenu' ).length ) {
                    removeClass += ' yay-submenu-open';
                }

                $item.removeClass( removeClass );
            } );

            // add Navs new active classes
            $navs.find( '.nav-link, .dropdown-item' ).each( function() {
                const $item = $( this );
                if ( this.href && this.href === href ) {
                    // add active classes to menu item and it's parents
                    $item.addClass( 'active' );
                }
            } );

            // update content
            $page.html( $newPage.html() );

            // remove previous ajax request additional js.
            $( '.rui-page-additional-js-ajax' ).remove();

            // insert additional script tags
            $newAdditionalJs.each( function() {
                const $newJS = $( this ).clone();
                $newJS.addClass( 'rui-page-additional-js-ajax' );

                $newJS.appendTo( 'body' );
            } );

            // callback
            if ( typeof self.options.events.onAfterAjax !== 'undefined' ) {
                self.options.events.onAfterAjax( href, $newHTML );
            }

            // event trigger
            $wnd.trigger( 'rui-ajax-loaded', href, $newHTML );

            // scroll to top.
            window.scrollTo( {
                top: 0,
                behavior: 'smooth',
            } );

            cb();
        } );
    }

    function successCallback( href, responseHtml, isReplaceState ) {
        if ( ! responseHtml ) {
            window.location = href;
            return;
        }

        currentPage = href;

        // change <body> tag to <div> with `data-ajax-body` attribute
        responseHtml = responseHtml
            .replace( '<body', '<div data-ajax-body' )
            .replace( '</body>', '</div>' );

        let $newHTML = $( '<div>' ).html( responseHtml );
        const title = $newHTML.find( 'title:eq(0)' ).text() || document.title;

        // check for RootUI layout
        if ( ! isRootUiLayout( $newHTML ) ) {
            window.location = href;
            return;
        }

        // push state for new page
        if ( isReplaceState ) {
            window.history.replaceState( null, title, href );
        } else {
            window.history.pushState( null, title, href );
        }

        // render new content
        renderNewPage( href, $newHTML, () => {
            // remove stored data
            $newHTML.remove();
            $newHTML = null;

            self.setLoadingAnimation( false );
        } );
    }

    function errorCallback( href, jqXHR ) {
        if ( jqXHR.status !== 0 ) {
            // eslint-disable-next-line
            console.log('error', jqXHR);
            self.setLoadingAnimation( false );
        } else {
            window.location = href;
        }
    }

    // load new page
    function ajaxLoadPage( href = false, isReplaceState = false ) {
        // stop when the same urls
        if ( ! href || stripHash( href ) === stripHash( currentPage ) ) {
            return;
        }

        // new ajax request
        $.ajax( {
            url: href,
            beforeSend() {
                // get available cache data
                const availableCache = getCache( href );

                if ( availableCache ) {
                    // loading the response from cache and preventing the ajax call
                    availableCache.then(
                        ( response ) => {
                            successCallback( href, response, isReplaceState );
                        },
                        ( jqXHR ) => {
                            errorCallback( href, jqXHR );
                        },
                    );
                    return false;
                }

                self.setLoadingAnimation( true );

                // saving the promise for the requested url as a proxy for the actual response
                setCache( href, $.Deferred() );

                return true;
            },
            success( response ) {
                // get available cache data
                const availableCache = getCache( href );

                if ( availableCache ) {
                    availableCache.resolve( response );
                }

                successCallback( href, response, isReplaceState );
            },
            error( jqXHR ) {
                errorCallback( href, jqXHR );
            },
        } );
    }

    // Click on links
    $doc.on( 'click', 'a:not(.no-ajax):not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="javascript:"])', ( e ) => {
        const link = e.currentTarget;

        // Middle click, cmd click, and ctrl click should open
        // links in a new tab as normal.
        if ( e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ) {
            return;
        }

        // Ignore cross origin links
        if ( window.location.protocol !== link.protocol || window.location.hostname !== link.hostname ) {
            return;
        }

        // Ignore case when a hash is being tacked on the current URL
        if ( link.href.indexOf( '#' ) > -1 && stripHash( link.href ) === stripHash( currentPage ) ) {
            return;
        }

        // Ignore if local file protocol
        if ( window.location.protocol === 'file:' ) {
            return;
        }

        // Ignore e with default prevented
        if ( e.isDefaultPrevented() ) {
            return;
        }

        // Check for function in options
        if ( typeof self.options.events.onBeforeAjax !== 'undefined' && self.options.events.onBeforeAjax( e ) ) {
            return;
        }

        e.preventDefault();

        ajaxLoadPage( link.href );
    } );

    // on state change
    window.onpopstate = () => {
        ajaxLoadPage( window.location.href, true );
    };
}

export { initAjax };
