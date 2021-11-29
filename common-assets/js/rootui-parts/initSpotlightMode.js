import { $, $doc, $body } from './_utility';

/*------------------------------------------------------------------

  Init Spotlight Mode

-------------------------------------------------------------------*/
function initSpotlightMode() {
    function toggleSpotlightMode() {
        $( 'input.rui-spotlightmode-toggle' ).prop( 'checked', $body.hasClass( 'rui-spotlightmode' ) );
    }
    toggleSpotlightMode();

    $doc.on( 'change', 'input.rui-spotlightmode-toggle', () => {
        $body.toggleClass( 'rui-spotlightmode' );
        toggleSpotlightMode();
    } );
}

export { initSpotlightMode };
