/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import AsyncComponent from '../../components/async-component';
import PageWrap from '../../components/page-wrap';
import PageTitle from '../../components/page-title';
import PageContent from '../../components/page-content';

/**
 * Component
 */
class ComponentButtonPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Components',
                        '/component-alert/': {
                            title: 'Base',
                            sub: 'components_base',
                        },
                    } }
                >
                    <h1>Button</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#btnBase',
                            title: 'Base',
                        }, {
                            to: '#btnOutline',
                            title: 'Outline',
                        }, {
                            to: '#btnGrey',
                            title: 'Grey',
                        }, {
                            to: '#btnIcon',
                            title: 'Icon',
                        }, {
                            to: '#btnRound',
                            title: 'Round, long and uniform',
                        }, {
                            to: '#btnLarge',
                            title: 'Large',
                        }, {
                            to: '#btnSmall',
                            title: 'Small',
                        }, {
                            to: '#btnHover',
                            title: 'Hover',
                            sub: [
                                {
                                    to: '#btnHover',
                                    title: 'Outline',
                                }, {
                                    to: '#btnCustom',
                                    title: 'Custom round',
                                }, {
                                    to: '#btnColors',
                                    title: 'Colors',
                                },
                            ],
                        }, {
                            to: '#btnGroup',
                            title: 'Group',
                        }, {
                            to: '#btnActive',
                            title: 'Active',
                        }, {
                            to: '#btnDisabled',
                            title: 'Disabled',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentButtonPage;
