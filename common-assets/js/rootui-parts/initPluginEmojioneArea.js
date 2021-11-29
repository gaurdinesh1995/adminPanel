import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin EmojioneArea

-------------------------------------------------------------------*/
function initPluginEmojioneArea() {
    if ( typeof $.fn.emojioneArea === 'undefined' ) {
        return;
    }
    const self = this;

    $( '.rui-messenger:not(.rui-messenger-emojione-ready)' )
        .addClass( 'rui-messenger-emojione-ready' )
        .each( function() {
            const $this = $( this );
            const $textarea = $this.find( '.rui-messenger-textarea' );

            const $picker = $textarea.emojioneArea( {
                tones: false,
                autocomplete: true,
                textcomplete: {
                    maxCount: 5,
                    placement: 'top',
                },
                search: false,
                inline: true,
                hidePickerOnBlur: true,
                shortnames: true,
                pickerPosition: 'top',
                filtersPosition: 'bottom',
                tonesStyle: 'bullet',
                events: {
                    ready: () => {
                        $( '.emojionearea-button-open' ).html( '<span stroke-width="1.5" data-feather="smile" class="rui-icon"></span>' );
                        $( '.emojionearea-button-close' ).html( '<span stroke-width="1.5" data-feather="x" class="rui-icon"></span>' );
                        self.initPluginFeather();
                    },
                },
            } );

            const $pickerData = $picker.data( 'emojioneArea' );

            // Add triangle in dropdown.
            $pickerData.on( 'picker.show', () => {
                const $pickerItem = $pickerData.picker;
                if ( ! $pickerItem.hasClass( 'rui-messenger-picker-complete' ) ) {
                    $pickerItem.append( '<span class="rui-messenger-picker-triangle"></span>' );
                    const pickerTriangle = $pickerItem.find( '.rui-messenger-picker-triangle' );
                    pickerTriangle.offset( { left: $pickerData.button.offset().left - ( $pickerData.button.width() / 2 ) } );

                    $pickerItem.addClass( 'rui-messenger-picker-complete' );
                }
            } );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginEmojioneArea();
} );

export { initPluginEmojioneArea };
