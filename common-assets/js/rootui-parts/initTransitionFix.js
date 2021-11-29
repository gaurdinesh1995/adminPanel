import { $, $wnd, $body } from './_utility';

/*------------------------------------------------------------------

  Init Transition Fix

-------------------------------------------------------------------*/
function initTransitionFix() {
    let timer = 0;
    let isYayShowed = false;

    // check if yay opened.
    $wnd.on( 'init.yaybar', ( e ) => {
        const data = $( e.target ).data( 'yaybar' );
        const defaultShowYay = data.showYay;
        const defaultHideYay = data.hideYay;

        data.showYay = () => {
            isYayShowed = true;
            defaultShowYay.call( data );
        };
        data.hideYay = () => {
            isYayShowed = true;
            defaultHideYay.call( data );
        };
    } );

    $wnd.on( 'resize', () => {
        // if yay opened, we don't need to disable transitions.
        if ( isYayShowed ) {
            isYayShowed = false;
            return;
        }

        if ( timer ) {
            clearTimeout( timer );
            timer = null;
        } else {
            $body.addClass( 'rui-no-transition' );
        }

        timer = setTimeout( () => {
            $body.removeClass( 'rui-no-transition' );
            timer = null;
        }, 200 );
    } );

    $body.removeClass( 'rui-no-transition' );
}

export { initTransitionFix };
