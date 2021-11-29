import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Quill

-------------------------------------------------------------------*/
function initPluginQuill() {
    if ( typeof Quill === 'undefined' ) {
        return;
    }

    $( '.rui-quill:not(.rui-quill-ready)' )
        .addClass( 'rui-quill-ready' )
        .each( function() {
            const $this = $( this );
            const $selectIcon = $this.find( '.rui-quill-select-icon' );
            const $editor = $this.find( '.rui-quill-editor' );
            const $toolbar = $this.find( '.rui-quill-toolbar' );

            // eslint-disable-next-line
            const quill = new Quill($editor.get(0), {
                modules: {
                    toolbar: $toolbar.get( 0 ),
                },
                theme: 'snow',
            } );

            $selectIcon.appendTo( $this.find( '.ql-picker' ) );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginQuill();
} );

export { initPluginQuill };
