/**
 * Styles
 */
import 'overlayscrollbars/css/OverlayScrollbars.min.css';

/**
 * External Dependencies
 */
import 'overlayscrollbars';

import feather from 'feather-icons';

/**
 * Internal Dependencies
 */
import {
    throttleScroll,
} from '../common-assets/js/rootui-parts/_utility';
import { initPluginOverlayScrollbars } from '../common-assets/js/rootui-parts/initPluginOverlayScrollbars';
import { initTransitionFix } from '../common-assets/js/rootui-parts/initTransitionFix';

// Utils.
window.RootUI.throttleScroll = throttleScroll;

// Feather.
window.RootUI.initPluginFeather = () => {
    feather.replace();
};

// Night Mode.
window.RootUI.isNightMode = () => false;

// Night Mode.
window.RootUI.initPluginOverlayScrollbars = initPluginOverlayScrollbars;

// Transition Fix.
window.RootUI.initTransitionFix = initTransitionFix;

// Init.
window.RootUI.init = function() {
    this.initTransitionFix();
};
window.RootUI.init();
