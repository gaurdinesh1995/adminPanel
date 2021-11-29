import { $, $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Selectize

-------------------------------------------------------------------*/
function initPluginSelectize() {
    if ( typeof $.fn.selectize === 'undefined' ) {
        return;
    }

    const self = this;

    $( '.rui-selectize:not(.rui-selectize-ready)' )
        .addClass( 'rui-selectize-ready' )
        .each( function() {
            const $this = $( this );
            const $element = $this.find( '.rui-selectize-element' );
            const $selectIcon = $this.find( '.rui-selectize-select-icon' );
            const conf = {};

            // Input
            if ( $element.hasClass( 'rui-selectize-input' ) ) {
                conf.delimiter = ',';
                conf.persist = false;
                conf.create = ( input ) => ( {
                    value: input,
                    text: input,
                } );
            }

            // Select
            conf.onInitialize = () => {
                if ( $element.hasClass( 'rui-selectize-select' ) ) {
                    // Custom Select-Icon
                    const selectizeInput = $this.find( '.selectize-input' );
                    if ( $selectIcon.length === 1 && ! selectizeInput.find( '.rui-selectize-select-icon' ).length ) {
                        $selectIcon.appendTo( selectizeInput.addClass( 'rui-selectize-select-icon' ) );
                    }
                }
                if ( $element.hasClass( 'rui-selectize-icon' ) ) {
                    self.initPluginFeather();
                }
            };
            conf.onChange = conf.onInitialize;

            // Icon
            if ( $element.hasClass( 'rui-selectize-icon' ) ) {
                conf.render = {
                    option: ( data ) => {
                        if ( data.selectize ) {
                            return `<div class="option">${ data.selectize } ${ data.text }</div>`;
                        }
                        return `<div class="option">${ data.text }</div>`;
                    },
                };
                conf.render.item = conf.render.option;

                conf.onDropdownOpen = () => {
                    self.initPluginFeather();
                };
            }

            // Github
            if ( $element.hasClass( 'rui-selectize-github' ) ) {
                conf.valueField = 'url';
                conf.labelField = 'name';
                conf.searchField = 'name';
                conf.option = [];
                conf.create = false;
                conf.render = {
                    option: ( item, escape ) => `<div>
                            <span class="title">
                                <span class="name"><i class="icon ${ ( item.fork ? 'fork' : 'source' ) }"></i> ${ escape( item.name ) }</span>
                                <span class="by">${ escape( item.username ) }</span>
                            </span>
                            <span class="description">${ escape( item.description ) }</span>
                            <ul class="meta">
                                ${ ( item.language ? `<li class="language">${ escape( item.language ) }</li>` : '' ) }
                                <li class="watchers"><span>${ escape( item.watchers ) }</span> watchers</li>
                                <li class="forks"><span>${ escape( item.forks ) }</span> forks</li>
                            </ul>
                        </div>`,
                };
                // eslint-disable-next-line object-shorthand
                conf.score = function( search ) {
                    const score = this.getScoreFunction( search );
                    return function( item ) {
                        return score( item ) * ( 1 + Math.min( item.watchers / 100, 1 ) );
                    };
                };
                // eslint-disable-next-line object-shorthand
                conf.load = ( query, callback ) => {
                    if ( ! query.length ) {
                        callback();
                        return;
                    }
                    $.ajax( {
                        url: `https://api.github.com/legacy/repos/search/${ encodeURIComponent( query ) }`,
                        type: 'GET',
                        error: () => {
                            callback();
                        },
                        success: ( res ) => {
                            callback( res.repositories.slice( 0, 10 ) );
                        },
                    } );
                };
            }

            // Init
            $element.selectize( conf );
        } );
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginSelectize();
} );

export { initPluginSelectize };
