/* eslint-disable */
/*!-----------------------------------------------------------------
    Name: Yaybar - Advanced Sidebar for Bootstrap
    Version: 2.0.1
    Author: nK,
    Website: https://nkdev.info/
    Purchase: https://codecanyon.net/item/yay-advanced-sidebar-for-bootstrap/10702487?ref=_nK
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from CodeCanyon (the above link) in order to legally use the plugin for your project.
    Copyright 2019.
-------------------------------------------------------------------*/
/******/ ( function( modules ) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	const installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__( moduleId ) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if ( installedModules[ moduleId ] ) {
            /******/ 			return installedModules[ moduleId ].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		const module = installedModules[ moduleId ] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {},
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[ moduleId ].call( module.exports, module, module.exports, __webpack_require__ );
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function( exports, name, getter ) {
        /******/ 		if ( ! __webpack_require__.o( exports, name ) ) {
            /******/ 			Object.defineProperty( exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter,
                /******/ 			} );
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function( module ) {
        /******/ 		const getter = module && module.__esModule ?
        /******/ 			function getDefault() {
                return module.default;
            } :
        /******/ 			function getModuleExports() {
                return module;
            };
        /******/ 		__webpack_require__.d( getter, 'a', getter );
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function( object, property ) {
        return Object.prototype.hasOwnProperty.call( object, property );
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = '';
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__( __webpack_require__.s = 5 );
/******/ }
/************************************************************************/
/******/ ( [
/* 0 */,
    /* 1 */,
    /* 2 */,
    /* 3 */,
    /* 4 */,
    /* 5 */
    /***/ ( function( module, exports, __webpack_require__ ) {
        module.exports = __webpack_require__( 6 );
        /***/ } ),
    /* 6 */
    /***/ ( function( module, exports, __webpack_require__ ) {
        'use strict';

        const _createClass = ( function() {
            function defineProperties( target, props ) {
                for ( let i = 0; i < props.length; i++ ) {
                    const descriptor = props[ i ]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ( 'value' in descriptor ) {
                        descriptor.writable = true;
                    } Object.defineProperty( target, descriptor.key, descriptor );
                }
            } return function( Constructor, protoProps, staticProps ) {
                if ( protoProps ) {
                    defineProperties( Constructor.prototype, protoProps );
                } if ( staticProps ) {
                    defineProperties( Constructor, staticProps );
                } return Constructor;
            };
        }() );

        const _throttleDebounce = __webpack_require__( 7 );

        const _setOptions2 = __webpack_require__( 8 );

        function _classCallCheck( instance, Constructor ) {
            if ( ! ( instance instanceof Constructor ) ) {
                throw new TypeError( 'Cannot call a class as a function' );
            }
        }

        const $ = window.jQuery;
        const $body = $( 'body' );
        const $html = $( 'html' );
        const $window = $( window );

        /*------------------------------------------------------------------

  Yaybar Class

-------------------------------------------------------------------*/

        const YAYBAR = ( function() {
            function YAYBAR() {
                _classCallCheck( this, YAYBAR );

                const self = this;

                self.windowResize = ( 0, _throttleDebounce.throttle )( 200, self.windowResize );
            }

            _createClass( YAYBAR, [ {
                key: 'init',
                value: function init( $yay ) {
                    // prt:sc:dm

                    const self = this;

                    self.$yay = $yay;
                    self.$content = $( self.options.contentSelector );
                    self.$yayWrap = $yay.find( self.options.menuWrapSelector );

                    if ( ! self.$yayWrap.length ) {
                        self.$yayWrap = $yay;
                    }

                    // set true when first time clicked on toggle button
                    self.changed = false;

                    // init OS
                    self.initOverlayScrollbars();

                    if ( self.showType() === 'push' && self.isShow() ) {
                        $html.addClass( self.options.htmlOverflowClass );
                    }

                    // init events.
                    self.initEvents();

                    self.windowResize();

                    self.triggerEvent( 'init' );

                    return self;
                },
            }, {
                key: 'initEvents',
                value: function initEvents() {
                    const self = this;

                    self.triggerEvent( 'initEvents' );

                    // sidebar toggle
                    $body.on( 'click.yaybar', self.options.toggleSelector, function( e ) {
                        e.preventDefault();
                        e.stopPropagation();
                        self.toggleYay();
                    } );

                    // on window resize - set small sidebar
                    $window.on( 'resize.yaybar', function() {
                        self.windowResize();
                    } );

                    // hide sidebar when push content overlay
                    self.$content.on( 'click.yaybar', function() {
                        if ( self.isHideOnContentClick() ) {
                            self.hideYay();
                        }
                    } );

                    // toggle sub menus
                    self.$yay.on( 'click.yaybar', self.options.submenuToggleSelector, function( e ) {
                        e.preventDefault();
                        self.toggleSub( $( this ) );
                    } );

                    // use gestures to show / hide menu
                    if ( self.options.gestures ) {
                        let touchStart = 0;
                        let startPoint = 0; // x position
                        let endPoint = 0; // x position

                        // on touch start
                        $window.on( 'touchstart.yaybar', function( e ) {
                            startPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;
                            endPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;
                            touchStart = 1;
                        } );

                        // on swipe start
                        $window.on( 'touchmove.yaybar', function( e ) {
                            if ( touchStart ) {
                                endPoint = ( e.originalEvent.touches ? e.originalEvent.touches[ 0 ] : e ).pageX;
                            }
                        } );

                        // on swipe end
                        $window.on( 'touchend.yaybar', function() {
                            if ( touchStart ) {
                                const rtl = $html.hasClass( self.options.rtlClass );
                                let resultSwipe = startPoint - endPoint;

                                touchStart = 0;

                                // swipe min width 100px
                                if ( Math.abs( resultSwipe ) < 100 ) {
                                    return;
                                }

                                // change values if rtl
                                if ( rtl ) {
                                    resultSwipe *= -1;
                                    startPoint = $window.width() - startPoint;
                                }

                                // from left to right
                                if ( resultSwipe < 0 && startPoint < 40 ) {
                                    // show only when touch started from left corner
                                    if ( startPoint < 40 ) {
                                        self.showYay();
                                    }

                                    // from right to left
                                } else {
                                    self.hideYay();
                                }
                            }
                        } );
                    }

                    self.triggerEvent( 'initedEvents' );
                },
            }, {
                key: 'triggerEvent',
                value: function triggerEvent( name, data ) {
                    const self = this;

                    self.$yay.trigger( name + '.yaybar', data );
                },
            }, {
                key: 'destroy',
                value: function destroy() {
                    const self = this;

                    // off events
                    $body.off( '.yaybar' );
                    $window.off( '.yaybar' );
                    self.$content.off( '.yaybar' );
                    self.$yay.off( '.yaybar' );

                    self.triggerEvent( 'destroy' );
                },
            }, {
                key: 'isShow',
                value: function isShow() {
                    const self = this;
                    return ! $body.hasClass( self.options.hideClass );
                },

                // check show type
                // eslint-disable-next-line

            }, {
                key: 'showType',
                value: function showType() {
                    const self = this;

                    if ( self.$yay.hasClass( self.options.effectOverlayClass ) ) {
                        return 'overlay';
                    }
                    if ( self.$yay.hasClass( self.options.effectPushClass ) ) {
                        return 'push';
                    }
                    if ( self.$yay.hasClass( self.options.effectShrinkClass ) ) {
                        return 'shrink';
                    }
                },

                // check if hide on content click

            }, {
                key: 'isHideOnContentClick',
                value: function isHideOnContentClick() {
                    const self = this;

                    return self.$yay.hasClass( self.options.overlapContentClass );
                },

                // check if sidebar static position

            }, {
                key: 'isStatic',
                value: function isStatic() {
                    const self = this;

                    return self.$yay.hasClass( self.options.staticPositionClass );
                },
            }, {
                key: 'toggleYay',
                value: function toggleYay( type ) {
                    const self = this;
                    const show = ! self.isShow();

                    if ( type ) {
                        if ( type === 'show' && ! show || type === 'hide' && show ) {
                            return;
                        }
                    }

                    self.options.changed = true;

                    if ( show ) {
                        self.showYay();
                    } else {
                        self.hideYay();
                    }
                },
            }, {
                key: 'showYay',
                value: function showYay() {
                    const self = this;

                    $body.removeClass( self.options.hideClass );

                    if ( self.showType() === 'push' /* && !self.isStatic() */ ) {
                        $html.addClass( self.options.htmlOverflowClass );
                    }

                    // restore OS on normal sidebar after end animation (300ms)
                    self.initOverlayScrollbars();

                    self.triggerEvent( 'show' );

                    setTimeout( function() {
                        // resize for charts reinit
                        $window.resize();

                        self.triggerEvent( 'showed' );
                    }, self.options.sidebar_toggle_transition );
                },
            }, {
                key: 'hideYay',
                value: function hideYay() {
                    const self = this;

                    $body.addClass( self.options.hideClass );

                    // destroy OS on hidden sidebar
                    self.destroyOverlayScrollbars();

                    self.triggerEvent( 'hide' );

                    // resize for charts reinit
                    setTimeout( function() {
                        if ( self.showType() === 'push' /* && !self.isStatic() */ ) {
                            $html.removeClass( self.options.htmlOverflowClass );
                        }
                        $window.resize();

                        self.triggerEvent( 'hidden' );
                    }, self.options.sidebar_toggle_transition );
                },

                // toggle submenu [open or close]

            }, {
                key: 'toggleSub',
                value: function toggleSub( toggle ) {
                    const self = this;

                    const toggleParent = toggle.parent();
                    const subMenu = toggleParent.children( self.options.submenuSelector );
                    const opened = toggleParent.hasClass( self.options.submenuOpenClass );

                    if ( ! subMenu.length ) {
                        return;
                    }

                    // close
                    if ( opened ) {
                        self.closeSub( subMenu );

                        // open
                    } else {
                        self.openSub( subMenu, toggleParent );
                    }
                },

                // close submenus

            }, {
                key: 'closeSub',
                value: function closeSub( subMenu ) {
                    const self = this;

                    subMenu.css( 'display', 'block' ).stop().slideUp( self.options.dropdown_toggle_transition, 'swing', function() {
                        // close childs
                        if ( self.options.closeChilds ) {
                            subMenu.find( self.options.submenuToggleSelector ).parent().removeClass( self.options.submenuOpenClass );
                            subMenu.find( self.options.submenuToggleSelector ).next().attr( 'style', '' );
                        }

                        self.triggerEvent( 'closedSub', [ subMenu ] );
                    } );

                    subMenu.parent().removeClass( self.options.submenuOpenClass );

                    self.triggerEvent( 'closeSub', [ subMenu ] );
                },

                // open submenus

            }, {
                key: 'openSub',
                value: function openSub( subMenu, toggleParent ) {
                    const self = this;

                    subMenu.css( 'display', 'none' ).stop().slideDown( self.options.dropdown_toggle_transition, 'swing', function() {
                        self.triggerEvent( 'openedSub', [ subMenu ] );
                    } );
                    toggleParent.addClass( self.options.submenuOpenClass );

                    self.triggerEvent( 'openSub', [ subMenu ] );

                    // close siblings
                    if ( self.options.closeSiblings ) {
                        self.closeSub( toggleParent.siblings( '.' + self.options.submenuOpenClass ).children( self.options.submenuSelector ) );
                    }
                },

                // on resize window and on start

            }, {
                key: 'windowResize',
                value: function windowResize() {
                    const self = this;

                    // if user currently changed size of sidebar, stop change it
                    if ( ! self.options.changed ) {
                        if ( $window.width() < self.options.resizeWnd ) {
                            self.toggleYay( 'hide' );
                        }
                    }
                },
            }, {
                key: 'setOptions',
                value: function setOptions( newOpts ) {
                    return _setOptions2.setOptions.call( this, newOpts );
                },
            }, {
                key: 'initOverlayScrollbars',
                value: function initOverlayScrollbars() {
                    const self = this;

                    if ( $.fn.overlayScrollbars ) {
                        self.$yayWrap.overlayScrollbars( {
                            scrollbars: {
                                autoHide: 'leave',
                                autoHideDelay: 400,
                            },
                        } );

                        self.triggerEvent( 'initOverlayScrollbars' );
                    }
                },
            }, {
                key: 'destroyOverlayScrollbars',
                value: function destroyOverlayScrollbars() {
                    const self = this;

                    if ( $.fn.overlayScrollbars ) {
                        const instance = self.$yayWrap.overlayScrollbars();

                        if ( instance ) {
                            instance.destroy();
                        }

                        self.triggerEvent( 'destroyOverlayScrollbars' );
                    }
                },
            } ] );

            return YAYBAR;
        }() );

        window.YAYBAR = YAYBAR;
        /***/ } ),
    /* 7 */
    /***/ ( function( module, exports, __webpack_require__ ) {
        'use strict';

        Object.defineProperty( exports, '__esModule', {
            value: true,
        } );
        /* eslint-disable no-undefined,no-param-reassign,no-shadow */

        /**
         * Throttle execution of a function. Especially useful for rate limiting
         * execution of handlers on events like resize and scroll.
         *
         * @param  {number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
         * @param  {boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
         *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
         *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
         *                                    the internal counter is reset)
         * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
         *                                    to `callback` when the throttled-function is executed.
         * @param  {boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
         *                                    schedule `callback` to execute after `delay` ms.
         *
         * @return {Function}  A new, throttled, function.
         */
        function throttle( delay, noTrailing, callback, debounceMode ) {
            /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
            let timeoutID;
            let cancelled = false; // Keep track of the last time `callback` was executed.

            let lastExec = 0; // Function to clear existing timeout

            function clearExistingTimeout() {
                if ( timeoutID ) {
                    clearTimeout( timeoutID );
                }
            } // Function to cancel next exec

            function cancel() {
                clearExistingTimeout();
                cancelled = true;
            } // `noTrailing` defaults to falsy.

            if ( typeof noTrailing !== 'boolean' ) {
                debounceMode = callback;
                callback = noTrailing;
                noTrailing = undefined;
            }
            /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */

            function wrapper() {
                const self = this;
                const elapsed = Date.now() - lastExec;
                const args = arguments;

                if ( cancelled ) {
                    return;
                } // Execute `callback` and update the `lastExec` timestamp.

                function exec() {
                    lastExec = Date.now();
                    callback.apply( self, args );
                }
                /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */

                function clear() {
                    timeoutID = undefined;
                }

                if ( debounceMode && ! timeoutID ) {
                    /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
                    exec();
                }

                clearExistingTimeout();

                if ( debounceMode === undefined && elapsed > delay ) {
                    /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
                    exec();
                } else if ( noTrailing !== true ) {
                    /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
                    timeoutID = setTimeout( debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay );
                }
            }

            wrapper.cancel = cancel; // Return the wrapper function.

            return wrapper;
        }

        /* eslint-disable no-undefined */
        /**
         * Debounce execution of a function. Debouncing, unlike throttling,
         * guarantees that a function is only executed a single time, either at the
         * very beginning of a series of calls, or at the very end.
         *
         * @param  {number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
         * @param  {boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
         *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
         *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
         * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
         *                                  to `callback` when the debounced-function is executed.
         *
         * @return {Function} A new, debounced function.
         */

        function debounce( delay, atBegin, callback ) {
            return callback === undefined ? throttle( delay, atBegin, false ) : throttle( delay, callback, atBegin !== false );
        }

        exports.throttle = throttle;
        exports.debounce = debounce;
        /***/ } ),
    /* 8 */
    /***/ ( function( module, exports, __webpack_require__ ) {
        'use strict';

        Object.defineProperty( exports, '__esModule', {
            value: true,
        } );
        const $ = window.jQuery;

        /*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/
        function setOptions( newOpts ) {
            const self = this;

            self.options = $.extend( {}, self.options, newOpts );
        }

        exports.setOptions = setOptions;
        /***/ } ),
/******/ ] ) );
