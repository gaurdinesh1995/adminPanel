import { $, $doc, $body } from './_utility';

/*------------------------------------------------------------------

  Init Spotlight Mode

-------------------------------------------------------------------*/
function initSectionLines() {
    function toggleSectionLines() {
        $( 'input.rui-sectionLines-toggle' ).prop( 'checked', $body.hasClass( 'rui-section-lines' ) );
    }
    toggleSectionLines();

    $doc.on( 'change', 'input.rui-sectionLines-toggle', () => {
        $body.toggleClass( 'rui-section-lines' );
        toggleSectionLines();
    } );
}

export { initSectionLines };
