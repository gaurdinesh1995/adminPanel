import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Dropzone

-------------------------------------------------------------------*/
function initPluginDropzone() {
    if ( typeof Dropzone === 'undefined' ) {
        return;
    }

    const self = this;

    $( '.rui-dropzone:not(.rui-dropzone-ready)' )
        .addClass( 'rui-dropzone-ready' )
        .each( function() {
            const $this = $( this );
            const removeIcon = $this.find( '.rui-dropzone-remove-icon' )[ 0 ];

            window.Dropzone.autoDiscover = false;
            $this.dropzone( {
                url: $this.attr( 'data-dz-url' ),
                maxFiles: $this.attr( 'data-dz-max-files' ),
                maxFilesize: $this.attr( 'data-dz-max-mb' ),
                addRemoveLinks: $this.attr( 'data-dz-remove-link' ),
                thumbnailWidth: 150,
                thumbnailHeight: 150,
                init() {
                    const selfDz = this;
                    selfDz.on( 'complete', () => {
                        $this.find( '.dz-remove' ).html( removeIcon );
                        self.initPluginFeather();
                    } );
                    $this.find( '.rui-dropzone-images > img' ).each( function() {
                        const $thisImg = $( this );

                        function addedImage( file ) {
                            $( file.previewElement ).find( '.dz-image' ).addClass( 'rui-dropzone-image' ).find( 'img' )
                                .attr( 'src', $thisImg.attr( 'src' ) );
                        }
                        selfDz.on( 'addedfile', ( file ) => {
                            const fileType = String( file.name.split( '.' ).slice( -1 ) );

                            if ( $thisImg.attr( 'data-dz-type' ) === 'empty' ) {
                                addedImage( file );
                            }
                            setTimeout( () => {
                                if ( $thisImg.attr( 'data-dz-type' ) === fileType ) {
                                    addedImage( file );
                                }
                            }, 100 );
                        } );
                    } );
                },
            } );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginDropzone();
} );

export { initPluginDropzone };
