import { $wnd } from './_utility';

/*------------------------------------------------------------------

  Init Plugin Feather

-------------------------------------------------------------------*/
function initPluginFeather() {
    if ( typeof window.feather === 'undefined' ) {
        return;
    }

    window.feather.replace();
}

$wnd.on( 'rui-ajax-loaded', () => {
    window.RootUI.initPluginFeather();
} );

export { initPluginFeather };
