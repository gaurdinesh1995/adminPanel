/**
 * App Settings
 */
const settings = {
    night_mode: false,
    spotlight_mode: false,
    show_section_lines: true,
    sidebar_dark: false,
    sidebar_static: false,
    sidebar_small: false,
    sidebar_effect: 'shrink',
    nav: true,
    nav_dark: false,
    nav_logo_path: require( '../common-assets/images/logo.svg' ),
    nav_logo_white_path: require( '../common-assets/images/logo-white.svg' ),
    nav_logo_width: '45px',
    nav_logo_url: '/',
    nav_align: 'left',
    nav_expand: 'lg',
    nav_sticky: true,
    nav_autohide: true,
    nav_container_fluid: true,
    home_url: '/',
    navigation: {
        // '#actions': {
        //     name: 'Actions',
        //     icon: 'layers',
        //     sub: {
        //         '#create-post': {
        //             name: 'Create Post',
        //             icon: 'plus-circle',
        //         },
        //         '#create-page': {
        //             name: 'Create Page',
        //             icon: 'plus-circle',
        //         },
        //         '#manage-users': {
        //             name: 'Manage Users',
        //             icon: 'users',
        //         },
        //         '#manage-sites': {
        //             name: 'Manage Sites',
        //             icon: 'sidebar',
        //             sub: {
        //                 '#my-site-1': {
        //                     name: 'My Site 1',
        //                 },
        //                 '#my-site-2': {
        //                     name: 'My Site 2',
        //                 },  
        //                 '#my-site-3': {
        //                     name: 'My Site 3',
        //                 },
        //             },
        //         },
        //     },
        // },
    },
    navigation_sidebar: {
        '/': {
            label: 'Get Started',
            name: 'Dashboard',
            icon: 'home',
        },

        // Apps
        // '/mailbox': {
        //     label: 'Apps',
        //     name: 'Mailbox',
        //     icon: 'send',
        // },
        // '/messenger': {
        //     name: 'Messenger',
        //     icon: 'message-circle',
        // },
        // '/calendar': {
        //     name: 'Calendar',
        //     icon: 'calendar',
        // },
        // '/project-management': {
        //     name: 'Project Management',
        //     icon: 'book',
        // },
        '/my-shops': {
            name: 'My Shops',
            icon: 'file',
        },
         '/shop': {
            name: 'FMCG Shop',
             icon: 'cart',
         },
        // '/profile': {
        //     name: 'Profile',
        //     icon: 'user',
        // },

        // // Content
        // '/grid': {
        //     label: 'Content',
        //     name: 'Grid',
        //     icon: 'grid',
        // },
        // '/colors': {
        //     name: 'Colors',
        //     icon: 'droplet',
        // },
        // '/typography': {
        //     name: 'Typography',
        //     icon: 'bold',
        // },
        // '/component-table': {
        //     name: 'Tables',
        //     icon: 'menu',
        // },

        // // Components Base
        // '/component-alert': {
        //     label: 'Components',
        //     name: 'Base',
        //     icon: 'layers',
        //     sub: {
        //         '/component-alert': {
        //             name: 'Alert',
        //         },
        //         '/component-badge': {
        //             name: 'Badge',
        //         },
        //         '/component-breadcrumbs': {
        //             name: 'Breadcrumbs',
        //         },
        //         '/component-button': {
        //             name: 'Button',
        //         },
        //         '/component-card': {
        //             name: 'Card',
        //         },
        //         '/component-carousel': {
        //             name: 'Carousel',
        //         },
        //         '/component-collapse': {
        //             name: 'Collapse',
        //         },
        //         '/component-dropdown': {
        //             name: 'Dropdown',
        //         },
        //         '/component-list-group': {
        //             name: 'List Group',
        //         },
        //         '/component-media-object': {
        //             name: 'Media Object',
        //         },
        //         '/component-modal': {
        //             name: 'Modal',
        //         },
        //         '/component-nav': {
        //             name: 'Nav',
        //         },
        //         '/component-pagination': {
        //             name: 'Pagination',
        //         },
        //         '/component-popover': {
        //             name: 'Popover',
        //         },
        //         '/component-progress': {
        //             name: 'Progress',
        //         },
        //         '/component-spinner': {
        //             name: 'Spinner',
        //         },
        //         '/component-tabs': {
        //             name: 'Tabs',
        //         },
        //     },
        // },

        // // Components Advanced.
        // '/component-icons-feather': {
        //     name: 'Advanced',
        //     icon: 'box',
        //     sub: {
        //         '/component-icons-feather': {
        //             name: 'Icons',
        //             sub: {
        //                 '/component-icons-feather': {
        //                     name: 'Feather',
        //                 },
        //                 '/component-icons-fontawesome': {
        //                     name: 'Font Awesome',
        //                 },
        //             },
        //         },
        //         '/component-charts-chartjs': {
        //             name: 'Charts',
        //             sub: {
        //                 '/component-charts-chartjs': {
        //                     name: 'Chart.js',
        //                 },
        //                 '/component-charts-chartist': {
        //                     name: 'Chartist',
        //                 },
        //                 '/component-charts-peity': {
        //                     name: 'Peity',
        //                 },
        //                 '/component-charts-echarts': {
        //                     name: 'eCharts',
        //                 },
        //                 '/component-charts-flot': {
        //                     name: 'Flot',
        //                 },
        //             },
        //         },
        //         '/component-timeline': {
        //             name: 'Timeline',
        //         },
        //         '/component-tree-view': {
        //             name: 'Tree View',
        //         },
        //         '/component-toast': {
        //             name: 'Toast',
        //         },
        //         '/component-sweet-alert': {
        //             name: 'Sweet Alert',
        //         },
        //         '/component-maps': {
        //             name: 'Maps',
        //         },
        //         '/component-data-tables': {
        //             name: 'Data Tables',
        //         },
        //     },
        // },

        // // Forms.
        // '/forms-base': {
        //     label: 'Forms',
        //     name: 'Base',
        //     icon: 'mail',
        // },
        // '/forms-datetime': {
        //     name: 'Advanced',
        //     icon: 'database',
        //     sub: {
        //         '/forms-datetime': {
        //             name: 'DateTime Picker',
        //         },
        //         '/forms-validation': {
        //             name: 'Validation',
        //         },
        //         '/forms-touch-spin': {
        //             name: 'Touch Spin',
        //         },
        //         '/forms-range-slider': {
        //             name: 'Range Slider',
        //         },
        //         '/forms-input-masks': {
        //             name: 'Input Masks',
        //         },
        //         '/forms-dropzone': {
        //             name: 'Dropzone',
        //         },
        //         '/forms-colorpicker': {
        //             name: 'Color Picker',
        //         },
        //         '/forms-select': {
        //             name: 'Select',
        //         },
        //         '/forms-markdown': {
        //             name: 'Markdown editor',
        //         },
        //         '/forms-wysiwyg': {
        //             name: 'WYSIWYG editor',
        //         },
        //     },
        // },
    },
    breadcrumbs_presets: {
        apps: {
            '/mailbox': 'Mailbox',
            '/messenger': 'Messenger',
            '/calendar': 'Calendar',
            '/project-management': 'Project Management',
            '/file-manager': 'File Manager',
            '/profile': 'Profile',
            '/shop': 'Shop',
        },
        content: {
            '/grid': 'Grid',
            '/colors': 'Colors',
            '/typography': 'Typography',
            '/component-table': 'Tables',
        },
        components_base: {
            '/component-alert': 'Alert',
            '/component-badge': 'Badge',
            '/component-breadcrumbs': 'Breadcrumbs',
            '/component-button': 'Button',
            '/component-card': 'Card',
            '/component-carousel': 'Carousel',
            '/component-collapse': 'Collapse',
            '/component-dropdown': 'Dropdown',
            '/component-list-group': 'List Group',
            '/component-media-object': 'Media Object',
            '/component-modal': 'Modal',
            '/component-nav': 'Nav',
            '/component-pagination': 'Pagination',
            '/component-popover': 'Popover',
            '/component-progress': 'Progress',
            '/component-spinner': 'Spinner',
            '/component-tabs': 'Tabs',
        },
        components_advanced: {
            '/component-icons-feather': 'Icons: Feather',
            '/component-icons-fontawesome': 'Icons: Font Awesome',
            '/component-charts-chartjs': 'Charts: Chart.js',
            '/component-charts-chartist': 'Charts: Chartist',
            '/component-charts-peity': 'Charts: Peity',
            '/component-charts-echarts': 'Charts: eCharts',
            '/component-charts-flot': 'Charts: Flot',
            '/component-timeline': 'Timeline',
            '/component-tree-view': 'Tree View',
            '/component-toast': 'Toast',
            '/component-sweet-alert': 'Sweet Alert',
            '/component-maps': 'Maps',
            '/component-data-tables': 'Data Tables',
        },
        forms_advanced: {
            '/forms-datetime': 'DateTime Picker',
            '/forms-validation': 'Validation',
            '/forms-touch-spin': 'Touch Spin',
            '/forms-range-slider': 'Range Slider',
            '/forms-input-masks': 'Input Masks',
            '/forms-dropzone': 'Dropzone',
            '/forms-colorpicker': 'Color Picker',
            '/forms-select': 'Select',
            '/forms-markdown': 'Markdown editor',
            '/forms-wysiwyg': 'WYSIWYG editor',
        },
    },
    img_country: {
        usa: require( '../common-assets/images/flags/united-states-of-america.svg' ),
        china: require( '../common-assets/images/flags/china.svg' ),
        germany: require( '../common-assets/images/flags/germany.svg' ),
        japan: require( '../common-assets/images/flags/japan.svg' ),
        spain: require( '../common-assets/images/flags/spain.svg' ),
        france: require( '../common-assets/images/flags/france.svg' ),
        canada: require( '../common-assets/images/flags/canada.svg' ),
        netherlands: require( '../common-assets/images/flags/netherlands.svg' ),
        italy: require( '../common-assets/images/flags/italy.svg' ),
        russia: require( '../common-assets/images/flags/russia.svg' ),
        czech_republic: require( '../common-assets/images/flags/czech-republic.svg' ),
    },
    img_file: {
        empty: require( '../common-assets/images/icon-empty.svg' ),
        zip: require( '../common-assets/images/icon-zip.svg' ),
        rar: require( '../common-assets/images/icon-rar.svg' ),
        html: require( '../common-assets/images/icon-html.svg' ),
        php: require( '../common-assets/images/icon-php.svg' ),
        css: require( '../common-assets/images/icon-css.svg' ),
        js: require( '../common-assets/images/icon-js.svg' ),
        doc: require( '../common-assets/images/icon-doc.svg' ),
        txt: require( '../common-assets/images/icon-txt.svg' ),
        pdf: require( '../common-assets/images/icon-pdf.svg' ),
        xls: require( '../common-assets/images/icon-xls.svg' ),
        png: require( '../common-assets/images/icon-png.svg' ),
        jpg: require( '../common-assets/images/icon-jpg.svg' ),
    },
    users: [
        {
            img: require( '../common-assets/images/avatar-1.png' ),
            img_profile: require( '../common-assets/images/avatar-1-profile.png' ),
            name: 'Jack Boyd',
        }, {
            img: require( '../common-assets/images/avatar-2.png' ),
            name: 'Helen Holt',
        }, {
            img: require( '../common-assets/images/avatar-3.png' ),
            name: 'Avice Harris',
        }, {
            img: require( '../common-assets/images/avatar-4.png' ),
            name: 'Anna Rice',
        }, {
            img: require( '../common-assets/images/avatar-5.png' ),
            name: 'Amber Smith',
        }, {
            img: require( '../common-assets/images/avatar-6.png' ),
            name: 'Mary Rose',
        },
    ],
    letters: [
        {
            img: require( '../common-assets/images/letter-1.png' ),
            img_min: require( '../common-assets/images/letter-1-min.png' ),
        }, {
            img: require( '../common-assets/images/letter-2.png' ),
            img_min: require( '../common-assets/images/letter-2-min.png' ),
        }, {
            img: require( '../common-assets/images/letter-3.png' ),
            img_min: require( '../common-assets/images/letter-3-min.png' ),
        }, {
            img: require( '../common-assets/images/letter-4.png' ),
            img_min: require( '../common-assets/images/letter-4-min.png' ),
        },
    ],
};

/* Parse GET variables to change initial settings */
const $_GET = {};
window.location.href.replace( /[?&]+([^=&]+)=([^&]*)/gi, ( a, name, value ) => {
    $_GET[ name ] = value;
} );

Object.keys( $_GET ).forEach( ( name ) => {
    const isTrue = $_GET[ name ] === '1';

    switch ( name ) {
    case 'setting-night-mode':
        settings.night_mode = isTrue;
        break;
    case 'setting-show-section-lines':
        settings.show_section_lines = isTrue;
        break;
    case 'setting-sidebar-small':
        settings.sidebar_small = isTrue;
        break;
    case 'setting-sidebar-dark':
        settings.sidebar_dark = isTrue;
        break;
    case 'setting-nav-dark':
        settings.nav_dark = isTrue;
        break;
    // no default
    }
} );

export default settings;
