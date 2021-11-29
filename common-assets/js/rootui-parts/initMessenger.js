import { $, $wnd, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Messenger

-------------------------------------------------------------------*/
function initMessenger() {
    function prepareMessenger() {
        $( '.rui-messenger:not(.rui-messenger-ready)' )
            .addClass( 'rui-messenger-ready' )
            .each( function() {
                const $this = $( this );
                const $messengerChat = $this.find( '.rui-messenger-chat' );

                // Scroll Down
                function scrollDown() {
                    const $messengerBody = $messengerChat.find( '.rui-messenger-body' );
                    const $messengerOs = $messengerChat.find( '.os-viewport' );

                    if ( $messengerOs.length ) {
                        const sDown = $messengerOs.find( '.os-content' ).innerHeight() - $messengerOs.innerHeight();
                        $messengerOs.scrollTop( sDown );
                    } else {
                        const sDown = $messengerBody.add( '> div' ).innerHeight() - $messengerBody.innerHeight();
                        $messengerBody.scrollTop( sDown );
                    }
                }
                setTimeout( () => {
                    scrollDown();
                }, 100 );

                if ( $this.hasClass( 'rui-messenger-mini' ) ) {
                    $doc.on( 'afterClose.fb', () => {
                        $this.removeClass( 'open show' );
                        $messengerChat.removeClass( 'open show' );
                    } );
                }

                // Convert emoji
                function convertEmoji( $items ) {
                    if ( typeof window.emojione !== 'undefined' ) {
                        $items.each( function() {
                            const $thisMessage = $( this );
                            $thisMessage.html( window.emojione.toImage( $thisMessage.html() ) );
                        } );
                    }
                }
                convertEmoji( $this.find( '.rui-messenger-message li' ) );

                // Add Message
                function addMessage() {
                    const pickerData = $this.find( '.rui-messenger-textarea' ).data( 'emojioneArea' );

                    if ( ! pickerData ) {
                        return;
                    }

                    let $messageLast = $messengerChat.find( '.rui-messenger-message:last' );
                    const $blockTime = $messageLast.find( '.rui-messenger-message-time' ).text();
                    const $blockStructure = $messengerChat.find( '.rui-messenger-message-structure' );

                    const textData = pickerData.getText();

                    if ( textData && $blockStructure.length ) {
                        const date = new Date();
                        let timeHours = date.getHours();
                        let timeMinutes = date.getMinutes();
                        if ( timeHours < 10 ) {
                            timeHours = `0${ timeHours }`;
                        }
                        if ( timeMinutes < 10 ) {
                            timeMinutes = `0${ timeMinutes }`;
                        }
                        const time = `${ timeHours }:${ timeMinutes }`;

                        // prepare new message container
                        // for same time.
                        if ( $blockTime === time ) {
                            $messageLast.find( 'ul > li:last' ).after( '<li></li>' ).next();

                        // for different time.
                        } else {
                            $messageLast.after( $blockStructure.clone() );
                            $messageLast = $messengerChat.find( '.rui-messenger-message:last' );
                            $messageLast.removeClass( 'rui-messenger-message-structure' );
                            $messageLast.find( '.rui-messenger-message-time' ).text( time );
                        }

                        // insert message.
                        const $messageLastLi = $messageLast.find( 'ul > li:last' );
                        $messageLastLi.html( textData );
                        convertEmoji( $messageLastLi );

                        scrollDown();

                        // Clean textarea
                        pickerData.setText( '' );
                    }
                }

                $messengerChat.find( '.rui-messenger-send' ).on( 'click', ( e ) => {
                    e.preventDefault();
                    addMessage();
                } );
                $this.on( 'keyup', ( e ) => {
                    if ( e.keyCode === 13 ) {
                        addMessage();
                    }
                } );
            } );
    }
    prepareMessenger();
    $wnd.on( 'rui-ajax-loaded', prepareMessenger );

    $doc.on( 'click', '.rui-messenger-item, .rui-messenger-back', function( e ) {
        e.preventDefault();
        const $this = $( this );
        const $messenger = $this.closest( '.rui-messenger' );
        const $messengerChat = $messenger.find( '.rui-messenger-chat' );

        // Open
        if ( $this.hasClass( 'rui-messenger-item' ) ) {
            const $messengerBody = $messengerChat.find( '.rui-messenger-body' );
            const $messengerOs = $messengerChat.find( '.os-viewport' );

            $messenger.addClass( 'open show' );
            $messengerChat.addClass( 'open show' );

            if ( $messengerOs.length ) {
                const $osContent = $messengerOs.find( '.os-content' );
                const sDown = $osContent.innerHeight() - $messengerOs.innerHeight();
                $messengerOs.scrollTop( sDown );

                if ( $osContent.css( 'border-right' ) ) {
                    $messengerOs.find( '.os-content' ).css( 'border-right', '' );
                }
            } else {
                const sDown = $messengerBody.add( '> div' ).innerHeight() - $messengerBody.innerHeight();
                $messengerBody.scrollTop( sDown );
            }
        }

        // Back
        if ( $this.hasClass( 'rui-messenger-back' ) ) {
            $messenger.removeClass( 'open' );
            $messengerChat.removeClass( 'open' );
            setTimeout( () => {
                $messenger.removeClass( 'show' );
                $messengerChat.removeClass( 'show' );
            }, 150 );
        }
    } );
}

export { initMessenger };
