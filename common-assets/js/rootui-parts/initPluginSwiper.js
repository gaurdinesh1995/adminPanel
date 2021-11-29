import { $, $wnd, wndW } from './_utility';

/*------------------------------------------------------------------
  Init Plugin Swiper
-------------------------------------------------------------------*/
function initPluginSwiper() {
    if ( typeof Swiper === 'undefined' ) {
        return;
    }
    $( '.rui-swiper:not(.rui-swiper-ready' )
        .addClass( 'rui-swiper-ready' )
        .each( function() {
            const $this = $( this );
            const $container = $this.find( '.swiper-container' );
            const $btnPrev = $this.find( '.swiper-button-prev' );
            const $btnNext = $this.find( '.swiper-button-next' );
            const dataInitialSlide = $this.attr( 'data-swiper-initialSlide' );
            const dataLoop = $this.attr( 'data-swiper-loop' ) === 'true';
            const dataGrabCursor = $this.attr( 'data-swiper-grabCursor' ) === 'true';
            const dataCenter = $this.attr( 'data-swiper-center' ) === 'true';
            const dataAutoHeight = $this.attr( 'data-swiper-autoHeight' );
            const dataBreakpoints = $this.attr( 'data-swiper-breakpoints' );
            const dataAutoplay = parseInt( $this.attr( 'data-swiper-autoplay' ), 10 );
            const dataSpeed = parseInt( $this.attr( 'data-swiper-speed' ), 10 );
            const dataSlides = $this.attr( 'data-swiper-slides' );
            const dataGap = parseInt( $this.attr( 'data-swiper-gap' ), 10 );
            const conf = {};

            conf.keyboard = {
                enabled: true,
            };

            if ( $btnPrev.length && $btnNext.length ) {
                conf.navigation = {
                    nextEl: $btnNext[ 0 ],
                    prevEl: $btnPrev[ 0 ],
                };
            }
            if ( dataInitialSlide ) {
                conf.initialSlide = parseInt( dataInitialSlide, 10 ) || 0;
            }
            if ( dataLoop ) {
                conf.loop = true;
            }
            if ( dataGrabCursor ) {
                conf.grabCursor = true;
            }
            if ( dataCenter ) {
                conf.centeredSlides = true;
            }
            if ( dataAutoHeight ) {
                conf.autoHeight = true;
            }
            if ( dataAutoplay ) {
                conf.autoplay = {
                    delay: dataAutoplay,
                };
            }
            if ( dataSpeed ) {
                conf.speed = dataSpeed;
            }
            if ( dataSlides === 'auto' ) {
                conf.slidesPerView = dataSlides;
            } else {
                conf.slidesPerView = parseInt( dataSlides, 10 );
            }
            if ( dataGap ) {
                conf.spaceBetween = dataGap;
            }
            if ( dataBreakpoints ) {
                let i = 0;
                const breaks = {};
                const points = dataBreakpoints.split( ',' );
                while ( i < dataBreakpoints.split( ',' ).length ) {
                    breaks[ parseInt( points[ i ].split( ':' )[ 0 ], 10 ) ] = { slidesPerView: parseInt( points[ i ].split( ':' )[ 1 ], 10 ) };
                    i++;
                }
                conf.breakpoints = breaks;
            }

            // eslint-disable-next-line
            const swiper = new Swiper ($container[0], conf);

            // Fix resize
            const $yaybar = $( '.yaybar' );
            const yaybarResizeWnd = $yaybar.data( 'yaybar' ).options.resizeWnd;
            $yaybar.on( 'showed.yaybar hidden.yaybar', () => {
                if ( wndW > yaybarResizeWnd ) {
                    swiper.update();
                }
            } );
            if ( wndW < yaybarResizeWnd ) {
                $yaybar.one( 'showed.yaybar hidden.yaybar', () => {
                    swiper.update();
                } );
            }
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginSwiper();
} );

export { initPluginSwiper };
