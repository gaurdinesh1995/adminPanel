import { $, $doc } from './_utility';

/*------------------------------------------------------------------

  Night Mode

-------------------------------------------------------------------*/
function initNightMode() {
    const self = this;
    const $link = $( 'link.rui-nightmode-link' );

    // is night mode
    self.isNightMode = () => $link.attr( 'media' ) !== '(night)';

    // toggle night mode.
    self.toggleNightMode = ( mode = false ) => {
        const $checkbox = $( 'input.rui-nightmode-toggle' );

        // if mode is not specified, toggle it.
        if ( ! mode ) {
            mode = self.isNightMode() ? 'day' : 'night';
        }

        switch ( mode ) {
        case 'night':
            $link.attr( 'media', 'all' );
            $checkbox.prop( 'checked', true );
            break;
        case 'day':
            $link.attr( 'media', '(night)' );
            $checkbox.prop( 'checked', false );
            break;
        // no default
        }

        // all images with data-src-night, data-src-day
        $( `[data-src-${ mode }]` ).each( function() {
            const $img = $( this );
            $img.attr( 'src', $img.attr( `data-src-${ mode }` ) );
        } );
    };

    // prepare night mode on page load.
    const defaultState = self.isNightMode() ? 'night' : 'day';
    self.toggleNightMode( defaultState );

    // night mode checkbox check.
    $doc.on( 'change', 'input.rui-nightmode-toggle', () => {
        self.toggleNightMode();
    } );
}

export { initNightMode };
